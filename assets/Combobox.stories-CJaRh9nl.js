import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./react-dom-BHZR6v6Q.js";import{a,c as o,l as s,n as c,o as l,s as u,t as d,u as f}from"./use-resolve-button-type-vFGQ5KQa.js";import{n as p,t as m}from"./clsx-CTwy9ux-.js";import{C as h,S as g,T as _,_ as v,b as y,c as b,g as x,i as S,n as C,o as ee,p as w,r as te,s as T,u as E,v as D,w as O,x as k,y as A}from"./use-sync-refs-CYKzq9CM.js";import{_ as j,c as M,g as ne,h as re,n as N,t as ie,u as ae,v as oe,x as se,y as ce}from"./keyboard-C519l7JJ.js";import{a as le,i as ue,o as de,r as fe}from"./description-BbW3V1_4.js";import{c as pe,l as me,n as he,o as ge,r as _e,s as ve}from"./form-fields-CTkxc7wV.js";import{a as ye,c as be,i as xe,n as Se,r as Ce,s as we}from"./label-C3QVhqWV.js";import{a as Te,i as Ee,n as De,r as Oe,t as ke}from"./frozen-65gKHxdA.js";import{c as Ae,i as je,l as Me,n as Ne,o as Pe,r as Fe,s as Ie,t as Le}from"./floating-CKGfzXCp.js";import{a as P,c as Re,d as ze,f as Be,g as Ve,h as He,i as Ue,l as We,m as Ge,n as Ke,o as qe,p as Je,r as Ye,s as Xe,t as Ze,u as Qe}from"./element-movement-CXJMdJo4.js";import{A as $e,B as et,F as tt,H as nt,P as rt,R as F,U as it,V as at,W as ot,c as st,f as ct,h as lt,l as ut,m as dt,n as ft,p as pt,r as mt,s as ht,u as gt,w as _t,x as vt,z as yt}from"./portal-B3uDnaEk.js";import{n as bt,t as xt}from"./use-inert-others-B2IhmKua.js";import{n as St,t as Ct}from"./use-event-listener-DagjGiuh.js";import{a as wt,c as Tt,n as Et,o as Dt,r as Ot,s as kt,t as At}from"./open-closed-D2k00yGF.js";import{n as jt,t as Mt}from"./use-tree-walker-BFV6N537.js";import{i as Nt,n as Pt,r as Ft,t as It}from"./active-element-history-6wGFb-ef.js";import{_ as Lt,h as Rt,n as zt,o as Bt,t as Vt,u as Ht,v as Ut,y as Wt}from"./floating-ui.react-DmuN_MNo.js";import{i as Gt,n as Kt}from"./logging-DIGRaM8w.js";import{n as qt,r as Jt,t as Yt}from"./IconSlot-Chsa5gUx.js";import{n as Xt,r as Zt,t as Qt}from"./IconProvider-CLE0eA_m.js";import{n as $t,r as en}from"./Text-DJbcQrwW.js";import{n as tn,t as nn}from"./FpoBlock-DB6Mv5jR.js";import{n as rn,t as an}from"./semanticIconOverrides-8zHpyBoo.js";import{n as on,t as sn}from"./PopoverContainer-BooOHzBJ.js";import{n as cn,t as ln}from"./PopoverListItem-v1HC0J29.js";import{n as un,t as dn}from"./Checkbox-D-DWxAGV.js";import{n as fn,t as pn}from"./FieldLabel-DKMDZyjd.js";import{n as mn,t as hn}from"./FieldNote-DZYRcpLM.js";import{n as gn,t as _n}from"./InputChip-Daid0kwV.js";import{n as vn,t as yn}from"./Radio-DAO4raSV.js";function bn(e,t,n){let r=n.initialDeps??[],i;function a(){var a;let o;n.key&&n.debug?.call(n)&&(o=Date.now());let s=e();if(!(s.length!==r.length||s.some((e,t)=>r[t]!==e)))return i;r=s;let c;if(n.key&&n.debug?.call(n)&&(c=Date.now()),i=t(...s),n.key&&n.debug?.call(n)){let e=Math.round((Date.now()-o)*100)/100,t=Math.round((Date.now()-c)*100)/100,r=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=` `+e;return e};console.info(`%c⏱ ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`,n?.key)}return(a=n?.onChange)==null||a.call(n,i),i}return a.updateDeps=e=>{r=e},a}function xn(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var Sn,Cn;function wn(){return(wn=t((()=>{Sn=(e,t)=>Math.abs(e-t)<=1,Cn=(e,t,n)=>{let r;return function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)}}})))()}function Tn({measurements:e,outerSize:t,scrollOffset:n,lanes:r}){let i=e.length-1,a=t=>e[t].start;if(e.length<=r)return{startIndex:0,endIndex:i};let o=In(0,i,a,n),s=o;if(r===1)for(;s<i&&e[s].end<n+t;)s++;else if(r>1){let a=Array(r).fill(0);for(;s<i&&a.some(e=>e<n+t);){let t=e[s];a[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(i,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In;function Ln(){return(Ln=t((()=>{wn(),En=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},Dn=e=>e,On=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let e=t;e<=n;e++)r.push(e);return r},kn=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(En(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(En(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},An={passive:!0},jn=typeof window>`u`||`onscrollend`in window,Mn=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=0,a=e.options.useScrollendEvent&&jn?()=>void 0:Cn(r,()=>{t(i,!1)},e.options.isScrollingResetDelay),o=r=>()=>{let{horizontal:o,isRtl:s}=e.options;i=o?n.scrollLeft*(s&&-1||1):n.scrollTop,a(),t(i,r)},s=o(!0),c=o(!1);c(),n.addEventListener(`scroll`,s,An);let l=e.options.useScrollendEvent&&jn;return l&&n.addEventListener(`scrollend`,c,An),()=>{n.removeEventListener(`scroll`,s),l&&n.removeEventListener(`scrollend`,c)}},Nn=(e,t,n)=>{if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},Pn=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;let o=e+t;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:o,behavior:n})},Fn=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{this._measureElement(e.target,e)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{n===void 0&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Dn,rangeExtractor:On,onChange:()=>{},measureElement:Nn,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=bn(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.targetWindow=this.scrollElement&&`ownerDocument`in this.scrollElement?this.scrollElement.ownerDocument.defaultView:this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let a=r.get(t.lane);if(a==null||t.end>a.end?r.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=bn(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,n,r,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i}),{key:!1}),this.getMeasurements=bn(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i},a)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let o=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];let s=this.measurementsCache.slice(0,o);for(let i=o;i<e;i++){let e=r(i),o=this.options.lanes===1?s[i-1]:this.getFurthestMeasurement(s,i),c=o?o.end+this.options.gap:t+n,l=a.get(e),u=typeof l==`number`?l:this.options.estimateSize(i),d=c+u,f=o?o.lane:i%this.options.lanes;s[i]={index:i,start:c,size:u,end:d,key:e,lane:f}}return this.measurementsCache=s,s},{key:!1,debug:()=>this.options.debug}),this.calculateRange=bn(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>this.range=e.length>0&&t>0?Tn({measurements:e,outerSize:t,scrollOffset:n,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=bn(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{let n=this.indexFromElement(e),r=this.measurementsCache[n];if(!r)return;let i=r.key,a=this.elementsCache.get(i);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(n,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{let n=this.measurementsCache[e];if(!n)return;let r=t-(this.itemSizeCache.get(n.key)??n.size);r!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?n.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(n,r,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=r,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}this._measureElement(e,void 0)},this.getVirtualItems=bn(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length!==0)return xn(t[In(0,t.length-1,e=>xn(t[e]).start,e)])},this.getOffsetForAlignment=(e,t,n=0)=>{let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getTotalSize()-r;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.measurementsCache[e];if(!n)return;let r=this.getSize(),i=this.getScrollOffset();if(t===`auto`){if(n.end>=i+r-this.options.scrollPaddingEnd)t=`end`;else if(n.start<=i+this.options.scrollPaddingStart)t=`start`;else return[i,t]}let a=t===`end`?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,n.size),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:t=`start`,behavior:n}={})=>{this.cancelScrollToIndex(),n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:n})},this.scrollToIndex=(e,{align:t=`auto`,behavior:n}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,a]=r;this._scrollToOffset(i,{adjustments:void 0,behavior:n}),n!==`smooth`&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){let t=this.getOffsetForIndex(e,a);if(!t)return;let[r]=t,i=this.getScrollOffset();Sn(r,i)||this.scrollToIndex(e,{align:a,behavior:n})}else this.scrollToIndex(e,{align:a,behavior:n})}))},this.scrollBy=(e,{behavior:t}={})=>{this.cancelScrollToIndex(),t===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1)t=e[e.length-1]?.end??0;else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}},In=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0}})))()}function Rn(e){let t=Bn.useReducer(()=>({}),{})[1],n={...e,onChange:(n,r)=>{var i;r?(0,Vn.flushSync)(t):t(),(i=e.onChange)==null||i.call(e,n,r)}},[r]=Bn.useState(()=>new Fn(n));return r.setOptions(n),Hn(()=>r._didMount(),[]),Hn(()=>r._willUpdate()),r}function zn(e){return Rn({observeElementRect:kn,observeElementOffset:Mn,scrollToFn:Pn,...e})}var Bn,Vn,Hn;function Un(){return(Un=t((()=>{Bn=e(n(),1),Vn=i(),Ln(),Hn=typeof document<`u`?Bn.useLayoutEffect:Bn.useEffect})))()}function Wn(e){let t=(0,Gn.useRef)({value:``,selectionStart:null,selectionEnd:null});return Ct(e,`blur`,e=>{let n=e.target;M(n)&&(t.current={value:n.value,selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})}),v(()=>{if(!ce(e)&&M(e)&&e.isConnected){if(e.focus({preventScroll:!0}),e.value!==t.current.value)e.setSelectionRange(e.value.length,e.value.length);else{let{selectionStart:n,selectionEnd:r}=t.current;n!==null&&r!==null&&e.setSelectionRange(n,r)}t.current={value:``,selectionStart:null,selectionEnd:null}}})}var Gn;function Kn(){return(Kn=t((()=>{Gn=n(),se(),x(),St()})))()}function qn(e,t=e=>e){let n=e.activeOptionIndex===null?null:e.options[e.activeOptionIndex],r=t(e.options.slice()),i=r.length>0&&r[0].dataRef.current.order!==null?r.sort((e,t)=>e.dataRef.current.order-t.dataRef.current.order):_t(r,e=>e.dataRef.current.domRef.current),a=n?i.indexOf(n):null;return a===-1&&(a=null),{options:i,activeOptionIndex:a}}var Jn,Yn,Xn,I,L,R,Zn,Qn,$n;function er(){return(er=t((()=>{ot(),et(),Xe(),Ye(),$e(),Jn=Object.defineProperty,Yn=(e,t,n)=>t in e?Jn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xn=(e,t,n)=>(Yn(e,typeof t==`symbol`?t:t+``,n),n),I=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(I||{}),L=(e=>(e[e.Single=0]=`Single`,e[e.Multi=1]=`Multi`,e))(L||{}),R=(e=>(e[e.Pointer=0]=`Pointer`,e[e.Focus=1]=`Focus`,e[e.Other=2]=`Other`,e))(R||{}),Zn=(e=>(e[e.OpenCombobox=0]=`OpenCombobox`,e[e.CloseCombobox=1]=`CloseCombobox`,e[e.GoToOption=2]=`GoToOption`,e[e.SetTyping=3]=`SetTyping`,e[e.RegisterOption=4]=`RegisterOption`,e[e.UnregisterOption=5]=`UnregisterOption`,e[e.DefaultToFirstOption=6]=`DefaultToFirstOption`,e[e.SetActivationTrigger=7]=`SetActivationTrigger`,e[e.UpdateVirtualConfiguration=8]=`UpdateVirtualConfiguration`,e[e.SetInputElement=9]=`SetInputElement`,e[e.SetButtonElement=10]=`SetButtonElement`,e[e.SetOptionsElement=11]=`SetOptionsElement`,e[e.MarkInputAsMoved=12]=`MarkInputAsMoved`,e))(Zn||{}),Qn={1(e){var t;if((t=e.dataRef.current)!=null&&t.disabled||e.comboboxState===1)return e;let n=e.inputElement?Ke.Tracked(Ze(e.inputElement)):e.inputPositionState;return{...e,activeOptionIndex:null,comboboxState:1,isTyping:!1,activationTrigger:2,inputPositionState:n,__demoMode:!1}},0(e){var t,n;if((t=e.dataRef.current)!=null&&t.disabled||e.comboboxState===0)return e;if((n=e.dataRef.current)!=null&&n.value){let t=e.dataRef.current.calculateIndex(e.dataRef.current.value);if(t!==-1)return{...e,activeOptionIndex:t,comboboxState:0,__demoMode:!1,inputPositionState:Ke.Idle}}return{...e,comboboxState:0,inputPositionState:Ke.Idle,__demoMode:!1}},3(e,t){return e.isTyping===t.isTyping?e:{...e,isTyping:t.isTyping}},2(e,t){var n,r;if((n=e.dataRef.current)!=null&&n.disabled||e.optionsElement&&!((r=e.dataRef.current)!=null&&r.optionsPropsRef.current.static)&&e.comboboxState===1)return e;if(e.virtual){let{options:n,disabled:r}=e.virtual,i=t.focus===P.Specific?t.idx:qe(t,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeOptionIndex??n.findIndex(e=>!r(e))??null,resolveDisabled:r,resolveId(){throw Error(`Function not implemented.`)}}),a=t.trigger??2;return e.activeOptionIndex===i&&e.activationTrigger===a?e:{...e,activeOptionIndex:i,activationTrigger:a,isTyping:!1,__demoMode:!1}}let i=qn(e);if(i.activeOptionIndex===null){let e=i.options.findIndex(e=>!e.dataRef.current.disabled);e!==-1&&(i.activeOptionIndex=e)}let a=t.focus===P.Specific?t.idx:qe(t,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled}),o=t.trigger??2;return e.activeOptionIndex===a&&e.activationTrigger===o?e:{...e,...i,isTyping:!1,activeOptionIndex:a,activationTrigger:o,__demoMode:!1}},4:(e,t)=>{var n,r,i,a;if((n=e.dataRef.current)!=null&&n.virtual)return{...e,options:[...e.options,t.payload]};let o=t.payload,s=qn(e,e=>(e.push(o),e));e.activeOptionIndex===null&&(i=(r=e.dataRef.current).isSelected)!=null&&i.call(r,t.payload.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(o));let c={...e,...s,activationTrigger:2};return(a=e.dataRef.current)!=null&&a.__demoMode&&e.dataRef.current.value===void 0&&(c.activeOptionIndex=0),c},5:(e,t)=>{var n;if((n=e.dataRef.current)!=null&&n.virtual)return{...e,options:e.options.filter(e=>e.id!==t.id)};let r=qn(e,e=>{let n=e.findIndex(e=>e.id===t.id);return n!==-1&&e.splice(n,1),e});return{...e,...r,activationTrigger:2}},6:(e,t)=>e.defaultToFirstOption===t.value?e:{...e,defaultToFirstOption:t.value},7:(e,t)=>e.activationTrigger===t.trigger?e:{...e,activationTrigger:t.trigger},8:(e,t)=>{if(e.virtual===null)return{...e,virtual:{options:t.options,disabled:t.disabled??(()=>!1)}};if(e.virtual.options===t.options&&e.virtual.disabled===t.disabled)return e;let n=e.activeOptionIndex;if(e.activeOptionIndex!==null){let r=t.options.indexOf(e.virtual.options[e.activeOptionIndex]);n=r===-1?null:r}return{...e,activeOptionIndex:n,virtual:{options:t.options,disabled:t.disabled??(()=>!1)}}},9:(e,t)=>e.inputElement===t.element?e:{...e,inputElement:t.element},10:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},11:(e,t)=>e.optionsElement===t.element?e:{...e,optionsElement:t.element},12(e){return e.inputPositionState.kind===`Tracked`?{...e,inputPositionState:Ke.Moved}:e}},$n=class e extends it{constructor(e){super(e),Xn(this,`actions`,{onChange:e=>{let{onChange:t,compare:n,mode:r,value:i}=this.state.dataRef.current;return w(r,{0:()=>t?.(e),1:()=>{let r=i.slice(),a=r.findIndex(t=>n(t,e));return a===-1?r.push(e):r.splice(a,1),t?.(r)}})},registerOption:(e,t)=>(this.send({type:4,payload:{id:e,dataRef:t}}),()=>{this.state.activeOptionIndex===this.state.dataRef.current.calculateIndex(t.current.value)&&this.send({type:6,value:!0}),this.send({type:5,id:e})}),goToOption:(e,t)=>(this.send({type:6,value:!1}),this.send({type:2,...e,trigger:t})),setIsTyping:e=>{this.send({type:3,isTyping:e})},closeCombobox:()=>{var e,t;this.send({type:1}),this.send({type:6,value:!1}),(t=(e=this.state.dataRef.current).onClose)==null||t.call(e)},openCombobox:()=>{this.send({type:0}),this.send({type:6,value:!0})},setActivationTrigger:e=>{this.send({type:7,trigger:e})},selectActiveOption:()=>{let e=this.selectors.activeOptionIndex(this.state);if(e!==null){if(this.actions.setIsTyping(!1),this.state.virtual)this.actions.onChange(this.state.virtual.options[e]);else{let{dataRef:t}=this.state.options[e];this.actions.onChange(t.current.value)}this.actions.goToOption({focus:P.Specific,idx:e})}},setInputElement:e=>{this.send({type:9,element:e})},setButtonElement:e=>{this.send({type:10,element:e})},setOptionsElement:e=>{this.send({type:11,element:e})}}),Xn(this,`selectors`,{activeDescendantId:e=>{let t=this.selectors.activeOptionIndex(e);if(t!==null)return e.virtual?e.options.find(n=>!n.dataRef.current.disabled&&e.dataRef.current.compare(n.dataRef.current.value,e.virtual.options[t]))?.id:e.options[t]?.id},activeOptionIndex:e=>{if(e.defaultToFirstOption&&e.activeOptionIndex===null&&(e.virtual?e.virtual.options.length>0:e.options.length>0)){if(e.virtual){let{options:t,disabled:n}=e.virtual,r=t.findIndex(e=>{var t;return!((t=n?.(e))!=null&&t)});if(r!==-1)return r}let t=e.options.findIndex(e=>!e.dataRef.current.disabled);if(t!==-1)return t}return e.activeOptionIndex},activeOption:e=>{let t=this.selectors.activeOptionIndex(e);return t===null?null:e.virtual?e.virtual.options[t??0]:e.options[t]?.dataRef.current.value??null},isActive:(e,t,n)=>{let r=this.selectors.activeOptionIndex(e);return r===null?!1:e.virtual?r===e.dataRef.current.calculateIndex(t):e.options[r]?.id===n},shouldScrollIntoView:(e,t,n)=>!(e.virtual||e.__demoMode||e.comboboxState!==0||e.activationTrigger===0||!this.selectors.isActive(e,t,n)),didInputMove(e){return e.inputPositionState.kind===`Moved`}});{let e=this.state.id,t=nt.get(null);this.disposables.add(t.on(at.Push,n=>{!t.selectors.isTop(n,e)&&this.state.comboboxState===0&&this.actions.closeCombobox()})),this.on(0,()=>t.actions.push(e)),this.on(1,()=>t.actions.pop(e))}this.disposables.group(e=>{this.on(1,t=>{t.inputElement&&(e.dispose(),e.add(Ue(t.inputElement,t.inputPositionState,()=>{this.send({type:12})})))})})}static new({id:t,virtual:n=null,__demoMode:r=!1}){return new e({id:t,dataRef:{current:{}},comboboxState:+!r,isTyping:!1,options:[],virtual:n?{options:n.options,disabled:n.disabled??(()=>!1)}:null,activeOptionIndex:null,activationTrigger:2,inputElement:null,buttonElement:null,optionsElement:null,__demoMode:r,inputPositionState:Ke.Idle})}reduce(e,t){return w(t.type,Qn,e,t)}}})))()}function tr(e){let t=(0,rr.useContext)(ir);if(t===null){let t=Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,nr),t}return t}function nr({id:e,virtual:t=null,__demoMode:n=!1}){let r=(0,rr.useMemo)(()=>$n.new({id:e,virtual:t,__demoMode:n}),[]);return ht(()=>r.dispose()),r}var rr,ir;function ar(){return(ar=t((()=>{rr=n(),st(),er(),ir=(0,rr.createContext)(null)})))()}function or(e){let t=(0,z.useContext)(mr);if(t===null){let t=Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,or),t}return t}function sr(e){let t=tr(`VirtualProvider`),{options:n}=or(`VirtualProvider`).virtual,r=F(t,e=>e.optionsElement),[i,a]=(0,z.useMemo)(()=>{let e=r;if(!e)return[0,0];let t=window.getComputedStyle(e);return[parseFloat(t.paddingBlockStart||t.paddingTop),parseFloat(t.paddingBlockEnd||t.paddingBottom)]},[r]),o=zn({enabled:n.length!==0,scrollPaddingStart:i,scrollPaddingEnd:a,count:n.length,estimateSize(){return 40},getScrollElement(){return t.state.optionsElement},overscan:12}),[s,c]=(0,z.useState)(0);k(()=>{c(e=>e+1)},[n]);let l=o.getVirtualItems(),u=F(t,e=>e.activationTrigger===R.Pointer),d=F(t,t.selectors.activeOptionIndex);return l.length===0?null:z.createElement(hr.Provider,{value:o},z.createElement(`div`,{style:{position:`relative`,width:`100%`,height:`${o.getTotalSize()}px`},ref:e=>{e&&(u||d!==null&&n.length>d&&o.scrollToIndex(d))}},l.map(t=>z.createElement(z.Fragment,{key:t.key},z.cloneElement(e.children?.call(e,{...e.slot,option:n[t.index]}),{key:`${s}-${t.key}`,"data-index":t.index,"aria-setsize":n.length,"aria-posinset":t.index+1,style:{position:`absolute`,top:0,left:0,transform:`translateY(${t.start}px)`,overflowAnchor:`none`}})))))}function cr(e,t){let n=(0,re.useId)(),r=le(),{value:i,defaultValue:a,onChange:o,form:s,name:c,by:l,invalid:u=!1,disabled:d=r||!1,onClose:f,__demoMode:p=!1,multiple:m=!1,immediate:h=!1,virtual:g=null,nullable:_,...y}=e,b=ve(a),[x=m?[]:void 0,S]=pe(i,o,b),C=nr({id:n,virtual:g,__demoMode:p}),te=(0,z.useRef)({static:!1,hold:!1}),T=Te(l),E=v(e=>g?l===null?g.options.indexOf(e):g.options.findIndex(t=>T(t,e)):C.state.options.findIndex(t=>T(t.dataRef.current.value,e))),D=(0,z.useCallback)(e=>w(j.mode,{[L.Multi]:()=>x.some(t=>T(t,e)),[L.Single]:()=>T(x,e)}),[x]),O=F(C,e=>e.virtual),A=v(()=>f?.()),j=(0,z.useMemo)(()=>({__demoMode:p,immediate:h,optionsPropsRef:te,value:x,defaultValue:b,disabled:d,invalid:u,mode:m?L.Multi:L.Single,virtual:g?O:null,onChange:S,isSelected:D,calculateIndex:E,compare:T,onClose:A}),[p,h,te,x,b,d,u,m,g,O,S,D,E,T,A]);k(()=>{g&&C.send({type:Zn.UpdateVirtualConfiguration,options:g.options,disabled:g.disabled??null})},[g,g?.options,g?.disabled]),k(()=>{C.state.dataRef.current=j},[j]);let[M,ne,N,ie]=F(C,e=>[e.comboboxState,e.buttonElement,e.inputElement,e.optionsElement]),ae=nt.get(null),se=F(ae,(0,z.useCallback)(e=>ae.selectors.isTop(e,n),[ae,n]));lt(se,[ne,N,ie],()=>C.actions.closeCombobox());let ce=F(C,C.selectors.activeOptionIndex),ue=F(C,C.selectors.activeOption),de=oe({open:M===I.Open,disabled:d,invalid:u,activeIndex:ce,activeOption:ue,value:x}),[fe,me]=Ce(),he=t===null?{}:{ref:t},ge=(0,z.useCallback)(()=>{if(b!==void 0)return S?.(b)},[S,b]),ye=ee();return z.createElement(me,{value:fe,props:{htmlFor:N?.id},slot:{open:M===I.Open,disabled:d}},z.createElement(Le,null,z.createElement(mr.Provider,{value:j},z.createElement(ir.Provider,{value:C},z.createElement(At,{value:w(M,{[I.Open]:Et.Open,[I.Closed]:Et.Closed})},c!=null&&z.createElement(_e,{disabled:d,data:x==null?{}:{[c]:x},form:s,onReset:ge}),ye({ourProps:he,theirProps:y,slot:de,defaultTag:gr,name:`Combobox`}))))))}function lr(e,t){let n=tr(`Combobox.Input`),r=or(`Combobox.Input`),i=(0,re.useId)(),a=be(),{id:o=a||`headlessui-combobox-input-${i}`,onChange:c,displayValue:l,disabled:d=r.disabled||!1,autoFocus:f=!1,type:p=`text`,...m}=e,g=(0,z.useRef)(null),_=te(g,t,Ne(),n.actions.setInputElement),[y,b]=F(n,e=>[e.comboboxState,e.isTyping]),x=h(),S=v(()=>{n.actions.onChange(null),n.state.optionsElement&&(n.state.optionsElement.scrollTop=0),n.actions.goToOption({focus:P.Nothing})}),C=(0,z.useMemo)(()=>typeof l==`function`&&r.value!==void 0?l(r.value)??``:typeof r.value==`string`?r.value:``,[r.value,l]);Nt(([e,t],[r,i])=>{if(n.state.isTyping)return;let a=g.current;a&&((i===I.Open&&t===I.Closed||e!==r)&&(a.value=e),requestAnimationFrame(()=>{if(n.state.isTyping||!a||ce(a))return;let{selectionStart:e,selectionEnd:t}=a;Math.abs((t??0)-(e??0))===0&&e===0&&a.setSelectionRange(a.value.length,a.value.length)}))},[C,y,b]),Nt(([e],[t])=>{if(e===I.Open&&t===I.Closed){if(n.state.isTyping)return;let e=g.current;if(!e)return;let t=e.value,{selectionStart:r,selectionEnd:i,selectionDirection:a}=e;e.value=``,e.value=t,a===null?e.setSelectionRange(r,i):e.setSelectionRange(r,i,a)}},[y]);let E=(0,z.useRef)(!1),D=v(()=>{E.current=!0}),O=v(()=>{x.nextFrame(()=>{E.current=!1})}),k=v(e=>{switch(n.actions.setIsTyping(!0),e.key){case N.Enter:if(n.state.comboboxState!==I.Open||E.current)return;if(e.preventDefault(),e.stopPropagation(),n.selectors.activeOptionIndex(n.state)===null){n.actions.closeCombobox();return}n.actions.selectActiveOption(),r.mode===L.Single&&n.actions.closeCombobox();break;case N.ArrowDown:return e.preventDefault(),e.stopPropagation(),w(n.state.comboboxState,{[I.Open]:()=>n.actions.goToOption({focus:P.Next}),[I.Closed]:()=>n.actions.openCombobox()});case N.ArrowUp:return e.preventDefault(),e.stopPropagation(),w(n.state.comboboxState,{[I.Open]:()=>n.actions.goToOption({focus:P.Previous}),[I.Closed]:()=>{(0,pr.flushSync)(()=>n.actions.openCombobox()),r.value||n.actions.goToOption({focus:P.Last})}});case N.Home:if(n.state.comboboxState===I.Closed||e.shiftKey)break;return e.preventDefault(),e.stopPropagation(),n.actions.goToOption({focus:P.First});case N.PageUp:return e.preventDefault(),e.stopPropagation(),n.actions.goToOption({focus:P.First});case N.End:if(n.state.comboboxState===I.Closed||e.shiftKey)break;return e.preventDefault(),e.stopPropagation(),n.actions.goToOption({focus:P.Last});case N.PageDown:return e.preventDefault(),e.stopPropagation(),n.actions.goToOption({focus:P.Last});case N.Escape:return n.state.comboboxState===I.Open?(e.preventDefault(),n.state.optionsElement&&!r.optionsPropsRef.current.static&&e.stopPropagation(),r.mode===L.Single&&r.value===null&&S(),n.actions.closeCombobox()):void 0;case N.Tab:if(n.actions.setIsTyping(!1),n.state.comboboxState!==I.Open)return;r.mode===L.Single&&n.state.activationTrigger!==R.Focus&&n.actions.selectActiveOption(),n.actions.closeCombobox()}}),A=v(e=>{c?.(e),r.mode===L.Single&&e.target.value===``&&S(),n.actions.openCombobox()}),j=v(e=>{var t,i;let a=e.relatedTarget??Pt.find(t=>t!==e.currentTarget);if(!((t=n.state.optionsElement)!=null&&t.contains(a))&&!((i=n.state.buttonElement)!=null&&i.contains(a))&&n.state.comboboxState===I.Open)return e.preventDefault(),r.mode===L.Single&&r.value===null&&S(),n.actions.closeCombobox()}),M=v(e=>{var t,i;let a=e.relatedTarget??Pt.find(t=>t!==e.currentTarget);(t=n.state.buttonElement)!=null&&t.contains(a)||(i=n.state.optionsElement)!=null&&i.contains(a)||r.disabled||r.immediate&&n.state.comboboxState!==I.Open&&x.microTask(()=>{(0,pr.flushSync)(()=>n.actions.openCombobox()),n.actions.setActivationTrigger(R.Focus)})}),ne=Se(),ie=ue(),{isFocused:ae,focusProps:se}=u({autoFocus:f}),{isHovered:le,hoverProps:de}=s({isDisabled:d}),fe=F(n,e=>e.optionsElement),pe=oe({open:y===I.Open,disabled:d,invalid:r.invalid,hover:le,focus:ae,autofocus:f}),me=T({ref:_,id:o,role:`combobox`,type:p,"aria-controls":fe?.id,"aria-expanded":y===I.Open,"aria-activedescendant":F(n,n.selectors.activeDescendantId),"aria-labelledby":ne,"aria-describedby":ie,"aria-autocomplete":`list`,defaultValue:e.defaultValue??(r.defaultValue===void 0?null:l?.(r.defaultValue))??r.defaultValue,disabled:d||void 0,autoFocus:f,onCompositionStart:D,onCompositionEnd:O,onKeyDown:k,onChange:A,onFocus:M,onBlur:j},se,de);return ee()({ourProps:me,theirProps:m,slot:pe,defaultTag:_r,name:`Combobox.Input`})}function ur(e,t){let n=tr(`Combobox.Button`),r=or(`Combobox.Button`),[i,a]=(0,z.useState)(null),o=te(t,a,n.actions.setButtonElement),c=(0,re.useId)(),{id:f=`headlessui-combobox-button-${c}`,disabled:p=r.disabled||!1,autoFocus:m=!1,...h}=e,[g,_,y]=F(n,e=>[e.comboboxState,e.inputElement,e.optionsElement]),b=Wn(_),x=g===I.Open;Qe(x,{trigger:i,action:(0,z.useCallback)(e=>{if(i!=null&&i.contains(e.target)||_!=null&&_.contains(e.target))return ze.Ignore;let t=e.target.closest(`[role="option"]:not([data-disabled])`);return ae(t)?ze.Select(t):y!=null&&y.contains(e.target)?ze.Ignore:ze.Close},[i,_,y]),close:n.actions.closeCombobox,select:n.actions.selectActiveOption});let S=v(e=>{switch(e.key){case N.Space:case N.Enter:e.preventDefault(),e.stopPropagation(),n.state.comboboxState===I.Closed&&(0,pr.flushSync)(()=>n.actions.openCombobox()),b();return;case N.ArrowDown:e.preventDefault(),e.stopPropagation(),n.state.comboboxState===I.Closed&&((0,pr.flushSync)(()=>n.actions.openCombobox()),n.state.dataRef.current.value||n.actions.goToOption({focus:P.First})),b();return;case N.ArrowUp:e.preventDefault(),e.stopPropagation(),n.state.comboboxState===I.Closed&&((0,pr.flushSync)(()=>n.actions.openCombobox()),n.state.dataRef.current.value||n.actions.goToOption({focus:P.Last})),b();return;case N.Escape:if(n.state.comboboxState!==I.Open)return;e.preventDefault(),n.state.optionsElement&&!r.optionsPropsRef.current.static&&e.stopPropagation(),(0,pr.flushSync)(()=>n.actions.closeCombobox()),b();return;default:return}}),C=Ge(()=>{n.state.comboboxState===I.Open?n.actions.closeCombobox():n.actions.openCombobox(),b()}),w=Se([f]),{isFocusVisible:E,focusProps:D}=u({autoFocus:m}),{isHovered:O,hoverProps:k}=s({isDisabled:p}),{pressed:A,pressProps:j}=l({disabled:p}),M=oe({open:g===I.Open,active:A||g===I.Open,disabled:p,invalid:r.invalid,value:r.value,hover:O,focus:E}),ne=T({ref:o,id:f,type:d(e,i),tabIndex:-1,"aria-haspopup":`listbox`,"aria-controls":y?.id,"aria-expanded":g===I.Open,"aria-labelledby":w,disabled:p||void 0,autoFocus:m,onKeyDown:S},C,D,k,j);return ee()({ourProps:ne,theirProps:h,slot:M,defaultTag:vr,name:`Combobox.Button`})}function dr(e,t){let n=(0,re.useId)(),{id:r=`headlessui-combobox-options-${n}`,hold:i=!1,anchor:a,portal:o=!1,modal:s=!0,transition:c=!1,...l}=e,u=tr(`Combobox.Options`),d=or(`Combobox.Options`),f=Ie(a);f&&(o=!0);let[p,m]=Fe(f),[h,g]=(0,z.useState)(null),_=je(),y=te(t,f?p:null,u.actions.setOptionsElement,g),[b,x,S,C,w]=F(u,e=>[e.comboboxState,e.inputElement,e.buttonElement,e.optionsElement,e.activationTrigger]),E=pt(x||S),D=pt(C),O=wt(),[A,j]=Dt(c,h,O===null?b===I.Open:(O&Et.Open)===Et.Open);tt(A,x,u.actions.closeCombobox);let M=!d.__demoMode&&s&&b===I.Open;ut(M,D);let ne=!d.__demoMode&&s&&b===I.Open;bt(ne,{allowed:(0,z.useCallback)(()=>[x,S,C],[x,S,C])});let N=!F(u,u.selectors.didInputMove)&&A;k(()=>{d.optionsPropsRef.current.static=e.static??!1},[d.optionsPropsRef,e.static]),k(()=>{d.optionsPropsRef.current.hold=i},[d.optionsPropsRef,i]),Mt(b===I.Open,{container:C,accept(e){return e.getAttribute(`role`)===`option`?NodeFilter.FILTER_REJECT:e.hasAttribute(`role`)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute(`role`,`none`)}});let ie=Se([S?.id]),ae=oe({open:b===I.Open,option:void 0}),se=v(()=>{u.actions.setActivationTrigger(R.Pointer)}),ce=v(e=>{e.preventDefault(),u.actions.setActivationTrigger(R.Pointer)}),le=T(f?_():{},{"aria-labelledby":ie,role:`listbox`,"aria-multiselectable":d.mode===L.Multi||void 0,id:r,ref:y,style:{...l.style,...m,"--input-width":Me(A,x,!0).width,"--button-width":Me(A,S,!0).width},onWheel:w===R.Pointer?void 0:se,onMouseDown:ce,...Tt(j)}),ue=A&&b===I.Closed&&!e.static,de=Oe(ue,d.virtual?.options),fe=Oe(ue,d.value),pe=(0,z.useCallback)(e=>d.compare(fe,e),[d.compare,fe]),me=(0,z.useMemo)(()=>{if(!d.virtual)return d;if(de===void 0)throw Error("Missing `options` in virtual mode");return de===d.virtual.options?d:{...d,virtual:{...d.virtual,options:de}}},[d,de,d.virtual?.options]);d.virtual&&Object.assign(l,{children:z.createElement(mr.Provider,{value:me},z.createElement(sr,{slot:ae},l.children))});let he=ee(),ge=(0,z.useMemo)(()=>d.mode===L.Multi?d:{...d,isSelected:pe},[d,pe]);return z.createElement(mt,{enabled:o?e.static||A:!1,ownerDocument:E},z.createElement(mr.Provider,{value:ge},he({ourProps:le,theirProps:{...l,children:z.createElement(De,{freeze:ue},typeof l.children==`function`?l.children?.call(l,ae):l.children)},slot:ae,defaultTag:yr,features:br,visible:N,name:`Combobox.Options`})))}function fr(e,t){var n;let r=or(`Combobox.Option`),i=tr(`Combobox.Option`),a=(0,re.useId)(),{id:o=`headlessui-combobox-option-${a}`,value:s,disabled:c=((n=r.virtual)?.disabled)?.call(n,s)??!1,order:l=null,...u}=e,[d]=F(i,e=>[e.inputElement]),f=Wn(d),p=F(i,(0,z.useCallback)(e=>i.selectors.isActive(e,s,o),[s,o])),m=r.isSelected(s),h=(0,z.useRef)(null),g=A({disabled:c,value:s,domRef:h,order:l}),y=(0,z.useContext)(hr),b=te(t,h,y?y.measureElement:null),x=v(()=>{i.actions.setIsTyping(!1),i.actions.onChange(s)});k(()=>i.actions.registerOption(o,g),[g,o]);let S=F(i,(0,z.useCallback)(e=>i.selectors.shouldScrollIntoView(e,s,o),[s,o]));k(()=>{if(S)return _().requestAnimationFrame(()=>{var e,t;(t=(e=h.current)?.scrollIntoView)==null||t.call(e,{block:`nearest`})})},[S,h]);let C=v(e=>{e.preventDefault(),e.button===He.Left&&(c||(x(),vt()||requestAnimationFrame(()=>f()),r.mode===L.Single&&i.actions.closeCombobox()))}),w=v(()=>{if(c)return i.actions.goToOption({focus:P.Nothing});let e=r.calculateIndex(s);i.actions.goToOption({focus:P.Specific,idx:e})}),T=We(),E=v(e=>T.update(e)),D=v(e=>{if(!T.wasMoved(e)||c||p&&i.state.activationTrigger===R.Pointer)return;let t=r.calculateIndex(s);i.actions.goToOption({focus:P.Specific,idx:t},R.Pointer)}),O=v(e=>{T.wasMoved(e)&&(c||p&&(r.optionsPropsRef.current.hold||i.state.activationTrigger===R.Pointer&&i.actions.goToOption({focus:P.Nothing})))}),j=oe({active:p,focus:p,selected:m,disabled:c}),M={id:o,ref:b,role:`option`,tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0||void 0,"aria-selected":m,disabled:void 0,onMouseDown:C,onFocus:w,onPointerEnter:E,onMouseEnter:E,onPointerMove:D,onMouseMove:D,onPointerLeave:O,onMouseLeave:O};return ee()({ourProps:M,theirProps:u,slot:j,defaultTag:xr,name:`Combobox.Option`})}var z,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or;function kr(){return(kr=t((()=>{o(),f(),Un(),z=e(n(),1),pr=i(),a(),Ee(),me(),ge(),g(),Ae(),x(),Je(),ne(),xt(),y(),D(),rt(),dt(),ct(),Be(),Kn(),c(),gt(),j(),C(),Re(),kt(),jt(),Ft(),de(),Pe(),he(),ke(),we(),Ot(),et(),yt(),It(),Xe(),O(),se(),E(),fe(),ie(),ye(),Ve(),ft(),er(),ar(),mr=(0,z.createContext)(null),mr.displayName=`ComboboxDataContext`,hr=(0,z.createContext)(null),gr=z.Fragment,_r=`input`,vr=`button`,yr=`div`,br=S.RenderStrategy|S.Static,xr=`div`,Sr=b(cr),Cr=b(ur),wr=b(lr),Tr=xe,Er=b(dr),Dr=b(fr),Or=Object.assign(Sr,{Input:wr,Button:Cr,Label:Tr,Options:Er,Option:Dr})})))()}var Ar,jr,Mr,Nr,Pr,Fr,Ir,B;function Lr(){return(Lr=t((()=>{Ar=`_combobox_1ye4e_10`,jr=`_combobox__overline_1ye4e_17`,Mr=`_combobox__options_1ye4e_33`,Nr=`_combobox__footer_1ye4e_231`,Pr=`_combobox__label_1ye4e_243`,Fr=`_combobox__subLabel_1ye4e_247`,Ir=`_combobox__option_1ye4e_33`,B={combobox:Ar,combobox__overline:jr,"combobox__overline--no-label":`_combobox__overline--no-label_1ye4e_25`,combobox__options:Mr,"combobox__no-matches":`_combobox__no-matches_1ye4e_43`,"combobox--label-layout-vertical":`_combobox--label-layout-vertical_1ye4e_54`,"combobox--label-layout-horizontal":`_combobox--label-layout-horizontal_1ye4e_58`,"combobox-input":`_combobox-input_1ye4e_71`,"combobox-input__field":`_combobox-input__field_1ye4e_93`,"combobox-input--has-chips":`_combobox-input--has-chips_1ye4e_115`,"combobox-input__button":`_combobox-input__button_1ye4e_129`,"combobox-input__chips":`_combobox-input__chips_1ye4e_137`,"combobox-input__field--truncated":`_combobox-input__field--truncated_1ye4e_184`,"combobox-input__icon":`_combobox-input__icon_1ye4e_216`,"combobox-input__icon--reversed":`_combobox-input__icon--reversed_1ye4e_227`,combobox__footer:Nr,"combobox--has-fieldNote":`_combobox--has-fieldNote_1ye4e_236`,combobox__label:Pr,combobox__subLabel:Fr,"combobox__label--disabled":`_combobox__label--disabled_1ye4e_252`,combobox__option:Ir,"combobox__option-text":`_combobox__option-text_1ye4e_260`,"combobox__required-text":`_combobox__required-text_1ye4e_264`,"combobox__required-text--disabled":`_combobox__required-text--disabled_1ye4e_268`,"combobox-input--error":`_combobox-input--error_1ye4e_272`,"combobox-input--warning":`_combobox-input--warning_1ye4e_285`}})))()}function V({"aria-label":e,by:t,children:n,className:r,disabled:i,fieldNote:a,label:o,labelLayout:s=`vertical`,name:c,optionsClassName:l,required:u,showHint:d,status:f,onChange:p,subLabel:h,...g}){let[_,v]=(0,H.useState)(g.value===void 0?g.defaultValue:g.value),[y,b]=(0,H.useState)(null),x=m(B.combobox,a&&B[`combobox--has-fieldNote`],s&&B[`combobox--label-layout-${s}`],r),{defaultValue:S,...C}=g,ee=g.virtual?.options.length===0,w=!!g.multiple&&g.value===void 0,te=e=>{_!==e&&(v(e),p&&p(e))},T={className:x,as:`div`,by:t,disabled:i,invalid:g.invalid??f===`critical`,name:c,...C,...ee&&{virtual:null},...w?{value:_??[]}:{defaultValue:S},onChange:te},E=g.value===void 0?_:g.value,D=g.multiple&&Array.isArray(E)?E:[],O=(e,n)=>typeof t==`function`?t(e,n):typeof t==`string`&&typeof e==`object`&&typeof n==`object`?e[t]===n[t]:e===n,k={ariaLabel:e,disabled:i,fieldElement:y,hasNoVirtualOptions:ee,optionsClassName:l,removeValue:e=>{let t=D.filter(t=>!O(t,e));v(t),p&&p(t)},required:u,selectedValues:D,setFieldElement:b,status:f,multiple:g.multiple};return typeof n==`function`?(0,U.jsx)(zr.Provider,{value:k,children:(0,U.jsx)(Vr,{...T,children:n})}):(0,U.jsxs)(zr.Provider,{value:k,children:[(0,U.jsxs)(Vr,{...T,children:[(o||u)&&(0,U.jsx)(V.Label,{disabled:i,required:u,showHint:d,subLabel:h,children:o}),n]}),a&&(0,U.jsx)(`div`,{className:B.combobox__footer,children:(0,U.jsx)(hn,{disabled:i,status:f,children:a})})]})}var H,U,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr;function Jr(){return(Jr=t((()=>{zt(),kr(),ye(),p(),H=e(n()),Gt(),un(),fn(),mn(),Jt(),Xt(),gn(),on(),cn(),vn(),en(),Lr(),U=r(),Rr=e=>typeof e==`string`?e:String(e.label??``),zr=H.createContext({}),Br=10,Vr=Or,Hr=({children:e,required:t,className:n,disabled:r,showHint:i,subLabel:a})=>{let o=m(B.combobox__label,r&&m(B[`combobox__label--disabled`]),n),s=m(B[`combobox__required-text`],r&&B[`combobox__required-text--disabled`]),c=m(B.combobox__overline,!e&&B[`combobox__overline--no-label`]),l=m(B.combobox__subLabel,r&&B[`combobox__label--disabled`]);return(0,U.jsxs)(`div`,{className:c,children:[(0,U.jsx)(xe,{as:pn,className:o,disabled:r,size:`md`,children:e}),t&&i&&(0,U.jsx)($t,{"aria-disabled":r??void 0,as:`span`,className:s,preset:`body-sm`,children:`(Required)`}),!t&&i&&(0,U.jsx)($t,{"aria-disabled":r??void 0,as:`span`,className:s,preset:`body-sm`,children:`(Optional)`}),e&&a&&(0,U.jsx)(`div`,{className:l,children:(0,U.jsx)($t,{as:`span`,preset:`body-sm`,children:a})})]})},Ur=function(e){let{"aria-label":t=`Show options`,children:n,className:r,icon:i,...a}=e;Kt(`Combobox.Button`,`icon`,`expand`,i);let o=m(B[`combobox-input__button`],r),s=Zt(`expand`);return(0,U.jsx)(Cr,{"aria-label":t,className:o,...a,children:e=>typeof n==`function`?n(e):n?(0,U.jsx)(U.Fragment,{children:n}):(0,U.jsx)(U.Fragment,{children:qt(s)&&(0,U.jsx)(Yt,{className:m(B[`combobox-input__icon`],e.open&&B[`combobox-input__icon--reversed`]),content:s,purpose:`decorative`,size:`24px`})})})},Wr=function(e){let{"aria-label":t,chipLabel:n=Rr,chipLeadingComponent:r,className:i,inputClassName:a,onKeyDown:o,shouldTruncate:s=!1,showChips:c=!0,icon:l,...u}=e;Kt(`Combobox.Input`,`icon`,`expand`,l);let{ariaLabel:d,disabled:f,multiple:p,removeValue:h,required:g,selectedValues:_=[],status:v}=(0,H.useContext)(zr),y=m(B[`combobox-input__field`],s&&B[`combobox-input__field--truncated`],a),b=(0,H.useRef)(null),x=!!(c&&p&&_.length>0),S=(0,H.useRef)(_.length);return(0,H.useEffect)(()=>{let e=S.current;if(S.current=_.length,!c||!p||_.length<=e)return;let t=b.current;t&&t.ownerDocument.activeElement===t&&t.select()},[p,_.length,c]),(0,U.jsxs)(qr,{className:i,hasChips:x,status:v,children:[x&&(0,U.jsx)(`ul`,{className:B[`combobox-input__chips`],children:_.map((e,t)=>(0,U.jsx)(`li`,{children:(0,U.jsx)(_n,{isDisabled:f,label:n(e),leadingComponent:r?.(e),onClick:t=>{t.preventDefault(),t.stopPropagation(),h?.(e)}})},`${t}-${n(e)}`))}),(0,U.jsx)(wr,{"aria-label":t??d,className:y,onKeyDown:e=>{o&&o(e),x&&e.key===`Backspace`&&!e.defaultPrevented&&e.currentTarget.value===``&&(e.preventDefault(),h&&h(_[_.length-1]))},ref:b,required:g,style:{"--combobox__input-width":`calc(${b.current?.value.length||0} * 1ch)`},...u})]})},Gr=function(e){let{anchor:t,children:n,className:r,noMatchesText:i=`No matches found`,ref:a,style:o,...s}=e,{fieldElement:c,hasNoVirtualOptions:l,optionsClassName:u}=(0,H.useContext)(zr),d=t===void 0&&!!c,{floatingStyles:f,refs:p}=Bt({elements:{reference:d?c:null},placement:`bottom-start`,transform:!1,whileElementsMounted:Wt,middleware:[Lt(Br),Rt(),Ut({apply({elements:{floating:e},rects:t}){e.style.minWidth=`${t.reference.width}px`}})]}),h=Ht([p.setFloating,a]),g=m(B.combobox__options,r,u),_=(0,U.jsx)(`div`,{"aria-disabled":`true`,"aria-selected":`false`,className:B[`combobox__no-matches`],role:`option`,children:(0,U.jsx)($t,{as:`div`,preset:`body-sm`,children:i})}),v=l?_:typeof n==`function`?e=>{let t=n(e);return e.option!==void 0||qt(t)?t:_}:qt(n)?n:_,y=(0,U.jsx)(Er,{anchor:d?void 0:t??{to:`bottom start`,gap:24,offset:-12},as:sn,className:g,modal:!1,ref:d?h:a,style:d?{...f,...o}:o,...s,children:v});return d?(0,U.jsx)(Vt,{children:y}):y},Kr=function(e){let{children:t,className:n,optionClassName:r,subLabel:i,...a}=e,o=m(n,r,B.combobox__option),{multiple:s}=(0,H.useContext)(zr);return(0,U.jsx)(Dr,{as:H.Fragment,...a,children:typeof t==`function`?t:({focus:e,disabled:n,selected:r})=>(0,U.jsx)(ln,{__type:`selectitem`,className:o,isDisabled:n,isFocused:e,leadingContent:s?(0,U.jsx)(dn,{"aria-hidden":`true`,"aria-label":`checkbox`,checked:r,inert:!0,readOnly:!0}):(0,U.jsx)(yn,{"aria-hidden":`true`,"aria-label":`radio`,checked:r,inert:!0,readOnly:!0}),subLabel:i,children:(0,U.jsx)(`span`,{className:B[`combobox__option-text`],children:t})})})},qr=H.forwardRef((e,t)=>{let{children:n,className:r,hasChips:i,status:a,icon:o,...s}=e;Kt(`Combobox.InputWrapper`,`icon`,`expand`,o);let{setFieldElement:c,status:l}=(0,H.useContext)(zr),u=a??l,d=Ht([t,c]),f=m(B[`combobox-input`],i&&B[`combobox-input--has-chips`],u===`warning`&&B[`combobox-input--warning`],u===`critical`&&B[`combobox-input--error`],r);return(0,U.jsxs)(`div`,{className:f,ref:d,...s,children:[n,(0,U.jsx)(Ur,{})]})}),V.displayName=`Combobox`,Ur.displayName=`Combobox.Button`,Wr.displayName=`Combobox.Input`,qr.displayName=`Combobox.InputWrapper`,Hr.displayName=`Combobox.Label`,Kr.displayName=`Combobox.Option`,Gr.displayName=`Combobox.Options`,V.Button=Ur,V.Input=Wr,V.InputWrapper=qr,V.Label=Hr,V.Option=Kr,V.Options=Gr;try{V.displayName=`Combobox`,V.__docgenInfo={description:`## Usage

