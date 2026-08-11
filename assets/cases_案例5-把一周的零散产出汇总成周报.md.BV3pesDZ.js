import{_ as s,o as n,c as p,a2 as e}from"./chunks/framework.C4u7U0Dw.js";const u=JSON.parse('{"title":"案例 5：把一周的零散产出汇总成周报","description":"","frontmatter":{},"headers":[],"relativePath":"cases/案例5-把一周的零散产出汇总成周报.md","filePath":"cases/案例5-把一周的零散产出汇总成周报.md"}'),t={name:"cases/案例5-把一周的零散产出汇总成周报.md"};function l(i,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="案例-5-把一周的零散产出汇总成周报" tabindex="-1">案例 5：把一周的零散产出汇总成周报 <a class="header-anchor" href="#案例-5-把一周的零散产出汇总成周报" aria-label="Permalink to &quot;案例 5：把一周的零散产出汇总成周报&quot;">​</a></h1><blockquote><p>难度：⭐⭐⭐ ｜ 场景：自动化汇总 ｜ 涉及章节：第 2、15 章</p></blockquote><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>这一周你产出了很多零散的东西：改了 3 个文件、写了 2 篇文档、提交了若干次代码、开了 2 个会。周五你要交周报，但回忆&quot;这周到底干了啥&quot;就要半小时。</p><h2 id="指令-可直接照做" tabindex="-1">指令（可直接照做） <a class="header-anchor" href="#指令-可直接照做" aria-label="Permalink to &quot;指令（可直接照做）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我要写周报，素材分散在：</span></span>
<span class="line"><span>- docs/ 下本周修改过的文件</span></span>
<span class="line"><span>- 代码仓库的本周提交记录</span></span>
<span class="line"><span>- 会议纪要目录 docs/meetings/</span></span>
<span class="line"><span>请帮我：</span></span>
<span class="line"><span>1. 扫描这些来源，汇总成&quot;本周工作素材清单&quot;</span></span>
<span class="line"><span>2. 按类别整理（写文档/改代码/开会/其他）</span></span>
<span class="line"><span>3. 生成周报初稿：本周完成 → 数据/进展 → 问题与风险 → 下周计划</span></span>
<span class="line"><span>4. 用我的常用格式（结论先行、简洁）</span></span>
<span class="line"><span>5. 标注哪些数据需要我确认</span></span></code></pre></div><h2 id="我的做法-逐步拆解" tabindex="-1">我的做法（逐步拆解） <a class="header-anchor" href="#我的做法-逐步拆解" aria-label="Permalink to &quot;我的做法（逐步拆解）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① Glob 按修改时间找 docs/ 本周文件</span></span>
<span class="line"><span>② 查代码提交记录（本周的 commit）</span></span>
<span class="line"><span>③ 列出本周会议纪要 → 提取关键结论</span></span>
<span class="line"><span>④ 汇总成素材清单 → 按类别分组</span></span>
<span class="line"><span>⑤ 套用周报模板生成初稿 → 每个结论标注数据来源</span></span>
<span class="line"><span>⑥ 标注&quot;待你确认&quot;项（比如某个数据口径、某件事是否要写进去）</span></span></code></pre></div><h2 id="交付物" tabindex="-1">交付物 <a class="header-anchor" href="#交付物" aria-label="Permalink to &quot;交付物&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 周报 - 2026-W33</span></span>
<span class="line"><span>## 本周完成</span></span>
<span class="line"><span>1. 完成导出功能开发（提交 12 次，关联需求 #45）</span></span>
<span class="line"><span>2. 编写用户手册 v2（docs/manual-v2.md，本周更新）</span></span>
<span class="line"><span>3. 参加需求评审会 2 次（纪要见 docs/meetings/）</span></span>
<span class="line"><span>## 数据与进展</span></span>
<span class="line"><span>- 代码：本周 +12 commits，+1,240 / -380 行</span></span>
<span class="line"><span>- 文档：更新 4 篇，新增 2 篇</span></span>
<span class="line"><span>## 问题与风险</span></span>
<span class="line"><span>- 导出性能在 10 万行数据下降速，需评估（待确认是否本期解决）</span></span>
<span class="line"><span>## 下周计划</span></span>
<span class="line"><span>1. 导出性能优化</span></span>
<span class="line"><span>2. 手册终审</span></span></code></pre></div><h2 id="复盘要点" tabindex="-1">复盘要点 <a class="header-anchor" href="#复盘要点" aria-label="Permalink to &quot;复盘要点&quot;">​</a></h2><table tabindex="0"><thead><tr><th>环节</th><th>关键点</th></tr></thead><tbody><tr><td>素材先行</td><td>先扫描汇总，再动笔写——周报的本质是&quot;盘点&quot;不是&quot;创作&quot;</td></tr><tr><td>数据要来源</td><td>每个数字（提交数/行数）都来自可查的记录，不是凭记忆</td></tr><tr><td>待确认标注</td><td>拿不准的（是否写某件事），标出来让你拍板</td></tr></tbody></table><h2 id="可复用资产" tabindex="-1">可复用资产 <a class="header-anchor" href="#可复用资产" aria-label="Permalink to &quot;可复用资产&quot;">​</a></h2><ul><li><strong>周报模板</strong>：存为 Skill&quot;周报生成&quot;，每周五一句话触发；</li><li><strong>自动化升级</strong>：接第 15 章，做成定时自动化（生成草稿→你审阅）；</li><li><strong>关联章节</strong>：第 2 章（任务描述）、第 15 章（自动化）。</li></ul><p><a href="./">返回案例库</a></p>`,15)])])}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
