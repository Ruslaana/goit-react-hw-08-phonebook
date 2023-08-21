"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[670],{7670:function(e,o,r){r.r(o),r.d(o,{default:function(){return be}});var t=r(5149),n=r(7107),a=r(9164),i=r(4708),l=r(4554),c=r(890),s=r(5210),d=r(4942),u=r(3366),m=r(7462),p=r(2791),v=r(3733),f=r(4419),h=r(2930),b=r(2466),Z=r(1217),g=r(3457),k=r(7078),x=r(8519),y=r(5080),P=r(1184),w=r(5682),C=r(3329),j=["component","direction","spacing","divider","children","className","useFlexGap"],S=(0,y.Z)(),R=(0,g.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}});function F(e){return(0,k.Z)({props:e,name:"MuiStack",defaultTheme:S})}function z(e,o){var r=p.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,n){return e.push(t),n<r.length-1&&e.push(p.cloneElement(o,{key:"separator-".concat(n)})),e}),[])}var N=function(e){var o=e.ownerState,r=e.theme,t=(0,m.Z)({display:"flex",flexDirection:"column"},(0,P.k9)({theme:r},(0,P.P$)({values:o.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(o.spacing){var n=(0,w.hB)(r),a=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof o.spacing&&null!=o.spacing[r]||"object"===typeof o.direction&&null!=o.direction[r])&&(e[r]=!0),e}),{}),i=(0,P.P$)({values:o.direction,base:a}),l=(0,P.P$)({values:o.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,o,r){if(!i[e]){var t=o>0?i[r[o-1]]:"column";i[e]=t}}));t=(0,b.Z)(t,(0,P.k9)({theme:r},l,(function(e,r){return o.useFlexGap?{gap:(0,w.NA)(n,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,d.Z)({},"margin".concat((t=r?i[r]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,w.NA)(n,e))};var t})))}return t=(0,P.dt)(r.breakpoints,t)};var I=r(6934),M=r(1402),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.createStyledComponent,r=void 0===o?R:o,t=e.useThemeProps,n=void 0===t?F:t,a=e.componentName,i=void 0===a?"MuiStack":a,l=function(){return(0,f.Z)({root:["root"]},(function(e){return(0,Z.Z)(i,e)}),{})},c=r(N),s=p.forwardRef((function(e,o){var r=n(e),t=(0,x.Z)(r),a=t.component,i=void 0===a?"div":a,s=t.direction,d=void 0===s?"column":s,p=t.spacing,f=void 0===p?0:p,h=t.divider,b=t.children,Z=t.className,g=t.useFlexGap,k=void 0!==g&&g,y=(0,u.Z)(t,j),P={direction:d,spacing:f,useFlexGap:k},w=l();return(0,C.jsx)(c,(0,m.Z)({as:i,ownerState:P,ref:o,className:(0,v.Z)(w.root,Z)},y,{children:h?z(b,h):b}))}));return s}({createStyledComponent:(0,I.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}}),useThemeProps:function(e){return(0,M.Z)({props:e,name:"MuiStack"})}}),L=B,q=r(4036),T=r(5878);function E(e){return(0,Z.Z)("MuiFormControlLabel",e)}var O=(0,T.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),D=r(6147),A=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],H=(0,I.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[(0,d.Z)({},"& .".concat(O.label),o.label),o.root,o["labelPlacement".concat((0,q.Z)(r.labelPlacement))]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,m.Z)((0,d.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(O.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,d.Z)({},"& .".concat(O.label),(0,d.Z)({},"&.".concat(O.disabled),{color:(o.vars||o).palette.text.disabled})))})),V=(0,I.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,o){return o.asterisk}})((function(e){var o=e.theme;return(0,d.Z)({},"&.".concat(O.error),{color:(o.vars||o).palette.error.main})})),W=p.forwardRef((function(e,o){var r,t,n=(0,M.Z)({props:e,name:"MuiFormControlLabel"}),a=n.className,i=n.componentsProps,l=void 0===i?{}:i,s=n.control,d=n.disabled,b=n.disableTypography,Z=n.label,g=n.labelPlacement,k=void 0===g?"end":g,x=n.required,y=n.slotProps,P=void 0===y?{}:y,w=(0,u.Z)(n,A),j=(0,h.Z)(),S=null!=(r=null!=d?d:s.props.disabled)?r:null==j?void 0:j.disabled,R=null!=x?x:s.props.required,F={disabled:S,required:R};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof n[e]&&(F[e]=n[e])}));var z=(0,D.Z)({props:n,muiFormControl:j,states:["error"]}),N=(0,m.Z)({},n,{disabled:S,labelPlacement:k,required:R,error:z.error}),I=function(e){var o=e.classes,r=e.disabled,t=e.labelPlacement,n=e.error,a=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,q.Z)(t)),n&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,f.Z)(i,E,o)}(N),B=null!=(t=P.typography)?t:l.typography,T=Z;return null==T||T.type===c.Z||b||(T=(0,C.jsx)(c.Z,(0,m.Z)({component:"span"},B,{className:(0,v.Z)(I.label,null==B?void 0:B.className),children:T}))),(0,C.jsxs)(H,(0,m.Z)({className:(0,v.Z)(I.root,a),ownerState:N,ref:o},w,{children:[p.cloneElement(s,F),R?(0,C.jsxs)(L,{direction:"row",alignItems:"center",children:[T,(0,C.jsxs)(V,{ownerState:N,"aria-hidden":!0,className:I.asterisk,children:["\u2009","*"]})]}):T]}))})),G=r(2065),$=r(9439),_=r(5158),U=r(2982);function J(e){return(0,Z.Z)("PrivateSwitchBase",e)}(0,T.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var K=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Q=(0,I.ZP)(U.Z)((function(e){var o=e.ownerState;return(0,m.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),X=(0,I.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Y=p.forwardRef((function(e,o){var r=e.autoFocus,t=e.checked,n=e.checkedIcon,a=e.className,i=e.defaultChecked,l=e.disabled,c=e.disableFocusRipple,s=void 0!==c&&c,d=e.edge,p=void 0!==d&&d,b=e.icon,Z=e.id,g=e.inputProps,k=e.inputRef,x=e.name,y=e.onBlur,P=e.onChange,w=e.onFocus,j=e.readOnly,S=e.required,R=void 0!==S&&S,F=e.tabIndex,z=e.type,N=e.value,I=(0,u.Z)(e,K),M=(0,_.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),B=(0,$.Z)(M,2),L=B[0],T=B[1],E=(0,h.Z)(),O=l;E&&"undefined"===typeof O&&(O=E.disabled);var D="checkbox"===z||"radio"===z,A=(0,m.Z)({},e,{checked:L,disabled:O,disableFocusRipple:s,edge:p}),H=function(e){var o=e.classes,r=e.checked,t=e.disabled,n=e.edge,a={root:["root",r&&"checked",t&&"disabled",n&&"edge".concat((0,q.Z)(n))],input:["input"]};return(0,f.Z)(a,J,o)}(A);return(0,C.jsxs)(Q,(0,m.Z)({component:"span",className:(0,v.Z)(H.root,a),centerRipple:!0,focusRipple:!s,disabled:O,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){y&&y(e),E&&E.onBlur&&E.onBlur(e)},ownerState:A,ref:o},I,{children:[(0,C.jsx)(X,(0,m.Z)({autoFocus:r,checked:t,defaultChecked:i,className:H.input,disabled:O,id:D?Z:void 0,name:x,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;T(o),P&&P(e,o)}},readOnly:j,ref:k,required:R,ownerState:A,tabIndex:F,type:z},"checkbox"===z&&void 0===N?{}:{value:N},g)),L?n:b]}))})),ee=r(9201),oe=(0,ee.Z)((0,C.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),re=(0,ee.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),te=(0,ee.Z)((0,C.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ne(e){return(0,Z.Z)("MuiCheckbox",e)}var ae=(0,T.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ie=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],le=(0,I.ZP)(Y,{shouldForwardProp:function(e){return(0,I.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,r.indeterminate&&o.indeterminate,"default"!==r.color&&o["color".concat((0,q.Z)(r.color))]]}})((function(e){var o,r=e.theme,t=e.ownerState;return(0,m.Z)({color:(r.vars||r).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===t.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,G.Fq)("default"===t.color?r.palette.action.active:r.palette[t.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(o={},(0,d.Z)(o,"&.".concat(ae.checked,", &.").concat(ae.indeterminate),{color:(r.vars||r).palette[t.color].main}),(0,d.Z)(o,"&.".concat(ae.disabled),{color:(r.vars||r).palette.action.disabled}),o))})),ce=(0,C.jsx)(re,{}),se=(0,C.jsx)(oe,{}),de=(0,C.jsx)(te,{}),ue=p.forwardRef((function(e,o){var r,t,n=(0,M.Z)({props:e,name:"MuiCheckbox"}),a=n.checkedIcon,i=void 0===a?ce:a,l=n.color,c=void 0===l?"primary":l,s=n.icon,d=void 0===s?se:s,h=n.indeterminate,b=void 0!==h&&h,Z=n.indeterminateIcon,g=void 0===Z?de:Z,k=n.inputProps,x=n.size,y=void 0===x?"medium":x,P=n.className,w=(0,u.Z)(n,ie),j=b?g:d,S=b?g:i,R=(0,m.Z)({},n,{color:c,indeterminate:b,size:y}),F=function(e){var o=e.classes,r=e.indeterminate,t=e.color,n=e.size,a={root:["root",r&&"indeterminate","color".concat((0,q.Z)(t)),"size".concat((0,q.Z)(n))]},i=(0,f.Z)(a,ne,o);return(0,m.Z)({},o,i)}(R);return(0,C.jsx)(le,(0,m.Z)({type:"checkbox",inputProps:(0,m.Z)({"data-indeterminate":b},k),icon:p.cloneElement(j,{fontSize:null!=(r=j.props.fontSize)?r:y}),checkedIcon:p.cloneElement(S,{fontSize:null!=(t=S.props.fontSize)?t:y}),ownerState:R,ref:o,className:(0,v.Z)(F.root,P)},w,{classes:F}))})),me=r(6151),pe=r(9434),ve=r(7689),fe=r(8097),he=r(6351),be=function(){var e=(0,pe.I0)();if((0,pe.v9)(he.R7))return(0,C.jsx)(ve.Fg,{to:"/contacts"});var o=(0,n.Z)();return(0,C.jsx)(t.a,{theme:o,children:(0,C.jsxs)(a.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(i.ZP,{}),(0,C.jsxs)(l.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(c.Z,{component:"h1",variant:"h5",children:"Log in"}),(0,C.jsxs)(l.Z,{component:"form",onSubmit:function(o){o.preventDefault();var r=o.currentTarget,t=r.elements.email.value,n=r.elements.password.value;e((0,fe.$U)({email:t,password:n}))},noValidate:!0,sx:{mt:1},children:[(0,C.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,C.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,C.jsx)(W,{control:(0,C.jsx)(ue,{value:"remember",color:"primary"}),label:"Remember me"}),(0,C.jsx)(me.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Log In"})]})]})]})})}}}]);
//# sourceMappingURL=670.be199338.chunk.js.map