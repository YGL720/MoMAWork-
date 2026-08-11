import{_ as s,o as n,c as t,a2 as p}from"./chunks/framework.C4u7U0Dw.js";const u=JSON.parse('{"title":"案例 2：从聊天记录提炼需求清单","description":"","frontmatter":{},"headers":[],"relativePath":"cases/案例2-从聊天记录提炼需求清单.md","filePath":"cases/案例2-从聊天记录提炼需求清单.md"}'),e={name:"cases/案例2-从聊天记录提炼需求清单.md"};function l(i,a,o,c,r,d){return n(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="案例-2-从聊天记录提炼需求清单" tabindex="-1">案例 2：从聊天记录提炼需求清单 <a class="header-anchor" href="#案例-2-从聊天记录提炼需求清单" aria-label="Permalink to &quot;案例 2：从聊天记录提炼需求清单&quot;">​</a></h1><blockquote><p>难度：⭐⭐ ｜ 场景：信息提炼 ｜ 涉及章节：第 13、14 章</p></blockquote><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>你和同事在群里讨论了一个新功能，几十条消息来回刷。讨论结束后，你需要一份<strong>结构化需求清单</strong>：要做什么、不要做什么、谁负责什么、待确认的问题是什么。</p><h2 id="指令-可直接照做" tabindex="-1">指令（可直接照做） <a class="header-anchor" href="#指令-可直接照做" aria-label="Permalink to &quot;指令（可直接照做）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这是我和团队关于「导出功能」的聊天记录（chat_export.txt）。</span></span>
<span class="line"><span>请帮我：</span></span>
<span class="line"><span>1. 提炼出所有明确的需求点（做什么）</span></span>
<span class="line"><span>2. 标出&quot;明确不做&quot;的点（不做什么）</span></span>
<span class="line"><span>3. 整理出遗留的待确认问题（哪些还没定）</span></span>
<span class="line"><span>4. 按优先级排序（高/中/低）</span></span>
<span class="line"><span>5. 输出一份需求清单，我能直接贴进需求文档</span></span></code></pre></div><h2 id="我的做法-逐步拆解" tabindex="-1">我的做法（逐步拆解） <a class="header-anchor" href="#我的做法-逐步拆解" aria-label="Permalink to &quot;我的做法（逐步拆解）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① Read 聊天记录 → 分段理解上下文</span></span>
<span class="line"><span>② 提取&quot;需求信号&quot;：</span></span>
<span class="line"><span>   - &quot;我们要/需要/应该&quot; → 需求点</span></span>
<span class="line"><span>   - &quot;不做/不支持/别加&quot; → 排除项</span></span>
<span class="line"><span>   - &quot;？/待定/再说&quot; → 待确认问题</span></span>
<span class="line"><span>③ 去重合并（多人说了同一件事）</span></span>
<span class="line"><span>④ 按优先级分类 → 生成需求清单</span></span>
<span class="line"><span>⑤ 给&quot;易漏项&quot;加备注（例如某需求有歧义，标注两派观点）</span></span></code></pre></div><h2 id="交付物" tabindex="-1">交付物 <a class="header-anchor" href="#交付物" aria-label="Permalink to &quot;交付物&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 导出功能需求清单</span></span>
<span class="line"><span>## 明确需求（5 条）</span></span>
<span class="line"><span>- [高] 支持 CSV 导出（多个字段可选）</span></span>
<span class="line"><span>- [高] 支持按日期范围筛选后导出</span></span>
<span class="line"><span>- [中] 导出文件名含日期，避免覆盖</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>## 明确不做（2 条）</span></span>
<span class="line"><span>- 不做 PDF 导出（本期范围外）</span></span>
<span class="line"><span>- 不支持实时流式导出</span></span>
<span class="line"><span>## 待确认问题（3 条）</span></span>
<span class="line"><span>- 导出上限多少行？未定</span></span>
<span class="line"><span>- 权限：谁可以导出？待产品确认</span></span>
<span class="line"><span>## 遗留备注</span></span>
<span class="line"><span>- &quot;CSV 编码&quot;有分歧（UTF-8 vs GBK），建议尽快定</span></span></code></pre></div><h2 id="复盘要点" tabindex="-1">复盘要点 <a class="header-anchor" href="#复盘要点" aria-label="Permalink to &quot;复盘要点&quot;">​</a></h2><table tabindex="0"><thead><tr><th>环节</th><th>关键点</th></tr></thead><tbody><tr><td>信号识别</td><td>&quot;要/不要/待定&quot;三类信号词分开抓，别混在一起</td></tr><tr><td>去重</td><td>多人说同一件事，合并成一条，标&quot;3 人提及&quot;增加可信度</td></tr><tr><td>歧义标注</td><td>有分歧的点单独列出，比&quot;强行定一个&quot;更负责</td></tr></tbody></table><h2 id="可复用资产" tabindex="-1">可复用资产 <a class="header-anchor" href="#可复用资产" aria-label="Permalink to &quot;可复用资产&quot;">​</a></h2><ul><li><strong>提炼方法</strong>：&quot;信号词三类法&quot;适用于任何讨论记录、会议纪要；</li><li><strong>沉淀建议</strong>：存成&quot;会议纪要提炼&quot; Skill；</li><li><strong>关联章节</strong>：第 13 章（知识管理）、第 14 章（信息筛选）。</li></ul><p><a href="./">返回案例库</a></p>`,15)])])}const q=s(e,[["render",l]]);export{u as __pageData,q as default};
