# PixelSigns.art 网站开发方案

> **项目定位：Old Domain → New Demand → Tool Page**\
> 利用 PixelSigns.art 的历史数字产品 / Software / SaaS
> 语义作为主题边界，以 AI 工具为主轴，以 **AI × Language Learning**
> 作为第二增长方向，通过 1--3
> 个真正可用的工具页验证旧域名是否仍具备自然搜索价值。

------------------------------------------------------------------------

## 1. 项目目标

PixelSigns.art 第一阶段不建设成大型内容站，也不尝试完整恢复旧网站。

核心目标只有一个：

> **用最少页面、最低开发与内容成本，验证 PixelSigns.art
> 能否依靠历史主题相关性 + 新增搜索需求 + 工具型页面重新获得 Google
> 自然曝光，并向现有 AI 应用和语言学习业务导流。**

第一阶段建议周期：**6--12 周**。

主要验证指标：

-   Google 是否快速发现并收录新页面
-   核心工具页是否产生 Impressions
-   GSC 是否出现预期关键词及新的长尾 Query
-   是否出现 Top 100 → Top 50 → Top 20 的排名移动
-   是否产生自然点击
-   工具使用率、CTA 点击率是否证明流量具有业务价值
-   历史外链页面恢复后是否重新获得抓取、曝光或排名信号

------------------------------------------------------------------------

## 2. PixelSigns.art 的建议定位

### 2.1 主题边界

结合域名历史方向，建议把网站主题控制在：

**Digital Products / SaaS / AI Tools / Productivity / Learning Tools**

不要直接把 PixelSigns.art 改造成一个纯语言学习品牌站。

更自然的主题迁移路径是：

``` text
PixelSigns
    ↓
Design / Digital Product / Software
    ↓
SaaS / Online Tools
    ↓
AI Tools
    ↓
AI for Work + AI for Learning
    ↓
AI × Language Learning
```

这样可以同时承接两块现有业务：

``` text
                    PixelSigns.art
                         │
              AI Tools & Learning Tools
                  ┌──────┴──────┐
                  │             │
              AI 应用业务    语言学习业务
                  │             │
          Productivity      AI Language
          Generator         Learning
          Analyzer          Speaking
          Checker           Writing
          Assistant         Vocabulary
```

### 2.2 品牌建议

推荐定位语：

**PixelSigns --- AI Tools for Work & Learning**

备选：

-   Practical AI Tools for Everyday Tasks
-   Smart Tools for Work, Writing & Learning
-   AI-Powered Tools for Productivity and Learning

首页不要承担大量 SEO 关键词排名任务。首页主要负责：

1.  建立 PixelSigns 新品牌语义
2.  聚合核心工具
3.  解释网站价值
4.  向两个业务方向分发用户
5.  建立网站可信度

------------------------------------------------------------------------

## 3. 第一阶段：旧域名审计

在开发核心工具之前，先完成 Domain Audit。

### 3.1 Wayback 历史调查

使用 Wayback Machine 检查过去 5--10 年：

-   网站长期主题
-   首页历史版本
-   Services / Products / Blog / Portfolio 等核心栏目
-   曾经获得较多曝光的页面
-   URL 结构
-   品牌名称变化
-   是否发生过明显主题漂移
-   是否曾被其他站点接管

最终整理：

``` text
/history-audit/
    historical-topics.csv
    historical-urls.csv
    historical-screenshots/
    redirect-plan.csv
```

### 3.2 外链审计

使用 Ahrefs / Semrush / Majestic 等工具导出：

-   Domain Rating / Authority
-   Referring Domains
-   Backlinks
-   Anchor Text
-   Dofollow / Nofollow
-   外链目标 URL
-   外链来源主题
-   Lost Backlinks
-   高质量历史链接

重点不是只看 DR，而是回答：

> **哪些旧 URL 仍然拥有值得利用的真实外链？**

