// Shared types for the AI English Level Checker.
// Mirrors the JSON contract that api.pixelsigns.art will eventually return.

export type LevelGoal =
  | 'general'
  | 'study'
  | 'work'
  | 'travel'
  | 'exam_prep'

export type CefrBand = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface LevelSubScore {
  band: CefrBand
  /** 0..100 numeric reading, kept consistent with the band */
  score: number
}

export interface LevelDimension {
  /** e.g. "Grammar", "Vocabulary", "Sentence variety", "Clarity", "Coherence" */
  key: string
  label: string
  band: CefrBand
  score: number
  /** Short observation explaining the band, in plain English */
  note: string
}

export interface LevelImprovement {
  /** "Priority 1", "Priority 2", etc. */
  rank: number
  title: string
  /** One-sentence actionable advice */
  advice: string
}

export interface LevelPlanDay {
  day: string
  minutes: number
  focus: string
  exercise: string
}

export interface LevelResult {
  /** Overall estimated CEFR range, e.g. "B1-B2" */
  estimated_band: CefrBand
  /** Alternative narrower bands for finer granularity */
  alt_bands: CefrBand[]
  /** Per-dimension sub-scores */
  dimensions: LevelDimension[]
  /** Overall numeric score 0..100 (mid-point of estimated_band) */
  overall_score: number
  /** "Low" | "Medium" | "High" confidence in the estimate */
  confidence: 'Low' | 'Medium' | 'High'
  /** Why we are confident at this level */
  evidence: string[]
  /** Top 3 priorities */
  improvements: LevelImprovement[]
  /** 7-day starter plan (capped at 7 days, ~15-25 min each) */
  weekly_plan: LevelPlanDay[]
}

export interface LevelRequest {
  /** 100-500 words of the learner's writing */
  text: string
  goal?: LevelGoal
}

export interface LevelResponse {
  request_id: string
  result: LevelResult
  cached?: boolean
}

export const CEFR_LABELS: Record<CefrBand, string> = {
  A1: 'A1 — Beginner',
  A2: 'A2 — Elementary',
  B1: 'B1 — Intermediate',
  B2: 'B2 — Upper-intermediate',
  C1: 'C1 — Advanced',
  C2: 'C2 — Proficient',
}

export const CEFR_SHORT: Record<CefrBand, string> = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
}

export const CEFR_SCORE_MIDPOINT: Record<CefrBand, number> = {
  A1: 12,
  A2: 32,
  B1: 52,
  B2: 70,
  C1: 84,
  C2: 95,
}

export const GOAL_LABELS: Record<LevelGoal, string> = {
  general: 'General self-assessment',
  study: 'Study / coursework',
  work: 'Work / professional',
  travel: 'Travel / daily life',
  exam_prep: 'Exam preparation',
}

export const LEVEL_FORM_HINT =
  'Paste 100-500 words of your own writing. The checker will estimate your CEFR range and give you three things to work on next.'

export const LEVEL_DISCLAIMER =
  'This is an AI-assisted estimate based on the sample you provided. It is not an official CEFR, TOEFL, IELTS or any other proficiency certification. The CEFR bands shown reflect the writing in the sample you submitted, not your overall ability.'