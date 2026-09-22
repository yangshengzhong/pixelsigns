# PixelSigns.art Keyword Decision Matrix V1

> **阶段：Discovery → Validation → MVP Selection**\
> 日期：2026-09-22\
> 目标：把上一轮 45+ 个 Seed Keywords 压缩成第一批值得进入数据验证和 MVP
> 原型设计的机会。\
> **重要：本版本没有伪造 Ahrefs / Semrush 的 Volume、KD、CPC 数据。**
> 在拿到这些付费数据库数据之前，本文使用公开 SERP
> 竞争迹象、搜索意图、产品差异化、PixelSigns
> 历史主题适配、业务导流价值和开发成本进行预筛。

------------------------------------------------------------------------

## 1. Executive Summary

第一轮建议不要开发 3 个完全独立的大产品，而是采用：

``` text
一个核心语言 Tool
+ 一个低成本语言 Tool
+ 一个 AI/SaaS Tool
```

当前进入 Final Validation 的前三个方向：

  -----------------------------------------------------------------------------------
  Rank       Tool          Primary       Domain Fit Business   Build Cost 当前结论
                           Cluster                  Fit                   
  ---------- ------------- ------------- ---------- ---------- ---------- -----------
  1          English       naturalness / 高         极高       低         BUILD
             Naturalness   sentence                                       CANDIDATE
             Checker       feedback                                       

  2          AI English    level / CEFR  中高       极高       中         BUILD
             Level Checker assessment                                     CANDIDATE

  3          Prompt Doctor prompt        极高       高         低         BUILD
                           checker /                                      CANDIDATE
                           grader /                                       
                           analyzer                                       
  -----------------------------------------------------------------------------------

第二梯队：

-   English Study Plan Generator
-   English Fluency Checker
-   AI Writing Feedback for English Learners

暂缓：

-   AI Pronunciation Checker
-   AI English Speaking Practice
-   Vocabulary Quiz Generator

原因不是这些方向没有需求，而是第一阶段的开发成本或当前 SERP
产品竞争更高。

------------------------------------------------------------------------

# 2. 评分模型

每个机会按 0--5 分评价。

  -------------------------------------------------------------------------------------
  维度                                          权重 解释
  --------------------- ---------------------------- ----------------------------------
  Historical Domain Fit                            2 与 PixelSigns 原 Digital /
                                                     Software / SaaS 主题关联

  Search Intent                                    3 用户是否明显想立即完成一个任务

  SERP Opportunity                                 3 当前公开搜索结果是否存在切入空间

  Product                                          3 是否能明显区别于已有工具
  Differentiation                                    

  Business Conversion                              2 是否能向现有 AI / Language
                                                     产品导流

  Build Simplicity                                 1 MVP 是否可以低成本快速上线
  -------------------------------------------------------------------------------------

满分：

``` text
70
```

注意：

> 这是"产品 + SEO 预筛分"，不是 Google 排名预测。

------------------------------------------------------------------------

# 3. 第一批 Decision Matrix

  -----------------------------------------------------------------------------------------------------------
  Keyword /         Domain   Intent          SERP   Differentiation   Conversion    Build  Score / Decision
  Cluster              Fit            Opportunity                                               70 
  --------------- -------- -------- ------------- ----------------- ------------ -------- -------- ----------
  English                4        5             4                 5            5        5       64 BUILD
  naturalness                                                                                      
  checker                                                                                          

  AI English             4        5             4                 4            5        4       60 BUILD
  level checker                                                                                    

  prompt checker         5        5             3                 4            4        5       59 BUILD
  / grader                                                                                         

  English study          4        5             4                 3            5        5       58 NEXT
  plan generator                                                                                   

  English fluency        4        5             4                 4            5        2       58 NEXT
  checker                                                                                          

  AI writing             4        5             3                 4            5        4       57 NEXT
  feedback for                                                                                     
  learners                                                                                         

  AI                     4        5             3                 4            5        2       55 WATCH
  pronunciation                                                                                    
  checker                                                                                          

  AI vocabulary          4        5             3                 3            4        5       53 WATCH
  generator                                                                                        

  vocabulary quiz        3        5             2                 2            4        5       45 DEFER
  generator                                                                                        

  AI English             4        5             2                 3            5        1       47 DEFER
  speaking                                                                                         
  practice                                                                                         
  -----------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 4. Opportunity #1 --- English Naturalness Checker

