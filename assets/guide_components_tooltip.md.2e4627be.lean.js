import{d as E,C as p,c as y,H as a,w as s,Q as t,o as i,a as l}from"./chunks/framework.602d4887.js";const d=t('<h1 id="文字提示-tooltip" tabindex="-1">文字提示 Tooltip <a class="header-anchor" href="#文字提示-tooltip" aria-label="Permalink to &quot;文字提示 Tooltip&quot;">​</a></h1><br><p><em>悬浮提示，展现需要关注的信息</em></p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>当某个页面需要向用户显示警告的信息时</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2>',6),u=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">openChange</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">visible</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;visible:&#39;</span><span style="color:#E1E4E8;">, visible)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;30&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:max-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;240&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@open-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openChange&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;">&gt;特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;特斯拉&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:max-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;380&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@open-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openChange&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;">&gt;《哥斯拉》由传奇影业、华纳兄弟影业公司等联合出品。该片讲述了世界各地异常自然灾害的发生频率的上升，被隐瞒了几十年的秘密逐渐浮出水面，人类即将面临一场来自远古的浩劫，三只强大怪兽也将轮番登场掀起层层高潮，这场混战也将在怪兽与人类之间打响的故事&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;哥斯拉&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">openChange</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">visible</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;visible:&#39;</span><span style="color:#24292E;">, visible)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;30&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:max-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;240&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@open-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openChange&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;">&gt;特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;特斯拉&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:max-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;380&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@open-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openChange&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;">&gt;《哥斯拉》由传奇影业、华纳兄弟影业公司等联合出品。该片讲述了世界各地异常自然灾害的发生频率的上升，被隐瞒了几十年的秘密逐渐浮出水面，人类即将面临一场来自远古的浩劫，三只强大怪兽也将轮番登场掀起层层高潮，这场混战也将在怪兽与人类之间打响的故事&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;哥斯拉&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="自定义样式" tabindex="-1">自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;">​</a></h2>`,2),g=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:max-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;320&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:font-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;18&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;rgba(0, 0, 0, 0.85)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">background-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#FFF&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:overlay-style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{padding: &#39;12px 18px&#39;, borderRadius: &#39;12px&#39;}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;">&gt;《哥斯拉大战金刚》是由美国传奇影业公司出品。该片讲述了人类计划将所有巨兽从地球上抹去，而传说中哥斯拉和金刚两个王者被设计进行了对决，最终两大巨兽联手破坏人类计划的故事。&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;哥斯拉大战金刚&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tooltip</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:max-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;320&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:font-size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;18&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;rgba(0, 0, 0, 0.85)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">background-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#FFF&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:overlay-style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{padding: &#39;12px 18px&#39;, borderRadius: &#39;12px&#39;}&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;">&gt;《哥斯拉大战金刚》是由美国传奇影业公司出品。该片讲述了人类计划将所有巨兽从地球上抹去，而传说中哥斯拉和金刚两个王者被设计进行了对决，最终两大巨兽联手破坏人类计划的故事。&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;哥斯拉大战金刚&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="暂无数据" tabindex="-1">暂无数据 <a class="header-anchor" href="#暂无数据" aria-label="Permalink to &quot;暂无数据&quot;">​</a></h2>`,2),F=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;暂无数据&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;暂无数据&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>maxWidth</td><td>提示框内容最大宽度，单位px</td><td>number</td><td>120</td><td>false</td></tr><tr><td>content</td><td>展示的文本</td><td>string | slot</td><td>&#39;暂无内容&#39;</td><td>false</td></tr><tr><td>tooltip</td><td>提示的文本</td><td>string | slot</td><td>&#39;暂无提示&#39;</td><td>false</td></tr><tr><td>fontSize</td><td>提示文本字体大小，单位px，优先级高于 <code>overlayStyle</code></td><td>number</td><td>14</td><td>false</td></tr><tr><td>color</td><td>提示文本字体颜色，优先级高于 <code>overlayStyle</code></td><td>string</td><td>&#39;#FFF&#39;</td><td>false</td></tr><tr><td>backgroundColor</td><td>提示框背景色，优先级高于 <code>overlayStyle</code></td><td>string</td><td>&#39;rgba(0,0,0,.85)&#39;</td><td>false</td></tr><tr><td>overlayStyle</td><td>提示框内容区域样式</td><td>CSSProperties</td><td>{}</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>openChange</td><td>显示隐藏的回调</td><td>(visible: boolean) =&gt; void</td></tr></tbody></table>`,5),C=JSON.parse('{"title":"文字提示 Tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/tooltip.md","filePath":"guide/components/tooltip.md"}'),h={name:"guide/components/tooltip.md"},b=E({...h,setup(m){function e(c){console.log("visible:",c)}return(c,B)=>{const n=p("Button"),o=p("Tooltip",!0),r=p("Space");return i(),y("div",null,[d,a(r,{size:30},{default:s(()=>[a(o,{"max-width":240,onOpenChange:e},{tooltip:s(()=>[l("特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备")]),default:s(()=>[a(n,{type:"primary"},{default:s(()=>[l("特斯拉")]),_:1})]),_:1}),a(o,{"max-width":380,onOpenChange:e},{tooltip:s(()=>[l("《哥斯拉》由传奇影业、华纳兄弟影业公司等联合出品。该片讲述了世界各地异常自然灾害的发生频率的上升，被隐瞒了几十年的秘密逐渐浮出水面，人类即将面临一场来自远古的浩劫，三只强大怪兽也将轮番登场掀起层层高潮，这场混战也将在怪兽与人类之间打响的故事")]),default:s(()=>[a(n,{type:"primary"},{default:s(()=>[l("哥斯拉")]),_:1})]),_:1})]),_:1}),u,a(o,{"max-width":320,"font-size":18,color:"rgba(0, 0, 0, 0.85)","background-color":"#FFF","overlay-style":{padding:"12px 18px",borderRadius:"12px"}},{tooltip:s(()=>[l("《哥斯拉大战金刚》是由美国传奇影业公司出品。该片讲述了人类计划将所有巨兽从地球上抹去，而传说中哥斯拉和金刚两个王者被设计进行了对决，最终两大巨兽联手破坏人类计划的故事。")]),default:s(()=>[a(n,{type:"primary"},{default:s(()=>[l("哥斯拉大战金刚")]),_:1})]),_:1}),g,a(o,null,{default:s(()=>[a(n,{type:"primary"},{default:s(()=>[l("暂无数据")]),_:1})]),_:1}),F])}}});export{C as __pageData,b as default};
