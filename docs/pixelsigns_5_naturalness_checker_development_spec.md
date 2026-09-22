# PixelSigns.art --- English Naturalness Checker

## UI/UX Wireframe + Technical Spec + LLM Prompt Spec + SEO Copy + Developer Tasks

> **Status:** Development-ready specification\
> **Product:** English Naturalness Checker\
> **Domain:** `pixelsigns.art`\
> **Primary URL:** `/english-naturalness-checker/`\
> **Goal:** 用一个低开发成本、强 Tool Intent 的英语自然度检测工具验证
> PixelSigns.art 的自然搜索恢复能力，并为现有语言学习业务建立导流入口。

------------------------------------------------------------------------

# 1. MVP Success Definition

MVP 不是"上线一个 LLM 输入框"。

必须同时完成四件事：

``` text
Search Intent Match
        +
Useful Tool Result
        +
Learning Value
        +
Measurable Conversion
```

第一阶段成功标准：

-   页面正常被 Google 抓取和索引
-   GSC 出现 naturalness / sentence / natural English 等相关 Query
-   用户可以无需注册完成基础检测
-   结果明显区别于普通 Grammar Checker
-   Tool completion 可被统计
-   用户能够进入下一步语言学习 CTA
-   API 成本、错误率、响应速度可监控

------------------------------------------------------------------------

# 2. Core User Flow

``` text
Google Search
     ↓
Landing Page
     ↓
Immediately See Tool
     ↓
Paste Sentence
     ↓
Optional Context
     ↓
Check Naturalness
     ↓
Structured Result
     ↓
Understand WHY
     ↓
See Better Expression
     ↓
Try Practice
     ↓
Language Product CTA
```

不要：

``` text
Google
→ 1000 words SEO content
→ Tool
```

也不要：

``` text
Input
→ Signup
→ Result
```

------------------------------------------------------------------------

# 3. Desktop Wireframe

``` text
┌──────────────────────────────────────────────────────────────┐
│ PixelSigns                                      Tools  About │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│            English Naturalness Checker                       │
│                                                              │
│   Check if your English sounds natural — not just            │
│   grammatically correct.                                     │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ I very like this movie.                               │  │
│  │                                                        │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  Context: [ General ▼ ]                 6 / 500 words         │
│                                                              │
│                 [ Check Naturalness ]                         │
│                                                              │
│  No signup required · AI-assisted feedback                   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  RESULT                                                      │
│                                                              │
│  Naturalness                                                 │
│  62 / 100                                                    │
│  UNDERSTANDABLE, BUT UNNATURAL                               │
│                                                              │
│  Your sentence                                               │
│  I very like this movie.                                     │
│                                                              │
│  ✓ Natural version                                           │
│  I really like this movie.                     [ Copy ]       │
│                                                              │
│  More conversational                                         │
│  I really enjoyed this movie.                  [ Copy ]       │
│                                                              │
│  Why?                                                        │
│  “Very” normally modifies adjectives or adverbs.             │
│  With “like”, English speakers normally use “really”.        │
│                                                              │
│  Pattern                                                     │
│  ✓ very + adjective                                          │
│  ✓ really + verb                                             │
│                                                              │
│  Examples                                                    │
│  ✓ It's very good.                                           │
│  ✓ I really like it.                                         │
│                                                              │
│  Tone: Neutral / Casual                                      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ PRACTICE                                               │  │
│  │ Rewrite: “I very want to go there.”                    │  │
│  │                                      [ Try it ]        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  Want personalized practice based on your mistakes?          │
│                [ Practice with AI → ]                         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ SEO / Educational Content                                    │
│                                                              │
│ Does this sound natural in English?                           │
│ Correct vs Natural English                                   │
│ Examples                                                     │
│ How it works                                                 │
│ What makes English sound natural?                             │
│ FAQ                                                          │
└──────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 4. Mobile Wireframe

Mobile 是优先级，不是 Desktop 的缩小版。

``` text
┌──────────────────────┐
│ PixelSigns       ☰   │
├──────────────────────┤
│ English Naturalness  │
│ Checker              │
│                      │
│ Check if your        │
│ English sounds       │
│ natural.             │
│                      │
│ ┌──────────────────┐ │
│ │ Paste sentence   │ │
│ │                  │ │
│ └──────────────────┘ │
│                      │
│ Context              │
│ [ General ▼ ]        │
│                      │
│ [Check Naturalness]  │
│                      │
│ No signup required   │
├──────────────────────┤
│ 62 / 100             │
│ Understandable but   │
│ unnatural            │
│                      │
│ Natural version      │
│ I really like this   │
│ movie.        [Copy] │
│                      │
│ Why?                 │
│ ...                  │
│                      │
│ More conversational  │
│ ...                  │
│                      │
│ Practice             │
│ ...                  │
│                      │
│ [Practice with AI]   │
└──────────────────────┘
```

Mobile 要求：

-   输入框至少约 140px 高
-   主 CTA 全宽
-   Result Card 单列
-   Copy button 可单手点击
-   不使用横向滚动表格承载核心结果
-   SEO 内容位于工具结果之后

------------------------------------------------------------------------

# 5. Component Architecture

建议：

``` text
app/
  english-naturalness-checker/
    page.tsx
    loading.tsx

