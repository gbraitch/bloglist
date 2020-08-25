(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{53:function(e,t,n){e.exports=n(81)},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=n(52),u=n(6),i=n.n(u),s=n(11),m=n(7),d=n(39),b=n(38),f=n(20),p=function(e){var t=e.num,n=e.blog,a=e.addLike,l=e.removeBlog,c=e.user;return r.a.createElement(b.a,{className:"mb-1"},r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement(b.a.Toggle,{as:f.a,variant:"link",eventKey:t},n.title," by ",n.author)),r.a.createElement("div",{className:"col-md-1 float-right"},n.user.username===c.username?r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger btn-sm py-0 mt-3",onClick:l},"remove")):(console.log("not same user"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger btn-sm py-0 mt-3","data-toggle":"tooltip","data-placement":"right",title:"User did not create this note","aria-disabled":"true",disabled:!0},"remove")))))),r.a.createElement(b.a.Collapse,{eventKey:t},r.a.createElement(d.a.Body,null,r.a.createElement("div",null,r.a.createElement("strong",null,"Title: ")," ",n.title),r.a.createElement("div",null,r.a.createElement("strong",null,"Author: ")," ",n.author),r.a.createElement("div",null," ",r.a.createElement("strong",null,"URL: ")," ",n.url),r.a.createElement("div",null,r.a.createElement("strong",null,"Likes: "),n.likes," ",r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-sm py-0 btn-primary",onClick:a},"Like!"))))))},g=n(51),v=function(e){var t=e.message,n=e.error;return null===t?null:r.a.createElement(g.a,{variant:"".concat(n?"danger":"success"," alert ml-3")},t)},E=n(19),h=n.n(E),k=null,y={getAll:function(){return h.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,h.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return h.a.put("".concat("/api/blogs","/").concat(e),t).then((function(e){return e.data}))},remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,h.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){k="bearer ".concat(e)}},N=n(28),w=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],c=n[1],o={display:l?"none":""},u={display:l?"":"none"},i=function(){c(!l)};return r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{className:"btn btn-outline-primary",onClick:i},e.buttonLabel)),r.a.createElement("div",{style:u},r.a.createElement(N.a,{in:l},r.a.createElement("div",null,e.children,r.a.createElement(f.a,{className:"btn btn-danger ml-3",onClick:i},"cancel")))))};w.displayName="Togglable";var O=w,j=function(e){var t=e.updateBlogs,n=e.setErrorMessage,l=Object(a.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],d=Object(a.useState)(""),b=Object(m.a)(d,2),f=b[0],p=b[1],g=Object(a.useState)(""),v=Object(m.a)(g,2),E=v[0],h=v[1],k=function(){var e=Object(s.a)(i.a.mark((function e(a){var r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,r={title:o,author:f,url:E},e.next=5,y.create(r);case 5:l=e.sent,t(l),u(""),p(""),h(""),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),n("Failed to add new blog"),setTimeout((function(){n(null)}),5e3),console.log("Failed to create blog");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"mx-3"},r.a.createElement("h3",null,"Add New Blog"),r.a.createElement("form",{onSubmit:k},r.a.createElement("div",null,"Title:",r.a.createElement("input",{className:"form-control",type:"text",value:o,name:"Title",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",null,"Author:",r.a.createElement("input",{className:"form-control",type:"text",value:f,name:"Author",onChange:function(e){var t=e.target;return p(t.value)}})),r.a.createElement("div",null,"URL:",r.a.createElement("input",{className:"form-control",type:"text",value:E,name:"URL",onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"add")))},x={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=e.updateUser,n=e.setErrorMessage,l=Object(a.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],d=Object(a.useState)(""),b=Object(m.a)(d,2),f=b[0],p=b[1],g=function(){var e=Object(s.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x.login({username:o,password:f});case 4:r=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(r)),t(r),u(""),p(""),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),n("Wrong credentials"),setTimeout((function(){n(null)}),5e3),console.log("Wrong credentials");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"mt-5 mb-3"},"Please sign in"),r.a.createElement("form",{style:{maxWidth:"480px",margin:"auto"},onSubmit:g},r.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Username",value:o,name:"Username",required:!0,autoFocus:!0,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:f,name:"Password",onChange:function(e){var t=e.target;return p(t.value)}}),r.a.createElement("div",{className:"mt-3"},r.a.createElement("button",{className:"btn btn-lg btn-block btn-primary",type:"submit"},"Sign In"))))},C=n(23),A=n(49),T=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),u=Object(m.a)(c,2),d=u[0],b=u[1],f=Object(a.useState)(null),g=Object(m.a)(f,2),E=g[0],h=g[1],k=Object(a.useState)(null),N=Object(m.a)(k,2),w=N[0],x=N[1],T=Object(a.useState)("Sort By"),I=Object(m.a)(T,2),L=I[0],U=I[1],B=Object(a.useState)(null),J=Object(m.a)(B,2),M=J[0],R=J[1];Object(a.useEffect)((function(){y.getAll().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);b(t),y.setToken(t.token)}var n=document.querySelector('.theme-switch input[type="checkbox"]'),a=localStorage.getItem("theme");a&&(document.documentElement.setAttribute("data-theme",a),"dark"===a&&(n.checked=!0))}),[]);var W=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.setToken(t.token),b(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=Object(o.a)({},e,{likes:e.likes+1});y.update(e.id,t).then((function(e){l(n.map((function(t){return t.id!==e.id?t:e})))}))},P=function(e){window.confirm("Remove blog ".concat(e.title," by ").concat(e.author))&&y.remove(e.id).then((function(){l(n.filter((function(t){return t.id!==e.id})))}))};return r.a.createElement("div",{className:"container"},r.a.createElement(v,{message:E,error:!0}),r.a.createElement(v,{message:w,error:!1}),r.a.createElement("div",{className:"theme-switch-wrapper float-right"},r.a.createElement("label",{className:"theme-switch"},r.a.createElement("input",{type:"checkbox",id:"checkbox",onClick:function(e){return function(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}(e)}}),r.a.createElement("div",{className:"slider round"})),r.a.createElement("em",null)),null===d?r.a.createElement(S,{updateUser:W,setErrorMessage:h}):r.a.createElement("div",null,r.a.createElement("div",{className:"mt-5"},r.a.createElement("h1",{className:"text-center"},"blogs"),r.a.createElement("button",{className:"btn btn-outline-danger float-right",onClick:function(){return b(null),y.setToken(null),void window.localStorage.removeItem("loggedNoteappUser")}},"logout")),r.a.createElement("h2",null," Welcome ",d.name," "),r.a.createElement("div",{className:"mt-5"},r.a.createElement(O,{buttonLabel:"Add New Blog"},r.a.createElement(j,{updateBlogs:function(e){l(n.concat(e)),x("A new blog: ".concat(e.title," has been added")),setTimeout((function(){x(null)}),5e3)},setErrorMessage:h}))),r.a.createElement("div",{className:"mt-5"},r.a.createElement("div",null,r.a.createElement("h2",null,"bloglist",r.a.createElement(A.a,{title:L,className:"format float-right"},r.a.createElement(C.a.Item,{as:"button"},r.a.createElement("div",{onClick:function(e){return function(e){U(e),R("likes")}(e.target.textContent)}},"Likes")),r.a.createElement(C.a.Item,{as:"button"},r.a.createElement("div",{onClick:function(e){return function(e){U(e),R("title")}(e.target.textContent)}},"Title")),r.a.createElement(C.a.Item,{as:"button"},r.a.createElement("div",{onClick:function(e){return function(e){U(e),R("author")}(e.target.textContent)}},"Author"))))),r.a.createElement("div",{className:"mt-4"},function(){if(null===M)return n.map((function(e,t){return r.a.createElement(p,{num:t+1,key:e.id,blog:e,addLike:function(){return F(e)},removeBlog:function(){return P(e)},user:d})}));var e;switch(M){case"likes":e=function(e,t){return function(e,t){return e.likes<t.likes?1:-1}(e,t)};break;case"title":e=function(e,t){return function(e,t){return e.title.localeCompare(t.title)}(e,t)};break;case"author":e=function(e,t){return function(e,t){return e.author.localeCompare(t.author)}(e,t)}}return n.sort(e).map((function(e,t){return r.a.createElement(p,{num:t+1,key:e.id,blog:e,addLike:function(){return F(e)},removeBlog:function(){return P(e)},user:d})}))}()))))};n(79),n(80);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.303f6c3e.chunk.js.map