## Target Keyword Cluster

``` text
English naturalness checker
sentence naturalness checker
English sentence naturalness checker
make my English sound natural
does this sound natural in English
English sentence checker for learners
natural English checker
```

## Search Job

用户真正的问题不是：

> Is this grammatically correct?

而是：

> **Would a fluent English speaker actually say this?**

这是与传统 Grammar Checker 最重要的产品差异。

## MVP

输入：

``` text
I very like this movie.
```

输出：

``` text
Naturalness: 42 / 100

Status:
Understandable, but unnatural.

Better:
I really like this movie.

More conversational:
I really enjoyed this movie.

Why:
"Very" is normally not used to intensify "like" in this structure.

Pattern:
very + adjective ✓
really + verb ✓

Try:
Write another sentence using "really like".
```

## 结果维度

``` text
Grammar
Naturalness
Clarity
Tone
Word Choice
Native-like Expression
```

## SEO 页面结构

``` text
H1 English Naturalness Checker

Tool

What does "natural English" mean?

Correct English vs Natural English

Examples

How the checker works

Common unnatural English patterns

FAQ
```

## 转化

``` text
Free sentence check
      ↓
发现表达问题
      ↓
Practice this pattern
      ↓
Language Learning Product
```

## 为什么排第一

-   文本输入，MVP 开发简单
-   可以真正解决 ESL 用户痛点
-   与泛 Grammar Checker 有差异
-   结果天然产生学习建议
-   可以继续扩展大量 Long-tail 页面
-   可以成为后续 Writing / Speaking 产品的数据入口

### Decision

**BUILD CANDIDATE #1**

------------------------------------------------------------------------

# 5. Opportunity #2 --- AI English Level Checker

## Target Cluster

``` text
AI English level checker
English level checker
CEFR level checker
English writing level checker
writing level checker
English proficiency checker
```

## Search Job

> Tell me roughly what my English level is and what I should improve
> next.

## MVP 建议

第一版不要做完整考试。

采用：

``` text
Writing Sample Assessment
```

用户输入 100--500 words。

输出：

``` text
Estimated CEFR Range
B1 → B2

Vocabulary       B2
Grammar          B1
Sentence Variety B1
Clarity          B2
Coherence        B1

Confidence:
Medium

Evidence:
...

Top 3 improvements:
1.
2.
3.
```

## 重要产品措辞

避免：

``` text
Your official CEFR level is B2.
```

推荐：

``` text
Estimated writing level: B1–B2
```

并明确：

> This is an AI-assisted estimate based on the submitted sample, not an
> official CEFR certification or standardized language exam.

## Conversion Funnel

``` text
Assessment
     ↓
Weakness Diagnosis
     ↓
Personalized Practice
     ↓
Language Product
```

这是目前所有候选中商业 Funnel 最完整的方向之一。

### Decision

**BUILD CANDIDATE #2**

------------------------------------------------------------------------

# 6. Opportunity #3 --- Prompt Doctor

## Keyword Cluster

``` text
prompt checker
AI prompt checker
prompt grader
prompt analyzer
prompt optimizer
AI prompt improver
prompt quality checker
```

## 为什么不是普通 Prompt Generator

普通模式：

``` text
Describe what you want
→ Generate Prompt
```

PixelSigns 可以定位成：

> **Diagnose why your prompt is weak before rewriting it.**

## MVP

输入：

``` text
Write a marketing email.
```

输出：

``` text
Prompt Health: 38 / 100

Goal             8/10
Context          2/10
Audience         0/10
Constraints      1/10
Output Format    3/10
Examples         0/10

Missing:
• Audience
• Product information
• Desired tone
• CTA
• Length

Improved Prompt:
...
```

## Differentiation

提供两个按钮：

``` text
Improve Prompt
Explain Problems
```

后续可以：

``` text
Optimize for ChatGPT
Optimize for Claude
Optimize for Gemini
```

## 为什么适合 PixelSigns

它与旧域名 Software / SaaS / Digital Tool
语义高度一致，可以防止整个站点最终变成纯英语学习网站。

### Decision

**BUILD CANDIDATE #3**

------------------------------------------------------------------------

# 7. Opportunity #4 --- English Study Plan Generator

## Keywords

``` text
English study plan generator
AI English study plan
English learning plan generator
language learning plan generator
English learning schedule generator
```

