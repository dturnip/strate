(this.webpackJsonpstrate=this.webpackJsonpstrate||[]).push([[0],{336:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var r,c=n(4),s=n.n(c),i=n(67),o=n.n(i),a=(n(78),n(79),n(47)),l=n(11),u=n(68),d=n.n(u),j=n(3),b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d.a,{id:"particles",options:{fullScreen:{enable:!0,zIndex:-1},background:{color:{value:"#FEF6EF"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:100,duration:.4}}},particles:{color:{value:"#39d353",animation:{h:{count:0,enable:!0,offset:0,speed:50,sync:!1},s:{count:0,enable:!1,offset:0,speed:1,sync:!1},l:{count:0,enable:!1,offset:0,speed:1,sync:!1}}},links:{color:"#b59174",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:4,straight:!1},number:{density:{enable:!0,value_area:800},value:20},opacity:{value:.9},shape:{type:"image",options:{image:[{src:"https://i.ibb.co/nDshRQx/coffee-main.png",width:512,height:512}]}},size:{random:!0,value:30}},detectRetina:!0}})})},v=n.p+"static/media/coffee-bk.0626c06f.png",p=(n(336),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"flex-wrapper",children:[Object(j.jsx)("div",{id:"cb-wrapper",children:Object(j.jsx)("img",{id:"coffee-bk",src:v,alt:"coffee-bk"})}),Object(j.jsx)("div",{id:"bt-wrapper",children:Object(j.jsx)(l.a,{render:function(e){var t=e.history;return Object(j.jsx)("span",{id:"start-bt",onClick:function(){t.push("/play")},children:"Start!"})}})}),Object(j.jsx)("span",{style:{fontWeight:"bold"},children:Object(j.jsx)("u",{children:"NB: Only landscape mode is supported"})})]})})}),f=function(e){return function(t){switch(e){case"local":return localStorage.getItem(t);case"session":return sessionStorage.getItem(t);default:return null}}},h=function(e){return function(t){return function(n){switch(e){case"local":localStorage.setItem(t,n);break;case"session":sessionStorage.setItem(t,n);break;default:sessionStorage.setItem(t,n)}}}},O=f("local"),m=f("session"),x=h("local"),g=h("session"),y=function(){return Object(c.useEffect)((function(){O("coffee")||x("coffee")(0),m("level")||g("level")(0)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(p,{})]})},E=n(22),I=(n(342),n(343),n(32));!function(e){e.CLEAR="CLEAR",e.FAIL="FAIL",e.ALIVE="ALIVE",e.ERROR="ERROR"}(r||(r={}));var w=function(e){for(var t=[],n=0;n<e.length;n++){for(var r=[],c=0;c<e.length;c++)r.push(e[c][n]);t.push(r)}return t},A=function(e){return w(e)},S=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].filter((function(e){return e})),c=Array(e[n].length-r.length).fill(0);t.push(c.concat(r))}return t},R=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].filter((function(e){return e})),c=Array(e[n].length-r.length).fill(0);t.push(r.concat(c))}return t},L=function(e){var t=w(e);return R(t)},k=function(e){var t=w(e);return S(t)},F=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)n!==e[t].length-1&&e[t][n]===e[t][n+1]&&(e[t][n]=e[t][n]+e[t][n+1],e[t][n+1]=0,m("currStatus")===r.ALIVE&&g("points")(parseInt(m("points")||0,10)+e[t][n]));return e},C=function(e){return A(F(e))},M=function(e){return function(t){var n;switch(e){case"right":n=S(F(S(t)));break;case"left":n=R(F(R(t)));break;case"up":n=A(L(C(L(t))));break;case"down":n=A(k(C(k(t))));break;default:return alert("ERROR"),Object(I.a)(Array(8)).map((function(e){return Array(8).fill(2)}))}return n.toString()!==t.toString()&&m("currStatus")===r.ALIVE&&g("moves")(parseInt(m("moves"))-1),g("currMatrix")(n),n}},V=M("right"),N=M("left"),z=M("up"),B=M("down"),G=n(70),P=n(71),T=function(){return G},D=function(){return P},J=function(e){var t=T();return null===t?Object(I.a)(Array(8)).map((function(e){return Array(8).fill(2)})):t[e]},U=function(e){var t=D();return null===t?{objective:"Error",moves:0,cheat:"Error"}:t[e]},q=function(e){var t=e.n;return Object(j.jsx)("div",{className:"cell type".concat(t),children:t>0?t:""})},Q=function(e){var t=e.map,n=e.retry,r=Object(c.useState)(J(t)),s=Object(E.a)(r,2),i=s[0],o=s[1];Object(c.useEffect)((function(){o(J(t)),g("currMatrix")(J(t)),console.log(t)}),[t]),Object(c.useEffect)((function(){n&&(o(J(t)),g("currMatrix")(J(t)),console.log(t),g("retry")(!1))}),[t,n]);var a=function(e){setTimeout((function(){switch(e.key){case"ArrowUp":o(z(i));break;case"ArrowRight":o(V(i));break;case"ArrowDown":o(B(i));break;case"ArrowLeft":o(N(i))}}),0)};return Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}})),Object(j.jsx)("div",{className:"board-wrapper",children:Object(j.jsx)("div",{className:"board",children:i.map((function(e){return e.map((function(e,t){return Object(j.jsx)(q,{n:e},t)}))}))})})},W=function(e){var t=e.construct,n=e.data;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"side-button",children:[Object(j.jsx)("span",{id:"construct",children:Object(j.jsx)("u",{children:t})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{id:"data",children:n})]})})},_=(n(344),function(e){var t=e.points,n=e.objective,r=e.moves;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"side-wrapper",children:[Object(j.jsx)("section",{id:"points",children:Object(j.jsx)(W,{construct:"Points",data:t})}),Object(j.jsx)("section",{id:"objective",children:Object(j.jsx)(W,{construct:"Objective",data:n})}),Object(j.jsx)("section",{id:"Moves",children:Object(j.jsx)(W,{construct:"Moves",data:r})})]})})}),H=(n(345),function(e,t){var n=m("currStatus");return e>0&&t?(g("currStatus")(r.CLEAR),r.CLEAR):e>0&&!t?(g("currStatus")(r.ALIVE),r.ALIVE):e<=0&&t&&n===r.ALIVE?(g("currStatus")(r.CLEAR),r.CLEAR):e<=0&&!t?(g("currStatus")(r.FAIL),r.FAIL):(alert("Oops there was an Error"),r.ERROR)}),K=n(73),X=n(72),Y=function(){var e=Object(c.useState)(0),t=Object(E.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),o=Object(E.a)(i,2),a=o[0],l=o[1],u=Object(c.useState)(!1),d=Object(E.a)(u,2),b=d[0],v=d[1],p=Object(c.useState)(!1),f=Object(E.a)(p,2),h=f[0],O=f[1],x=Object(c.useState)(!0),y=Object(E.a)(x,2),I=y[0],w=y[1];Object(c.useEffect)((function(){m("level")||g("level")(0),m("moves")||g("moves")(2),m("retry")||g("retry")(!1),l(m("moves")),g("currStatus")(r.ALIVE)}),[]);var A=function(){I&&(w(!1),R(),g("points")(0),s(0),g("moves")(U(parseInt(m("level"))).moves),l(m("moves")),g("currStatus")(r.ALIVE),g("retry")(!0),setTimeout((function(){v(!1),O(!1),w(!0)}),500))},S=function(){var e=document.getElementById("overlay");if(e&&e.style.opacity<String(1))var t=0,n=setInterval((function(){t<1?(t+=.04,e.style.opacity=String(t)):clearInterval(n)}),5)},R=function(){var e=document.getElementById("overlay");if(e&&e.style.opacity>String(0))var t=1,n=setInterval((function(){t>0?(t-=.04,e.style.opacity=String(t)):clearInterval(n)}),5)},L=function(e){if(n!==m("points")&&s(m("points")||0),m("currStatus")===r.ALIVE&&("ArrowUp"===e.key||"ArrowRight"===e.key||"ArrowDown"===e.key||"ArrowLeft"===e.key)){a>0&&l(parseInt(m("moves"))),Number(m("moves"))<0&&(g("moves")(0),g("currStatus")(r.FAIL),v(!0),alert("Anticheat detected you tried to exceed the move limit! Please slow down your key presses"),S());var t=function(e,t){var n=m("currMatrix");switch(m("currStatus")){case r.CLEAR:return r.CLEAR;case r.FAIL:return r.FAIL;case r.ERROR:return console.log("Oops there was an Error"),alert("ERROR"),r.ERROR;case r.ALIVE:switch(e){case 0:return H(t,n.includes("8"));case 1:case 2:return H(t,n.includes("16"));case 3:return H(t,n.includes("64"));case 4:return H(t,n.includes("32"));case 5:return H(t,!n.includes("2"));case 6:return H(t,n.includes("64"));case 7:return H(t,!n.includes("2")&&!n.includes("4"));case 8:return H(t,n.includes("64"));case 9:return H(t,n.includes("128"));case 10:return H(t,parseInt(m("points"),10)>300);default:return console.log("Oops there was an Error"),alert("Oops there was an Error"),r.ERROR}default:return console.log("Oops there was an Error"),alert("Oops there was an Error"),r.ERROR}}(parseInt(m("level")),parseInt(m("moves")));t===r.CLEAR&&(O(!0),S()),t===r.FAIL&&(v(!0),S())}};return Object(c.useEffect)((function(){return document.addEventListener("keyup",L),function(){document.removeEventListener("keyup",L)}})),Object(c.useEffect)((function(){var e=document.getElementById("ui-container");null!==e&&(h&&(e.style.boxShadow="1px 1px 200px 1px #A3FECA"),b&&(e.style.boxShadow="1px 1px 200px 1px #FEAAA3"))}),[h,b]),window.onunload=function(){sessionStorage.clear(),g("level")(0)},Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"master",children:[Object(j.jsxs)("div",{id:"game-wrapper",children:[Object(j.jsx)(Q,{map:parseInt(m("level")),retry:"true"===m("retry")}),Object(j.jsx)(_,{points:n.toString().replace("0","O"),objective:U(parseInt(m("level"))).objective,moves:a.toString().replace("0","O")})]}),Object(j.jsxs)("div",{id:"footer-wrapper",children:[Object(j.jsxs)("span",{id:"level-text",children:["Level\xa0",String(parseInt(m("level"))+1).replace("0","O")]}),Object(j.jsxs)("div",{id:"help-wrapper",children:[Object(j.jsx)(X.a,{id:"debug-retry",style:{fontSize:"2.9rem"},onClick:A}),Object(j.jsx)(K.a,{id:"question-circle",style:{fontSize:"2.9rem"}}),Object(j.jsx)("span",{id:"solution",children:U(parseInt(m("level"))).cheat}),Object(j.jsx)("div",{id:"solution-overlay"})]})]})]}),h!==b&&Object(j.jsx)("div",{id:"overlay",children:Object(j.jsxs)("div",{id:"ui-container",children:[Object(j.jsxs)("span",{id:"message",children:["Level ",(parseInt(m("level"))+1).toString().replace("0","O")," ",b?"Failed":h?"Cleared":"Oops there was an Error"]}),Object(j.jsxs)("div",{id:"stat",children:[Object(j.jsxs)("span",{id:"points-stat",children:["Points: ",n.toString().replace("0","O")]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{id:"moves-stat",children:["Moves Used: ","".concat(U(parseInt(m("level"))).moves-parseInt(m("moves")),"/").concat(U(m("level")).moves).replace("0","O")]})]}),h?Object(j.jsxs)("div",{id:"button-container",children:[Object(j.jsx)("div",{id:"retry-button",onClick:A,children:Object(j.jsx)("span",{id:"retry-text",children:"Retry"})}),Object(j.jsx)("div",{id:"next-button",onClick:function(){I&&(w(!1),R(),g("level")(parseInt(m("level"))+1),g("points")(0),s(0),g("moves")(U(parseInt(m("level"))).moves),l(m("moves")),g("currStatus")(r.ALIVE),setTimeout((function(){v(!1),O(!1),w(!0)}),400))},children:Object(j.jsx)("span",{id:"next-text",children:"Next"})})]}):Object(j.jsx)("div",{id:"button-container",children:Object(j.jsx)("div",{id:"retry-button",onClick:A,children:Object(j.jsx)("span",{id:"retry-text",children:"Retry"})})})]})})]})};var Z=function(){return console.log("/strate"),Object(j.jsx)(a.a,{basename:"/strate",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(l.a,{exact:!0,path:"/play",component:Y})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,347)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Z,{})}),document.getElementById("root")),$()},70:function(e){e.exports=JSON.parse('{"0":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,2,2,0,0,0],[0,0,2,0,2,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"1":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,8,0,0,0,0,0],[0,0,0,2,2,0,0,0],[0,0,0,2,0,2,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"2":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,4,0,0,0,0,0,0],[0,0,4,0,0,0,0,0],[0,2,0,0,0,0,0,0],[0,0,4,2,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"3":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,4,0,0,0,0],[0,0,0,8,4,0,0,0],[0,0,0,8,8,0,0,0],[0,0,0,16,0,0,0,0],[0,0,0,0,16,0,0,0],[0,0,0,0,0,0,0,0]],"4":[[0,0,0,0,0,0,0,0],[0,0,0,8,0,0,0,0],[0,2,0,8,0,2,0,0],[0,0,2,4,2,0,0,0],[0,0,0,4,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"5":[[0,0,0,0,0,0,0,0],[0,0,2,4,0,0,0,0],[0,0,4,2,4,0,0,0],[0,0,2,2,2,0,0,0],[0,0,4,2,4,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"6":[[0,0,0,0,0,0,0,0],[0,0,16,0,0,0,0,0],[0,0,2,8,2,0,0,0],[0,0,0,0,2,8,2,0],[0,0,32,4,4,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"7":[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,4,0],[16,0,0,0,0,0,8,0],[0,2,0,0,8,0,0,0],[4,4,0,8,4,0,0,0],[0,8,2,0,0,0,0,4],[0,0,0,0,0,0,0,0]],"8":[[0,0,8,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,4,0,4,0,0,0],[0,0,0,0,8,2,2,0],[0,0,0,8,16,0,0,0],[0,0,0,0,4,0,0,0],[0,0,2,0,0,0,0,16],[0,2,0,0,0,0,0,0]],"9":[[0,0,16,0,0,0,0,0],[0,0,0,0,0,32,0,0],[0,0,0,16,8,0,0,0],[0,0,8,8,0,8,0,0],[0,0,0,0,0,0,0,0],[0,0,32,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],"10":[[0,0,4,0,0,0,0,0],[0,2,0,0,0,4,0,0],[0,0,0,8,16,0,0,0],[8,0,4,8,0,4,0,0],[8,0,0,0,16,8,0,0],[0,64,8,0,0,32,0,0],[0,0,0,0,8,16,0,0],[0,0,0,8,0,0,0,0]]}')},71:function(e){e.exports=JSON.parse('{"0":{"objective":"Get the 8 tile","moves":2,"cheat":"\u2190\u2191"},"1":{"objective":"Get the 16 tile","moves":3,"cheat":"\u2190\u2193\u2193"},"2":{"objective":"Merge all tiles","moves":4,"cheat":"\u2192\u2193\u2190\u2191"},"3":{"objective":"Get the 64 tile","moves":6,"cheat":"\u2193\u2192\u2191\u2192\u2191"},"4":{"objective":"Merge all tiles","moves":7,"cheat":"\u2190\u2193\u2193\u2190\u2190\u2191"},"5":{"objective":"Remove all 2 tiles","moves":5,"cheat":"\u2192\u2193\u2191\u2190"},"6":{"objective":"Get the 64 tile","moves":7,"cheat":"\u2192\u2191\u2190\u2193\u2190"},"7":{"objective":"Remove all tiles under 8","moves":3,"cheat":"\u2191\u2190\u2191"},"8":{"objective":"Get the 64 tile","moves":7,"cheat":"\u2190\u2191\u2192\u2193\u2190\u2191"},"9":{"objective":"Merge all tiles","moves":5,"cheat":"\u2190\u2191\u2190\u2191\u2193"},"10":{"objective":"Get over 300 points","moves":6,"cheat":"\u2191\u2190\u2192\u2191\u2190"}}')},78:function(e,t,n){},79:function(e,t,n){}},[[346,1,2]]]);
//# sourceMappingURL=main.57a8ff9b.chunk.js.map