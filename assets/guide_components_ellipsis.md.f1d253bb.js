import{_ as o,C as e,c,H as p,w as a,Q as t,o as r,a as s,k as l}from"./chunks/framework.602d4887.js";const S=JSON.parse('{"title":"文本省略 Ellipsis","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/ellipsis.md","filePath":"guide/components/ellipsis.md"}'),E={name:"guide/components/ellipsis.md"},i=t('<h1 id="文本省略-ellipsis" tabindex="-1">文本省略 Ellipsis <a class="header-anchor" href="#文本省略-ellipsis" aria-label="Permalink to &quot;文本省略 Ellipsis&quot;">​</a></h1><br><p><em>文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取</em></p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>当文本长度超过展示区域，需要自动处理省略号时</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2>',6),y=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:maxWidth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;240&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:maxWidth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;240&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="多行省略" tabindex="-1">多行省略 <a class="header-anchor" href="#多行省略" aria-label="Permalink to &quot;多行省略&quot;">​</a></h2>`,2),d=l("br",null,null,-1),h=l("br",null,null,-1),u=l("br",null,null,-1),g=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:line</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    电灯熄灭 物换星移 泥牛入海&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;黑暗好像 一颗巨石 按在胸口&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;独脚大盗</span></span>
<span class="line"><span style="color:#E1E4E8;">    百万富翁 摸爬滚打&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;黑暗好像 一颗巨石 按在胸口</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:line</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    电灯熄灭 物换星移 泥牛入海&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;黑暗好像 一颗巨石 按在胸口&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;独脚大盗</span></span>
<span class="line"><span style="color:#24292E;">    百万富翁 摸爬滚打&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;黑暗好像 一颗巨石 按在胸口</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="点击展开" tabindex="-1">点击展开 <a class="header-anchor" href="#点击展开" aria-label="Permalink to &quot;点击展开&quot;">​</a></h2>`,2),_=l("br",null,null,-1),b=l("br",null,null,-1),m=l("br",null,null,-1),f=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expand</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:line</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    电灯熄灭 物换星移 泥牛入海&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;黑暗好像 一颗巨石 按在胸口&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;独脚大盗</span></span>
<span class="line"><span style="color:#E1E4E8;">    百万富翁 摸爬滚打&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;黑暗好像 一颗巨石 按在胸口</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expand</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:line</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    电灯熄灭 物换星移 泥牛入海&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;黑暗好像 一颗巨石 按在胸口&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;独脚大盗</span></span>
<span class="line"><span style="color:#24292E;">    百万富翁 摸爬滚打&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;黑暗好像 一颗巨石 按在胸口</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="定制-tooltip-内容" tabindex="-1">定制 Tooltip 内容 <a class="header-anchor" href="#定制-tooltip-内容" aria-label="Permalink to &quot;定制 Tooltip 内容&quot;">​</a></h2>`,2),v=l("div",{style:{"text-align":"center"}},[s(" 《秦皇岛》"),l("br"),s("住在我心里孤独的"),l("br"),s("孤独的海怪 痛苦之王"),l("br"),s("开始厌倦 深海的光 停滞的海浪 ")],-1),A=t(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:max-width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;240&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">tooltip</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text-align: center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        《秦皇岛》&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;住在我心里孤独的&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;孤独的海怪 痛苦之王&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;开始厌倦</span></span>
<span class="line"><span style="color:#E1E4E8;">        深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Ellipsis</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:max-width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;240&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">tooltip</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text-align: center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        《秦皇岛》&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;住在我心里孤独的&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;孤独的海怪 痛苦之王&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;开始厌倦</span></span>
<span class="line"><span style="color:#24292E;">        深海的光 停滞的海浪</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Ellipsis</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>maxWidth</td><td>文本最大宽度</td><td>number | string</td><td>&#39;100%&#39;</td><td>false</td></tr><tr><td>line</td><td>最大行数</td><td>number</td><td>undefined</td><td>false</td></tr><tr><td>expand</td><td>是否启用点击文本展开全部</td><td>boolean</td><td>false</td><td>false</td></tr><tr><td>tooltip</td><td>是否启用文本提示框</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>tooltipMaxWidth</td><td>提示框内容最大宽度，单位px，默认不设置时，提示文本内容自动与展示文本宽度保持一致</td><td>number</td><td>undefined</td><td>false</td></tr><tr><td>tooltipFontSize</td><td>提示文本字体大小，单位px，优先级高于 <code>overlayStyle</code></td><td>number</td><td>14</td><td>false</td></tr><tr><td>tooltipColor</td><td>提示文本字体颜色，优先级高于 <code>overlayStyle</code></td><td>string</td><td>&#39;#FFF&#39;</td><td>false</td></tr><tr><td>tooltipBackgroundColor</td><td>提示框背景颜色，优先级高于 <code>overlayStyle</code></td><td>string</td><td>&#39;rgba(0, 0, 0, .85)&#39;</td><td>false</td></tr><tr><td>tooltipOverlayStyle</td><td>提示框内容区域样式</td><td>CSSProperties</td><td>{padding: &#39;8px 12px&#39;, textAlign: &#39;justify&#39;}</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>expandChange</td><td>点击文本展开收起时的回调</td><td>(expand: boolean) =&gt; void</td></tr></tbody></table>`,5);function D(C,F,q,x,T,k){const n=e("Ellipsis",!0);return r(),c("div",null,[i,p(n,{maxWidth:240},{default:a(()=>[s(" 住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪 ")]),_:1}),y,p(n,{line:2},{default:a(()=>[s(" 电灯熄灭 物换星移 泥牛入海"),d,s("黑暗好像 一颗巨石 按在胸口"),h,s("独脚大盗 百万富翁 摸爬滚打"),u,s("黑暗好像 一颗巨石 按在胸口 ")]),_:1}),g,p(n,{expand:"",line:2},{default:a(()=>[s(" 电灯熄灭 物换星移 泥牛入海"),_,s("黑暗好像 一颗巨石 按在胸口"),b,s("独脚大盗 百万富翁 摸爬滚打"),m,s("黑暗好像 一颗巨石 按在胸口 ")]),_:1}),f,p(n,{"max-width":240},{tooltip:a(()=>[v]),default:a(()=>[s(" 住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪 ")]),_:1}),A])}const P=o(E,[["render",D]]);export{S as __pageData,P as default};