## MVP

输入：

``` text
Current level
Target level
Goal
Minutes/day
Days/week
Deadline
Weakest skill
```

输出：

``` text
12-week roadmap

Week 1–4 Foundation
Week 5–8 Expansion
Week 9–12 Performance

Monday
20m speaking
10m vocabulary

Tuesday
...
```

## 优势

开发极简单，而且非常适合作为 Lead Generator。

## 风险

生成"学习计划"本身技术壁垒低，必须通过：

-   Personalized diagnostics
-   Progress tracking
-   Calendar
-   Practice links

增强实际价值。

### Decision

**BUILD NEXT / Supporting Tool**

------------------------------------------------------------------------

# 8. Opportunity #5 --- English Fluency Checker

## Keywords

``` text
English fluency checker
speaking fluency test
English speaking level test
English fluency test online
```

## Tool

录制 30--60 秒：

``` text
Speaking Speed
Pause Frequency
Filler Words
Sentence Length
Vocabulary Diversity
Grammar
Fluency Estimate
```

然后：

``` text
Your biggest bottleneck:
Long pauses between clauses.

Exercise:
...
```

## 优点

产品价值和 Language Conversion 都非常高。

## 缺点

需要：

-   Audio recording
-   Speech-to-text
-   Timing analysis
-   Possibly phoneme / pronunciation analysis

第一阶段开发成本明显高于文本工具。

### Decision

**BUILD AFTER TEXT MVP VALIDATION**

------------------------------------------------------------------------

# 9. Opportunity #6 --- AI Writing Feedback for English Learners

这是有明确现实需求支持的方向。

2025 年 Springer 的 EFL 研究考察了生成式 AI 辅助反馈与写作表现；2026 年
Language Testing in Asia 的研究也继续研究 AI-generated feedback 对 ESL
academic writing
的影响。公开研究说明这一产品场景是真实存在的，但不能据此推断某个具体 SEO
关键词一定低竞争。

## Differentiation

不要做：

``` text
Generic AI Writing Assistant
```

定位：

> **Writing feedback designed specifically for English learners.**

输出：

``` text
What you did well

Priority #1
Grammar pattern

Priority #2
Vocabulary

Priority #3
Coherence

Before / After

Practice exercise
```

关键：

> Feedback 必须转化成 learning action，而不是只给改写后的正确答案。

### Decision

**NEXT**

------------------------------------------------------------------------

# 10. 为什么暂缓 Vocabulary Quiz Generator

公开 SERP 已经出现多个完整工具，包括
GradeWithAI、Makeform、AceQuiz、ClaviSay、StudyX 等。

现有产品已经提供：

-   word list input
-   topic input
-   multiple question types
-   difficulty
-   automatic scoring
-   answer keys
-   PDF / print / share
-   file input

因此仅仅做：

``` text
Paste words → Generate Quiz
```

差异化不够。

如果未来做，应该进一步窄化：

``` text
CEFR Vocabulary Quiz Generator
Vocabulary Quiz for English Learners
Context-Based Vocabulary Quiz
Collocation Quiz Generator
Vocabulary Quiz from YouTube Transcript
```

### Decision

**DEFER**

------------------------------------------------------------------------

# 11. 为什么暂缓 AI Speaking Practice

这是明确存在真实需求的成熟产品方向，但产品开发比文本 Tool 重。

第一阶段 PixelSigns 的目标是：

> **验证域名能否重新获得 Search Signal。**

不是立即建设完整 AI Language App。

因此：

``` text
Text Tool
→ SEO Signal
→ User Signal
→ Voice Tool
```

比：

``` text
直接开发复杂 Voice AI
```

更符合当前 SOP。

### Decision

**DEFER UNTIL VALIDATION**

------------------------------------------------------------------------

# 12. MVP 产品组合

推荐第一阶段只上线：

``` text
/
├── /tools/
│   ├── /english-naturalness-checker/
│   ├── /english-level-checker/
│   └── /prompt-doctor/
│
├── /about/
├── /contact/
├── /privacy/
├── /terms/
└── /editorial-policy/
```

但不要三个同时开发。

顺序：

``` text
Naturalness Checker
        ↓
Google Index / Query / User Data
        ↓
Level Checker
        ↓
Prompt Doctor
```

如果 Naturalness Checker 上线后完全没有 Search
Signal，先分析原因，而不是机械上线第二、第三个 Tool。

