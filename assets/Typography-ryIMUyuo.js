import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,f as r,g as i}from"./iframe-CxYcUItw.js";import{t as a}from"./mdx-react-shim-BXtN3sNq.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Documentation/Contributor Guidelines/Using Typography`}),`
`,(0,c.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,c.jsx)(n.p,{children:`EDS defines named compositions for the tier 2 and 3 typography "tokens". Unlike other tokens, these are created
piecemeal from tier 1 tokens, and need to be composed so that the values are applied to the right usages.`}),`
`,(0,c.jsx)(n.h2,{id:`composing-new-presets`,children:`Composing new presets`}),`
`,(0,c.jsxs)(n.p,{children:[`Tier 2/3 tokens are composed from the essential parts defined as tier 1 tokens, and defined under the `,(0,c.jsx)(n.code,{children:`Heading`}),`
and `,(0,c.jsx)(n.code,{children:`Text`}),` components. The preset names used are exposed by these components, and map to the names used in Figma.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Defined types are listed in `,(0,c.jsx)(n.code,{children:`variant-types.ts`}),` and map to classes defined in each component's CSS modules.`]}),`
`,(0,c.jsx)(n.p,{children:`For each preset, we define a main class which include custom properties for each component, then override the
properties as needed.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.text {
  --text-font-size: var(--eds-typography-preset-200-font-size);
  --text-line-height: var(--eds-typography-preset-200-line-height);
  --text-font-family: var(--eds-typography-font-family-1);

  font: unset;
  font-family: var(--text-font-family);
  font-size: calc(var(--text-font-size) * 1px);
  line-height: calc(var(--text-line-height) * 1px);
  font-style: var(--text-font-style, initial);
  font-weight: var(--text-font-weight, normal);
  text-transform: var(--text-text-transform, none);
  letter-spacing: var(--text-letter-spacing, normal);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Here, we compose the values using the `,(0,c.jsx)(n.code,{children:`font`}),` shorthand property, and specify `,(0,c.jsx)(n.code,{children:`letter-spacing`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Then, for each preset, we reset the custom property to map to the design values:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.text--headline-sm {
  --text-font-size: var(--eds-typography-preset-300-font-size);
  --text-line-height: var(--eds-typography-preset-300-line-height);
  --text-font-family: var(--eds-typography-font-family-2);
  --text-font-weight: 400;
  --text-letter-spacing: 2%;

  @media screen and (min-width: $eds-bp-md) {
    --text-font-size: var(--eds-typography-preset-400-font-size);
    --text-line-height: var(--eds-typography-preset-400-line-height);
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`For cases where we need to handle responsive behavior, we can nest media queries in each rule with relevant
overrides (note the use of the PostCSS variable since custom properties cannot be used in media queries):`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.text--headline-md {
  --text-font-size: var(--eds-typography-preset-500-font-size);
  --text-line-height: var(--eds-typography-preset-500-line-height);
  --text-font-family: var(--eds-typography-font-family-2);
  --text-font-weight: 400;
  --text-letter-spacing: 2%;

  @media screen and (min-width: $eds-bp-md) {
    --text-font-size: var(--eds-typography-preset-700-font-size);
    --text-line-height: var(--eds-typography-preset-700-line-height);
  }
}

`})}),`
`,(0,c.jsxs)(n.p,{children:[`In a future version of EDS, we will provide options to define per-theme values for each of these named presets.
In the interim, such overrides are possible by using `,(0,c.jsx)(n.code,{children:`style`}),` prop on any `,(0,c.jsx)(n.code,{children:`Header`}),` or `,(0,c.jsx)(n.code,{children:`Text`}),` component to specify
an override for any of these custom properties:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-jsx`,children:`<Heading preset="heading-md" style={{"--text-font-weight": "500"}}>...</Heading>
`})}),`
`,(0,c.jsxs)(n.h2,{id:`using-heading-and-text`,children:[`Using `,(0,c.jsx)(n.code,{children:`Heading`}),` and `,(0,c.jsx)(n.code,{children:`Text`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Whenever possible, define typography using the `,(0,c.jsx)(n.code,{children:`Heading`}),` or `,(0,c.jsx)(n.code,{children:`Text`}),` components. In cases where the typography should be
dynamic based on DOM structure, you can apply a style for `,(0,c.jsx)(n.code,{children:`font`}),` property in the style sheet. For tracking purposes, add
in a comment to describe which preset the value maps to.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* preset: body-md */
font: 400 var(--eds-typography-preset-200) var(--eds-typography-font-family-1);
letter-spacing: 2%;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`In cases where you need to compose with an offset, you can use the piecemeal preset values (`,(0,c.jsx)(n.code,{children:`-font-size`}),` and `,(0,c.jsx)(n.code,{children:`-line-height`}),`)
to declare a value for the `,(0,c.jsx)(n.code,{children:`font`}),` properties.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* preset: preset name */
font-family: var(--eds-typography-font-family-1);
font-size: calc(var(--eds-typography-preset-1400-font-size) + var(--eds-typography-font-family-size-offset) * 1px);
line-height: var(--eds-typography-preset-1400-line-height);
font-weight: 300;
letter-spacing: var(--eds-typography-letter-spacing-normal);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};