import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-DYrPrLM4.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./clsx-DSXoiAHx.js";import{i as o,t as s}from"./logging-BrlTfB4E.js";import{n as c,r as l,t as u}from"./IconSlot-Bgafg7Wg.js";import{n as d,r as f}from"./IconProvider-5iUAjgU2.js";var p,m,h;function g(){return(g=t((()=>{p=`_link_1shqp_7`,m=`_link__icon_1shqp_15`,h={link:p,link__icon:m,"link--size-xl":`_link--size-xl_1shqp_32`,"link--size-lg":`_link--size-lg_1shqp_33`,"link--context-standalone":`_link--context-standalone_1shqp_41`,"link--emphasis-default":`_link--emphasis-default_1shqp_61`,"link--emphasis-low":`_link--emphasis-low_1shqp_65`,"link--variant-inverse":`_link--variant-inverse_1shqp_74`,"link--size-md":`_link--size-md_1shqp_91`,"link--size-sm":`_link--size-sm_1shqp_96`,"link--size-xs":`_link--size-xs_1shqp_101`,"link--isBold":`_link--isBold_1shqp_112`,"link--emphasis-high":`_link--emphasis-high_1shqp_124`}})))()}var _,v,y;function b(){return(b=t((()=>{i(),_=e(n()),o(),l(),d(),g(),v=r(),y=(0,_.forwardRef)(({as:e=`a`,children:t,className:n,context:r,emphasis:i=`default`,icon:o,isBold:l=!1,size:d,variant:p=`default`,...m},g)=>{let _=d&&([`xl`,`lg`].includes(d)?`24px`:`16px`),y=o===`chevron-right`;s([y],'Link no longer takes `icon="chevron-right"`. That glyph is now the `forward` role, so pass `icon="forward"` and set `forward` on an `IconProvider` to change it. Run `npx eds-migrate 18-to-19` to update the value.');let b=y?`forward`:o,x=f(b),S=r===`standalone`&&c(x),C=a(n,h.link,r&&h[`link--context-${r}`],i&&h[`link--emphasis-${i}`],l&&h[`link--isBold`],d&&h[`link--size-${d}`],p===`inverse`&&h[`link--variant-${p}`]);return s([r===`inline`&&i===`low`],`Inline links cannot have "low" emphasis`),s([r===`inline`&&!!o],`Inline links cannot show icons`),s([r===`inline`&&p===`inverse`],`Variant can only be used when context is "standalone"`),s([r===`inline`&&d!==void 0],`Size can only be used when context is "standalone"`),s([b===`forward`&&i!==`low`],`Icon "forward" only allowed when emphasis is "low"`),(0,v.jsxs)(e,{className:C,ref:g,...m,children:[t,S&&(0,v.jsx)(u,{className:h.link__icon,content:x,purpose:`decorative`,size:_})]})}),y.displayName=`Link`;try{y.displayName=`Link`,y.__docgenInfo={description:`## Usage

| Type/Use | Description | Example |
|----------|-------------|---------|
| Inline | Embedded in body text, styled with an underline. | Reference external docs, "Learn more" links, citing sources. |
| Standalone | Appears on its own, often in navs or action areas. | Footer links, header navigation, CTA-style links (when not using a button). |
| External | Opens to a different domain or website; often includes an icon or notice. | Links to external sites, third-party tools, privacy policy or support articles. |
| Internal navigation | Navigates within the app or website (SPA routing or anchor-based). | Page-to-page navigation, in-page jump links. |
| Breadcrumb | Represents a step in a navigation trail. | Hierarchical navigation, backtracking in nested pages. |
| Disabled | Styled like a link but non-interactive. | Unavailable destinations, permission-based restrictions. |

### Best Practices

* **Do** use links primarily to support navigation, directing users to another page or a different portion of the same page.
* **Don't** use links as actions that change data or state, or that trigger a high-emphasis action; use \`Button\` instead.
* **Do** display the external ("open-in-new") icon when the link text needs support to convey an external domain.
* **Don't** use other icons to represent an external link.
* **Do** display an underline on inline links to reinforce interactivity and accessibility.
* **Don't** use the low emphasis variant in inline contexts, as it can fail to convey interactivity.

## Content & Accessibility

### Do's

* Use a meaningful, descriptive label that clearly indicates the link's destination.
* Make sure the link reflects the content people will find at the destination.
* Use "Learn more" for links to more information, ensuring the preceding content provides context.

### Don'ts

* Don't use generic phrases like "click here".
* Don't include leading spaces or end punctuation within the link.
* Don't use the same link text for different destinations on the same page.
* Don't use excessively long link text.`,displayName:`Link`,filePath:`/home/runner/work/edu-design-system/edu-design-system/src/components/Link/Link.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Component used to render the element. Meant to support interaction with framework navigation libraries.

**Default is \`"a"\`**.`,name:`as`,required:!1,tags:{},type:{name:`string | ComponentClass<any, any> | FunctionComponent<any>`}},context:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Where \`Link\` sits alongside other text and content:

* **inline** - Inline link inherits the text size/color established within the \`<p>\` or other tag they are embedded in.
* **standalone** - Users can choose from the available sizes, select variants, and add a trailing icon.

**Default is \`"inline"\`**.

----

**Note**: This will only apply when \`"standalone"\` is used`,name:`context`,required:!1,tags:{},type:{name:`enum`,raw:`"inline" | "standalone"`,value:[{value:`"inline"`},{value:`"standalone"`}]}},icon:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:'The role of the trailing icon on the link (when `context` is `"standalone"`)\n\nThis names which of two roles the link is filling rather than picking a glyph:\n`"open-in-new"` marks a link that leaves the site, and `"forward"` a low-emphasis\nlink that carries the reader onward. Both glyphs come from `IconProvider`, so an app\nchanges either one everywhere at once.',name:`icon`,required:!1,tags:{},type:{name:`enum`,raw:`"open-in-new" | "forward"`,value:[{value:`"open-in-new"`},{value:`"forward"`}]}},emphasis:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Extra or lowered colors added to a link`,name:`emphasis`,required:!1,tags:{},type:{name:`enum`,raw:`Emphasis | "default"`,value:[{value:`"low"`},{value:`"high"`},{value:`"default"`}]}},isBold:{defaultValue:{value:`false`},declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Whether to render the link text at bold weight. Applies in both contexts, and holds
across every emphasis, variant, and state.

**Default is \`false\`**.`,name:`isBold`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`The size of the link (when its context is \`"standalone"\`).

----

**Note**: This will only apply when \`"standalone"\` is used`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,value:[{value:`"xs"`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`}]}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`edu-design-system/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`The variant treatment for **standalone** links (use "inverse" on dark backgrounds).

**Default is \`"default"\`**.

----

**Note**: This will only apply when \`"standalone"\` is used`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "inverse"`,value:[{value:`"default"`},{value:`"inverse"`}]}}},tags:{}}}catch{}})))()}export{b as n,y as t};