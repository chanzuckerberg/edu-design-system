import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{i,t as a}from"./logging-rNM_k4ml.js";import{i as o,n as s,r as c,t as l}from"./Icon-BK9TF5-o.js";function u(e){return Array.isArray(e)?e.some(e=>u(e)):f.isValidElement(e)&&e.type===f.Fragment?u(e.props.children):e!=null&&typeof e!=`boolean`&&e!==``}function d(e){return u(e)?typeof e==`string`?Object.prototype.hasOwnProperty.call(c,e):!0:!1}var f,p,m,h=t((()=>{f=e(r()),s(),o(),p=n(),m=e=>{let{as:t=`span`,className:n,content:r,size:i}=e;if(!u(r))throw Error("IconSlot: rendered with content that draws nothing, which leaves the layout around it holding space for an icon that never arrives. Whether there is something to draw is the caller's to decide: guard the slot with `hasSlotContent(content)` and leave it out when there is none.");if(typeof r==`string`){let t=r;return e.purpose===`informative`?(0,p.jsx)(l,{className:n,name:t,purpose:`informative`,size:i,title:e.title}):(0,p.jsx)(l,{className:n,name:t,purpose:`decorative`,size:i})}return n?(0,p.jsx)(t,{className:n,children:r}):(0,p.jsx)(p.Fragment,{children:r})};try{u.displayName=`hasSlotContent`,u.__docgenInfo={description:`Whether a slot value will render anything.

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
cannot be known without rendering it.`,displayName:`hasSlotContent`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Icon/IconSlot.tsx`,methods:[],props:{},tags:{}}}catch{}try{d.displayName=`willRenderSlotContent`,d.__docgenInfo={description:`Whether a slot will actually put something on screen.

Stricter than \`hasSlotContent\`, which only asks whether a value is renderable in
principle. A string that is not an EDS icon name passes that and then draws nothing,
because \`Icon\` reports it and renders \`null\`. Use this wherever layout depends on the icon
being visible — reserving space for an icon that never arrives leaves a gap.

\`hasSlotContent\` stays the right question for "did the consumer give me something", which
is what the content slots ask when deciding precedence.`,displayName:`willRenderSlotContent`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Icon/IconSlot.tsx`,methods:[],props:{},tags:{}}}catch{}try{m.displayName=`IconSlot`,m.__docgenInfo={description:`Renders a leading/trailing slot that accepts either an EDS icon name or arbitrary
content.

Components that used to take an \`IconName\` now take \`IconOrContent\`, so they need to
decide at runtime which of the two they were handed. A string is the only thing a
consumer can pass that is ambiguous, and by convention it means an icon name, so it
renders through \`Icon\` with that component's own sizing. Everything else is content
and renders untouched.

\`purpose\` and \`title\` describe the icon branch only. When a consumer supplies their
own content, they own its accessible treatment.

Only render one that has something to draw. Returning \`null\` for a value that renders
nothing reads as harmless and is not: everything around the slot stays as it was, so a
row lays out space for an icon that never arrives, and an icon-only control comes out
blank while staying clickable. Throwing puts that in front of whoever wrote the call,
from render, where the nearest error boundary catches it like any other render error.

The check belongs to the caller because only the caller knows what to do instead — drop
the wrapper around it, fall back to an avatar, leave the row as it is. So ask
\`hasSlotContent(content)\` and leave the slot out when it says no.

Not exported from the package. Consumers use the slot props on each component.`,displayName:`IconSlot`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Icon/IconSlot.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:"Element used to wrap custom content so it can carry `className`.\n\nDefaults to `span`, which is valid wherever the slot itself is, including inside a\n`button`. Use `div` when the slot sits in a flow-content container, so consumers\npassing block-level content do not produce a `span` wrapping a `div`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`"div" | "span"`,value:[{value:`"div"`},{value:`"span"`}]}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:`CSS class names applied to the rendered icon, or to the wrapper around custom
content so both branches sit the same way in the layout.`,name:`className`,required:!1,tags:{},type:{name:`string`}},content:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:`The slot's value. A string is treated as an EDS icon name; anything else renders
as-is.`,name:`content`,required:!0,tags:{},type:{name:`IconOrContent`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:"Width/height passed through to `Icon` when rendering an icon name.",name:`size`,required:!1,tags:{},type:{name:`string`}},purpose:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:"Mirrors `Icon`'s `purpose`, and applies only when rendering an icon name.\nCustom content carries its own accessible treatment.",name:`purpose`,required:!1,tags:{},type:{name:`enum`,raw:`"decorative" | "informative"`,value:[{value:`"decorative"`},{value:`"informative"`}]}},title:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`},{fileName:`edu-design-system/src/components/Icon/IconSlot.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));function g(e){return Object.prototype.hasOwnProperty.call(w,e)}function _(e){return Array.isArray(e)?`an array that renders nothing`:x.isValidElement(e)?e.type===x.Fragment?`a fragment that renders nothing`:`an element that renders nothing`:`\`${String(e)}\`, which renders nothing`}function v(e){return typeof e==`object`&&!!e&&Symbol.iterator in e&&!Array.isArray(e)}function y(e){return Array.isArray(e)?e.some(y):x.isValidElement(e)&&e.type===x.Fragment?y(e.props.children):v(e)}function b(e){let t=(0,x.useContext)(T),n=e!==void 0&&Object.prototype.hasOwnProperty.call(t,e);return a([e!==void 0&&!n],`IconProvider: "${String(e)}" is not a semantic icon role, so nothing renders for it.`),n?t[e]:void 0}var x,S,C,w,T,E,D=t((()=>{x=e(r()),h(),i(),S=n(),C={informational:`info-encircled-filled`,critical:`critical-encircled-filled`,warning:`warning-filled`,favorable:`checkmark-encircled-filled`},w=Object.freeze({back:`chevron-left`,close:`close`,collapse:`chevron-up`,copy:`copy`,expand:`chevron-down`,forward:`chevron-right`,menu:`menu`,"open-in-new":`open-in-new`,...C}),T=(0,x.createContext)(w),E=({children:e,icons:t})=>{let n=(0,x.useContext)(T),r=Object.keys(t??{}).filter(e=>!g(e));a([r.length>0],`IconProvider: ${r.map(e=>`"${e}"`).join(`, `)} ${r.length===1?`is not a semantic icon role`:`are not semantic icon roles`}, so ${r.length===1?`it does`:`they do`} nothing. The roles are: ${Object.keys(w).sort().join(`, `)}.`);let i=`Every entry has to be an EDS icon name or content that renders; a role cannot be emptied here.`;for(let e of Object.keys(t??{})){if(!g(e))continue;let n=t?.[e];if(y(n)){let t=v(n)?`is set to an iterable that is not an array`:`holds an iterable that is not an array`;throw Error(`IconProvider: the \`${e}\` role ${t}. ${i} Checking one means consuming it, which would leave nothing to render, so pass an array instead.`)}if(!d(n)){let t=typeof n==`string`?`is set to "${n}", which is not an EDS icon name`:`is set to ${_(n)}`;throw Error(`IconProvider: the \`${e}\` role ${t}. ${i} To leave a role as it is, omit it rather than passing an empty value: \`{...(isCustom && { ${e}: <Custom /> })}\` rather than \`{ ${e}: isCustom ? <Custom /> : null }\`.`)}}let o=(0,x.useMemo)(()=>{let e={...n};for(let n of Object.keys(t??{}))g(n)&&(e[n]=t?.[n]);return e},[n,t]);return(0,S.jsx)(T.Provider,{value:o,children:e})},E.displayName=`IconProvider`;try{b.displayName=`IconProvider`,b.__docgenInfo={description:`Reads the icon in effect for one semantic role.

For EDS components' own use. Consumers change what this returns with \`IconProvider\`
rather than calling it themselves, so it is not exported from the package root.

Takes \`undefined\` for the components whose role depends on runtime state and is
sometimes no role at all, so they can resolve the icon in one unconditional call
instead of reading a role they will not render.

Anything it returns draws something. A value that would not render cannot be in the map:
\`IconProvider\` throws for one, and the shipped defaults are all real icons. So the two
ways to get \`undefined\` back are both about the role asked for, not the value found — no
role was asked for, or the name is not a role at all, which untyped code can reach and
which is reported here as a usage error.`,displayName:`IconProvider`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Icon/IconProvider.tsx`,methods:[],props:{},tags:{param:"name the semantic role being drawn, or `undefined` to draw nothing",returns:"the icon name or node to hand to `IconSlot`, or `undefined` when `name` is\n`undefined` or names no role"}}}catch{}})),O=t((()=>{s(),D(),h()}));export{m as a,b as i,E as n,u as o,D as r,O as t};