为每个历史 URL 标记：

  旧 URL 类型                            处理
  -------------------------------------- -------------------------
  有优质外链 + 新站存在高度相关页面      301
  有优质外链 + 可合理重建内容            重建 URL 或做最相关 301
  无外链、无价值                         404 / 410
  Spam / 博彩 / 成人 / Crypto / 垃圾页   410
  与新站主题完全无关                     不强行 Redirect

**禁止：把大量历史 URL 统一 301 到首页。**

### 3.3 污染检查

重点排查：

-   Casino / Gambling
-   Adult
-   Crypto Spam
-   日文 / 中文垃圾页
-   Doorway Pages
-   Parasite SEO
-   大规模自动生成页面
-   大量异常 301
-   Hack 痕迹
-   完全无关行业历史

### 3.4 Google 当前状态

检查：

``` text
site:pixelsigns.art
"pixelsigns.art"
"PixelSigns"
```

并在站点上线后接入 Google Search Console，观察：

-   Indexed Pages
-   Crawled - currently not indexed
-   Discovered - currently not indexed
-   404
-   Redirect
-   Manual Actions
-   Security Issues
-   Historical / unexpected queries

### 3.5 Domain Audit 最终输出

形成一页结论：

``` text
历史主题：
历史核心页面：
主要外链主题：
主要 Anchor：
高价值旧 URL：
污染风险：
与 AI Tools 匹配程度：
与 Language Learning 匹配程度：
建议恢复 URL：
建议 410 URL：
是否值得继续投入：
```

------------------------------------------------------------------------

## 4. 第二阶段：关键词机会研究

不要先决定"我要写什么文章"。

正确顺序：

> **历史主题 → 今天的新需求 → Keyword Cluster → SERP → Tool
> Opportunity**

### 4.1 候选关键词四个来源

#### A. AI 化

围绕历史 Software / Digital / SaaS 主题扩展：

``` text
AI + generator
AI + checker
AI + analyzer
AI + evaluator
AI + planner
AI + assistant
AI + converter
AI + comparison
```

#### B. 工具化

寻找用户想立即完成任务的关键词：

``` text
checker
calculator
generator
planner
converter
analyzer
estimator
comparison
formatter
grader
evaluator
```

#### C. 新搜索行为

重点寻找近几年增长的表达：

``` text
AI ...
... online
... tool
... free
... instant
... generator
... checker
```

#### D. AI × Language Learning

这是 PixelSigns 同时给两块业务导流的重点交叉区。

候选方向：

``` text
AI English speaking practice
AI pronunciation checker
AI grammar checker for learners
AI vocabulary generator
English level checker
AI writing feedback
AI sentence checker
AI conversation practice
English study plan generator
vocabulary quiz generator
pronunciation practice tool
language learning plan generator
```

这些只是 **Seed Keywords**，不能直接进入开发。

------------------------------------------------------------------------

## 5. 关键词筛选模型

第一轮整理 **20--50 个候选词**。

每个词必须填写决策表：

  --------------------------------------------------------------------------------------------
  Keyword     历史匹配    Volume Trend          KD SERP    Tool          Business   Decision
                                                           Opportunity   Value      
  --------- ---------- --------- ------- --------- ------- ------------- ---------- ----------
  Keyword A         高       TBD ↑             TBD 弱      强            高         Research

  Keyword B         中       TBD →             TBD 强      中            中         Drop

  Keyword C         高       TBD ↑↑            TBD 弱      很强          高         Priority
  --------------------------------------------------------------------------------------------

### 5.1 判断权重

建议内部评分：

``` text
历史主题匹配       20%
搜索需求           15%
趋势               10%
关键词难度         10%
SERP 实际强度      20%
Tool Opportunity   15%
商业价值           10%
```

**KD 只能初筛，不能作为最终决策。**

真正重要的是人工检查 Google Top 10。

### 5.2 理想 SERP 信号

优先寻找：

