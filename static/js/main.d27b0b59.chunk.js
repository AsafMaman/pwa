(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{49:function(e,t,n){e.exports=n(61)},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(54),n(62)),l=n(91),u=n(100),m=n(93),d=Object(a.memo)((function(e){return o.a.createElement(i.a,{style:{margin:16,padding:16}},o.a.createElement(l.a,{container:!0},o.a.createElement(l.a,{xs:10,md:11,item:!0,style:{paddingRight:16}},o.a.createElement(u.a,{placeholder:"Add Todo here",value:e.inputValue,onChange:e.onInputChange,onKeyPress:e.onInputKeyPress,fullWidth:!0})),o.a.createElement(l.a,{xs:2,md:1,item:!0},o.a.createElement(m.a,{fullWidth:!0,color:"primary",variant:"text",onClick:e.onButtonClick},"Add"))))})),s=n(30),h=n(94),p=n(95),f=n(31),g=Object(a.memo)((function(e){return o.a.createElement(i.a,{elevation:0,style:{padding:0,margin:0,backgroundColor:"#fafafa"}},o.a.createElement(h.a,{color:"primary",position:"static",style:{height:64}},o.a.createElement(p.a,{style:{height:64}},o.a.createElement(f.a,{variant:"h5",color:"inherit"},"Simple React Todo App with Hooks"))),e.children)})),k=n(92),E=n(96),v=n(101),y=n(98),C=n(99),I=n(97),b=n(43),w=n.n(b),T=Object(a.memo)((function(e){return o.a.createElement(E.a,{divider:e.divider},o.a.createElement(v.a,{onClick:e.onCheckBoxToggle,checked:e.checked,disableRipple:!0}),o.a.createElement(y.a,{primary:e.text}),o.a.createElement(C.a,null,o.a.createElement(I.a,{"aria-label":"Delete Todo",onClick:e.onButtonClick},o.a.createElement(w.a,null))))})),j=Object(a.memo)((function(e){return o.a.createElement(o.a.Fragment,null,e.items.length>0&&o.a.createElement(i.a,{style:{margin:16}},o.a.createElement(k.a,{style:{overflow:"scroll"}},e.items.map((function(t,n){return o.a.createElement(T,Object.assign({},t,{key:"TodoItem.".concat(n),divider:n!==e.items.length-1,onButtonClick:function(){return e.onItemRemove(n)},onCheckBoxToggle:function(){return e.onItemCheck(n)}}))})))))})),O=Object(a.memo)((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1];return{inputValue:o,changeInput:function(e){return r(e.target.value)},clearInput:function(){return r("")},keyInput:function(e,t){return(13===e.which||13===e.keyCode)&&(t(o),!0)}}}(),n=t.inputValue,r=t.changeInput,c=t.clearInput,i=t.keyInput,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1];return{todos:o,addTodo:function(e){""!==e&&r(o.concat({text:e,checked:!1}))},checkTodo:function(e){r(o.map((function(t,n){return e===n&&(t.checked=!t.checked),t})))},removeTodo:function(e){r(o.filter((function(t,n){return e!==n})))}}}(),u=l.todos,m=l.addTodo,h=l.checkTodo,p=l.removeTodo,f=function(e){c(),m(n)};return o.a.createElement(g,null,o.a.createElement(d,{inputValue:n,onInputChange:r,onButtonClick:f,onInputKeyPress:function(e){return i(e,f)}}),o.a.createElement(j,{items:u,onItemCheck:function(e){return h(e)},onItemRemove:function(e){return p(e)}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.d27b0b59.chunk.js.map