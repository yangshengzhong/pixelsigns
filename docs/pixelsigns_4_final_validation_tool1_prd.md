# PixelSigns.art Final Keyword Validation & Tool #1 PRD

> **阶段：Keyword Validation → BUILD / WATCH / DROP → MVP
> Specification**\
> 日期：2026-09-22\
> 本文继续上一版 Decision Matrix：补充公开 SERP
> 竞争验证，并把第一款产品收敛为可直接进入设计与开发的 PRD。\
> **数据边界：**公开 Web 无法替代 Ahrefs / Semrush 的私有
> Volume、KD、CPC 数据，因此这些字段继续标记为
> `TBD`，不虚构数值。最终上线优先级应在导入 Ahrefs/Semrush 数据后复核。

------------------------------------------------------------------------

# 1. 本轮结论

经过进一步 SERP 验证，建议第一阶段采用：

``` text
BUILD NOW
└── English Naturalness Checker

WATCH / SECOND
├── AI English Level Checker
└── English Study Plan Generator

WATCH / AI VERTICAL
└── Prompt Doctor

DEFER
├── AI Writing Feedback
├── English Fluency Checker
├── AI Pronunciation Checker
├── AI Speaking Practice
└── Vocabulary Quiz Generator
```

与上一版相比，最重要的变化是：

> **Prompt Doctor 从前三名中的"直接开发"降为 WATCH。**

原因是公开 SERP 已经出现多个高度接近的 Prompt Grader / Checker
产品，例如 Prompt Atlas 已经按五个维度评分并自动改写，HundredTabs 也提供
100 分制 Prompt Grader；单纯做"Prompt Score +
Rewrite"已经不够差异化。citeturn1search5turn1search8

相反，"Does this sound natural?" 这一用户任务持续出现在 EnglishLearning
/ English
社区，近期仍有用户反复询问某句话是否自然以及更自然的表达方式，而专门针对这一任务的搜索结果相对碎片化：既有人工
quiz，也有论坛问答和通用编辑器，但没有在本轮公开结果中呈现出与 Grammar
Checker
同等级别的专用工具垄断。citeturn1search1turn1reddit72turn1reddit79turn1reddit82

因此，**English Naturalness Checker 继续作为 Tool #1。**

------------------------------------------------------------------------

# 2. Final Validation Matrix V2

> `TBD` 项必须在 Ahrefs / Semrush 中补齐。

  --------------------------------------------------------------------------------------------------------------------
  Cluster         Volume   KD     CPC    Intent   SERP          Product   Domain   Business   Build   Decision
                                                  Competition   Gap       Fit      Fit        Cost    
  --------------- -------- ------ ------ -------- ------------- --------- -------- ---------- ------- ----------------
  English         TBD      TBD    TBD    强       中低/待验证   强        高       极高       低      **BUILD**
  Naturalness                                                                                         
  Checker                                                                                             

  AI English      TBD      TBD    TBD    强       中            中        高       极高       中      **WATCH**
  Level Checker                                                                                       

  English Study   TBD      TBD    TBD    强       中            中        高       极高       低      **WATCH**
  Plan Generator                                                                                      

  Prompt Checker  TBD      TBD    TBD    强       中高          中低      极高     高         低      **WATCH**
  / Grader                                                                                            

  AI Writing      TBD      TBD    TBD    强       高            中        高       极高       中      **DEFER**
  Feedback                                                                                            

  English Fluency TBD      TBD    TBD    强       待验证        强        高       极高       高      **DEFER**
  Checker                                                                                             

  AI              TBD      TBD    TBD    强       待验证        中        高       极高       高      **DEFER**
  Pronunciation                                                                                       
  Checker                                                                                             

  AI Speaking     TBD      TBD    TBD    强       高            中        高       极高       很高    **DEFER**
  Practice                                                                                            

  Vocabulary Quiz TBD      TBD    TBD    强       高            弱        中高     高         低      **DROP/DEFER**
  Generator                                                                                           
  --------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 3. 为什么 Naturalness Checker 仍然最值得先测试

