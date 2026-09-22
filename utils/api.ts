// Mock API client.
//
// Real backend is planned at https://api.pixelsigns.art — for now this module
// simulates the server-side endpoint entirely on the frontend. When the real
// API is online, swap the implementation in this single file: replace the
// local mock body with a $fetch(`${apiBaseUrl}/naturalness`, { method: 'POST', body: req })
// and keep the same response shape.
//
// Design goals:
//   - Same request/response contract as the eventual real endpoint.
//   - Produces plausible output for any user input, with deterministic-looking
//     special handling for canonical examples mentioned in the docs.
//   - Simulates a realistic ~600-1500ms latency so the UI can render its
//     loading + skeleton states.
//   - Does NOT call the real network on every keystroke.

import type {
  ContextType,
  NaturalnessLabel,
  NaturalnessRequest,
  NaturalnessResponse,
  NaturalnessResult,
  Tone,
} from '~/types/naturalness'
import type {
  CefrBand,
  LevelDimension,
  LevelImprovement,
  LevelPlanDay,
  LevelRequest,
  LevelResponse,
  LevelResult,
} from '~/types/level'
import type {
  PromptDimensionKey,
  PromptIssue,
  PromptRequest,
  PromptResponse,
  PromptResult,
  PromptTargetModel,
} from '~/types/prompt'
import { TARGET_MODEL_LABELS } from '~/types/prompt'

const DEFAULT_API_BASE_URL = 'https://api.pixelsigns.art'

let cachedApiBaseUrl: string | null = null
export function getApiBaseUrl(): string {
  if (cachedApiBaseUrl !== null) return cachedApiBaseUrl
  try {
    const cfg = useRuntimeConfig()
    cachedApiBaseUrl = (cfg.public?.apiBaseUrl as string | undefined) || DEFAULT_API_BASE_URL
  } catch {
    cachedApiBaseUrl = DEFAULT_API_BASE_URL
  }
  return cachedApiBaseUrl
}

const isBrowser = () => typeof window !== 'undefined'

function generateRequestId(): string {
  return 'req_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4)
}

