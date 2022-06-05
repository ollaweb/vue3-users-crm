(function(){"use strict";var t={2737:function(t,r,e){var n=e(9242),s=e(678),i=e(3396),a=e(7139);const o=["src","alt"],u={class:"debug"},l={class:"button-list"},c=["disabled"],h=["disabled"];function d(t,r,e,n,s,d){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("section",null,[(0,i._)("table",null,[(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{onClick:r[0]||(r[0]=t=>d.sort("name"))},"Name ↓"),(0,i._)("th",{onClick:r[1]||(r[1]=t=>d.sort("age"))},"Age ↓"),(0,i._)("th",{onClick:r[2]||(r[2]=t=>d.sort("gender"))},"Gender ↓")])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.usersSort,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,[(0,i._)("img",{class:"user-image",src:t.img,alt:t.name},null,8,o),(0,i._)("span",null,(0,a.zw)(t.name),1)]),(0,i._)("td",null,(0,a.zw)(t.age),1),(0,i._)("td",null,(0,a.zw)(t.gender),1)])))),128))])]),(0,i._)("p",u," debug: sort: "+(0,a.zw)(s.currentSort)+", dir: "+(0,a.zw)(s.currentSortDir)+", page: "+(0,a.zw)(s.page.current)+" of "+(0,a.zw)(d.numberOfPages),1)]),(0,i._)("section",null,[(0,i._)("div",l,[(0,i._)("button",{class:"btn btnPrimary",disabled:d.disablePrevButton,onClick:r[3]||(r[3]=(...t)=>d.prevPage&&d.prevPage(...t))}," ← ",8,c),(0,i._)("button",{class:"btn btnPrimary",disabled:d.disableNextButton,onClick:r[4]||(r[4]=(...t)=>d.nextPage&&d.nextPage(...t))}," → ",8,h)])])],64)}var g={data(){return{users:[],currentSort:"name",currentSortDir:"asc",page:{current:1,length:3}}},created(){fetch("https://tocode.ru/static/_secret/courses/1/usersCrmApi.php").then((t=>t.json())).then((t=>{this.users=t})).catch((t=>{console.log(t)}))},computed:{usersSort(){return this.users.sort(((t,r)=>{let e=1;return"desc"===this.currentSortDir&&(e=-1),t[this.currentSort]<r[this.currentSort]?-1*e:t[this.currentSort]>r[this.currentSort]?1*e:0})).filter(((t,r)=>{let e=(this.page.current-1)*this.page.length,n=this.page.current*this.page.length;if(r>=e&&r<n)return!0}))},numberOfPages(){return Math.ceil(this.users.length/this.page.length)},disableNextButton(){if(this.page.current===this.numberOfPages)return!0},disablePrevButton(){if(1===this.page.current)return!0}},methods:{sort(t){t===this.currentSort?this.currentSortDir="asc"===this.currentSortDir?"desc":"asc":(this.currentSort=t,this.currentSortDir="asc")},prevPage(){this.page.current>1&&(this.page.current-=1)},nextPage(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}},p=e(89);const f=(0,p.Z)(g,[["render",d]]);var v=f;const b=(0,i._)("h1",{class:"title"},"В этом приложении",-1),m=(0,i._)("ul",{class:"list-items"},[(0,i._)("li",null,"🔥 Получение данных через API;"),(0,i._)("li",null,"Вывод информации о пользователях;"),(0,i._)("li",null,"Сортировка данных;"),(0,i._)("li",null,"Пагинация;")],-1);function _(t,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[b,m],64)}const w={},k=(0,p.Z)(w,[["render",_]]);var y=k;const D={class:"title"};function P(t,r){return(0,i.wg)(),(0,i.iD)("h1",D,"404 Not Found")}const S={},O=(0,p.Z)(S,[["render",P]]);var x=O;const z=(0,s.r5)(),C=(0,s.p7)({history:z,routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:y},{path:"/:CatchAll(.*)",name:"404",component:x}]});var j=C;const H={class:"wrapper"},W={class:"container"},Z={class:"wrapper-content"};function A(t,r,e,n,s,a){const o=(0,i.up)("Header"),u=(0,i.up)("router-view"),l=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",W,[(0,i.Wm)(o),(0,i._)("main",Z,[(0,i.Wm)(u)]),(0,i.Wm)(l)])])}const U={class:"navbar"},Y={class:"container"},B={class:"navbar-content"},F={class:"navbar-list"};function N(t,r,e,n,s,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("div",U,[(0,i._)("div",Y,[(0,i._)("div",B,[(0,i.Wm)(u,{class:"navbar-logo",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.title),1)])),_:1}),(0,i._)("ul",F,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.links,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"navbar-item",key:t.alias},[(0,i.Wm)(u,{class:"navbar-link",to:t.url},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])])))),128))])])])])])}const K={dev:!0},M=(K.dev,{title:"Users CRM"}),T=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}];var E={data(){return{title:M.title,links:T}}};const G=(0,p.Z)(E,[["render",N]]);var I=G,R=e.p+"assets/img/github.83d361dc.svg";const V={class:"footer"},q={class:"container"},J={class:"navbar-list"},L=(0,i._)("li",null,[(0,i._)("a",{class:"navbar-link",target:"_blank",href:"https://github.com/ollaweb/vue3-users-crm"},[(0,i.Uk)("visit my repo "),(0,i._)("img",{src:R,alt:"github"})])],-1),Q=(0,i._)("ul",{class:"navbar-list",style:{"margin-top":"14px"}},[(0,i._)("li",{class:"navbar-item",style:{opacity:"0.6","font-size":"14px"}},[(0,i._)("a",{href:"https://tocode.ru",class:"navbar-link"},'Сделано на курсе "Vue.js 3"')])],-1);function X(t,r,e,n,s,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("footer",V,[(0,i._)("div",q,[(0,i._)("ul",J,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.links,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"navbar-item",key:t.alias},[(0,i.Wm)(u,{class:"navbar-link",to:t.url},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])])))),128)),L]),Q])])}var $={data(){return{links:T}}};const tt=(0,p.Z)($,[["render",X]]);var rt=tt,et={components:{Header:I,Footer:rt}};const nt=(0,p.Z)(et,[["render",A]]);var st=nt;const it=(0,n.ri)(st);it.use(j),it.mount("#app")}},r={};function e(n){var s=r[n];if(void 0!==s)return s.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(r,n,s,i){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],i=t[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(o=!1,i<a&&(a=i));if(o){t.splice(c--,1);var l=s();void 0!==l&&(r=l)}}return r}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,s,i]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.p="/vue3-users-crm/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var s,i,a=n[0],o=n[1],u=n[2],l=0;if(a.some((function(r){return 0!==t[r]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(u)var c=u(e)}for(r&&r(n);l<a.length;l++)i=a[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},n=self["webpackChunkusers_crm"]=self["webpackChunkusers_crm"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(2737)}));n=e.O(n)})();