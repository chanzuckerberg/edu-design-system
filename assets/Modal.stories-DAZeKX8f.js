import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,n as a,r as o}from"./iframe-84brN7F6.js";import{n as s,t as c}from"./clsx-CTwy9ux-.js";import{C as l,D as u,S as d,_ as f,b as p,c as m,g as h,i as ee,n as g,o as _,p as v,r as te,u as y,x as ne}from"./use-sync-refs-CYKzq9CM.js";import{_ as re,g as b,h as ie,n as ae,o as x,p as oe,t as se,u as S,v as ce,x as le,y as ue}from"./keyboard-C519l7JJ.js";import{n as de,r as C,t as fe}from"./description-BbW3V1_4.js";import{n as pe,r as me,t as he}from"./hidden-aX_zCDEo.js";import{n as ge,t as _e}from"./close-provider-DkYk2nqO.js";import{A as ve,B as ye,F as be,H as xe,I as Se,L as w,M as T,P as Ce,R as we,S as Te,a as Ee,c as De,f as Oe,h as ke,i as Ae,j as E,k as D,l as je,m as Me,n as Ne,o as Pe,p as Fe,r as Ie,s as Le,t as Re,u as ze,z as Be}from"./portal-B3uDnaEk.js";import{n as Ve,t as He}from"./use-inert-others-B2IhmKua.js";import{n as Ue,t as We}from"./use-event-listener-DagjGiuh.js";import{a as Ge,i as Ke,n as qe,r as Je}from"./open-closed-D2k00yGF.js";import{i as Ye,n as Xe,r as Ze,t as Qe}from"./active-element-history-6wGFb-ef.js";import{n as $e,t as et}from"./use-server-handoff-complete-CC28A4jL.js";import{a as tt,i as nt,n as rt,o as it,r as at,s as ot,t as st}from"./use-tab-direction-DEahuWGM.js";import{a as ct,i as lt,n as ut,r as dt,t as ft}from"./transition-B3Lfbtyn.js";import{i as pt,r as mt,t as ht}from"./logging-DIGRaM8w.js";import{n as gt,t as O}from"./Heading-CI3mrpQ7.js";import{n as _t,r as vt,t as yt}from"./IconProvider-CLE0eA_m.js";import{n as k,r as bt}from"./Text-DJbcQrwW.js";import{n as xt,t as St}from"./semanticIconOverrides-8zHpyBoo.js";import{n as Ct,t as A}from"./Button-Byx35aD3.js";import{n as wt,t as j}from"./ButtonGroup-yUc3ozKr.js";import{n as Tt,t as Et}from"./ScrollWrapper-C3CtR58c.js";function Dt(e,t=typeof document<`u`?document.defaultView:null,n){let r=Se(e,`escape`);We(t,`keydown`,e=>{r&&(e.defaultPrevented||e.key===ae.Escape&&n(e))})}function Ot(){return(Ot=t((()=>{se(),Ue(),w()})))()}function kt(){let[e]=(0,At.useState)(()=>typeof window<`u`&&typeof window.matchMedia==`function`?window.matchMedia(`(pointer: coarse)`):null),[t,n]=(0,At.useState)(e?.matches??!1);return ne(()=>{if(!e)return;function t(e){n(e.matches)}return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[e]),t}var At;function jt(){return(jt=t((()=>{At=n(),p()})))()}function Mt(e){if(!e)return new Set;if(typeof e==`function`)return new Set(e());let t=new Set;for(let n of e.current)oe(n.current)&&t.add(n.current);return t}function Nt(e,t){let n=(0,M.useRef)(null),r=te(n,t),{initialFocus:i,initialFocusFallback:a,containers:o,features:s=15,...c}=e;$e()||(s=0);let u=Fe(n.current);Ft(s,{ownerDocument:u});let d=It(s,{ownerDocument:u,container:n,initialFocus:i,initialFocusFallback:a});Lt(s,{ownerDocument:u,container:n,containers:o,previousActiveElement:d});let p=at(),m=f(e=>{if(!S(n.current))return;let t=n.current;(e=>e())(()=>{v(p.current,{[st.Forwards]:()=>{E(t,D.First,{skipElements:[e.relatedTarget,a]})},[st.Backwards]:()=>{E(t,D.Last,{skipElements:[e.relatedTarget,a]})}})})}),h=Se(!!(s&2),`focus-trap#tab-lock`),ee=l(),g=(0,M.useRef)(!1),y={ref:r,onKeyDown(e){e.key==`Tab`&&(g.current=!0,ee.requestAnimationFrame(()=>{g.current=!1}))},onBlur(e){if(!(s&4))return;let t=Mt(o);S(n.current)&&t.add(n.current);let r=e.relatedTarget;x(r)&&r.dataset.headlessuiFocusGuard!==`true`&&(Rt(t,r)||(g.current?E(n.current,v(p.current,{[st.Forwards]:()=>D.Next,[st.Backwards]:()=>D.Previous})|D.WrapAround,{relativeTo:e.target}):x(e.target)&&T(e.target)))}},ne=_();return M.createElement(M.Fragment,null,h&&M.createElement(he,{as:`button`,type:`button`,"data-headlessui-focus-guard":!0,onFocus:m,features:me.Focusable}),ne({ourProps:y,theirProps:c,defaultTag:zt,name:`FocusTrap`}),h&&M.createElement(he,{as:`button`,type:`button`,"data-headlessui-focus-guard":!0,onFocus:m,features:me.Focusable}))}function Pt(e=!0){let t=(0,M.useRef)(Xe.slice());return Ye(([e],[n])=>{n===!0&&e===!1&&u(()=>{t.current.splice(0)}),n===!1&&e===!0&&(t.current=Xe.slice())},[e,Xe,t]),f(()=>t.current.find(e=>e!=null&&e.isConnected)??null)}function Ft(e,{ownerDocument:t}){let n=!!(e&8),r=Pt(n);Ye(()=>{n||ue(t?.body)&&T(r())},[n]),Le(()=>{n&&T(r())})}function It(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:i}){let a=(0,M.useRef)(null),o=Se(!!(e&1),`focus-trap#initial-focus`),s=lt();return Ye(()=>{if(e===0)return;if(!o){i!=null&&i.current&&T(i.current);return}let c=n.current;c&&u(()=>{if(!s.current)return;let n=t?.activeElement;if(r!=null&&r.current){if(r?.current===n){a.current=n;return}}else if(c.contains(n)){a.current=n;return}if(r!=null&&r.current)T(r.current);else{if(e&16){if(E(c,D.First|D.AutoFocus)!==Te.Error)return}else if(E(c,D.First)!==Te.Error)return;if(i!=null&&i.current&&(T(i.current),t?.activeElement===i.current))return;console.warn(`There are no focusable elements inside the <FocusTrap />`)}a.current=t?.activeElement})},[i,o,e]),a}function Lt(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:i}){let a=lt(),o=!!(e&4);We(t?.defaultView,`focus`,e=>{if(!o||!a.current)return;let t=Mt(r);S(n.current)&&t.add(n.current);let s=i.current;if(!s)return;let c=e.target;S(c)?Rt(t,c)?(i.current=c,T(c)):(e.preventDefault(),e.stopPropagation(),T(s)):T(i.current)},!0)}function Rt(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var M,zt,N,Bt,Vt;function Ht(){return(Ht=t((()=>{M=e(n(),1),d(),h(),Ue(),ct(),w(),De(),Oe(),et(),g(),rt(),Ze(),pe(),Qe(),ve(),le(),y(),zt=`div`,N=(e=>(e[e.None=0]=`None`,e[e.InitialFocus=1]=`InitialFocus`,e[e.TabLock=2]=`TabLock`,e[e.FocusLock=4]=`FocusLock`,e[e.RestoreFocus=8]=`RestoreFocus`,e[e.AutoFocus=16]=`AutoFocus`,e))(N||{}),Bt=m(Nt),Vt=Object.assign(Bt,{features:N})})))()}function Ut(e){let t=(0,P.useContext)(Qt);if(t===null){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ut),t}return t}function Wt(e,t){return v(t.type,Zt,e,t)}function Gt(e,t){let{transition:n=!1,open:r,...i}=e,a=Ge(),o=e.hasOwnProperty(`open`)||a!==null,s=e.hasOwnProperty(`onClose`);if(!o&&!s)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!o)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!s)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!a&&typeof e.open!=`boolean`)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!=`function`)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!i.static?P.createElement(it,null,P.createElement(ft,{show:r,transition:n,unmount:i.unmount},P.createElement($t,{ref:t,...i}))):P.createElement(it,null,P.createElement($t,{ref:t,open:r,...i}))}function Kt(e,t){let n=(0,ie.useId)(),{id:r=`headlessui-dialog-panel-${n}`,transition:i=!1,...a}=e,[{dialogState:o,unmount:s},c]=Ut(`Dialog.Panel`),l=te(t,c.panelRef),u=ce({open:o===0}),d={ref:l,id:r,onClick:f(e=>{e.stopPropagation()})},p=i?ut:P.Fragment,m=i?{unmount:s}:{},h=_();return P.createElement(p,{...m},h({ourProps:d,theirProps:a,slot:u,defaultTag:nn,name:`Dialog.Panel`}))}function qt(e,t){let{transition:n=!1,...r}=e,[{dialogState:i,unmount:a}]=Ut(`Dialog.Backdrop`),o=ce({open:i===0}),s={ref:t,"aria-hidden":!0},c=n?ut:P.Fragment,l=n?{unmount:a}:{},u=_();return P.createElement(c,{...l},u({ourProps:s,theirProps:r,slot:o,defaultTag:rn,name:`Dialog.Backdrop`}))}function Jt(e,t){let n=(0,ie.useId)(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:a,setTitleId:o}]=Ut(`Dialog.Title`),s=te(t);(0,P.useEffect)(()=>(o(r),()=>o(null)),[r,o]);let c=ce({open:a===0}),l={ref:s,id:r};return _()({ourProps:l,theirProps:i,slot:c,defaultTag:an,name:`Dialog.Title`})}var P,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln;function un(){return(un=t((()=>{P=e(n(),1),Ot(),h(),b(),He(),jt(),p(),Ce(),Me(),Oe(),tt(),ze(),et(),re(),g(),ge(),Je(),Ee(),ye(),Be(),y(),C(),Ht(),Ne(),dt(),Yt=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(Yt||{}),Xt=(e=>(e[e.SetTitleId=0]=`SetTitleId`,e))(Xt||{}),Zt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Qt=(0,P.createContext)(null),Qt.displayName=`DialogContext`,$t=m(function(e,t){let n=(0,ie.useId)(),{id:r=`headlessui-dialog-${n}`,open:i,onClose:a,initialFocus:o,role:s=`dialog`,autoFocus:c=!0,__demoMode:l=!1,unmount:u=!1,...d}=e,p=(0,P.useRef)(!1);s=function(){return s===`dialog`||s===`alertdialog`?s:(p.current||(p.current=!0,console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),`dialog`)}();let m=Ge();i===void 0&&m!==null&&(i=(m&qe.Open)===qe.Open);let h=(0,P.useRef)(null),ee=te(h,t),g=Fe(h.current),v=+!i,[y,re]=(0,P.useReducer)(Wt,{titleId:null,descriptionId:null,panelRef:(0,P.createRef)()}),b=f(()=>a(!1)),ae=f(e=>re({type:0,id:e})),x=$e()?v===0:!1,[oe,se]=Ae(),S={get current(){return y.panelRef.current??h.current}},le=ot(),{resolveContainers:ue}=nt({mainTreeNode:le,portals:oe,defaultContainers:[S]}),de=m!==null&&(m&qe.Closing)===qe.Closing;Ve(l||de?!1:x,{allowed:f(()=>[h.current?.closest(`[data-headlessui-portal]`)??null]),disallowed:f(()=>[le?.closest(`body > *:not(#headlessui-portal-root)`)??null])});let C=xe.get(null);ne(()=>{if(x)return C.actions.push(r),()=>C.actions.pop(r)},[C,r,x]);let pe=we(C,(0,P.useCallback)(e=>C.selectors.isTop(e,r),[C,r]));ke(pe,ue,e=>{e.preventDefault(),b()}),Dt(pe,g?.defaultView,e=>{e.preventDefault(),e.stopPropagation(),document.activeElement&&`blur`in document.activeElement&&typeof document.activeElement.blur==`function`&&document.activeElement.blur(),b()}),je(l||de?!1:x,g,ue),be(x,h,b);let[me,he]=fe(),ge=(0,P.useMemo)(()=>[{dialogState:v,close:b,setTitleId:ae,unmount:u},y],[v,b,ae,u,y]),ve=ce({open:v===0}),ye={ref:ee,id:r,role:s,tabIndex:-1,"aria-modal":l?void 0:v===0||void 0,"aria-labelledby":y.titleId,"aria-describedby":me,unmount:u},Se=!kt(),w=N.None;x&&!l&&(w|=N.RestoreFocus,w|=N.TabLock,c&&(w|=N.AutoFocus),Se&&(w|=N.InitialFocus));let T=_();return P.createElement(Ke,null,P.createElement(Pe,{force:!0},P.createElement(Ie,null,P.createElement(Qt.Provider,{value:ge},P.createElement(Re,{target:h},P.createElement(Pe,{force:!1},P.createElement(he,{slot:ve},P.createElement(se,null,P.createElement(Vt,{initialFocus:o,initialFocusFallback:h,containers:ue,features:w},P.createElement(_e,{value:b},T({ourProps:ye,theirProps:d,slot:ve,defaultTag:en,features:tn,visible:v===0,name:`Dialog`})))))))))))}),en=`div`,tn=ee.RenderStrategy|ee.Static,nn=`div`,rn=`div`,an=`h2`,on=m(Gt),sn=m(Kt),m(qt),cn=m(Jt),ln=Object.assign(on,{Panel:sn,Title:cn,Description:de})})))()}var dn,fn,pn,mn,F;function hn(){return(hn=t((()=>{dn=`_modal_1rxac_10`,fn=`_modal__overlay_1rxac_11`,pn=`_modal__panel_1rxac_46`,mn=`_modal__content_1rxac_74`,F={modal:dn,modal__overlay:fn,"fade-in":`_fade-in_1rxac_1`,modal__panel:pn,"rotate-panel":`_rotate-panel_1rxac_1`,modal__content:mn,"modal__content--is-open":`_modal__content--is-open_1rxac_107`,"modal-header":`_modal-header_1rxac_114`,"modal-title":`_modal-title_1rxac_120`,"modal-sub-title":`_modal-sub-title_1rxac_124`,"modal-body":`_modal-body_1rxac_131`,"modal-footer":`_modal-footer_1rxac_150`,"modal__transition--enter":`_modal__transition--enter_1rxac_162`,"modal__transition--enterFrom":`_modal__transition--enterFrom_1rxac_170`,"modal__transition--enterTo":`_modal__transition--enterTo_1rxac_174`,"modal__transition--leave":`_modal__transition--leave_1rxac_178`,"modal__transition--leaveFrom":`_modal__transition--leaveFrom_1rxac_186`,"modal__transition--leaveTo":`_modal__transition--leaveTo_1rxac_190`,"modal__content-transition--enter":`_modal__content-transition--enter_1rxac_194`,"modal__content-transition--enterFrom":`_modal__content-transition--enterFrom_1rxac_202`,"modal__content-transition--enterTo":`_modal__content-transition--enterTo_1rxac_206`,"modal__content-transition--leave":`_modal__content-transition--leave_1rxac_210`,"modal__content-transition--leaveFrom":`_modal__content-transition--leaveFrom_1rxac_218`,"modal__content-transition--leaveTo":`_modal__content-transition--leaveTo_1rxac_222`,"modal__content--full":`_modal__content--full_1rxac_226`,"modal__content--lg":`_modal__content--lg_1rxac_240`,"modal__content--sm":`_modal__content--sm_1rxac_285`,"modal__close-button":`_modal__close-button_1rxac_323`}})))()}function gn(e){return I.Children.toArray(e).some(e=>{if(typeof e!=`object`||!(`props`in e))return!1;let{children:t}=e.props;return e.type&&typeof e.type!=`string`&&(e.type?.name===`ModalTitle`||e.type?.name===`Modal.Title`)?!0:t?gn(t):!1})}function _n(e){return I.Children.toArray(e).some(e=>I.isValidElement(e)?e.type===I.Fragment?_n(e.props.children):e.type!==Sn&&e.type!==bn&&e.type!==xn:!0)}var I,L,vn,yn,R,bn,xn,Sn,Cn,wn;function Tn(){return(Tn=t((()=>{un(),dt(),s(),I=e(n()),pt(),Ct(),gt(),_t(),Tt(),bt(),hn(),L=r(),vn=`600px`,yn=e=>{let{children:t,className:n,hideCloseButton:r=!1,open:i,onClose:a,size:o=`lg`,height:s,overlayEmphasis:l,...u}=e;mt(`Modal/.Content`,`height`,`It manages its own height now: the body scrolls once the content outgrows the space the header and footer leave over.`,s),mt(`Modal/.Content`,`overlayEmphasis`,`Every modal draws the low-emphasis overlay now.`,l),ht([_n(t)],`Modal only takes Modal.Header, Modal.Body, and Modal.Footer as direct children. The modal lays out and scrolls those three sections, so anything else placed alongside them breaks that layout. Move the content into one of the sections, usually Modal.Body.`,`error`);let d=c(F.modal__content,o&&F[`modal__content--${o}`],i&&F[`modal__content--is-open`],n),f=vt(`close`),p=I.useRef(null),m=u.style?.maxHeight;return I.useEffect(()=>{let e=p.current;if(!e||o!==`lg`||m!==void 0)return;let t=Array.from(e.querySelectorAll(`:scope > .${F[`modal-header`]}, :scope > .${F[`modal-footer`]}`)),n=e.querySelector(`:scope > .${F[`modal-body`]} > * > *`),r=``,i=t=>{r=t,e.style.maxHeight=t},a=e=>{let t=Array.from(e.children).filter(e=>e.getClientRects().length>0),n=t[0],r=t[t.length-1];if(!n){let t=document.createRange();return t.selectNodeContents(e),t.getBoundingClientRect().height}return r.getBoundingClientRect().bottom-n.getBoundingClientRect().top+parseFloat(getComputedStyle(n).marginTop)+parseFloat(getComputedStyle(r).marginBottom)},s=()=>{if(!window.matchMedia(`(min-width: ${vn})`).matches){i(``);return}let r=n?e.offsetHeight-n.clientHeight:t.reduce((e,t)=>{let{marginTop:n,marginBottom:r}=getComputedStyle(t);return e+t.offsetHeight+parseFloat(n)+parseFloat(r)},0)+e.offsetHeight-e.clientHeight,o=n?a(n):0,s=e.querySelector(`:scope > .${F[`modal__close-button`]}`),c=s?s.offsetTop+s.offsetHeight+e.offsetHeight-e.clientHeight:0,l=Math.max(r+o+4,c),u=window.innerHeight-parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--eds-spacing-size-12`));i(l<u?`${l}px`:``)};s();let c=typeof ResizeObserver>`u`?void 0:new ResizeObserver(s),l=()=>[e,...t,...n?[n,...Array.from(n.children)]:[]].forEach(e=>c?.observe(e));l();let u=new MutationObserver(()=>{c?.disconnect(),l(),s()});return n&&u.observe(n,{attributeFilter:[`class`,`style`],characterData:!0,childList:!0,subtree:!0}),window.addEventListener(`resize`,s),()=>{c?.disconnect(),u.disconnect(),window.removeEventListener(`resize`,s),e.style.maxHeight===r&&(e.style.maxHeight=``)}},[t,m,o]),(0,L.jsxs)(`div`,{className:d,ref:p,...u,children:[!r&&(0,L.jsx)(A,{"aria-label":`close`,className:F[`modal__close-button`],context:`default`,icon:f,iconLayout:`icon-only`,onClick:a,rank:`tertiary`,variant:`neutral`}),t]})},R=e=>{let{"aria-label":t,initialFocus:n,modalContainerClassName:r,onClose:i,open:a,...o}=e;ht([!gn(o.children)&&!t],`You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.`,`error`);let s=c(F.modal,r);return(0,L.jsx)(ft,{as:I.Fragment,enter:F[`modal__transition--enter`],enterFrom:F[`modal__transition--enterFrom`],enterTo:F[`modal__transition--enterTo`],leave:F[`modal__transition--leave`],leaveFrom:F[`modal__transition--leaveFrom`],leaveTo:F[`modal__transition--leaveTo`],show:a,children:(0,L.jsxs)(ln,{"aria-label":t,className:s,initialFocus:n,onClose:i,children:[(0,L.jsx)(`div`,{className:F.modal__overlay}),(0,L.jsx)(sn,{className:F.modal__panel,children:(0,L.jsx)(yn,{onClose:i,open:a,...o})})]})})},bn=e=>{let{children:t,className:n,height:r,...i}=e;return mt(`Modal.Body`,`height`,`The body scrolls its own content, at every modal size.`,r),(0,L.jsx)(`div`,{className:c(F[`modal-body`],n),...i,children:(0,L.jsx)(Et,{shadowType:`contain`,children:t})})},xn=({children:e,className:t,...n})=>(0,L.jsx)(`div`,{className:c(F[`modal-footer`],t),...n,children:e}),Sn=({children:e,className:t,...n})=>{let r=c(F[`modal-header`],t);return(0,L.jsx)(`div`,{className:r,...n,children:e})},Cn=({children:e,className:t,preset:n=`title-lg`,...r})=>{let i=c(F[`modal-title`],t);return(0,L.jsx)(cn,{as:I.Fragment,children:(0,L.jsx)(O,{as:`h2`,className:i,preset:n,...r,children:e})})},wn=({children:e,className:t,preset:n=`body-md`,...r})=>{let i=c(F[`modal-sub-title`],t);return(0,L.jsx)(k,{as:`div`,className:i,preset:n,...r,children:e})},R.displayName=`Modal`,Cn.displayName=`Modal.Title`,wn.displayName=`Modal.SubTitle`,bn.displayName=`Modal.Body`,xn.displayName=`Modal.Footer`,Sn.displayName=`Modal.Header`,yn.displayName=`Modal.Content`,R.Header=Sn,R.Content=yn,R.Title=Cn,R.SubTitle=wn,R.Body=bn,R.Footer=xn;try{R.displayName=`Modal`,R.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Central overlay with focus trap, used for focused tasks or messages. | Form entry; settings dialogs; confirmations. |
| Confirmation | Asks the user to confirm or cancel a critical action. | Deletion prompts; submitting irreversible actions. |
| Alert | Displays an important message, usually with a single dismiss button. | Error notifications; access denied messages. |
| Full-screen | Takes up the entire viewport for complex or immersive tasks. | Onboarding; mobile workflows; media viewers. |
| Success/Feedback | Provides positive feedback after a completed action. | Success confirmation; "Thanks for submitting" messages. |

### Best Practices

* Modals are disruptive and should be used sparingly.
* Use a modal to request minimal amounts of information from a user. Don't request large forms of information inside a modal.
* Don't use a modal when a separate, designated URL is desired.
* Show one modal at a time. Don't place a modal on top of another modal. This can create usability issues.
* For important error notifications, use Inline Notification or Banner.
* For short messaging confirming successful interactions, such as "Email sent", use Inline Notification or Toast.

## Content & Accessibility

### Do's

* Use a primary title, body text, and a primary CTA. All other modal content is optional.
* Use a verb-noun question or statement for the primary title.
* Ensure people can scan the heading and CTAs and know what to do even if they skip the body text.
* Keep primary titles and subtitles to a max of 2 lines each.
* Use either a short phrase or a full sentence for subtitles.
* Keep section titles to less than 1 line; preferably a short phrase.
* Break up information with section titles for scanability.
* Try to avoid scrolling text within a modal.

### Don'ts

* Include long headings or body text. The more words, the less likely people are to read any of it.
* Include long passages of informative text in a modal. Use a short summary and then link to a help article, FAQ etc.
* Avoid applying inline stylistic modifications to the Modal.Title sub-component. Use the defaults or preset props where present.

## Resources

* https://headlessui.dev/react/dialog`,displayName:`Modal`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Optional aria-label for the modal.

If undefined, the headingText of the Modal.Header will be used.
If there is no Modal.Header, an aria-label is required.`,name:`aria-label`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Contents of the modal. Only `Modal.Header`, `Modal.Body`, and `Modal.Footer` are allowed\nas direct children; anything else logs an error.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},hideCloseButton:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Hides the close button in the top right of the modal.

**Default is \`false\`**.`,name:`hideCloseButton`,required:!1,tags:{},type:{name:`boolean`}},initialFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`A ref to an element that should receive focus when the modal first opens.

If undefined, the first focusable element (usually the close button) will be used.

\`\`\`
const inputFieldRef = useRef();

<Modal initialFocus={inputFieldRef}>
  ...
  <InputField ref={inputFieldRef} />
</Modal>
\`\`\``,name:`initialFocus`,required:!1,tags:{},type:{name:`MutableRefObject<HTMLElement | null>`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Method called when the close button is clicked. Use this to hide the modal.
This should be used to also reset the \`open\` state.

This is required even if you don't have a close button so the ESC key can close the modal.

Closing is cancellable by passing in a function that returns \`void\` or by not altering the state.

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
 ...
</Modal>
\`\`\``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the modal's content element. Includes the component's CSS Custom Properties:

- \`--modal-content__border\``,name:`style`,required:!1,tags:{},type:{name:`ModalContentCSSProperties`}},open:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Whether or not the modal is visible. Recommend using `useState` to set this\nvariable instead of a boolean literal, to avoid component control issues.",name:`open`,required:!1,tags:{see:`https://headlessui.com/react/dialog

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen}>
...
</Modal>
\`\`\``},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`The modal's footprint at each breakpoint:
- \`"sm"\` is a compact floating surface that sizes to its content, up to 480px tall
- \`"lg"\` fills the viewport at the smallest breakpoint. Above it, it sizes to its content,
  up to the viewport height less a margin
- \`"full"\` takes the whole viewport at every breakpoint

Height is managed for you at all three. The body takes whatever space the header and
footer leave over and scrolls once the content outgrows it, so the actions stay on screen
however long the content runs. The exception is a viewport under 320px tall, too short to
seat the header and footer and still leave a body worth scrolling, where the modal scrolls
as a whole instead and the footer does go off screen.

**Default is \`"lg"\`**.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "lg" | "full"`,value:[{value:`"sm"`},{value:`"lg"`},{value:`"full"`}]}},modalContainerClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for the modal container.`,name:`modalContainerClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{R.Header.displayName=`Modal.Header`,R.Header.__docgenInfo={description:`Component defines the Header section of the modal.`,displayName:`Modal.Header`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Child node(s) to place inside the Modal header.
Should include the <Modal.Title>`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{R.Content.displayName=`Modal.Content`,R.Content.__docgenInfo={description:`The actual modal, without the dark overlay behind it.

This is only exported for testing purposes; please do not import and use this directly.`,displayName:`Modal.Content`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Optional aria-label for the modal.

If undefined, the headingText of the Modal.Header will be used.
If there is no Modal.Header, an aria-label is required.`,name:`aria-label`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Additional classnames passed in for styling.`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Contents of the modal. Only `Modal.Header`, `Modal.Body`, and `Modal.Footer` are allowed\nas direct children; anything else logs an error.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},hideCloseButton:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Hides the close button in the top right of the modal.

**Default is \`false\`**.`,name:`hideCloseButton`,required:!1,tags:{},type:{name:`boolean`}},initialFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`A ref to an element that should receive focus when the modal first opens.

If undefined, the first focusable element (usually the close button) will be used.

\`\`\`
const inputFieldRef = useRef();

<Modal initialFocus={inputFieldRef}>
  ...
  <InputField ref={inputFieldRef} />
</Modal>
\`\`\``,name:`initialFocus`,required:!1,tags:{},type:{name:`MutableRefObject<HTMLElement | null>`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Method called when the close button is clicked. Use this to hide the modal.
This should be used to also reset the \`open\` state.

This is required even if you don't have a close button so the ESC key can close the modal.

Closing is cancellable by passing in a function that returns \`void\` or by not altering the state.

\`\`\`
const [isOpen, setIsOpen] = useState(true);
// ....

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
 ...
</Modal>
\`\`\``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}},style:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS properties defined for the modal's content element. Includes the component's CSS Custom Properties:

- \`--modal-content__border\``,name:`style`,required:!1,tags:{},type:{name:`ModalContentCSSProperties`}},open:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`The modal's footprint at each breakpoint:
- \`"sm"\` is a compact floating surface that sizes to its content, up to 480px tall
- \`"lg"\` fills the viewport at the smallest breakpoint. Above it, it sizes to its content,
  up to the viewport height less a margin
- \`"full"\` takes the whole viewport at every breakpoint

Height is managed for you at all three. The body takes whatever space the header and
footer leave over and scrolls once the content outgrows it, so the actions stay on screen
however long the content runs. The exception is a viewport under 320px tall, too short to
seat the header and footer and still leave a body worth scrolling, where the modal scrolls
as a whole instead and the footer does go off screen.

**Default is \`"lg"\`**.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "lg" | "full"`,value:[{value:`"sm"`},{value:`"lg"`},{value:`"full"`}]}}},tags:{}}}catch{}try{R.Title.displayName=`Modal.Title`,R.Title.__docgenInfo={description:`Component defines the Title section of the modal.`,displayName:`Modal.Title`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Heading/Heading.tsx`,name:`TypeLiteral`}],description:'Which `h1`-`h6` tag renders. Pick it from the document structure, by the level\nthe page outline calls for, not by the size you want. Each level brings its own\ndefault preset, which `preset` can override.\n\n**Default is `"h1"`**.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`HeadingElement`,value:[{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`}]}},preset:{defaultValue:{value:`body-md`},declarations:[{fileName:`edu-design-system/src/components/Heading/Heading.tsx`,name:`TypeLiteral`}],description:`Which typography treatment renders. Pick it from the design, and only when the
design asks for something other than the default for the level set by \`as\`. It
changes the treatment alone, never which tag renders.

For details, see https://chanzuckerberg.github.io/edu-design-system/?path=/story/design-tokens-tier-2-usage--typography`,name:`preset`,required:!1,tags:{},type:{name:`enum`,raw:`"headline-xl" | "headline-lg" | "headline-md" | "headline-sm" | "headline-decorative-md" | "title-xl" | "title-lg" | "title-md" | "title-sm" | "title-xs" | "body-xl" | "body-xl-bold" | ... 22 more ...`,value:[{value:`"headline-xl"`},{value:`"headline-lg"`},{value:`"headline-md"`},{value:`"headline-sm"`},{value:`"headline-decorative-md"`},{value:`"title-xl"`},{value:`"title-lg"`},{value:`"title-md"`},{value:`"title-sm"`},{value:`"title-xs"`},{value:`"body-xl"`},{value:`"body-xl-bold"`},{value:`"body-lg"`},{value:`"body-lg-bold"`},{value:`"body-md"`},{value:`"body-md-bold"`},{value:`"body-sm"`},{value:`"body-sm-bold"`},{value:`"body-xs"`},{value:`"body-xs-bold"`},{value:`"label-xl"`},{value:`"label-lg"`},{value:`"label-md"`},{value:`"label-sm"`},{value:`"overline-lg"`},{value:`"overline-md"`},{value:`"overline-sm"`},{value:`"caption-md"`},{value:`"caption-sm"`},{value:`"code-xl"`},{value:`"code-lg"`},{value:`"code-md"`},{value:`"code-sm"`},{value:`"code-xs"`}]}}},tags:{}}}catch{}try{R.SubTitle.displayName=`Modal.SubTitle`,R.SubTitle.__docgenInfo={description:``,displayName:`Modal.SubTitle`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`}],description:'Controls which component to use when rendering copy: e.g., `p` or `span`.\n\n**Default is `"p"`**.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div" | "p" | "span"`,value:[{value:`"div"`},{value:`"p"`},{value:`"span"`}]}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Contents for the modal title.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},tabIndex:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`tabIndex`,required:!1,tags:{},type:{name:`number`}},preset:{defaultValue:{value:`body-md`},declarations:[{fileName:`edu-design-system/src/components/Text/Text.tsx`,name:`TypeLiteral`}],description:`Prop to set the desired typography value used in design. Acceptable values
match those used across the design system.`,name:`preset`,required:!1,tags:{},type:{name:`enum`,raw:`"headline-xl" | "headline-lg" | "headline-md" | "headline-sm" | "headline-decorative-md" | "title-xl" | "title-lg" | "title-md" | "title-sm" | "title-xs" | "body-xl" | "body-xl-bold" | ... 22 more ...`,value:[{value:`"headline-xl"`},{value:`"headline-lg"`},{value:`"headline-md"`},{value:`"headline-sm"`},{value:`"headline-decorative-md"`},{value:`"title-xl"`},{value:`"title-lg"`},{value:`"title-md"`},{value:`"title-sm"`},{value:`"title-xs"`},{value:`"body-xl"`},{value:`"body-xl-bold"`},{value:`"body-lg"`},{value:`"body-lg-bold"`},{value:`"body-md"`},{value:`"body-md-bold"`},{value:`"body-sm"`},{value:`"body-sm-bold"`},{value:`"body-xs"`},{value:`"body-xs-bold"`},{value:`"label-xl"`},{value:`"label-lg"`},{value:`"label-md"`},{value:`"label-sm"`},{value:`"overline-lg"`},{value:`"overline-md"`},{value:`"overline-sm"`},{value:`"caption-md"`},{value:`"caption-sm"`},{value:`"code-xl"`},{value:`"code-lg"`},{value:`"code-md"`},{value:`"code-sm"`},{value:`"code-xs"`}]}}},tags:{}}}catch{}try{R.Body.displayName=`Modal.Body`,R.Body.__docgenInfo={description:`Component defines the body of the modal.

The body scrolls its content, so however long that content is, it does not push the header
and footer off the viewport. Below 320px of viewport height there is no room to scroll the
body within and the modal scrolls as a whole, which is the one case where the footer does
move off screen.

\`ScrollWrapper\` leaves the region it scrolls in the tab order, which is how a keyboard user
reaches the rest of it; this element only sizes that region, so it stays out of the tab
order itself.`,displayName:`Modal.Body`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:"Child node(s) that can be nested inside component. `Modal.Header`,\n`Modal.Body`, and `Modal.Footer` are the only permissible children of the Modal.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{R.Footer.displayName=`Modal.Footer`,R.Footer.__docgenInfo={description:`Component defines the Footer section of the modal.`,displayName:`Modal.Footer`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Modal/Modal.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`Child node(s) to place inside the Modal footer.`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Modal/Modal.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function En(e){let[t,n]=(0,Dn.useState)(!1);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`div`,{className:`fpo mb-spacing-size-3`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa, quis iure eligendi voluptates delectus earum suscipit porro exercitationem asperiores voluptatibus repellat saepe neque nisi quidem repellendus temporibus accusamus ea officiis illo unde illum mollitia eos consectetur. Possimus, eaque nihil?`}),(0,z.jsx)(`div`,{className:`flex justify-center`,children:(0,z.jsx)(A,{onClick:()=>n(!0),rank:`primary`,children:`Open the modal`})}),(0,z.jsx)(R,{...e,onClose:()=>n(!1),open:t})]})}var Dn,z,On,kn,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,An;function jn(){return(jn=t((()=>{n(),Dn=n(),Tn(),gt(),bt(),xt(),o(),Ct(),wt(),_t(),z=r(),{userEvent:On}=__STORYBOOK_MODULE_TEST__,kn={title:`Components/Modal`,component:R,parameters:{docs:{subtitle:`Modals display content on top of the page in a separate container, blocking the content underneath. They require user action and can be used to deliver a message or help a user complete a task.`},chromatic:{delay:500,prefersReducedMotion:`reduce`},layout:`fullscreen`},tags:[`autodocs`,`version:4.0.1`]},B={parameters:{layout:`centered`,snapshot:{skip:!0}},render:e=>(0,z.jsxs)(En,{...e,children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(R.Title,{children:`Modal title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(A,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),play:async()=>{await On.tab(),await On.keyboard(` `,{delay:150})}},V={args:{size:`full`},parameters:B.parameters,render:e=>(0,z.jsxs)(En,{...e,children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(R.Title,{children:`Modal title`}),(0,z.jsx)(R.SubTitle,{children:`Modal title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(A,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]})},H={args:{size:`lg`},parameters:B.parameters,render:e=>(0,z.jsxs)(En,{...e,children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(R.Title,{children:`Modal title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsxs)(R.Body,{children:[(0,z.jsx)(O,{as:`h3`,children:`Title text`}),(0,z.jsx)(k,{as:`p`,preset:`body-lg`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam diam quis dolor maximus, non tincidunt lacus facilisis. Praesent ac vestibulum diam. Sed ac orci fringilla, ullamcorper quam nec, elementum turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur et vulputate leo. Phasellus convallis ante at augue iaculis, quis consectetur dolor placerat. Nulla ornare malesuada elit eu faucibus. Mauris ultricies tincidunt eleifend. Aliquam erat volutpat. Morbi nec ipsum sed sem facilisis tristique nec et ligula. Vivamus id feugiat sapien.`}),(0,z.jsx)(O,{as:`h3`,children:`Title text`}),(0,z.jsx)(k,{as:`p`,preset:`body-lg`,children:`Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin aliquam, orci ex pretium ipsum, congue rhoncus dui orci sed velit. Cras ac leo vel massa rutrum auctor eget sed orci. Aenean id nisi consectetur, dapibus tellus ut, finibus metus. Integer tristique est vitae lectus suscipit, ut vulputate est fringilla. Donec pharetra facilisis erat at venenatis. Etiam faucibus dignissim leo eget congue. Sed vehicula imperdiet neque id gravida. Proin volutpat tortor quis quam molestie, faucibus condimentum ante sagittis. Suspendisse sit amet luctus tellus. Suspendisse a sapien hendrerit eros dictum faucibus. Vivamus pretium vel sem faucibus tristique. Integer iaculis pellentesque nunc ac pellentesque.`}),(0,z.jsx)(O,{as:`h3`,children:`Title text`}),(0,z.jsx)(k,{as:`p`,preset:`body-lg`,children:`Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis urna, ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum suscipit ac ligula venenatis scelerisque. Fusce rutrum nulla lectus, sed dignissim ipsum faucibus sodales. Suspendisse id aliquet quam. Maecenas facilisis mauris dolor, id accumsan ex vehicula in. In nisl ligula, fringilla in enim nec, lobortis sollicitudin purus. Aliquam vehicula euismod enim quis finibus. Fusce ornare tortor malesuada, consequat magna quis, porta dolor. Donec quis nisl ac sem dictum semper quis vel turpis. Proin sed leo in ante rhoncus pellentesque a eu urna. Phasellus consequat lectus et hendrerit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,z.jsx)(O,{as:`h3`,children:`Title text`}),(0,z.jsx)(k,{as:`p`,preset:`body-lg`,children:`Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis id, blandit turpis. Fusce augue quam, pellentesque et suscipit consectetur, pharetra in mi. Suspendisse non ultricies purus. Integer dignissim condimentum sem ac porta. Vivamus viverra congue massa, vitae fermentum est scelerisque et. Duis a urna vitae odio semper dictum a sed nisl. In fringilla hendrerit massa, at luctus arcu tincidunt nec. Donec gravida, mauris sit amet porta lobortis, justo sem vehicula ipsum, at pretium sem leo sed libero. Morbi tristique rhoncus suscipit. Nullam at malesuada sapien. Nam in egestas tellus. Nulla quis metus dui. Suspendisse sit amet nisi at lectus ultricies egestas.`}),(0,z.jsx)(O,{as:`h3`,children:`Title text`}),(0,z.jsx)(k,{as:`p`,className:`mb-0`,preset:`body-lg`,children:`Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales enim mi, varius feugiat sapien congue eget. Morbi vitae ipsum non ligula eleifend molestie. Aenean bibendum tortor sapien, quis volutpat ante ultricies id. Morbi varius dolor ac ante posuere, sit amet tincidunt lectus pulvinar. Proin id efficitur neque. Nullam vel feugiat dui. Curabitur imperdiet lacinia eros, ac iaculis odio. Praesent quis pretium sapien, quis posuere lectus. Proin eleifend purus nec massa aliquam commodo. Quisque auctor suscipit ex sed tristique. Sed eget ultrices est. Suspendisse nunc justo, dapibus at eros ac, rutrum vestibulum est.`})]}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(A,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),play:B.play},U={args:{size:`sm`},parameters:B.parameters,render:B.render,play:B.play},W={render:e=>(0,z.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,z.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-[100vh] w-full opacity-50`}),(0,z.jsx)(R.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]}),args:{children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(O,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(A,{onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]}),hideCloseButton:!1,open:!0},parameters:{chromatic:{disableSnapshot:!1},snapshot:{skip:!0}}},G={...W,args:{...W.args,size:`lg`}},K={...W,args:{...W.args,size:`sm`},parameters:{...W.parameters,chromatic:{disableSnapshot:!1,viewports:[a.googlePixel2,a.ipadMini,a.ipadPro,a.chromebook,a.macbookPro]}}},q={...W,args:{...W.args,size:`lg`,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(O,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{buttonLayout:`vertical`,children:[(0,z.jsx)(A,{isFullWidth:!0,onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{isFullWidth:!0,onClick:()=>{},rank:`secondary`,children:`Secondary`})]})})]})},render:e=>(0,z.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,z.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,z.jsx)(R.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},J={...W,args:{...W.args,size:`lg`,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(O,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsxs)(j,{buttonLayout:`vertical`,children:[(0,z.jsx)(A,{isFullWidth:!0,onClick:()=>{},rank:`primary`,children:`Primary`}),(0,z.jsx)(A,{isFullWidth:!0,onClick:()=>{},rank:`tertiary`,children:`Tertiary`})]})})]})},render:e=>(0,z.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,z.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,z.jsx)(R.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},Y={...W,args:{...W.args,size:`lg`,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(R.Header,{children:[(0,z.jsx)(O,{as:`h2`,className:`text-utility-default-primary`,preset:`title-lg`,children:`Modal Title`}),(0,z.jsx)(R.SubTitle,{children:`Modal Sub-title`})]}),(0,z.jsx)(R.Body,{children:(0,z.jsx)(`div`,{className:`fpo h-full w-full`,children:`Modal Content`})}),(0,z.jsx)(R.Footer,{children:(0,z.jsx)(j,{children:(0,z.jsx)(A,{onClick:()=>{},rank:`primary`,variant:`critical`,children:`Critical Action`})})})]})},render:e=>(0,z.jsxs)(`div`,{className:`fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center`,children:[(0,z.jsx)(`div`,{className:`bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50`}),(0,z.jsx)(R.Content,{...e,"data-testid":`non-interactive`,onClose:()=>{}})]})},X={...W,parameters:{...W.parameters,viewport:{defaultViewport:`googlePixel2`},chromatic:{disableSnapshot:!1,viewports:[a.googlePixel2]}}},Z={...W,parameters:{...W.parameters,viewport:{defaultViewport:`mobilelandscape`,viewports:{mobilelandscape:{name:`Mobile Landscape`,styles:{width:`896px`,height:`414px`}}},chromatic:{disableSnapshot:!0}}}},Q={...W,parameters:{...W.parameters,viewport:{defaultViewport:`ipadMini`,viewports:{mobilelandscape:i.ipadMini}},chromatic:{disableSnapshot:!1,viewports:[a.ipadMini]}}},$={...W,decorators:[e=>(0,z.jsx)(yt,{icons:St,children:e()})]},An=[`Default`,`Full`,`LargeScrolling`,`Small`,`ContentDefault`,`ContentLarge`,`ContentSmall`,`LayoutVertical`,`LayoutVerticalWithTertiary`,`WithCriticalButton`,`Mobile`,`MobileLandscape`,`Tablet`,`WithProvidedIcons`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    snapshot: {
      skip: true
    }
  },
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>,
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', {
      delay: 150
    });
  }
}`,...B.parameters?.docs?.source},description:{story:`Clicking on a trigger item (in this case \`Button\`) will cause a modal to open.

**Note**: this only works from certain screens in Storybook. If it doesn't work as expected, view from the
"docs" sub-page.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'full'
  },
  parameters: Default.parameters,
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="fpo h-full w-full">Modal Content</div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>
}`,...V.parameters?.docs?.source},description:{story:"`Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents\nof the modal except to wrap text.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  parameters: Default.parameters,
  render: args => <InteractiveExample {...args}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
      </Modal.Header>
      <Modal.Body>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          diam quis dolor maximus, non tincidunt lacus facilisis. Praesent ac
          vestibulum diam. Sed ac orci fringilla, ullamcorper quam nec,
          elementum turpis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Curabitur et vulputate leo.
          Phasellus convallis ante at augue iaculis, quis consectetur dolor
          placerat. Nulla ornare malesuada elit eu faucibus. Mauris ultricies
          tincidunt eleifend. Aliquam erat volutpat. Morbi nec ipsum sed sem
          facilisis tristique nec et ligula. Vivamus id feugiat sapien.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Nam ac tincidunt arcu. Nam non metus sem. Morbi eleifend metus vel
          venenatis accumsan. Vestibulum pharetra, ante quis sollicitudin
          aliquam, orci ex pretium ipsum, congue rhoncus dui orci sed velit.
          Cras ac leo vel massa rutrum auctor eget sed orci. Aenean id nisi
          consectetur, dapibus tellus ut, finibus metus. Integer tristique est
          vitae lectus suscipit, ut vulputate est fringilla. Donec pharetra
          facilisis erat at venenatis. Etiam faucibus dignissim leo eget congue.
          Sed vehicula imperdiet neque id gravida. Proin volutpat tortor quis
          quam molestie, faucibus condimentum ante sagittis. Suspendisse sit
          amet luctus tellus. Suspendisse a sapien hendrerit eros dictum
          faucibus. Vivamus pretium vel sem faucibus tristique. Integer iaculis
          pellentesque nunc ac pellentesque.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Integer mollis, urna eget sollicitudin laoreet, nunc elit facilisis
          urna, ut finibus est mi eu quam. Nam ac venenatis massa. Vestibulum
          suscipit ac ligula venenatis scelerisque. Fusce rutrum nulla lectus,
          sed dignissim ipsum faucibus sodales. Suspendisse id aliquet quam.
          Maecenas facilisis mauris dolor, id accumsan ex vehicula in. In nisl
          ligula, fringilla in enim nec, lobortis sollicitudin purus. Aliquam
          vehicula euismod enim quis finibus. Fusce ornare tortor malesuada,
          consequat magna quis, porta dolor. Donec quis nisl ac sem dictum
          semper quis vel turpis. Proin sed leo in ante rhoncus pellentesque a
          eu urna. Phasellus consequat lectus et hendrerit luctus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" preset="body-lg">
          Suspendisse vitae eros elit. Maecenas id urna tempus, tempus turpis
          id, blandit turpis. Fusce augue quam, pellentesque et suscipit
          consectetur, pharetra in mi. Suspendisse non ultricies purus. Integer
          dignissim condimentum sem ac porta. Vivamus viverra congue massa,
          vitae fermentum est scelerisque et. Duis a urna vitae odio semper
          dictum a sed nisl. In fringilla hendrerit massa, at luctus arcu
          tincidunt nec. Donec gravida, mauris sit amet porta lobortis, justo
          sem vehicula ipsum, at pretium sem leo sed libero. Morbi tristique
          rhoncus suscipit. Nullam at malesuada sapien. Nam in egestas tellus.
          Nulla quis metus dui. Suspendisse sit amet nisi at lectus ultricies
          egestas.
        </Text>
        <Heading as="h3">Title text</Heading>
        <Text as="p" className="mb-0" preset="body-lg">
          Integer pulvinar felis sit amet dignissim fermentum. Nulla sodales
          enim mi, varius feugiat sapien congue eget. Morbi vitae ipsum non
          ligula eleifend molestie. Aenean bibendum tortor sapien, quis volutpat
          ante ultricies id. Morbi varius dolor ac ante posuere, sit amet
          tincidunt lectus pulvinar. Proin id efficitur neque. Nullam vel
          feugiat dui. Curabitur imperdiet lacinia eros, ac iaculis odio.
          Praesent quis pretium sapien, quis posuere lectus. Proin eleifend
          purus nec massa aliquam commodo. Quisque auctor suscipit ex sed
          tristique. Sed eget ultrices est. Suspendisse nunc justo, dapibus at
          eros ac, rutrum vestibulum est.
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={() => {}} rank="primary">
            Primary
          </Button>
          <Button onClick={() => {}} rank="secondary">
            Secondary
          </Button>
        </ButtonGroup>
      </Modal.Footer>
    </InteractiveExample>,
  play: Default.play
}`,...H.parameters?.docs?.source},description:{story:`\`Modal\` manages its own height. Content taller than the space available scrolls inside the
body, and the header and footer stay on screen while it does, so a long modal does not run
its actions off the bottom of the viewport.

Below 320px of viewport height there is no room to scroll the body within, and the modal
scrolls as a whole instead, which is the one case where the footer goes off screen.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  parameters: Default.parameters,
  render: Default.render,
  play: Default.play
}`,...U.parameters?.docs?.source},description:{story:`Small will always try to take up the least amount of space.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-[100vh] w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>,
  args: {
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>,
    hideCloseButton: false,
    open: true
  },
  parameters: {
    // This story shows the modal content by default, for visual regression testing purposes.
    chromatic: {
      disableSnapshot: false
    },
    snapshot: {
      skip: true
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`The default modal experience's Content area (the modal itself). The following stories show how the modal
will render in various contexts and with various props set.

When viewing code, This will use \`<Header>\` directly, to demonstrate composition. When building \`Modal\`s, use
\`Modal.Title\` instead.

**NOTE**: The order of the buttons puts the primary to the far bottom and right of the modal, per
macOS conventions and style guide.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg'
  }
}`,...G.parameters?.docs?.source},description:{story:"`Modal` provides `size`, which allows control over the natural width of the modal. This does not affect the contents\nof the modal except to wrap text.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'sm'
  },
  parameters: {
    ...ContentDefault.parameters,
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.ipadMini, chromaticViewports.ipadPro, chromaticViewports.chromebook, chromaticViewports.macbookPro]
    }
  }
}`,...K.parameters?.docs?.source},description:{story:'`Modal` also allows for `small`.\n\nUnlike `lg`, `size="sm"` never goes full-bleed and has a different width at each\nbreakpoint (480px max at the smallest, 480px through `md`, 560px at `lg` and up), so this\nsnapshots at every available viewport rather than the single default width.',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="secondary">
              Secondary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...q.parameters?.docs?.source},description:{story:"Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.\nMake sure to match the Button width style by using `isFullWidth`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup buttonLayout="vertical">
            <Button isFullWidth onClick={() => {}} rank="primary">
              Primary
            </Button>
            <Button isFullWidth onClick={() => {}} rank="tertiary">
              Tertiary
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...J.parameters?.docs?.source},description:{story:"Buttons can have a vertical alignment in the footer. For this, use `ButtonGroup` with the `buttonLayout` = `vertical`.\nMake sure to match the Button width style by using `isFullWidth`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  args: {
    ...ContentDefault.args,
    size: 'lg',
    children: <>
        <Modal.Header>
          <Heading as="h2" className="text-utility-default-primary" preset="title-lg">
            Modal Title
          </Heading>
          <Modal.SubTitle>Modal Sub-title</Modal.SubTitle>
        </Modal.Header>
        <Modal.Body>
          <div className="fpo h-full w-full">Modal Content</div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button onClick={() => {}} rank="primary" variant="critical">
              Critical Action
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </>
  },
  render: args => <div className="fixed left-0 top-0 flex h-[100vh] w-full items-center justify-center">
      <div className="bg-utility-overlay-lowEmphasis absolute h-full w-full opacity-50" />
      <Modal.Content {...args} data-testid="non-interactive" onClose={() => {}} />
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Modals can have destructive behavior. Use the 'critical' button variant.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'googlePixel2'
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.googlePixel2]
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`This shows the responsive layout in a mobile viewport`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'mobilelandscape',
      viewports: {
        mobilelandscape: {
          name: 'Mobile Landscape',
          styles: {
            width: '896px',
            height: '414px'
          }
        }
      },
      /**
       * Chromatic sets viewport height to 900px, hence won't snap as necessary
       */
      chromatic: {
        disableSnapshot: true
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`This shows the responsive layout in a mobile (landscape) viewport`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  parameters: {
    ...ContentDefault.parameters,
    viewport: {
      defaultViewport: 'ipadMini',
      viewports: {
        mobilelandscape: storybookViewports.ipadMini
      }
    },
    chromatic: {
      disableSnapshot: false,
      viewports: [chromaticViewports.ipadMini]
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`This shows the responsive layout in a tablet viewport`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...ContentDefault,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...$.parameters?.docs?.source},description:{story:"The close button comes from `IconProvider`, so it is the same affordance as every other\nclose in the app rather than something set per modal.\n\nShown non-interactive, like the other `Modal.Content` stories.",...$.parameters?.docs?.description}}}})))()}jn();export{W as ContentDefault,G as ContentLarge,K as ContentSmall,B as Default,V as Full,H as LargeScrolling,q as LayoutVertical,J as LayoutVerticalWithTertiary,X as Mobile,Z as MobileLandscape,U as Small,Q as Tablet,Y as WithCriticalButton,$ as WithProvidedIcons,An as __namedExportsOrder,kn as default};