## 3.1 用户问题真实存在

近期英语学习社区仍持续出现：

``` text
Does this sound natural?
Does my sentence sound natural?
Is there a more natural way to say this?
Does this sound natural in spoken English?
```

这类问题不是传统 Grammar Checker
完全等价的问题。用户往往已经写出了"基本能懂"的句子，他们需要的是
native-like expression、语境、语气和搭配判断。近期 Reddit 的
EnglishLearning / ENGLISH
讨论中仍不断出现这种需求。citeturn1reddit72turn1reddit73turn1reddit74turn1reddit79turn1reddit82

## 3.2 现有结果碎片化

本轮发现的专门页面包括 Natural English Check，但其核心体验是固定题目的
quiz，而不是让用户提交任意句子获得分析。citeturn1search1

另一方面，通用 AI 编辑器可以回答"Does this sound natural?"，说明 LLM
能完成任务，但也意味着 PixelSigns
的机会不能只是套一个聊天框，而要把结果结构化、学习化。citeturn1search4

## 3.3 可以建立清晰差异

``` text
Grammar Checker
→ Is it correct?

Naturalness Checker
→ Would a fluent speaker actually phrase it this way?
```

进一步：

``` text
Correctness
Naturalness
Tone
Context
Collocation
Native-like alternative
Learning explanation
```

这样才构成独立产品。

------------------------------------------------------------------------

# 4. Tool #1 Product Definition

## 产品名

**English Naturalness Checker**

副标题：

> Check if your English sounds natural --- not just grammatically
> correct.

## 用户

第一阶段：

-   ESL / EFL learners
-   国际学生
-   海外工作者
-   非英语母语的内容创作者
-   需要写英文邮件 / Message / Social Post 的用户

暂时不做：

-   专业 copywriting
-   长篇 academic editing
-   plagiarism
-   AI detection

------------------------------------------------------------------------

# 5. Job To Be Done

用户输入一句或一小段英文，希望快速知道：

1.  有没有语法问题？
2.  即使语法正确，听起来是否自然？
3.  Native speaker 更可能怎么表达？
4.  为什么？
5.  是正式、随意、礼貌还是生硬？
6.  下次如何避免同类错误？

核心 Job：

> **Turn "Is this correct?" into "This is how people actually say it."**

------------------------------------------------------------------------

# 6. MVP Input

第一版只支持：

``` text
English text
1–500 words
```

推荐主场景：

``` text
1–5 sentences
```

UI：

``` text
┌──────────────────────────────────────┐
│ Paste your English sentence...       │
│                                      │
│ I very like this movie.              │
│                                      │
└──────────────────────────────────────┘

Context (optional)
[ Casual conversation ▼ ]

[ Check Naturalness ]
```

Context：

``` text
General
Casual conversation
Work / Email
Academic
Social media
Dating / Chat
```

Context 是差异化的重要组成部分，因为"自然"高度依赖语境。

------------------------------------------------------------------------

# 7. MVP Output

建议不要只输出一个 AI 段落。

结构化：

``` text
Naturalness
62 / 100

UNDERSTANDABLE, BUT UNNATURAL

Your sentence
I very like this movie.

Natural version
I really like this movie.

More conversational
I really enjoyed this movie.

Why?
"Very" usually modifies adjectives or adverbs.
With "like", native speakers normally use "really".

Pattern
very + adjective
really + verb

Examples
✓ It's very good.
✓ I really like it.

Your grammar
Mostly correct

Tone
Neutral / Casual

Try it yourself
Rewrite:
"I very want to go there."
```

------------------------------------------------------------------------

# 8. Score 设计

避免假装拥有"科学精确度"。

推荐：

``` text
Naturalness
Natural
Mostly Natural
Understandable
Awkward
Needs Revision
```

数字分数可以作为辅助 UI，但页面明确：

> The score is an AI-assisted estimate, not a standardized linguistic
> assessment.

推荐内部维度：

