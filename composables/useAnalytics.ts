// Lightweight analytics event tracker.
//
// Privacy-conscious: never logs raw user-submitted text, only bucketed
// metadata. When integrating real analytics (Plausible / GA4 / PostHog),
// replace the `send()` no-op with the real provider call. The event
// signatures match what is documented in the PixelSigns PRD §25.

import { onMounted } from 'vue'

type AnalyticsEvent =
  | 'tool_page_view'
  | 'tool_input_start'
  | 'tool_context_select'
  | 'tool_submit'
  | 'tool_success'
  | 'tool_error'
  | 'tool_rate_limit'
  | 'rewrite_copy'
  | 'alternative_copy'
  | 'explanation_view'
  | 'practice_start'
  | 'language_cta_view'
  | 'language_cta_click'
  | 'home_cta_click'

export interface AnalyticsPayload {
  [k: string]: string | number | boolean | undefined
}

const SAFE_KEYS = new Set([
  'tool',
  'context',
  'word_count_bucket',
  'result_label',
  'score_bucket',
  'response_time_bucket',
  'error_kind',
  'cta_target',
])

function sanitize(payload: AnalyticsPayload = {}): AnalyticsPayload {
  const cleaned: AnalyticsPayload = {}
  for (const key of Object.keys(payload)) {
    if (SAFE_KEYS.has(key)) cleaned[key] = payload[key]
  }
  return cleaned
}

function bucketWordCount(n: number): string {
  if (n < 5) return 'xs'
  if (n < 15) return 's'
  if (n < 50) return 'm'
  if (n < 200) return 'l'
  return 'xl'
}

function bucketScore(score: number): string {
  if (score >= 85) return '85-100'
  if (score >= 70) return '70-84'
  if (score >= 50) return '50-69'
  if (score >= 30) return '30-49'
  return '0-29'
}

function bucketResponseTime(ms: number): string {
  if (ms < 1000) return '<1s'
  if (ms < 2000) return '1-2s'
  if (ms < 4000) return '2-4s'
  return '>4s'
}

export const useAnalytics = () => {
  const isDev = process.env.NODE_ENV !== 'production'

  function send(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
    const safe = sanitize(payload)
    if (isDev && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', event, safe)
    }
    // TODO: integrate a real analytics provider (Plausible / GA4 / PostHog).
    // e.g. window.plausible?.(event, { props: safe })
  }

  return {
    send,
    bucketWordCount,
    bucketScore,
    bucketResponseTime,
  }
}

// Convenience auto-page-view hook for tools.
export function useToolPageView(toolName: string) {
  const { send } = useAnalytics()
  onMounted(() => {
    send('tool_page_view', { tool: toolName })
  })
}