-   Top 10 存在小站
-   Reddit / Quora / Forum 排名
-   排名页面发布时间较旧
-   SERP 大量是 Blog，而用户实际需要 Tool
-   现有 Tool UX 很差
-   工具需要登录才能体验
-   页面广告很多
-   Mobile Experience 差
-   搜索意图混乱
-   Google 尚未出现绝对垄断型产品

最终只进入开发：

> **1--3 个关键词 / Keyword Cluster**

------------------------------------------------------------------------

## 6. 推荐的网站信息架构

第一阶段保持极简。

``` text
/
├── /tools/
│   ├── [tool-1]/
│   ├── [tool-2]/
│   └── [tool-3]/
│
├── /guides/
│   ├── [supporting-guide-1]/
│   └── [supporting-guide-2]/
│
├── /about/
├── /contact/
├── /privacy/
├── /terms/
├── /editorial-policy/
└── /disclaimer/
```

如果关键词验证证明 AI Language Learning 方向存在机会，再扩展：

``` text
/learn/
/ai-tools/
```

第一阶段不要为了"网站看起来丰富"提前创建大量空栏目。

------------------------------------------------------------------------

## 7. 首页方案

### Hero

**AI Tools for Work & Learning**

副标题：

> Practical AI-powered tools that help you create, analyze, learn and
> make decisions faster.

CTA：

**Explore Tools**

### Featured Tools

展示第一阶段的 1--3 个核心工具。

每个 Card：

``` text
Tool Name
一句话解决什么问题
[Try Tool]
```

### Use Cases

分成两组：

**Work with AI**

-   Create
-   Analyze
-   Compare
-   Plan
-   Improve

**Learn with AI**

-   Practice English
-   Improve Writing
-   Build Vocabulary
-   Practice Speaking

### Why PixelSigns

强调：

-   Free / Fast
-   No unnecessary signup
-   Useful output
-   Privacy-conscious
-   Clear methodology

### Footer

包含：

-   Tools
-   Guides
-   About
-   Contact
-   Privacy
-   Terms
-   Editorial Policy
-   Disclaimer

------------------------------------------------------------------------

## 8. 核心 Tool Page 模板

每个 Tool Page 必须首先是"产品"，其次才是"SEO 页面"。

推荐结构：

``` text
H1
一句话说明工具解决的问题

[Interactive Tool]

Result
↓
解释结果
↓
下一步建议

How It Works

What The Result Means

Examples

Limitations / Methodology

Related Tools

FAQ

CTA
```

### 8.1 Above the Fold

用户打开页面后应该很快看到真正的工具。

避免：

``` text
H1
800 字 SEO 内容
广告
介绍
FAQ
……
工具
```

推荐：

``` text
H1
一句话 Value Proposition
Tool UI
```

### 8.2 SEO 辅助内容

每页约 **500--1500 字**，根据搜索意图调整。

内容重点：

-   工具做什么
-   如何使用
-   如何理解结果
-   示例
-   方法
-   限制
-   FAQ

不要为了字数写无价值内容。

### 8.3 Tool 必须真正完成任务

不要做：

``` text
输入内容
↓
Submit
↓
跳转注册
```

应该让用户先获得价值：

``` text
Input
↓
Process
↓
Useful Result
↓
Explanation
↓
Optional CTA
```

------------------------------------------------------------------------

## 9. AI 与语言学习业务的导流设计

不要让 PixelSigns 看起来像 Affiliate / Doorway Site。

采用 **Tool → Value → Contextual CTA**。

### AI 应用导流

例如：

``` text
Free Tool
↓
用户获得基础结果
↓
Need advanced analysis?
↓
Try [Existing AI Product]
```

### Language Learning 导流

例如：

``` text
English Checker
↓
获得评分 / Feedback
↓
Want to practice this skill every day?
↓
Continue in [Language Learning Product]
```

原则：

> **先完成搜索者当前任务，再推荐下一步产品。**

这样 SEO 页面本身具有独立价值。

------------------------------------------------------------------------

## 10. Supporting Content 策略

