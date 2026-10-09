import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./react-dom-BHZR6v6Q.js";import{a,c as o,l as s,n as c,o as l,s as u,t as d,u as f}from"./use-resolve-button-type-vFGQ5KQa.js";import{n as p,t as m}from"./clsx-CTwy9ux-.js";import{C as ee,S as h,T as g,_,b as v,c as y,g as b,i as x,n as S,o as te,p as C,r as w,s as ne,u as re,v as T,w as ie,x as ae,y as oe}from"./use-sync-refs-CYKzq9CM.js";import{_ as se,g as E,h as ce,n as D,t as le,u as ue,v as de,x as fe,y as pe}from"./keyboard-C519l7JJ.js";import{a as me,i as he,o as ge,r as _e}from"./description-BbW3V1_4.js";import{a as ve,c as ye,i as be,l as xe,n as Se,o as Ce,r as we,s as Te}from"./form-fields-CTkxc7wV.js";import{a as Ee,c as De,i as Oe,n as ke,r as Ae,s as je}from"./label-C3QVhqWV.js";import{a as Me,i as Ne,r as Pe,t as Fe}from"./frozen-65gKHxdA.js";import{a as Ie,c as Le,i as Re,l as ze,n as Be,o as Ve,r as He,s as Ue,t as We}from"./floating-CKGfzXCp.js";import{a as O,c as Ge,d as Ke,f as qe,i as Je,l as Ye,m as Xe,n as Ze,o as Qe,p as $e,r as et,s as tt,t as nt,u as rt}from"./element-movement-CXJMdJo4.js";import{A as it,B as at,E as ot,F as st,G as ct,H as lt,O as ut,P as dt,R as k,T as ft,U as pt,V as mt,W as ht,c as gt,f as _t,h as vt,k as yt,l as bt,m as xt,n as St,p as Ct,r as wt,s as Tt,u as Et,w as Dt,z as Ot}from"./portal-B3uDnaEk.js";import{n as kt,t as At}from"./use-inert-others-B2IhmKua.js";import{a as jt,c as Mt,n as Nt,o as Pt,r as Ft,s as It,t as Lt}from"./open-closed-D2k00yGF.js";import{n as Rt,t as zt}from"./use-text-value-CW2YPPL0.js";import{i as Bt,n as Vt}from"./logging-DIGRaM8w.js";import{n as Ht,r as Ut,t as Wt}from"./IconSlot-Chsa5gUx.js";import{n as Gt,r as Kt,t as qt}from"./IconProvider-CLE0eA_m.js";import{n as Jt,r as Yt,t as Xt}from"./Text-DJbcQrwW.js";import{n as Zt,t as Qt}from"./semanticIconOverrides-8zHpyBoo.js";import{n as $t,t as en}from"./PopoverContainer-BooOHzBJ.js";import{n as tn,t as nn}from"./PopoverListItem-v1HC0J29.js";import{n as rn,t as an}from"./Checkbox-D-DWxAGV.js";import{n as on,t as sn}from"./FieldLabel-DKMDZyjd.js";import{n as cn,t as ln}from"./FieldNote-DZYRcpLM.js";import{n as un,t as dn}from"./Radio-DAO4raSV.js";function fn(e,t=e=>e){let n=e.activeOptionIndex===null?null:e.options[e.activeOptionIndex],r=Dt(t(e.options.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}var pn,mn,hn,A,j,gn,_n,vn,yn;function bn(){return(bn=t((()=>{ht(),at(),tt(),et(),it(),pn=Object.defineProperty,mn=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hn=(e,t,n)=>(mn(e,typeof t==`symbol`?t:t+``,n),n),A=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(A||{}),j=(e=>(e[e.Single=0]=`Single`,e[e.Multi=1]=`Multi`,e))(j||{}),gn=(e=>(e[e.Pointer=0]=`Pointer`,e[e.Other=1]=`Other`,e))(gn||{}),_n=(e=>(e[e.OpenListbox=0]=`OpenListbox`,e[e.CloseListbox=1]=`CloseListbox`,e[e.GoToOption=2]=`GoToOption`,e[e.Search=3]=`Search`,e[e.ClearSearch=4]=`ClearSearch`,e[e.SelectOption=5]=`SelectOption`,e[e.RegisterOptions=6]=`RegisterOptions`,e[e.UnregisterOptions=7]=`UnregisterOptions`,e[e.SetButtonElement=8]=`SetButtonElement`,e[e.SetOptionsElement=9]=`SetOptionsElement`,e[e.SortOptions=10]=`SortOptions`,e[e.MarkButtonAsMoved=11]=`MarkButtonAsMoved`,e))(_n||{}),vn={1(e){if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.buttonElement?Ze.Tracked(nt(e.buttonElement)):e.buttonPositionState;return{...e,activeOptionIndex:null,pendingFocus:{focus:O.Nothing},listboxState:1,__demoMode:!1,buttonPositionState:t}},0(e,t){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,i=e.options.findIndex(e=>r(e.dataRef.current.value));return i!==-1&&(n=i),{...e,frozenValue:!1,pendingFocus:t.focus,listboxState:0,activeOptionIndex:n,__demoMode:!1,buttonPositionState:Ze.Idle}},2(e,t){if(e.dataRef.current.disabled||e.listboxState===1)return e;let n={...e,searchQuery:``,activationTrigger:t.trigger??1,__demoMode:!1};if(t.focus===O.Nothing)return{...n,activeOptionIndex:null};if(t.focus===O.Specific)return{...n,activeOptionIndex:e.options.findIndex(e=>e.id===t.id)};if(t.focus===O.Previous){let r=e.activeOptionIndex;if(r!==null){let i=e.options[r].dataRef.current.domRef,a=Qe(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.options[a].dataRef.current.domRef;if(i.current?.previousElementSibling===t.current||t.current?.previousElementSibling===null)return{...n,activeOptionIndex:a}}}}else if(t.focus===O.Next){let r=e.activeOptionIndex;if(r!==null){let i=e.options[r].dataRef.current.domRef,a=Qe(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.options[a].dataRef.current.domRef;if(i.current?.nextElementSibling===t.current||t.current?.nextElementSibling===null)return{...n,activeOptionIndex:a}}}}let r=fn(e),i=Qe(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...n,...r,activeOptionIndex:i}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=+(e.searchQuery===``),r=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex===null?e.options:e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n))).find(e=>!e.dataRef.current.disabled&&e.dataRef.current.textValue?.startsWith(r)),a=i?e.options.indexOf(i):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===``?e:{...e,searchQuery:``}},5(e){return e.dataRef.current.mode===0?{...e,frozenValue:!0}:{...e}},6:(e,t)=>{let n=e.options.concat(t.options),r=e.activeOptionIndex;if(e.pendingFocus.focus!==O.Nothing&&(r=Qe(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled})),e.activeOptionIndex===null){let{isSelected:t}=e.dataRef.current;if(t){let e=n.findIndex(e=>t?.(e.dataRef.current.value));e!==-1&&(r=e)}}return{...e,options:n,activeOptionIndex:r,pendingFocus:{focus:O.Nothing},pendingShouldSort:!0}},7:(e,t)=>{let n=e.options,r=[],i=new Set(t.options);for(let[e,t]of n.entries())if(i.has(t.id)&&(r.push(e),i.delete(t.id),i.size===0))break;if(r.length>0){n=n.slice();for(let e of r.reverse())n.splice(e,1)}return{...e,options:n,activationTrigger:1}},8:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},9:(e,t)=>e.optionsElement===t.element?e:{...e,optionsElement:t.element},10:e=>e.pendingShouldSort?{...e,...fn(e),pendingShouldSort:!1}:e,11(e){return e.buttonPositionState.kind===`Tracked`?{...e,buttonPositionState:Ze.Moved}:e}},yn=class e extends pt{constructor(e){super(e),hn(this,`actions`,{onChange:e=>{let{onChange:t,compare:n,mode:r,value:i}=this.state.dataRef.current;return C(r,{0:()=>t?.(e),1:()=>{let r=i.slice(),a=r.findIndex(t=>n(t,e));return a===-1?r.push(e):r.splice(a,1),t?.(r)}})},registerOption:ct(()=>{let e=[],t=new Set;return[(n,r)=>{t.has(r)||(t.add(r),e.push({id:n,dataRef:r}))},()=>(t.clear(),this.send({type:6,options:e.splice(0)}))]}),unregisterOption:ct(()=>{let e=[];return[t=>e.push(t),()=>{this.send({type:7,options:e.splice(0)})}]}),goToOption:ct(()=>{let e=null;return[(t,n)=>{e={type:2,...t,trigger:n}},()=>e&&this.send(e)]}),closeListbox:()=>{this.send({type:1})},openListbox:e=>{this.send({type:0,focus:e})},selectActiveOption:()=>{var e;if(this.state.activeOptionIndex!==null){let{dataRef:e}=this.state.options[this.state.activeOptionIndex];this.actions.selectOption(e.current.value)}else this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(e=this.state.buttonElement)==null||e.focus({preventScroll:!0}))},selectOption:e=>{this.send({type:5,value:e})},search:e=>{this.send({type:3,value:e})},clearSearch:()=>{this.send({type:4})},setButtonElement:e=>{this.send({type:8,element:e})},setOptionsElement:e=>{this.send({type:9,element:e})}}),hn(this,`selectors`,{activeDescendantId(e){var t;let n=e.activeOptionIndex,r=e.options;return n===null||(t=r[n])==null?void 0:t.id},isActive(e,t){let n=e.activeOptionIndex,r=e.options;return n!==null&&r[n]?.id===t},hasFrozenValue(e){return e.frozenValue},shouldScrollIntoView(e,t){return e.__demoMode||e.listboxState!==0||e.activationTrigger===0?!1:this.isActive(e,t)},didButtonMove(e){return e.buttonPositionState.kind===`Moved`}}),this.on(6,()=>{requestAnimationFrame(()=>{this.send({type:10})})});{let e=this.state.id,t=lt.get(null);this.disposables.add(t.on(mt.Push,n=>{!t.selectors.isTop(n,e)&&this.state.listboxState===0&&this.actions.closeListbox()})),this.on(0,()=>t.actions.push(e)),this.on(1,()=>t.actions.pop(e))}this.disposables.group(e=>{this.on(1,t=>{t.buttonElement&&(e.dispose(),e.add(Je(t.buttonElement,t.buttonPositionState,()=>{this.send({type:11})})))})}),this.on(5,(e,t)=>{var n;this.actions.onChange(t.value),this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(n=this.state.buttonElement)==null||n.focus({preventScroll:!0}))})}static new({id:t,__demoMode:n=!1}){return new e({id:t,dataRef:{current:{}},listboxState:+!n,options:[],searchQuery:``,activeOptionIndex:null,activationTrigger:1,buttonElement:null,optionsElement:null,pendingShouldSort:!1,pendingFocus:{focus:O.Nothing},frozenValue:!1,__demoMode:n,buttonPositionState:Ze.Idle})}reduce(e,t){return C(t.type,vn,e,t)}}})))()}function xn(e){let t=(0,Cn.useContext)(wn);if(t===null){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Sn),t}return t}function Sn({id:e,__demoMode:t=!1}){let n=(0,Cn.useMemo)(()=>yn.new({id:e,__demoMode:t}),[]);return Tt(()=>n.dispose()),n}var Cn,wn;function Tn(){return(Tn=t((()=>{Cn=n(),gt(),bn(),wn=(0,Cn.createContext)(null)})))()}function En(e){let t=(0,M.useContext)(Nn);if(t===null){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,En),t}return t}function Dn(e,t){let n=(0,ce.useId)(),r=me(),{value:i,defaultValue:a,form:o,name:s,onChange:c,by:l,invalid:u=!1,disabled:d=r||!1,horizontal:f=!1,multiple:p=!1,__demoMode:m=!1,...ee}=e,h=f?`horizontal`:`vertical`,g=w(t),_=Te(a),[v=p?[]:void 0,y]=ye(i,c,_),b=Sn({id:n,__demoMode:m}),x=(0,M.useRef)({static:!1,hold:!1}),S=(0,M.useRef)(new Map),ne=Me(l),re=(0,M.useCallback)(e=>C(T.mode,{[j.Multi]:()=>v.some(t=>ne(t,e)),[j.Single]:()=>ne(v,e)}),[v]),T=de({value:v,disabled:d,invalid:u,mode:p?j.Multi:j.Single,orientation:h,onChange:y,compare:ne,isSelected:re,optionsPropsRef:x,listRef:S});ae(()=>{b.state.dataRef.current=T},[T]);let ie=k(b,e=>e.listboxState),oe=lt.get(null),se=k(oe,(0,M.useCallback)(e=>oe.selectors.isTop(e,n),[oe,n])),[E,D]=k(b,e=>[e.buttonElement,e.optionsElement]);vt(se,[E,D],(e,t)=>{b.send({type:_n.CloseListbox}),ft(t,ot.Loose)||(e.preventDefault(),E?.focus())});let le=de({open:ie===A.Open,disabled:d,invalid:u,value:v}),[ue,fe]=Ae({inherit:!0}),pe={ref:g},he=(0,M.useCallback)(()=>{if(_!==void 0)return y?.(_)},[y,_]),ge=te();return M.createElement(fe,{value:ue,props:{htmlFor:E?.id},slot:{open:ie===A.Open,disabled:d}},M.createElement(We,null,M.createElement(wn.Provider,{value:b},M.createElement(Nn.Provider,{value:T},M.createElement(Lt,{value:C(ie,{[A.Open]:Nt.Open,[A.Closed]:Nt.Closed})},s!=null&&v!=null&&M.createElement(we,{disabled:d,data:{[s]:v},form:o,onReset:he}),ge({ourProps:pe,theirProps:ee,slot:le,defaultTag:Pn,name:`Listbox`}))))))}function On(e,t){let n=(0,ce.useId)(),r=De(),i=En(`Listbox.Button`),a=xn(`Listbox.Button`),{id:o=r||`headlessui-listbox-button-${n}`,disabled:c=i.disabled||!1,autoFocus:f=!1,...p}=e,m=w(t,Be(),a.actions.setButtonElement),ee=Ie(),[h,g,v]=k(a,e=>[e.listboxState,e.buttonElement,e.optionsElement]),y=h===A.Open;rt(y,{trigger:g,action:(0,M.useCallback)(e=>{if(g!=null&&g.contains(e.target))return Ke.Ignore;let t=e.target.closest(`[role="option"]:not([data-disabled])`);return ue(t)?Ke.Select(t):v!=null&&v.contains(e.target)?Ke.Ignore:Ke.Close},[g,v]),close:a.actions.closeListbox,select:a.actions.selectActiveOption});let b=_(e=>{switch(e.key){case D.Enter:be(e.currentTarget);break;case D.Space:case D.ArrowDown:e.preventDefault(),a.actions.openListbox({focus:i.value?O.Nothing:O.First});break;case D.ArrowUp:e.preventDefault(),a.actions.openListbox({focus:i.value?O.Nothing:O.Last})}}),x=_(e=>{switch(e.key){case D.Space:e.preventDefault()}}),S=Xe(e=>{var t;a.state.listboxState===A.Open?((0,Mn.flushSync)(()=>a.actions.closeListbox()),(t=a.state.buttonElement)==null||t.focus({preventScroll:!0})):(e.preventDefault(),a.actions.openListbox({focus:O.Nothing}))}),C=_(e=>e.preventDefault()),re=ke([o]),T=he(),{isFocusVisible:ie,focusProps:ae}=u({autoFocus:f}),{isHovered:oe,hoverProps:se}=s({isDisabled:c}),{pressed:E,pressProps:le}=l({disabled:c}),fe=de({open:h===A.Open,active:E||h===A.Open,disabled:c,invalid:i.invalid,value:i.value,hover:oe,focus:ie,autofocus:f}),pe=k(a,e=>e.listboxState===A.Open),me=ne(ee(),{ref:m,id:o,type:d(e,g),"aria-haspopup":`listbox`,"aria-controls":v?.id,"aria-expanded":pe,"aria-labelledby":re,"aria-describedby":T,disabled:c||void 0,autoFocus:f,onKeyDown:b,onKeyUp:x,onKeyPress:C},S,ae,se,le);return te()({ourProps:me,theirProps:p,slot:fe,defaultTag:Fn,name:`Listbox.Button`})}function kn(e,t){let n=(0,ce.useId)(),{id:r=`headlessui-listbox-options-${n}`,anchor:i,portal:a=!1,modal:o=!0,transition:s=!1,...c}=e,l=Ue(i),[u,d]=(0,M.useState)(null);l&&(a=!0);let f=En(`Listbox.Options`),p=xn(`Listbox.Options`),[m,h,g,v]=k(p,e=>[e.listboxState,e.buttonElement,e.optionsElement,e.__demoMode]),y=Ct(h),b=Ct(g),x=jt(),[S,re]=Pt(s,u,x===null?m===A.Open:(x&Nt.Open)===Nt.Open);st(S,h,p.actions.closeListbox);let T=!v&&o&&m===A.Open;bt(T,b);let ie=!v&&o&&m===A.Open;kt(ie,{allowed:(0,M.useCallback)(()=>[h,g],[h,g])});let ae=!k(p,p.selectors.didButtonMove)&&S,oe=k(p,p.selectors.hasFrozenValue)&&!e.static,se=Pe(oe,f.value),E=(0,M.useCallback)(e=>f.compare(se,e),[f.compare,se]),le=k(p,e=>{var t;if(l==null||!((t=l?.to)!=null&&t.includes(`selection`)))return null;let n=e.options.findIndex(e=>E(e.dataRef.current.value));return n===-1&&(n=0),n}),ue=(()=>{if(l==null)return;if(le===null)return{...l,inner:void 0};let e=Array.from(f.listRef.current.values());return{...l,inner:{listRef:{current:e},index:le}}})(),[fe,me]=He(ue),he=Re(),ge=w(t,l?fe:null,p.actions.setOptionsElement,d),_e=ee();(0,M.useEffect)(()=>{let e=g;e&&m===A.Open&&(pe(e)||e==null||e.focus({preventScroll:!0}))},[m,g]);let ve=_(e=>{var t;switch(_e.dispose(),e.key){case D.Space:if(p.state.searchQuery!==``)return e.preventDefault(),e.stopPropagation(),p.actions.search(e.key);case D.Enter:e.preventDefault(),e.stopPropagation(),p.actions.selectActiveOption();break;case C(f.orientation,{vertical:D.ArrowDown,horizontal:D.ArrowRight}):return e.preventDefault(),e.stopPropagation(),p.actions.goToOption({focus:O.Next});case C(f.orientation,{vertical:D.ArrowUp,horizontal:D.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),p.actions.goToOption({focus:O.Previous});case D.Home:case D.PageUp:return e.preventDefault(),e.stopPropagation(),p.actions.goToOption({focus:O.First});case D.End:case D.PageDown:return e.preventDefault(),e.stopPropagation(),p.actions.goToOption({focus:O.Last});case D.Escape:e.preventDefault(),e.stopPropagation(),(0,Mn.flushSync)(()=>p.actions.closeListbox()),(t=p.state.buttonElement)==null||t.focus({preventScroll:!0});return;case D.Tab:e.preventDefault(),e.stopPropagation(),(0,Mn.flushSync)(()=>p.actions.closeListbox()),ut(p.state.buttonElement,e.shiftKey?yt.Previous:yt.Next);break;default:e.key.length===1&&(p.actions.search(e.key),_e.setTimeout(()=>p.actions.clearSearch(),350))}}),ye=k(p,e=>e.buttonElement?.id),be=de({open:m===A.Open}),xe=ne(l?he():{},{id:r,ref:ge,"aria-activedescendant":k(p,p.selectors.activeDescendantId),"aria-multiselectable":f.mode===j.Multi||void 0,"aria-labelledby":ye,"aria-orientation":f.orientation,onKeyDown:ve,role:`listbox`,tabIndex:m===A.Open?0:void 0,style:{...c.style,...me,"--button-width":ze(S,h,!0).width},...Mt(re)}),Se=te(),Ce=(0,M.useMemo)(()=>f.mode===j.Multi?f:{...f,isSelected:E},[f,E]);return M.createElement(wt,{enabled:a?e.static||S:!1,ownerDocument:y},M.createElement(Nn.Provider,{value:Ce},Se({ourProps:xe,theirProps:c,slot:be,defaultTag:Ln,features:Rn,visible:ae,name:`Listbox.Options`})))}function An(e,t){let n=(0,ce.useId)(),{id:r=`headlessui-listbox-option-${n}`,disabled:i=!1,value:a,...o}=e,s=(0,M.useContext)(In)===!0,c=En(`Listbox.Option`),l=xn(`Listbox.Option`),u=k(l,e=>l.selectors.isActive(e,r)),d=c.isSelected(a),f=(0,M.useRef)(null),p=Rt(f),m=oe({disabled:i,value:a,domRef:f,get textValue(){return p()}}),ee=w(t,f,e=>{e?c.listRef.current.set(r,e):c.listRef.current.delete(r)}),h=k(l,e=>l.selectors.shouldScrollIntoView(e,r));ae(()=>{if(h)return g().requestAnimationFrame(()=>{var e,t;(t=(e=f.current)?.scrollIntoView)==null||t.call(e,{block:`nearest`})})},[h,f]),ae(()=>{if(!s)return l.actions.registerOption(r,m),()=>l.actions.unregisterOption(r)},[m,r,s]);let v=_(e=>{if(i)return e.preventDefault();l.actions.selectOption(a)}),y=_(()=>{if(i)return l.actions.goToOption({focus:O.Nothing});l.actions.goToOption({focus:O.Specific,id:r})}),b=Ye(),x=_(e=>b.update(e)),S=_(e=>{b.wasMoved(e)&&(i||u&&l.state.activationTrigger===gn.Pointer||l.actions.goToOption({focus:O.Specific,id:r},gn.Pointer))}),C=_(e=>{b.wasMoved(e)&&(i||u&&l.state.activationTrigger===gn.Pointer&&l.actions.goToOption({focus:O.Nothing}))}),ne=de({active:u,focus:u,selected:d,disabled:i,selectedOption:d&&s}),re=s?{}:{id:r,ref:ee,role:`option`,tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0||void 0,"aria-selected":d,disabled:void 0,onClick:v,onFocus:y,onPointerEnter:x,onMouseEnter:x,onPointerMove:S,onMouseMove:S,onPointerLeave:C,onMouseLeave:C},T=te();return!d&&s?null:T({ourProps:re,theirProps:o,slot:ne,defaultTag:zn,name:`Listbox.Option`})}function jn(e,t){let{options:n,placeholder:r,...i}=e,a={ref:w(t)},o=En(`ListboxSelectedOption`),s=de({}),c=o.value===void 0||o.value===null||o.mode===j.Multi&&Array.isArray(o.value)&&o.value.length===0,l=te();return M.createElement(In.Provider,{value:!0},l({ourProps:a,theirProps:{...i,children:M.createElement(M.Fragment,null,r&&c?r:n)},slot:s,defaultTag:Bn,name:`ListboxSelectedOption`}))}var M,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn;function Jn(){return(Jn=t((()=>{o(),f(),M=e(n(),1),Mn=i(),a(),Ne(),xe(),Ce(),h(),Le(),b(),$e(),E(),At(),v(),T(),dt(),xt(),_t(),qe(),c(),Et(),se(),S(),zt(),Ge(),It(),ge(),Ve(),Se(),Fe(),je(),Ft(),at(),Ot(),tt(),ie(),it(),ve(),fe(),re(),_e(),le(),Ee(),St(),bn(),Tn(),Nn=(0,M.createContext)(null),Nn.displayName=`ListboxDataContext`,Pn=M.Fragment,Fn=`button`,In=(0,M.createContext)(!1),Ln=`div`,Rn=x.RenderStrategy|x.Static,zn=`div`,Bn=M.Fragment,Vn=y(Dn),Hn=y(On),Un=Oe,Wn=y(kn),Gn=y(An),Kn=y(jn),qn=Object.assign(Vn,{Button:Hn,Label:Un,Options:Wn,Option:Gn,SelectedOption:Kn})})))()}var Yn,Xn,Zn,Qn,$n,er,tr,N;function nr(){return(nr=t((()=>{Yn=`_select_guakg_10`,Xn=`_select__overline_guakg_17`,Zn=`_select__options_guakg_32`,Qn=`_select__footer_guakg_99`,$n=`_select__label_guakg_112`,er=`_select__subLabel_guakg_116`,tr=`_select__option_guakg_32`,N={select:Yn,select__overline:Xn,"select__overline--no-label":`_select__overline--no-label_guakg_25`,select__options:Zn,"select--label-layout-vertical":`_select--label-layout-vertical_guakg_37`,"select--label-layout-horizontal":`_select--label-layout-horizontal_guakg_41`,"select-button":`_select-button_guakg_52`,"select-button__icon":`_select-button__icon_guakg_78`,"select-button__text--truncated":`_select-button__text--truncated_guakg_89`,"select-button__icon--reversed":`_select-button__icon--reversed_guakg_95`,select__footer:Qn,"select--has-fieldNote":`_select--has-fieldNote_guakg_104`,select__label:$n,select__subLabel:er,"select__label--disabled":`_select__label--disabled_guakg_121`,"select__label--hidden":`_select__label--hidden_guakg_129`,select__option:tr,"select__option-text":`_select__option-text_guakg_142`,"select__required-text":`_select__required-text_guakg_146`,"select-button--error":`_select-button--error_guakg_167`,"select-button--warning":`_select-button--warning_guakg_180`,"select__required-text--disabled":`_select__required-text--disabled_guakg_193`}})))()}function P({"aria-label":e,children:t,className:n,disabled:r,fieldNote:i,id:a,label:o,labelLayout:s=`vertical`,name:c,optionsClassName:l,required:u,showHint:d,status:f,onChange:p,subLabel:ee,...h}){let[g,_]=(0,F.useState)(h.value===void 0?h.defaultValue:h.value),v=m(N.select,i&&N[`select--has-fieldNote`],s&&N[`select--label-layout-${s}`],n),y=e=>{g!==e&&(_(e),p&&p(e))},b={className:v,as:`div`,disabled:r,name:c,...h,onChange:y},[x,S]=(0,F.useState)(0),te=(0,F.useCallback)(()=>(S(e=>e+1),()=>S(e=>e-1)),[]),C={optionsClassName:l,status:f,multiple:h.multiple,registerVisibleLabel:te},w=!o&&!x&&e&&(0,I.jsx)(Oe,{className:N[`select__label--hidden`],children:e});return typeof t==`function`?(0,I.jsx)(L.Provider,{value:C,children:(0,I.jsx)(qn,{...b,children:e=>(0,I.jsxs)(I.Fragment,{children:[w,t(e)]})})}):(0,I.jsxs)(L.Provider,{value:C,children:[(0,I.jsxs)(qn,{...b,children:[(o||u)&&(0,I.jsx)(P.Label,{disabled:r,required:u,showHint:d,subLabel:ee,children:o}),w,t]}),i&&(0,I.jsx)(`div`,{className:N.select__footer,children:(0,I.jsx)(ln,{disabled:r,status:f,children:i})})]})}var F,I,L,rr,ir,ar,or,sr;function cr(){return(cr=t((()=>{Ee(),Jn(),p(),F=e(n()),Bt(),rn(),on(),cn(),Ut(),Gt(),$t(),tn(),un(),Yt(),nr(),I=r(),L=F.createContext({}),rr=({children:e,required:t,className:n,disabled:r,showHint:i,subLabel:a})=>{let{registerVisibleLabel:o}=(0,F.useContext)(L),s=typeof e==`function`||Ht(e);(0,F.useEffect)(()=>s?o?.():void 0,[s,o]);let c=m(N.select__label,r&&m(N[`select__label--disabled`]),n),l=m(N[`select__required-text`],r&&N[`select__required-text--disabled`]),u=m(N.select__overline,!s&&N[`select__overline--no-label`]),d=m(N.select__subLabel,r&&N[`select__label--disabled`]);return(0,I.jsxs)(`div`,{className:u,children:[(0,I.jsx)(Oe,{as:sn,className:c,disabled:r,size:`md`,children:e}),t&&i&&(0,I.jsx)(Jt,{"aria-disabled":r??void 0,as:`span`,className:l,preset:`body-sm`,children:`(Required)`}),!t&&i&&(0,I.jsx)(Jt,{"aria-disabled":r??void 0,as:`span`,className:l,preset:`body-sm`,children:`(Optional)`}),s&&a&&(0,I.jsx)(`div`,{className:d,children:(0,I.jsx)(Jt,{as:`span`,preset:`body-sm`,children:a})})]})},ir=function(e){let{children:t,className:n,onClick:r,icon:i,...a}=e;Vt(`Select.Button`,`icon`,`expand`,i);let{status:o}=(0,F.useContext)(L);return(0,I.jsx)(Hn,{as:F.Fragment,...a,children:e=>typeof t==`function`?t(e):(0,I.jsx)(sr,{className:n,isOpen:e.open,onClick:e=>{r&&r(e)},status:o,children:t})})},ar=function(e){let{anchor:t={to:`bottom start`,gap:12},className:n,...r}=e,{optionsClassName:i}=(0,F.useContext)(L),a=m(N.select__options,n,i);return(0,I.jsx)(Wn,{anchor:t,as:en,className:a,modal:!1,...r})},or=function(e){let{children:t,className:n,optionClassName:r,subLabel:i,...a}=e,o=m(r,N.select__option),{multiple:s}=(0,F.useContext)(L);return(0,I.jsx)(Gn,{as:F.Fragment,...a,children:typeof t==`function`?t:({focus:e,disabled:n,selected:r})=>(0,I.jsx)(nn,{__type:`selectitem`,className:o,isDisabled:n,isFocused:e,leadingContent:s?(0,I.jsx)(an,{"aria-hidden":`true`,"aria-label":`checkbox`,checked:r,inert:!0,readOnly:!0}):(0,I.jsx)(dn,{"aria-hidden":`true`,"aria-label":`radio`,checked:r,inert:!0,readOnly:!0}),subLabel:i,children:(0,I.jsx)(`span`,{className:N[`select__option-text`],children:t})})})},sr=F.forwardRef((e,t)=>{let{children:n,className:r,isOpen:i,onClick:a,shouldTruncate:o=!1,icon:s,...c}=e;Vt(`Select.ButtonWrapper`,`icon`,`expand`,s);let{status:l}=(0,F.useContext)(L),u=Kt(`expand`),d=m(N[`select-button`],l===`warning`&&N[`select-button--warning`],l===`critical`&&N[`select-button--error`],r),f=m(N[`select-button__icon`],i&&N[`select-button__icon--reversed`]),p=m(o&&N[`select-button__text--truncated`]);return(0,I.jsxs)(`button`,{className:d,onClick:e=>{a&&a(e)},ref:t,type:`button`,...c,children:[(0,I.jsx)(Xt,{as:`span`,className:p,preset:`input`,children:n}),Ht(u)&&(0,I.jsx)(Wt,{className:f,content:u,purpose:`decorative`,size:`24px`})]})}),P.displayName=`Select`,ir.displayName=`Select.Button`,sr.displayName=`Select.ButtonWrapper`,rr.displayName=`Select.Label`,or.displayName=`Select.Option`,ar.displayName=`Select.Options`,P.Button=ir,P.ButtonWrapper=sr,P.Label=rr,P.Option=or,P.Options=ar;try{P.displayName=`Select`,P.__docgenInfo={description:`## Usage

