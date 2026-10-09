import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./iframe-84brN7F6.js";import{n as s,t as c}from"./clsx-CTwy9ux-.js";import{s as l}from"./keycodes-CKPoRh8b.js";import{n as u,t as d}from"./Heading-CI3mrpQ7.js";import{n as f,r as p,t as m}from"./IconSlot-Chsa5gUx.js";import{n as h,r as g}from"./Text-DJbcQrwW.js";import{n as _,t as v}from"./FpoBlock-DB6Mv5jR.js";import{t as y}from"./toNumber-CsDRhsur.js";import{t as b}from"./debounce-Ct9gZWRS.js";var x=n(((e,t)=>{function n(e,t,n){return e===e&&(n!==void 0&&(e=e<=n?e:n),t!==void 0&&(e=e>=t?e:t)),e}t.exports=n})),S=n(((e,t)=>{var n=x(),r=y();function i(e,t,i){return i===void 0&&(i=t,t=void 0),i!==void 0&&(i=r(i),i=i===i?i:0),t!==void 0&&(t=r(t),t=t===t?t:0),n(r(e),t,i)}t.exports=i})),C=n((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.oneByType=i,e.allByType=a,e.withoutTypes=o;var t=n(r());function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return s(e).find(c(t))||null}function a(e,t){return s(e).filter(c(t))}function o(e){var t=[...arguments].slice(1).map(l);return s(e).filter(function(e){return!t.includes(e.type)})}function s(e){var n=t.default.Children.toArray(e);return t.default.Fragment?n.flatMap(function(e){return c(t.default.Fragment)(e)?s(e.props.children):e}):n}function c(e){var t=l(e);return function(e){return e.type===t}}function l(e){var n=console.error;console.error=function(){};var r=t.default.createElement(e);return console.error=n,r.type}})),w,T,E,D,O,k,A;function j(){return(j=t((()=>{w=`_tabs__header_smnea_16`,T=`_tabs__list_smnea_41`,E=`_tabs__item_smnea_96`,D=`_tabs__link_smnea_122`,O=`_tab__icon_smnea_150`,k=`_tab__highlight_smnea_154`,A={tabs__header:w,"tabs--has-divider":`_tabs--has-divider_smnea_24`,"tabs--scrollable-left":`_tabs--scrollable-left_smnea_35`,"tabs__list--align-center":`_tabs__list--align-center_smnea_41`,"tabs--scrollable-right":`_tabs--scrollable-right_smnea_42`,tabs__list:T,"tabs__list--align-left":`_tabs__list--align-left_smnea_81`,"tabs__list--align-right":`_tabs__list--align-right_smnea_89`,tabs__item:E,"eds-is-active":`_eds-is-active_smnea_104`,"tabs--width-full":`_tabs--width-full_smnea_108`,tabs__link:D,tab__icon:O,tab__highlight:k,"tabs__header--variant-default":`_tabs__header--variant-default_smnea_182`,"tabs__header--variant-inverse":`_tabs__header--variant-inverse_smnea_186`,"tabs__list--variant-default":`_tabs__list--variant-default_smnea_190`,"tabs__list--variant-inverse":`_tabs__list--variant-inverse_smnea_213`}})))()}function M(e){let t=(0,F.useRef)(e);return(0,F.useEffect)(()=>{t.current=e}),t.current}var N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{s(),N=e(S()),P=e(b()),F=e(r()),I=C(),l(),p(),j(),L=i(),R=({activeIndex:e=0,align:t,"aria-labelledby":n,children:r,className:i,hasDivider:a=!0,isSticky:o=!1,onChange:s,tabWidth:l=`auto`,variant:u=`default`,...d})=>{let p=F.useId(),h=(0,F.useRef)(null),[g,_]=(0,F.useState)(e),[v,y]=(0,F.useState)(null),[b,x]=(0,F.useState)(!1),[S,C]=(0,F.useState)(!1),w=(0,F.useMemo)(()=>(0,I.allByType)(r,z),[r]),T=(0,F.useMemo)(()=>w.map(()=>F.createRef()),[w]),E=F.useId(),D=d.id||E,O=(0,F.useMemo)(()=>w.map(e=>`${D}-${e.props.title.replace(/\s/g,`-`)}`),[w,D]),k=M(e);(0,F.useEffect)(()=>{k!=null&&k!==e&&(y(e),_(e),T[e].current?.focus())},[k,e,T]),(0,F.useEffect)(()=>{if(v!==null){let e=(0,N.default)(v>g?g-1:g+1,0,T.length-1);T[e].current?.scrollIntoView&&(b||S)&&T[e].current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})}},[T,v,g,b,S]);let j=(0,F.useCallback)(e=>{let t=e.scrollLeft,n=e.clientWidth,r=e.scrollWidth;x(t>0),r>n&&t+n<r?C(!0):C(!1)},[]);(0,F.useEffect)(()=>{if(h&&h.current){let e=(0,P.default)(()=>{h.current&&j(h.current)},100,{leading:!0});return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}}},[j]);function R(e){y(g),_(e),s&&s(e)}function B(e){let t=null;if(T.map(e=>(e.current===document.activeElement&&(t=e),e)),!t)return;let n=T.indexOf(t),r=n===T.length-1?0:n+1,i=n===0?T.length-1:n-1;[`ArrowRight`,`ArrowDown`].includes(e.key)?T[r].current?.focus():[`ArrowLeft`,`ArrowUp`].includes(e.key)&&T[i].current?.focus()}let V=c(A.tabs__header,b&&A[`tabs--scrollable-left`],S&&A[`tabs--scrollable-right`],a&&A[`tabs--has-divider`],u&&A[`tabs__header--variant-${u}`]),H=F.cloneElement(w[g],{id:p,"aria-labelledby":O[g]});return(0,L.jsxs)(`div`,{className:i,...d,children:[(0,L.jsx)(`div`,{className:V,onScroll:e=>j(e.target),ref:h,children:(0,L.jsx)(`ul`,{"aria-labelledby":n,className:c(A.tabs__list,a&&A[`tabs--has-divider`],t&&A[`tabs__list--align-${t}`],u&&A[`tabs__list--variant-${u}`]),role:`tablist`,children:w.map((e,t)=>{let n=g===t,r=(0,I.oneByType)(e.props.children,z.Button);return(0,L.jsx)(`li`,{className:c(A.tabs__item,n&&A[`eds-is-active`],l===`full`&&A[`tabs--width-${l}`]),role:`presentation`,children:(0,L.jsxs)(`a`,{"aria-controls":p,"aria-selected":n,className:A.tabs__link,href:`#${p}`,id:O[t],onClick:e=>{e.preventDefault(),R(t)},onKeyDown:B,ref:T[t],role:`tab`,tabIndex:n?0:-1,children:[f(e.props.icon)&&(0,L.jsx)(m,{className:A.tab__icon,content:e.props.icon,purpose:`decorative`,size:`16px`}),typeof r?.props.children==`function`?r.props.children({isActive:n,title:e.props.title}):e.props.title,(0,L.jsx)(`div`,{"aria-hidden":`true`,className:A.tab__highlight})]})},O[t])})})}),(0,L.jsx)(`div`,{children:H})]})},z=({"aria-labelledby":e,children:t,className:n,icon:r,id:i,title:a,...o})=>(0,L.jsx)(`div`,{"aria-hidden":!1,"aria-labelledby":e,className:n,id:i,role:`tabpanel`,...o,children:(0,I.withoutTypes)(t,B)}),B=e=>(0,L.jsx)(`div`,{}),z.displayName=`TabGroup.Tab`,z.Button=B,B.displayName=`TabGroup.Tab.Button`,R.displayName=`TabGroup`,R.Tab=z;try{R.displayName=`TabGroup.Tab`,R.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Standard horizontal | A row of clickable labels that switch content panels below. | Settings pages, user profiles, simple content sections. |
| Scrollable | Tabs that scroll horizontally if there are too many to fit. | Mobile views, multi-section tools. |
| Disabled states | Tabs may be inactive or unavailable depending on state or permissions. | Conditional access, incomplete onboarding steps. |
| Dynamic | Tabs added or removed based on user input or system state. | Custom workflows, data-driven interfaces. |