第一阶段最多围绕核心工具创建少量 Supporting Pages。

例如核心工具：

``` text
/english-level-checker/
```

可以配套：

``` text
/guides/how-to-check-your-english-level/
/guides/english-levels-explained/
```

形成：

``` text
Supporting Guide
       ↓
    Tool Page
       ↑
Supporting Guide
```

Tool Page 是 SEO Cluster 的中心。

第一阶段不建设"每天发文章"的 Blog 系统。

------------------------------------------------------------------------

## 11. 历史 URL 恢复策略

建立：

``` text
redirect-map.csv
```

字段：

``` text
Old URL
Historical Topic
Backlinks
Referring Domains
Anchor
New URL
Action
Reason
```

Action：

``` text
KEEP
REBUILD
301
404
410
```

### 判断流程

``` text
旧 URL
  │
  ├─ 有高质量外链？
  │      │
  │      ├─ No → 是否存在其他历史价值？
  │      │          ├─ No → 404 / 410
  │      │          └─ Yes → Review
  │      │
  │      └─ Yes
  │           │
  │           ├─ 能重建高度相关内容 → Rebuild
  │           │
  │           ├─ 有高度相关新页面 → 301
  │           │
  │           └─ 完全不相关 → 不强行 Redirect
```

------------------------------------------------------------------------

## 12. 技术开发方案

### 12.1 推荐技术栈

推荐：

``` text
Next.js
TypeScript
Tailwind CSS
Vercel / Cloudflare
PostgreSQL（只有需要数据时）
Serverless API / Edge Functions
```

原因：

-   SSR / SSG 适合 SEO
-   Tool 页面开发方便
-   Core Web Vitals 容易优化
-   Sitemap / Metadata / Schema 易管理
-   后续接 AI API 容易
-   可以逐步扩展，不需要第一阶段建设复杂 CMS

如果页面数量非常少，可以先不接 CMS。

内容直接使用：

``` text
MDX / Markdown + Git
```

------------------------------------------------------------------------

## 13. SEO 技术要求

### Indexability

确保：

``` text
robots.txt
sitemap.xml
canonical
200 / 301 / 404 / 410 正确
```

### Metadata

每个核心页独立：

``` text
Title
Meta Description
Canonical
Open Graph
Twitter Card
```

### Structured Data

按页面真实内容选择：

-   WebSite
-   Organization
-   WebApplication / SoftwareApplication
-   FAQPage（仅在内容和展示符合要求时）
-   BreadcrumbList

不要为了 Rich Result 滥加 Schema。

### Performance

目标：

