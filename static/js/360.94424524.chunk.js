"use strict";(self.webpackChunkbook_sale_system=self.webpackChunkbook_sale_system||[]).push([[360],{7705:function(t,e,n){n(2791);var r=n(3544),a=n(184);e.Z=function(t){return(0,a.jsx)(r.Z,{columns:t.columns,dataSource:t.data,onChange:t.onChange})}},4603:function(t,e,n){n.d(e,{Ig:function(){return p},SA:function(){return f},OO:function(){return m},Lu:function(){return h},qL:function(){return d},lj:function(){return v}});var r=n(4165),a=n(5861),o=n(1413),u=n(1243),c=n(7027),s=u.Z.create({baseURL:"http://54.244.89.138:3000",timeout:3e3});s.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers=(0,o.Z)((0,o.Z)({},t.headers),{},{Authorization:e})),t})),s.interceptors.response.use((function(t){console.log(t);var e=t.data,n=e.code,r=e.data,a=e.message;e.token;return 0==n?("register"!=r.action&&"login"!=r.action||c.ZP.open({type:"success",content:"".concat(a)}),t.data.data&&(t.data.data=i(t.data.data))):"\u8eab\u4efd\u8a8d\u8b49\u5931\u6557"==a?(localStorage.setItem("token","custom"),c.ZP.open({type:"warning",content:"\u307e\u3060\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u4e00\u90e8\u306e\u6a5f\u80fd\u304c\u4f7f\u3048\u307e\u305b\u3093\u304b\u3082\u3057\u308c\u307e\u305b\u3093"})):c.ZP.open({type:"warning",content:"".concat(a)}),t.data}));function i(t){if("object"===typeof t)for(var e in t){var n=e;e.includes("_")&&(n=e.replaceAll(/_([a-zA-Z])/g,(function(t,e){return e.toUpperCase()}))),n!==e&&(t[n]=t[e],delete t[e]),"object"===typeof t[n]&&(t[n]=i(t[n]))}return t}var l=function(t){return"get"===t.method&&(t.params=t.data),s(t)},p=function(t){return l({method:"post",url:"/api/v1/user/login",data:t})},d=function(t){return l({method:"post",url:"/api/v1/user/register",data:t})},f=function(t){return l({method:"post",url:"/api/v1/book/bookInfo",data:t})},m=function(t){return l({method:"post",url:"/api/v1/user/itemInfo",data:t})},h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({method:"post",url:"/api/v1/purchase/purchaseInfo",data:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({method:"post",url:"/api/v1/sell/sellInfo",data:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},2360:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(4165),a=n(5861),o=n(9439),u=n(2791),c=n(7705),s=n(4603),i="page05_main__O8OHl",l="page05_title__md1lb",p=n(184),d=[{title:"\u66f8\u7c4d\u540d",dataIndex:"bookName",width:"50%"},{title:"\u91cf",dataIndex:"amount",width:"10%",sorter:{compare:function(t,e){return t.amount-e.amount},multiple:3}},{title:"\u4fa1\u683c",dataIndex:"price",width:"10%",sorter:{compare:function(t,e){return t.price-e.price},multiple:2}},{title:"\u7dcf\u984d",dataIndex:"total",width:"15%",sorter:{compare:function(t,e){return t.total-e.total},multiple:1}},{title:"\u5165\u8377\u65e5",dataIndex:"sellDate",sorter:{compare:function(t,e){return Date.parse(t.sellDate)-Date.parse(e.sellDate)},multiple:1}}],f=function(t,e,n,r){console.log("params",t,e,n,r)},m=function(){var t=(0,u.useState)([]),e=(0,o.Z)(t,2),n=e[0],m=e[1];function h(){return(h=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.lj)(null);case 2:for(a in n=t.sent)console.log(666,n[a]),m(n[a]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,u.useEffect)((function(){!function(t){h.apply(this,arguments)}(null)}),[]),(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("div",{className:l,children:"\u8ca9\u58f2\u660e\u7d30"}),(0,p.jsx)(c.Z,{columns:d,data:n,onChange:f})]})}}}]);
//# sourceMappingURL=360.94424524.chunk.js.map