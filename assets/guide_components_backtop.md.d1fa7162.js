import{d as r,a as D,G as F,e as y,L as l,w as t,v as s,h as a,U as o,b as i}from"./chunks/framework.150108e4.js";const d=s("h1",{id:"回到顶部-backtop",tabindex:"-1"},[a("回到顶部 backtop "),s("a",{class:"header-anchor",href:"#回到顶部-backtop","aria-label":'Permalink to "回到顶部 backtop"'},"​")],-1),h=s("br",null,null,-1),u=s("p",null,[s("em",null,"用于网站上的全局功能，无论浏览到何处都可以看见的按钮")],-1),B=s("h2",{id:"基本使用",tabindex:"-1"},[a("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),g=s("p",null,[s("em",null,"BackTop 会找到首个可滚动的祖先元素并且监听它的滚动事件")],-1),E=o(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">onShow</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">show</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">show</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:right</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onShow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="自定义可视高度" tabindex="-1">自定义可视高度 <a class="header-anchor" href="#自定义可视高度" aria-label="Permalink to &quot;自定义可视高度&quot;">​</a></h2><p><em>自定义滚动时触发显示回到顶部的高度</em></p>`,3),m=s("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 可视高度：300px ",-1),b=o(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:visibility-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 200px; height: 40px; line-height: 40px; text-align: center; font-size: 14px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      可视高度：300px</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="自定义位置" tabindex="-1">自定义位置 <a class="header-anchor" href="#自定义位置" aria-label="Permalink to &quot;自定义位置&quot;">​</a></h2>`,2),A=s("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 改变位置 ",-1),C=o(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:right</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">40</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">160</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 200px; height: 40px; line-height: 40px; text-align: center; font-size: 14px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      改变位置</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="自定义监听目标" tabindex="-1">自定义监听目标 <a class="header-anchor" href="#自定义监听目标" aria-label="Permalink to &quot;自定义监听目标&quot;">​</a></h2><p><em>自定义设定监听哪个元素来触发 BackTop</em></p>`,3),_=s("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 指定目标 ",-1),v=s("br",null,null,-1),x=s("br",null,null,-1),f=s("br",null,null,-1),q=s("br",null,null,-1),k=s("br",null,null,-1),w=s("br",null,null,-1),T=s("br",null,null,-1),P=o(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> scrollContainer </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:listen-to</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollContainer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">220</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:visibility-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 200px; height: 40px; line-height: 40px; text-align: center; font-size: 14px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      指定目标</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BackTop</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollContainer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">overflow: auto; height: 72px; line-height: 1.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    这块应该写一个有意思的笑话。</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>bottom</td><td><code>BackTop</code> 距离页面底部的高度</td><td>number | string</td><td>40</td><td>false</td></tr><tr><td>right</td><td><code>BackTop</code> 距离页面右侧的宽度</td><td>number | string</td><td>40</td><td>false</td></tr><tr><td>visibilityHeight</td><td>滚动时触发显示回到顶部的高度</td><td>number</td><td>180</td><td>false</td></tr><tr><td>to</td><td><code>BackTop</code> 渲染的容器节点 可选 元素标签名 例如 <code>body</code> 或者 元素本身，下同</td><td>string | HTMLElement</td><td>&#39;body&#39;</td><td>false</td></tr><tr><td>listenTo</td><td>监听滚动的元素，如果为 <code>undefined</code> 会监听距离最近的一个可滚动的祖先节点</td><td>string | HTMLElement</td><td>undefined</td><td>false</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>show</td><td>是否展现的回调</td><td>(show: boolean) =&gt; void</td></tr></tbody></table>`,5),H=JSON.parse('{"title":"回到顶部 backtop","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/backtop.md","filePath":"guide/components/backtop.md"}'),S={name:"guide/components/backtop.md"},L=r({...S,setup(z){function c(e){console.log("show",e)}const p=D();return(e,N)=>{const n=F("BackTop");return i(),y("div",null,[d,h,u,B,g,l(n,{right:100,onShow:c}),E,l(n,{bottom:100,"visibility-height":300},{default:t(()=>[m]),_:1}),b,l(n,{right:40,bottom:160},{default:t(()=>[A]),_:1}),C,l(n,{"listen-to":p.value,bottom:220,"visibility-height":10},{default:t(()=>[_]),_:1},8,["listen-to"]),s("div",{ref_key:"scrollContainer",ref:p,style:{overflow:"auto",height:"72px","line-height":"1.5"}},[a(" 这块应该写一个有意思的笑话。"),v,a(" 这块应该写一个有意思的笑话。"),x,a(" 这块应该写一个有意思的笑话。"),f,a(" 这块应该写一个有意思的笑话。"),q,a(" 这块应该写一个有意思的笑话。"),k,a(" 这块应该写一个有意思的笑话。"),w,a(" 这块应该写一个有意思的笑话。"),T],512),P])}}});export{H as __pageData,L as default};