components/
  naturalness/
    NaturalnessForm.tsx
    ContextSelector.tsx
    CharacterCounter.tsx
    NaturalnessResult.tsx
    ScoreBadge.tsx
    RewriteCard.tsx
    ExplanationCard.tsx
    PatternCard.tsx
    ExamplesCard.tsx
    PracticeCard.tsx
    ToolCTA.tsx
    ToolError.tsx

  seo/
    FAQ.tsx
    Breadcrumbs.tsx

lib/
  naturalness/
    schema.ts
    prompt.ts
    evaluate.ts
    labels.ts
    examples.ts

  ai/
    provider.ts

  analytics/
    events.ts

app/api/
  naturalness/
    route.ts
```

------------------------------------------------------------------------

# 6. UI States

必须实现：

## Empty

``` text
Paste an English sentence or short paragraph.
```

## Typing

显示：

``` text
18 / 500 words
```

## Invalid

例如：

``` text
Please enter at least 3 English words.
```

## Loading

Button：

``` text
Checking...
```

结果区域 Skeleton：

``` text
Analyzing grammar...
Checking naturalness...
Looking at word choice...
```

不要伪造过长 loading animation。

## Success

显示完整结构化结果。

## Error

``` text
We couldn't analyze this text right now.

[ Try Again ]
```

不要向用户显示 provider stack trace。

## Rate Limited

``` text
You've reached today's free check limit.
```

然后：

``` text
Try again tomorrow
```

或进入登录后的产品方案。

------------------------------------------------------------------------

# 7. API Contract

## Endpoint

``` text
POST /api/naturalness
```

## Request

``` json
{
  "text": "I very like this movie.",
  "context": "general",
  "variant": "general"
}
```

### context enum

``` text
general
casual
work_email
academic
social
chat
```

### variant

第一版：

``` text
general
```

未来：

``` text
american
british
```

------------------------------------------------------------------------

# 8. API Response

``` json
{
  "request_id": "req_xxx",
  "result": {
    "naturalness_score": 62,
    "label": "understandable_but_unnatural",
    "grammar_status": "mostly_correct",
    "original": "I very like this movie.",
    "natural_version": "I really like this movie.",
    "alternative": "I really enjoyed this movie.",
    "explanation": "The word 'very' is not normally used to intensify the verb 'like'. 'Really' is more natural here.",
    "tone": "neutral",
    "context_fit": "appropriate",
    "patterns": [
      {
        "rule": "Use 'really' rather than 'very' to intensify many verbs.",
        "good_example": "I really like this movie.",
        "bad_example": "I very like this movie."
      }
    ],
    "practice": {
      "prompt": "Rewrite this sentence naturally: I very want to go there.",
      "hint": "Think about which adverb naturally modifies 'want'."
    }
  }
}
```

------------------------------------------------------------------------

# 9. JSON Schema Rules

硬性约束：

``` text
naturalness_score: integer 0–100
label: enum
grammar_status: enum
natural_version: string
alternative: string | null
explanation: string
tone: enum/string from controlled set
patterns: max 3
practice: optional
```

Label：

``` text
natural
mostly_natural
understandable_but_unnatural
awkward
needs_revision
```

Grammar：

``` text
correct
mostly_correct
has_errors
```

如果 LLM 输出不符合 schema：

``` text
validate
↓
retry once with repair prompt
↓
fail gracefully
```

------------------------------------------------------------------------

# 10. LLM System Prompt V1

``` text
You are an English naturalness evaluator for people learning English.