The minimum number of tabs is 2, with no maximum, but use caution beyond 6 tabs as content can become buried.

## Interaction

When there are too many tabs to fit, the tab group scrolls horizontally and shows a scrolling gradient at the edges. A divider can visually separate the tab group from the content it controls; if a tab group is sticky on scroll (\`isSticky\`), it must have a divider (\`hasDivider\`) to maintain visual separation as content moves underneath it.

## Content & Accessibility

### Do's

* Order tabs by priority or importance from left to right.
* Ensure labels clearly communicate the contents of the tab.
* Limit labels to 1 or 2 words.
* Use sentence case for each label.

### Don'ts

* Don't repeat page-level information as part of the label (e.g. use "All" rather than "All groups").
* Don't truncate tab labels; consider alternative labels before settling for truncation.`,displayName:`TabGroup.Tab`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/TabGroup/TabGroup.tsx`,methods:[],props:{"aria-labelledby":{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Reference to another element that describes the purpose of the set of tabs.`,name:`aria-labelledby`,required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Calls back with the active index`,name:`onChange`,required:!1,tags:{},type:{name:`((index: number) => void)`}},children:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Child node(s) that can be nested inside component`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`HTML id for the component`,name:`id`,required:!1,tags:{},type:{name:`string`}},activeIndex:{defaultValue:{value:`0`},declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Passed down to initially set the activeIndex state`,name:`activeIndex`,required:!1,tags:{},type:{name:`number`}},align:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Alignment of the tabs, when there is additional space available (not full width)`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`Align`,value:[{value:`"center"`},{value:`"leading"`},{value:`"trailing"`}]}},hasDivider:{defaultValue:{value:`true`},declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Whether the divider line (separating tabs from content) is visible.

**Default is \`"true"\`**.`,name:`hasDivider`,required:!1,tags:{},type:{name:`boolean`}},isSticky:{defaultValue:{value:`false`},declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:``,name:`isSticky`,required:!1,tags:{},type:{name:`boolean`}},tabWidth:{defaultValue:{value:`auto`},declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Control how the indidivual tabs take up the available space.

**Default is \`"auto"\`**.`,name:`tabWidth`,required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "full"`,value:[{value:`"auto"`},{value:`"full"`}]}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/TabGroup/TabGroup.tsx`,name:`TypeLiteral`}],description:`Controls whether we are using the default or inverted pallet for this component

**Default is \`"default"\`**.`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "inverse"`,value:[{value:`"default"`},{value:`"inverse"`}]}}},tags:{}}}catch{}try{z.Button.displayName=`Tab.Button`,z.Button.__docgenInfo={description:`This component is a stub, and exists to give a type to the custom Tab button.
It cannot be used as a standalone sub-component. See <Tabs> for where we trigger the render prop.