``` text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

优先：

-   尽量少 JS
-   图片 WebP / AVIF
-   Lazy Load
-   Font 优化
-   Tool API Streaming / Loading State
-   CDN

------------------------------------------------------------------------

## 14. Analytics 与数据基础设施

上线前接入：

### 必须

-   Google Search Console
-   GA4 或隐私友好的 Analytics
-   Bing Webmaster Tools
-   Sitemap
-   Error Logging

### 建议记录 Tool Events

``` text
tool_view
tool_start
tool_submit
tool_success
tool_error
result_view
cta_ai_product
cta_language_product
signup_click
```

这样可以区分：

> **SEO 有流量但 Tool 不好用**

和：

> **Tool 很好用但 Google 没给流量**

这是两个完全不同的问题。

------------------------------------------------------------------------

## 15. 数据看板

每周记录：

  指标                 Week 1   Week 2   Week 4   Week 8   Week 12
  ------------------ -------- -------- -------- -------- ---------
  Indexed Pages                                          
  Impressions                                            
  Clicks                                                 
  Queries                                                
  Top 100 Keywords                                       
  Top 20 Keywords                                        
  Tool Starts                                            
  Tool Completions                                       
  CTA Clicks                                             

核心观察不是单纯 Sessions，而是：

``` text
Index
↓
Impressions
↓
Queries
↓
Ranking Movement
↓
Clicks
↓
Tool Usage
↓
Business CTA
```

------------------------------------------------------------------------

## 16. 第一阶段开发 Backlog

### P0 --- Domain Research

-   [ ] Wayback 历史页面整理
-   [ ] 历史 URL 导出
-   [ ] Ahrefs / Semrush Backlink Audit
-   [ ] Anchor Audit
-   [ ] Spam Audit
-   [ ] Google Index Audit
-   [ ] Redirect Map

### P0 --- Keyword Research

-   [ ] 生成 20--50 个 Seed Keywords
-   [ ] Ahrefs Volume / KD
-   [ ] Google Trends
-   [ ] SERP 人工检查
-   [ ] Tool Opportunity 判断
-   [ ] Business Value 判断
-   [ ] 最终确定 1--3 个关键词

### P0 --- Website Foundation

-   [ ] Next.js 项目
-   [ ] Design System
-   [ ] Header / Footer
-   [ ] Homepage
-   [ ] Tool Page Template
-   [ ] Guide Template
-   [ ] About
-   [ ] Contact
-   [ ] Privacy
-   [ ] Terms
-   [ ] Editorial Policy
-   [ ] Disclaimer

### P0 --- SEO

-   [ ] Metadata
-   [ ] Canonical
-   [ ] Sitemap
-   [ ] robots.txt
-   [ ] Schema
-   [ ] 404 / 410
-   [ ] Redirect Rules
-   [ ] Internal Links
-   [ ] GSC
-   [ ] Bing Webmaster Tools

### P0 --- Core Product

-   [ ] Tool #1
-   [ ] Tool #2（数据验证后）
-   [ ] Tool #3（数据验证后）

### P1 --- Analytics

-   [ ] Analytics
-   [ ] Tool Events
-   [ ] CTA Tracking
-   [ ] Error Tracking
-   [ ] Weekly SEO Dashboard

------------------------------------------------------------------------

## 17. 推荐实施节奏

### Week 1：Domain Archaeology

只研究，不急着开发工具。

输出：

-   Historical Topic Map
-   Historical URL List
-   Backlink Map
-   Spam Risk
-   Redirect Plan

### Week 2：Keyword Opportunity

输出 20--50 个候选词。

完成：

-   Ahrefs
-   Trends
-   Google SERP
-   Reddit / PAA / Autocomplete 等需求调查

筛到 5--10 个候选。

### Week 3：Final Selection + Prototype

人工分析 SERP。

最终只选择：

**1--3 个 Tool Opportunities**

先设计 Tool #1。

### Week 4：MVP 上线

上线：

-   Homepage
-   Tool #1
-   About
-   Contact
-   Privacy
-   Terms
-   Editorial Policy / Disclaimer
-   Sitemap
-   GSC
-   Analytics

同时处理高价值历史 URL。

### Week 5--8：观察

重点观察：

-   Crawl
-   Index
-   Impressions
-   Query Expansion
-   Ranking Movement

不要因为两周没有流量就立即生产 50 篇文章。

### Week 8--12：Decision Gate

#### 情况 A：出现明显 SEO 信号

例如：

``` text
Impressions ↑
Query 数量 ↑
关键词进入 Top 50
部分长尾进入 Top 20
```

继续：

-   优化 Tool #1
-   开发 Tool #2
-   增加 Supporting Pages
-   强化内链

#### 情况 B：有曝光但排名弱

检查：

-   Search Intent
-   Tool Quality
-   Content Depth
-   SERP Competitors
-   Internal Linking
-   Historical Relevance

然后迭代。

#### 情况 C：几乎没有任何信号

不要继续批量生产内容。

重新判断：

-   Domain 历史价值
-   Keyword Selection
-   Index 状态
-   Tool Intent
-   SERP Difficulty

必要时停止投入。

------------------------------------------------------------------------

## 18. 第一阶段明确"不做"的事情

为了避免把测试项目变成大型 SEO 项目，第一阶段明确不做：

-   不一次发布 30--100 篇 AI 文章
-   不批量生成 Programmatic SEO 页面
-   不做大量城市 / 国家 / 行业 Landing Pages
-   不把所有历史 URL 301 到首页
-   不购买大量低质量外链
-   不直接把网站变成纯 Language Learning Blog
-   不为了 SEO 字数写大量无价值文字
-   不同时开发 10 个 Tool
-   不在数据验证之前建设复杂 CMS
-   不在没有 Search Signal 时持续扩大投入

------------------------------------------------------------------------

## 19. Go / No-Go 判断框架

12 周后做一次正式评估。

### Go

出现以下信号中的多个：

-   Google 正常抓取和索引
-   Tool Page 持续产生 Impressions
-   Query 数量增长
-   长尾关键词自然出现
-   排名持续改善
-   Tool 有真实使用
-   CTA 有点击
-   历史 Backlink 页面产生价值

行动：

> **扩展同一 Keyword Cluster，而不是立刻扩到完全不同主题。**

### Iterate

Google 有曝光，但点击 / 排名一般。

行动：

> 改进 Tool、Intent Match、页面内容和 UX，再测试 4--8 周。

### Stop / Pivot

长期：

-   无有效 Impressions
-   无相关 Query
-   历史主题与新需求关联弱
-   SERP 实际竞争远高于预期
-   Domain 存在严重污染

行动：

> 停止内容扩张，把开发资源转移到新的关键词机会或其他域名。

------------------------------------------------------------------------

## 20. PixelSigns.art 的推荐增长路径

不要一开始做：

``` text
AI Blog + Language Blog + News + 100 Articles
```

建议：

``` text
                    PixelSigns.art
                          │
                    Tool #1 MVP
                          │
               Google Search Signal?
                    ┌─────┴─────┐
                   No           Yes
                   │             │
             调整 / 停止     优化 Tool #1
                                 │
                              Tool #2
                                 │
                         Supporting Content
                                 │
                         Keyword Cluster
                                 │
                      ┌──────────┴──────────┐
                      │                     │
                  AI Products       AI Language Learning
                      │                     │
                  AI 业务导流          语言业务导流
