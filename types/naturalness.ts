// Shared types for the English Naturalness Checker.
// Mirrors the JSON contract that api.pixelsigns.art will eventually return.

export type ContextType =
  | 'general'
  | 'casual'
  | 'work_email'
  | 'academic'
  | 'social'
  | 'chat'

export type NaturalnessLabel =
  | 'natural'
  | 'mostly_natural'
  | 'understandable_but_unnatural'
  | 'awkward'
  | 'needs_revision'

export type GrammarStatus = 'correct' | 'mostly_correct' | 'has_errors'

export type Tone =
  | 'neutral'
  | 'casual'
  | 'formal'
  | 'friendly'
  | 'polite'
  | 'professional'
  | 'academic'

export type Variant = 'general' | 'american' | 'british'

export interface NaturalnessPattern {
  rule: string
  good_example: string
  bad_example: string
}

export interface NaturalnessPractice {
  prompt: string
  hint: string
}

export interface NaturalnessResult {
  naturalness_score: number
  label: NaturalnessLabel
  grammar_status: GrammarStatus
  original: string
  natural_version: string
  alternative: string | null
  explanation: string
  tone: Tone
  context_fit: string
  patterns: NaturalnessPattern[]
  practice?: NaturalnessPractice
}

export interface NaturalnessRequest {
  text: string
  context: ContextType
  variant?: Variant
}

export interface NaturalnessResponse {
  request_id: string
  result: NaturalnessResult
  cached?: boolean
}

export const CONTEXT_LABELS: Record<ContextType, string> = {
  general: 'General',
  casual: 'Casual conversation',
  work_email: 'Work / Email',
  academic: 'Academic',
  social: 'Social media',
  chat: 'Chat / Messaging',
}

export const LABEL_LABELS: Record<NaturalnessLabel, string> = {
  natural: 'Natural',
  mostly_natural: 'Mostly natural',
  understandable_but_unnatural: 'Understandable, but unnatural',
  awkward: 'Awkward',
  needs_revision: 'Needs revision',
}

export const LABEL_DESCRIPTIONS: Record<NaturalnessLabel, string> = {
  natural: 'Sounds like fluent English.',
  mostly_natural: 'Sounds good. Minor tweaks may be possible.',
  understandable_but_unnatural: 'Understood, but a native speaker would usually phrase it differently.',
  awkward: 'Awkward phrasing. Consider rewriting.',
  needs_revision: 'Significant wording or grammar issues.',
}

export const TONE_LABELS: Record<Tone, string> = {
  neutral: 'Neutral',
  casual: 'Casual',
  formal: 'Formal',
  friendly: 'Friendly',
  polite: 'Polite',
  professional: 'Professional',
  academic: 'Academic',
}
