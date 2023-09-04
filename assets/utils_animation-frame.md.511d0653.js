import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.602d4887.js";const F=JSON.parse('{"title":"动画帧","description":"","frontmatter":{},"headers":[],"relativePath":"utils/animation-frame.md","filePath":"utils/animation-frame.md"}'),l={name:"utils/animation-frame.md"},e=o(`<h1 id="动画帧" tabindex="-1">动画帧 <a class="header-anchor" href="#动画帧" aria-label="Permalink to &quot;动画帧&quot;">​</a></h1><details class="details custom-block"><summary>Show Source Code</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// @ts-ignore 兼容性requestAnimationFrame</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">requestAnimationFrame</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;undefined&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> window.requestAnimationFrame </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> window.mozRequestAnimationFrame </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> window.webkitRequestAnimationFrame </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> window.msRequestAnimationFrame </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// @ts-ignore 兼容性cancelAnimationFrame</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cancelAnimationFrame</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;undefined&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> window.cancelAnimationFrame </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> window.mozCancelAnimationFrame </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @ts-ignore 兼容性requestAnimationFrame</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">requestAnimationFrame</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> window </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;undefined&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> window.requestAnimationFrame </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.mozRequestAnimationFrame </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.webkitRequestAnimationFrame </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.msRequestAnimationFrame </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// @ts-ignore 兼容性cancelAnimationFrame</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cancelAnimationFrame</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> window </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;undefined&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> window.cancelAnimationFrame </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> window.mozCancelAnimationFrame </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}</span></span></code></pre></div></details><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>希望执行一个动画时</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p><em>使用方法同官方用法</em></p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame" target="_blank" rel="noreferrer">MDN requestAnimationFrame</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelAnimationFrame" target="_blank" rel="noreferrer">MDN cancelAnimationFrame</a></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { requestAnimationFrame, cancelAnimationFrame } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-amazing-ui&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { requestAnimationFrame, cancelAnimationFrame } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-amazing-ui&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,8),p=[e];function t(r,c,i,y,E,m){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
