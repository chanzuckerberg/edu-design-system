import{n as e}from"./chunk-DnJy8xQt.js";import{M as t,W as n}from"./iframe-CxYcUItw.js";import{n as r,t as i}from"./clsx-CU3OJm-u.js";import{i as a,t as o}from"./logging-rNM_k4ml.js";var s,c=e((()=>{s={"visual-page-indicator":`_visual-page-indicator_9r0pi_8`,"visual-page-indicator__item":`_visual-page-indicator__item_9r0pi_14`,"visual-page-indicator--active":`_visual-page-indicator--active_9r0pi_26`}})),l,u,d=e((()=>{r(),n(),a(),c(),l=t(),u=({className:e,activePage:t,totalPageCount:n,...r})=>{let a=i(s[`visual-page-indicator`],e);return o([n<2],`The minimum allowed count of indicators is 2`),o([t<0,t>n-1],`The position in the indicator is out of range: [0, ${n-1}]`,`error`),(0,l.jsx)(`ul`,{className:a,...r,children:Array(n).fill(0).map((e,t)=>`Page ${t}`).map((e,n)=>(0,l.jsx)(`li`,{className:i(s[`visual-page-indicator__item`],n===t&&s[`visual-page-indicator--active`])},e))})};try{u.displayName=`VisualPageIndicator`,u.__docgenInfo={description:`## Usage

Show to users which step they are on, in a given flow. Help to illustrate current position on
pagination experiences.

## Interaction

Users can specify a number of dots, with each dot representing a discrete page of content in the
user interface. The active dot takes on a different color, to signal that it is the current
"position" within a set.

The individual dots are not interactive; a user cannot move their position by clicking any
particular dot.

\`totalPageCount\` sets how many dots render, and \`activePage\` marks which one is current. The
index is zero-based, so the last page is \`totalPageCount - 1\`. Fewer than two dots warns, and an
\`activePage\` outside the range logs an error.

## Content & Accessibility

This is a visual cue only. The dots render as empty list items with no text, so assistive tech
gets no sense of which step is current. Always state the position in text nearby, for example a
"Step 2 of 5" label alongside the indicator.

### Do's

* Use when there is a wizard-like experience, where there are a fixed number of steps, and you need to indicate which step the user is on, currently.
* For control, add adjacent buttons that let a user navigate to the next/previous step in the flow. This can be tied to logic to update the current dot in the set.
* For \`Modal\`, the next/previous buttons can be located together and right aligned. In such a layout, "Next" is treated as the primary button and is right most.

### Don'ts

* Avoid using \`VisualPageIndicator\` without adjoined buttons for control.
* Avoid relying on, or building, any interaction with \`VisualPageIndicator\`, as the tap / click targets are very small and provide a poor UX.`,displayName:`VisualPageIndicator`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/VisualPageIndicator/VisualPageIndicator.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/VisualPageIndicator/VisualPageIndicator.tsx`,name:`TypeLiteral`}],description:`CSS class names that can be appended to the component.`,name:`className`,required:!1,tags:{},type:{name:`string`}},activePage:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/VisualPageIndicator/VisualPageIndicator.tsx`,name:`TypeLiteral`}],description:`Index of the active page in the indicator (0-based).`,name:`activePage`,required:!0,tags:{},type:{name:`number`}},totalPageCount:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/VisualPageIndicator/VisualPageIndicator.tsx`,name:`TypeLiteral`}],description:`Total number of pages available in this experience`,name:`totalPageCount`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),f,p,m,h,g;e((()=>{d(),f={title:`Components/VisualPageIndicator`,component:u,parameters:{docs:{subtitle:`Static visual cue to help users understand their current position within a series of content or pages.`}},tags:[`autodocs`,`version:1.0`]},p={args:{activePage:0,totalPageCount:6}},m={args:{activePage:1,totalPageCount:2}},h={args:{activePage:2,totalPageCount:5}},g=[`Default`,`MinimumPages`,`FivePages`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 0,
    totalPageCount: 6
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    totalPageCount: 2
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 2,
    totalPageCount: 5
  }
}`,...h.parameters?.docs?.source}}}}))();export{p as Default,h as FivePages,m as MinimumPages,g as __namedExportsOrder,f as default};