``` text
Grammar          0–100
Naturalness      0–100
Word Choice      0–100
Clarity          0–100
Context Fit      0–100
```

但第一版 UI 不必全部暴露，避免信息过载。

------------------------------------------------------------------------

# 9. Prompt / Evaluation Schema

LLM 输出必须要求 JSON，而不是自由文本。

建议：

``` json
{
  "naturalness_score": 62,
  "label": "Understandable but unnatural",
  "grammar_status": "mostly_correct",
  "original": "...",
  "natural_version": "...",
  "alternative": "...",
  "explanation": "...",
  "patterns": [
    {
      "rule": "...",
      "good_example": "...",
      "bad_example": "..."
    }
  ],
  "tone": "neutral",
  "context_fit": "...",
  "practice_sentence": "..."
}
```

后端做 schema validation。

失败：

``` text
retry once
→ fallback result
```

------------------------------------------------------------------------

# 10. SEO URL

推荐：

``` text
https://pixelsigns.art/english-naturalness-checker/
```

不要第一阶段使用过深目录：

``` text
/tools/language/english/writing/naturalness-checker/
```

------------------------------------------------------------------------

# 11. SEO Page Specification

## Title 候选

``` text
English Naturalness Checker – Does Your Sentence Sound Natural?
```

备选：

``` text
Does This Sound Natural? Free English Naturalness Checker
```

最终需要上线前重新检查 SERP Title。

## H1

``` text
English Naturalness Checker
```

## Meta Description

``` text
Check whether your English sentence sounds natural, not just grammatically correct. Get a more natural version, explanation, tone feedback and examples.
```

## Above the Fold

``` text
H1

Check if your English sounds natural — not just grammatically correct.

[Tool]

No signup required.
```

不要在 Tool 上方塞 800 字 SEO 文案。

------------------------------------------------------------------------

# 12. Page Content Outline

``` text
H1 English Naturalness Checker

[TOOL]

H2 Does this sound natural in English?

80–150 words

H2 Correct English vs. Natural English

Example table

H2 How the English Naturalness Checker Works

1. Paste
2. Choose context
3. Get feedback
4. Learn the pattern

H2 Examples

5–8 examples

H2 What Makes English Sound Natural?

Collocations
Word choice
Word order
Tone
Register
Idiomatic usage

H2 Who Is This Tool For?

Learners
Students
Professionals
Writers

H2 Limitations

H2 FAQ
```

目标正文：

``` text
800–1,300 useful words
```

不是硬性 SEO 字数。

------------------------------------------------------------------------

# 13. Example Table

  -----------------------------------------------------------------------
  Original          Grammar           Naturalness       More Natural
  ----------------- ----------------- ----------------- -----------------
  I very like it.   问题较小          Unnatural         I really like it.

  I made a photo.   可理解            Unnatural         I took a photo.

  I have 25 years.  Incorrect         Unnatural         I'm 25 years old.

  Let's discuss     Incorrect         Unnatural         Let's discuss it.
  about it.                                             

  I strongly        Correct           Natural           I strongly
  recommend it.                                         recommend it.
  -----------------------------------------------------------------------

这个表本身可以帮助 Google 理解页面不是普通 Grammar Checker。

------------------------------------------------------------------------

# 14. FAQ Keyword Expansion

第一版 FAQ：

``` text
What does "sound natural" mean in English?

Can a sentence be grammatically correct but unnatural?

How can I make my English sound more natural?

Can this checker help with spoken English?

Does the checker work for emails?

Is this a grammar checker?

Can I check a paragraph?

Is the naturalness score an official English assessment?
```

后续 FAQ 不凭空扩写。

优先从 GSC Query 中增加。

------------------------------------------------------------------------

# 15. Internal Linking

首页：

``` text
/
→ English Naturalness Checker
```

Tool：

``` text
English Naturalness Checker
→ About
→ Editorial Policy
→ Privacy
```

等 Tool #2 上线：

``` text
Naturalness Checker
        ↕
English Level Checker
```

以后：