```

------------------------------------------------------------------------

## 21. 项目核心公式

> **Old Authority × New Keyword × Low Competition × Tool Intent ×
> Product Quality**

PixelSigns.art 的价值不应该建立在"这是一个旧域名，所以 Google
会给权重"的假设上。

真正需要验证的是：

``` text
历史主题相关性
        ×
仍然有效的历史链接/品牌信号
        ×
新的真实搜索需求
        ×
较弱的 SERP
        ×
明显的工具型 Intent
        ×
比现有结果更好的产品体验
```

------------------------------------------------------------------------

## 22. 最终执行 SOP

``` text
01 购买 / 接管域名
        ↓
02 Wayback + Backlink + Spam Audit
        ↓
03 确定 Historical Topic Boundary
        ↓
04 扩展 20–50 个 New Demand Keywords
        ↓
05 Ahrefs + Trends + SERP Validation
        ↓
06 关键词决策表
        ↓
07 只选择 1–3 个机会
        ↓
08 优先开发 Tool #1
        ↓
09 上线基础可信度页面
        ↓
10 恢复 / Redirect 高价值历史 URL
        ↓
11 GSC + Sitemap + Analytics
        ↓
12 观察 Index → Impression → Query → Rank
        ↓
13 有信号：扩 Tool / Cluster
        ↓
14 无信号：调整或停止投入
```

------------------------------------------------------------------------

# 一句话战略

> **把 PixelSigns.art 做成一个"小而有用"的 AI Tools 品牌：先沿着旧域名的
> Software / Digital / SaaS 历史语义寻找新工具需求，用 1 个真正好用的
> Tool 验证 Google 信号；验证成功后，再向 AI Productivity 和 AI ×
> Language Learning 两条业务线扩展，而不是先做一个大而全的内容站。**
