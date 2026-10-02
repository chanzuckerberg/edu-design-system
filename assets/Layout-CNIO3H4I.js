import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,d as r,f as i,g as a}from"./iframe-CxYcUItw.js";import{t as o}from"./mdx-react-shim-BXtN3sNq.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Documentation/Defining Layout`}),`
`,(0,l.jsx)(n.h1,{id:`layout`,children:`Layout`}),`
`,(0,l.jsx)(n.p,{children:`Layout for pages is a combination of spacing units between components, and responsive changes based on the available viewport. EDS provides
configururation to use with tailwind, if desired. At the core, EDS also provides tokens to use, which align with spacing units defined in design.`}),`
`,(0,l.jsx)(n.p,{children:`For more information on what Tailwind supplies, check out the following links:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/columns`,rel:`nofollow`,children:`Tailwind Columns`})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/container`,rel:`nofollow`,children:`Tailwind Container`})}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/display`,rel:`nofollow`,children:`Tailwind Display`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/display#grid`,rel:`nofollow`,children:`Grid`})}),`
`]}),`
`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`breakpoints-columns-and-gutters`,children:`Breakpoints, Columns, and Gutters`}),`
`,(0,l.jsx)(n.p,{children:`Applications should use the following grid values for layout and follow a mobile-first approach. Note the definition of the breakpoints below:`}),`
`,(0,l.jsx)(r,{children:`
| Breakpoint | Min / Max Width | Number of Columns | Gutter Spacing | Outer Margins  | Column Width |
|------------|-----------------|-------------------|----------------|----------------|--------------|
| xs         | 0-599           | 4                 | spacing-size-2 | spacing-size-3 | Fluid        | 
| sm         | 600-767         | 8                 | spacing-size-2 | spacing-size-3 | Fluid        | 
| md         | 768-1039        | 8                 | spacing-size-3 | spacing-size-3 | Fluid        | 
| lg         | 1040-1439       | 12                | spacing-size-3 | spacing-size-3 | Fluid        | 
| xl         | 1440-1919       | 12                | spacing-size-3 | spacing-size-3 | Fluid        | 
| xxl        | >1920           | 12                | spacing-size-3 | N/A            | Fixed[^1]    | 

[^1]: Page wrapper maximum width = 1824px
`}),`
`,(0,l.jsxs)(n.p,{children:[`EDS offers configuration exposing the breakpoint minimums via the `,(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/responsive-design#using-custom-breakpoints`,rel:`nofollow`,children:`defined prefixes`}),`.
If using `,(0,l.jsx)(n.a,{href:`https://css-tricks.com/complete-guide-css-grid-layout/`,rel:`nofollow`,children:`CSS Grids`}),`, note the tokens to use for the gutters and the constants for columns.`]}),`
`,(0,l.jsx)(n.h2,{id:`spacing-and-alignment`,children:`Spacing and alignment`}),`
`,(0,l.jsx)(n.p,{children:`EDS components do not include external margin properties, as spacing between components should be handled primarily with
utility classes or similar custom classes.`}),`
`,(0,l.jsxs)(n.p,{children:[`However, it's important to be able to control spacing between components, so EDS works well with tailwind utility
classes like `,(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/margin`,rel:`nofollow`,children:`margin`}),`.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`?path=/story/design-tokens-tier-1-definitions--sizes`,children:`EDS Size Token Documentation`})}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`example`,children:`Example`}),`
`,(0,l.jsx)(n.p,{children:`Below, we use one of the size units to demonstrate how to use EDS sizing utility classes (with tokens).`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-jsx`,children:`<InlineNotification title="lorem ipsum dolor sit amet" className="mx-spacing-size-5" />
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Just like with `,(0,l.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/customizing-spacing`,rel:`nofollow`,children:`standard tailwind spacing values`}),`, the `,(0,l.jsx)(n.code,{children:`spacing-size-X`}),` will correspond to those used in design, AND
be available across all the documented spacing utilities. For now, we provide these along side the built-in utilities, for compatibility.`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),a()}))();export{c as default};