Your job is NOT merely to correct grammar.

Evaluate whether the submitted English sounds natural in the specified context.

Focus on:
- natural phrasing
- collocations
- word choice
- idiomatic usage
- word order
- register
- tone
- context appropriateness
- grammar only when relevant

A sentence may be grammatically correct but still sound unnatural.

Do not unnecessarily rewrite text that is already natural.

When multiple variants are acceptable, acknowledge that rather than claiming there is only one correct version.

Do not treat American English as the only valid form of English.

Give concise explanations suitable for an English learner.

Do not claim the score is an official linguistic or proficiency assessment.

Return valid JSON matching the supplied schema.
```

------------------------------------------------------------------------

# 11. LLM User Prompt Template

``` text
Evaluate the naturalness of this English text.

Context:
{{context}}

Text:
{{text}}

Return:
1. Naturalness score from 0–100
2. Naturalness label
3. Grammar status
4. A natural version
5. One alternative version when useful
6. A concise learner-friendly explanation
7. Tone
8. Context fit
9. Up to 3 reusable language patterns
10. One short practice exercise when useful

Do not change the meaning unless necessary.
Do not over-correct stylistic preferences.
```

------------------------------------------------------------------------

# 12. Evaluation Principles

必须防止几个典型 LLM 问题。

## Overcorrection

输入：

``` text
I really enjoyed the movie.
```

不应该为了"显示 AI 有工作"改成：

``` text
I thoroughly enjoyed the film.
```

正确：

``` text
Natural
No change needed.
```

## False certainty

不要：

``` text
Native speakers never say...
```

推荐：

``` text
A more common phrasing in this context is...
```

## Dialect bias

例如：

``` text
at the weekend
on the weekend
```

都可能自然，取决于英语变体。

## Meaning preservation

Natural rewrite 不应改变原意。

------------------------------------------------------------------------

# 13. Safety / Input Handling

限制：

``` text
1–500 words
```

后端：

-   trim input
-   validate length
-   rate limit
-   escape rendered text
-   不允许模型返回可执行 HTML
-   不把 API key 暴露给客户端
-   server-side provider call

用户可能输入敏感文本。

因此：

> 默认不要把完整输入文本写入普通 analytics event。

如需保存历史，必须由产品账户体系明确处理。

------------------------------------------------------------------------

# 14. SEO Copy Draft

## Hero

### H1

**English Naturalness Checker**

### Subtitle

Check whether your English sounds natural --- not just grammatically
correct. Get a more natural version, a clear explanation, and examples
you can learn from.

CTA：

**Check Naturalness**

Microcopy：

**No signup required · AI-assisted feedback**

------------------------------------------------------------------------

# 15. Section --- Does This Sound Natural in English?

A sentence can be grammatically correct and still sound unusual to a
fluent English speaker. The English Naturalness Checker looks beyond
basic grammar to help you identify awkward word choices, unusual
collocations, unnatural phrasing, and expressions that do not quite fit
the context.

Paste a sentence or short paragraph above to see a more natural version
and understand why it sounds better.

------------------------------------------------------------------------

# 16. Section --- Correct English vs. Natural English

Learning grammar tells you what is possible in English. Learning natural
English helps you understand what people are more likely to say.

Examples:

  Less Natural              More Natural
  ------------------------- ---------------------------
  I very like this movie.   I really like this movie.
  I made a photo.           I took a photo.
  Let's discuss about it.   Let's discuss it.
  I have 25 years.          I'm 25 years old.

The goal is not to make every sentence identical. Different expressions
can be natural depending on context, tone, region, and personal style.

------------------------------------------------------------------------

# 17. Section --- How It Works

### 1. Paste your English

Enter a sentence or short paragraph you want to check.

### 2. Choose the context

Tell the checker whether the text is for a casual conversation, work
email, academic setting, social media, or another situation.

### 3. Check naturalness

The tool looks at grammar, word choice, collocations, phrasing, tone,
and context.

### 4. Learn from the result

Instead of showing only a correction, the checker explains the pattern
and gives examples you can reuse.

------------------------------------------------------------------------

# 18. Section --- What Makes English Sound Natural?

## Collocations

Some words commonly appear together.

``` text
take a photo
make a decision
heavy rain
strong coffee
```

Using an unusual combination can make a sentence understandable but
unnatural.

## Word Choice

Two words may have similar dictionary meanings but behave differently in
real sentences.

## Register

Language that sounds natural in an academic paper may sound strange in a
text message.

## Sentence Patterns

Fluent speakers repeatedly use common grammatical and lexical patterns.

## Context

There is rarely one universally "most natural" sentence. The best
expression depends on what you mean, who you are speaking to, and the
situation.

------------------------------------------------------------------------

# 19. Section --- Who Is This For?

The checker is designed for:

-   English learners
-   international students
-   professionals writing in English
-   people preparing messages or emails
-   learners who already know basic grammar but want to sound more
    natural

It is not intended to replace professional editing or an official
language assessment.

------------------------------------------------------------------------

# 20. Limitations Copy

**AI-assisted feedback**

Naturalness depends on context, dialect, tone, and personal style. The
checker may occasionally suggest an unnecessary change or miss a valid
alternative.

Its scores and suggestions are learning aids, not official linguistic or
CEFR assessments.

------------------------------------------------------------------------

# 21. FAQ Draft

## Is this a grammar checker?

Not exactly. Grammar is one part of the analysis, but the main goal is
to check whether your English sounds natural in context. A sentence can
be grammatically possible and still sound awkward.

## Can a grammatically correct sentence sound unnatural?

Yes. Word choice, collocations, tone, and sentence patterns can make
grammatically correct English sound unusual.

## Can I use it for emails?

Yes. Select the work or email context so the feedback can consider a
more appropriate register.

## Can I check spoken English?

You can check a transcript of something you plan to say. The first
version does not evaluate pronunciation or audio.

## Does it support American and British English?

The checker should recognize common valid forms from major English
varieties rather than treating one variety as universally correct.
Dedicated US/UK preferences may be added later.

## Is the naturalness score an official assessment?

No. It is an AI-assisted estimate intended to make the feedback easier
to understand.

## How much text can I check?

The MVP supports short text up to 500 words, but it works best for
individual sentences and short paragraphs.

------------------------------------------------------------------------

# 22. Metadata

## Title

``` text
English Naturalness Checker – Does Your Sentence Sound Natural?
```

## Meta Description

``` text
Check whether your English sentence sounds natural, not just grammatically correct. Get a natural rewrite, explanation, tone feedback and useful examples.
```

## Canonical

``` text
https://pixelsigns.art/english-naturalness-checker/
```

## OG Title

Same as page title.

## OG Description

Use the meta description or a shorter variant.

------------------------------------------------------------------------

# 23. Structured Data

推荐：

``` text
WebApplication
BreadcrumbList
```

FAQ schema 只有在页面实际显示 FAQ 且符合当前搜索引擎要求时再启用。

不要为了 Rich Result 机械堆 Schema。

------------------------------------------------------------------------

# 24. Homepage MVP

首页第一版非常简单。

## Hero

``` text
PixelSigns