function countWords(text: string): number {
  const trimmed = text.trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

// ─────────────────────────────────────────────────────────
//                Canonical example matchers
//   For well-known "ESL" sentences we return the documented
//   example so users immediately see what the tool is for.
// ─────────────────────────────────────────────────────────

interface CanonicalExample {
  match: (lower: string) => boolean
  build: (req: NaturalnessRequest) => NaturalnessResult
}

const CANONICAL_EXAMPLES: CanonicalExample[] = [
  {
    match: (l) => l.includes('i very like'),
    build: () => ({
      naturalness_score: 62,
      label: 'understandable_but_unnatural',
      grammar_status: 'mostly_correct',
      original: 'I very like this movie.',
      natural_version: 'I really like this movie.',
      alternative: 'I really enjoyed this movie.',
      explanation:
        '"Very" usually modifies adjectives or adverbs. With verbs like "like", English speakers more commonly use "really".',
      tone: 'casual',
      context_fit: 'appropriate',
      patterns: [
        {
          rule: 'Use "really" rather than "very" to intensify many common verbs.',
          good_example: 'I really like this movie.',
          bad_example: 'I very like this movie.',
        },
      ],
      practice: {
        prompt: 'Rewrite naturally: "I very want to go there."',
        hint: 'Which adverb naturally modifies "want"?',
      },
    }),
  },
  {
    match: (l) => l.includes('i made a photo') || l.includes('i made a picture'),
    build: () => ({
      naturalness_score: 55,
      label: 'understandable_but_unnatural',
      grammar_status: 'mostly_correct',
      original: 'I made a photo.',
      natural_version: 'I took a photo.',
      alternative: 'I took a picture.',
      explanation:
        'For photography, English speakers usually pair the verb "take" with "photo" / "picture". "Make a photo" is a direct translation pattern that sounds unnatural.',
      tone: 'casual',
      context_fit: 'appropriate',
      patterns: [
        {
          rule: 'Collocations: take a photo, take a picture, take a selfie.',
          good_example: 'I took a photo of the sunset.',
          bad_example: 'I made a photo of the sunset.',
        },
      ],
      practice: {
        prompt: 'Rewrite naturally: "Yesterday I made many photos in the park."',
        hint: 'Think about the natural verb that pairs with "photos".',
      },
    }),
  },
  {
    match: (l) => l.includes('discuss about') || l.includes('discuss about it'),
    build: () => ({
      naturalness_score: 48,
      label: 'awkward',
      grammar_status: 'has_errors',
      original: "Let's discuss about it.",
      natural_version: "Let's discuss it.",
      alternative: "Let's talk about it.",
      explanation:
        '"Discuss" is a transitive verb in English — it takes a direct object. You don\'t need "about" after it. ("Talk" does take "about".)',
      tone: 'neutral',
      context_fit: 'appropriate',
      patterns: [
        {
          rule: '"Discuss" already includes the topic. "Talk" needs "about".',
          good_example: "Let's discuss the plan.",
          bad_example: "Let's discuss about the plan.",
        },
      ],
      practice: {
        prompt: 'Rewrite naturally: "Can we discuss about your project tomorrow?"',
        hint: 'Which verb needs "about", and which does not?',
      },
    }),
  },
  {
    match: (l) => l.includes('i have 25 years') || l.includes('i am 25 years'),
    build: () => ({
      naturalness_score: 50,
      label: 'awkward',
      grammar_status: 'has_errors',
      original: 'I have 25 years.',
      natural_version: "I'm 25 years old.",
      alternative: "I'm 25.",
      explanation:
        'To express age in English, use the structure "be + number + years old". Saying "I have 25 years" is a literal translation from many other languages.',
      tone: 'neutral',
      context_fit: 'appropriate',
      patterns: [
        {
          rule: 'Age: "I am 25 years old" / "I am 25" — NOT "I have 25 years".',
          good_example: "I'm 25 years old.",
          bad_example: 'I have 25 years.',
        },
      ],
      practice: {
        prompt: 'Rewrite naturally: "My father has 60 years."',
        hint: 'Switch from "have" to the verb used with age.',
      },
    }),
  },
  {
    match: (l) => l.includes('mother tongue') || l.includes('my mother tongue is'),
    build: () => ({
      naturalness_score: 88,
      label: 'natural',
      grammar_status: 'correct',
      original: 'My mother tongue is English, but I also speak Spanish.',
      natural_version: 'My mother tongue is English, but I also speak Spanish.',
      alternative: null,
      explanation: 'No change needed. "Mother tongue" is a natural, common expression.',
      tone: 'neutral',
      context_fit: 'appropriate',
      patterns: [],
    }),
  },
]

function findCanonical(req: NaturalnessRequest): NaturalnessResult | null {
  const lower = req.text.trim().toLowerCase()
  for (const ex of CANONICAL_EXAMPLES) {
    if (ex.match(lower)) return ex.build(req)
  }
  return null
}

// ─────────────────────────────────────────────────────────
//                Heuristic mock generator
// ─────────────────────────────────────────────────────────

const GENERIC_REWRITES: Array<{ from: RegExp; to: string; reason: string; pattern: { good: string; bad: string; rule: string } }> = [
  {
    from: /\b(make|do)\s+(a\s+)?decision\b/i,
    to: 'make a decision',
    reason: '"Make a decision" is the standard collocation. "Do a decision" is sometimes used, but "make" is more natural.',
    pattern: {
      good: 'I need to make a decision by Friday.',
      bad: 'I need to do a decision by Friday.',
      rule: 'Collocations: make a decision (not "do a decision").',
    },
  },
  {
    from: /\b(make|do|give)\s+(an?\s+)?advice\b/i,
    to: 'give advice / offer advice',
    reason: 'In English the noun "advice" is uncountable. We say "give advice" or "offer advice", not "make an advice".',
    pattern: {
      good: 'Could you give me some advice?',
      bad: 'Could you make me an advice?',
      rule: 'Noun: "advice" (uncountable) — paired with "give" / "offer".',
    },
  },
  {
    from: /\binformations?\b/i,
    to: 'information',
    reason: '"Information" is uncountable in English. The plural "informations" is a translation pattern.',
    pattern: {
      good: 'I need more information about the flight.',
      bad: 'I need more informations about the flight.',
      rule: '"Information" is uncountable — no plural form.',
    },
  },
  {
    from: /\bdiscuss about\b/i,
    to: 'discuss',
    reason: '"Discuss" already takes its topic directly; "about" is not needed. ("Talk about" does need "about".)',
    pattern: {
      good: "Let's discuss the plan.",
      bad: "Let's discuss about the plan.",
      rule: 'Discuss takes a direct object — no preposition needed.',
    },
  },
]

function detectUnnaturalPhrase(text: string): { from: RegExp; to: string; reason: string; pattern: { good: string; bad: string; rule: string } } | null {
  for (const r of GENERIC_REWRITES) {
    if (r.from.test(text)) return r
  }
  return null
}

function pseudoRandom(seed: string): number {
  // Deterministic 0..1 from string for repeatable mock output
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 10_000) / 10_000
}

