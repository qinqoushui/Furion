(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(20);t.default=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(157),r=n(159);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},159:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},160:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},162:function(e,t,n){"use strict";var a=n(0),r=n(163);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},163:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(162),i=n(160),c=n(52),b=n.n(c);const l=37,s=39;t.a=function(e){const{lazy:t,block:n,children:c,defaultValue:d,values:p,groupId:u,className:m}=e,{tabGroupChoices:O,setTabGroupChoices:j}=Object(o.a)(),[v,N]=Object(a.useState)(d);if(null!=u){const e=O[u];null!=e&&e!==v&&p.some(t=>t.value===e)&&N(e)}const f=e=>{N(e),null!=u&&j(u,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>f(e),onClick:()=>{f(e)}},t))),t?Object(a.cloneElement)(c.filter(e=>e.props.value===v)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v}))))}},165:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(156)),i=(n(158),n(164),n(165),{id:"dbcontext-multi-database",title:"9.18 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.18 \u591a\u6570\u636e\u5e93\u64cd\u4f5c"}),c={unversionedId:"dbcontext-multi-database",id:"dbcontext-multi-database",isDocsHomePage:!1,title:"9.18 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",description:"9.18.1 Furion \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",source:"@site/docs\\dbcontext-multi-database.mdx",slug:"/dbcontext-multi-database",permalink:"/furion/docs/dbcontext-multi-database",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-multi-database.mdx",version:"current",sidebar_label:"9.18 \u591a\u6570\u636e\u5e93\u64cd\u4f5c",sidebar:"docs",previous:{title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/furion/docs/dbcontext-sql-proxy"},next:{title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b",permalink:"/furion/docs/dbcontext-db-first"}},b=[{value:"9.18.1 <code>Furion</code> \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",children:[{value:"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",children:[]}]},{value:"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",children:[]},{value:"9.18.3 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",id:"9183-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",children:[{value:"9.18.3.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",id:"91831-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",children:[]},{value:"9.18.3.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",id:"91832-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",children:[]},{value:"9.18.3.3 <code>Sql</code> \u4ed3\u50a8\u65b9\u5f0f",id:"91833-sql-\u4ed3\u50a8\u65b9\u5f0f",children:[]},{value:"9.18.3.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",id:"91834-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",children:[]},{value:"9.18.3.5 Linq \u51fd\u6570\u65b9\u5f0f",id:"91835-linq-\u51fd\u6570\u65b9\u5f0f",children:[]}]},{value:"9.18.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9184-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"},"9.18.1 ",Object(o.b)("inlineCode",{parentName:"h2"},"Furion")," \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SqlServer"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Sqlite"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Cosmos"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"InMemoryDatabase"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"MySql"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PostgreSQL"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Oracle"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Firebird"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Dm"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2714")))),Object(o.b)("h3",{id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"},"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"InMemoryDatabase"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Citms.EntityFrameworkCore.Oracle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"FirebirdSql.EntityFrameworkCore.Firebird")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Dm"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Dm"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u8fd9\u4e9b\u6570\u636e\u5e93\u5305\u5e94\u8be5\u5b89\u88c5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5c42\u3002"))),Object(o.b)("h2",{id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"},"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u6ce8\u518c SqlServer\noptions.AddDbPool<FurDbContext>(DbProvider.SqlServer);\n\n// \u6ce8\u518c Sqlite\noptions.AddDbPool<FurDbContext>(DbProvider.Sqlite);\n\n// \u6ce8\u518c Cosmos\noptions.AddDbPool<FurDbContext>(DbProvider.Cosmos);\n\n// \u6ce8\u518c InMemoryDatabase\noptions.AddDbPool<FurDbContext>(DbProvider.InMemoryDatabase);\n\n// \u6ce8\u518c MySql\uff0c\u5fc5\u987b\u6307\u5b9a\u7248\u672c\u53f7\noptions.AddDbPool<FurDbContext>($"{DbProvider.MySql}@8.0.22");\n\n// \u6ce8\u518c PostgreSQL\noptions.AddDbPool<FurDbContext>(DbProvider.Npgsql);\n\n// \u6ce8\u518c Oracle\noptions.AddDbPool<FurDbContext>(DbProvider.Oracle);\n\n// \u6ce8\u518c Firebird\noptions.AddDbPool<FurDbContext>(DbProvider.Firebird);\n\n// \u6ce8\u518c Dm\noptions.AddDbPool<FurDbContext>(DbProvider.Dm);\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u65b0\u7248 MySQL \u6ce8\u610f")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"MySQL")," \u5728\u65b0\u7248\u672c\u5305\u4e2d\u6ce8\u518c\u6709\u6240\u4fee\u6539\uff0c\u6240\u4ee5\u6ce8\u518c\u65b9\u5f0f\u4e3a\uff1a"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n')))),Object(o.b)("h2",{id:"9183-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"},"9.18.3 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u901a\u8fc7\u72ec\u521b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668")," \u5b9e\u73b0\u591a\u6570\u636e\u5e93\u7075\u6d3b\u64cd\u4f5c\u5207\u6362\u3002\u53ea\u9700\u8981\u4e3a\u6bcf\u4e00\u79cd\u6570\u636e\u5e93\u7ed1\u5b9a\u552f\u4e00\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5b9e\u4f8b\uff1a"),Object(o.b)("h3",{id:"91831-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"},"9.18.3.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = personRepository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = personRepository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = personRepository.Change<Person, SqliteDbContextLocator>();\n\n")),Object(o.b)("h3",{id:"91832-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"},"9.18.3.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n")),Object(o.b)("h3",{id:"91833-sql-\u4ed3\u50a8\u65b9\u5f0f"},"9.18.3.3 ",Object(o.b)("inlineCode",{parentName:"h3"},"Sql")," \u4ed3\u50a8\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = sqlRepository.Change<MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = sqlRepository.Change<MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = sqlRepository.Change<SqliteDbContextLocator>();\n")),Object(o.b)("h3",{id:"91834-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"},"9.18.3.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"\n// \u652f\u6301\u4e00\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator>\n{\n    // ....\n}\n\n// \u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator, SqliteDbContextLocator>\n{\n    // ....\n}\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u6240\u6709\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u4f9d\u8d56\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b")," \u90fd\u652f\u6301\u6cdb\u578b\u65b9\u5f0f \u6307\u5b9a \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u6700\u591a\u652f\u6301 ",Object(o.b)("inlineCode",{parentName:"p"},"8")," \u4e2a\u3002"))),Object(o.b)("h3",{id:"91835-linq-\u51fd\u6570\u65b9\u5f0f"},"9.18.3.5 Linq \u51fd\u6570\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'public static class QueryFunctions\n{\n    [QueryableFunction("FN_GetId", "dbo", typeof(MySqlDbContextLocator), typeof(SqliteDbContextLocator))]\n    public static int GetId(int id) => throw new NotSupportedException();\n}\n')),Object(o.b)("h2",{id:"9184-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.18.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}s.isMDXComponent=!0}}]);