import{d as p,h as t,C as e,c as o,H as l,Q as s,o as c}from"./chunks/framework.21315e99.js";const r=s('<h1 id="走马灯-carousel" tabindex="-1">走马灯 Carousel <a class="header-anchor" href="#走马灯-carousel" aria-label="Permalink to &quot;走马灯 Carousel&quot;">​</a></h1><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>首页banner轮播展示</li><li>轮播新闻展示</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p><em>支持自动切换，导航切换，键盘上、下、左、右按键切换，分页切换</em></p><br>',6),E=s(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">images</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Carousel</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:images</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;images&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;360&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">images</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Carousel</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:images</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;images&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;360&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="自定义导航、分页样式" tabindex="-1">自定义导航、分页样式 <a class="header-anchor" href="#自定义导航、分页样式" aria-label="Permalink to &quot;自定义导航、分页样式&quot;">​</a></h2>`,2),y=s(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">images</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;image-5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    src: </span><span style="color:#9ECBFF;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Carousel</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:images</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;images&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;360&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">nav-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#13C2C2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:nav-size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;48&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">page-active-color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#13C2C2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:page-style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ width: &#39;20px&#39;, height: &#39;12px&#39;, borderRadius: &#39;12px&#39;, backgroundColor: &#39;#DDD&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">images</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;image-5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    src: </span><span style="color:#032F62;">&#39;https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Carousel</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:images</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;images&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;360&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">nav-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#13C2C2&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:nav-size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;48&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">page-active-color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#13C2C2&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:page-style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ width: &#39;20px&#39;, height: &#39;12px&#39;, borderRadius: &#39;12px&#39;, backgroundColor: &#39;#DDD&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>images</td><td>走马灯图片数组</td><td>Image[]</td><td>[]</td><td>true</td></tr><tr><td>interval</td><td>自动滑动轮播间隔，单位s</td><td>number</td><td>3000</td><td>false</td></tr><tr><td>width</td><td>走马灯宽度</td><td>number | string</td><td>&#39;100%&#39;</td><td>false</td></tr><tr><td>height</td><td>走马灯高度</td><td>number | string</td><td>&#39;100vh&#39;</td><td>false</td></tr><tr><td>navigation</td><td>是否显示导航</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>navColor</td><td>导航颜色</td><td>string</td><td>&#39;#FFF&#39;</td><td>false</td></tr><tr><td>navSize</td><td>导航大小，单位px</td><td>number</td><td>36</td><td>false</td></tr><tr><td>pagination</td><td>是否显示分页</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>pageActiveColor</td><td>分页选中颜色</td><td>string</td><td>&#39;#1677FF&#39;</td><td>false</td></tr><tr><td>pageSize</td><td>分页大小，单位px</td><td>number</td><td>10</td><td>false</td></tr><tr><td>pageStyle</td><td>分页样式，优先级高于 <code>pageSize</code></td><td>CSSProperties</td><td>{}</td><td>false</td></tr><tr><td>disableOnInteraction</td><td>用户操作导航或分页之后，是否禁止自动切换</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>pauseOnMouseEnter</td><td>鼠标悬浮时暂停自动切换，鼠标离开时恢复自动切换</td><td>boolean</td><td>true</td><td>false</td></tr></tbody></table><h2 id="image-type" tabindex="-1">Image Type <a class="header-anchor" href="#image-type" aria-label="Permalink to &quot;Image Type&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>必传</th></tr></thead><tbody><tr><td>title</td><td>图片名称</td><td>string</td><td>false</td></tr><tr><td>src</td><td>图片地址</td><td>string</td><td>true</td></tr><tr><td>link</td><td>图片跳转链接</td><td>string</td><td>false</td></tr></tbody></table>`,5),g=JSON.parse('{"title":"走马灯 Carousel","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/carousel.md","filePath":"guide/components/carousel.md"}'),i={name:"guide/components/carousel.md"},m=p({...i,setup(d){const n=t([{title:"image-1",src:"https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg",link:""},{title:"image-2",src:"https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg",link:""},{title:"image-3",src:"https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg",link:""},{title:"image-4",src:"https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/4.jpg",link:""},{title:"image-5",src:"https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/5.jpg",link:""}]);return(h,u)=>{const a=e("Carousel",!0);return c(),o("div",null,[r,l(a,{images:n.value,height:360},null,8,["images"]),E,l(a,{images:n.value,height:360,"nav-color":"#13C2C2","nav-size":48,"page-active-color":"#13C2C2","page-style":{width:"20px",height:"12px",borderRadius:"12px",backgroundColor:"#DDD"}},null,8,["images"]),y])}}});export{g as __pageData,m as default};