function pickTone(context: ContextType, original: string): Tone {
  if (context === 'work_email' || context === 'academic') return 'professional'
  if (context === 'casual' || context === 'chat') return 'casual'
  if (context === 'social') return 'friendly'
  // general: try to infer from punctuation / caps
  if (/!$/.test(original.trim())) return 'friendly'
  if (/[A-Z]{3,}/.test(original)) return 'casual'
  return 'neutral'
}

function buildMockResult(req: NaturalnessRequest): NaturalnessResult {
  const text = req.text.trim()
  const wordCount = countWords(text)
  const seed = `${req.context}::${text}`
  const rnd = pseudoRandom(seed)

  const phraseHit = detectUnnaturalPhrase(text)

  if (phraseHit) {
    const cleaned = text.replace(phraseHit.from, phraseHit.to)
    return {
      naturalness_score: 56,
      label: 'understandable_but_unnatural' as NaturalnessLabel,
      grammar_status: 'mostly_correct',
      original: text,
      natural_version: cleaned,
      alternative: phraseHit.from.source.includes('discuss') ? "Let's talk about it." : null,
      explanation: phraseHit.reason,
      tone: pickTone(req.context, text),
      context_fit: 'appropriate',
      patterns: [
        {
          rule: phraseHit.pattern.rule,
          good_example: phraseHit.pattern.good,
          bad_example: phraseHit.pattern.bad,
        },
      ],
      practice: {
        prompt: 'Rewrite using the pattern you just learned in your own sentence.',
        hint: phraseHit.pattern.good,
      },
    }
  }

  // Otherwise, vary the response by length + random bucket.
  if (wordCount <= 4) {
    return {
      naturalness_score: 80,
      label: 'mostly_natural' as NaturalnessLabel,
      grammar_status: 'mostly_correct',
      original: text,
      natural_version: text,
      alternative: null,
      explanation:
        wordCount < 3
          ? 'Try a longer sentence — at least 3 words — so the checker can analyze phrasing and word choice.'
          : 'Very short fragments are hard to evaluate for naturalness. Add a little more context for better feedback.',
      tone: pickTone(req.context, text),
      context_fit: 'too_short',
      patterns: [],
    }
  }

  // Two buckets: "looks fine" and "could be slightly more natural".
  const looksNatural = rnd > 0.55
  const score = looksNatural ? 84 + Math.floor(rnd * 12) : 60 + Math.floor(rnd * 18)
  const label: NaturalnessLabel = looksNatural ? 'natural' : 'mostly_natural'
  const grammar: 'correct' | 'mostly_correct' = looksNatural ? 'correct' : 'mostly_correct'

  return {
    naturalness_score: Math.min(99, Math.max(0, score)),
    label,
    grammar_status: grammar,
    original: text,
    natural_version: text,
    alternative: null,
    explanation: looksNatural
      ? 'Reads naturally in this context. No rewriting needed.'
      : 'Reads well overall. You could experiment with slight tweaks to phrasing or register, but the current version is clear.',
    tone: pickTone(req.context, text),
    context_fit: 'appropriate',
    patterns: [],
  }
}