Supports controlled and uncontrolled behavior, using a render prop in the latter case.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | A dropdown list that reveals a set of options; one can be selected. | Country selector. Sort order. Single-choice forms. |
| Searchable | Includes a text input for filtering options in real time. | Long lists (e.g., cities, tags). Large datasets. |
| Multi-select | Allows multiple options to be selected from the list. | Filter panels. Role or permission assignments. |
| Disabled | Non-interactive; used to show unavailable or inactive states. | Feature-gated selections. Incomplete forms. |
| Preselected | Default selection appears before user interacts. | Recommended settings. "Most common" default. |
| Inline | Embedded within table rows or compact UIs. | Editable data tables. Quick action cells. |

### Best Practices

* Select can be used in forms and is meant to pick a value from a list of values, whereas Menus can be used for things like commands.
* Order the menu options logically to make it easier for users to find the option they want. Default to alphabetical order.
* Use a Select input for longer lists of options. A Select should never have only 2 options; 3 selections can be acceptable, but consider a Checkbox group or Radio button group instead so users can see all options at once.
* Keep the select menu the same width as the select field that triggered it.

## Interaction

In single-select mode, only one selection can be made. In multi-select mode, one or more selections can be made from the list.

## Content & Accessibility

### Do's

* Use short, precise labels whenever possible.
* Avoid truncated items.
* In short lists, order from most common to least common choices.
* In longer lists use alphabetical order, but if there are 2 or 3 very common selections, consider repeating them at the top of the list.
* Use sentence case.
* Place the most common choices at the top of the list to assist visually impaired users.