A text field paired with a list of options. Typing filters the list, so use it where a
\`Select\` would be unwieldy. Supports controlled and uncontrolled behavior.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard | Type to filter a list of options; one can be selected. | Country selector. Assignee picker. |
| Multi-select | Type to filter, and select more than one option from the list. | Filter panels. Role or permission assignments. |
| Disabled | Non-interactive; used to show unavailable or inactive states. | Feature-gated selections. Incomplete forms. |
| Preselected | Default selection appears in the field before user interacts. | Recommended settings. "Most common" default. |

Filtering is left to the consumer, since only the consumer knows how the option data is
shaped and where it comes from. Use \`onChange\` on \`Combobox.Input\` to capture the query,
then pass the filtered list to \`Combobox.Options\`.

### Best Practices

* Use \`Combobox\` for long lists where typing is faster than scrolling. For 3-10 options, use \`Select\`.
* Order the menu options logically to make it easier for users to find the option they want. Default to alphabetical order.
* Keep the option list the same width as the field that triggered it. This is the default.
* When the filtered list is empty, \`Combobox.Options\` says "No matches found" so the field doesn't look broken. Use \`noMatchesText\` to change the wording.
* When only so many values may be selected, say so in the \`subLabel\` (e.g., "Choose up to 3"). If the user selects more than that, set \`status\` to \`"critical"\` and explain in the \`fieldNote\`. Don't disable the remaining options: it hides the choices without telling the user why.

## Interaction

The field is always editable, so users can either type to narrow the list or open the full
list with the toggle button. In single-select mode, only one selection can be made. In
multi-select mode, one or more selections can be made from the list, and each one shows in
the field as a chip. Adding a chip selects the query text that found it, so the next keystroke
begins a new search. A chip goes away either through its own close button or by pressing
backspace in an empty field.

## Content & Accessibility

### Do's

* Use short, precise labels whenever possible.
* Avoid truncated items.
* In short lists, order from most common to least common choices.
* In longer lists use alphabetical order, but if there are 2 or 3 very common selections, consider repeating them at the top of the list.
* Use sentence case.

### Don'ts

* Use periods at the end of labels.
* Place placeholder text within the field; it can cause accessibility issues with color contrast, inconsistent screen-reader behavior, and text disappearing as users type.

## Resources

* https://headlessui.com/react/combobox`,displayName:`Combobox`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling.`,name:`className`,required:!1,tags:{},type:{name:`any`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},form:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`form`,required:!1,tags:{},type:{name:`string`}},multiple:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`multiple`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Name of the form element, which triggers the generation of hidden key/value form fields (e.g. \`name=$name[$key]\`).

See: https://headlessui.com/react/combobox#using-with-html-forms`,name:`name`,required:!1,tags:{},type:{name:`string`}},as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(() => void)`}},__demoMode:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`__demoMode`,required:!1,tags:{},type:{name:`boolean`}},nullable:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`nullable`,required:!1,tags:{deprecated:"The `<Combobox />` is now nullable default"},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},immediate:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`immediate`,required:!1,tags:{},type:{name:`boolean`}},virtual:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`virtual`,required:!1,tags:{},type:{name:`{ options: NoInfer<ComboboxValue>[] | { toString: (() => string) | (() => string); charAt: unknown; charCodeAt: unknown; concat: unknown; indexOf: unknown; lastIndexOf: unknown; localeCompare: unknown; match: unknown; replace: unknown; ... 41 more ...; toWellFormed: unknown; }[]; disabled?: ((value: NoInfer<Combobox...`}},by:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Compare option values by a named key, or by a comparison function, instead of by reference.
Useful when the selected value and the option come from different places.

See: https://headlessui.com/react/combobox#binding-objects-as-values`,name:`by`,required:!1,tags:{},type:{name:`string | ((a: ComboboxValue, z: ComboboxValue) => boolean)`}},defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The default value of the combobox field (when uncontrolled)`,name:`defaultValue`,required:!1,tags:{},type:{name:`ComboboxSelection`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Fires when a value is selected. Passes the selected value, or the list of selected values\nwhen `multiple` is set.",name:`onChange`,required:!1,tags:{},type:{name:`((value: ComboboxSelection | null) => void)`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The value of the combobox field (when controlled)`,name:`value`,required:!1,tags:{},type:{name:`ComboboxSelection`}},optionsClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional options menu styling.

If optionsClassName is provided please include the width property to define
the options menu width.`,name:`optionsClassName`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Indicates that field is required for form to be successfully submitted`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},fieldNote:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Text under the field used to provide validation hints or error message to describe the input error.`,name:`fieldNote`,required:!1,tags:{},type:{name:`ReactNode`}},label:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Visible text label for the component.`,name:`label`,required:!1,tags:{},type:{name:`string`}},labelLayout:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether the label is adjacent to the field (horizontal) or above the field (vertical)

