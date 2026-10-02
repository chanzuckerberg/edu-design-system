import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{M as n,W as r}from"./iframe-CxYcUItw.js";import{n as i,t as a}from"./clsx-CU3OJm-u.js";import{t as o}from"./debounce-sqAUfviD.js";var s,c=t((()=>{s={"scroll-wrapper":`_scroll-wrapper_11asr_8`,"scroll-wrapper__inner":`_scroll-wrapper__inner_11asr_20`,"scroll-wrapper--orientation-vertical":`_scroll-wrapper--orientation-vertical_11asr_33`,"scroll-wrapper--has-top-shadow":`_scroll-wrapper--has-top-shadow_11asr_55`,"scroll-wrapper--has-bottom-shadow":`_scroll-wrapper--has-bottom-shadow_11asr_59`,"scroll-wrapper--orientation-horizontal":`_scroll-wrapper--orientation-horizontal_11asr_64`,"scroll-wrapper--has-start-shadow":`_scroll-wrapper--has-start-shadow_11asr_88`,"scroll-wrapper--has-end-shadow":`_scroll-wrapper--has-end-shadow_11asr_92`,"scroll-wrapper--shadow-type-cover":`_scroll-wrapper--shadow-type-cover_11asr_97`,"scroll-wrapper--shadow-type-contain":`_scroll-wrapper--shadow-type-contain_11asr_104`}})),l,u,d,f,p,m=t((()=>{i(),l=e(o()),u=e(r()),c(),d=n(),f=e=>{let{scrollTop:t,scrollLeft:n,scrollHeight:r,clientHeight:i,scrollWidth:a,clientWidth:o}=e,s={top:!1,bottom:!1,start:!1,end:!1};return t===0?s.top=!1:s.top=!0,t<r-i?s.bottom=!0:s.bottom=!1,n===0?s.start=!1:s.start=!0,n<a-o?s.end=!0:s.end=!1,s},p=({children:e,className:t,orientation:n=`vertical`,shadowType:r=`cover`,...i})=>{let o=(0,u.useRef)(null),[c,p]=(0,u.useState)({top:!1,bottom:!1,start:!1,end:!1}),m=a(s[`scroll-wrapper`],n&&s[`scroll-wrapper--orientation-${n}`],c.top&&s[`scroll-wrapper--has-top-shadow`],c.bottom&&s[`scroll-wrapper--has-bottom-shadow`],c.start&&s[`scroll-wrapper--has-start-shadow`],c.end&&s[`scroll-wrapper--has-end-shadow`],r&&s[`scroll-wrapper--shadow-type-${r}`],t),h=e=>{e.target&&p(f(e.target))},g=(0,l.default)(()=>{p({top:!1,bottom:!1,start:!1,end:!1})},250);return(0,u.useEffect)(()=>{let e=o.current;return e&&(e.addEventListener(`scroll`,h),window.addEventListener(`resize`,g)),()=>{e&&(e.removeEventListener(`scroll`,h),window.removeEventListener(`resize`,g))}},[g]),(0,d.jsx)(`div`,{className:m,...i,children:(0,d.jsx)(`div`,{className:a(s[`scroll-wrapper__inner`]),ref:o,tabIndex:0,children:e})})};try{f.displayName=`setShadowStates`,f.__docgenInfo={description:``,displayName:`setShadowStates`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/ScrollWrapper/ScrollWrapper.tsx`,methods:[],props:{},tags:{}}}catch{}try{p.displayName=`ScrollWrapper`,p.__docgenInfo={description:`## Usage

Wrap content that has a fixed height but is scrollable, so that users have an indication that
more content is available. Subtle shadows come in several variants.

| Type/Use | Description | Example |
|----------|-------------|---------|
| Vertical | The default. Scrolls on the y axis and shades the top and bottom edges. | Long dialog bodies. Tall option lists. |
| Horizontal | \`orientation="horizontal"\` scrolls on the x axis and shades the start and end edges. | Wide tables. Toolbars that overflow. |

\`orientation\` picks one axis at a time, so a single wrapper shades either the vertical or the
horizontal edges, not both.

\`shadowType\` controls the treatment: \`cover\` (the default) spans the full width of the wrapper,
while \`contain\` keeps the shadow's edges inside it.

The effect depends on the container being shorter than its content, so the element above the
scroll wrapper must have a fixed height. Without that, nothing overflows and no shadow appears.

## Interaction

When vertical, scrolling will enable both shadows when there is more content above and below the
current position. When there is only content above the current position (scrolled to the end of
the container), only the top shadow is shown. When scrolled to the very top of the container,
only the bottom shadow is shown. The same logic applies to the horizontal scrolling scenario,
against the start and end edges.

\`Modal\` renders a \`ScrollWrapper\` around its body for you, so its content scrolls without any
extra setup.

## Content & Accessibility

### Do's

* Use \`ScrollWrapper\` in any overlay components that need to exceed the available screen real estate. This is not for ones that definitely will, but ones that have variable content which could grow to be either too tall or too wide.
* Use \`cover\` for the shadow type to emphasize and make clear that more content is available.
* Leave the scrollable region in the tab order. It carries \`tabIndex={0}\` so that people navigating by keyboard can scroll it.

### Don'ts

* Avoid wrapping entire pages with \`ScrollWrapper\`.
* Never use multiple, adjacent \`ScrollWrapper\` instances.`,displayName:`ScrollWrapper`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/ScrollWrapper/ScrollWrapper.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`edu-design-system/src/components/ScrollWrapper/ScrollWrapper.tsx`,name:`TypeLiteral`}],description:`Determines the direction that the shadows apply`,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},shadowType:{defaultValue:{value:`cover`},declarations:[{fileName:`edu-design-system/src/components/ScrollWrapper/ScrollWrapper.tsx`,name:`TypeLiteral`}],description:`Type of shadow treatment for the wrapper:
- **cover** - full-width shadow in the wrapper based on shadow context
- **contain** - shadow whose edges fit within the width of the wrapper`,name:`shadowType`,required:!1,tags:{},type:{name:`enum`,raw:`"contain" | "cover"`,value:[{value:`"contain"`},{value:`"cover"`}]}}},tags:{}}}catch{}}));export{m as n,p as t};