### Don'ts

* Use periods at the end of labels.
* Place placeholder text within the field; it can cause accessibility issues with color contrast, inconsistent screen-reader behavior, and text disappearing as users type.

## Resources

* https://headlessui.com/react/menu`,displayName:`Select`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling.`,name:`className`,required:!1,tags:{},type:{name:`any`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | { [k: string]: unknown; }`}},defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`string | { [k: string]: unknown; }`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((value: string | { [k: string]: unknown; }) => void)`}},by:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`by`,required:!1,tags:{},type:{name:`ByComparator<{ [k: string]: unknown; }>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},horizontal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`horizontal`,required:!1,tags:{},type:{name:`boolean`}},form:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`form`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Name of the form element, which triggers the generation of hidden key/value form fields (e.g. \`name=$name[$key]\`).

See: https://headlessui.com/react/listbox#using-with-html-forms`,name:`name`,required:!1,tags:{},type:{name:`string`}},multiple:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`multiple`,required:!1,tags:{},type:{name:`boolean`}},__demoMode:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`__demoMode`,required:!1,tags:{},type:{name:`boolean`}},optionsClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Optional className for additional options menu styling.

When not using the compact variant, if optionsClassName is provided please
include the width property to define the options menu width.`,name:`optionsClassName`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Indicates that field is required for form to be successfully submitted`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Text under the textarea used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}},labelLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Whether the label is adjacent to the field (horizontal) or above the field (vertical)

