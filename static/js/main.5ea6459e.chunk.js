(this["webpackJsonpanalog-clock-react"]=this["webpackJsonpanalog-clock-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),u=(n(12),n(6)),s=n(3);var l=function(e){var t=e.classN,n=e.ratio;return c.a.createElement("div",{className:t,style:{"--rotate":n}})};var i=function(e){var t=e.classN,n=e.num;return c.a.createElement("div",{className:t},n)},f=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])};n(13);var m=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),m=Object(s.a)(o,2),v=m[0],d=m[1],h=Object(a.useState)(null),b=Object(s.a)(h,2),E=b[0],j=b[1],O=function(){var e=new Date,t=e.getSeconds()/60,n=(t+e.getMinutes())/60,a=(n+e.getHours())/12;j(360*t),d(360*n),r(360*a)};return f((function(){O()}),1e3),Object(a.useEffect)((function(){O()}),[]),c.a.createElement("div",{className:"clock"},c.a.createElement(l,{classN:"hand hour",ratio:n}),c.a.createElement(l,{classN:"hand minute",ratio:v}),c.a.createElement(l,{classN:"hand second",ratio:E}),Object(u.a)(Array(12).keys()).map((function(e,t){return c.a.createElement(i,{key:t,num:t+1,classN:"num num__".concat(t+1)})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5ea6459e.chunk.js.map