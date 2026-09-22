import { ref, computed } from 'vue'
import { api } from '~/utils/api'
import type {
  LevelGoal,
  LevelResponse,
} from '~/types/level'

export type Status = 'idle' | 'loading' | 'success' | 'error' | 'rate_limited'

export interface UseLevelOptions {
  defaultGoal?: LevelGoal
  onSuccess?: (resp: LevelResponse, latencyMs: number) => void
  onError?: (err: Error, kind: 'validation' | 'network' | 'server') => void
}

// Simple in-memory rate limit (per browser session).
const SESSION_KEY = 'ps:level:quota'
const SESSION_LIMIT = 5

function readQuota(): { used: number; resetAt: number } {
  if (typeof window === 'undefined') return { used: 0, resetAt: Date.now() + 86_400_000 }
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY)
    if (!raw) return { used: 0, resetAt: Date.now() + 86_400_000 }
    const parsed = JSON.parse(raw) as { used: number; resetAt: number }
    if (!parsed.resetAt || parsed.resetAt < Date.now()) {
      return { used: 0, resetAt: Date.now() + 86_400_000 }
    }
    return parsed
  } catch {
    return { used: 0, resetAt: Date.now() + 86_400_000 }
  }
}

function writeQuota(q: { used: number; resetAt: number }) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(q))
  } catch {
    /* ignore */
  }
}

export function useLevel(options: UseLevelOptions = {}) {
  const status = ref<Status>('idle')
  const error = ref<string | null>(null)
  const data = ref<LevelResponse | null>(null)
  const lastLatencyMs = ref<number | null>(null)
  const quota = ref(readQuota())
  const remainingQuota = computed(() => Math.max(0, SESSION_LIMIT - quota.value.used))

  const { send, bucketWordCount, bucketResponseTime } = useAnalytics()

  function refreshQuota() {
    quota.value = readQuota()
  }

  async function check(text: string, goal: LevelGoal) {
    refreshQuota()
    if (quota.value.used >= SESSION_LIMIT) {
      status.value = 'rate_limited'
      error.value = "You've reached today's free check limit. Please try again tomorrow."
      send('tool_rate_limit', { tool: 'level' })
      return
    }

    const trimmed = text.trim()
    const words = trimmed.split(/\s+/).filter(Boolean).length
    if (words < 60) {
      status.value = 'error'
      error.value = 'Please paste at least 60 words of your own writing.'
      send('tool_error', { tool: 'level', error_kind: 'validation' })
      return
    }

    status.value = 'loading'
    error.value = null
    data.value = null
    send('tool_submit', {
      tool: 'level',
      word_count_bucket: bucketWordCount(words),
    })

    const started = performance.now()
    try {
      const resp = await api.checkLevel({ text: trimmed, goal })
      const latency = Math.round(performance.now() - started)
      lastLatencyMs.value = latency

      const q = readQuota()
      q.used += 1
      writeQuota(q)
      refreshQuota()

      data.value = resp
      status.value = 'success'
      send('tool_success', {
        tool: 'level',
        result_label: resp.result.estimated_band,
        score_bucket: scoreBucket(resp.result.overall_score),
        response_time_bucket: bucketResponseTime(latency),
        word_count_bucket: bucketWordCount(words),
      })
      options.onSuccess?.(resp, latency)
    } catch (e) {
      status.value = 'error'
      const err = e instanceof Error ? e : new Error('Unknown error')
      error.value = err.message
      send('tool_error', { tool: 'level', error_kind: 'network' })
      options.onError?.(err, 'network')
    }
  }

  function reset() {
    status.value = 'idle'
    error.value = null
    data.value = null
    lastLatencyMs.value = null
  }

  return {
    status,
    error,
    data,
    lastLatencyMs,
    remainingQuota,
    check,
    reset,
  }
}

function scoreBucket(score: number): string {
  if (score >= 85) return '85-100'
  if (score >= 70) return '70-84'
  if (score >= 50) return '50-69'
  if (score >= 30) return '30-49'
  return '0-29'
}