async function simulateLatency(request: NaturalnessRequest): Promise<void> {
  if (!isBrowser()) {
    // On SSR we resolve immediately (never used since the tool only fires in browser).
    return
  }
  const wordCount = countWords(request.text)
  const base = 600 + Math.min(900, wordCount * 35)
  const jitter = Math.random() * 250
  await new Promise<void>((resolve) => setTimeout(resolve, base + jitter))
}

// ─────────────────────────────────────────────────────────
//                Public API surface
// ─────────────────────────────────────────────────────────

export const api = {
  /**
   * POST /naturalness
   *
   * When the real API at api.pixelsigns.art is online, replace this body with:
   *
   *   return await $fetch<NaturalnessResponse>(`${getApiBaseUrl()}/naturalness`, {
   *     method: 'POST',
   *     body: request,
   *   })
   */
  async checkNaturalness(request: NaturalnessRequest): Promise<NaturalnessResponse> {
    // Lightweight client-side validation so the UI can fail fast.
    const text = request.text.trim()
    if (text.length < 3) {
      throw new Error('Please enter at least 3 words.')
    }
    if (countWords(text) > 500) {
      throw new Error('Please keep your text under 500 words.')
    }

    await simulateLatency(request)

    const canonical = findCanonical(request)
    const result = canonical ?? buildMockResult(request)

    return {
      request_id: generateRequestId(),
      result,
      cached: canonical !== null,
    }
  },

  /**
   * POST /level
   *
   * Estimates the writer's CEFR range from a 100-500 word writing sample.
   * Returns per-dimension sub-scores, evidence, top improvements, and a
   * 7-day starter plan. All mocked locally for now.
   */
  async checkLevel(request: LevelRequest): Promise<LevelResponse> {
    const text = request.text.trim()
    const wc = countWords(text)
    if (wc < 60) {
      throw new Error('Please paste at least 60 words so the checker can give a meaningful estimate.')
    }
    if (wc > 700) {
      throw new Error('Please keep your text under 700 words for the MVP.')
    }

    await simulateLatency({ text, context: 'general' })

    const result = buildMockLevelResult(text, request.goal ?? 'general')

    return {
      request_id: generateRequestId(),
      result,
      cached: false,
    }
  },

  /**
   * POST /prompt-doctor
   *
   * Scores a raw prompt on goal / context / audience / constraints / output
   * format / examples / tone and produces an improved rewrite.
   */
  async checkPrompt(request: PromptRequest): Promise<PromptResponse> {
    const text = request.text.trim()
    if (text.length < 10) {
      throw new Error('Please paste at least a sentence.')
    }
    if (text.length > 4000) {
      throw new Error('Please keep your prompt under 4000 characters.')
    }

    await simulateLatency({ text, context: 'general' })

    const result = buildMockPromptResult(text, request.target_model ?? 'general')

    return {
      request_id: generateRequestId(),
      result,
      cached: false,
    }
  },
}

export type ApiClient = typeof api

// ─────────────────────────────────────────────────────────
//              Level Checker mock generator
// ─────────────────────────────────────────────────────────

