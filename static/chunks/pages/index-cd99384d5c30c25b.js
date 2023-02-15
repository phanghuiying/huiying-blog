(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5973)}])},5973:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return es}});var n=t(5893),a=t(9008),i=t.n(a),l=t(6384),s=t(5059),o=(0,l.m)("div");o.displayName="Box";var c=(0,s.G)(function(e,r){let{size:t,centerContent:a=!0,...i}=e;return(0,n.jsx)(o,{ref:r,boxSize:t,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});c.displayName="Square",(0,s.G)(function(e,r){let{size:t,...a}=e;return(0,n.jsx)(c,{size:t,ref:r,borderRadius:"9999px",...a})}).displayName="Circle";var u=t(2498),d=t(3179),m=t(1639),x=t(5432),h=(0,s.G)(function(e,r){let{className:t,centerContent:a,...i}=(0,d.Lr)(e),s=(0,m.mq)("Container",e);return(0,n.jsx)(l.m.div,{ref:r,className:(0,x.cx)("chakra-container",t),...i,__css:{...s,...a&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});h.displayName="Container";var f=e=>(0,n.jsx)(l.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});function p(e,r){return Array.isArray(e)?e.map(e=>null===e?null:r(e)):(0,x.Kn)(e)?Object.keys(e).reduce((t,n)=>(t[n]=r(e[n]),t),{}):null!=e?r(e):null}f.displayName="StackItem",Object.freeze(["base","sm","md","lg","xl","2xl"]);var g="& > *:not(style) ~ *:not(style)",j=t(7294),v=(0,s.G)((e,r)=>{let{isInline:t,direction:a,align:i,justify:s,spacing:o="0.5rem",wrap:c,children:u,divider:d,className:m,shouldWrapChildren:h,...v}=e,y=t?"row":null!=a?a:"column",b=(0,j.useMemo)(()=>(function(e){let{spacing:r,direction:t}=e,n={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:t,[g]:p(t,e=>n[e])}})({direction:y,spacing:o}),[y,o]),_=(0,j.useMemo)(()=>(function(e){let{spacing:r,direction:t}=e,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":p(t,e=>n[e])}})({spacing:o,direction:y}),[o,y]),k=!!d,N=!h&&!k,S=(0,j.useMemo)(()=>{let e=j.Children.toArray(u).filter(e=>(0,j.isValidElement)(e));return N?e:e.map((r,t)=>{let a=void 0!==r.key?r.key:t,i=t+1===e.length,l=(0,n.jsx)(f,{children:r},a),s=h?l:r;if(!k)return s;let o=(0,j.cloneElement)(d,{__css:_});return(0,n.jsxs)(j.Fragment,{children:[s,i?null:o]},a)})},[d,_,k,N,h,u]),C=(0,x.cx)("chakra-stack",m);return(0,n.jsx)(l.m.div,{ref:r,display:"flex",alignItems:i,justifyContent:s,flexDirection:b.flexDirection,flexWrap:c,className:C,__css:k?{}:{[g]:b[g]},...v,children:S})});v.displayName="Stack";var y=(0,s.G)((e,r)=>(0,n.jsx)(v,{align:"center",...e,direction:"row",ref:r}));y.displayName="HStack";var b=t(888),_=(0,s.G)(function(e,r){let t=(0,m.mq)("Text",e),{className:a,align:i,decoration:s,casing:o,...c}=(0,d.Lr)(e),u=(0,b.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,n.jsx)(l.m.p,{ref:r,className:(0,x.cx)("chakra-text",e.className),...u,...c,__css:t})});_.displayName="Text";var k=(0,s.G)(function(e,r){let{direction:t,align:a,justify:i,wrap:s,basis:o,grow:c,shrink:u,...d}=e;return(0,n.jsx)(l.m.div,{ref:r,__css:{display:"flex",flexDirection:t,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:o,flexGrow:c,flexShrink:u},...d})});k.displayName="Flex";var N=(0,s.G)((e,r)=>(0,n.jsx)(v,{align:"center",...e,direction:"column",ref:r}));N.displayName="VStack";var S=(0,s.G)(function(e,r){let{htmlWidth:t,htmlHeight:a,alt:i,...l}=e;return(0,n.jsx)("img",{width:t,height:a,ref:r,alt:i,...l})});S.displayName="NativeImage";var C=t(6245),w=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,E=(0,s.G)(function(e,r){let{fallbackSrc:t,fallback:a,src:i,srcSet:s,align:o,fit:c,loading:u,ignoreFallback:d,crossOrigin:m,fallbackStrategy:x="beforeLoadOrError",referrerPolicy:h,...f}=e,p=null!=u||d||!(void 0!==t||void 0!==a),g=function(e){let{loading:r,src:t,srcSet:n,onLoad:a,onError:i,crossOrigin:l,sizes:s,ignoreFallback:o}=e,[c,u]=(0,j.useState)("pending");(0,j.useEffect)(()=>{u(t?"loading":"pending")},[t]);let d=(0,j.useRef)(),m=(0,j.useCallback)(()=>{if(!t)return;x();let e=new Image;e.src=t,l&&(e.crossOrigin=l),n&&(e.srcset=n),s&&(e.sizes=s),r&&(e.loading=r),e.onload=e=>{x(),u("loaded"),null==a||a(e)},e.onerror=e=>{x(),u("failed"),null==i||i(e)},d.current=e},[t,l,n,s,a,i,r]),x=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,C.G)(()=>{if(!o)return"loading"===c&&m(),()=>{x()}},[c,m,o]),o?"loaded":c}({...e,ignoreFallback:p}),v=w(g,x),y={ref:r,objectFit:c,objectPosition:o,...p?f:function(e,r=[]){let t=Object.assign({},e);for(let e of r)e in t&&delete t[e];return t}(f,["onError","onLoad"])};return v?a||(0,n.jsx)(l.m.img,{as:S,className:"chakra-image__placeholder",src:t,...y}):(0,n.jsx)(l.m.img,{as:S,src:i,srcSet:s,crossOrigin:m,loading:u,referrerPolicy:h,className:"chakra-image",...y})});E.displayName="Image";var D=t(3750),I=t(5227),[F,O]=(0,I.k)({strict:!1,name:"ButtonGroupContext"});function B(e){let{children:r,className:t,...a}=e,i=(0,j.isValidElement)(r)?(0,j.cloneElement)(r,{"aria-hidden":!0,focusable:!1}):r,s=(0,x.cx)("chakra-button__icon",t);return(0,n.jsx)(l.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:i})}B.displayName="ButtonIcon";var G=t(295);function P(e){let{label:r,placement:t,spacing:a="0.5rem",children:i=(0,n.jsx)(G.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:o,...c}=e,u=(0,x.cx)("chakra-button__spinner",s),d="start"===t?"marginEnd":"marginStart",m=(0,j.useMemo)(()=>({display:"flex",alignItems:"center",position:r?"relative":"absolute",[d]:r?a:0,fontSize:"1em",lineHeight:"normal",...o}),[o,r,d,a]);return(0,n.jsx)(l.m.div,{className:u,...c,__css:m,children:i})}function z(...e){return r=>{e.forEach(e=>{!function(e,r){if(null!=e){if("function"==typeof e){e(r);return}try{e.current=r}catch(t){throw Error(`Cannot assign value '${r}' to ref '${e}'`)}}}(e,r)})}}P.displayName="ButtonSpinner";var T=(0,s.G)((e,r)=>{let t=O(),a=(0,m.mq)("Button",{...t,...e}),{isDisabled:i=null==t?void 0:t.isDisabled,isLoading:s,isActive:o,children:c,leftIcon:u,rightIcon:h,loadingText:f,iconSpacing:p="0.5rem",type:g,spinner:v,spinnerPlacement:y="start",className:b,as:_,...k}=(0,d.Lr)(e),N=(0,j.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:e}}},[a,t]),{ref:S,type:C}=function(e){let[r,t]=(0,j.useState)(!e),n=(0,j.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]);return{ref:n,type:r?"button":void 0}}(_),w={rightIcon:h,leftIcon:u,iconSpacing:p,children:c};return(0,n.jsxs)(l.m.button,{ref:function(...e){return(0,j.useMemo)(()=>z(...e),e)}(r,S),as:_,type:null!=g?g:C,"data-active":(0,x.PB)(o),"data-loading":(0,x.PB)(s),__css:N,className:(0,x.cx)("chakra-button",b),...k,disabled:i||s,children:[s&&"start"===y&&(0,n.jsx)(P,{className:"chakra-button__spinner--start",label:f,placement:"start",spacing:p,children:v}),s?f||(0,n.jsx)(l.m.span,{opacity:0,children:(0,n.jsx)(q,{...w})}):(0,n.jsx)(q,{...w}),s&&"end"===y&&(0,n.jsx)(P,{className:"chakra-button__spinner--end",label:f,placement:"end",spacing:p,children:v})]})});function q(e){let{leftIcon:r,rightIcon:t,children:a,iconSpacing:i}=e;return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)(B,{marginEnd:i,children:r}),a,t&&(0,n.jsx)(B,{marginStart:i,children:t})]})}T.displayName="Button";let L=()=>{let e=["\uD83D\uDE23","\uD83D\uDE41","\uD83D\uDE42","\uD83D\uDE04"],[r,t]=(0,j.useState)("");return(0,n.jsxs)(N,{pr:5,children:[(0,n.jsx)(_,{fontSize:"lg",as:"b",children:"How was your day? \uD83D\uDE04"}),(0,n.jsx)(_,{children:r}),(0,n.jsx)(y,{children:e.map(a=>(0,n.jsx)(T,{onClick:()=>t(a),className:r==a?"active":void 0,children:a},e.indexOf(a)))})]})},M=()=>{let[e,r]=(0,j.useState)(""),[t,a]=(0,j.useState)(""),[i,l]=(0,j.useState)(!1),s=async e=>{l(!0);let t=await fetch("https://official-joke-api.appspot.com/jokes/".concat(e)).then(e=>e.json());if("programming/random"==e){r(t[0].setup),a(t[0].punchline),l(!1);return}r(t.setup),a(t.punchline),l(!1)};return(0,n.jsxs)(N,{pl:5,pr:5,children:[(0,n.jsx)(_,{fontSize:"lg",as:"b",children:"Select your joke type \uD83D\uDE02"}),(0,n.jsxs)(y,{children:[(0,n.jsx)(T,{onClick:()=>{s("random")},children:"Random"}),(0,n.jsx)(T,{onClick:()=>{s("programming/random")},children:"Programming"})]}),i?(0,n.jsx)(G.$,{}):(0,n.jsx)(o,{pt:2,children:(0,n.jsx)(k,{justify:"center",children:(0,n.jsxs)(N,{children:[(0,n.jsx)(_,{fontSize:"sm",as:"b",children:e}),(0,n.jsx)(_,{fontSize:"sm",children:t})]})})})]})};var R=t(277),W=t(3237),H=t(1204),[A,$]=(0,I.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[Y,Q]=(0,I.k)({strict:!1,name:"FormControlContext"}),V=(0,s.G)(function(e,r){let t=(0,m.jC)("Form",e),a=(0,d.Lr)(e),{getRootProps:i,htmlProps:s,...o}=function(e){let{id:r,isRequired:t,isInvalid:n,isDisabled:a,isReadOnly:i,...l}=e,s=(0,j.useId)(),o=r||`field-${s}`,c=`${o}-label`,u=`${o}-feedback`,d=`${o}-helptext`,[m,h]=(0,j.useState)(!1),[f,p]=(0,j.useState)(!1),[g,v]=(0,j.useState)(!1),y=(0,j.useCallback)((e={},r=null)=>({id:d,...e,ref:z(r,e=>{e&&p(!0)})}),[d]),b=(0,j.useCallback)((e={},r=null)=>{var t,l;return{...e,ref:r,"data-focus":(0,x.PB)(g),"data-disabled":(0,x.PB)(a),"data-invalid":(0,x.PB)(n),"data-readonly":(0,x.PB)(i),id:null!=(t=e.id)?t:c,htmlFor:null!=(l=e.htmlFor)?l:o}},[o,a,g,n,i,c]),_=(0,j.useCallback)((e={},r=null)=>({id:u,...e,ref:z(r,e=>{e&&h(!0)}),"aria-live":"polite"}),[u]),k=(0,j.useCallback)((e={},r=null)=>({...e,...l,ref:r,role:"group"}),[l]),N=(0,j.useCallback)((e={},r=null)=>({...e,ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!n,isReadOnly:!!i,isDisabled:!!a,isFocused:!!g,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:m,setHasFeedbackText:h,hasHelpText:f,setHasHelpText:p,id:o,labelId:c,feedbackId:u,helpTextId:d,htmlProps:l,getHelpTextProps:y,getErrorMessageProps:_,getRootProps:k,getLabelProps:b,getRequiredIndicatorProps:N}}(a),c=(0,x.cx)("chakra-form-control",e.className);return(0,n.jsx)(Y,{value:o,children:(0,n.jsx)(A,{value:t,children:(0,n.jsx)(l.m.div,{...i({},r),className:c,__css:t.container})})})});V.displayName="FormControl",(0,s.G)(function(e,r){let t=Q(),a=$(),i=(0,x.cx)("chakra-form__helper-text",e.className);return(0,n.jsx)(l.m.div,{...null==t?void 0:t.getHelpTextProps(e,r),__css:a.helperText,className:i})}).displayName="FormHelperText";var X=(0,s.G)(function(e,r){var t;let a=(0,m.mq)("FormLabel",e),i=(0,d.Lr)(e),{className:s,children:o,requiredIndicator:c=(0,n.jsx)(Z,{}),optionalIndicator:u=null,...h}=i,f=Q(),p=null!=(t=null==f?void 0:f.getLabelProps(h,r))?t:{ref:r,...h};return(0,n.jsxs)(l.m.label,{...p,className:(0,x.cx)("chakra-form__label",i.className),__css:{display:"block",textAlign:"start",...a},children:[o,(null==f?void 0:f.isRequired)?c:u]})});X.displayName="FormLabel";var Z=(0,s.G)(function(e,r){let t=Q(),a=$();if(!(null==t?void 0:t.isRequired))return null;let i=(0,x.cx)("chakra-form__required-indicator",e.className);return(0,n.jsx)(l.m.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,r),__css:a.requiredIndicator,className:i})});function J(e){let{isDisabled:r,isInvalid:t,isReadOnly:n,isRequired:a,...i}=function(e){var r,t,n;let a=Q(),{id:i,disabled:l,readOnly:s,required:o,isRequired:c,isInvalid:u,isReadOnly:d,isDisabled:m,onFocus:h,onBlur:f,...p}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&g.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&g.push(a.helpTextId),{...p,"aria-describedby":g.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(r=null!=l?l:m)?r:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=s?s:d)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(n=null!=o?o:c)?n:null==a?void 0:a.isRequired,isInvalid:null!=u?u:null==a?void 0:a.isInvalid,onFocus:(0,x.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,x.v0)(null==a?void 0:a.onBlur,f)}}(e);return{...i,disabled:r,readOnly:n,required:a,"aria-invalid":(0,x.Qm)(t),"aria-required":(0,x.Qm)(a),"aria-readonly":(0,x.Qm)(n)}}Z.displayName="RequiredIndicator";var K=(0,s.G)(function(e,r){let{htmlSize:t,...a}=e,i=(0,m.jC)("Input",a),s=(0,d.Lr)(a),o=J(s),c=(0,x.cx)("chakra-input",e.className);return(0,n.jsx)(l.m.input,{size:t,...o,__css:i.field,ref:r,className:c})});K.displayName="Input",K.id="Input";var U=t(6877),[ee,er]=(0,I.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),et=(0,s.G)((e,r)=>{let t=(0,m.jC)("FormError",e),a=(0,d.Lr)(e),i=Q();return(null==i?void 0:i.isInvalid)?(0,n.jsx)(ee,{value:t,children:(0,n.jsx)(l.m.div,{...null==i?void 0:i.getErrorMessageProps(a,r),className:(0,x.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});et.displayName="FormErrorMessage",(0,s.G)((e,r)=>{let t=er(),a=Q();if(!(null==a?void 0:a.isInvalid))return null;let i=(0,x.cx)("chakra-form__error-icon",e.className);return(0,n.jsx)(U.J,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:i,children:(0,n.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon";var en=["h","minH","height","minHeight"],ea=(0,s.G)((e,r)=>{let t=(0,m.mq)("Textarea",e),{className:a,rows:i,...s}=(0,d.Lr)(e),o=J(s),c=i?function(e,r=[]){let t=Object.assign({},e);for(let e of r)e in t&&delete t[e];return t}(t,en):t;return(0,n.jsx)(l.m.textarea,{ref:r,rows:i,...o,className:(0,x.cx)("chakra-textarea",a),__css:c})});ea.displayName="Textarea";let ei=()=>{let[e,r]=(0,j.useState)(""),[t,a]=(0,j.useState)(""),[i,l]=(0,j.useState)(!0),[s,o]=(0,j.useState)(!1),[c,u]=(0,j.useState)(!1),d=function(e){let{theme:r}=(0,H.uP)(),t=(0,R.OX)();return(0,j.useMemo)(()=>(0,W.Cj)(r.direction,{...t,...e}),[e,r.direction,t])}(),m=()=>{d({title:"Form Submitted.",description:"We've submit the message to Hui Ying for you.",status:"success",duration:9e3,isClosable:!0}),r(""),a("")};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(N,{pl:5,children:[(0,n.jsx)(_,{fontSize:"lg",as:"b",children:"Post me a message! \uD83D\uDE04"}),(0,n.jsxs)(V,{isInvalid:!i&&!s,children:[(0,n.jsx)(X,{children:"Name"}),(0,n.jsx)(K,{type:"text",value:e,"data-testid":"name",onChange:e=>{l(!1),r(e.target.value),""===e.target.value?o(!1):o(!0)}}),(0,n.jsx)(et,{"data-testid":"name-error",children:"Name is required."})]}),(0,n.jsxs)(V,{isInvalid:!i&&!c,children:[(0,n.jsx)(X,{children:"Message"}),(0,n.jsx)(ea,{value:t,"data-testid":"message",onChange:e=>{l(!1),a(e.target.value),""===e.target.value?u(!1):u(!0)}}),(0,n.jsx)(et,{"data-testid":"msg-error",children:"Message cannot be empty."})]}),(0,n.jsx)(T,{mt:4,colorScheme:"pink",type:"submit",isDisabled:!(s&&c),onClick:m,role:"button",children:"Submit"})]})})},el=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Phang Hui Ying"}),(0,n.jsx)("meta",{name:"description",content:"My blog"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(o,{as:"section",pb:{base:"12",md:"24"},children:[(0,n.jsx)(o,{as:"nav",bg:"bg-surface",boxShadow:(0,u.ff)("sm","sm-dark"),children:(0,n.jsx)(h,{py:{base:"4",lg:"5"},children:(0,n.jsx)(y,{spacing:"10",justify:"space-between",children:(0,n.jsx)(_,{as:"kbd",children:"Hui Ying"})})})}),(0,n.jsx)(o,{p:10,children:(0,n.jsx)(k,{justify:"center",children:(0,n.jsxs)(N,{children:[(0,n.jsx)(E,{borderRadius:"full",boxSize:"200px",src:"/huiying.jpg",alt:"Hui Ying"}),(0,n.jsx)(_,{pt:5,as:"b",color:"pink.500",fontSize:"2xl",children:"Phang Hui Ying"}),(0,n.jsx)(_,{fontSize:"md",as:"b",children:"Welcome to my blog, check out my socials below! \uD83D\uDE1B"}),(0,n.jsxs)(y,{pt:5,spacing:5,children:[(0,n.jsx)("a",{href:"https://www.linkedin.com/in/phang-hui-ying-ba3567a6/",target:"_blank",role:"linkedin",children:(0,n.jsx)(D.NQh,{size:"1.25em",className:"icon"})}),(0,n.jsx)("a",{href:"https://github.com/phanghuiying",target:"_blank",role:"github",children:(0,n.jsx)(D.rFR,{size:"1.25em",className:"icon"})})]}),(0,n.jsxs)(y,{pt:8,children:[(0,n.jsx)(L,{}),(0,n.jsx)(M,{}),(0,n.jsx)(ei,{})]})]})})})]})]});var es=el},9008:function(e,r,t){e.exports=t(3121)},8357:function(e,r,t){"use strict";t.d(r,{w_:function(){return o}});var n=t(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>r.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function o(e){return function(r){return n.createElement(c,l({attr:l({},e.attr)},r),function e(r){return r&&r.map(function(r,t){return n.createElement(r.tag,l({key:t},r.attr),e(r.child))})}(e.child))}}function c(e){var r=function(r){var t,a=e.attr,i=e.size,o=e.title,c=s(e,["attr","size","title"]),u=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,c,{className:t,style:l(l({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return r(e)}):r(a)}}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);