``` text
Naturalness
→ Speaking Practice
→ Writing Feedback
```

------------------------------------------------------------------------

# 16. CTA 设计

不要：

``` text
输入句子
→ 注册后查看结果
```

必须先给完整基础价值。

推荐：

``` text
Result
↓
Learning Tip
↓
Want to practice this pattern?
[Practice with AI]
```

或者：

``` text
Want personalized English practice based on your mistakes?
[Start Practice]
```

导向现有语言学习产品。

------------------------------------------------------------------------

# 17. Free Usage Model

第一阶段 SEO Tool 建议：

``` text
Anonymous
3–5 checks / day
```

或者：

``` text
10 checks/day
```

取决于模型成本。

不要首屏强制注册。

用户获得结果后：

``` text
Save history
Track mistakes
Personalized practice
```

才要求登录。

------------------------------------------------------------------------

# 18. Analytics Events

必须埋点：

``` text
naturalness_page_view
naturalness_input_started
naturalness_submit
naturalness_success
naturalness_error

context_selected
result_natural
result_unnatural

rewrite_copy
explanation_expand
practice_click

language_product_cta
signup_click
```

额外记录：

``` text
input_word_count
response_time
context
```

不要把用户原始文本直接发送进普通 Analytics。

------------------------------------------------------------------------

# 19. Search Console Validation

上线后重点观察：

``` text
english naturalness checker
natural English checker
sentence naturalness checker
does this sound natural
does my sentence sound natural
make my English sound natural
does this sound natural in English
check if sentence sounds natural
```

真正重要的是 Google 自己扩出来的 Query。

------------------------------------------------------------------------

# 20. 4 / 8 / 12 Week Decision Gate

## Week 0--4

关注：

``` text
Index
Crawl
Query discovery
First impressions
```

不要急着判断失败。

## Week 4--8

关注：

``` text
Impressions trend
Number of queries
Average position
Long-tail movement
Tool completion
```

如果出现：

``` text
Position 20–80
+
Impressions growing
```

说明值得继续优化。

## Week 8--12

### GO

``` text
Relevant queries growing
Impressions growing
Some long-tail entering Top 20–30
Users completing tool
CTA clicks exist
```

则开发 Tool #2。

### ITERATE

有 Impression 但排名停滞：

``` text
SERP intent
content
tool UX
result quality
internal links
page speed
```

逐项优化。

### STOP / PIVOT

长期几乎：

``` text
No relevant query
No impressions
No indexing signal
```

重新判断关键词和 Domain Value。

------------------------------------------------------------------------

# 21. Tool #2 的触发规则

不要因为 Tool #1 开发完就自动开发 Tool #2。

满足任意两个条件再进入：

``` text
1. Naturalness Tool 获得稳定相关 Impressions
2. Language-related Query 持续扩展
3. Tool completion rate 健康
4. CTA 有真实点击
5. GSC 出现 level / CEFR 类 Query
```

届时优先：

> **AI English Level Checker**

公开 SERP 已经存在完整的 AI CEFR Checker，例如 NIR Academy
的工具支持文本输入、CEFR 估计、Vocabulary / Grammar / Readability 维度和
IELTS / TOEFL 区间，因此 PixelSigns 若进入该词，不能只复制"Paste text →
B2"模式。citeturn0search0turn0search13

需要差异：

``` text
Level
→ Evidence
→ Weakness
→ Personalized Exercise
→ Progress
```

------------------------------------------------------------------------

# 22. Study Plan Generator 判断

这个方向确实存在独立工具。Anglo-Link
已提供基于当前水平、目标水平、技能、时间和学习方式生成计划的产品。citeturn1search0turn1search9

因此 PixelSigns 如果未来做：

不要只：

``` text
A2 + B2 + 30 min/day
→ Generic 12-week plan
```

而应该：

``` text
Naturalness Checker data
+
Level Checker data
+
Goal
+
Time
↓
Personalized Study Plan
```

也就是说，它更适合作为生态中的 **第三层产品**，而不是独立的第一个 SEO
Tool。