------------------------------------------------------------------------

# 13. Tool #1 Landing Page Blueprint

建议 URL：

``` text
/tools/english-naturalness-checker/
```

或者更短：

``` text
/english-naturalness-checker/
```

第一阶段推荐短 URL。

## Title

``` text
English Naturalness Checker – Make Your English Sound Natural
```

最终 Title 需要结合 SERP 再调整。

## H1

``` text
English Naturalness Checker
```

## Hero

``` text
Check whether your English sentence sounds natural,
not just grammatically correct.
```

立即出现 Tool。

## Input

``` text
Paste an English sentence or short paragraph.
```

Button：

``` text
Check Naturalness
```

## Result

``` text
Naturalness Score

Natural / Understandable / Awkward

Original

Suggested Version

More Natural Alternative

Why

Learning Tip
```

------------------------------------------------------------------------

# 14. Supporting Content Cluster

Tool #1 上线后，不要立即写 20 篇文章。

先观察 GSC Query。

然后根据真实 Query 创建内容。

可能的 Cluster：

``` text
/english-naturalness-checker/

/guides/
    correct-vs-natural-english/
    how-to-sound-natural-in-english/
    common-unnatural-english-sentences/
```

Internal Link：

``` text
Guide
  ↓
Tool
  ↑
Guide
```

------------------------------------------------------------------------

# 15. 最关键的 GSC Query Mining

上线后每周导出：

``` text
Query
Page
Impressions
Clicks
CTR
Position
```

重点找：

### 类型 A

``` text
已有 Impression
Position 20–80
```

说明 Google 已经开始理解页面。

### 类型 B

出现意料之外的 Long-tail：

``` text
does my sentence sound natural
check if sentence sounds native
is this natural English
make sentence sound natural
```

这些 Query 比 Ahrefs Seed Keyword 更有价值。

### 类型 C

一个新主题持续出现。

例如：

``` text
formal English checker
polite English checker
English tone checker
```

这可能直接决定 Tool #2。

------------------------------------------------------------------------

# 16. 数据验证仍缺什么

在正式锁定 BUILD 前，还缺四组数据：

## A. Ahrefs / Semrush

每个 Seed：

``` text
US Volume
Global Volume
KD
CPC
Traffic Potential
Parent Topic
SERP history
```

## B. Google Trends

检查：

``` text
5 years
12 months
US
Worldwide
```

## C. Google SERP 手工 Top 10

记录：

``` text
Domain
DR
URL
Page type
Tool?
Exact match?
Backlinks
Content age
```

## D. PixelSigns Historical Backlinks

这是最终排序非常重要的一项。

如果历史外链明显偏：

``` text
web development
software
SaaS
design
```

那么 Prompt Doctor 的 Domain Fit 会进一步提高。

如果历史链接存在 education / learning / language 相关性，则 Language
Tool 的优先级会进一步提高。

------------------------------------------------------------------------

# 17. 最终 Validation Sheet 模板

复制到 Google Sheets / Excel：

  ----------------------------------------------------------------------------------------------------------------
  Keyword          US   Global    KD   CPC Trend   Trend     Top10   Tool   Domain   Conversion   Build Final
                  Vol      Vol             5Y      12M        Weak    Gap      Fit                 Cost 
                                                             Sites                                      
  ------------- ----- -------- ----- ----- ------- ------- ------- ------ -------- ------------ ------- ----------
  English         TBD      TBD   TBD   TBD TBD     TBD         TBD      5        4            5       1 Validate
  naturalness                                                                                           
  checker                                                                                               

  sentence        TBD      TBD   TBD   TBD TBD     TBD         TBD      5        4            5       1 Validate
  naturalness                                                                                           
  checker                                                                                               

  AI English      TBD      TBD   TBD   TBD TBD     TBD         TBD      4        4            5       2 Validate
  level checker                                                                                         

  CEFR level      TBD      TBD   TBD   TBD TBD     TBD         TBD      4        4            5       2 Validate
  checker                                                                                               

  prompt          TBD      TBD   TBD   TBD TBD     TBD         TBD      4        5            4       1 Validate
  checker                                                                                               

  prompt grader   TBD      TBD   TBD   TBD TBD     TBD         TBD      4        5            4       1 Validate

  English study   TBD      TBD   TBD   TBD TBD     TBD         TBD      3        4            5       1 Watch
  plan                                                                                                  
  generator                                                                                             

  English         TBD      TBD   TBD   TBD TBD     TBD         TBD      4        4            5       3 Watch
  fluency                                                                                               
  checker                                                                                               
  ----------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 18. 开发 Go / No-Go Rule

