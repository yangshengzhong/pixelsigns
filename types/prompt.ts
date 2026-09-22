// Shared types for the Prompt Doctor.
// Mirrors the JSON contract that api.pixelsigns.art will eventually return.

export type PromptTargetModel = 'general' | 'chatgpt' | 'claude' | 'gemini'

export type PromptDimensionKey =
  | 'goal'
  | 'context'
  | 'audience'
  | 'constraints'
  | 'output_format'
  | 'examples'
  | 'tone'

export interface PromptDimension {
  key: PromptDimensionKey
  label: string
  /** 0..10 score for this dimension */
  score: number
  /** What was missing or weak about this dimension */
  note: string
}

export interface PromptIssue {
  /** Short issue title, e.g. "No audience specified" */
  title: string
  /** Concrete suggestion to fix the issue */
  fix: string
  /** Optional example of how to address it */
  example?: string
}

export interface PromptResult {
  /** Overall health 0..100 */
  health_score: number
  dimensions: PromptDimension[]
  issues: PromptIssue[]
  /** Suggested rewrite of the prompt */
  improved_prompt: string
  /** Optional one-line rationale */
  rationale: string
  /** Optional follow-up question to push the prompt even further */
  follow_up?: string
  /** Optional model-specific guidance */
  model_tip?: string
}

export interface PromptRequest {
  /** Raw user prompt */
  text: string
  /** Target model the user plans to send the prompt to */
  target_model?: PromptTargetModel
}

export interface PromptResponse {
  request_id: string
  result: PromptResult
  cached?: boolean
}

export const PROMPT_DIMENSION_LABELS: Record<PromptDimensionKey, string> = {
  goal: 'Goal',
  context: 'Context',
  audience: 'Audience',
  constraints: 'Constraints',
  output_format: 'Output format',
  examples: 'Examples',
  tone: 'Tone',
}

export const TARGET_MODEL_LABELS: Record<PromptTargetModel, string> = {
  general: 'Any model',
  chatgpt: 'ChatGPT',
  claude: 'Claude',
  gemini: 'Gemini',
}

export const PROMPT_FORM_HINT =
  'Paste the prompt you would send to an AI. The Doctor scores it on goal, context, audience, constraints, output format, examples and tone, then proposes an improved version.'

export const PROMPT_DISCLAIMER =
  'Prompt Doctor is a diagnostic helper. It cannot guarantee the model will give a better answer. Treat the improved prompt as a starting point and refine for your own task.'