(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(11),n(1)),l=n.n(s),u=n(2),i=n(3),m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={description:n},e.next=5,fetch("http://localhost:5000/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=e.sent,c(""),e.next=9,r.json();case 9:e.sent,window.location="/",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"text-center mt-5"},"Todo List"),r.a.createElement("form",{className:"d-flex",onSubmit:o},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"What's on your mind?",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"btn btn-success"},"Add Todo")))},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/todos/".concat(t),{method:"DELETE"});case 2:e.sent,c(n.filter((function(e){return e.todo_id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/todos");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return s()}),[]),r.a.createElement(a.Fragment,null,r.a.createElement("table",{className:"table mt-5 text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.todo_id},r.a.createElement("td",null,e.description),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(e.todo_id)}},"Delete")))})))))},f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(p,null))};o.a.render(r.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.0726ad22.chunk.js.map