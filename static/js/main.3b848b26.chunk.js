(this["webpackJsonppre-onboarding-1"]=this["webpackJsonppre-onboarding-1"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(8),a=c.n(s),i=(c(14),c(15),c(2)),o=(c(16),c(17),c(0)),j=function(e){var t=e.card,c=t.id,n=t.email,r=t.body;return Object(o.jsxs)("li",{className:"card",children:[Object(o.jsxs)("div",{className:"card__title",children:[Object(o.jsx)("h2",{children:"Comment Id"}),Object(o.jsx)("p",{children:c})]}),Object(o.jsxs)("div",{className:"card__title",children:[Object(o.jsx)("h2",{children:"Email"}),Object(o.jsx)("p",{children:n})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"card--comment",children:"Comment"}),Object(o.jsx)("p",{children:r})]})]})},b=c(7),d=c.n(b),u=c(5),l=c(9),O=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)([]),o=Object(i.a)(a,2),j=o[0],b=o[1],O=Object(n.useState)(!1),h=Object(i.a)(O,2),f=h[0],m=h[1],x=Object(n.useCallback)(Object(l.a)(d.a.mark((function t(){var c,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="".concat("https://jsonplaceholder.typicode.com/comments?","_page=").concat(e,"&_limit=").concat(10),s(!0),t.prev=2,t.next=5,fetch(c);case 5:return n=t.sent,t.next=8,n.json();case 8:if(r=t.sent,n.ok){t.next=11;break}throw new Error("Failed to fetch data, please check your API or internet connection");case 11:b((function(e){return Object(u.a)(new Set([].concat(Object(u.a)(e),Object(u.a)(r))))})),m(r.length>0),s(!1),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(2),s(!1),console.error(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[2,16]])}))),[e]);return Object(n.useEffect)((function(){x()}),[e,x]),{cards:j,hasMore:f,isLoading:r}},h=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),c=t[0],r=t[1],s=O(c),a=s.hasMore,b=s.cards,d=s.isLoading,u=Object(n.useRef)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("ul",{children:b.map((function(e){return Object(o.jsx)(j,{card:e},e.id)}))}),Object(o.jsx)("div",{className:"observer",ref:function(e){d||(u.current&&u.current.disconnect(),u.current=new IntersectionObserver((function(e){Object(i.a)(e,1)[0].isIntersecting&&a&&r((function(e){return e+1}))})),e&&u.current.observe(e))}})]})})},f=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h,{})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3b848b26.chunk.js.map