(function(t){function e(e){for(var o,r,u=e[0],a=e[1],l=e[2],f=0,s=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&s.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(s.length)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c={app:0},i=[];function u(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-0ac2d5be":"d1310ed1","chunk-1cc93cf3":"6c8d27dd","chunk-2660c487":"08fe3f1c","chunk-42cfb059":"496962c8","chunk-730ce3a3":"f750505d","chunk-7673312f":"e1c4b633","chunk-7df54a5c":"3a64cf9f","chunk-dc565ac8":"cf26ca44"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n={"chunk-0ac2d5be":1,"chunk-1cc93cf3":1,"chunk-2660c487":1,"chunk-42cfb059":1,"chunk-730ce3a3":1,"chunk-7673312f":1,"chunk-7df54a5c":1,"chunk-dc565ac8":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0ac2d5be":"f7f1741d","chunk-1cc93cf3":"295c205f","chunk-2660c487":"ae7f7330","chunk-42cfb059":"4e1f6a63","chunk-730ce3a3":"d5194dd5","chunk-7673312f":"81721f36","chunk-7df54a5c":"f8f6fa76","chunk-dc565ac8":"c4036e4b"}[t]+".css",c=a.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===o||f===c))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===o||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=i);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=u(t);var s=new Error;l=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}c[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a6a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"getTodoList",(function(){return _})),n.d(o,"getTimelineList",(function(){return j})),n.d(o,"getLinkList",(function(){return P})),n.d(o,"getIntros",(function(){return M}));var r={};n.r(r),n.d(r,"actionSetTodo",(function(){return x})),n.d(r,"actionSetTodoDone",(function(){return C})),n.d(r,"actionEditTodo",(function(){return A})),n.d(r,"actionDeleteTodo",(function(){return B}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("2b0e"),i=n("2f62"),u=n("bc3a"),a=n.n(u),l=n("2106"),f=n.n(l),s=n("5f5b"),d=n("b1e0"),p=n("5c96"),h=n.n(p),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},g=[],b={},k=b,v=n("2877"),O=Object(v["a"])(k,m,g,!1,null,null,null),T=O.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));c["default"].use(y["a"]);var E,L=[{path:"/",component:function(){return n.e("chunk-7673312f").then(n.bind(null,"6e78"))},children:[{path:"/",component:function(){return n.e("chunk-42cfb059").then(n.bind(null,"02a9"))}},{path:"/weather-card",component:function(){return n.e("chunk-730ce3a3").then(n.bind(null,"0a20"))}},{path:"/game",component:function(){return n.e("chunk-0ac2d5be").then(n.bind(null,"4f3f"))}},{path:"/todo",component:function(){return n.e("chunk-dc565ac8").then(n.bind(null,"24b8"))}},{path:"/tdee",component:function(){return n.e("chunk-2660c487").then(n.bind(null,"35f8"))}},{path:"/art",component:function(){return n.e("chunk-1cc93cf3").then(n.bind(null,"0789"))}},{path:"/about",component:function(){return n.e("chunk-7df54a5c").then(n.bind(null,"e233"))}}]}],S=new y["a"]({routes:L}),w=S,D={todoList:[{id:1,content:"buy dinner",done:!1}],timelineData:[{timestamp:"Mar. 2020 - present",title:"網頁前端工程師",compony:"凡谷興業有限公司 | 台中市西屯區",work:["1. 維護現有專案架構、排解線上問題","2. 發新功能、協助開發新架構","3. 製作組內使用的工具及規範文件"]},{timestamp:"Apr. 2018 - Sep. 2019",title:"國外B2B電商業務",compony:"新科企業有限公司 | 台中市西區",work:["1. SEO管理及Google ads","2. 社群與官方網站管理","3. 產品攝影後製及上架","4. 亞洲市場陌生開發，主打日本市場","5. 詢價報價","6. 出國參展"]},{timestamp:"Oct. 2016 - Oct.2017",title:"服務生 (加拿大打工度假)",compony:"Dinesty Dumpling House | Vancouver, Canada",work:["1. 顧客桌邊服務","2. 點餐、結帳，協助處理餐點問題","3. 清潔"]},{timestamp:"Jun. 2015 - Jun. 2016",title:"日本打工度假",compony:"Japan",work:["1. 房務人員","2. 北海道飯店小賣店店員、餐廳服務生、櫃檯人員","3. 溫泉設施(日帰り)服務人員","4. 農場換宿"]},{timestamp:"Nov. 2014 - Jun. 2015",title:"美編、小編",compony:"多利得自行車週邊代理 | 台中市大雅區",work:["1. 商品拍攝編輯後製","2. Banner及臉書廣告圖製作","3. 臉書粉絲專業經營及部分電子商務","4. 支援貨品分類及公關活動(自行車展及粉絲團揪團騎車)"]}],linksList:[{path:"/todo",label:"TODO LIST",content:"代辦事項。利用 vuex 來進行資料交換，如新增、更新、刪除等。",img:"todo.png"},{path:"/weather-card",label:"天氣卡片",content:"介接氣象局 api 呈現，提供過濾縣市選項以及搜尋功能。",img:"weather.png",isLink:!1},{path:"/game",label:"終極密碼",content:"猜數字遊戲。使用套件 element UI。有簡單及困難模式。",img:"game.png",isLink:!1},{path:"/tdee",label:"TDEE 計算",content:"網路上計算機的都不是很方便，所以自己寫了一個。",img:"tdee.png",isLink:!1},{path:"https://illustra9527.github.io/food-page/",label:"嘉惠美食",content:"利用套件快速製作的靜態一頁式產品行銷網頁。發佈在 github 使用。",img:"food.png",isLink:!0,github:"https://github.com/illustra9527/food-page"},{path:"https://illustra9527.github.io/portfolio2021/#/",label:"作品集網站",content:"利用 vue, vuex, vue router 及套件庫製作而成的作品集。",img:"portfolio.png",isLink:!0,github:"https://github.com/illustra9527/portfolio2021"},{path:"https://illustra9527.github.io/FluentDesign/",label:"Fluent Design 官網",content:"仿刻作品：微軟官方網站 - Fluent Design 首頁。全手刻製作前端作品。",img:"fluent.jpg",isLink:!0,github:"https://github.com/illustra9527/FluentDesign"},{path:"https://illustra9527.github.io/Microsoft-official-website/",label:"Microsoft 官網",content:"仿刻作品：微軟官方網站首頁。以Bootstrap套件製作的前端作品。",img:"microsoft.jpg",isLink:!0,github:"https://github.com/illustra9527/Microsoft-official-website"}],intros:[{title:"我...",content:["吸貓成痴的前端工程師","永不退休的遊戲人","熱愛美食，細心品嚐每一道食物","最挑嘴的是牛肉與拉麵，最愛的是乳酪蛋糕","喜愛日劇、動漫，他們讓我克服前往日本打工度假的恐懼","喜歡美的事物及攝影。極光是現在看過最感動的光景"]},{title:"技術",content:["HTML5, CSS3, Javascript","JQuery, SCSS, Bootstrap","Vue.js, Vue Router, Vuex ","Webpack, RESTfulAPI, Git Flow"]},{title:"軟體",content:["Adobe Photoshop, Illustrator, Premiere","Final Cut Pro"]},{title:"其他",content:["JLPT N2","Google Ads 入門"]},{title:"關於轉職",content:["在 2019年10月參加了職訓局為期三個月的","大數據系統開發 - 全端與Python資料探勘工程師養成班","學習網頁最新前後端開發技術，HTML、Javascript、CSS","使用 Laraval 製作後台前台動態網站及並結合購物車系統、串接綠界金流。"]},{title:"其他可公開的無聊資訊",content:["最近迷上了跳繩，還從美國訂回來","誤入歧途玩了十幾年 RO 終於成功戒掉","Switch 最讚遊戲只推薩爾達曠野之息沒有之一","日劇及動畫喜歡追當季最新","生在有幽浮社的時代太幸福","日本打工度假的一年讓我重新審視看待日本文化"]}]},_=function(t){return t.todoList},j=function(t){return t.timelineData},P=function(t){return t.linksList},M=function(t){return t.intros},x=function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e("SET_TODO_ITEM",n),n},C=function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e("SET_TODO_DONE",n)},A=function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{id:0,content:""};e("SET_EDIT_TODO",n)},B=function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e("SET_DELETE_TODO",n)},I=n("ade3"),J=n("5530"),N=n("2909"),F=(n("99af"),n("d81d"),n("4de4"),"SET_TODO_ITEM"),$="SET_TODO_DONE",H="SET_EDIT_TODO",V="SET_DELETE_TODO",G=(E={},Object(I["a"])(E,F,(function(t,e){t.todoList=[].concat(Object(N["a"])(t.todoList),Object(N["a"])(e))})),Object(I["a"])(E,$,(function(t,e){t.todoList=t.todoList.map((function(t){return t.id===e?Object(J["a"])(Object(J["a"])({},t),{},{done:!t.done}):t}))})),Object(I["a"])(E,H,(function(t,e){t.todoList=t.todoList.map((function(t){return t.id===e.id?Object(J["a"])(Object(J["a"])({},t),{},{content:e.content}):t}))})),Object(I["a"])(E,V,(function(t,e){t.todoList=t.todoList.filter((function(t){return t.id!==e}))})),E);c["default"].use(i["a"]);var R=new i["a"].Store({state:D,actions:r,mutations:G,getters:o,strict:!1}),q=(n("2a6a"),n("f9e3"),n("2dd8"),n("0fae"),{install:function(t){t.prototype.$confirm=p["MessageBox"].confirm,t.prototype.$alert=p["MessageBox"].alert,t.prototype.$message=p["Message"]}});c["default"].config.productionTip=!1,c["default"].use(f.a,a.a),c["default"].use(h.a),c["default"].use(i["a"]),c["default"].use(q),c["default"].use(s["a"]),c["default"].use(d["a"]),new c["default"]({router:w,store:R,render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.f0f2163f.js.map