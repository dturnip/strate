(this.webpackJsonpstrate=this.webpackJsonpstrate||[]).push([[0],{332:function(e,n,t){},338:function(e,n,t){},339:function(e,n,t){},340:function(e,n,t){"use strict";t.r(n);var r=t(3),c=t.n(r),a=t(65),i=t.n(a),o=(t(74),t(75),t(45)),s=t(10),u=t(66),l=t.n(u),f=t(4),b=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(l.a,{id:"particles",options:{fullScreen:{enable:!0,zIndex:-1},background:{color:{value:"#FEF6EF"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:100,duration:.4}}},particles:{color:{value:"#39d353",animation:{h:{count:0,enable:!0,offset:0,speed:50,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!1},l:{count:0,enable:!1,offset:0,speed:1,sync:!1}}},links:{color:"#b59174",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:4,straight:!1},number:{density:{enable:!0,value_area:800},value:20},opacity:{value:.9},shape:{type:"image",options:{image:[{src:"https://i.ibb.co/nDshRQx/coffee-main.png",width:512,height:512}]}},size:{random:!0,value:30}},detectRetina:!0}})})},d=t.p+"static/media/coffee-bk.0626c06f.png",j=(t(332),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"flex-wrapper",children:[Object(f.jsx)("div",{id:"cb-wrapper",children:Object(f.jsx)("img",{id:"coffee-bk",src:d,alt:"coffee-bk"})}),Object(f.jsx)("div",{id:"bt-wrapper",children:Object(f.jsx)(s.a,{render:function(e){var n=e.history;return Object(f.jsx)("span",{id:"start-bt",onClick:function(){n.push("/play")},children:"Start!"})}})})]})})}),p=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b,{}),Object(f.jsx)(j,{})]})},h=t(30),v=(t(338),t(339),function(e){for(var n=[],t=0;t<e.length;t++){for(var r=[],c=0;c<e.length;c++)r.push(e[c][t]);n.push(r)}return n}),O=function(e){return v(e)},g=function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t].filter((function(e){return e})),c=Array(e[t].length-r.length).fill(0);n.push(c.concat(r))}return n},m=function(e){for(var n=[],t=0;t<e.length;t++){var r=e[t].filter((function(e){return e})),c=Array(e[t].length-r.length).fill(0);n.push(r.concat(c))}return n},x=function(e){var n=v(e);return m(n)},y=function(e){var n=v(e);return g(n)},w=function(e){for(var n=0;n<e.length;n++)for(var t=0;t<e[n].length;t++)t!==e[n].length-1&&e[n][t]===e[n][t+1]&&(e[n][t]=e[n][t]+e[n][t+1],e[n][t+1]=0);return e},k=function(e){return O(w(e))},F=function(e){var n=e.n;return Object(f.jsx)("div",{className:"cell type".concat(n),children:n>0?n:""})},A=function(e){var n=e.map,t=Object(r.useState)(n),c=Object(h.a)(t,2),a=c[0],i=c[1];Object(r.useEffect)((function(){i(n)}),[n]);var o=function(e){switch(e.key){case"ArrowUp":i(O(x(k(x(a)))));break;case"ArrowRight":i(function(e){return g(w(g(e)))}(a));break;case"ArrowDown":i(function(e){return O(y(k(y(e))))}(a));break;case"ArrowLeft":i(function(e){return m(w(m(e)))}(a))}};return Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),Object(f.jsx)("div",{className:"board-wrapper",children:Object(f.jsx)("div",{className:"board",children:a.map((function(e){return e.map((function(e,n){return Object(f.jsx)(F,{n:e},n)}))}))})})},E=t(69),L=t(68),S=function(){return L},C=function(e){var n=S();return null===n?Object(E.a)(Array(8)).map((function(e){return Array(8).fill(2)})):n[e]},N=function(){var e=Object(r.useState)(0),n=Object(h.a)(e,2),t=n[0],c=n[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Game"}),Object(f.jsx)(A,{map:C(t)}),Object(f.jsx)("button",{onClick:function(){c((function(e){return e+1})),console.log(t)},children:"Incremenet Level!"})]})};var z=function(){return console.log("/strate"),Object(f.jsx)(o.a,{basename:"/strate",children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{exact:!0,path:"/",component:p}),Object(f.jsx)(s.a,{exact:!0,path:"/play",component:N})]})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,341)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),I()},68:function(e){e.exports=JSON.parse('{"0":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,2,2,0,0,0],[0,0,2,0,2,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"1":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,8,0,0,0,0,0],[0,0,0,2,2,0,0,0],[0,0,0,2,0,2,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]}')},74:function(e,n,t){},75:function(e,n,t){}},[[340,1,2]]]);
//# sourceMappingURL=main.3ec90486.chunk.js.map