**Default is \`"vertical"\`**.`,name:`labelLayout`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether it should show the field hint or not

**Default is \`"false"\`**.`,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},status:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Status for the field state

**Default is \`"default"\`**.`,name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "critical" | "warning"`,value:[{value:`"default"`},{value:`"critical"`},{value:`"warning"`}]}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{V.Button.displayName=`Combobox.Button`,V.Button.__docgenInfo={description:`The toggle for the option list. Unlike \`Select\`, this is not the primary way into the
component: the text field is. It sits at the end of the field and reveals the full,
unfiltered list.`,displayName:`Combobox.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"button"`,value:[{value:`"button"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: ButtonRenderPropArg) => string)`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{V.Input.displayName=`Combobox.Input`,V.Input.__docgenInfo={description:`The editable text field for the component, wrapped in the bordered field styling along
with the toggle button for the option list.

When \`multiple\` is set, the values picked so far appear ahead of the text field as chips,
each one removable. The text field then holds only the query, which is why \`displayValue\`
has no effect in that mode.`,displayName:`Combobox.Input`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Optional className for additional styling of the field wrapper.`,name:`className`,required:!1,tags:{},type:{name:`string | (((bag: InputRenderPropArg) => string) & string)`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},defaultValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`ComboboxValue`}},autoFocus:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`boolean`}},as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"input"`,value:[{value:`"input"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},displayValue:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Maps the currently selected value to the text shown in the text field. Receives \`null\`
when nothing is selected.

See: https://headlessui.com/react/combobox#binding-objects-as-values`,name:`displayValue`,required:!1,tags:{},type:{name:`((item: ComboboxValue | null) => string)`}},inputClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Optional className for additional styling of the inner `<input>` element.",name:`inputClassName`,required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Fires on every keystroke in the text field. Use it to filter the options passed\nto `Combobox.Options`.",name:`onChange`,required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}},chipLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Maps a selected value to the text shown on its chip, when `multiple` is set.\n\n**Defaults to the value's `label`**, or the value itself when it's a string.",name:`chipLabel`,required:!1,tags:{},type:{name:`((item: ComboboxValue) => string)`}},chipLeadingComponent:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:"Leading glyph (icon) or content for a selected value's chip, when `multiple` is set.",name:`chipLeadingComponent`,required:!1,tags:{},type:{name:`((item: ComboboxValue) => IconOrContent)`}},shouldTruncate:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether we should truncate the text displayed in the combobox field`,name:`shouldTruncate`,required:!1,tags:{},type:{name:`boolean`}},showChips:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Whether selected values appear as removable chips inside the field, when \`multiple\` is set.
Turn it off to surface the selection yourself. Also governs whether backspace on an empty
field removes the last chip, and whether adding a chip selects the query text.

**Default is \`"true"\`**.`,name:`showChips`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{V.Label.displayName=`Combobox.Label`,V.Label.__docgenInfo={description:``,displayName:`Combobox.Label`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType`}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`any`}},passive:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`passive`,required:!1,tags:{},type:{name:`boolean`}},htmlFor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/label/label.d.ts`,name:`TypeLiteral`}],description:``,name:`htmlFor`,required:!1,tags:{},type:{name:`string`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLLabelElement>`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean`}},showHint:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`showHint`,required:!1,tags:{},type:{name:`boolean`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Add additional descriptive text for the field name`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{V.Option.displayName=`Combobox.Option`,V.Option.__docgenInfo={description:`Represents one of the available options for selection`,displayName:`Combobox.Option`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div"`,value:[{value:`"div"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: OptionRenderPropArg) => string)`}},disabled:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`ComboboxValue`}},order:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`order`,required:!1,tags:{},type:{name:`number`}},subLabel:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/PopoverListItem/PopoverListItem.tsx`,name:`TypeLiteral`}],description:`Text below the main menu item call-to-action, briefly describing the menu item's function`,name:`subLabel`,required:!1,tags:{},type:{name:`ReactNode`}},optionClassName:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:``,name:`optionClassName`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{V.Options.displayName=`Combobox.Options`,V.Options.__docgenInfo={description:`The content container showing the available options. Pass in the options that match the
current query; \`Combobox\` does no filtering of its own. With none passed in, it shows
\`noMatchesText\` instead.

The list lines up with the field, not the text field inside it. HeadlessUI can only anchor to
the text field, which moves and narrows as chips fill the field, so we position the list with
Floating UI instead.`,displayName:`Combobox.Options`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Combobox/Combobox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div"`,value:[{value:`"div"`}]}},refName:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`refName`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | ((bag: OptionsRenderPropArg) => string)`}},static:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`static`,required:!1,tags:{},type:{name:`boolean`}},unmount:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/utils/render.d.ts`,name:`TypeLiteral`}],description:``,name:`unmount`,required:!1,tags:{},type:{name:`boolean`}},hold:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`hold`,required:!1,tags:{},type:{name:`boolean`}},anchor:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Where the option list sits relative to the field. When left unset, the list lines up with
the field's bottom left edge and is at least as wide as the field, however many chips it
holds. A width class on the list can make it wider.

