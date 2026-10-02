import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,f as r,g as i}from"./iframe-CxYcUItw.js";import{t as a}from"./mdx-react-shim-BXtN3sNq.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Documentation/Contributor Guidelines/Using Tokens`}),`
`,(0,c.jsx)(n.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS is a `,(0,c.jsx)(n.a,{href:`https://bradfrost.com/blog/post/creating-themeable-design-systems/`,rel:`nofollow`,children:`themeable design system`}),` in order to support different brands, design language generations, and product families. `,(0,c.jsx)(n.a,{href:`https://css-tricks.com/what-are-design-tokens/`,rel:`nofollow`,children:`Design tokens`}),` are a core part of building a EDS theme. Design tokens define low-level design values and apply those values to UI applications in order to manage the brand's look and feel separately from structural component styles.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#style-dictionary`,children:`Style Dictionary`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#design-token-architecture`,children:`Design Token Architecture`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#tier-1-tokens`,children:`Tier 1 Tokens`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-animation`,children:`Animation`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-borders`,children:`Borders`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-breakpoints`,children:`Breakpoints`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-colors`,children:`Colors`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-shadows`,children:`Shadows`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-size`,children:`Size`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-typography`,children:`Typography`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-1-z-index`,children:`Z-index`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#tier-2-usage-tokens`,children:`Tier 2 Usage Tokens`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-2-borders`,children:`Border`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-2-colors`,children:`Color`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tier-3-component-tokens`,children:`Tier 3 Component Tokens`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`style-dictionary`,children:`Style Dictionary`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS uses `,(0,c.jsx)(n.a,{href:`https://amzn.github.io/style-dictionary/#/`,rel:`nofollow`,children:`Style Dictionary`}),` to manage design tokens. Style Dictionary transforms design token source files into various formats, including CSS variables, Sass variables, JSON, and native app-specific formats.`]}),`
`,(0,c.jsx)(n.p,{children:`Tokens are defined as a collection of JSON files, which then get converted by Style Dictionary into the appropriate format — namely CSS custom properties — to be consumed by EDS components.`}),`
`,(0,c.jsx)(n.h2,{id:`design-token-architecture`,children:`Design token architecture`}),`
`,(0,c.jsxs)(n.p,{children:[`Design tokens live at `,(0,c.jsx)(n.code,{children:`src/design-tokens`}),`. Primitive (tier-1) tokens live in `,(0,c.jsx)(n.code,{children:`primitives.json`}),`, and theme (tier-2/tier-3) tokens live in `,(0,c.jsx)(n.code,{children:`themes.json`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`For typography tokens, thes directory structure is stored in the following tree:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`design-tokens
 |--tier-1-definitions
 |--tier-2-usage
 |--tier-3-component
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tier-1-definitions`}),` define the brand's core design values, serving as the raw materials for the UI's visual design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tier-2-usage`}),` house the semantic design values, which take Tier 1 token values and map them to specific UI applications.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tier-3-component`}),` house the component-specific design values, which allow for more nuanced theming for components.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`All tokens are prefixed with `,(0,c.jsx)(n.code,{children:`eds-`}),` to serve as a namespace and identifier for working with the system in production applications.`]}),`
`,(0,c.jsx)(n.p,{children:`EDS's token architecture and nomenclature is as follows:`}),`
`,(0,c.jsx)(n.h2,{id:`tier-1-tokens`,children:`Tier 1 tokens`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`/?path=/docs/design-tokens-tier-1-definitions--docs`,children:`Tier 1 tokens`}),` define the brand's design values. They can be thought of as a brand style guide converted into variables. Tier1 token values should not imply any UI usage, and should not be used directly by components. Instead, Tier 1 values should be mapped to Tier 2 values.`]}),`
`,(0,c.jsxs)(n.h3,{id:`animation-`,children:[`Animation `,(0,c.jsx)(`a`,{name:`tier-1-animation`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`anim-fade-`}),` for fading between frames (e.g. button background color changes, banner messages fading out, etc). Typically default to "quick" and "long" as values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`anim-move-`}),` for defining movement durations (e.g. a modal floating up from the bottom of the screen, etc)`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`borders-`,children:[`Borders `,(0,c.jsx)(`a`,{name:`tier-1-borders`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`border-width-`}),` for border widths. EDS defaults to abbreviated t-shirt sizes (e.g. `,(0,c.jsx)(n.code,{children:`sm`}),`, `,(0,c.jsx)(n.code,{children:`md`}),`, `,(0,c.jsx)(n.code,{children:`lg`}),`, `,(0,c.jsx)(n.code,{children:`xl`}),`) in accordance with the `,(0,c.jsx)(n.a,{href:`./?path=/story/documentation-guidelines-code-guidelines--page`,children:`EDS code guidelines`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`border-radius-`}),` for border radius values. EDS defaults to t-shirt sizes, with additional "full" and "round"`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`breakpoints-`,children:[`Breakpoints `,(0,c.jsx)(`a`,{name:`tier-1-breakpoints`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`bp-`}),` for breakpoint. Typically default to t-shirt sizes (e.g. `,(0,c.jsx)(n.code,{children:`bp-sm`}),`, `,(0,c.jsx)(n.code,{children:`bp-md`}),`, etc). EDS `,(0,c.jsx)(n.a,{href:`https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/`,rel:`nofollow`,children:`deliberately avoids`}),` using "mobile" and "tablet" and "desktop" as values, despite it being a common nomenclature.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`NOTE`}),`: These are currently defined directly as SCSS variables due to lack of support at the moment for CSS custom property media queries.`]}),`
`,(0,c.jsxs)(n.h3,{id:`colors-`,children:[`Colors `,(0,c.jsx)(`a`,{name:`tier-1-colors`})]}),`
`,(0,c.jsx)(n.p,{children:`Tier 1 colors define ranges of colors across various hues. Numbers indicate various saturations, and can be used as a guide for choosing accessible combinations.`}),`
`,(0,c.jsxs)(n.h3,{id:`shadows-`,children:[`Shadows `,(0,c.jsx)(`a`,{name:`tier-1-shadows`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`box-shadow-`}),` for box shadow definitions. Default to t-shirt sizes (e.g. `,(0,c.jsx)(n.code,{children:`box-shadow-lg`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`size-`,children:[`Size `,(0,c.jsx)(`a`,{name:`tier-1-size`})]}),`
`,(0,c.jsxs)(n.p,{children:[`We use size tokens, based on an 8-pixel grid size. Variables are prefixed with `,(0,c.jsx)(n.code,{children:`--eds-spacing-size`}),` and have units corresponding to 8 pixels each. We also provide tokens for some partial sizes (e.g,. 1.5 grid units, or 12 pixels).`]}),`
`,(0,c.jsxs)(n.h3,{id:`typography-`,children:[`Typography `,(0,c.jsx)(`a`,{name:`tier-1-typography`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typography-font-family-`}),` for font family definitions. EDS defaults to a numeric list for font-family definitions.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Individual presets and typography tokens are defined as a set of values to apply to the `,(0,c.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/font`,rel:`nofollow`,children:`CSS Font property`}),`.
See `,(0,c.jsx)(n.a,{href:`/story/documentation-guidelines-typography--page`,children:`Typography`}),` for more information.`]}),`
`,(0,c.jsxs)(n.h3,{id:`z-index-`,children:[`Z-index `,(0,c.jsx)(`a`,{name:`tier-1-z-index`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`z-index-`}),` controls an item's position in the stacking order. For now, EDS defaults to values that map to "top", "bottom".`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tier-2-usage-tokens`,children:`Tier 2 usage tokens`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`/?path=/docs/design-tokens-tier-2-usage--docs`,children:`Tier 2 tokens`}),` define a semantic UI layer. Tier 2 values use Tier 1 token values, mapping them to specific UI applications, which are in then used by individual component styles.`]}),`
`,(0,c.jsxs)(n.p,{children:[`All Tier 2 tokens begin with the prefix `,(0,c.jsx)(n.code,{children:`eds-theme-`}),`. For specific documentation around specific theme tokens, please refer to the token page in Storybook, which articulate the role of each theme token.`]}),`
`,(0,c.jsxs)(n.h3,{id:`borders--1`,children:[`Borders `,(0,c.jsx)(`a`,{name:`tier-2-borders`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`border-width`}),` defines the border width for the thickness. EDS defaults to `,(0,c.jsx)(n.code,{children:`border-width-sm`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`colors--1`,children:[`Colors `,(0,c.jsx)(`a`,{name:`tier-2-colors`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Tier 2 color tokens specify categorization of colors, given a specific use within an application. The naming categories specify where and when they are used, but not which components they are used for, specifically. For that, we would use `,(0,c.jsx)(n.a,{href:`#tier-3-component-tokens`,children:`tier-3 tokens`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Each token in this group is prefixed by `,(0,c.jsx)(n.code,{children:`--eds-theme-color`}),` and has certain suffixes based on the the broad categorization.`]}),`
`,(0,c.jsxs)(n.p,{children:[`For more information, `,(0,c.jsx)(n.a,{href:`/story/design-tokens-tier-2-usage--colors`,children:`refer to Storybook`}),` for the existing tokens and their naming.`]}),`
`,(0,c.jsxs)(n.h2,{id:`tier-3-component-tokens-`,children:[`Tier 3 Component Tokens `,(0,c.jsx)(`a`,{name:`tier-3-component-tokens`})]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`/?path=/docs/design-tokens-tier-3-component--docs`,children:`Tier 3 component tokens`}),` represent each component's specific values.`]}),`
`,(0,c.jsxs)(n.p,{children:[`See the current set of tier 3 tokens `,(0,c.jsx)(n.a,{href:`/story/design-tokens-tier-3-component--colors`,children:`in storybook`}),`. Note: many of these are deprecated and will be removed in a future release of EDS.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};