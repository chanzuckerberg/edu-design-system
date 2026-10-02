import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BnFW0aKX.js";import{M as n,f as r,g as i}from"./iframe-CxYcUItw.js";import{t as a}from"./mdx-react-shim-BXtN3sNq.js";function o(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Documentation/Contributor Guidelines/Code Guidelines`}),`
`,(0,c.jsx)(n.h1,{id:`code-guidelines`,children:`Code Guidelines`}),`
`,(0,c.jsx)(n.p,{children:`EDS component code follows these principles and conventions for HTML, CSS, and JavaScript/TypeScript/React:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#figma`,children:`Reading Figma APIs`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#html`,children:`HTML`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#css`,children:`CSS`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#css-design-principles`,children:`CSS design principles`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#css-tools`,children:`CSS tools`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#css-conventions`,children:`CSS conventions`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#tailwind-utility-classes`,children:`Tailwind utility classes`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#theming-conventions`,children:`Theming conventions`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#js`,children:`JavaScript/TypeScript`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#js-principles`,children:`JavaScript principles`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#ts-conventions`,children:`TypeScript/React conventions`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#anatomy`,children:`Anatomy of a component`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#component-rules`,children:`Component rules and considerations`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#api-naming`,children:`Component API naming conventions`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`#accessibility-tools`,children:`Tools`})}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.h1,{id:`reading-figma-apis-`,children:[`Reading Figma APIs `,(0,c.jsx)(`a`,{name:`figma`})]}),`
`,(0,c.jsx)(n.p,{children:`Both code and figma component documentation have different needs. Tackling the API is not an exact science, so we include some guidelines on how to read and implement the APIs.`}),`
`,(0,c.jsx)(n.h2,{id:`exact-matching-apis`,children:`Exact matching APIs`}),`
`,(0,c.jsxs)(n.p,{children:[`Cases where the API names match `,(0,c.jsx)(n.strong,{children:`exactly`}),` between code and figma:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`boolean fields`}),` (e.g., `,(0,c.jsx)(n.code,{children:`isFullWidth`}),`, `,(0,c.jsx)(n.code,{children:`hasLeadingIcon`}),`) - match the names of boolean fields between code and figma, to avoid ambiguity and confusion`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`figma-apis-not-in-code`,children:`Figma APIs not in Code`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`By convention, some APIs shown in Figma are for designers and should not be implemented in code. These should include a marker both in the API table and figma component UI (e.g., the gear emoji)`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`code-apis-not-in-figma`,children:`Code APIs not in Figma`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`In code, there will be APIs for handling events, controlling other UI behaviors, and some props needed for React implementations. We annotate these by grouping the APIs in the props in the types either under `,(0,c.jsx)(n.code,{children:`// Component API`}),` or `,(0,c.jsx)(n.code,{children:`// Design API`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h1,{id:`html-principles-and-conventions-`,children:[`HTML principles and conventions `,(0,c.jsx)(`a`,{name:`html`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Use semantic markup.`}),` That means using the `,(0,c.jsx)(n.code,{children:`<button>`}),` tag rather than `,(0,c.jsx)(n.code,{children:`<div onClick={toggle}>`}),` when a button is required, an `,(0,c.jsx)(n.code,{children:`<a>`}),` tag when a link is required, and so on.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clarity over brevity.`}),` Developers should be able to understand what's going on with markup at a glance. Avoid cryptic abbreviations and nicknames, add proper indenting & spacing, and use clear comments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Accessibility.`}),` Markup should be accessible and `,(0,c.jsx)(n.a,{href:`https://www.a11yproject.com/checklist/`,rel:`nofollow`,children:`follow best practices`}),`. Use (but `,(0,c.jsx)(n.a,{href:`https://www.deque.com/blog/top-5-rules-of-aria/`,rel:`nofollow`,children:`don't abuse`}),`) `,(0,c.jsx)(`abbr`,{title:`Accessible Rich Internet Applications`,children:`ARIA`}),` attributes. See `,(0,c.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Native HTML elements`}),` (e.g. `,(0,c.jsx)(n.code,{children:`<input>`}),`, `,(0,c.jsx)(n.code,{children:`<select>`}),`) should be preferred over custom elements whenever possible. Native elements provide a slew of functionality and accessibility best practices out of the box.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h1,{id:`css`,children:`CSS`}),`
`,(0,c.jsxs)(n.h2,{id:`css-design-principles-`,children:[`CSS design principles `,(0,c.jsx)(`a`,{name:`css-design-principles`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Modular`}),` - Component styles are fully modular in order to keep things tightly scoped and to avoid unintended style bleeding.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Themeable`}),` - Component styles support multiple themes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clarity over brevity`}),` CSS class naming conventions prioritize clarity, legibility, and reslience over succinctness.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Portable`}),` - The CSS architecture uses CSS classes to ensure CSS can be ported to other frameworks and web technologies as needed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Honor the CSS language`}),` - While some abstractions and tools are in place to improve developer ergnonomics, CSS should be written with the grain of the CSS language as much as possible.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Limit chaining and multiple selectors`}),` Chaining and descendant selectors should be avoided wherever possible in order to keep CSS as DOM-independent and modular as possible.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`css-tools-`,children:[`CSS Tools `,(0,c.jsx)(`a`,{name:`css-tools`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`https://github.com/css-modules/css-modules`,rel:`nofollow`,children:`CSS Modules`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:`https://postcss.org/`,rel:`nofollow`,children:`PostCSS`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`https://github.com/postcss/postcss-mixins`,rel:`nofollow`,children:`PostCSS Mixins`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`https://github.com/postcss/postcss-nested`,rel:`nofollow`,children:`PostCSS Nested`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:`https://github.com/postcss/postcss-simple-vars`,rel:`nofollow`,children:`PostCSS Simple Vars`})}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`css-conventions-`,children:[`CSS conventions `,(0,c.jsx)(`a`,{name:`css-conventions`})]}),`
`,(0,c.jsx)(n.h3,{id:`bem-syntax`,children:`BEM syntax`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS follows `,(0,c.jsx)(n.a,{href:`http://getbem.com/introduction/`,rel:`nofollow`,children:`BEM`}),` syntax for component class names. BEM stands for “Block Element Modifier”. Here's a breakdown of what that means:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Block`}),` is the primary component block (e.g. `,(0,c.jsx)(n.code,{children:`.button`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Element`}),` is a child of the primary block (e.g. `,(0,c.jsx)(n.code,{children:`.button__text`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Modifier`}),` is a variation of a component style (e.g. `,(0,c.jsx)(n.code,{children:`.button--variant-secondary`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`BEM conventions result in an explicit (and yes, sometimes verbose) class string that allows developers to quickly deduce what role any selector plays. One
note about `,(0,c.jsx)(n.strong,{children:`Modifier`}),` class name parts; by convention in EDS, modifiers should include the property name with the value, for clarity, e.g., `,(0,c.jsx)(n.code,{children:`[block]--[propName]-[propValue]`})]}),`
`,(0,c.jsx)(n.p,{children:`Let's take a look at the following example:`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:`.button--width-full`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`button`}),` is the block name (“Block” being the “B” in BEM)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`--width-full`}),` is a modifier, indicating a stylistic variation of the block (“Modifier” being the “M” in BEM)`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Here's another example:`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:`.grid__item`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`grid`}),` is the block name`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`__item`}),` is an element, indicating that this is a child of the block (“Element” being the “E” in BEM)`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`the-dos-and-donts-of-bem`,children:`The Dos and Don'ts of BEM`}),`
`,(0,c.jsx)(n.h4,{id:`dos`,children:`Do's`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Always declare the block class for a component (e.g. `,(0,c.jsx)(n.code,{children:`card`}),`, `,(0,c.jsx)(n.code,{children:`button`}),`, etc.). Modifier classes on their own (e.g. `,(0,c.jsx)(n.code,{children:`card--inverted`}),` or `,(0,c.jsx)(n.code,{children:`button--primary`}),`) are not permitted.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Each element within a component `,(0,c.jsx)(n.em,{children:`must`}),` include the appropriate class applied in accordance with BEM standards (e.g. `,(0,c.jsx)(n.code,{children:`accordion__panel`}),` or `,(0,c.jsx)(n.code,{children:`text-field__label`}),`). Unclassed elements (e.g. stray `,(0,c.jsx)(n.code,{children:`<p>`}),` or `,(0,c.jsx)(n.code,{children:`<span>`}),` tags) are not permitted (with the exception of the `,(0,c.jsx)(n.code,{children:`Text`}),` component which is explicitly designed to handle uncontrolled markup). While verbose, this approach yields a consistent codebase, allows for tight styling control, better future proofs of the design system's codebase.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`donts`,children:`Don'ts`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Don't`}),` use BEM "grandchildren", meaning using the `,(0,c.jsx)(n.code,{children:`__`}),` part of BEM more than once (e.g. `,(0,c.jsx)(n.code,{children:`breadcrumb__item__icon`}),`). For a link inside `,(0,c.jsx)(n.code,{children:`primary-nav__item`}),`, write it as `,(0,c.jsx)(n.code,{children:`primary-nav__link`}),` instead of `,(0,c.jsx)(n.code,{children:`primary-nav__item__link`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Don't`}),` use a modifier without a block. For example, don't use `,(0,c.jsx)(n.code,{children:`button--primary`}),` modifier without the `,(0,c.jsx)(n.code,{children:`button`}),` block class. Use `,(0,c.jsx)(n.code,{children:`className="button button--primary"`}),`, `,(0,c.jsx)(n.strong,{children:`not`}),` `,(0,c.jsx)(n.code,{children:`className="button--primary"`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`css-nesting`,children:`CSS Nesting`}),`
`,(0,c.jsxs)(n.p,{children:[`EDS uses `,(0,c.jsx)(n.a,{href:`https://github.com/postcss/postcss-nested`,rel:`nofollow`,children:`PostCSS Nested`}),` to provide some developer ergonomics. As a general principle, nesting should be used sparingly and is only used in the following situations:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Media queries`}),`
`,(0,c.jsx)(n.li,{children:`States and pseudo-selectors`}),`
`,(0,c.jsx)(n.li,{children:`Parent selectors`}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`media-queries`,children:`Media queries`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.primary-nav {
  /**
    * On larger displays, convert to a horizontal list
    */
  @media all and (min-width: $eds-bp-md) {
    display: flex;
  }
}
`})}),`
`,(0,c.jsx)(n.h4,{id:`focus-states`,children:`Focus states`}),`
`,(0,c.jsx)(n.p,{children:`We use focus-visible for most focus states. This ensures that the focus state will appear when the user is interacting with an element using a keyboard, but the focus state will not be present if the user if interacting with the element using a mouse. Exceptions to this rule include situations where the focus state also communicates to users that they are in some sort of edit state, e.g. when typing in an input field.`}),`
`,(0,c.jsx)(n.p,{children:`However, we currently support some browser versions that do not support the focus-visible CSS feature, so we also use a fallback block in conjunciton with focus-visible.`}),`
`,(0,c.jsx)(n.h4,{id:`states-and-pseudo-selectors`,children:`States and pseudo-selectors`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.button--rank-primary {
  background: var(--eds-theme-color-background-brand-primary-strong);

  &:hover,
  &:active {
    background: var(--eds-theme-color-background-brand-primary-strong-hover);
  }

  &:after {
    content: '';
    display: block;
  }
}
`})}),`
`,(0,c.jsx)(n.h4,{id:`parent-selectors`,children:`Parent selectors`}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.a,{href:`https://sass-lang.com/documentation/style-rules/parent-selector`,rel:`nofollow`,children:`parent selectors`}),` to target a selector when it appears inside a specific parent element. Use parent selectors instead of child selectors in order to co-locate all styles around a specific selector, which improves maintainability and findability.`]}),`
`,(0,c.jsx)(n.p,{children:`Use the following conventions:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.button {
  /* button code */
}

.button--rank-secondary {
  /* button--secondary styles */
}

.button--size-sm {
  /* button--sm styles */
}

.button__text {
  /* button__text styles */

  .button--rank-secondary & {
    /* button__text within button--secondary styles */
  }

  .button--size-sm & {
    /* button__text within button--sm styles */
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`disable-animations-for-prefers-reduced-motion-setting`,children:`Disable animations for prefers reduced motion setting`}),`
`,(0,c.jsx)(n.p,{children:`There are some disabilities (ex: vestibular disorders) that cause users to become nauseous when they see a lot of movement happening on screen. Luckily, there is an operating system accessibility setting called "prefers reduced motion" that we can detect with CSS using a media query. Just to be safe, we disable all animations for users who have this setting turned on.`}),`
`,(0,c.jsx)(n.p,{children:`Examples:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.dropdown-button__icon {
  transition: transform calc(var(--eds-anim-move-medium) * 1s)
    ease-in-out;

  @media (prefers-reduced-motion) {
    transition: none;
  }
}

.loading-indicator__icon {
  animation: rotateIcon 2s linear infinite;

  @media screen and (prefers-reduced-motion) {
    animation: none;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`css-comments`,children:`CSS Comments`}),`
`,(0,c.jsx)(n.p,{children:`CSS comments should be added inline above the styles it's referring to or above the block when it applies to the whole block or class name format.`}),`
`,(0,c.jsx)(n.p,{children:`For example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/*------------------------------------*\\
    # BUTTON GROUP
\\*------------------------------------*/

/**
 * ButtonGroup
 */
.button-group {
}

/**
 * Full width button.
 */
.button--width-full {
  background: red;
  /* Pushes the button away from the other content because it lives in a flexbox container */
  margin-right: auto;
  width: 100%;
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Not all CSS declarations warrant a comment, but non-obvious declarations (like context-specific styles, magic numbers, or styles dependent on other selector styles) should be accompanied by a comment.`}),`
`,(0,c.jsx)(n.p,{children:`Also, media queries should live inside each class name. This makes it easier for a developer to focus on a class name, rather than finding confusion with class names written twice in a file and getting lost.`}),`
`,(0,c.jsx)(n.p,{children:`Instead of:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.primary-nav {
  flex-direction: column;
}

@media (min-width: $eds-bp-md) {
  .primary-nav {
    flex-direction: row;
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Use:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.primary-nav {
  flex-direction: column;

  @media (min-width: $eds-bp-md) {
    flex-direction: row;
  }
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Use CSS variables instead of JavaScript variables for styling in components. This enables theming the components because our theming system relies on overrides CSS variables.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Instead of:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`import { EdsThemeColorUtilitySuccessForeground } from 'src/tokens-dist/ts/colors';

<SomeComponent color={EdsThemeColorUtilitySuccessForeground} />;
`})}),`
`,(0,c.jsx)(n.p,{children:`Use:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.banner__icon {
  fill: var(--eds-theme-color-utility-favorable);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`You can continue to use the `,(0,c.jsx)(n.code,{children:`Icon`}),` components' `,(0,c.jsx)(n.code,{children:`color`}),` prop with JavaScript variables in storybook because those will not be imported and themed in other prodcuts.`]}),`
`,(0,c.jsxs)(n.h2,{id:`tailwind-utility-classes-`,children:[`Tailwind utility classes `,(0,c.jsx)(`a`,{name:`tailwind-utility-classes`})]}),`
`,(0,c.jsxs)(n.p,{children:[`EDS uses `,(0,c.jsx)(n.a,{href:`https://v3.tailwindcss.com/docs/`,rel:`nofollow`,children:`tailwind utility classes`}),`, (e.g., `,(0,c.jsx)(n.code,{children:`mb-0`}),` and `,(0,c.jsx)(n.code,{children:`p-0`}),`) inline in `,(0,c.jsx)(n.code,{children:`*.stories.tsx`}),` files to demonstrate allowed compositions and example implementations.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Consider installing the VSCode extension `,(0,c.jsx)(n.a,{href:`https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss`,rel:`nofollow`,children:`Tailwind CSS IntelliSense`}),` for autocomplete, linting, and hover previews.`]}),`
`,(0,c.jsxs)(n.h2,{id:`theming-conventions-`,children:[`Theming conventions `,(0,c.jsx)(`a`,{name:`theming-conventions`})]}),`
`,(0,c.jsxs)(n.p,{children:[`EDS is a `,(0,c.jsx)(n.a,{href:`https://bradfrost.com/blog/post/creating-themeable-design-systems/`,rel:`nofollow`,children:`Headless design system`}),` that incorporates some high-level UI application variables to make easy systematic changes to the UI.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Learn more about EDS Theming `,(0,c.jsx)(n.a,{href:`./?path=?path=/docs/documentation-theming--docs`,children:`here`}),`.`]}),`
`,(0,c.jsxs)(n.h3,{id:`design-tokens-`,children:[`Design Tokens `,(0,c.jsx)(`a`,{name:`design-tokens`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Please refer to the `,(0,c.jsx)(n.a,{href:`./?path=/story/documentation-guidelines-tokens--page`,children:`design tokens documentation`}),` to learn how to use design tokens in EDS.`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsxs)(n.h1,{id:`javascripttypescript-`,children:[`JavaScript/Typescript `,(0,c.jsx)(`a`,{name:`js`})]}),`
`,(0,c.jsxs)(n.h2,{id:`javascript-principles-`,children:[`JavaScript principles `,(0,c.jsx)(`a`,{name:`js-principles`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Presentational Components Only`}),` - EDS provides a library of reusable `,(0,c.jsx)(n.a,{href:`https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0`,rel:`nofollow`,children:`presentational UI components`}),` that are consumed by CZI applications. These presentational components don't contain any application business logic and aren't hooked up to any data models.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Predictable APIs`}),` - EDS provides consistent, clear `,(0,c.jsx)(n.a,{href:`#component-naming`,children:`component APIs`}),` in order to provide a consistent and intuitive user developer experience.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Composition over inheritance`}),` - EDS adheres to the `,(0,c.jsx)(n.a,{href:`https://en.wikipedia.org/wiki/Composition_over_inheritance`,rel:`nofollow`,children:`composition over inheritance`}),` principle in order to create clean, extensible components that aren't tied to specific contexts or content.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`typescript-conventions-`,children:[`TypeScript Conventions `,(0,c.jsx)(`a`,{name:`ts-conventions`})]}),`
`,(0,c.jsxs)(n.p,{children:[`EDS is built using `,(0,c.jsx)(n.a,{href:`https://www.typescriptlang.org/`,rel:`nofollow`,children:`TypeScript`}),` and `,(0,c.jsx)(n.a,{href:`https://reactjs.org/`,rel:`nofollow`,children:`React`}),`, but should be built in a way to promote portability with other frameworks, especially with regards to HTML and CSS.`]}),`
`,(0,c.jsx)(n.h3,{id:`component-directory-structure`,children:`Component directory structure:`}),`
`,(0,c.jsx)(n.p,{children:`The design system's component directory contains all of the design system's components.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`- ComponentName
  - ComponentName.tsx
  - ComponentName.module.css
  - ComponentName.stories.tsx
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ComponentName.tsx`}),` contains the TypeScript-powered JSX structure and functionality for the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ComponentName.module.css`}),`contains the styles for the component. All components must include a `,(0,c.jsx)(n.code,{children:`.module.css`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ComponentName.stories.js`}),` contains all the `,(0,c.jsx)(n.a,{href:`https://storybook.js.org/basics/writing-stories/`,rel:`nofollow`,children:`stories`}),` for the component.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`anatomy-of-a-component-`,children:[`Anatomy of a component `,(0,c.jsx)(`a`,{name:`anatomy`})]}),`
`,(0,c.jsx)(n.h3,{id:`imports`,children:`Imports`}),`
`,(0,c.jsxs)(n.p,{children:[`The framework follows a specific ordering/clustering for importing modules into a component. This is enforced through the `,(0,c.jsxs)(n.a,{href:`https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md`,rel:`nofollow`,children:[(0,c.jsx)(n.code,{children:`import/order`}),` lint rule`]}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Here's an example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-js`,children:`import React, { ReactNode } from 'react';
import styles from './Tags.module.css';
import { Icon } from '../Icon/Icon';
`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Import utility/library dependencies first, in alphabetical order of the library name`}),`
`,(0,c.jsxs)(n.li,{children:[`Import component styles, always using the `,(0,c.jsx)(n.code,{children:`styles`}),` as the default export name`]}),`
`,(0,c.jsx)(n.li,{children:`Import other EDS components`}),`
`,(0,c.jsx)(n.li,{children:`Import any other necessary assets`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`prop-type-definitions`,children:`Prop Type definitions`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export type ComponentNameProps = {
  /**
   * Toggles the ability to dismiss the banner via an close button in the top right of the banner
   */
  dismissible?: boolean;

  ...
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`All component props must be defined with appropriate `,(0,c.jsx)(n.a,{href:`https://www.typescriptlang.org/docs/handbook/basic-types.html`,rel:`nofollow`,children:`TypeScript type`}),` applied. Each prop must contain a comment above the prop declaration to document the prop's function. These comments and prop declarations are automatically converted into prop documentation in Storybook. As a general guideline, try to organize component prop definitions alphabetically.`]}),`
`,(0,c.jsx)(n.h3,{id:`component-comments`,children:`Component comments`}),`
`,(0,c.jsx)(n.p,{children:`All components should be documented with a comment directly before the component declaration.`}),`
`,(0,c.jsx)(n.p,{children:`The comment should begin with an import example, include a general description of the component, possibly note behavior that may not be obvious to developers (so they don't have to dig through the code to understand what it does), and end with example usage for complex components (such as compound components).`}),`
`,(0,c.jsx)(n.p,{children:`Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`/**
 * \`import {ButtonGroup} from "@chanzuckerberg/eds";\`
 *
 * A container for buttons grouped together horizontally or vertically.
 *
 * Example usage:
 *
 * \`\`\`
 * <ButtonGroup
 *   className={componentClassName}
 *   spacing='1x'
 *   orientation='vertical'
 * >
 *   <Button>Left button</Button>
 *   <Button>Right button</Button>
 * </ButtonGroup>
 * \`\`\`
 */
 export const ButtonGroup = ({ ... })
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Do not use `,(0,c.jsx)(n.a,{href:`https://devhints.io/jsdoc`,rel:`nofollow`,children:`jsdoc tags`}),` (e.g. `,(0,c.jsx)(n.code,{children:`@example`}),`) if possible because these will break the documentation in storybook and cause all following text to not be shown on the page. For important jsdoc tags that we really want to include, place them at the end of the comment to avoid hiding comment content. For example, we use the `,(0,c.jsx)(n.code,{children:`@deprecated`}),` tag so Visual Studio Code will indicate a component is deprecated for developers, but we place that at the end of a component's docstring to avoid disrupting any of the other text.`]}),`
`,(0,c.jsx)(n.p,{children:`Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`/**
 * The Banner component is deprecated and will be removed in an upcoming release.
 *
 * Please visit Zeroheight to find the right notification component for your needs: https://eds.czi.design/
 *
 * \`import {Banner} from "@chanzuckerberg/eds";\`
 *
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * \`\`\`tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   title="Some Title"
 *   description={<>Some description, possibly with a <Link href="https://go.czi.team/eds">link to some other resource</Link>.</>}
 *   action={<Button onClick={handleAction}>Action</Button>}
 * />
 * \`\`\`
 *
 * @deprecated
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`export-module`,children:`Export module`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const ComponentName = ({
  list,
  of,
  props
  ...other
}: ComponentNameProps) => {
  ...
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`This defines the component name and passes in all the `,(0,c.jsx)(n.code,{children:`Props`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`src/components/{componentFolder}/index.ts`}),` file should should import and re-export the component `,(0,c.jsx)(n.code,{children:`as default`}),`. The `,(0,c.jsx)(n.code,{children:`src/index.ts`}),` file should re-export the component for an easy way to consume it downstream.`]}),`
`,(0,c.jsxs)(n.p,{children:[`i.e. in `,(0,c.jsx)(n.code,{children:`src/components/{componentFolder}/index.ts`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export { ComponentName as default } from './ComponentName';
`})}),`
`,(0,c.jsxs)(n.p,{children:[`...and in `,(0,c.jsx)(n.code,{children:`src/index.ts`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`...
export { default as ComponentName } from './components/ComponentName';
...
`})}),`
`,(0,c.jsx)(n.h3,{id:`children`,children:`Children`}),`
`,(0,c.jsxs)(n.p,{children:[`When a component uses `,(0,c.jsx)(n.code,{children:`children`}),` as a prop, use the type `,(0,c.jsx)(n.code,{children:`ReactNode`}),` unless context dictates otherwise, including `,(0,c.jsx)(n.code,{children:`ReactNode`}),` as a named import.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import React, from 'react';
import type { ReactNode } from 'react';
...

export const ComponentName = ({ children }: { children: ReactNode }) => {
  ...
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`variables-methods-and-hooks`,children:`Variables, Methods, and Hooks`}),`
`,(0,c.jsxs)(n.p,{children:[`Interactive components likely require defining necessary `,(0,c.jsx)(n.a,{href:`https://reactjs.org/docs/state-and-lifecycle.html`,rel:`nofollow`,children:`state and lifecycle`}),` functions in addition to defining any other necessary variables and functions.`]}),`
`,(0,c.jsx)(n.h4,{id:`usestate`,children:`useState()`}),`
`,(0,c.jsxs)(n.p,{children:[`When using the `,(0,c.jsx)(n.code,{children:`useState()`}),` hook, TypeScript will infer the correct type from the initial value. If explicit typing of a variable in state is necessary and a hard-coded initial value is not set, you can use a prop as the initial value.`]}),`
`,(0,c.jsx)(n.h4,{id:`useeffect`,children:`useEffect()`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useEffect()`}),` hooks do not require any typing. TypeScript expects them to either return nothing or a Destructor-typed function (a function that cleans up any side effects and returns void.)`]}),`
`,(0,c.jsx)(n.h4,{id:`useref`,children:`useRef()`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useRef()`}),` hooks access underlying DOM elements to perform imperative actions. The resulting `,(0,c.jsx)(n.code,{children:`ref`}),` object can either be `,(0,c.jsx)(n.em,{children:`mutable`}),` or `,(0,c.jsx)(n.em,{children:`not mutable`}),`. (If the value store in its' `,(0,c.jsx)(n.code,{children:`.current`}),` property may be changed, the ref needs to be `,(0,c.jsx)(n.code,{children:`mutable`}),`.) When possible, use a type param or declare an initial value for the ref.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import React, { useRef } from 'react';

// when typing an HTML element ref, set the initial value to \`null\`
const ref = useRef<HTMLInputElement>(null);
// otherwise, use a type param
const ref = useRef<number | undefined>();
// or TS can infer the type from an initial value
const ref = useRef(false);
`})}),`
`,(0,c.jsxs)(n.h3,{id:`define-componentclassname`,children:[`Define `,(0,c.jsx)(n.code,{children:`componentClassName`})]}),`
`,(0,c.jsxs)(n.p,{children:[`The last thing that appears above the `,(0,c.jsx)(n.code,{children:`return`}),` statement is the `,(0,c.jsx)(n.code,{children:`componentClassName`}),`, which defines the CSS block for the component in addition to any modifier CSS class names using the `,(0,c.jsxs)(n.a,{href:`https://www.npmjs.com/package/clsx`,rel:`nofollow`,children:[(0,c.jsx)(n.code,{children:`clsx`}),` library`]}),`. CSS Modules' bracket syntax (e.g. `,(0,c.jsx)(n.code,{children:`styles['my-component']`}),`) is used to enable BEM conventions (which uses dashes).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const componentClassName = clsx(styles['my-component'], className, {
  [styles['my-component--size-lg']]: size === 'lg',
});
`})}),`
`,(0,c.jsx)(n.h3,{id:`return-statement`,children:`Return statement`}),`
`,(0,c.jsxs)(n.p,{children:[`Finally, the `,(0,c.jsx)(n.code,{children:`return`}),` statement contains the JSX markup for the component and applies the `,(0,c.jsx)(n.code,{children:`componentClassName`}),` to the outermost element to be rendered in the DOM.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`return <div className={componentClassName} {...other} />;
`})}),`
`,(0,c.jsxs)(n.h2,{id:`component-rules-and-considerations-`,children:[`Component Rules and Considerations `,(0,c.jsx)(`a`,{name:`component-rules`})]}),`
`,(0,c.jsx)(n.h3,{id:`compound-components`,children:`Compound Components`}),`
`,(0,c.jsxs)(n.p,{children:[`Certain components (such as `,(0,c.jsx)(n.code,{children:`<Tabs />`}),` and `,(0,c.jsx)(n.code,{children:`<Table />`}),`) require splitting up into smaller sub-components.`]}),`
`,(0,c.jsxs)(n.p,{children:[`By default, we err towards more centralized control over the component architecture in order to prevent undesired results (for instance, we don't want users to put a `,(0,c.jsx)(n.code,{children:`<Card />`}),` inside of `,(0,c.jsx)(n.code,{children:`<Breadcrumbs />`}),`). However, certain components will require more flexibility and will therefore be architected to be composable and flexible (such as `,(0,c.jsx)(n.code,{children:`<Card>`}),`).`]}),`
`,(0,c.jsx)(n.h4,{id:`conventions-for-compound-components`,children:`Conventions for compound components`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Compound components are composed of a parent component (e.g. `,(0,c.jsx)(n.code,{children:`<Card>`}),`) and children component (e.g. `,(0,c.jsx)(n.code,{children:`<Card.Header>`}),` and `,(0,c.jsx)(n.code,{children:`<Card.Footer>`}),`).`]}),`
`,(0,c.jsx)(n.li,{children:`Compound component children must be declared within the parent component file.`}),`
`,(0,c.jsxs)(n.li,{children:[`Compound component children names must always begin with the parent name. A parent component `,(0,c.jsx)(n.code,{children:`Table`}),` means that all child components related to it must begin with `,(0,c.jsx)(n.code,{children:`Table`}),` (such as `,(0,c.jsx)(n.code,{children:`Table.Body`}),`, `,(0,c.jsx)(n.code,{children:`Table.Row`}),` and `,(0,c.jsx)(n.code,{children:`Table.Cell`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Compound components never have an associated `,(0,c.jsx)(n.code,{children:`.stories.tsx`}),` file as they rely on the parent component's stories to render properly.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Compound components should be exported as sub-components from their parent component file for easier usage. For example, at the bottom of `,(0,c.jsx)(n.code,{children:`Card.tsx`}),`, add the lines:`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// This demonstrates how bound sub-components are attached
Card.Header = CardHeader;
Card.Footer = CardFooter;
`})}),`
`,(0,c.jsx)(n.h3,{id:`prop-naming-conventions`,children:`Prop Naming conventions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.em,{children:`camelCase for multi-word props`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`All props declared at top of `,(0,c.jsx)(n.code,{children:`render`}),` method`]}),` - this defines all the props available to a component in one place and keeps the rest of the component code cleaner (you don't have to repeat `,(0,c.jsx)(n.code,{children:`this.props.[thing]`}),` everywhere).`]}),`
`,(0,c.jsx)(n.li,{children:`Don't use ternaries for most things, especially blocks of JSX.`}),`
`,(0,c.jsxs)(n.li,{children:[`Update aria attribute prop names to native HTML names (`,(0,c.jsx)(n.code,{children:`aria-label`}),`, `,(0,c.jsx)(n.code,{children:`aria-describedby`}),`, `,(0,c.jsx)(n.code,{children:`aria-labelledby`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`component-api-naming-conventions-`,children:[`Component API naming conventions `,(0,c.jsx)(`a`,{name:`api-naming`})]}),`
`,(0,c.jsx)(n.p,{children:`EDS follows specific front-end API naming conventions. Authoring a consistent API language provides many benefits:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`More efficient development`}),` - Because the API language is consistent across components, user developers can spend more time coding rather than reading API documentation. Also, library contributors don't have to think as much about component API naming when creating new components/variants.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shared vocabulary between designers and developers`}),` - When the code library and design library use the same language, designers and developers can spend more time collaborating rather than futzing over what things are named. This improves team velocity and product quality. It also positions the team to benefit from future tooling that can bring design and code closer together (something many startups and plugins are trying to solve right now!)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Future changes`}),` - Utilizing a consistent language means that future changes and improvements are as easy as find-and-replace.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`EDS adheres to the following API naming conventions:`}),`
`,(0,c.jsx)(n.h3,{id:`variants`,children:`Variants`}),`
`,(0,c.jsx)(n.p,{children:`The default option should be the one most commonly used in order to reduce friction for developers using the components.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`variant`}),` should be used for primary `,(0,c.jsx)(n.em,{children:`stylistic`}),` variations of a component, such as (e.g. `,(0,c.jsx)(n.code,{children:`<Card topStripe="medium">`}),`). `,(0,c.jsx)(n.code,{children:`variant`}),` should be used if there is primarily one variable used to manipulate the component style.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`size`}),` should be used for adjusting size attributes (e.g. `,(0,c.jsx)(n.code,{children:`<Button rank="secondary" size="sm">`}),` or `,(0,c.jsx)(n.code,{children:`<Button size="md"`}),`>). Use abbreviations for sizes (ex: `,(0,c.jsx)(n.code,{children:`xs`}),`, `,(0,c.jsx)(n.code,{children:`sm`}),`, `,(0,c.jsx)(n.code,{children:`md`}),`, `,(0,c.jsx)(n.code,{children:`lg`}),`, `,(0,c.jsx)(n.code,{children:`xl`}),`, `,(0,c.jsx)(n.code,{children:`2xl`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDisabled`}),` boolean should be used to control the interactivity of a component (e.g. `,(0,c.jsx)(n.code,{children:`<Button isDisabled />`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`text-labels-titles-and-children`,children:`Text, Labels, Titles, and Children`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Default to `,(0,c.jsx)(n.code,{children:`text`}),` for short strings of text, such as `,(0,c.jsx)(n.code,{children:`<BreadCrumbsItem text="My Courses">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`For headings, default to `,(0,c.jsx)(n.code,{children:`title`}),`, such as `,(0,c.jsx)(n.code,{children:`<Card.Header title="My Page Title" />`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Default to `,(0,c.jsx)(n.code,{children:`subTitle`}),` for text that serves as a descriptor, such as `,(0,c.jsx)(n.code,{children:`<Card.Header title="Project name" subTitle="Brief overview of the project..." />`})]}),`
`,(0,c.jsxs)(n.li,{children:[`For form-related components, use the semantic `,(0,c.jsx)(n.code,{children:`label`}),` or `,(0,c.jsx)(n.code,{children:`legend`}),` (e.g. `,(0,c.jsx)(n.code,{children:`<InputField label="first name" />`}),` and `,(0,c.jsx)(n.code,{children:`<Fieldset.Legend text="Grade level">`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children`}),` can be used for components that only have one main block of content being passed in (so there will be no confusion with other content props) and when it's safe for that content to be a `,(0,c.jsx)(n.code,{children:`ReactNode`}),`. (If it's important for the content to only come in the form of a string, restrict the type to `,(0,c.jsx)(n.code,{children:`string`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`instead of styling text using internal typography tokens, use `,(0,c.jsx)(n.code,{children:`Text`}),` and `,(0,c.jsx)(n.code,{children:`Heading`}),` components with the appropriate `,(0,c.jsx)(n.code,{children:`preset`}),` to match design.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tag-name`,children:`Tag name`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Use `,(0,c.jsx)(n.code,{children:`as`}),` if a component can be rendered as different html elements (e.g. `,(0,c.jsx)(n.code,{children:`h1`}),`, `,(0,c.jsx)(n.code,{children:`h2`}),`, `,(0,c.jsx)(n.code,{children:`h3`}),`, etc). For example `,(0,c.jsx)(n.code,{children:`<Heading as="h2">`}),` will render a `,(0,c.jsx)(n.code,{children:`Heading`}),` component with an `,(0,c.jsx)(n.code,{children:`h2`}),` applied to it.`]}),`
`]}),`
`,(0,c.jsxs)(n.h1,{id:`accessibility-`,children:[`Accessibility `,(0,c.jsx)(`a`,{name:`accessibility`})]}),`
`,(0,c.jsx)(n.h2,{id:`generating-ids`,children:`Generating IDs`}),`
`,(0,c.jsxs)(n.p,{children:[`ID attributes used for accessibility (e.g. associating `,(0,c.jsx)(n.code,{children:`<label>`}),` and `,(0,c.jsx)(n.code,{children:`<input>`}),` elements) should be unique and stable.`]}),`
`,(0,c.jsxs)(n.p,{children:[`We currently use the `,(0,c.jsxs)(n.a,{href:`https://reactjs.org/docs/hooks-reference.html#useid`,rel:`nofollow`,children:[(0,c.jsx)(n.code,{children:`useId`}),` hook`]}),` for ID generation (available in React >=18), which can also be used in custom components as well.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`const generatedId = useId();
`})}),`
`,(0,c.jsxs)(n.h2,{id:`tools-`,children:[`Tools `,(0,c.jsx)(`a`,{name:`accessibility-tools`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:`https://github.com/jsx-eslint/eslint-plugin-jsx-a11y`,rel:`nofollow`,children:`eslint-plugin-jsx-a11y`}),` evaluates static code for a11y issues. Currently this plugin is configured with the "recommended" settings, which generate linting errors for most rule violations. See `,(0,c.jsx)(n.a,{href:`https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#rule-strictness-in-different-modes`,rel:`nofollow`,children:`this chart`}),` for descriptions of each rule.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[`The plugin is currently unable to map a custom component to the HTML tag that it renders (i.e. the `,(0,c.jsx)(n.code,{children:`<Header>`}),` component renders content wrapped in `,(0,c.jsx)(n.code,{children:`<header>`}),` tags, but the plugin does not automatically apply header rules to a `,(0,c.jsx)(n.code,{children:`<Header>`}),` component.) `,(0,c.jsx)(n.a,{href:`https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/844`,rel:`nofollow`,children:`Check the status`}),` on work is being done on addressing this issue.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};