const LEVEL_BANDS: CefrBand[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const LEVEL_DIMENSION_KEYS = [
  { key: 'grammar', label: 'Grammar' },
  { key: 'vocabulary', label: 'Vocabulary' },
  { key: 'sentence_variety', label: 'Sentence variety' },
  { key: 'clarity', label: 'Clarity' },
  { key: 'coherence', label: 'Coherence' },
] as const

function bandToScore(band: CefrBand, jitter: number): number {
  const order = LEVEL_BANDS.indexOf(band)
  // Each band roughly maps to a 16-point range; jitter adds ±3
  return Math.max(0, Math.min(100, order * 16 + 6 + Math.round(jitter * 6)))
}

function avgBand(bands: CefrBand[]): CefrBand {
  if (bands.length === 0) return 'A2'
  const sum = bands.reduce((s, b) => s + LEVEL_BANDS.indexOf(b), 0)
  const mid = Math.round(sum / bands.length)
  return LEVEL_BANDS[Math.max(0, Math.min(LEVEL_BANDS.length - 1, mid))]
}

function buildMockLevelResult(text: string, goal: string): LevelResult {
  const lc = text.toLowerCase()
  const wc = countWords(text)
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0)
  const sentenceCount = Math.max(1, sentences.length)

  // Type-token ratio (vocabulary diversity)
  const tokens = text.toLowerCase().match(/[a-z'\-]+/g) ?? []
  const unique = new Set(tokens)
  const ttr = unique.size / Math.max(1, tokens.length)

  // Average word length
  const avgWordLen = tokens.length === 0 ? 0 : tokens.reduce((s, t) => s + t.length, 0) / tokens.length

  // Detect common lower-level patterns
  const lowPatterns = [
    /\bi am agree\b/,
    /\bmake\s+a\s+research\b/,
    /\bdiscuss about\b/,
    /\bi have \d+\s+years\b/,
    /\bvery\s+much\s+like\b/,
    /\binformations\b/,
    /\bmake an advice\b/,
  ]
  const lowHits = lowPatterns.reduce((n, re) => n + (re.test(lc) ? 1 : 0), 0)

  // Detect signals of higher-level writing
  const highPatterns = [
    /\bhowever,?\b/,
    /\btherefore,?\b/,
    /\bfurthermore,?\b/,
    /\bin contrast\b/,
    /\bon the other hand\b/,
    /\bas a result\b/,
    /\bconsequently\b/,
  ]
  const highHits = highPatterns.reduce((n, re) => n + (re.test(lc) ? 1 : 0), 0)

  // Seeded jitter so the same text yields the same bands.
  const seed = pseudoRandom(text + '::' + goal)
  const j0 = seed
  const j1 = pseudoRandom(text + '::' + goal + '::vocab')
  const j2 = pseudoRandom(text + '::' + goal + '::sent')
  const j3 = pseudoRandom(text + '::' + goal + '::clarity')
  const j4 = pseudoRandom(text + '::' + goal + '::coherence')

  // Base level: from sample size + complexity
  let baseIdx = 1
  if (wc >= 180) baseIdx += 1
  if (wc >= 320) baseIdx += 1
  if (avgWordLen >= 4.4) baseIdx += 1
  if (avgWordLen >= 5.1) baseIdx += 1
  if (ttr >= 0.45) baseIdx += 1
  if (ttr >= 0.6) baseIdx += 1
  if (highHits >= 2) baseIdx += 1
  if (sentenceCount >= 25 && Math.max(...sentences.map((s) => countWords(s))) >= 18) baseIdx += 1
  if (lowHits >= 1) baseIdx -= 1
  if (lowHits >= 3) baseIdx -= 1
  if (wc < 100) baseIdx -= 1
  baseIdx = Math.max(0, Math.min(LEVEL_BANDS.length - 1, baseIdx))

  // Per-dimension bands: jitter ±1 from base
  const dimensionBands: CefrBand[] = []
  const dimensions: LevelDimension[] = LEVEL_DIMENSION_KEYS.map((d, i) => {
    const noise = [j0, j1, j2, j3, j4][i] - 0.5
    const idx = Math.max(0, Math.min(LEVEL_BANDS.length - 1, baseIdx + Math.round(noise * 1.6)))
    const band = LEVEL_BANDS[idx]
    dimensionBands.push(band)
    const score = bandToScore(band, [j0, j1, j2, j3, j4][i])
    const note =
      band === 'A1' || band === 'A2'
        ? `${d.label.toLowerCase()} relies on a narrow set of forms. Expanding it will move you up quickly.`
        : band === 'B1' || band === 'B2'
          ? `${d.label.toLowerCase()} is workable in everyday situations but not yet nuanced.`
          : `${d.label.toLowerCase()} handles complex cases; small refinements remain possible.`
    return {
      key: d.key,
      label: d.label,
      band,
      score,
      note,
    }
  })

  const overall = avgBand(dimensionBands)
  const overallScore = bandToScore(overall, (j0 + j1 + j2 + j3 + j4) / 5)

  // Find the 3 lowest-scoring dimensions for the improvement list.
  const sortedDims = [...dimensions].sort((a, b) => a.score - b.score)
  const improvementMap: Record<string, Omit<LevelImprovement, 'rank'>> = {
    grammar: {
      title: 'Tighten grammar on common patterns',
      advice:
        'Practice the small set of structures you keep missing (articles, prepositions, verb forms). One exercise per day for a week is more effective than a long weekly session.',
    },
    vocabulary: {
      title: 'Replace frequent words with more precise ones',
      advice:
        'Keep a note of the first five words you reach for ("good", "big", "important"). Aim to substitute two of them with more specific alternatives in each piece of writing this week.',
    },
    sentence_variety: {
      title: 'Mix short and long sentences',
      advice:
        'Try writing three short sentences followed by one longer, more complex one. Read each paragraph aloud — variety should be audible, not just visible.',
    },
    clarity: {
      title: 'Cut filler and vague phrases',
      advice:
        'Highlight every phrase that does not change meaning ("I think that", "actually", "kind of"). Remove or replace at least five per text.',
    },
    coherence: {
      title: 'Make the link between sentences visible',
      advice:
        'Add explicit connectors ("however", "as a result", "in contrast") once per paragraph and check whether each paragraph begins with a clear topic sentence.',
    },
  }
  const improvements: LevelImprovement[] = sortedDims.slice(0, 3).map((d, i) => ({
    rank: i + 1,
    ...improvementMap[d.key],
  }))

  // Build a 7-day starter plan biased toward the lowest dimension.
  const focusKey = sortedDims[0]?.key ?? 'grammar'
  const focusLabel =
    LEVEL_DIMENSION_KEYS.find((d) => d.key === focusKey)?.label ?? 'Grammar'
  const weekly_plan: LevelPlanDay[] = [
    { day: 'Day 1', minutes: 20, focus: 'Diagnostic', exercise: 'Re-read your sample and underline every structure you were unsure about.' },
    { day: 'Day 2', minutes: 20, focus: focusLabel, exercise: 'Do one short targeted drill (article choice, connector, sentence combining).' },
    { day: 'Day 3', minutes: 25, focus: 'Reading', exercise: 'Read one short article (~300 words) and copy 5 sentences you like.' },
    { day: 'Day 4', minutes: 20, focus: focusLabel, exercise: 'Rewrite the worst paragraph of your original sample using the new pattern.' },
    { day: 'Day 5', minutes: 15, focus: 'Vocabulary', exercise: 'Pick 10 words from your sample and build one example sentence for each.' },
    { day: 'Day 6', minutes: 25, focus: 'Writing', exercise: 'Write a new 100-word text on the same topic. Aim for the patterns from the previous day.' },
    { day: 'Day 7', minutes: 15, focus: 'Review', exercise: 'Re-check your Day-6 text with this same checker. Compare scores.' },
  ]

  // Confidence depends on input length and variety
  const confidence: 'Low' | 'Medium' | 'High' =
    wc < 120 || sentenceCount < 4 ? 'Low' : wc < 220 ? 'Medium' : 'High'

  const evidence: string[] = []
  if (lowHits > 0) evidence.push(`${lowHits} common lower-level pattern${lowHits > 1 ? 's' : ''} detected in the sample.`)
  if (highHits > 0) evidence.push(`${highHits} upper-level connector${highHits > 1 ? 's' : ''} found in the sample.`)
  if (ttr >= 0.5) evidence.push(`Vocabulary diversity is high (${Math.round(ttr * 100)}% unique tokens).`)
  if (ttr < 0.35) evidence.push(`Vocabulary diversity is low (${Math.round(ttr * 100)}% unique tokens).`)
  if (sentenceCount < 4) evidence.push('Only a few sentences — a longer sample would give a more reliable estimate.')
  if (evidence.length === 0) evidence.push('No strong signals either way; estimate is based on overall sentence complexity and word choice.')

  return {
    estimated_band: overall,
    alt_bands: Array.from(new Set([overall, ...dimensionBands])),
    dimensions,
    overall_score: overallScore,
    confidence,
    evidence,
    improvements,
    weekly_plan,
  }
}

// ─────────────────────────────────────────────────────────
//              Prompt Doctor mock generator
// ─────────────────────────────────────────────────────────

const PROMPT_DIMENSION_KEYS: { key: PromptDimensionKey; label: string; hints: RegExp[]; goodHint: string }[] = [
  {
    key: 'goal',
    label: 'Goal',
    hints: [/\b(write|generate|create|list|explain|translate|summarise|summarize|analy[sz]e|compare)\b/i],
    goodHint: 'Use a verb that says what the model should do (write, generate, list, summarise).',
  },
  {
    key: 'context',
    label: 'Context',
    hints: [/^(?!.*\b(about|on|for|because|since|context)\b)/i],
    goodHint: 'Add a sentence that frames the situation, audience background, or what the input is.',
  },
  {
    key: 'audience',
    label: 'Audience',
    hints: [/\b(for (a|an|the) (beginner|expert|child|student|developer|manager|marketer|engineer|team|client|customer|teacher|reader|audience))\b/i],
    goodHint: 'Tell the model who the output is for (e.g. "for a non-technical manager", "for a B2 learner").',
  },
  {
    key: 'constraints',
    label: 'Constraints',
    hints: [/\b(no more than|at most|at least|under \d+|in \d+ (words|sentences|paragraphs|bullets)|keep (it|the) (short|brief|simple))\b/i],
    goodHint: 'Add length, scope or tone limits (e.g. "max 5 bullets", "no more than 120 words").',
  },
  {
    key: 'output_format',
    label: 'Output format',
    hints: [/\b(as (a|an) (list|table|json|markdown|bullet|email|paragraph)|return|output|format( it)? (as|to))\b/i],
    goodHint: 'Specify the format you want (e.g. "Return as 3 sections: …", "Output JSON with keys …").',
  },
  {
    key: 'examples',
    label: 'Examples',
    hints: [/\b(e\.g\.?|for example|example:|like this:|such as)\b/i],
    goodHint: 'Add one example of the kind of answer you want — even a short one dramatically improves quality.',
  },
  {
    key: 'tone',
    label: 'Tone',
    hints: [/\b(formal|casual|friendly|professional|playful|witty|serious|warm|concise|polite|neutral|direct)\b/i],
    goodHint: 'Pick a tone ("professional", "friendly", "concise") so the model matches your voice.',
  },
]

const PROMPT_ISSUES_BY_DIM: Record<PromptDimensionKey, PromptIssueTemplate[]> = {
  goal: [
    { title: 'Goal is implicit', fix: 'State the goal as the first sentence.', example: '"Write a 200-word product description for …"' },
  ],
  context: [
    { title: 'No background provided', fix: 'Add one sentence of context: who, what, when, why.' },
  ],
  audience: [
    { title: 'Audience not specified', fix: 'Name the audience explicitly.', example: '"…written for a non-technical manager."' },
  ],
  constraints: [
    { title: 'No length or scope limit', fix: 'Add a short constraint at the end.', example: '"Keep it under 5 bullets and 120 words."' },
  ],
  output_format: [
    { title: 'Format is unclear', fix: 'Describe the exact format you want.', example: '"Return as a markdown table with columns: …"' },
  ],
  examples: [
    { title: 'No example provided', fix: 'Include at least one example of the kind of output you expect.', example: 'e.g. "For example: \'The Q3 forecast is …\'"' },
  ],
  tone: [
    { title: 'Tone not specified', fix: 'Pick one tone word (concise / friendly / formal / professional).' },
  ],
}

interface PromptIssueTemplate {
  title: string
  fix: string
  example?: string
}

function scoreDimension(text: string, dimension: { key: PromptDimensionKey; hints: RegExp[] }): { score: number; note: string } {
  const hits = dimension.hints.reduce((n, re) => n + (re.test(text) ? 1 : 0), 0)
  if (hits >= 1) return { score: 8 + Math.min(2, hits), note: 'Present in the prompt.' }
  if (text.length > 220) return { score: 4, note: 'Possible, but no clear signal detected.' }
  return { score: 2, note: 'Not detected — consider adding it explicitly.' }
}

function buildMockPromptResult(text: string, target: PromptTargetModel): PromptResult {
  const dims = PROMPT_DIMENSION_KEYS.map((d) => {
    const { score, note } = scoreDimension(text, d)
    return { key: d.key, label: d.label, score, note }
  })

  const issues: PromptIssue[] = []
  for (const d of dims) {
    if (d.score < 7) {
      const tpl = PROMPT_ISSUES_BY_DIM[d.key][0]
      issues.push({ title: tpl.title, fix: tpl.fix, example: tpl.example })
    }
  }

  // Build improved prompt
  const lines: string[] = [text.trim()]
  if (!dims.find((d) => d.key === 'goal') || dims.find((d) => d.key === 'goal')!.score < 7) {
    lines.push('Goal: …')
  }
  if (!dims.find((d) => d.key === 'audience') || dims.find((d) => d.key === 'audience')!.score < 7) {
    lines.push('Audience: …')
  }
  if (!dims.find((d) => d.key === 'constraints') || dims.find((d) => d.key === 'constraints')!.score < 7) {
    lines.push('Constraints: keep it under … words / … bullets.')
  }
  if (!dims.find((d) => d.key === 'output_format') || dims.find((d) => d.key === 'output_format')!.score < 7) {
    lines.push('Output format: return as …')
  }
  if (!dims.find((d) => d.key === 'tone') || dims.find((d) => d.key === 'tone')!.score < 7) {
    lines.push('Tone: …')
  }
  const improved_prompt = lines.join('\n')

  const avg = dims.reduce((s, d) => s + d.score, 0) / dims.length
  const health_score = Math.round(avg * 10)

  let model_tip: string | undefined
  if (target === 'claude') {
    model_tip = 'Claude usually benefits from explicit XML-style tags for sections ("<context>…</context>") and from being told to "think step by step" for hard problems.'
  } else if (target === 'chatgpt') {
    model_tip = 'ChatGPT responds well to role prompts ("You are a …") and to "formatting as a numbered list" requests.'
  } else if (target === 'gemini') {
    model_tip = 'Gemini tends to follow structured instructions precisely; pair the goal with an explicit output schema.'
  }

  const follow_up =
    target === 'general'
      ? undefined
      : `Want this rewritten with explicit ${TARGET_MODEL_LABELS[target]} conventions?`

  return {
    health_score,
    dimensions: dims,
    issues: issues.slice(0, 4),
    improved_prompt,
    rationale:
      issues.length === 0
        ? 'Your prompt covers the essentials. Consider tightening the goal or adding an example for even better results.'
        : `Your prompt is missing or vague on ${issues.length} dimension${issues.length > 1 ? 's' : ''}. The rewrite above adds placeholders you can fill in.`,
    follow_up,
    model_tip,
  }
}
