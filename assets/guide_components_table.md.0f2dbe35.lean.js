import{d as B,h as l,C as y,o as b,c as f,k as s,a,H as n,w as p,Q as i,t as F}from"./chunks/framework.bed82aaa.js";const D={id:"表格-table",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#表格-table","aria-label":'Permalink to "表格 Table<BackTop />"'},"​",-1),x=s("br",null,null,-1),A=s("p",null,[s("em",null,"展示行列数据")],-1),v=s("h2",{id:"何时使用",tabindex:"-1"},[a("何时使用 "),s("a",{class:"header-anchor",href:"#何时使用","aria-label":'Permalink to "何时使用"'},"​")],-1),w=s("ul",null,[s("li",null,"当有大量结构化的数据需要展现时"),s("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1),_=s("h2",{id:"基本使用",tabindex:"-1"},[a("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),I=i(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">total</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">queryParams</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        pageSize: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        page: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">columns</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;名字&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;年龄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;职业&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;job&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;性别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;地址&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tableData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;Stephen&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          age: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          job: </span><span style="color:#9ECBFF;">&#39;player&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          address: </span><span style="color:#9ECBFF;">&#39;CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;Leo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          age: </span><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          job: </span><span style="color:#9ECBFF;">&#39;actor&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          address: </span><span style="color:#9ECBFF;">&#39;LA&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;Mr.Dear&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          age: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          job: </span><span style="color:#9ECBFF;">&#39;boy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          address: </span><span style="color:#9ECBFF;">&#39;Beijing&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;superman&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          age: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          job: </span><span style="color:#9ECBFF;">&#39;boy&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sex: </span><span style="color:#9ECBFF;">&#39;男&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          address: </span><span style="color:#9ECBFF;">&#39;US&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模拟调用接口获取列表数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    loading.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">pagination</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span><span style="color:#FFAB70;">page</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pageSize</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">}) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;pagination:&#39;</span><span style="color:#E1E4E8;">, pagination)</span></span>
<span class="line"><span style="color:#E1E4E8;">  queryParams.value.page </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pagination.page</span></span>
<span class="line"><span style="color:#E1E4E8;">  queryParams.value.pageSize </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pagination.pageSize</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Table</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:columns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:data-source</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:total</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;total&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:loading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onChange&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 配置指定列数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">record</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      hello {{ record.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">job</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ job, index }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      hi {{ job }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">Table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">loading</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">total</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">queryParams</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        pageSize: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        page: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">columns</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;名字&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;年龄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;职业&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;job&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;性别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;地址&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tableData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;Stephen&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          age: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          job: </span><span style="color:#032F62;">&#39;player&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sex: </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          address: </span><span style="color:#032F62;">&#39;CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;Leo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          age: </span><span style="color:#005CC5;">36</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          job: </span><span style="color:#032F62;">&#39;actor&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sex: </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          address: </span><span style="color:#032F62;">&#39;LA&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;Mr.Dear&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          age: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          job: </span><span style="color:#032F62;">&#39;boy&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sex: </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          address: </span><span style="color:#032F62;">&#39;Beijing&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;superman&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          age: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          job: </span><span style="color:#032F62;">&#39;boy&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sex: </span><span style="color:#032F62;">&#39;男&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          address: </span><span style="color:#032F62;">&#39;US&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ])</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getData</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  loading.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模拟调用接口获取列表数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    loading.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">pagination</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span><span style="color:#E36209;">page</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pageSize</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">}) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;pagination:&#39;</span><span style="color:#24292E;">, pagination)</span></span>
<span class="line"><span style="color:#24292E;">  queryParams.value.page </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pagination.page</span></span>
<span class="line"><span style="color:#24292E;">  queryParams.value.pageSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pagination.pageSize</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Table</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:columns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:data-source</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tableData&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:total</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;total&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:loading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onChange&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 配置指定列数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">record</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      hello {{ record.name }}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">job</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ job, index }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      hi {{ job }}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">Table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="加载中" tabindex="-1">加载中 <a class="header-anchor" href="#加载中" aria-label="Permalink to &quot;加载中&quot;">​</a></h2>`,2),j=i(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">columns</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;名字&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;年龄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;职业&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;job&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;性别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;地址&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:columns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">columns</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;名字&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;年龄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;职业&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;job&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;性别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;地址&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:columns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loading</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="暂无数据" tabindex="-1">暂无数据 <a class="header-anchor" href="#暂无数据" aria-label="Permalink to &quot;暂无数据&quot;">​</a></h2>`,2),k=i(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">columns</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;名字&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;年龄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;职业&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;job&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;性别&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          title: </span><span style="color:#9ECBFF;">&#39;地址&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          dataIndex: </span><span style="color:#9ECBFF;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:columns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;columns&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:total</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">columns</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;名字&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;name&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;年龄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;age&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;职业&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;job&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;job&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;性别&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;sex&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          title: </span><span style="color:#032F62;">&#39;地址&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          dataIndex: </span><span style="color:#032F62;">&#39;address&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:columns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;columns&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:total</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>columns</td><td>表格列的配置项</td><td>Column[]</td><td>[]</td><td>false</td></tr><tr><td>dataSource</td><td>表格数据数组</td><td>any[]</td><td>[]</td><td>false</td></tr><tr><td>pagination</td><td>分页配置</td><td>Pagination</td><td>{ page: 1, pageSize: 10 }</td><td>false</td></tr><tr><td>showPagination</td><td>是否显示分页</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>hideOnSinglePage</td><td>只有 <code>1</code> 页时是否隐藏分页</td><td>boolean</td><td>false</td><td></td></tr><tr><td>total</td><td>数据总数</td><td>number</td><td>0</td><td>false</td></tr><tr><td>loading</td><td>是否加载中</td><td>boolean</td><td>false</td><td>false</td></tr></tbody></table><h2 id="column-type" tabindex="-1">Column Type <a class="header-anchor" href="#column-type" aria-label="Permalink to &quot;Column Type&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>必传</th></tr></thead><tbody><tr><td>title</td><td>列头显示文字</td><td>string</td><td>false</td></tr><tr><td>width</td><td>列宽度</td><td>number | string</td><td>true</td></tr><tr><td>dataIndex</td><td>列数据字符索引</td><td>string</td><td>true</td></tr><tr><td>slot</td><td>列插槽名称索引</td><td>string</td><td>false</td></tr></tbody></table><h2 id="pagination-type" tabindex="-1">Pagination Type <a class="header-anchor" href="#pagination-type" aria-label="Permalink to &quot;Pagination Type&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>必传</th></tr></thead><tbody><tr><td>page</td><td>当前页码</td><td>number</td><td>true</td></tr><tr><td>pageSize</td><td>每页条数</td><td>number</td><td>true</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>分页变化时的回调</td><td>(pager: {page: number, pageSize: number}) =&gt; void</td></tr></tbody></table>`,9),N=JSON.parse('{"title":"表格 Table","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/table.md","filePath":"guide/components/table.md"}'),S={name:"guide/components/table.md"},O=B({...S,setup(P){const e=l(!1),u=l(80),d=l({pageSize:5,page:1}),t=l([{title:"名字",width:60,dataIndex:"name",slot:"name"},{title:"年龄",width:30,dataIndex:"age"},{title:"职业",width:50,dataIndex:"job",slot:"job"},{title:"性别",width:30,dataIndex:"sex"},{title:"地址",width:100,dataIndex:"address"}]),C=l([{name:"Stephen",age:30,job:"player",sex:"男",address:"CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia"},{name:"Leo",age:36,job:"actor",sex:"男",address:"LA"},{name:"Mr.Dear",age:23,job:"boy",sex:"男",address:"Beijing"},{name:"superman",age:32,job:"boy",sex:"男",address:"US"}]);function g(){e.value=!0,setTimeout(()=>{e.value=!1},500)}function h(o){console.log("pagination:",o),d.value.page=o.page,d.value.pageSize=o.pageSize,g()}return(o,T)=>{const m=y("BackTop"),c=y("Table",!0),E=y("ClientOnly");return b(),f("div",null,[s("h1",D,[a("表格 Table"),n(m),a(),q]),x,A,v,w,_,n(E,null,{default:p(()=>[n(c,{columns:t.value,"data-source":C.value,total:u.value,loading:e.value,onChange:h},{name:p(r=>[a(" hello "+F(r.name),1)]),job:p(({job:r,index:z})=>[a(" hi "+F(r),1)]),_:1},8,["columns","data-source","total","loading"])]),_:1}),I,n(E,null,{default:p(()=>[n(c,{columns:t.value,loading:""},null,8,["columns"])]),_:1}),j,n(E,null,{default:p(()=>[n(c,{columns:t.value,total:0},null,8,["columns"])]),_:1}),k])}}});export{N as __pageData,O as default};