Allows for control of the Tab Title contents, for custom tab handling

\`\`\`jsx
<Tab.Button>
    {({active, title}) => (
        <SomeCustomComponent isActive={active} title={title} />
    )}
</Tab.Button>
\`\`\``,displayName:`Tab.Button`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/TabGroup/TabGroup.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{r(),V(),_(),o(),u(),g(),H=i(),{within:U}=__STORYBOOK_MODULE_TEST__,W={title:`Components/TabGroup`,component:R,parameters:{docs:{subtitle:`Tab groups provide navigation between subsections of a page. The content within a Tab group should be related.`},layout:`centered`},args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R.Tab,{title:`Tab Title 1`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 1`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 2`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 2`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 3`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 3`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 4`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 4`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})})]})},argTypes:{children:{control:!1}},tags:[`autodocs`,`version:3.0.0`]},G={parameters:{chromatic:{viewports:[a.googlePixel2,a.chromebook]}}},K={args:{variant:`inverse`,children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R.Tab,{title:`Tab Title 1`,children:(0,H.jsxs)(`div`,{className:`text-utility-inverse max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 1`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 2`,children:(0,H.jsxs)(`div`,{className:`text-utility-inverse max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 2`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 3`,children:(0,H.jsxs)(`div`,{className:`text-utility-inverse max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 3`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 4`,children:(0,H.jsxs)(`div`,{className:`text-utility-inverse max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 4`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})})]})},decorators:[e=>(0,H.jsx)(`div`,{className:`p-spacing-size-half`,children:e()})],parameters:{...G.parameters},globals:{backgrounds:{value:`background-utility-default-high-emphasis`}}},q={args:{align:`center`},parameters:{chromatic:{viewports:[a.googlePixel2,a.chromebook]}}},J={args:{...q.args,tabWidth:`full`}},Y={args:{...q.args,children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R.Tab,{icon:`person-encircled`,title:`Tab Title 1`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 1`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{icon:`add`,title:`Tab Title 2`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 2`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{icon:`add`,title:`Tab Title 3`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 3`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})})]})}},X={args:{children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R.Tab,{title:`Tab Title 1`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 1`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 2`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 2`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 3`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 3`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 4`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 4`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 5`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 5`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 6`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 6`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 7`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 7`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 8`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 8`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})}),(0,H.jsx)(R.Tab,{title:`Tab Title 9`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 9`}),(0,H.jsxs)(h,{children:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`,` `]})]})})]})},parameters:{snapshot:{skip:!0},chromatic:{viewports:[a.googlePixel2]},layout:`padded`},play:async({canvasElement:e})=>{(await U(e).findByRole(`tablist`))?.parentElement?.scroll(50,0)},globals:{viewport:{value:`googlePixel2`,isRotated:!1}}},Z={args:{...q.args,children:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R.Tab,{icon:(0,H.jsx)(v,{size:16}),title:`Tab Title 1`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 1`}),(0,H.jsx)(h,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]})}),(0,H.jsx)(R.Tab,{icon:(0,H.jsx)(v,{size:16}),title:`Tab Title 2`,children:(0,H.jsxs)(`div`,{className:`max-w-[576px]`,children:[(0,H.jsx)(d,{as:`h3`,className:`mb-spacing-size-3`,children:`Tab 2`}),(0,H.jsx)(h,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]})})]})}},Q=[`Default`,`InverseVariant`,`Centered`,`TabWidthFull`,`WithTabIcons`,`ScrollMiddle`,`WithFpoTabContent`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.chromebook]
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverse',
    children: <>
        <TabGroup.Tab title="Tab Title 1">
          <div className="text-utility-inverse max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 2">
          <div className="text-utility-inverse max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 3">
          <div className="text-utility-inverse max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 4">
          <div className="text-utility-inverse max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
  },
  decorators: [Story => <div className="p-spacing-size-half">{Story()}</div>],
  parameters: {
    ...Default.parameters
  },
  globals: {
    backgrounds: {
      value: 'background-utility-default-high-emphasis'
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`TabGroups have an inverted variant, for use on dark backgrounds. Depending on how the background is applied, you can use
text color tokens to style the individual tabs in the group.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'center'
  },
  parameters: {
    chromatic: {
      viewports: [chromaticViewports.googlePixel2, chromaticViewports.chromebook]
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Centered.args,
    tabWidth: 'full'
  }
}`,...J.parameters?.docs?.source},description:{story:`Tabs can instead take up the full width available.

(This will cause text truncation at small sizes)`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Centered.args,
    children: <>
        <TabGroup.Tab icon="person-encircled" title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab icon="add" title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab icon="add" title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
  }
}`,...Y.parameters?.docs?.source},description:{story:`Individual tabs can have an EDS icon attached to them`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TabGroup.Tab title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 4">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 5">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 5
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 6">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 6
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 7">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 7
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 8">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 8
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 9">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 9
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
  },
  parameters: {
    // Skip these b/c test environment cannot execute "scroll" on the parent div
    snapshot: {
      skip: true
    },
    chromatic: {
      viewports: [chromaticViewports.googlePixel2]
    },
    layout: 'padded'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tablist = await canvas.findByRole('tablist');
    tablist?.parentElement?.scroll(50, 0);
  },
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`For Chromatic visual regression testing of the masks on both sides of the TabGroup. Currently does not work properly on local.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Centered.args,
    children: <>
        <TabGroup.Tab icon={<FpoBlock size={16} />} title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab icon={<FpoBlock size={16} />} title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </TabGroup.Tab>
      </>
  }
}`,...Z.parameters?.docs?.source},description:{story:`A tab's leading slot takes arbitrary content, not only an EDS icon name. The blocks below
stand in for whatever you supply, so the slot itself is the subject rather than the icon
that happened to be picked.`,...Z.parameters?.docs?.description}}}})))()}$();export{q as Centered,G as Default,K as InverseVariant,X as ScrollMiddle,J as TabWidthFull,Z as WithFpoTabContent,Y as WithTabIcons,Q as __namedExportsOrder,W as default};