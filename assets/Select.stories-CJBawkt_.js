import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,r,t as i}from"./react-DYrPrLM4.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{t as o}from"./react-dom-BREnkGEY.js";import{a as s,c,l,n as u,o as d,s as f,t as p,u as m}from"./use-resolve-button-type-CuVdq4si.js";import{n as h,t as g}from"./clsx-DSXoiAHx.js";import{C as _,S as v,T as y,_ as b,b as x,c as S,g as C,i as w,n as T,o as E,p as D,r as ee,s as te,u as O,v as ne,w as re,x as ie,y as ae}from"./use-sync-refs-DUAfKZs7.js";import{_ as oe,b as k,g as se,n as A,t as ce,u as le,v as ue}from"./keyboard-ChMbcLRr.js";import{a as de,i as fe,o as pe,r as me}from"./description-0Crf27_w.js";import{a as he,c as ge,i as _e,l as ve,n as ye,o as be,r as xe,s as Se}from"./form-fields-C4QvbWFa.js";import{a as Ce,c as we,i as Te,n as Ee,r as De,s as Oe}from"./label-CZIHhwcX.js";import{a as ke,i as Ae,r as je,t as Me}from"./frozen-BOuN2n_A.js";import{a as Ne,c as Pe,i as Fe,l as Ie,n as Le,o as Re,r as ze,s as Be,t as Ve}from"./floating-A0zP-Fdy.js";import{a as j,c as He,d as Ue,f as We,i as Ge,l as Ke,m as qe,n as Je,o as Ye,p as Xe,r as Ze,s as Qe,t as $e,u as et}from"./element-movement-CpheWpjz.js";import{A as tt,B as nt,E as rt,F as it,G as at,H as ot,O as st,P as ct,R as M,T as lt,U as ut,V as dt,W as ft,c as pt,f as mt,h as ht,k as gt,l as _t,m as vt,n as yt,p as bt,r as xt,s as St,u as Ct,w as wt,z as Tt}from"./portal--_7TmWlv.js";import{n as Et,t as Dt}from"./use-inert-others-MRmXp-Vr.js";import{a as Ot,c as kt,n as At,o as jt,r as Mt,s as Nt,t as Pt}from"./open-closed-CYvi6hWK.js";import{n as Ft,t as It}from"./use-text-value-BA8Bxxj2.js";import{i as Lt,n as Rt}from"./logging-BrlTfB4E.js";import{n as zt,r as Bt,t as Vt}from"./IconSlot-Bgafg7Wg.js";import{n as Ht,r as Ut,t as Wt}from"./IconProvider-5iUAjgU2.js";import{n as Gt,r as Kt,t as qt}from"./Text-_oSiCe49.js";import{n as Jt,t as Yt}from"./semanticIconOverrides-DR0LTV8c.js";import{n as Xt,t as Zt}from"./PopoverContainer-DfbaAutc.js";import{n as Qt,t as $t}from"./PopoverListItem-CpOlZ_Td.js";import{n as en,t as tn}from"./Checkbox-X774VUUQ.js";import{n as nn,t as rn}from"./FieldLabel-DNEJwhal.js";import{n as an,t as on}from"./FieldNote-CfaSDTyh.js";import{n as sn,t as cn}from"./Radio-N62i4Qt3.js";function ln(e,t=e=>e){let n=e.activeOptionIndex===null?null:e.options[e.activeOptionIndex],r=wt(t(e.options.slice()),e=>e.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}var un,dn,fn,N,P,pn,mn,hn,gn;function _n(){return(_n=t((()=>{ft(),nt(),Qe(),Ze(),tt(),un=Object.defineProperty,dn=(e,t,n)=>t in e?un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fn=(e,t,n)=>(dn(e,typeof t==`symbol`?t:t+``,n),n),N=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(N||{}),P=(e=>(e[e.Single=0]=`Single`,e[e.Multi=1]=`Multi`,e))(P||{}),pn=(e=>(e[e.Pointer=0]=`Pointer`,e[e.Other=1]=`Other`,e))(pn||{}),mn=(e=>(e[e.OpenListbox=0]=`OpenListbox`,e[e.CloseListbox=1]=`CloseListbox`,e[e.GoToOption=2]=`GoToOption`,e[e.Search=3]=`Search`,e[e.ClearSearch=4]=`ClearSearch`,e[e.SelectOption=5]=`SelectOption`,e[e.RegisterOptions=6]=`RegisterOptions`,e[e.UnregisterOptions=7]=`UnregisterOptions`,e[e.SetButtonElement=8]=`SetButtonElement`,e[e.SetOptionsElement=9]=`SetOptionsElement`,e[e.SortOptions=10]=`SortOptions`,e[e.MarkButtonAsMoved=11]=`MarkButtonAsMoved`,e))(mn||{}),hn={1(e){if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.buttonElement?Je.Tracked($e(e.buttonElement)):e.buttonPositionState;return{...e,activeOptionIndex:null,pendingFocus:{focus:j.Nothing},listboxState:1,__demoMode:!1,buttonPositionState:t}},0(e,t){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,i=e.options.findIndex(e=>r(e.dataRef.current.value));return i!==-1&&(n=i),{...e,frozenValue:!1,pendingFocus:t.focus,listboxState:0,activeOptionIndex:n,__demoMode:!1,buttonPositionState:Je.Idle}},2(e,t){if(e.dataRef.current.disabled||e.listboxState===1)return e;let n={...e,searchQuery:``,activationTrigger:t.trigger??1,__demoMode:!1};if(t.focus===j.Nothing)return{...n,activeOptionIndex:null};if(t.focus===j.Specific)return{...n,activeOptionIndex:e.options.findIndex(e=>e.id===t.id)};if(t.focus===j.Previous){let r=e.activeOptionIndex;if(r!==null){let i=e.options[r].dataRef.current.domRef,a=Ye(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.options[a].dataRef.current.domRef;if(i.current?.previousElementSibling===t.current||t.current?.previousElementSibling===null)return{...n,activeOptionIndex:a}}}}else if(t.focus===j.Next){let r=e.activeOptionIndex;if(r!==null){let i=e.options[r].dataRef.current.domRef,a=Ye(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(a!==null){let t=e.options[a].dataRef.current.domRef;if(i.current?.nextElementSibling===t.current||t.current?.nextElementSibling===null)return{...n,activeOptionIndex:a}}}}let r=ln(e),i=Ye(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...n,...r,activeOptionIndex:i}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=+(e.searchQuery===``),r=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex===null?e.options:e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n))).find(e=>!e.dataRef.current.disabled&&e.dataRef.current.textValue?.startsWith(r)),a=i?e.options.indexOf(i):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===``?e:{...e,searchQuery:``}},5(e){return e.dataRef.current.mode===0?{...e,frozenValue:!0}:{...e}},6:(e,t)=>{let n=e.options.concat(t.options),r=e.activeOptionIndex;if(e.pendingFocus.focus!==j.Nothing&&(r=Ye(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled})),e.activeOptionIndex===null){let{isSelected:t}=e.dataRef.current;if(t){let e=n.findIndex(e=>t?.(e.dataRef.current.value));e!==-1&&(r=e)}}return{...e,options:n,activeOptionIndex:r,pendingFocus:{focus:j.Nothing},pendingShouldSort:!0}},7:(e,t)=>{let n=e.options,r=[],i=new Set(t.options);for(let[e,t]of n.entries())if(i.has(t.id)&&(r.push(e),i.delete(t.id),i.size===0))break;if(r.length>0){n=n.slice();for(let e of r.reverse())n.splice(e,1)}return{...e,options:n,activationTrigger:1}},8:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},9:(e,t)=>e.optionsElement===t.element?e:{...e,optionsElement:t.element},10:e=>e.pendingShouldSort?{...e,...ln(e),pendingShouldSort:!1}:e,11(e){return e.buttonPositionState.kind===`Tracked`?{...e,buttonPositionState:Je.Moved}:e}},gn=class e extends ut{constructor(e){super(e),fn(this,`actions`,{onChange:e=>{let{onChange:t,compare:n,mode:r,value:i}=this.state.dataRef.current;return D(r,{0:()=>t?.(e),1:()=>{let r=i.slice(),a=r.findIndex(t=>n(t,e));return a===-1?r.push(e):r.splice(a,1),t?.(r)}})},registerOption:at(()=>{let e=[],t=new Set;return[(n,r)=>{t.has(r)||(t.add(r),e.push({id:n,dataRef:r}))},()=>(t.clear(),this.send({type:6,options:e.splice(0)}))]}),unregisterOption:at(()=>{let e=[];return[t=>e.push(t),()=>{this.send({type:7,options:e.splice(0)})}]}),goToOption:at(()=>{let e=null;return[(t,n)=>{e={type:2,...t,trigger:n}},()=>e&&this.send(e)]}),closeListbox:()=>{this.send({type:1})},openListbox:e=>{this.send({type:0,focus:e})},selectActiveOption:()=>{var e;if(this.state.activeOptionIndex!==null){let{dataRef:e}=this.state.options[this.state.activeOptionIndex];this.actions.selectOption(e.current.value)}else this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(e=this.state.buttonElement)==null||e.focus({preventScroll:!0}))},selectOption:e=>{this.send({type:5,value:e})},search:e=>{this.send({type:3,value:e})},clearSearch:()=>{this.send({type:4})},setButtonElement:e=>{this.send({type:8,element:e})},setOptionsElement:e=>{this.send({type:9,element:e})}}),fn(this,`selectors`,{activeDescendantId(e){var t;let n=e.activeOptionIndex,r=e.options;return n===null||(t=r[n])==null?void 0:t.id},isActive(e,t){let n=e.activeOptionIndex,r=e.options;return n!==null&&r[n]?.id===t},hasFrozenValue(e){return e.frozenValue},shouldScrollIntoView(e,t){return e.__demoMode||e.listboxState!==0||e.activationTrigger===0?!1:this.isActive(e,t)},didButtonMove(e){return e.buttonPositionState.kind===`Moved`}}),this.on(6,()=>{requestAnimationFrame(()=>{this.send({type:10})})});{let e=this.state.id,t=ot.get(null);this.disposables.add(t.on(dt.Push,n=>{!t.selectors.isTop(n,e)&&this.state.listboxState===0&&this.actions.closeListbox()})),this.on(0,()=>t.actions.push(e)),this.on(1,()=>t.actions.pop(e))}this.disposables.group(e=>{this.on(1,t=>{t.buttonElement&&(e.dispose(),e.add(Ge(t.buttonElement,t.buttonPositionState,()=>{this.send({type:11})})))})}),this.on(5,(e,t)=>{var n;this.actions.onChange(t.value),this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(n=this.state.buttonElement)==null||n.focus({preventScroll:!0}))})}static new({id:t,__demoMode:n=!1}){return new e({id:t,dataRef:{current:{}},listboxState:+!n,options:[],searchQuery:``,activeOptionIndex:null,activationTrigger:1,buttonElement:null,optionsElement:null,pendingShouldSort:!1,pendingFocus:{focus:j.Nothing},frozenValue:!1,__demoMode:n,buttonPositionState:Je.Idle})}reduce(e,t){return D(t.type,hn,e,t)}}})))()}function vn(e){let t=(0,bn.useContext)(xn);if(t===null){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,yn),t}return t}function yn({id:e,__demoMode:t=!1}){let n=(0,bn.useMemo)(()=>gn.new({id:e,__demoMode:t}),[]);return St(()=>n.dispose()),n}var bn,xn;function Sn(){return(Sn=t((()=>{bn=r(),pt(),_n(),xn=(0,bn.createContext)(null)})))()}function Cn(e){let t=(0,F.useContext)(An);if(t===null){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Cn),t}return t}function wn(e,t){let n=(0,i.useId)(),r=de(),{value:a,defaultValue:o,form:s,name:c,onChange:l,by:u,invalid:d=!1,disabled:f=r||!1,horizontal:p=!1,multiple:m=!1,__demoMode:h=!1,...g}=e,_=p?`horizontal`:`vertical`,v=ee(t),y=Se(o),[b=m?[]:void 0,x]=ge(a,l,y),S=yn({id:n,__demoMode:h}),C=(0,F.useRef)({static:!1,hold:!1}),w=(0,F.useRef)(new Map),T=ke(u),te=(0,F.useCallback)(e=>D(O.mode,{[P.Multi]:()=>b.some(t=>T(t,e)),[P.Single]:()=>T(b,e)}),[b]),O=oe({value:b,disabled:f,invalid:d,mode:m?P.Multi:P.Single,orientation:_,onChange:x,compare:T,isSelected:te,optionsPropsRef:C,listRef:w});ie(()=>{S.state.dataRef.current=O},[O]);let ne=M(S,e=>e.listboxState),re=ot.get(null),ae=M(re,(0,F.useCallback)(e=>re.selectors.isTop(e,n),[re,n])),[k,se]=M(S,e=>[e.buttonElement,e.optionsElement]);ht(ae,[k,se],(e,t)=>{S.send({type:mn.CloseListbox}),lt(t,rt.Loose)||(e.preventDefault(),k?.focus())});let A=oe({open:ne===N.Open,disabled:f,invalid:d,value:b}),[ce,le]=De({inherit:!0}),ue={ref:v},fe=(0,F.useCallback)(()=>{if(y!==void 0)return x?.(y)},[x,y]),pe=E();return F.createElement(le,{value:ce,props:{htmlFor:k?.id},slot:{open:ne===N.Open,disabled:f}},F.createElement(Ve,null,F.createElement(xn.Provider,{value:S},F.createElement(An.Provider,{value:O},F.createElement(Pt,{value:D(ne,{[N.Open]:At.Open,[N.Closed]:At.Closed})},c!=null&&b!=null&&F.createElement(xe,{disabled:f,data:{[c]:b},form:s,onReset:fe}),pe({ourProps:ue,theirProps:g,slot:A,defaultTag:jn,name:`Listbox`}))))))}function Tn(e,t){let n=(0,i.useId)(),r=we(),a=Cn(`Listbox.Button`),o=vn(`Listbox.Button`),{id:s=r||`headlessui-listbox-button-${n}`,disabled:c=a.disabled||!1,autoFocus:u=!1,...m}=e,h=ee(t,Le(),o.actions.setButtonElement),g=Ne(),[_,v,y]=M(o,e=>[e.listboxState,e.buttonElement,e.optionsElement]),x=_===N.Open;et(x,{trigger:v,action:(0,F.useCallback)(e=>{if(v!=null&&v.contains(e.target))return Ue.Ignore;let t=e.target.closest(`[role="option"]:not([data-disabled])`);return le(t)?Ue.Select(t):y!=null&&y.contains(e.target)?Ue.Ignore:Ue.Close},[v,y]),close:o.actions.closeListbox,select:o.actions.selectActiveOption});let S=b(e=>{switch(e.key){case A.Enter:_e(e.currentTarget);break;case A.Space:case A.ArrowDown:e.preventDefault(),o.actions.openListbox({focus:a.value?j.Nothing:j.First});break;case A.ArrowUp:e.preventDefault(),o.actions.openListbox({focus:a.value?j.Nothing:j.Last})}}),C=b(e=>{switch(e.key){case A.Space:e.preventDefault()}}),w=qe(e=>{var t;o.state.listboxState===N.Open?((0,kn.flushSync)(()=>o.actions.closeListbox()),(t=o.state.buttonElement)==null||t.focus({preventScroll:!0})):(e.preventDefault(),o.actions.openListbox({focus:j.Nothing}))}),T=b(e=>e.preventDefault()),D=Ee([s]),O=fe(),{isFocusVisible:ne,focusProps:re}=f({autoFocus:u}),{isHovered:ie,hoverProps:ae}=l({isDisabled:c}),{pressed:k,pressProps:se}=d({disabled:c}),ce=oe({open:_===N.Open,active:k||_===N.Open,disabled:c,invalid:a.invalid,value:a.value,hover:ie,focus:ne,autofocus:u}),ue=M(o,e=>e.listboxState===N.Open),de=te(g(),{ref:h,id:s,type:p(e,v),"aria-haspopup":`listbox`,"aria-controls":y?.id,"aria-expanded":ue,"aria-labelledby":D,"aria-describedby":O,disabled:c||void 0,autoFocus:u,onKeyDown:S,onKeyUp:C,onKeyPress:T},w,re,ae,se);return E()({ourProps:de,theirProps:m,slot:ce,defaultTag:Mn,name:`Listbox.Button`})}function En(e,t){let n=(0,i.useId)(),{id:r=`headlessui-listbox-options-${n}`,anchor:a,portal:o=!1,modal:s=!0,transition:c=!1,...l}=e,u=Be(a),[d,f]=(0,F.useState)(null);u&&(o=!0);let p=Cn(`Listbox.Options`),m=vn(`Listbox.Options`),[h,g,v,y]=M(m,e=>[e.listboxState,e.buttonElement,e.optionsElement,e.__demoMode]),x=bt(g),S=bt(v),C=Ot(),[w,T]=jt(c,d,C===null?h===N.Open:(C&At.Open)===At.Open);it(w,g,m.actions.closeListbox);let O=!y&&s&&h===N.Open;_t(O,S);let ne=!y&&s&&h===N.Open;Et(ne,{allowed:(0,F.useCallback)(()=>[g,v],[g,v])});let re=!M(m,m.selectors.didButtonMove)&&w,ie=M(m,m.selectors.hasFrozenValue)&&!e.static,ae=je(ie,p.value),k=(0,F.useCallback)(e=>p.compare(ae,e),[p.compare,ae]),se=M(m,e=>{var t;if(u==null||!((t=u?.to)!=null&&t.includes(`selection`)))return null;let n=e.options.findIndex(e=>k(e.dataRef.current.value));return n===-1&&(n=0),n}),ce=(()=>{if(u==null)return;if(se===null)return{...u,inner:void 0};let e=Array.from(p.listRef.current.values());return{...u,inner:{listRef:{current:e},index:se}}})(),[le,de]=ze(ce),fe=Fe(),pe=ee(t,u?le:null,m.actions.setOptionsElement,f),me=_();(0,F.useEffect)(()=>{let e=v;e&&h===N.Open&&(ue(e)||e==null||e.focus({preventScroll:!0}))},[h,v]);let he=b(e=>{var t;switch(me.dispose(),e.key){case A.Space:if(m.state.searchQuery!==``)return e.preventDefault(),e.stopPropagation(),m.actions.search(e.key);case A.Enter:e.preventDefault(),e.stopPropagation(),m.actions.selectActiveOption();break;case D(p.orientation,{vertical:A.ArrowDown,horizontal:A.ArrowRight}):return e.preventDefault(),e.stopPropagation(),m.actions.goToOption({focus:j.Next});case D(p.orientation,{vertical:A.ArrowUp,horizontal:A.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),m.actions.goToOption({focus:j.Previous});case A.Home:case A.PageUp:return e.preventDefault(),e.stopPropagation(),m.actions.goToOption({focus:j.First});case A.End:case A.PageDown:return e.preventDefault(),e.stopPropagation(),m.actions.goToOption({focus:j.Last});case A.Escape:e.preventDefault(),e.stopPropagation(),(0,kn.flushSync)(()=>m.actions.closeListbox()),(t=m.state.buttonElement)==null||t.focus({preventScroll:!0});return;case A.Tab:e.preventDefault(),e.stopPropagation(),(0,kn.flushSync)(()=>m.actions.closeListbox()),st(m.state.buttonElement,e.shiftKey?gt.Previous:gt.Next);break;default:e.key.length===1&&(m.actions.search(e.key),me.setTimeout(()=>m.actions.clearSearch(),350))}}),ge=M(m,e=>e.buttonElement?.id),_e=oe({open:h===N.Open}),ve=te(u?fe():{},{id:r,ref:pe,"aria-activedescendant":M(m,m.selectors.activeDescendantId),"aria-multiselectable":p.mode===P.Multi||void 0,"aria-labelledby":ge,"aria-orientation":p.orientation,onKeyDown:he,role:`listbox`,tabIndex:h===N.Open?0:void 0,style:{...l.style,...de,"--button-width":Ie(w,g,!0).width},...kt(T)}),ye=E(),be=(0,F.useMemo)(()=>p.mode===P.Multi?p:{...p,isSelected:k},[p,k]);return F.createElement(xt,{enabled:o?e.static||w:!1,ownerDocument:x},F.createElement(An.Provider,{value:be},ye({ourProps:ve,theirProps:l,slot:_e,defaultTag:Pn,features:Fn,visible:re,name:`Listbox.Options`})))}function Dn(e,t){let n=(0,i.useId)(),{id:r=`headlessui-listbox-option-${n}`,disabled:a=!1,value:o,...s}=e,c=(0,F.useContext)(Nn)===!0,l=Cn(`Listbox.Option`),u=vn(`Listbox.Option`),d=M(u,e=>u.selectors.isActive(e,r)),f=l.isSelected(o),p=(0,F.useRef)(null),m=Ft(p),h=ae({disabled:a,value:o,domRef:p,get textValue(){return m()}}),g=ee(t,p,e=>{e?l.listRef.current.set(r,e):l.listRef.current.delete(r)}),_=M(u,e=>u.selectors.shouldScrollIntoView(e,r));ie(()=>{if(_)return y().requestAnimationFrame(()=>{var e,t;(t=(e=p.current)?.scrollIntoView)==null||t.call(e,{block:`nearest`})})},[_,p]),ie(()=>{if(!c)return u.actions.registerOption(r,h),()=>u.actions.unregisterOption(r)},[h,r,c]);let v=b(e=>{if(a)return e.preventDefault();u.actions.selectOption(o)}),x=b(()=>{if(a)return u.actions.goToOption({focus:j.Nothing});u.actions.goToOption({focus:j.Specific,id:r})}),S=Ke(),C=b(e=>S.update(e)),w=b(e=>{S.wasMoved(e)&&(a||d&&u.state.activationTrigger===pn.Pointer||u.actions.goToOption({focus:j.Specific,id:r},pn.Pointer))}),T=b(e=>{S.wasMoved(e)&&(a||d&&u.state.activationTrigger===pn.Pointer&&u.actions.goToOption({focus:j.Nothing}))}),D=oe({active:d,focus:d,selected:f,disabled:a,selectedOption:f&&c}),te=c?{}:{id:r,ref:g,role:`option`,tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0||void 0,"aria-selected":f,disabled:void 0,onClick:v,onFocus:x,onPointerEnter:C,onMouseEnter:C,onPointerMove:w,onMouseMove:w,onPointerLeave:T,onMouseLeave:T},O=E();return!f&&c?null:O({ourProps:te,theirProps:s,slot:D,defaultTag:In,name:`Listbox.Option`})}function On(e,t){let{options:n,placeholder:r,...i}=e,a={ref:ee(t)},o=Cn(`ListboxSelectedOption`),s=oe({}),c=o.value===void 0||o.value===null||o.mode===P.Multi&&Array.isArray(o.value)&&o.value.length===0,l=E();return F.createElement(Nn.Provider,{value:!0},l({ourProps:a,theirProps:{...i,children:F.createElement(F.Fragment,null,r&&c?r:n)},slot:s,defaultTag:Ln,name:`ListboxSelectedOption`}))}var F,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn;function Gn(){return(Gn=t((()=>{c(),m(),F=e(r(),1),kn=o(),s(),Ae(),ve(),be(),v(),Pe(),C(),Xe(),n(),Dt(),x(),ne(),ct(),vt(),mt(),We(),u(),Ct(),se(),T(),It(),He(),Nt(),pe(),Re(),ye(),Me(),Oe(),Mt(),nt(),Tt(),Qe(),re(),tt(),he(),k(),O(),me(),ce(),Ce(),yt(),_n(),Sn(),An=(0,F.createContext)(null),An.displayName=`ListboxDataContext`,jn=F.Fragment,Mn=`button`,Nn=(0,F.createContext)(!1),Pn=`div`,Fn=w.RenderStrategy|w.Static,In=`div`,Ln=F.Fragment,Rn=S(wn),zn=S(Tn),Bn=Te,Vn=S(En),Hn=S(Dn),Un=S(On),Wn=Object.assign(Rn,{Button:zn,Label:Bn,Options:Vn,Option:Hn,SelectedOption:Un})})))()}var Kn,qn,Jn,Yn,Xn,Zn,Qn,I;function $n(){return($n=t((()=>{Kn=`_select_guakg_10`,qn=`_select__overline_guakg_17`,Jn=`_select__options_guakg_32`,Yn=`_select__footer_guakg_99`,Xn=`_select__label_guakg_112`,Zn=`_select__subLabel_guakg_116`,Qn=`_select__option_guakg_32`,I={select:Kn,select__overline:qn,"select__overline--no-label":`_select__overline--no-label_guakg_25`,select__options:Jn,"select--label-layout-vertical":`_select--label-layout-vertical_guakg_37`,"select--label-layout-horizontal":`_select--label-layout-horizontal_guakg_41`,"select-button":`_select-button_guakg_52`,"select-button__icon":`_select-button__icon_guakg_78`,"select-button__text--truncated":`_select-button__text--truncated_guakg_89`,"select-button__icon--reversed":`_select-button__icon--reversed_guakg_95`,select__footer:Yn,"select--has-fieldNote":`_select--has-fieldNote_guakg_104`,select__label:Xn,select__subLabel:Zn,"select__label--disabled":`_select__label--disabled_guakg_121`,"select__label--hidden":`_select__label--hidden_guakg_129`,select__option:Qn,"select__option-text":`_select__option-text_guakg_142`,"select__required-text":`_select__required-text_guakg_146`,"select-button--error":`_select-button--error_guakg_167`,"select-button--warning":`_select-button--warning_guakg_180`,"select__required-text--disabled":`_select__required-text--disabled_guakg_193`}})))()}function L({"aria-label":e,children:t,className:n,disabled:r,fieldNote:i,id:a,label:o,labelLayout:s=`vertical`,name:c,optionsClassName:l,required:u,showHint:d,status:f,onChange:p,subLabel:m,...h}){let[_,v]=(0,R.useState)(h.value===void 0?h.defaultValue:h.value),y=g(I.select,i&&I[`select--has-fieldNote`],s&&I[`select--label-layout-${s}`],n),b=e=>{_!==e&&(v(e),p&&p(e))},x={className:y,as:`div`,disabled:r,name:c,...h,onChange:b},[S,C]=(0,R.useState)(0),w=(0,R.useCallback)(()=>(C(e=>e+1),()=>C(e=>e-1)),[]),T={optionsClassName:l,status:f,multiple:h.multiple,registerVisibleLabel:w},E=!o&&!S&&e&&(0,z.jsx)(Te,{className:I[`select__label--hidden`],children:e});return typeof t==`function`?(0,z.jsx)(B.Provider,{value:T,children:(0,z.jsx)(Wn,{...x,children:e=>(0,z.jsxs)(z.Fragment,{children:[E,t(e)]})})}):(0,z.jsxs)(B.Provider,{value:T,children:[(0,z.jsxs)(Wn,{...x,children:[(o||u)&&(0,z.jsx)(L.Label,{disabled:r,required:u,showHint:d,subLabel:m,children:o}),E,t]}),i&&(0,z.jsx)(`div`,{className:I.select__footer,children:(0,z.jsx)(on,{disabled:r,status:f,children:i})})]})}var R,z,B,er,tr,nr,rr,ir;function ar(){return(ar=t((()=>{Ce(),Gn(),h(),R=e(r()),Lt(),en(),nn(),an(),Bt(),Ht(),Xt(),Qt(),sn(),Kt(),$n(),z=a(),B=R.createContext({}),er=({children:e,required:t,className:n,disabled:r,showHint:i,subLabel:a})=>{let{registerVisibleLabel:o}=(0,R.useContext)(B),s=typeof e==`function`||zt(e);(0,R.useEffect)(()=>s?o?.():void 0,[s,o]);let c=g(I.select__label,r&&g(I[`select__label--disabled`]),n),l=g(I[`select__required-text`],r&&I[`select__required-text--disabled`]),u=g(I.select__overline,!s&&I[`select__overline--no-label`]),d=g(I.select__subLabel,r&&I[`select__label--disabled`]);return(0,z.jsxs)(`div`,{className:u,children:[(0,z.jsx)(Te,{as:rn,className:c,disabled:r,size:`md`,children:e}),t&&i&&(0,z.jsx)(Gt,{"aria-disabled":r??void 0,as:`span`,className:l,preset:`body-sm`,children:`(Required)`}),!t&&i&&(0,z.jsx)(Gt,{"aria-disabled":r??void 0,as:`span`,className:l,preset:`body-sm`,children:`(Optional)`}),s&&a&&(0,z.jsx)(`div`,{className:d,children:(0,z.jsx)(Gt,{as:`span`,preset:`body-sm`,children:a})})]})},tr=function(e){let{children:t,className:n,onClick:r,icon:i,...a}=e;Rt(`Select.Button`,`icon`,`expand`,i);let{status:o}=(0,R.useContext)(B);return(0,z.jsx)(zn,{as:R.Fragment,...a,children:e=>typeof t==`function`?t(e):(0,z.jsx)(ir,{className:n,isOpen:e.open,onClick:e=>{r&&r(e)},status:o,children:t})})},nr=function(e){let{anchor:t={to:`bottom start`,gap:12},className:n,...r}=e,{optionsClassName:i}=(0,R.useContext)(B),a=g(I.select__options,n,i);return(0,z.jsx)(Vn,{anchor:t,as:Zt,className:a,modal:!1,...r})},rr=function(e){let{children:t,className:n,optionClassName:r,subLabel:i,...a}=e,o=g(r,I.select__option),{multiple:s}=(0,R.useContext)(B);return(0,z.jsx)(Hn,{as:R.Fragment,...a,children:typeof t==`function`?t:({focus:e,disabled:n,selected:r})=>(0,z.jsx)($t,{__type:`selectitem`,className:o,isDisabled:n,isFocused:e,leadingContent:s?(0,z.jsx)(tn,{"aria-hidden":`true`,"aria-label":`checkbox`,checked:r,inert:!0,readOnly:!0}):(0,z.jsx)(cn,{"aria-hidden":`true`,"aria-label":`radio`,checked:r,inert:!0,readOnly:!0}),subLabel:i,children:(0,z.jsx)(`span`,{className:I[`select__option-text`],children:t})})})},ir=R.forwardRef((e,t)=>{let{children:n,className:r,isOpen:i,onClick:a,shouldTruncate:o=!1,icon:s,...c}=e;Rt(`Select.ButtonWrapper`,`icon`,`expand`,s);let{status:l}=(0,R.useContext)(B),u=Ut(`expand`),d=g(I[`select-button`],l===`warning`&&I[`select-button--warning`],l===`critical`&&I[`select-button--error`],r),f=g(I[`select-button__icon`],i&&I[`select-button__icon--reversed`]),p=g(o&&I[`select-button__text--truncated`]);return(0,z.jsxs)(`button`,{className:d,onClick:e=>{a&&a(e)},ref:t,type:`button`,...c,children:[(0,z.jsx)(qt,{as:`span`,className:p,preset:`input`,children:n}),zt(u)&&(0,z.jsx)(Vt,{className:f,content:u,purpose:`decorative`,size:`24px`})]})}),L.displayName=`Select`,tr.displayName=`Select.Button`,ir.displayName=`Select.ButtonWrapper`,er.displayName=`Select.Label`,rr.displayName=`Select.Option`,nr.displayName=`Select.Options`,L.Button=tr,L.ButtonWrapper=ir,L.Label=er,L.Option=rr,L.Options=nr;try{L.displayName=`Select`,L.__docgenInfo={description:`## Usage

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

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"critical" | "default" | "warning"`,value:[{value:`"critical"`},{value:`"default"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{L.Button.displayName=`Select.Button`,L.Button.__docgenInfo={description:"The trigger for the select component, which is usually a form of `Button` or some targetable/clickable component",displayName:`Select.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},isOpen:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Indicates state of the select, used to style the button.`,name:`isOpen`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{L.Label.displayName=`Select.Label`,L.Label.__docgenInfo={description:``,displayName:`Select.Label`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},passive:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`passive`,required:!1,tags:{},type:{name:`boolean`}},htmlFor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`htmlFor`,required:!1,tags:{},type:{name:`string`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLLabelElement>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{L.Option.displayName=`Select.Option`,L.Option.__docgenInfo={description:`Represents one of the available options for selection`,displayName:`Select.Option`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`unknown`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverListItem/PopoverListItem.tsx`,name:`TypeLiteral`}],description:`Text below the main menu item call-to-action, briefly describing the menu item's function`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},optionClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`optionClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{L.Options.displayName=`Select.Options`,L.Options.__docgenInfo={description:`The content container showing the available options when the trigger is activated`,displayName:`Select.Options`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Select/Select.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},anchor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`anchor`,required:!1,tags:{},type:{name:`AnchorPropsWithSelection`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/listbox/listbox.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement>`}}},tags:{}}}catch{}})))()}var V,or,sr,cr,lr,H,ur,dr,U,fr,W,G,K,q,J,Y,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,X,Z,Cr,wr,Tr,Er,Dr,Or,Q,$,kr;function Ar(){return(Ar=t((()=>{r(),ar(),Jt(),Ht(),V=a(),{expect:or,userEvent:sr,within:cr}=__STORYBOOK_MODULE_TEST__,lr={title:`Components/Select`,component:L,parameters:{docs:{subtitle:`A popover that reveals or hides a list of options. Depending on the component's configuration, the user may select one or more options.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{multiple:{description:`Whether multiple values are allowed in this instance`},value:{table:{description:`The value of the select field (when controlled)`}},defaultValue:{description:`The default value of the select field (when uncontrolled)`},__demoMode:{table:{disable:!0}},onClick:{description:"Optional click handler. Fires after `onChange`, when a value in the dropdown popover is picked",table:{type:{summary:`SyntheticEvent`,detail:`See: https://react.dev/reference/react-dom/components/common#react-event-object`},default:`void`}},children:{control:!1},onChange:{description:`Optional change handler. Fires when a value is selected (and passes in list of selected values)`}},tags:[`autodocs`,`version:4.0.1`]},H=[{key:`1`,label:`Dogs`,subLabel:`Who's a good boy?`},{key:`2`,label:`Cats`,subLabel:`Super independent.`},{key:`3`,label:`Birds`,subLabel:`Living relics!`},{key:`4`,label:`Rabbits`,subLabel:`Langomorphs are rad.`}],ur=async e=>{let{canvasElement:t}=e,n=await cr(t).findByRole(`button`);await sr.click(n)},dr=async e=>{let{canvasElement:t}=e,n=await cr(t).findByRole(`button`);await ur(e);let r=await cr(document.body).findByText(`Cats`);await sr.click(r),await sr.click(n)},U={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:H[0],name:`select`,className:`w-60`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},fr={args:{...U.args,className:`w-60`,labelLayout:`horizontal`,label:`Animal?`},parameters:{...U.parameters}},W={args:{label:`Favorite Animal`,"data-testid":`dropdown`,defaultValue:H[0],name:`standard-button`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:`- Select Option -`}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},G={args:{...U.args,onChange:e=>console.log(`changed to`,e),children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,onClick:e=>console.log(`custom click`),children:e.label})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},K={args:{...U.args,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{onClick:e=>console.log(`external click`),children:`- Select Option -`}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]}),onChange:e=>console.log(`external change`,e)}},q={args:{...U.args,"aria-label":`Favorite Animal`,defaultValue:H[1]}},J={args:{...q.args,defaultValue:{...H[1]},by:`key`}},Y={args:{...U.args,subLabel:`Additional descriptive text`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})},parameters:{docs:{source:{code:`
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
</Select>`}}}},pr={args:{...U.args,fieldNote:`Choose your beast`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})},parameters:{...U.parameters}},mr={args:{...U.args,fieldNote:`Choose your beast`,optionsClassName:`w-[384px]`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{anchor:{to:`bottom end`,gap:12},children:H.map(e=>(0,V.jsx)(L.Option,{subLabel:e.subLabel,value:e,children:e.label},e.key))})]})},parameters:{...U.parameters,snapshot:{skip:!0}},play:ur},hr={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:H[0],name:`select`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(`button`,{className:`fpo`,children:{Birds:`🐦🦆🦜`,Dogs:`🐶🐕🐩`,Cats:`🐈🐱🐈‍⬛`,Rabbits:`🐇🐰`}[e.label]})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},gr={args:{"aria-label":`some label`,"data-testid":`dropdown`,defaultValue:H[0],name:`select`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},_r={args:{...U.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`select-field`,defaultValue:[H[0]],className:`w-[240px]`,name:`standard-button`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsxs)(L.ButtonWrapper,{isOpen:t,children:[e.length>0?e.length:`none`,` selected`,` `]})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})},parameters:{snapshot:{skip:!0}},play:ur},vr={args:{...U.args,label:`Favorite Animal(s)`,multiple:!0,"data-testid":`dropdown`,defaultValue:[H[0]],className:`w-[240px]`,name:`standard-button`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsxs)(L.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:[e.length>0?e.length:`none`,` long selected description`]})}),(0,V.jsx)(L.Options,{children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})}},yr={args:{...U.args,className:`w-[240px]`}},br={args:{...U.args,defaultValue:`test3`,className:`w-[240px]`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,shouldTruncate:!0,children:e})}),(0,V.jsx)(L.Options,{children:Array(30).fill(`test`).map((e,t)=>(0,V.jsxs)(L.Option,{value:e+t,children:[e,t]},`${e}-${t}`))})]})},play:async e=>{let t=await cr(e.canvasElement).findByRole(`button`);await ur(e),await sr.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}`),await or(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{layout:`centered`,chromatic:{delay:450},snapshot:{skip:!0}},decorators:[e=>(0,V.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})]},xr={args:{...U.args,className:`w-[160px]`,optionsClassName:`w-[384px]`},play:dr,parameters:{chromatic:{diffIncludeAntiAliasing:!1,diffThreshold:.75},docs:{...U.parameters?.docs},snapshot:{skip:!0}},decorators:[e=>(0,V.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})]},Sr={args:{...U.args,subLabel:`Some descriptive text`,disabled:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{...U.parameters?.docs},snapshot:{skip:!0}}},X={args:{...U.args,required:!0,showHint:!0,className:`w-[384px]`,subLabel:`Some descriptive text`},parameters:{...U.parameters}},Z={args:{...U.args,required:!1,showHint:!0,subLabel:`Some descriptive text`,className:`w-[384px]`},parameters:{...U.parameters}},Cr={args:{...X.args,status:`critical`,fieldNote:`Some text describing error`},parameters:{...X.parameters}},wr={args:{...Z.args,status:`warning`,fieldNote:`Some text describing warning`},parameters:{...Z.parameters}},Tr={args:{...U.args,label:void 0,"aria-label":`hidden label`},parameters:{...U.parameters}},Er={args:{...U.args,label:void 0,"aria-label":`hidden label`,required:!0,className:`w-[384px]`},parameters:{...U.parameters}},Dr={args:{...U.args,disabled:!0,required:!0,showHint:!0,className:`w-[384px]`},parameters:{docs:{...U.parameters?.docs},snapshot:{skip:!0}}},Or={args:{...U.args,optionsClassName:`w-[384px]`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L.Button,{children:({value:e,open:t,disabled:n})=>(0,V.jsx)(L.ButtonWrapper,{isOpen:t,children:e.label})}),(0,V.jsx)(L.Options,{anchor:{to:`bottom end`,gap:12},children:H.map(e=>(0,V.jsx)(L.Option,{value:e,children:e.label},e.key))})]})},play:dr,decorators:[e=>(0,V.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},Q={...U,parameters:{layout:`centered`,chromatic:{delay:300,disableSnapshot:!0},docs:{...U.parameters?.docs},snapshot:{skip:!0}},play:dr},$={...U,decorators:[e=>(0,V.jsx)(Wt,{icons:Yt,children:e()})]},kr=`Default.HorizontalLabel.WithStandardButton.EventHandlingOnRenderProp.EventHandlingOnStandardButton.WithSelectedOption.WithSelectedBy.WithFieldName.WithFieldNote.WithSubLabels.UncontrolledHeadless.StyledUncontrolled.Multiple.MultipleWithTruncation.AdjustedWidth.LongOptionList.SeparateButtonAndMenuWidth.Disabled.Required.Optional.Error.Warning.NoVisibleLabel.NoVisibleLabelButRequired.DisabledRequired.OptionsRightAligned.OpenByDefault.WithProvidedIcons`.split(`.`),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`The simplest and default case, using the options, button, and button wrapper in the render prop.
This shows how to reflect the value in the button upon selection, and how to generate
a set of options from a list.

