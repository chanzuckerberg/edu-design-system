import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,n as a,r as o,t as s}from"./Icon-BnY9HHXV.js";function c(e){return Array.isArray(e)?e.some(e=>c(e)):u.isValidElement(e)&&e.type===u.Fragment?c(e.props.children):e!=null&&typeof e!=`boolean`&&e!==``}function l(e){return c(e)?typeof e!=`string`||Object.prototype.hasOwnProperty.call(o,e):!1}var u,d,f;function p(){return(p=t((()=>{u=e(n()),a(),i(),d=r(),f=e=>{let{as:t=`span`,className:n,content:r,size:i}=e;if(!c(r))throw Error("IconSlot: rendered with content that draws nothing, which leaves the layout around it holding space for an icon that never arrives. Whether there is something to draw is the caller's to decide: guard the slot with `hasSlotContent(content)` and leave it out when there is none.");if(typeof r==`string`){let t=r;return e.purpose===`informative`?(0,d.jsx)(s,{className:n,name:t,purpose:`informative`,size:i,title:e.title}):(0,d.jsx)(s,{className:n,name:t,purpose:`decorative`,size:i})}return n?(0,d.jsx)(t,{className:n,children:r}):(0,d.jsx)(d.Fragment,{children:r})},f.displayName=`IconSlot`;try{c.displayName=`IconSlot`,c.__docgenInfo={description:`Whether a slot value will render anything.

These slots take any \`ReactNode\`, so a plain truthiness check is wrong twice over: it
treats \`0\` as absent, and \`{0 && <El />}\` leaks a stray "0" into the markup. Only the
values React itself renders as nothing count as empty here.

An array is judged by what is in it, because that is what React does with one. \`[]\` and
\`[null, false]\` render nothing, so they are empty; \`[0]\` renders "0", so it is not. This
matters for the arrays a caller does not write on purpose — an \`items.map(...)\` over an
empty list, or a fragment's children arriving together — where counting the array itself
as content reserves a wrapper and lays out space around nothing. Recursive, because React
flattens nested arrays before rendering them.

Arrays only, though React renders any iterable. Inspecting one means iterating it, which
exhausts a generator and leaves nothing for the caller to render afterwards — losing valid
content, which is worse than the alternative this gives up: a non-array iterable counts as
content even when it would yield none, so an empty \`Set\` reserves the space an icon would
have taken. Pass an array if the collection might be empty.

A fragment is judged by its children too, since it contributes no element of its own:
\`<></>\` renders nothing at all, so counting it as content would leave an icon-only control
blank but still clickable. Every other element counts, including one that happens to
render nothing — \`<span>{null}</span>\` still produces a node, and what a component returns
cannot be known without rendering it.`,displayName:`IconSlot`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Icon/IconSlot.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}export{l as i,c as n,p as r,f as t};