**Default is \`"vertical"\`**.`,name:`labelLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{P.Button.displayName=`Select.Button`,P.Button.__docgenInfo={description:"The trigger for the select component, which is usually a form of `Button` or some targetable/clickable component",displayName:`Select.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},isOpen:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Indicates state of the select, used to style the button.`,name:`isOpen`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{P.Label.displayName=`Select.Label`,P.Label.__docgenInfo={description:``,displayName:`Select.Label`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},passive:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`passive`,required:!1,tags:{},type:{name:`boolean`}},htmlFor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`htmlFor`,required:!1,tags:{},type:{name:`string`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLLabelElement>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{P.Option.displayName=`Select.Option`,P.Option.__docgenInfo={description:`Represents one of the available options for selection`,displayName:`Select.Option`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`unknown`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverListItem/PopoverListItem.tsx`,name:`TypeLiteral`}],description:`Text below the main menu item call-to-action, briefly describing the menu item's function`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},optionClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`optionClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{P.Options.displayName=`Select.Options`,P.Options.__docgenInfo={description:`The content container showing the available options when the trigger is activated`,displayName:`Select.Options`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},anchor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`anchor`,required:!1,tags:{},type:{name:`AnchorPropsWithSelection`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{}}}catch{}})))()}var R,lr,ur,dr,fr,z,pr,mr,B,hr,V,H,U,W,G,K,gr,q,J,Y,X,_r,vr,yr,br,xr,Z,Q,Sr,Cr,wr,Tr,Er,Dr,$,Or,kr;function Ar(){return(Ar=t((()=>{n(),cr(),Zt(),Gt(),R=r(),{expect:lr,userEvent:ur,within:dr}=__STORYBOOK_MODULE_TEST__,fr={title:`Components/Select`,component:P,parameters:{docs:{subtitle:`A popover that reveals or hides a list of options. Depending on the component's configuration, the user may select one or more options.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{multiple:{description:`Whether multiple values are allowed in this instance`},value:{table:{description:`The value of the select field (when controlled)`}},defaultValue:{description:`The default value of the select field (when uncontrolled)`},__demoMode:{table:{disable:!0}},onClick:{description:"Optional click handler. Fires after `onChange`, when a value in the dropdown popover is picked",table:{type:{summary:`SyntheticEvent`,detail:`See: https://react.dev/reference/react-dom/components/common#react-event-object`},default:`void`}},children:{control:!1},onChange:{description:`Optional change handler. Fires when a value is selected (and passes in list of selected values)`}},tags:[`autodocs`,`version:4.0.1`]},z=[{key:`1`,label:`Dogs`,subLabel:`Who's a good boy?`},{key:`2`,label:`Cats`,subLabel:`Super independent.`},{key:`3`,label:`Birds`,subLabel:`Living relics!`},{key:`4`,label:`Rabbits`,subLabel:`Langomorphs are rad.`}],pr=async e=>{let{canvasElement:t}=e,n=await dr(t).findByRole(`button`);await ur.click(n)},mr=async e=>{let{canvasElement:t}=e,n=await dr(t).findByRole(`button`);await pr(e);let r=await dr(document.body).findByText(`Cats`);await ur.click(r),await ur.click(n)},B={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:z[0],name:`select`,className:`w-60`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},hr={args:{...B.args,className:`w-60`,labelLayout:`horizontal`,label:`Animal?`},parameters:{...B.parameters}},V={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:z[0],name:`standard-button`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:`- Select Option -`}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},H={args:{...B.args,onChange:e=>console.log(`changed to`,e),children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,onClick:e=>console.log(`custom click`),children:e.label})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},U={args:{...B.args,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{onClick:e=>console.log(`external click`),children:`- Select Option -`}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]}),onChange:e=>console.log(`external change`,e)}},W={args:{...B.args,"aria-label":`Favorite Animal`,defaultValue:z[1]}},G={args:{...W.args,defaultValue:{...z[1]},by:`key`}},K={args:{...B.args,subLabel:`Additional descriptive text`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})},parameters:{docs:{source:{code:`
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
        {value.label}
      </Select.ButtonWrapper>
    )}
  </Select.Button>
  <Select.Options>
  {exampleOptions.map((option) => (
    <Select.Option key={option.key} value={option}>
      {option.label}
    </Select.Option>
  ))}
  </Select.Options>