Setting it hands positioning back to HeadlessUI, which measures from the text field itself
rather than the field's border.

See: https://headlessui.com/react/combobox#positioning-the-options`,name:`anchor`,required:!1,tags:{},type:{name:`AnchorProps`}},portal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`portal`,required:!1,tags:{},type:{name:`boolean`}},modal:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`modal`,required:!1,tags:{},type:{name:`boolean`}},transition:{defaultValue:null,declarations:[{fileName:`edu-design-system/node_modules/@headlessui/react/dist/components/combobox/combobox.d.ts`,name:`TypeLiteral`}],description:``,name:`transition`,required:!1,tags:{},type:{name:`boolean`}},noMatchesText:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`Text shown in place of the options when none are passed in, such as when a query matches
nothing.

**Default is \`"No matches found"\`**.`,name:`noMatchesText`,required:!1,tags:{},type:{name:`ReactNode`}},ref:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Combobox/Combobox.tsx`,name:`TypeLiteral`}],description:`The list element. Merged with the ref used to position the list against the field.`,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement>`}}},tags:{}}}catch{}})))()}var Yr,W,G,K,q,Xr,J,Zr,Qr,$r,ei,ti,Y,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,X,Z,pi,mi,Q,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,$,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi;function Vi(){return(Vi=t((()=>{Yr=e(n()),Jr(),tn(),rn(),Xt(),W=r(),{expect:G,userEvent:K,within:q}=__STORYBOOK_MODULE_TEST__,Xr={title:`Components/Combobox`,component:V,parameters:{docs:{subtitle:`A text field paired with a list of options. Typing filters the list, and the user may select one or more of the matches.`},layout:`centered`,chromatic:{delay:500,prefersReducedMotion:`reduce`}},argTypes:{multiple:{description:`Whether multiple values are allowed in this instance`},value:{table:{description:`The value of the combobox field (when controlled)`}},defaultValue:{description:`The default value of the combobox field (when uncontrolled)`},immediate:{description:`Whether the option list opens as soon as the field receives focus, instead of waiting for a keystroke`},__demoMode:{table:{disable:!0}},children:{control:!1},onChange:{description:"Optional change handler. Fires when a value is selected (and passes in the selected value, or list of values when `multiple`)"},onClose:{description:`Optional handler that fires when the option list closes, useful for resetting the query`}},tags:[`autodocs`,`version:1.0.0`]},J=[{key:`1`,label:`Dogs`,subLabel:`Who's a good boy?`},{key:`2`,label:`Cats`,subLabel:`Super independent.`},{key:`3`,label:`Birds`,subLabel:`Living relics!`},{key:`4`,label:`Rabbits`,subLabel:`Langomorphs are rad.`}],Zr=Array(30).fill(`test`).map((e,t)=>({key:`${e}-${t}`,label:`${e}${t}`})),Qr=({options:e=J,inputProps:t,optionsAnchor:n,showSubLabels:r,...i})=>{let[a,o]=(0,Yr.useState)(``),s=a?e.filter(e=>e.label.toLowerCase().includes(a.toLowerCase())):e;return(0,W.jsxs)(V,{onClose:()=>o(``),...i,children:[(0,W.jsx)(V.Input,{"data-testid":`input-button`,displayValue:e=>e?.label??``,onChange:e=>o(e.target.value),...t}),(0,W.jsx)(V.Options,{anchor:n,className:`w-60`,children:s.map(e=>(0,W.jsx)(V.Option,{subLabel:r?e.subLabel:void 0,value:e,children:e.label},e.key))})]})},$r=async e=>{let{canvasElement:t}=e,n=await q(t).findByTestId(`input-button`);await K.click(n),await K.keyboard(`{ArrowDown}`)},ei=e=>async t=>{let{canvasElement:n}=t,r=await q(n).findByRole(`combobox`);await K.clear(r),await K.type(r,e)},ti=async e=>{let{canvasElement:t}=e,n=await q(t).findByTestId(`input-button`);await $r(e);let r=await q(document.body).findByText(`Cats`);await K.click(r),await K.click(n)},Y={render:e=>(0,W.jsx)(Qr,{...e}),args:{label:`Favorite Animal`,"data-testid":`combobox`,defaultValue:J[0],name:`combobox`,className:`w-60`}},ni={render:e=>(0,W.jsx)(Qr,{...e}),args:{label:`Favorite Animal`,"data-testid":`combobox`,defaultValue:J[0],name:`combobox`,className:`w-60`,immediate:!0}},ri={...Y,args:{...Y.args,labelLayout:`horizontal`,label:`Animal?`}},ii={...Y,play:ei(`Ca`),parameters:{...Y.parameters,snapshot:{skip:!0}}},ai={...Y,play:async e=>{await ei(`zzz`)?.(e);let t=q(document.body);await G(await t.findByText(`No matches found`)).toBeVisible()},parameters:{...Y.parameters,snapshot:{skip:!0}}},oi={...Y,args:{...Y.args,defaultValue:J[1]}},si={...Y,args:{...oi.args,defaultValue:{...J[1]},by:`key`}},ci={...Y,args:{...Y.args,name:`interactive-combobox`,subLabel:`Additional descriptive text`},parameters:{docs:{source:{code:`
const [query, setQuery] = useState('');
const filtered = options.filter((option) => option.label.includes(query));

<Combobox label="Favorite Animal" name="interactive-combobox" onChange={...}>
  <Combobox.Input
    displayValue={(option) => option?.label ?? ''}
    onChange={(event) => setQuery(event.target.value)}
  />
  <Combobox.Options>
    {filtered.map((option) => (
      <Combobox.Option key={option.key} value={option}>
        {option.label}
      </Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>`}}}},li={...Y,args:{...Y.args,fieldNote:`Choose your beast`}},ui={...Y,args:{...Y.args,fieldNote:`Choose your beast`,showSubLabels:!0},parameters:{...Y.parameters,snapshot:{skip:!0}},play:$r},di={...Y,args:{...Y.args,immediate:!0},play:async e=>{let t=await q(e.canvasElement).findByRole(`combobox`);await K.click(t),await G(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{...Y.parameters,snapshot:{skip:!0}}},fi={...Y,args:{...Y.args,defaultValue:void 0,inputProps:{placeholder:`Search animals`}}},X=({options:e=J,inputProps:t,...n})=>{let[r,i]=(0,Yr.useState)(``),a=r?e.filter(e=>e.label.toLowerCase().includes(r.toLowerCase())):e;return(0,W.jsxs)(V,{onClose:()=>i(``),...n,children:[(0,W.jsx)(V.Input,{onChange:e=>i(e.target.value),...t,"data-testid":`input-button`}),(0,W.jsx)(V.Options,{className:`w-[240px]`,children:a.map(e=>(0,W.jsx)(V.Option,{value:e,children:e.label},e.key))})]})},Z={render:e=>(0,W.jsx)(X,{...e}),args:{label:`Favorite Animal(s)`,multiple:!0,"data-testid":`combobox`,defaultValue:[J[0]],className:`w-[240px]`,name:`multiple-combobox`},parameters:{snapshot:{skip:!0}},play:$r},pi={render:e=>(0,W.jsx)(X,{...e}),args:{...Z.args,defaultValue:[],className:`w-[320px]`},play:async e=>{let t=q(e.canvasElement),n=q(e.canvasElement.ownerDocument.body),r=await t.findByRole(`combobox`);await K.type(r,`Cats`),await K.click(await n.findByRole(`option`,{name:/Cats/})),await G(r).toHaveValue(`Cats`),await G(r.selectionStart).toBe(0),await G(r.selectionEnd).toBe(4)},parameters:{snapshot:{skip:!0}}},mi={render:e=>(0,W.jsx)(X,{...e}),args:{...Z.args,defaultValue:[J[0],J[1]],className:`w-[320px]`},play:async e=>{let t=q(e.canvasElement),n=await t.findByRole(`combobox`);await K.click(n),await K.keyboard(`{Backspace}`),await G(t.queryByText(`Cats`)).not.toBeInTheDocument(),await G(t.getByText(`Dogs`)).toBeVisible()},parameters:{snapshot:{skip:!0}}},Q={render:e=>(0,W.jsx)(X,{...e}),args:{...Z.args,defaultValue:J,className:`w-[240px]`}},hi={render:e=>(0,W.jsx)(X,{...e}),args:{...Q.args},play:async e=>{let t=await q(e.canvasElement).findByRole(`combobox`);await K.click(t),await K.keyboard(`{ArrowDown}`),await G(t.getAttribute(`aria-expanded`)).toEqual(`true`)},decorators:[e=>(0,W.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},gi=2,_i=e=>{let[t,n]=(0,Yr.useState)(Array.isArray(e.defaultValue)?e.defaultValue.length:0),r=t>gi;return(0,W.jsx)(X,{...e,fieldNote:r?`You've chosen ${t}. Remove ${t-gi} to continue.`:void 0,onChange:e=>n(Array.isArray(e)?e.length:0),status:r?`critical`:`default`,subLabel:`Choose up to ${gi}`})},vi={render:e=>(0,W.jsx)(_i,{...e}),args:{...Z.args,defaultValue:[J[0],J[1],J[2]],className:`w-[320px]`}},yi={render:e=>(0,W.jsx)(X,{...e}),args:{...Z.args,defaultValue:[J[0],J[1]],className:`w-[320px]`,inputProps:{chipLeadingComponent:()=>`person-encircled`}}},bi={render:e=>(0,W.jsx)(xi,{...e}),args:{...Z.args,className:`w-[384px]`}},xi=({options:e=J,...t})=>{let[n,r]=(0,Yr.useState)(t.defaultValue??[]);return(0,W.jsx)(X,{...t,fieldNote:`Selected: `+(n.length<1?`None`:n.map(e=>e.label).join(`, `)),inputProps:{showChips:!1,placeholder:`${n.length>0?n.length:`none`} selected`},onChange:e=>r(e),options:e})},Si=({options:e=J,...t})=>{let[n,r]=(0,Yr.useState)(``),i=n?e.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())):e;return(0,W.jsx)(V,{onClose:()=>r(``),...t,children:({open:e,value:t})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(V.Label,{children:`Favorite Animal`}),(0,W.jsx)(V.Input,{displayValue:e=>e?.label??``,onChange:e=>r(e.target.value)}),(0,W.jsx)(V.Options,{children:i.map(e=>(0,W.jsx)(V.Option,{value:e,children:e.label},e.key))}),(0,W.jsxs)(`p`,{className:`mt-spacing-size-1`,children:[e?`Picking`:`Picked`,`: `,t?.label]})]})})},Ci={render:e=>(0,W.jsx)(Si,{...e}),args:{"data-testid":`combobox`,defaultValue:J[0],name:`render-prop-combobox`,className:`w-60`}},wi={key:`long`,label:`A very long option label that will not fit`},Ti={...Y,args:{...Y.args,className:`w-[160px]`,defaultValue:wi,options:[wi,...J],inputProps:{shouldTruncate:!0}}},Ei={...Y,args:{...Y.args,className:`w-[240px]`}},Di={...Y,args:{...Y.args,className:`w-[240px]`,defaultValue:Zr[3],options:Zr},play:async e=>{let t=await q(e.canvasElement).findByRole(`combobox`);await $r(e),await K.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}`),await G(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{layout:`centered`,chromatic:{delay:450},snapshot:{skip:!0}},decorators:[e=>(0,W.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})]},Oi={...Y,args:{...Y.args,className:`w-[160px]`,optionsClassName:`w-[384px]`},play:async e=>{let t=await q(e.canvasElement).findByRole(`combobox`);await $r(e),await K.keyboard(`{ArrowDown}{ArrowDown}`),await G(t.getAttribute(`aria-expanded`)).toEqual(`true`)},parameters:{chromatic:{diffIncludeAntiAliasing:!1,diffThreshold:.75},docs:{...Y.parameters?.docs},snapshot:{skip:!0}},decorators:[e=>(0,W.jsx)(`div`,{className:`p-spacing-size-4`,children:e()})]},ki={...Y,args:{...Y.args,subLabel:`Some descriptive text`,disabled:!0},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{...Y.parameters?.docs},snapshot:{skip:!0}}},Ai={...Y,args:{...Y.args,required:!0,showHint:!0,className:`w-[384px]`,subLabel:`Some descriptive text`}},$={...Y,args:{...Y.args,required:!1,showHint:!0,subLabel:`Some descriptive text`,className:`w-[384px]`}},ji={...Y,args:{...Ai.args,status:`critical`,fieldNote:`Some text describing error`}},Mi={...Y,args:{...$.args,status:`warning`,fieldNote:`Some text describing warning`}},Ni={...Y,args:{...Y.args,label:void 0,"aria-label":`hidden label`}},Pi={...Y,args:{...Y.args,label:void 0,"aria-label":`hidden label`,required:!0,className:`w-[384px]`}},Fi={...Y,args:{...Y.args,disabled:!0,required:!0,showHint:!0,className:`w-[384px]`},parameters:{docs:{...Y.parameters?.docs},snapshot:{skip:!0}}},Ii={...Y,args:{...Y.args,optionsAnchor:{to:`bottom end`,gap:20,offset:44}},play:$r,decorators:[e=>(0,W.jsx)(`div`,{className:`p-spacing-size-4 pb-spacing-size-8`,children:e()})],parameters:{snapshot:{skip:!0}}},Li={...Y,parameters:{layout:`centered`,chromatic:{delay:300,disableSnapshot:!0},docs:{...Y.parameters?.docs},snapshot:{skip:!0}},play:ti},Ri={render:e=>(0,W.jsx)(X,{...e}),args:{...yi.args,inputProps:{chipLeadingComponent:()=>(0,W.jsx)(nn,{size:14})}}},zi={...Y,decorators:[e=>(0,W.jsx)(Qt,{icons:an,children:e()})]},Bi=`Default.Immediate.HorizontalLabel.FilteredByQuery.NoMatches.WithSelectedOption.WithSelectedBy.WithFieldName.WithFieldNote.WithSubLabels.ImmediatelyOpen.WithPlaceholder.Multiple.MultipleSelectsQueryOnAdd.MultipleRemoveWithBackspace.MultipleWithManySelected.MultipleWithManySelectedOpen.MultipleWithSelectionLimit.MultipleWithChipIcons.MultipleWithoutChips.WithRenderProp.WithTruncation.AdjustedWidth.LongOptionList.SeparateFieldAndMenuWidth.Disabled.Required.Optional.Error.Warning.NoVisibleLabel.NoVisibleLabelButRequired.DisabledRequired.OptionsEndAligned.OpenByDefault.MultipleWithFpoChipContent.WithProvidedIcons`.split(`.`),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal',
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'combobox',
    className: 'w-60'
  }
}`,...Y.parameters?.docs?.source},description:{story:"The simplest and default case. The field shows the current selection via `displayValue`, and\nevery keystroke fires `onChange` on `Combobox.Input` so the consumer can filter the options.\n\n**NOTE**: for combobox value data types, `{label: string}` is required, but any other key/value pairs are allowed.\n\nFor detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Combobox/Combobox.stories.tsx).",...Y.parameters?.docs?.description}}},ni.parameters={...ni.parameters,docs:{...ni.parameters?.docs,source:{originalSource:`{
  render: args => <ComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal',
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'combobox',
    className: 'w-60',
    immediate: true
  }
}`,...ni.parameters?.docs?.source},description:{story:"Use the `immediate` prop to make it so that the options are shown to the user once the cursor\nenters the input.",...ni.parameters?.docs?.description}}},ri.parameters={...ri.parameters,docs:{...ri.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    labelLayout: 'horizontal',
    label: 'Animal?'
  }
}`,...ri.parameters?.docs?.source}}},ii.parameters={...ii.parameters,docs:{...ii.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: typeQuery('Ca'),
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...ii.parameters?.docs?.source},description:{story:`Typing in the field narrows the option list. This story types "Ca" to leave only one match.`,...ii.parameters?.docs?.description}}},ai.parameters={...ai.parameters,docs:{...ai.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: async playOptions => {
    await typeQuery('zzz')?.(playOptions);
    const popoverCanvas = within(document.body);
    await expect(await popoverCanvas.findByText('No matches found')).toBeVisible();
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...ai.parameters?.docs?.source},description:{story:"When `Combobox.Options` gets no options, such as when a query matches nothing, it says\n\"No matches found\" so the field doesn't look broken. The entry carries no control and can't be\nselected. Pass `noMatchesText` to `Combobox.Options` to change the wording.",...ai.parameters?.docs?.description}}},oi.parameters={...oi.parameters,docs:{...oi.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    defaultValue: exampleOptions[1]
  }
}`,...oi.parameters?.docs?.source},description:{story:`You can select a different option to show when rendered.`,...oi.parameters?.docs?.description}}},si.parameters={...si.parameters,docs:{...si.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...WithSelectedOption.args,
    defaultValue: {
      ...exampleOptions[1]
    },
    by: 'key'
  }
}`,...si.parameters?.docs?.source},description:{story:"Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.\n- The type comparison can be by a named key in the object `by={'key'}` or using a comparison function\n\nSee: https://headlessui.com/react/combobox#binding-objects-as-values",...si.parameters?.docs?.description}}},ci.parameters={...ci.parameters,docs:{...ci.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    name: 'interactive-combobox',
    subLabel: 'Additional descriptive text'
  },
  parameters: {
    docs: {
      source: {
        code: \`
const [query, setQuery] = useState('');
const filtered = options.filter((option) => option.label.includes(query));

<Combobox label="Favorite Animal" name="interactive-combobox" onChange={...}>
  <Combobox.Input
    displayValue={(option) => option?.label ?? ''}
    onChange={(event) => setQuery(event.target.value)}
  />
  <Combobox.Options>
    {filtered.map((option) => (
      <Combobox.Option key={option.key} value={option}>
        {option.label}
      </Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>\`
      }
    }
  }
}`,...ci.parameters?.docs?.source},description:{story:'You can add a `name` prop to generate form fields for the value object.\n\nIn this example, the field name is `"interactive-combobox"`, and the value is an object storing `{label: string, key: string}`.\n\nThis will generate hidden fields with names:\n* `interactive-combobox[label]`\n* `interactive-combobox[key]`',...ci.parameters?.docs?.description}}},li.parameters={...li.parameters,docs:{...li.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast'
  }
}`,...li.parameters?.docs?.source}}},ui.parameters={...ui.parameters,docs:{...ui.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    showSubLabels: true
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...ui.parameters?.docs?.source},description:{story:`This demonstrates how combobox items can also have an optional subLabel attached to give more details about the option.`,...ui.parameters?.docs?.description}}},di.parameters={...di.parameters,docs:{...di.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    immediate: true
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true
    }
  }
}`,...di.parameters?.docs?.source},description:{story:`By default the option list waits for a keystroke before opening. Pass \`immediate\` to open the
full list as soon as the field receives focus.

See: https://headlessui.com/react/combobox#opening-the-combobox-immediately`,...di.parameters?.docs?.description}}},fi.parameters={...fi.parameters,docs:{...fi.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    defaultValue: undefined,
    inputProps: {
      placeholder: 'Search animals'
    }
  }
}`,...fi.parameters?.docs?.source},description:{story:`A placeholder tells the user the field is searchable before they've typed anything. Use it
sparingly, and never as a replacement for the label.`,...fi.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'combobox',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'multiple-combobox'
  },
  parameters: {
    snapshot: {
      skip: true
    }
  },
  play: openMenu
}`,...Z.parameters?.docs?.source},description:{story:"You can select multiple values by passing `multiple` to the parent element. When doing this,\nmake sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead\nof an object or value for the individual `Combobox.Option` entries.\n\nEach selected value shows up in the field as a removable chip. Chip text comes from the value's\n`label` by default; pass `chipLabel` to `Combobox.Input` when your values are shaped differently.\nChips come off via their close button or via backspace in an empty field (see\n`MultipleRemoveWithBackspace`). Picking an option selects the query that found it, so the next\nkeystroke starts a new search (see `MultipleSelectsQueryOnAdd`).\n\nHidden form inputs are generated for each option selected and take the following form:\n- `name[arrayIndex][key]`\n- `name[arrayIndex][value]`",...Z.parameters?.docs?.description}}},pi.parameters={...pi.parameters,docs:{...pi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [],
    className: 'w-[320px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    // The option list is portaled out of the story canvas, so look for options in the document
    const body = within(playOptions.canvasElement.ownerDocument.body);
    const input: HTMLInputElement = await canvas.findByRole('combobox');
    await userEvent.type(input, 'Cats');
    await userEvent.click(await body.findByRole('option', {
      name: /Cats/
    }));

    // The query is still in the field, but selected, so the next keystroke takes its place
    await expect(input).toHaveValue('Cats');
    await expect(input.selectionStart).toBe(0);
    await expect(input.selectionEnd).toBe('Cats'.length);
  },
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...pi.parameters?.docs?.source},description:{story:`The query that found an option stays in the field once that option is picked, so we select it.
Typing again starts a new search in place of the one already spent, and a single backspace
clears it. Anyone who'd rather keep building on the query can press the right arrow first.`,...pi.parameters?.docs?.description}}},mi.parameters={...mi.parameters,docs:{...mi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');

    // The last chip is gone; the first one stays put
    await expect(canvas.queryByText('Cats')).not.toBeInTheDocument();
    await expect(canvas.getByText('Dogs')).toBeVisible();
  },
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...mi.parameters?.docs?.source},description:{story:`Pressing backspace in an empty field removes the last chip, so a selection can be undone
without reaching for the mouse. Backspace edits the query first; only once the field is empty
does it start removing chips.

**NOTE**: this behavior is ours, not HeadlessUI's. HeadlessUI does not bind backspace on the
combobox input as of v2.2, so there is nothing to conflict with today, but a future HeadlessUI
release could claim that key. We mark the event as handled to reduce the chance of both firing.
If you see a chip and something else both react to one backspace, this is the first place to
look. Pass your own \`onKeyDown\` to \`Combobox.Input\` and call \`preventDefault()\` to opt out.`,...mi.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: exampleOptions,
    className: 'w-[240px]'
  }
}`,...Q.parameters?.docs?.source},description:{story:`The field wraps onto more than one line as chips accumulate, so a long selection stays fully
visible instead of scrolling out of view.`,...Q.parameters?.docs?.description}}},hi.parameters={...hi.parameters,docs:{...hi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...MultipleWithManySelected.args
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...hi.parameters?.docs?.source},description:{story:`The option list lines up with the field's left edge and matches its width, however many rows
of chips the field holds and wherever the cursor sits.`,...hi.parameters?.docs?.description}}},vi.parameters={...vi.parameters,docs:{...vi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleWithSelectionLimitDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1], exampleOptions[2]],
    className: 'w-[320px]'
  }
}`,...vi.parameters?.docs?.source}}},yi.parameters={...yi.parameters,docs:{...yi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]',
    inputProps: {
      chipLeadingComponent: () => 'person-encircled'
    }
  }
}`,...yi.parameters?.docs?.source},description:{story:"Chips can carry a leading icon by way of `chipLeadingComponent` on `Combobox.Input`.",...yi.parameters?.docs?.description}}},bi.parameters={...bi.parameters,docs:{...bi.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleWithoutChipsDemo {...args} />,
  args: {
    ...Multiple.args,
    className: 'w-[384px]'
  }
}`,...bi.parameters?.docs?.source},description:{story:"Set `showChips` to false on `Combobox.Input` when you'd rather surface the selection yourself,\nwhich is the behavior a plain HeadlessUI combobox gives you. This can be used to display a summary\nor other text instead of selectable chips.",...bi.parameters?.docs?.description}}},Ci.parameters={...Ci.parameters,docs:{...Ci.parameters?.docs,source:{originalSource:`{
  render: args => <RenderPropComboboxDemo {...args} />,
  args: {
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'render-prop-combobox',
    className: 'w-60'
  }
}`,...Ci.parameters?.docs?.source}}},Ti.parameters={...Ti.parameters,docs:{...Ti.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    defaultValue: longLabelOption,
    options: [longLabelOption, ...exampleOptions],
    inputProps: {
      shouldTruncate: true
    }
  }
}`,...Ti.parameters?.docs?.source},description:{story:"The component provides some basic styles to handle long text in the provided field. Use\n`shouldTruncate` on `.Input` to truncate the text with an ellipsis.",...Ti.parameters?.docs?.description}}},Ei.parameters={...Ei.parameters,docs:{...Ei.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]'
  }
}`,...Ei.parameters?.docs?.source},description:{story:`The field trigger width can be set with utility classes. By default, the option list will expand to match the width.`,...Ei.parameters?.docs?.description}}},Di.parameters={...Di.parameters,docs:{...Di.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]',
    defaultValue: longOptionList[3],
    options: longOptionList
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
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
}`,...Di.parameters?.docs?.source},description:{story:`We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
keyboard navigation (showing the items off the edge of the screen) is handled when used.`,...Di.parameters?.docs?.description}}},Oi.parameters={...Oi.parameters,docs:{...Oi.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]'
  },
  play: async playOptions => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');
    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
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
}`,...Oi.parameters?.docs?.source},description:{story:`If you want a different width for the field and the option list, you can control them separately.`,...Oi.parameters?.docs?.description}}},ki.parameters={...ki.parameters,docs:{...ki.parameters?.docs,source:{originalSource:`{
  ...Default,
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
}`,...ki.parameters?.docs?.source},description:{story:`Each Combobox can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
will show the selected value).`,...ki.parameters?.docs?.description}}},Ai.parameters={...Ai.parameters,docs:{...Ai.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text'
  }
}`,...Ai.parameters?.docs?.source},description:{story:"Combobox fields can be marked as required by using the `required` prop.",...Ai.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]'
  }
}`,...$.parameters?.docs?.source},description:{story:"Fields can be marked as optional by using `required` as false, but `showHint` as true.",...$.parameters?.docs?.description}}},ji.parameters={...ji.parameters,docs:{...ji.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error'
  }
}`,...ji.parameters?.docs?.source},description:{story:`You can supply an error field note by specifying the status of "critical".`,...ji.parameters?.docs?.description}}},Mi.parameters={...Mi.parameters,docs:{...Mi.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning'
  }
}`,...Mi.parameters?.docs?.source},description:{story:`You can supply a warning field note by specifying the status of "warning".`,...Mi.parameters?.docs?.description}}},Ni.parameters={...Ni.parameters,docs:{...Ni.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label'
  }
}`,...Ni.parameters?.docs?.source},description:{story:"Having a visible label is not necessary. In those cases, use `aria-label` to set an accessible label for the field",...Ni.parameters?.docs?.description}}},Pi.parameters={...Pi.parameters,docs:{...Pi.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]'
  }
}`,...Pi.parameters?.docs?.source},description:{story:"No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.",...Pi.parameters?.docs?.description}}},Fi.parameters={...Fi.parameters,docs:{...Fi.parameters?.docs,source:{originalSource:`{
  ...Default,
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
}`,...Fi.parameters?.docs?.source},description:{story:"`Combobox` can be both disabled and required.",...Fi.parameters?.docs?.description}}},Ii.parameters={...Ii.parameters,docs:{...Ii.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    optionsAnchor: {
      to: 'bottom end',
      gap: 20,
      offset: 44
    }
  },
  play: openMenu,
  decorators: [Story => <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>],
  parameters: {
    snapshot: {
      skip: true
    }
  }
}`,...Ii.parameters?.docs?.source},description:{story:`Options for each \`Combobox\` can be aligned on different sides of the field.

More information: https://headlessui.com/react/combobox#positioning-the-options`,...Ii.parameters?.docs?.description}}},Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
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
}`,...Li.parameters?.docs?.source},description:{story:"This shows the contents of `Combobox` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.",...Li.parameters?.docs?.description}}},Ri.parameters={...Ri.parameters,docs:{...Ri.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleComboboxDemo {...args} />,
  args: {
    ...MultipleWithChipIcons.args,
    inputProps: {
      chipLeadingComponent: () => <FpoBlock size={14} />
    }
  }
}`,...Ri.parameters?.docs?.source},description:{story:`\`chipLeadingComponent\` passes straight through to the chip's own leading slot, so it takes
arbitrary content and not only an EDS icon name. The block below stands in for whatever
you supply.

The chip's slot carries no explicit icon size, so it resolves to 14px against the chip's
own type, and the block matches that.`,...Ri.parameters?.docs?.description}}},zi.parameters={...zi.parameters,docs:{...zi.parameters?.docs,source:{originalSource:`{
  ...Default,
  decorators: [Story => <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>]
}`,...zi.parameters?.docs?.source},description:{story:"The indicator resolves the same `expand` role as `Select` and `Menu.Button`, so all three\nchange together from one `IconProvider`. The chip's leading slot is the consumer's to\nfill, and is left alone.",...zi.parameters?.docs?.description}}}})))()}Vi();export{Ei as AdjustedWidth,Y as Default,ki as Disabled,Fi as DisabledRequired,ji as Error,ii as FilteredByQuery,ri as HorizontalLabel,ni as Immediate,di as ImmediatelyOpen,Di as LongOptionList,Z as Multiple,mi as MultipleRemoveWithBackspace,pi as MultipleSelectsQueryOnAdd,yi as MultipleWithChipIcons,Ri as MultipleWithFpoChipContent,Q as MultipleWithManySelected,hi as MultipleWithManySelectedOpen,vi as MultipleWithSelectionLimit,bi as MultipleWithoutChips,ai as NoMatches,Ni as NoVisibleLabel,Pi as NoVisibleLabelButRequired,Li as OpenByDefault,$ as Optional,Ii as OptionsEndAligned,Ai as Required,Oi as SeparateFieldAndMenuWidth,Mi as Warning,ci as WithFieldName,li as WithFieldNote,fi as WithPlaceholder,zi as WithProvidedIcons,Ci as WithRenderProp,si as WithSelectedBy,oi as WithSelectedOption,ui as WithSubLabels,Ti as WithTruncation,Bi as __namedExportsOrder,Xr as default};