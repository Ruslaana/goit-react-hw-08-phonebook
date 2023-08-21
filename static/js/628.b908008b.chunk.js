"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[628],{6628:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r=t(7107),a=t(7462),i=t(3366),o=t(2791),c=t(4942);var s=o.createContext(null);function u(){return o.useContext(s)}var l="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",m=t(3329);var p=function(n){var e=n.children,t=n.theme,r=u(),i=o.useMemo((function(){var n=null===r?t:function(n,e){return"function"===typeof e?e(n):(0,a.Z)({},n,e)}(r,t);return null!=n&&(n[l]=null!==r),n}),[t,r]);return(0,m.jsx)(s.Provider,{value:i,children:e})},d=t(5149),f=t(9120),v={};function h(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo((function(){var i=n&&e[n]||e;if("function"===typeof t){var o=t(i),s=n?(0,a.Z)({},e,(0,c.Z)({},n,o)):o;return r?function(){return s}:s}return n?(0,a.Z)({},e,(0,c.Z)({},n,t)):(0,a.Z)({},e,t)}),[n,e,t,r])}var x=function(n){var e=n.children,t=n.theme,r=n.themeId,a=(0,f.Z)(v),i=u()||v,o=h(r,a,t),c=h(r,i,t,!0);return(0,m.jsx)(p,{theme:c,children:(0,m.jsx)(d.T.Provider,{value:o,children:e})})},g=t(988),w=["theme"];function Z(n){var e=n.theme,t=(0,i.Z)(n,w),r=e[g.Z];return(0,m.jsx)(x,(0,a.Z)({},t,{themeId:r?g.Z:void 0,theme:r||e}))}var b=t(9164),S=t(4708),k=t(4554),j=t(890),y=t(3433),W=t(3733),N=t(1184),M=t(8519),E=t(4419),z=t(6934),C=t(1402),P=t(3967);var T=o.createContext(),_=t(5878),G=t(1217);function L(n){return(0,G.Z)("MuiGrid",n)}var O=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],q=(0,_.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,y.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,y.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,y.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,y.Z)(O.map((function(n){return"grid-xs-".concat(n)}))),(0,y.Z)(O.map((function(n){return"grid-sm-".concat(n)}))),(0,y.Z)(O.map((function(n){return"grid-md-".concat(n)}))),(0,y.Z)(O.map((function(n){return"grid-lg-".concat(n)}))),(0,y.Z)(O.map((function(n){return"grid-xl-".concat(n)}))))),B=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function D(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function F(n){var e=n.breakpoints,t=n.values,r="";Object.keys(t).forEach((function(n){""===r&&0!==t[n]&&(r=n)}));var a=Object.keys(e).sort((function(n,t){return e[n]-e[t]}));return a.slice(0,a.indexOf(r))}var I=(0,z.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState,r=t.container,a=t.direction,i=t.item,o=t.spacing,c=t.wrap,s=t.zeroMinWidth,u=t.breakpoints,l=[];r&&(l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var r=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&r.push(t["spacing-".concat(e,"-").concat(String(a))])})),r}(o,u,e));var m=[];return u.forEach((function(n){var r=t[n];r&&m.push(e["grid-".concat(n,"-").concat(String(r))])})),[e.root,r&&e.container,i&&e.item,s&&e.zeroMinWidth].concat((0,y.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],m)}})((function(n){var e=n.ownerState;return(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,t=n.ownerState,r=(0,N.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,N.k9)({theme:e},r,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(q.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.rowSpacing,i={};if(r&&0!==a){var o,s=(0,N.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof s&&(o=F({breakpoints:e.breakpoints.values,values:s})),i=(0,N.k9)({theme:e},s,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,c.Z)({marginTop:"-".concat(D(a))},"& > .".concat(q.item),{paddingTop:D(a)}):null!=(r=o)&&r.includes(t)?{}:(0,c.Z)({marginTop:0},"& > .".concat(q.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,a=t.columnSpacing,i={};if(r&&0!==a){var o,s=(0,N.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof s&&(o=F({breakpoints:e.breakpoints.values,values:s})),i=(0,N.k9)({theme:e},s,(function(n,t){var r,a=e.spacing(n);return"0px"!==a?(0,c.Z)({width:"calc(100% + ".concat(D(a),")"),marginLeft:"-".concat(D(a))},"& > .".concat(q.item),{paddingLeft:D(a)}):null!=(r=o)&&r.includes(t)?{}:(0,c.Z)({width:"100%",marginLeft:0},"& > .".concat(q.item),{paddingLeft:0})}))}return i}),(function(n){var e,t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,i){var o={};if(r[i]&&(e=r[i]),!e)return n;if(!0===e)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,N.P$)({values:r.columns,breakpoints:t.breakpoints.values}),s="object"===typeof c?c[i]:c;if(void 0===s||null===s)return n;var u="".concat(Math.round(e/s*1e8)/1e6,"%"),l={};if(r.container&&r.item&&0!==r.columnSpacing){var m=t.spacing(r.columnSpacing);if("0px"!==m){var p="calc(".concat(u," + ").concat(D(m),")");l={flexBasis:p,maxWidth:p}}}o=(0,a.Z)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===t.breakpoints.values[i]?Object.assign(n,o):n[t.breakpoints.up(i)]=o,n}),{})}));var R=function(n){var e=n.classes,t=n.container,r=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];t&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return e.forEach((function(e){var r=n[e];if(Number(r)>0){var a="spacing-".concat(e,"-").concat(String(r));t.push(a)}})),t}(i,s));var l=[];s.forEach((function(e){var t=n[e];t&&l.push("grid-".concat(e,"-").concat(String(t)))}));var m={root:["root",t&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,y.Z)(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,E.Z)(m,L,e)},$=o.forwardRef((function(n,e){var t=(0,C.Z)({props:n,name:"MuiGrid"}),r=(0,P.Z)().breakpoints,c=(0,M.Z)(t),s=c.className,u=c.columns,l=c.columnSpacing,p=c.component,d=void 0===p?"div":p,f=c.container,v=void 0!==f&&f,h=c.direction,x=void 0===h?"row":h,g=c.item,w=void 0!==g&&g,Z=c.rowSpacing,b=c.spacing,S=void 0===b?0:b,k=c.wrap,j=void 0===k?"wrap":k,y=c.zeroMinWidth,N=void 0!==y&&y,E=(0,i.Z)(c,B),z=Z||S,_=l||S,G=o.useContext(T),L=v?u||12:G,O={},q=(0,a.Z)({},E);r.keys.forEach((function(n){null!=E[n]&&(O[n]=E[n],delete q[n])}));var D=(0,a.Z)({},c,{columns:L,container:v,direction:x,item:w,rowSpacing:z,columnSpacing:_,wrap:j,zeroMinWidth:N,spacing:S},O,{breakpoints:r.keys}),F=R(D);return(0,m.jsx)(T.Provider,{value:L,children:(0,m.jsx)(I,(0,a.Z)({ownerState:D,className:(0,W.Z)(F.root,s),as:d,ref:e},q))})})),A=$,H=t(5210),U=t(6151),V=t(9434),J=t(7689),K=t(8097),Q=t(6351),X=function(){var n=(0,V.I0)();if((0,V.v9)(Q.R7))return(0,m.jsx)(J.Fg,{to:"/contacts"});var e=(0,r.Z)();return(0,m.jsx)(Z,{theme:e,children:(0,m.jsxs)(b.Z,{component:"main",maxWidth:"xs",children:[(0,m.jsx)(S.ZP,{}),(0,m.jsxs)(k.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)(j.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,m.jsxs)(k.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;console.log(t.elements);var r="".concat(t.elements.firstName.value," ").concat(t.elements.lastName.value),a=t.elements.email.value,i=t.elements.password.value;console.log(r,a,i),n((0,K.tu)({name:r,email:a,password:i}))},sx:{mt:3},children:[(0,m.jsxs)(A,{container:!0,spacing:2,children:[(0,m.jsx)(A,{item:!0,xs:12,sm:6,children:(0,m.jsx)(H.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,m.jsx)(A,{item:!0,xs:12,sm:6,children:(0,m.jsx)(H.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,m.jsx)(A,{item:!0,xs:12,children:(0,m.jsx)(H.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,m.jsx)(A,{item:!0,xs:12,children:(0,m.jsx)(H.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,m.jsx)(U.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]})]})})}}}]);
//# sourceMappingURL=628.b908008b.chunk.js.map