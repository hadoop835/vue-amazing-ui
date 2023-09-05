import{d as b,h as r,y as C,C as y,c as u,H as o,w as c,k as s,a as E,Q as p,o as d}from"./chunks/framework.21315e99.js";const g=p('<h1 id="标签页-tabs" tabindex="-1">标签页 Tabs <a class="header-anchor" href="#标签页-tabs" aria-label="Permalink to &quot;标签页 Tabs&quot;">​</a></h1><br><p><em>选项卡切换组件</em></p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>提供平级的区域将大块内容进行收纳和展现，保持界面整洁</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2>',6),B=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPages&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPages&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="禁用某一项" tabindex="-1">禁用某一项 <a class="header-anchor" href="#禁用某一项" aria-label="Permalink to &quot;禁用某一项&quot;">​</a></h2><p><em>禁用 key: 3 标签页</em></p><br>`,4),f=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPagesDisabled</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    disabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPagesDisabled&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPagesDisabled</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    disabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPagesDisabled&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="居中展示" tabindex="-1">居中展示 <a class="header-anchor" href="#居中展示" aria-label="Permalink to &quot;居中展示&quot;">​</a></h2>`,2),T=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">centered</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPages&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">centered</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPages&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="左右滑动-容纳更多标签" tabindex="-1">左右滑动，容纳更多标签 <a class="header-anchor" href="#左右滑动-容纳更多标签" aria-label="Permalink to &quot;左右滑动，容纳更多标签&quot;">​</a></h2>`,2),v=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 320px;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPages&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 320px;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPages&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="大号标签页" tabindex="-1">大号标签页 <a class="header-anchor" href="#大号标签页" aria-label="Permalink to &quot;大号标签页&quot;">​</a></h2>`,2),h=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;large&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPages&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;large&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPages&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="自定义内容" tabindex="-1">自定义内容 <a class="header-anchor" href="#自定义内容" aria-label="Permalink to &quot;自定义内容&quot;">​</a></h2>`,2),k=s("p",null,"key: 1 的 slot 内容",-1),m=s("p",null,"key: 2 的 slot 内容",-1),P=s("p",null,"key: 3 的 slot 内容",-1),D=p(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watchEffect } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabPages</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    key: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tab: </span><span style="color:#9ECBFF;">&#39;Tab 6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    content: </span><span style="color:#9ECBFF;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">activeKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;activeKey:&#39;</span><span style="color:#E1E4E8;">, activeKey.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tab-pages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabPages&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:active-key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;activeKey&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;key: 1 的 slot 内容&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">2</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;key: 2 的 slot 内容&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;key: 3 的 slot 内容&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Tabs</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watchEffect } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabPages</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 1&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 2&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 4&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 5&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    key: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    tab: </span><span style="color:#032F62;">&#39;Tab 6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    content: </span><span style="color:#032F62;">&#39;Content of Tab Pane 6&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">activeKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;activeKey:&#39;</span><span style="color:#24292E;">, activeKey.value)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tab-pages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabPages&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:active-key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;activeKey&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;key: 1 的 slot 内容&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">2</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;key: 2 的 slot 内容&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;key: 3 的 slot 内容&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Tabs</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2>`,2),q=s("thead",null,[s("tr",null,[s("th",null,"参数"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"必传")])],-1),A=s("tr",null,[s("td",null,"tabPages"),s("td",null,"标签页数组"),s("td",null,"Tab[]"),s("td",null,"[]"),s("td",null,"true")],-1),K=s("tr",null,[s("td",null,"centered"),s("td",null,"标签是否居中展示"),s("td",null,"boolean"),s("td",null,"false"),s("td",null,"false")],-1),_=s("tr",null,[s("td",null,"size"),s("td",null,"标签页大小"),s("td",null,"'small' | 'large'"),s("td",null,"'small'"),s("td",null,"false")],-1),w=s("td",null,[E("当前激活 "),s("code",null,"tab"),E(" 面板的 "),s("code",null,"key")],-1),x=s("td",null,"string | number",-1),S=s("td",null,"''",-1),U=s("td",null,"false",-1),N=p('<h2 id="tab-type" tabindex="-1">Tab Type <a class="header-anchor" href="#tab-type" aria-label="Permalink to &quot;Tab Type&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>必传</th></tr></thead><tbody><tr><td>key</td><td>对应 <code>activeKey</code></td><td>string | number</td><td>true</td></tr><tr><td>tab</td><td>标签页显示文字</td><td>string</td><td>true</td></tr><tr><td>content</td><td>标签页内容</td><td>string | slot</td><td>false</td></tr><tr><td>disabled</td><td>禁用对应标签页</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td>(key: string | number) =&gt; void</td></tr></tbody></table>',4),J=JSON.parse('{"title":"标签页 Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/tabs.md","filePath":"guide/components/tabs.md"}'),z={name:"guide/components/tabs.md"},O=b({...z,setup(V){const t=r([{key:"1",tab:"Tab 1",content:"Content of Tab Pane 1"},{key:"2",tab:"Tab 2",content:"Content of Tab Pane 2"},{key:"3",tab:"Tab 3",content:"Content of Tab Pane 3"},{key:"4",tab:"Tab 4",content:"Content of Tab Pane 4"},{key:"5",tab:"Tab 5",content:"Content of Tab Pane 5"},{key:"6",tab:"Tab 6",content:"Content of Tab Pane 6"}]),i=r([{key:"1",tab:"Tab 1",content:"Content of Tab Pane 1"},{key:"2",tab:"Tab 2",content:"Content of Tab Pane 2"},{key:"3",tab:"Tab 3",disabled:!0,content:"Content of Tab Pane 3"},{key:"4",tab:"Tab 4",content:"Content of Tab Pane 4"},{key:"5",tab:"Tab 5",content:"Content of Tab Pane 5"},{key:"6",tab:"Tab 6",content:"Content of Tab Pane 6"}]),n=r("1");return C(()=>{console.log("activeKey:",n.value)}),(I,a)=>{const e=y("Tabs",!0),F=y("Tag");return d(),u("div",null,[g,o(e,{"tab-pages":t.value,"active-key":n.value,"onUpdate:activeKey":a[0]||(a[0]=l=>n.value=l)},null,8,["tab-pages","active-key"]),B,o(e,{"tab-pages":i.value,"active-key":n.value,"onUpdate:activeKey":a[1]||(a[1]=l=>n.value=l)},null,8,["tab-pages","active-key"]),f,o(e,{centered:"","tab-pages":t.value,"active-key":n.value,"onUpdate:activeKey":a[2]||(a[2]=l=>n.value=l)},null,8,["tab-pages","active-key"]),T,o(e,{style:{width:"320px"},"tab-pages":t.value,"active-key":n.value,"onUpdate:activeKey":a[3]||(a[3]=l=>n.value=l)},null,8,["tab-pages","active-key"]),v,o(e,{size:"large","tab-pages":t.value,"active-key":n.value,"onUpdate:activeKey":a[4]||(a[4]=l=>n.value=l)},null,8,["tab-pages","active-key"]),h,o(e,{"tab-pages":t.value,"active-key":n.value,"onUpdate:activeKey":a[5]||(a[5]=l=>n.value=l)},{1:c(()=>[k]),2:c(()=>[m]),3:c(()=>[P]),_:1},8,["tab-pages","active-key"]),D,s("table",null,[q,s("tbody",null,[A,K,_,s("tr",null,[s("td",null,[E("activeKey "),o(F,{color:"cyan"},{default:c(()=>[E("v-model")]),_:1})]),w,x,S,U])])]),N])}}});export{J as __pageData,O as default};
