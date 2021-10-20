# eds-components

React component library of the design system.

## Setup

Fist install the package.

```bash
# via npm
npm install --save @chanzuckerberg/eds-components

# or, if using Yarn
yarn add @chanzuckerberg/eds-components
```

We currently use Arimo as our base font. This package does not export it, so you will need to import this separately. We recommend importing from Google Fonts into a top-level CSS file:

```css
@import url("https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap");
```

and setting up base font settings:

```css
html {
  font-size: 16px;

  /* or if using Tailwind:
  @apply text-base */
}

body {
  font-family: Arimo, sans-serif;

  /* or if using Tailwind:
  @apply font-arimo */
}
```

## Usage

Import any of the components from this package

```js
import { Heading } from "@chanzuckerberg/eds-components";
```

and then use them in your React components

```jsx
<Heading color="neutral" size="h2">
  Coffee!
</Heading>
```

## Flow types

For any component, run

```bash
yarn generateFlowtypes <Component>
```

to get automatically generated flowtypes.

We use a combination of `flowgen` and common React mutations to get the best automatic types possible, but manual fixing may still be required. Thus, we recommend maintaining a `flow-typed` file with libdefs.

```js
// declare a module for each component
declare module '@chanzuckerberg/eds-components/lib/<Component>' {
  ...
}

// re-declare each component from a root-level index
declare module '@chanzuckerberg/eds-components' {
  declare export var <Component>: $Exports<"@chanzuckerberg/eds-components/lib/<Component>">;
}
```

When translating your generated flow types to this `flow-typed` file, you will need to:

- Update React type imports to follow `import type { ... } from "react"`
- Update internal type imports to be from `"@chanzuckerberg/eds-components/lib/..."`
- Update ForwardRef components. For example:

```js
declare var x: React.ForwardRefExoticComponent<{
  ...Props,
  ...React.RefAttributes<HTMLElement>,
}>;
```

should become:

```js
import type { AbstractComponent } from "react";
declare var x: AbstractComponent<Props, HTMLElement>;
```

- Preserve exact-typed objects when possible. If you must make them inexact, add an explicit `...` at the end of the object.

## Tailwind Utility Classes
Tailwind utility classes can be used with either `@apply` in CSS files such as 
```css
div {
  @apply rounded border-2;
  /* border-radius: 0.25 rem;
     border-width: 2px; */
}
```
or used directly as class names such as
```jsx
<div className="rounded border-2">
```
Use the [docs](https://tailwindcss.com/docs) to search for appropriate classes.

**Conflicts may arise rarely with Bootstrap classes, some that we know of:**
  - Most annoying, `.hidden`
    - Both Tailwind and Bootstrap have the same styling for `.hidden` but Bootstrap applies the  `!important ` property, which can be annoying when trying to utilize Tailwind breakpoints, e.g.:
    ```html
    <div class="hidden md:block lg:inline">
    ```
    - Where the expectation is `display: none ` for breakpoints smaller than 768px, `display: block `for 768px - 1023px, and `display: inline ` for >= 1024px. However since Bootstrap applies the `!important` property, all screen sizes show `display: none`.
    - This can be circumvented with the `@apply` directive with `!important`, such as `@apply hidden md:block lg:inline !important` or using custom CSS with regular media queries.
  - `.invisible` and `.text-` alignment
    - These classes have the same styling in both Tailwind and Bootstrap, and therefore can be used without issues. Tailwind responsive states (such as breakpoints, hover, etc.) will have higher specificity so no issues will be caused there.
  - Other unfound conflicts
    - Without Bootstrap using `!important`, should styling will likely be the same, so can likely be used without issues. If issues do arise even without `!important`, the options are similar as above, use `@apply` to scope styling into higher specificity, or use custom styling
    - If the conflict is due to Bootstrap using `!important`, follow similar strategy above as `.hidden`
  - Bootstrap [styling](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap) and mentioned conflicts in [_utilities.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_utilities.scss#L46) and [_type.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_type.scss#L90) for reference