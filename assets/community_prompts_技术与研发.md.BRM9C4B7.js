import{_ as n,o as a,c as p,a2 as t}from"./chunks/framework.C4u7U0Dw.js";const d=JSON.parse('{"title":"技术与研发提示词模板","description":"技术岗位的 5 条提示词模板：需求拆解、代码审查、报错排查、技术方案、写文档。","frontmatter":{"title":"技术与研发提示词模板","description":"技术岗位的 5 条提示词模板：需求拆解、代码审查、报错排查、技术方案、写文档。"},"headers":[],"relativePath":"community/prompts/技术与研发.md","filePath":"community/prompts/技术与研发.md"}'),e={name:"community/prompts/技术与研发.md"};function l(o,s,i,c,r,u){return a(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="💻-技术与研发-·-5-条提示词模板" tabindex="-1">💻 技术与研发 · 5 条提示词模板 <a class="header-anchor" href="#💻-技术与研发-·-5-条提示词模板" aria-label="Permalink to &quot;💻 技术与研发 · 5 条提示词模板&quot;">​</a></h1><blockquote><p>技术人用 AI 最容易犯的错，是<strong>直接要代码</strong>。 更好的用法是：<strong>要判断、要拆解、要验证路径</strong>。这几条都是这个思路。</p></blockquote><h2 id="本行三句话骨架" tabindex="-1">本行三句话骨架 <a class="header-anchor" href="#本行三句话骨架" aria-label="Permalink to &quot;本行三句话骨架&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我在做【项目 / 技术栈 / 版本】，现在的状态是【…】。</span></span>
<span class="line"><span>帮我产出【任务清单 / 审查意见 / 排查步骤】，形式【…】。</span></span>
<span class="line"><span>不确定的地方标&quot;待验证&quot;，不要直接给我一个没依据的结论。</span></span></code></pre></div><hr><h2 id="_1-·-一句话需求-→-可排期的任务清单" tabindex="-1">1 · 一句话需求 → 可排期的任务清单 <a class="header-anchor" href="#_1-·-一句话需求-→-可排期的任务清单" aria-label="Permalink to &quot;1 · 一句话需求 → 可排期的任务清单&quot;">​</a></h2><p><strong>什么时候用</strong>：产品/老板甩来一句话需求，你要把它变成能估时、能排期的东西。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>需求原话：【原样粘贴】</span></span>
<span class="line"><span>背景：【为什么要做 / 谁提的 / 什么时候要 / 现有系统是什么样】</span></span>
<span class="line"><span>已知约束：【技术栈 / 不能动的部分 / 时间 / 人力】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>帮我拆：</span></span>
<span class="line"><span>① 先写出&quot;需求背后真正要解决的问题&quot;（一句话），以及 2 个我该回去确认的疑问</span></span>
<span class="line"><span>② 拆成任务清单，每个任务标注：类型（前端/后端/数据/测试/运维）、依赖关系、粗估工作量（人天，给区间）</span></span>
<span class="line"><span>③ 标出&quot;风险最高的 3 个任务&quot;及风险点</span></span>
<span class="line"><span>④ 给一个最小可用版本（MVP）范围：先做什么就能上线给用户看</span></span>
<span class="line"><span>⑤ 列出&quot;这个需求里没说清、但会影响工期的 5 个问题&quot;，写成可以直接发给提需求的人的句子</span></span>
<span class="line"><span>规矩：不了解的技术细节标&quot;待评估&quot;，不要凭空估一个数。</span></span></code></pre></div><p><strong>它给你</strong>：任务清单 + MVP 范围 + 追问清单。</p><hr><h2 id="_2-·-代码审查-按严重程度-说清为什么要改" tabindex="-1">2 · 代码审查（按严重程度，说清为什么要改） <a class="header-anchor" href="#_2-·-代码审查-按严重程度-说清为什么要改" aria-label="Permalink to &quot;2 · 代码审查（按严重程度，说清为什么要改）&quot;">​</a></h2><p><strong>什么时候用</strong>：要给同事的代码提意见，或者自查一段自己不放心的地方。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>语言与框架：【…】，这段代码的作用是：【…】</span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span>【粘贴代码】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请按三个级别审查：</span></span>
<span class="line"><span>① 必须改（会导致 bug / 安全问题 / 数据错误）——引用具体行，说明&quot;什么情况下会出问题&quot;</span></span>
<span class="line"><span>② 建议改（可读性、性能、可维护性）——说明改动带来的收益</span></span>
<span class="line"><span>③ 可以不管（风格偏好类）——简单带过</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另外：</span></span>
<span class="line"><span>- 指出我自己可能没意识到的边界情况（空值、并发、超长输入、权限）</span></span>
<span class="line"><span>- 如果这段代码有更简单的写法，给我一个对比版本，并说明代价</span></span>
<span class="line"><span>规矩：不确定的地方标&quot;需要看上下文&quot;；不要重写我的整体架构，只针对这段。</span></span></code></pre></div><p><strong>它给你</strong>：分级审查意见 + 边界情况 + 可选简化写法。</p><hr><h2 id="_3-·-报错排查-给假设-不是给答案" tabindex="-1">3 · 报错排查（给假设，不是给答案） <a class="header-anchor" href="#_3-·-报错排查-给假设-不是给答案" aria-label="Permalink to &quot;3 · 报错排查（给假设，不是给答案）&quot;">​</a></h2><p><strong>什么时候用</strong>：一个报错卡了两小时，你已经开始乱改代码了。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>环境：【语言 / 版本 / 系统 / 依赖管理工具】</span></span>
<span class="line"><span>报错信息（完整粘贴，包括堆栈）：</span></span>
<span class="line"><span>【粘贴】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我做了什么导致它出现：【…】</span></span>
<span class="line"><span>我已经试过：【123（照实写，包括失败的那些）】</span></span>
<span class="line"><span>相关代码 / 配置：</span></span>
<span class="line"><span>【粘贴】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>帮我：</span></span>
<span class="line"><span>① 先用一句话解释这个报错&quot;通常在说什么&quot;</span></span>
<span class="line"><span>② 给我 3 个最可能的原因，按可能性排序，每个都要说明&quot;如果是这个原因，会有什么额外现象&quot;</span></span>
<span class="line"><span>③ 每个原因给我一个&quot;最小验证步骤&quot;（怎么用最少改动确认是不是它）</span></span>
<span class="line"><span>④ 告诉我&quot;哪些信息还需要我提供&quot;（日志、版本、配置片段）</span></span>
<span class="line"><span>⑤ 提醒我：在确认原因之前，不要动哪些东西</span></span>
<span class="line"><span>规矩：不要一上来就给我一大段重写后的代码；先定位，再改。</span></span></code></pre></div><p><strong>它给你</strong>：原因假设 + 验证步骤。<strong>&quot;先定位再改&quot;能避免你把问题改得更深。</strong></p><hr><h2 id="_4-·-技术方案-连取舍一起写出来" tabindex="-1">4 · 技术方案（连取舍一起写出来） <a class="header-anchor" href="#_4-·-技术方案-连取舍一起写出来" aria-label="Permalink to &quot;4 · 技术方案（连取舍一起写出来）&quot;">​</a></h2><p><strong>什么时候用</strong>：要写方案文档、要评审、要在两个技术路线之间选一个。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>要解决的问题：【…】</span></span>
<span class="line"><span>现状：【系统/代码/流程现在是什么样，痛点在哪】</span></span>
<span class="line"><span>约束条件：【时间 / 人力 / 现有技术栈 / 预算 / 合规】</span></span>
<span class="line"><span>我倾向的方案：【…】，我担心的点：【…】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>帮我写一份技术方案：</span></span>
<span class="line"><span>① 问题陈述（一页以内，不带解决方案）</span></span>
<span class="line"><span>② 2-3 个候选方案，每个写：怎么做、优点、代价、风险、适用前提</span></span>
<span class="line"><span>③ 按&quot;交付时间 / 维护成本 / 扩展性 / 风险&quot;做对比表</span></span>
<span class="line"><span>④ 给出推荐，并说明&quot;什么条件下我会改推荐另一个&quot;</span></span>
<span class="line"><span>⑤ 落地步骤（分阶段，每阶段的验收标准）</span></span>
<span class="line"><span>⑥ 我可能忽略的隐患（运维、监控、回滚、数据迁移）</span></span>
<span class="line"><span>规矩：不确定的性能数字标&quot;需实测&quot;；不要用&quot;高可用&quot;&quot;可扩展&quot;这种没定义的词。</span></span></code></pre></div><p><strong>它给你</strong>：一份能拿去评审的方案草稿。<strong>第④条&quot;什么条件下改推荐&quot;是评审时最加分的部分。</strong></p><hr><h2 id="_5-·-写文档-readme-接口文档-变更说明" tabindex="-1">5 · 写文档（README / 接口文档 / 变更说明） <a class="header-anchor" href="#_5-·-写文档-readme-接口文档-变更说明" aria-label="Permalink to &quot;5 · 写文档（README / 接口文档 / 变更说明）&quot;">​</a></h2><p><strong>什么时候用</strong>：代码写完了，文档还没写；或者要给同事/客户说明这次改了什么。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>要写的是：【README / 接口文档 / 上线变更说明 / 使用指南】</span></span>
<span class="line"><span>读者是谁：【新同事 / 老同事 / 外部对接方 / 客户】</span></span>
<span class="line"><span>要覆盖的内容：</span></span>
<span class="line"><span>【1. … 2. …（或者直接粘贴代码/配置文件，我来整理）】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>帮我写：</span></span>
<span class="line"><span>① 开头 3 句话：这是什么、解决什么问题、谁该看</span></span>
<span class="line"><span>② 正文（结构清晰，能用表格就用表格，给可复制的示例）</span></span>
<span class="line"><span>③ 常见问题 FAQ（我会遇到的 5 个，含报错和处理办法）</span></span>
<span class="line"><span>④ 一段&quot;这次变更要特别注意的地方&quot;（给变更说明用：影响范围、要不要停机、怎么回滚）</span></span>
<span class="line"><span>规矩：只写真实存在的功能和参数；我没提供的配置项不要编；不确定的写&quot;待补充&quot;。</span></span></code></pre></div><p><strong>它给你</strong>：一份能直接放进仓库/发出去的文档。</p><hr><h2 id="⚠️-这一行的三条提醒" tabindex="-1">⚠️ 这一行的三条提醒 <a class="header-anchor" href="#⚠️-这一行的三条提醒" aria-label="Permalink to &quot;⚠️ 这一行的三条提醒&quot;">​</a></h2><ol><li><strong>粘贴代码前先看有没有密钥</strong>：token、密码、内网地址、客户数据——粘之前删掉。</li><li><strong>AI 给的库和 API 可能是&quot;看起来很像真的&quot;的假货</strong>：版本号、参数名、函数名，跑之前一定核对官方文档。这是它最典型的坑。</li><li><strong>让它做判断，不是替你做决定</strong>：架构选型、上线时机、要不要重构——它给取舍，你签字。</li></ol><hr><p><strong>目录</strong>：<a href="/MoMAWork-/community/prompts/">← 回到行业提示词模板库</a> ｜ 下一个行业 → <strong><a href="/MoMAWork-/community/prompts/外贸与跨境.html">外贸与跨境</a></strong></p>`,34)])])}const g=n(e,[["render",l]]);export{d as __pageData,g as default};