Useful AI Tools for Work & Learning

Practical tools that help you write, learn,
analyze and make better decisions.

[Explore Tools]
```

## Featured Tool

``` text
English Naturalness Checker

Does your English sound natural?
Check phrasing, word choice and tone.

[Try the Checker]
```

## Coming Later

不需要展示十几个"Coming Soon"。

最多：

``` text
More useful tools are being built based on real user needs.
```

------------------------------------------------------------------------

# 25. Analytics Specification

事件：

``` text
tool_page_view
tool_input_start
tool_context_select
tool_submit
tool_success
tool_error
tool_rate_limit

rewrite_copy
alternative_copy
explanation_view
practice_start

language_cta_view
language_cta_click
```

Properties：

``` text
tool
context
word_count_bucket
result_label
score_bucket
response_time_bucket
```

禁止：

``` text
raw_text
email
personal text
```

进入通用 analytics payload。

------------------------------------------------------------------------

# 26. KPI Dashboard

每周：

  Metric              W1   W2   W4   W8   W12
  ----------------- ---- ---- ---- ---- -----
  Indexed                               
  GSC Impressions                       
  GSC Clicks                            
  Unique Queries                        
  Top 50 Queries                        
  Tool Submits                          
  Tool Success                          
  Completion Rate                       
  CTA Clicks                            
  API Cost                              
  Cost / Success                        

------------------------------------------------------------------------

# 27. Acceptance Criteria

## Product

-   [ ] 用户无需登录即可检查文本
-   [ ] 3 个词以上可提交
-   [ ] 超过 500 words 阻止提交
-   [ ] Context 正常传递
-   [ ] API 返回 schema-valid JSON
-   [ ] Natural rewrite 可复制
-   [ ] Loading / Error / Rate Limit 均有 UI
-   [ ] Mobile 可完整操作

## Quality

测试集至少准备：

``` text
20 natural sentences
20 unnatural sentences
20 grammar-error sentences
10 US/UK variation cases
10 context-dependent cases
```

人工检查：

-   是否 overcorrect
-   是否改变原意
-   explanation 是否有教学价值
-   是否错误否定合法英语变体

## SEO

-   [ ] 200 response
-   [ ] self canonical
-   [ ] indexable
-   [ ] sitemap
-   [ ] robots
-   [ ] unique title
-   [ ] unique H1
-   [ ] structured content
-   [ ] homepage internal link
-   [ ] Core Web Vitals 基础达标

------------------------------------------------------------------------

# 28. Developer Task Breakdown

## Epic A --- Foundation

### A1

Create Next.js + TypeScript project.

### A2

Set up global typography, spacing and responsive container.

### A3

Create Header / Footer.

### A4

Create metadata utilities.

------------------------------------------------------------------------

## Epic B --- Tool UI

### B1

Build textarea input.

### B2

Build word counter.

### B3

Build ContextSelector.

### B4

Build submit/loading states.

### B5

Build Result container.

### B6

Build ScoreBadge.

### B7

Build RewriteCard + copy.

### B8

Build ExplanationCard.

### B9

Build Pattern + Example cards.

### B10

Build PracticeCard.

### B11

Build CTA.

------------------------------------------------------------------------

## Epic C --- AI Backend

### C1

Create provider abstraction.

### C2

Create request validation.

### C3

Create output schema.

### C4

Implement system prompt.

### C5

Implement user prompt.

### C6

Parse structured output.

### C7

Retry invalid schema once.

### C8

Implement timeout.

### C9

Implement rate limit.

### C10

Log cost / latency without logging raw user text.

------------------------------------------------------------------------

## Epic D --- SEO

### D1

Create page metadata.

### D2

Add SEO copy.

### D3

Add examples.

### D4

Add FAQ.

### D5

Add WebApplication structured data.

### D6

Create sitemap.

### D7

Create robots.

### D8

Create canonical.

### D9

Create homepage internal link.

------------------------------------------------------------------------

## Epic E --- Trust

### E1

About.

### E2

Contact.

### E3

Privacy.

### E4

Terms.

### E5

Editorial Policy.

### E6

AI feedback disclaimer.

------------------------------------------------------------------------

## Epic F --- Measurement

### F1

Install analytics.

### F2

Implement event layer.

### F3

Tool success/failure events.

### F4

CTA tracking.

### F5

Response latency metrics.

### F6

API cost metrics.

### F7

Connect GSC.

### F8

Connect Bing Webmaster Tools.

------------------------------------------------------------------------

# 29. Recommended Build Order

``` text
Day 1
Foundation + Page Shell