------------------------------------------------------------------------

# 23. Prompt Doctor 判断变化

公开 SERP 已存在：

-   Prompt Atlas Prompt Grader &
    Fixer：按多个维度评分并自动补齐缺失信息。citeturn1search5
-   HundredTabs Prompt Grader：100 分制，并按
    Instruction、Context、Constraints、Specificity、Structure、Examples
    等维度评分。citeturn1search8
-   Prompt-Checker：定位为寻找、分析和优化 prompts。citeturn1search11

因此：

``` text
Prompt score
+
5 dimensions
+
rewrite
```

本身已经不是足够强的差异。

如果未来开发，应改成更窄的任务，例如：

``` text
Prompt Debugger for AI Coding
Prompt Checker for Image Generation
Prompt A/B Tester
Prompt Evaluator with Model Comparison
Prompt Cost / Token Optimizer
```

所以本轮从：

``` text
BUILD #3
```

调整为：

``` text
WATCH
```

------------------------------------------------------------------------

# 24. AI Writing Feedback 判断

AI Writing Feedback 的产品竞争已经明显。

公开结果中：

-   writing-pass 已提供 exam/task-aware feedback、practice
    estimate、文本证据和 improvement plan。citeturn0search1
-   Classira 提供 CEFR-aligned writing corrections、grammar tips 和
    style breakdown。citeturn0search2
-   MagicSchool、Monsha、OpenEduCat 等也已经提供面向教师或学生的结构化
    AI writing feedback。citeturn0search5turn0search6turn0search7

同时，2025 年研究继续研究生成式 AI 辅助反馈与 EFL
写作表现之间的关系，说明场景本身真实存在。citeturn0search3

结论：

> **需求真实，但泛 AI Writing Feedback 已经不是低竞争空白。**

Naturalness 是更适合 PixelSigns 第一阶段切入的窄 wedge。

------------------------------------------------------------------------

# 25. 推荐技术架构

``` text
Next.js
TypeScript
Tailwind CSS

API Route
↓
LLM Provider abstraction
↓
Structured JSON
↓
Schema validation
↓
UI
```

Provider 不写死：

``` text
/lib/ai/provider.ts
```

以后可以切：

``` text
OpenAI
Anthropic
Gemini
Other
```

Tool Logic：

``` text
/lib/tools/naturalness/
    prompt.ts
    schema.ts
    evaluate.ts
    examples.ts
```

这样以后 Level Checker 可以独立：

``` text
/lib/tools/level-checker/
```

------------------------------------------------------------------------

# 26. Cost Control

第一阶段：

``` text
max input length
max output tokens
rate limit
anonymous quota
cache example queries
timeout
retry once
```

监控：

``` text
Cost / successful check
```

而不是只监控 API 总成本。

目标公式：

``` text
API Cost
÷
Successful Tool Uses
```

后续再算：

``` text
Organic Click
→ Tool Completion
→ CTA
→ Signup
→ Revenue
```

------------------------------------------------------------------------

# 27. Trust / Quality

必须有：

``` text
About
Contact
Privacy
Terms
Editorial Policy
AI Disclaimer
```

Tool 页面说明：

``` text
AI-assisted feedback
May make mistakes
Context affects naturalness
Different English varieties may prefer different phrasing
Not an official proficiency assessment
```

未来可以增加：

``` text
American English
British English
```

选项。

------------------------------------------------------------------------

# 28. Development Sprint

## Sprint 0 --- 1--2 days

``` text
Finalize SERP snapshot
Ahrefs export
Historical backlink map
```

## Sprint 1 --- 3--5 days

``` text
Next.js setup
Design system
Homepage
Naturalness Tool UI
API
Structured output
Error states
```

## Sprint 2 --- 2--3 days

``` text
SEO content
FAQ
Metadata
Schema
About
Privacy
Terms
Editorial
```

## Sprint 3 --- 1--2 days

``` text
Analytics
GSC
Sitemap
robots
redirect map
performance QA
mobile QA
```