**NOTE**: for select value data types, \`{label: string}\` is required, but any other key/value pairs are allowed.

For detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Select/Select.stories.tsx).`,...U.parameters?.docs?.description}}},fr.parameters={...fr.parameters,docs:{...fr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-60',
    labelLayout: 'horizontal',
    label: 'Animal?'
  },
  parameters: {
    ...Default.parameters
  }
}`,...fr.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Instead of a render prop for `Select.Button`, you can forego the render prop for the button and use static text instead.\nThis mode is also useful if you want to use a controlled component and manage state yourself.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nYou can also add an `onClick` handler to `.ButtonWrapper` if using a render prop\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"`Select` allows for event handlers to be added to the component.\n\n* `onChange` fires when a value is selected (with value of type `SelectOption`)\n\nIf not using a render prop, you can also add an `onClick` handler to `Select.Button` directly\n\n* `onClick` fires when the trigger (`.ButtonWrapper`) is clicked\n\n**NOTE**: `onClick` has no function when using a render prop",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    'aria-label': 'Favorite Animal',
    defaultValue: exampleOptions[1]
  }
}`,...q.parameters?.docs?.source},description:{story:`You can select a different option to show when rendered.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedOption.args,
    defaultValue: {
      ...exampleOptions[1]
    },
    by: 'key'
  }
}`,...J.parameters?.docs?.source},description:{story:"Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.\n- The type comparison can be by a named key in the object `by={'id'}` or using a comparison function\n\nSee: https://headlessui.com/v1/react/listbox#listbox",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:'You can add a `name` prop to generate form fields for the value object.\n\nIn this example, the field name is `"interactive-select"`, and the value is an object storing `{label: string, key: string}`.\n\nThis will generate hidden fields with names:\n* `interactive-select[label]`\n* `interactive-select[key]`',...Y.parameters?.docs?.description}}},pr.parameters={...pr.parameters,docs:{...pr.parameters?.docs,source:{originalSource:`{
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
}`,...pr.parameters?.docs?.source}}},mr.parameters={...mr.parameters,docs:{...mr.parameters?.docs,source:{originalSource:`{
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
}`,...mr.parameters?.docs?.source},description:{story:`This demonstrates how select items can also have an optional subLabel attached to give more details about the option.`,...mr.parameters?.docs?.description}}},hr.parameters={...hr.parameters,docs:{...hr.parameters?.docs,source:{originalSource:`{
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
}`,...hr.parameters?.docs?.source},description:{story:`You can implement a \`Select.Button\` with a render prop. This exposes several useful values to
control the appearance of the rendered button. The render prop case is "Headless", in that it has
no styling by default.`,...hr.parameters?.docs?.description}}},gr.parameters={...gr.parameters,docs:{...gr.parameters?.docs,source:{originalSource:`{
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
}`,...gr.parameters?.docs?.source},description:{story:"You can use `Select.ButtonWrapper` to borrow the existing style used for controlled `Select` components.",...gr.parameters?.docs?.description}}},_r.parameters={..._r.parameters,docs:{..._r.parameters?.docs,source:{originalSource:`{
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
}`,..._r.parameters?.docs?.source},description:{story:"You can select multiple values by passing `multiple` to the parent element. When doing this,\nmake sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead\nof an object or value for the individual `Select.Option` entries.\n\nWhen handling the button text, `value` represents the data for all options selected. This allows for a flexible\nlayout to fit the needs of the design.\n\nHidden form inputs are generated for each option selected and take the following form:\n- `name[arrayIndex][key]`\n- `name[arrayIndex][value]`\n\nYou can add arbitrary content to `.ButtonWrapper`, to render selection for each option. `value` is an array and represents all selected values.",..._r.parameters?.docs?.description}}},vr.parameters={...vr.parameters,docs:{...vr.parameters?.docs,source:{originalSource:`{
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
}`,...vr.parameters?.docs?.source},description:{story:"The component provides some basic styles to handle long text in the provided field. Use\n`shouldTruncate` on `.ButtonWrapper` to truncate the text with an ellipsis.",...vr.parameters?.docs?.description}}},yr.parameters={...yr.parameters,docs:{...yr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[240px]'
  }
}`,...yr.parameters?.docs?.source},description:{story:`The field trigger width can be set with utility classes. By default, dropdown popover will exppand to match the width.`,...yr.parameters?.docs?.description}}},br.parameters={...br.parameters,docs:{...br.parameters?.docs,source:{originalSource:`{
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
}`,...br.parameters?.docs?.source},description:{story:`We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
keyboard navigation (showing the items off the edge of the screen) is handled when used.`,...br.parameters?.docs?.description}}},xr.parameters={...xr.parameters,docs:{...xr.parameters?.docs,source:{originalSource:`{
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
}`,...xr.parameters?.docs?.source},description:{story:`If you want a different width for the trigger and the dropdown popover, you can control them separately.`,...xr.parameters?.docs?.description}}},Sr.parameters={...Sr.parameters,docs:{...Sr.parameters?.docs,source:{originalSource:`{
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
}`,...Sr.parameters?.docs?.source},description:{story:`Each Select can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
will show the selected value).`,...Sr.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Select fields can be marked as required by using the `required` prop.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Fields can be marked as optional by using `required` as false, but `showHint` as true.",...Z.parameters?.docs?.description}}},Cr.parameters={...Cr.parameters,docs:{...Cr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error'
  },
  parameters: {
    ...Required.parameters
  }
}`,...Cr.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "error".`,...Cr.parameters?.docs?.description}}},wr.parameters={...wr.parameters,docs:{...wr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning'
  },
  parameters: {
    ...Optional.parameters
  }
}`,...wr.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifing the status of "warning".`,...wr.parameters?.docs?.description}}},Tr.parameters={...Tr.parameters,docs:{...Tr.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label'
  },
  parameters: {
    ...Default.parameters
  }
}`,...Tr.parameters?.docs?.source},description:{story:"Having a visible label is not necessary. In those cases, use `aria-label` to set a accessible label for the field",...Tr.parameters?.docs?.description}}},Er.parameters={...Er.parameters,docs:{...Er.parameters?.docs,source:{originalSource:`{
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
}`,...Er.parameters?.docs?.source},description:{story:"No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.",...Er.parameters?.docs?.description}}},Dr.parameters={...Dr.parameters,docs:{...Dr.parameters?.docs,source:{originalSource:`{
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
}`,...Dr.parameters?.docs?.source},description:{story:"`Select` can be both disabled and required.",...Dr.parameters?.docs?.description}}},Or.parameters={...Or.parameters,docs:{...Or.parameters?.docs,source:{originalSource:`{
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
}`,...Or.parameters?.docs?.source},description:{story:`Options for each \`Select\` can be aligned on different sides of the target button.

More information: https://headlessui.com/react/popover`,...Or.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"This shows the contents of `Select` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...$.parameters?.docs?.source},description:{story:"The indicator marks the button as the thing that opens the options, which is the same\n`expand` role a `Menu.Button` or an `Accordion` row carries, so it comes from\n`IconProvider`. The CSS still flips it when the listbox opens.",...$.parameters?.docs?.description}}}})))()}Ar();export{yr as AdjustedWidth,U as Default,Sr as Disabled,Dr as DisabledRequired,Cr as Error,G as EventHandlingOnRenderProp,K as EventHandlingOnStandardButton,fr as HorizontalLabel,br as LongOptionList,_r as Multiple,vr as MultipleWithTruncation,Tr as NoVisibleLabel,Er as NoVisibleLabelButRequired,Q as OpenByDefault,Z as Optional,Or as OptionsRightAligned,X as Required,xr as SeparateButtonAndMenuWidth,gr as StyledUncontrolled,hr as UncontrolledHeadless,wr as Warning,Y as WithFieldName,pr as WithFieldNote,$ as WithProvidedIcons,J as WithSelectedBy,q as WithSelectedOption,W as WithStandardButton,mr as WithSubLabels,kr as __namedExportsOrder,lr as default};