## GO

一个 Tool 进入开发，至少满足：

``` text
✓ Search Intent 明确
✓ SERP 存在可解释的机会
✓ 可以做出明显优于现有结果的产品
✓ 与 PixelSigns 主题不冲突
✓ 有业务转化路径
✓ MVP 可在合理成本内完成
```

并且 Ahrefs / Trends / SERP 数据没有出现明显反证。

## NO-GO

即使 Volume 很高，如果：

``` text
Top 10 全是极强品牌
+ 已有 Tool 产品体验优秀
+ 无明显差异化
```

则不做。

------------------------------------------------------------------------

# 19. 当前开发建议

如果今天就进入产品设计阶段：

``` text
Sprint 1
English Naturalness Checker
        ↓
Sprint 2
Index + Analytics + GSC
        ↓
2–6 weeks
Collect Search Signals
        ↓
Decision
```

与此同时继续完成：

``` text
Ahrefs Validation
SERP Top10 Audit
Historical Backlink Audit
```

这样产品开发与 SEO 调研可以并行。

------------------------------------------------------------------------

# 20. 公开 SERP / Research Evidence

本轮公开 Web Research 发现：

1.  **AI writing feedback 是真实的学习场景。** 2025 年的 EFL
    研究考察生成式 AI 辅助反馈与写作表现；2026 年 Language Testing in
    Asia 的研究继续研究 AI feedback 对 ESL academic writing 的影响。\
    Sources:\
    https://link.springer.com/article/10.1007/s44217-025-00602-7\
    https://link.springer.com/article/10.1186/s40468-026-00442-8

2.  **Vocabulary Quiz Generator 已经有明显产品竞争。**
    GradeWithAI、Makeform、AceQuiz、ClaviSay、StudyX 等公开页面已经覆盖
    quiz generation、answer keys、difficulty、scoring、PDF/share
    等能力。\
    Sources:\
    https://www.gradewithai.com/free-tools/quiz-generator/vocabulary-quiz-generator\
    https://www.makeform.ai/tools/ai-vocabulary-quiz-generator\
    https://acequiz.ai/ai-vocabulary-quiz-generator\
    https://clavisay.ai/vocabulary-quiz-generator\
    https://studyx.ai/vocabulary-quiz-generator

3.  研究文献也提醒：AI feedback 并不天然等于高质量教学反馈，因此
    PixelSigns 如果进入该方向，应把"解释 + evidence + actionable
    practice"作为产品差异，而不是简单调用 LLM 改写。

------------------------------------------------------------------------

# 21. 当前结论

第一阶段建议把资源集中在：

``` text
#1 English Naturalness Checker
#2 AI English Level Checker
#3 Prompt Doctor
```

其中：

> **Naturalness Checker 最适合作为第一个低成本 SEO MVP。**

它同时满足：

``` text
明确任务
+ 强 Tool Intent
+ 文本型低开发成本
+ ESL 差异化
+ Language Business Conversion
+ 可形成后续 Keyword Cluster
```

但这个排序仍然是 **Pre-Ahrefs Decision**。

拿到 Volume / KD / CPC / SERP History 后，允许排序发生变化。

------------------------------------------------------------------------

# 22. 下一执行动作

``` text
Step 1
导出 15–20 个 Final Seed Keywords

Step 2
Ahrefs / Semrush 补 Volume / KD / CPC

Step 3
Google Trends 补 5Y / 12M

Step 4
人工审计每个 Keyword 的 Google Top 10

Step 5
补 PixelSigns Historical Backlink / Anchor 数据

Step 6
更新 Decision Matrix

Step 7
正式确定 Tool #1

Step 8
写 Tool #1 PRD + SEO Landing Page Spec

Step 9
开发

Step 10
GSC Validation
```

------------------------------------------------------------------------

## 最终原则

> **不要问"哪个关键词流量最大"，而要问：哪个搜索任务在当前 SERP
> 中仍未被很好解决，而 PixelSigns 可以用最低开发成本做出明显更好的
> Tool，并把用户自然带入现有业务。**