目标：

> **约 1--2 周上线第一个可验证版本，而不是做一个月再发布。**

------------------------------------------------------------------------

# 29. Launch Checklist

## Product

-   [ ] 输入正常
-   [ ] Context selector
-   [ ] Structured result
-   [ ] Copy rewrite
-   [ ] Error state
-   [ ] Loading state
-   [ ] Rate limit
-   [ ] Mobile UX

## SEO

-   [ ] Title
-   [ ] H1
-   [ ] Meta
-   [ ] Canonical
-   [ ] Sitemap
-   [ ] robots
-   [ ] Schema
-   [ ] Internal link
-   [ ] 404
-   [ ] Redirect map

## Trust

-   [ ] About
-   [ ] Contact
-   [ ] Privacy
-   [ ] Terms
-   [ ] Editorial Policy
-   [ ] AI disclaimer

## Measurement

-   [ ] GSC
-   [ ] Analytics
-   [ ] Tool events
-   [ ] CTA events
-   [ ] Error logging
-   [ ] API cost logging

------------------------------------------------------------------------

# 30. 仍需补齐的 Ahrefs / Semrush 数据

正式编码前，至少把以下词导出：

``` text
english naturalness checker
natural english checker
sentence naturalness checker
english sentence naturalness checker
does this sound natural
does this sound natural in english
does my sentence sound natural
make my english sound natural
natural sentence checker

ai english level checker
english level checker
cefr level checker
english writing level checker

english study plan generator
ai english study plan

prompt checker
prompt grader
prompt analyzer
```

字段：

``` text
Keyword
Country
Volume
Global Volume
KD
CPC
Traffic Potential
Parent Topic
SERP Features
```

然后把数据回填进 Matrix。

------------------------------------------------------------------------

# 31. 最终 BUILD / WATCH / DROP

## BUILD

### English Naturalness Checker

理由：

``` text
真实重复用户问题
+
专用 SERP 相对碎片化
+
可以区别于 Grammar Checker
+
低开发成本
+
语言业务导流极自然
+
后续可以扩 Level / Writing / Speaking
```

## WATCH

### AI English Level Checker

需求和转化好，但已经存在功能完整的 CEFR AI Checker，需要更强产品差异。

### English Study Plan Generator

容易开发，但已有成熟实现；更适合作为用户诊断数据之后的下游工具。

### Prompt Doctor

Domain Fit 极佳，但 Prompt Grader / Checker 产品已经出现明显同质化。

## DEFER

``` text
AI Writing Feedback
English Fluency Checker
AI Pronunciation Checker
AI Speaking Practice
Vocabulary Quiz Generator
```

原因分别是 SERP 竞争、产品复杂度或差异不足。

------------------------------------------------------------------------

# 32. 下一阶段

完成本文后，不需要再继续无限做 Keyword Research。

下一阶段应该进入：

> **Tool #1 UI/UX Wireframe + Technical Spec + LLM Prompt Spec + SEO
> Copy Draft**

交付物应该包含：

``` text
01 Page wireframe
02 Component list
03 Mobile layout
04 API contract
05 JSON schema
06 LLM system prompt
07 Failure handling
08 SEO final copy
09 FAQ
10 Analytics event spec
11 Acceptance criteria
12 Developer task breakdown
```

这样可以直接交给开发人员或 Coding Agent 开始实现。

------------------------------------------------------------------------

# 33. 最终策略

``` text
Old Domain
    ↓
Historical Relevance
    ↓
Narrow Search Job
    ↓
English Naturalness Checker
    ↓
Real User Value
    ↓
Google Query Discovery
    ↓
Language Cluster Expansion
    ↓
Existing Language Product
```

PixelSigns 第一阶段不是在赌：

> "旧域名一定有权重。"

而是在验证：

> **一个仍有历史数字产品语义的旧域名，能否凭一个真正解决明确新需求的小工具重新获得相关自然搜索信号。**

如果答案是 Yes，再扩大。

如果答案是 No，就以最小成本得到结论。