Day 2
Input + Result UI

Day 3
LLM API + Schema

Day 4
Error / Rate Limit / Quality Tests

Day 5
SEO Content + Trust Pages

Day 6
Analytics + GSC + Sitemap

Day 7
Mobile QA + Performance + Launch
```

实际排期取决于现有基础设施。

重点不是严格七天，而是：

> **MVP 不要因为非核心功能拖成一个月项目。**

------------------------------------------------------------------------

# 30. Post-launch Backlog

只有获得搜索 / 用户信号后再考虑：

``` text
History
Account
Saved sentences
US / UK preference
Batch checking
Chrome extension
Speaking input
Pronunciation
Personal mistake library
Personalized exercises
Progress tracking
```

------------------------------------------------------------------------

# 31. Tool #2 Decision

上线 Tool #1 后，优先观察 GSC。

如果 Query 向：

``` text
english level
CEFR
writing level
```

扩展：

→ **AI English Level Checker**

如果 Query 向：

``` text
tone
email
polite
formal
```

扩展：

→ **English Tone / Politeness Checker**

如果 Query 向：

``` text
speaking
spoken English
conversation
```

扩展：

→ **Speaking / Fluency Tool**

让真实 Query 决定第二个 Tool，而不是现在凭感觉固定路线。

------------------------------------------------------------------------

# 32. Definition of Done

MVP Done 不是：

``` text
代码部署成功
```

而是：

``` text
Tool works
+
Result useful
+
SEO page indexable
+
Analytics works
+
GSC connected
+
CTA measurable
+
Cost observable
+
Mobile usable
```

完成这些后才开始 4--12 周 SEO 验证周期。

------------------------------------------------------------------------

# 33. Final Build Brief

交给开发人员 / Coding Agent 的一句话任务：

> Build a fast, mobile-first English Naturalness Checker at
> `pixelsigns.art/english-naturalness-checker/`. Users paste short
> English text, optionally choose context, and receive structured
> AI-assisted feedback showing naturalness, a more natural rewrite, an
> alternative expression, a concise explanation, reusable language
> patterns, and a short practice exercise. The basic result must be
> available without signup. The page must be SEO-indexable, server-side
> secure, schema-validated, rate-limited, measurable through
> privacy-conscious analytics, and designed to lead interested learners
> naturally into the existing language-learning product.

------------------------------------------------------------------------

# 34. 下一阶段

这份文档完成后，产品已经可以进入开发。

下一轮不建议继续写更多战略文档。

开发同时只需要并行完成两件事：

``` text
1. Ahrefs / Semrush 最终关键词数据回填
2. PixelSigns 历史 URL / Backlink → Redirect Map
```

上线之后，真正决定后续方向的数据来源应逐渐从"我们的假设"切换到：

``` text
GSC Queries
Tool Usage
CTA Conversion
```

这才是 Old Domain → New Demand → Tool Page SOP 的验证闭环。
