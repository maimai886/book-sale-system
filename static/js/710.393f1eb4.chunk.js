"use strict";(self.webpackChunkbook_sale_system=self.webpackChunkbook_sale_system||[]).push([[710],{4603:function(e,t,n){n.d(t,{Ig:function(){return d},SA:function(){return f},OO:function(){return h},Lu:function(){return m},qL:function(){return p},lj:function(){return x}});var r=n(4165),a=n(5861),o=n(1413),i=n(1243),c=n(7027),s=i.Z.create({baseURL:"http://54.244.89.138:3000",timeout:3e3});s.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers=(0,o.Z)((0,o.Z)({},e.headers),{},{Authorization:t})),e})),s.interceptors.response.use((function(e){console.log(e);var t=e.data,n=t.code,r=t.data,a=t.message;t.token;return 0==n?("register"!=r.action&&"login"!=r.action||c.ZP.open({type:"success",content:"".concat(a)}),e.data.data&&(e.data.data=u(e.data.data))):"\u8eab\u4efd\u8a8d\u8b49\u5931\u6557"==a?(localStorage.setItem("token","custom"),c.ZP.open({type:"warning",content:"\u307e\u3060\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u4e00\u90e8\u306e\u6a5f\u80fd\u304c\u4f7f\u3048\u307e\u305b\u3093\u304b\u3082\u3057\u308c\u307e\u305b\u3093"})):c.ZP.open({type:"warning",content:"".concat(a)}),e.data}));function u(e){if("object"===typeof e)for(var t in e){var n=t;t.includes("_")&&(n=t.replaceAll(/_([a-zA-Z])/g,(function(e,t){return t.toUpperCase()}))),n!==t&&(e[n]=e[t],delete e[t]),"object"===typeof e[n]&&(e[n]=u(e[n]))}return e}var l=function(e){return"get"===e.method&&(e.params=e.data),s(e)},d=function(e){return l({method:"post",url:"/api/v1/user/login",data:e})},p=function(e){return l({method:"post",url:"/api/v1/user/register",data:e})},f=function(e){return l({method:"post",url:"/api/v1/book/bookInfo",data:e})},h=function(e){return l({method:"post",url:"/api/v1/user/itemInfo",data:e})},m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({method:"post",url:"/api/v1/purchase/purchaseInfo",data:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({method:"post",url:"/api/v1/sell/sellInfo",data:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9710:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(4165),a=n(3433),o=n(5861),i=n(9439),c=n(1413),s=n(4925),u=n(2791),l=n(2706),d=n(9740),p=n(8185),f=n(1810),h=n(3655),m=n(5820),x=n(3544),Z=n(2603),g="page02_main__xK3SY",v="page02_searchbar__sgGrl",w="page02_tableStyle__wQsoS",b=n(4603),y=[],k=[],j={title:"",comment:"",show:!1},I=n(7020),S=n(184),C=function(e){var t=(0,u.useState)(!1),n=(0,i.Z)(t,2),r=n[0],a=n[1];return(0,u.useEffect)((function(){a(e.show)}),[e.show]),(0,S.jsx)(I.Z,{title:e.title,open:r,onCancel:function(){a(!1),e.onCancel&&e.onCancel()},footer:null,children:(0,S.jsx)("div",{children:e.content})})},_=["editing","dataIndex","title","inputType","record","index","children"],N=function(e){var t=e.editing,n=e.dataIndex,r=e.title,a=e.inputType,o=(e.record,e.index,e.children),i=(0,s.Z)(e,_),u="number"===a?(0,S.jsx)(l.Z,{}):(0,S.jsx)(d.Z,{});return(0,S.jsx)("td",(0,c.Z)((0,c.Z)({},i),{},{children:t?(0,S.jsx)(p.Z.Item,{name:n,style:{margin:0},rules:[{required:!0,message:"".concat(r,"\u3092\u5165\u529b\u304f\u3060\u3055\u3044!")}],children:u}):o}))},q=function(){var e=(0,u.useState)(y),t=(0,i.Z)(e,2),n=t[0],s=t[1],l=(0,u.useState)(k),d=(0,i.Z)(l,2),I=(d[0],d[1]),_=(0,u.useState)(""),q=(0,i.Z)(_,2),O=q[0],A=q[1],L=(0,u.useState)(j),F=(0,i.Z)(L,2),R=F[0],T=F[1],E=localStorage.getItem("token"),K=(0,u.useState)([]),P=(0,i.Z)(K,2),z=P[0],U=P[1],V=p.Z.useForm(),G=(0,i.Z)(V,1)[0],Q=(0,u.useState)(0),W=(0,i.Z)(Q,2),Y=W[0],B=W[1],D=function(e){return e.sqlNo==Y},H=[{title:"\u5199\u771f",dataIndex:"img",width:"10%",editable:!1,render:function(e,t){return(0,S.jsx)("span",{style:{width:80,height:100,display:"inline-flex"},onClick:function(){T((0,c.Z)((0,c.Z)({},R),{},{title:(0,S.jsxs)("div",{style:{display:"flex"},children:[t.img,(0,S.jsx)("div",{style:{display:"unset "},children:"\u8457\u8005\uff1a"}),(0,S.jsx)("div",{children:t.author}),(0,S.jsx)("div",{})]}),comment:t.comment,show:!0}))},children:e})}},{title:"\u66f8\u7c4d\u540d",dataIndex:"bookName",width:"20%",editable:!0,render:function(e){return(0,S.jsx)(f.Z,{title:e,children:(0,S.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%",maxWidth:"150px",display:"inline-block"},children:e})})}},{title:"\u30b3\u30fc\u30b9",dataIndex:"cost",width:"15%",editable:!0},{title:"\u4fa1\u683c",dataIndex:"price",width:"10%",editable:!0},{title:"\u51fa\u7248\u793e",dataIndex:"publishing",width:"15%",editable:!0},{title:"\u7a2e\u985e",dataIndex:"type",width:"10%",editable:!0},{title:"\u64cd\u4f5c",dataIndex:"operation",render:function(e,t){return D(t)?(0,S.jsxs)("span",{children:[(0,S.jsx)(h.Z.Link,{onClick:function(){return function(e){return ee.apply(this,arguments)}(t.sqlNo)},style:{marginRight:8},children:"\u4fdd\u5b58"}),(0,S.jsx)(m.Z,{title:"\u30ad\u30e3\u30f3\u30bb\u30eb?",onConfirm:$,children:(0,S.jsx)("a",{children:"\u623b\u308b"})})]}):(0,S.jsx)(h.Z.Link,{disabled:0!==Y,onClick:function(){return X(t)},children:"\u7de8\u96c6"})}}],J=H.map((function(e){return e.editable?(0,c.Z)((0,c.Z)({},e),{},{onCell:function(t){return{record:t,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:D(t)}}}):e})),M={selectedRowKeys:z,onChange:function(e){console.log("selectedRowKeys changed: ",e),U(e)}},X=function(e){G.setFieldsValue((0,c.Z)({img:"",bookName:"",cost:"",price:""},e)),B(e.sqlNo)},$=function(){B(0)};function ee(){return(ee=(0,o.Z)((0,r.Z)().mark((function e(t){var o,i,u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.validateFields();case 3:o=e.sent,i=(0,a.Z)(n),u=i.findIndex((function(e){return t===e.sqlNo})),u>-1?(l=i[u],i.splice(u,1,(0,c.Z)((0,c.Z)({},l),o)),s(i),B(0)):(i.push(o),s(i),B(0)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=(0,o.Z)((0,r.Z)().mark((function e(t){var n,a,o,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.SA)(null);case 3:return n=e.sent,a=n.data.bookInfo,e.next=7,(0,b.OO)({kind:"bookType"});case 7:o=e.sent,i=o.data.itemInfo,u=a.map((function(e){var t;return(0,c.Z)((0,c.Z)({},e),{},{img:(0,S.jsx)("img",{src:"".concat(e.img)}),key:e.sqlNo,type:null===(t=i.find((function(t){return t.num===e.type})))||void 0===t?void 0:t.itemName})})),s(u),I(i),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){te(null)}),[]),(0,u.useEffect)((function(){E&&""==O&&te(null)}),[O]),(0,S.jsxs)("div",{className:g,children:[(0,S.jsx)(C,{title:R.title,content:R.comment,show:R.show,onCancel:function(){T((0,c.Z)((0,c.Z)({},R),{},{show:!1}))}}),(0,S.jsx)(Z.Z,{className:v,placeholder:"\u66f8\u7c4d\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",allowClear:!0,onChange:function(e){return A(e.target.value)},onSearch:function(){var e=n.filter((function(e){return e.bookName.indexOf(O)>=0}));s(e)}}),(0,S.jsx)(p.Z,{form:G,component:!1,children:(0,S.jsx)(x.Z,{className:w,components:{body:{cell:N}},bordered:!0,dataSource:n,columns:J,rowClassName:"editable-row",rowSelection:M,pagination:{onChange:$}})})]})}}}]);
//# sourceMappingURL=710.393f1eb4.chunk.js.map