</Select>`}}}},gr={args:{...B.args,fieldNote:`Choose your beast`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})},parameters:{...B.parameters}},q={args:{...B.args,fieldNote:`Choose your beast`,optionsClassName:`w-[384px]`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{anchor:{to:`bottom end`,gap:12},children:z.map(e=>(0,R.jsx)(P.Option,{subLabel:e.subLabel,value:e,children:e.label},e.key))})]})},parameters:{...B.parameters,snapshot:{skip:!0}},play:pr},J={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:z[0],name:`select`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(`button`,{className:`fpo`,children:{Birds:`🐦🦆🦜`,Dogs:`🐶🐕🐩`,Cats:`🐈🐱🐈‍⬛`,Rabbits:`🐇🐰`}[e.label]})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},Y={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:z[0],name:`select`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},X={args:{...B.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`select-field`,defaultValue:[z[0]],className:`w-[240px]`,name:`standard-button`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsxs)(P.ButtonWrapper,{isOpen:t,children:[e.length>0?e.length:`none`,` selected`,` `]})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})},parameters:{snapshot:{skip:!0}},play:pr},_r={args:{...B.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`dropdown`,defaultValue:[z[0]],className:`w-[240px]`,name:`standard-button`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsxs)(P.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:[e.length>0?e.length:`none`,` long selected description`]})}),(0,R.jsx)(P.Options,{children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})}},vr={args:{...B.args,className:`w-[240px]`}},yr={args:{...B.args,defaultValue:`test3`,className:`w-[240px]`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:e})}),(0,R.jsx)(P.Options,{children:Array(30).fill(`test`).map((e,t)=>(0,R.jsxs)(P.Option,{value:e+t,children:[e,t]},`${e}-${t}`))})]})},play:async e=>{let t=await dr(e.canvasElement).findByRole(`button`);await pr(e),await ur.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}`),await lr(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{layout:`centered`,chromatic:{delay:450},snapshot:{skip:!0}},decorators:[e=>(0,R.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})]},br={args:{...B.args,className:`w-[160px]`,optionsClassName:`w-[384px]`},play:mr,parameters:{chromatic:{diffIncludeAntiAliasing:!1,diffThreshold:.75},docs:{...B.parameters?.docs},snapshot:{skip:!0}},decorators:[e=>(0,R.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})]},xr={args:{...B.args,subLabel:`Some descriptive text`,disabled:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{...B.parameters?.docs},snapshot:{skip:!0}}},Z={args:{...B.args,required:!0,showHint:!0,className:`w-[384px]`,subLabel:`Some descriptive text`},parameters:{...B.parameters}},Q={args:{...B.args,required:!1,showHint:!0,subLabel:`Some descriptive text`,className:`w-[384px]`},parameters:{...B.parameters}},Sr={args:{...Z.args,status:`critical`,fieldNote:`Some text describing error`},parameters:{...Z.parameters}},Cr={args:{...Q.args,status:`warning`,fieldNote:`Some text describing warning`},parameters:{...Q.parameters}},wr={args:{...B.args,label:void 0,"aria-label":`hidden label`},parameters:{...B.parameters}},Tr={args:{...B.args,label:void 0,"aria-label":`hidden label`,required:!0,className:`w-[384px]`},parameters:{...B.parameters}},Er={args:{...B.args,disabled:!0,required:!0,showHint:!0,className:`w-[384px]`},parameters:{docs:{...B.parameters?.docs},snapshot:{skip:!0}}},Dr={args:{...B.args,optionsClassName:`w-[384px]`,children:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Button,{children:({value:e,open:t,disabled:n})=>(0,R.jsx)(P.ButtonWrapper,{isOpen:t,children:e.label})}),(0,R.jsx)(P.Options,{anchor:{to:`bottom end`,gap:12},children:z.map(e=>(0,R.jsx)(P.Option,{value:e,children:e.label},e.key))})]})},play:mr,decorators:[e=>(0,R.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},$={...B,parameters:{layout:`centered`,chromatic:{delay:300,disableSnapshot:!0},docs:{...B.parameters?.docs},snapshot:{skip:!0}},play:mr},Or={...B,decorators:[e=>(0,R.jsx)(qt,{icons:Qt,children:e()})]},kr=`Default.HorizontalLabel.WithStandardButton.EventHandlingOnRenderProp.EventHandlingOnStandardButton.WithSelectedOption.WithSelectedBy.WithFieldName.WithFieldNote.WithSubLabels.UncontrolledHeadless.StyledUncontrolled.Multiple.MultipleWithTruncation.AdjustedWidth.LongOptionList.SeparateButtonAndMenuWidth.Disabled.Required.Optional.Error.Warning.NoVisibleLabel.NoVisibleLabelButRequired.DisabledRequired.OptionsRightAligned.OpenByDefault.WithProvidedIcons`.split(`.`),B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    className: 'w-60',
    children: <>
        <Select.Button>
          {({
          value,
          open
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...B.parameters?.docs?.source},description:{story:`The simplest and default case, using the options, button, and button wrapper in the render prop.
This shows how to reflect the value in the button upon selection, and how to generate
a set of options from a list.

**NOTE**: for select value data types, \`{label: string}\` is required, but any other key/value pairs are allowed.

For detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Select/Select.stories.tsx).`,...B.parameters?.docs?.description}}},hr.parameters={...hr.parameters,docs:{...hr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-60',
    labelLayout: 'horizontal',
    label: 'Animal?'
  },
  parameters: {
    ...Default.parameters
  }
}`,...hr.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'standard-button',
    children: <>
        <Select.Button>- Select Option -</Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...V.parameters?.docs?.source},description:{story:"Instead of a render prop for `Select.Button`, you can forego the render prop for the button and use static text instead.\nThis mode is also useful if you want to use a controlled component and manage state yourself.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: (args: SelectOption) => console.log('changed to', args),
    children: <>
        <Select.Button>
          {({
          value,
          open
        }) => <Select.ButtonWrapper isOpen={open} onClick={args => console.log('custom click')}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...H.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nYou can also add an `onClick` handler to `.ButtonWrapper` if using a render prop\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <Select.Button onClick={(ev: MouseEvent) => console.log('external click')}>
          - Select Option -
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>,
    onChange: (args: SelectOption) => console.log('external change', args)
  }
}`,...U.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nIf not using a render prop, you can also add an `onClick` handler to `Select.Button` directly\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked\n\n**NOTE**: `onClick` has no function when using a render prop",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    'aria-label': 'Favorite Animal',
    defaultValue: exampleOptions[1]
  }
}`,...W.parameters?.docs?.source},description:{story:`You can select a different option to show when rendered.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedOption.args,
    defaultValue: {
      ...exampleOptions[1]
    },
    by: 'key'
  }
}`,...G.parameters?.docs?.source},description:{story:"Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.\n- The type comparison can be by a named key in the object `by={'id'}` or using a comparison function\n\nSee: https://headlessui.com/v1/react/listbox#listbox",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subLabel: 'Additional descriptive text',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
        {value.label}
      </Select.ButtonWrapper>
    )}
  </Select.Button>
  <Select.Options>
  {exampleOptions.map((option) => (
    <Select.Option key={option.key} value={option}>
      {option.label}
    </Select.Option>
  ))}
  </Select.Options>
</Select>\`
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:'You can add a `name` prop to generate form fields for the value object.\n\nIn this example, the field name is `"interactive-select"`, and the value is an object storing `{label: string, key: string}`.\n\nThis will generate hidden fields with names:\n* `interactive-select[label]`\n* `interactive-select[key]`',...K.parameters?.docs?.description}}},gr.parameters={...gr.parameters,docs:{...gr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    ...Default.parameters
  }
}`,...gr.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    optionsClassName: 'w-[384px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options anchor={{
        to: 'bottom end',
        gap: 12
      }}>
          {exampleOptions.map(option => <Select.Option key={option.key} subLabel={option.subLabel} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...q.parameters?.docs?.source},description:{story:`This demonstrates how select items can also have an optional subLabel attached to give more details about the option.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <button className="fpo">
              {{
            Birds: '🐦🦆🦜',
            Dogs: '🐶🐕🐩',
            Cats: '🐈🐱🐈‍⬛',
            Rabbits: '🐇🐰'
          }[value.label as string]}
            </button>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...J.parameters?.docs?.source},description:{story:`You can implement a \`Select.Button\` with a render prop. This exposes several useful values to
control the appearance of the rendered button. The render prop case is "Headless", in that it has
no styling by default.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,...Y.parameters?.docs?.source},description:{story:"You can use `Select.ButtonWrapper` to borrow the existing style used for controlled `Select` components.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'select-field',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.length > 0 ? value.length : 'none'} selected{' '}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...X.parameters?.docs?.source},description:{story:"You can select multiple values by passing `multiple` to the parent element. When doing this,\nmake sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead\nof an object or value for the individual `Select.Option` entries.\n\nWhen handling the button text, `value` represents the data for all options selected. This allows for a flexible\nlayout to fit the needs of the design.\n\nHidden form inputs are generated for each option selected and take the following form:\n- `name[arrayIndex][key]`\n- `name[arrayIndex][value]`\n\nYou can add arbitrary content to `.ButtonWrapper`, to render selection for each option. `value` is an array and represents all selected values.",...X.parameters?.docs?.description}}},_r.parameters={..._r.parameters,docs:{..._r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'dropdown',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value.length > 0 ? value.length : 'none'} long selected
              description
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  }
}`,..._r.parameters?.docs?.source},description:{story:"The component provides some basic styles to handle long text in the provided field. Use\n`shouldTruncate` on `.ButtonWrapper` to truncate the text with an ellipsis.",..._r.parameters?.docs?.description}}},vr.parameters={...vr.parameters,docs:{...vr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[240px]'
  }
}`,...vr.parameters?.docs?.source},description:{story:`The field trigger width can be set with utility classes. By default, dropdown popover will exppand to match the width.`,...vr.parameters?.docs?.description}}},yr.parameters={...yr.parameters,docs:{...yr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'test3',
    className: 'w-[240px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options>
          {Array(30).fill('test').map((option, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <Select.Option key={\`\${option}-\${index}\`} value={option + index}>
                {option}
                {index}
              </Select.Option>)}
        </Select.Options>
      </>
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const selectButton = await canvas.findByRole('button');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
    await expect(selectButton.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    layout: 'centered',
    chromatic: {
      delay: 450
    },
    snapshot: {
      skip: true
    }
  },
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>]
}`,...yr.parameters?.docs?.source},description:{story:`We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
keyboard navigation (showing the items off the edge of the screen) is handled when used.`,...yr.parameters?.docs?.description}}},br.parameters={...br.parameters,docs:{...br.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]'
  },
  play: selectCat,
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.75
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  },
  decorators: [Story => <div className="p-spacing-size-4">{Story()}</div>]
}`,...br.parameters?.docs?.source},description:{story:`If you want a different width for the trigger and the dropdown popover, you can control them separately.`,...br.parameters?.docs?.description}}},xr.parameters={...xr.parameters,docs:{...xr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    subLabel: 'Some descriptive text',
    disabled: true
  },
  parameters: {
    a11y: {
      config: {
        rules: [
        // Disabled input does not need to meet color contrast
        {
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  }
}`,...xr.parameters?.docs?.source},description:{story:`Each Select can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
will show the selected value).`,...xr.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text'
  },
  parameters: {
    ...Default.parameters
  }
}`,...Z.parameters?.docs?.source},description:{story:"Select fields can be marked as required by using the `required` prop.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]'
  },
  parameters: {
    ...Default.parameters
  }
}`,...Q.parameters?.docs?.source},description:{story:"Fields can be marked as optional by using `required` as false, but `showHint` as true.",...Q.parameters?.docs?.description}}},Sr.parameters={...Sr.parameters,docs:{...Sr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error'
  },
  parameters: {
    ...Required.parameters
  }
}`,...Sr.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "error".`,...Sr.parameters?.docs?.description}}},Cr.parameters={...Cr.parameters,docs:{...Cr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning'
  },
  parameters: {
    ...Optional.parameters
  }
}`,...Cr.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "warning".`,...Cr.parameters?.docs?.description}}},wr.parameters={...wr.parameters,docs:{...wr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label'
  },
  parameters: {
    ...Default.parameters
  }
}`,...wr.parameters?.docs?.source},description:{story:"Having a visible label is not necessary. In those cases, use `aria-label` to set a accessible label for the field",...wr.parameters?.docs?.description}}},Tr.parameters={...Tr.parameters,docs:{...Tr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]'
  },
  parameters: {
    ...Default.parameters
  }
}`,...Tr.parameters?.docs?.source},description:{story:"No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.",...Tr.parameters?.docs?.description}}},Er.parameters={...Er.parameters,docs:{...Er.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    required: true,
    showHint: true,
    className: 'w-[384px]'
  },
  parameters: {
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  }
}`,...Er.parameters?.docs?.source},description:{story:"`Select` can be both disabled and required.",...Er.parameters?.docs?.description}}},Dr.parameters={...Dr.parameters,docs:{...Dr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    optionsClassName: 'w-[384px]',
    children: <>
        <Select.Button>
          {({
          value,
          open,
          disabled
        }) => <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>}
        </Select.Button>
        <Select.Options anchor={{
        to: 'bottom end',
        gap: 12
      }}>
          {exampleOptions.map(option => <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>)}
        </Select.Options>
      </>
  },
  play: selectCat,
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...Dr.parameters?.docs?.source},description:{story:`Options for each \`Select\` can be aligned on different sides of the target button.

More information: https://headlessui.com/react/popover`,...Dr.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    layout: 'centered',
    chromatic: {
      delay: 300,
      disableSnapshot: true
    },
    docs: {
      ...Default.parameters?.docs
    },
    snapshot: {
      skip: true
    }
  },
  play: selectCat
}`,...$.parameters?.docs?.source},description:{story:"This shows the contents of `Select` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.",...$.parameters?.docs?.description}}},Or.parameters={...Or.parameters,docs:{...Or.parameters?.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...Or.parameters?.docs?.source},description:{story:"The indicator marks the button as the thing that opens the options, which is the same\n`expand` role a `Menu.Button` or an `Accordion` row carries, so it comes from\n`IconProvider`. The CSS still flips it when the listbox opens.",...Or.parameters?.docs?.description}}}})))()}Ar();export{vr as AdjustedWidth,B as Default,xr as Disabled,Er as DisabledRequired,Sr as Error,H as EventHandlingOnRenderProp,U as EventHandlingOnStandardButton,hr as HorizontalLabel,yr as LongOptionList,X as Multiple,_r as MultipleWithTruncation,wr as NoVisibleLabel,Tr as NoVisibleLabelButRequired,$ as OpenByDefault,Q as Optional,Dr as OptionsRightAligned,Z as Required,br as SeparateButtonAndMenuWidth,Y as StyledUncontrolled,J as UncontrolledHeadless,Cr as Warning,K as WithFieldName,gr as WithFieldNote,Or as WithProvidedIcons,G as WithSelectedBy,W as WithSelectedOption,V as WithStandardButton,q as WithSubLabels,kr as __namedExportsOrder,fr as default};