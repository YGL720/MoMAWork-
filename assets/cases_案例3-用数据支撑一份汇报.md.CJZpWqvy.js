import{_ as s,o as n,c as p,a2 as e}from"./chunks/framework.C4u7U0Dw.js";const u=JSON.parse('{"title":"案例 3：用数据支撑一份汇报","description":"","frontmatter":{},"headers":[],"relativePath":"cases/案例3-用数据支撑一份汇报.md","filePath":"cases/案例3-用数据支撑一份汇报.md"}'),t={name:"cases/案例3-用数据支撑一份汇报.md"};function l(i,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="案例-3-用数据支撑一份汇报" tabindex="-1">案例 3：用数据支撑一份汇报 <a class="header-anchor" href="#案例-3-用数据支撑一份汇报" aria-label="Permalink to &quot;案例 3：用数据支撑一份汇报&quot;">​</a></h1><blockquote><p>难度：⭐⭐⭐ ｜ 场景：数据分析 ｜ 涉及章节：第 9、12 章</p></blockquote><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>季度汇报前夜，你有一份销售数据（CSV）和一份汇报大纲，但缺&quot;用数据说话&quot;的部分。你要让汇报里的每个结论都有数字支撑。</p><h2 id="指令-可直接照做" tabindex="-1">指令（可直接照做） <a class="header-anchor" href="#指令-可直接照做" aria-label="Permalink to &quot;指令（可直接照做）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data/sales.csv 是 Q3 销售数据。我要做季度汇报，大纲在 outline.md。</span></span>
<span class="line"><span>请帮我：</span></span>
<span class="line"><span>1. 先看数据结构（字段、缺失、样例），再确认口径</span></span>
<span class="line"><span>2. 按大纲的每个论点，找出支撑数据（表格 + 数字）</span></span>
<span class="line"><span>3. 计算环比/同比，标出异常</span></span>
<span class="line"><span>4. 生成&quot;数据支撑页&quot;：每个论点 → 数据 → 图表示意 → 一句话结论</span></span>
<span class="line"><span>5. 数据口径写清楚（怎么算的），我要能对上级复述</span></span></code></pre></div><h2 id="我的做法-逐步拆解" tabindex="-1">我的做法（逐步拆解） <a class="header-anchor" href="#我的做法-逐步拆解" aria-label="Permalink to &quot;我的做法（逐步拆解）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① Read 数据结构（前几行 + 统计）</span></span>
<span class="line"><span>② 口径确认：销售额含税吗？时间按自然月吗？（先问你）</span></span>
<span class="line"><span>③ 读大纲 outline.md → 每个论点对应找数据</span></span>
<span class="line"><span>④ 汇总计算 → 环比/同比 → 异常标红</span></span>
<span class="line"><span>⑤ 生成数据支撑页（论点 → 数据 → 结论）</span></span>
<span class="line"><span>⑥ 附&quot;口径说明&quot;：每个数字怎么算出来的</span></span></code></pre></div><h2 id="交付物" tabindex="-1">交付物 <a class="header-anchor" href="#交付物" aria-label="Permalink to &quot;交付物&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Q3 汇报 · 数据支撑页</span></span>
<span class="line"><span>## 论点 1：Q3 整体增长</span></span>
<span class="line"><span>- 数据：总销售额 ¥1,240万，环比 +18%（Q2 为 ¥1,050万）</span></span>
<span class="line"><span>- 口径：不含税，按支付时间，自然月</span></span>
<span class="line"><span>- 图表示意：季度柱状对比</span></span>
<span class="line"><span>- 一句话结论：增长主要由渠道 B 贡献（见论点 2）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 论点 2：渠道 B 异军突起</span></span>
<span class="line"><span>- 数据：渠道 B 环比 +63%，全渠道最高</span></span>
<span class="line"><span>- 口径：同上</span></span>
<span class="line"><span>- 异常：渠道 A 环比 -12%，需解释</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>## 口径说明</span></span>
<span class="line"><span>1. 销售额 = 不含税，已扣退款</span></span>
<span class="line"><span>2. 时间 = 支付时间，自然月</span></span>
<span class="line"><span>3. 环比 = 本期/上期 - 1</span></span></code></pre></div><h2 id="复盘要点" tabindex="-1">复盘要点 <a class="header-anchor" href="#复盘要点" aria-label="Permalink to &quot;复盘要点&quot;">​</a></h2><table tabindex="0"><thead><tr><th>环节</th><th>关键点</th></tr></thead><tbody><tr><td>口径先行</td><td>数据支撑页的价值 = 口径可复述，别人能核查</td></tr><tr><td>论点对应</td><td>不是&quot;算一堆数&quot;，而是&quot;每个论点都有数据&quot;</td></tr><tr><td>异常标注</td><td>汇报前主动暴露异常（渠道 A 下滑），比被问到时再说更专业</td></tr></tbody></table><h2 id="可复用资产" tabindex="-1">可复用资产 <a class="header-anchor" href="#可复用资产" aria-label="Permalink to &quot;可复用资产&quot;">​</a></h2><ul><li><strong>指令模板</strong>：替换数据文件和大纲即可复用；</li><li><strong>沉淀建议</strong>：做成&quot;汇报数据支撑&quot; Skill，每季度复用；</li><li><strong>关联章节</strong>：第 9 章（写文档）、第 12 章（数据与表格）。</li></ul><p><a href="./">返回案例库</a></p>`,15)])])}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
