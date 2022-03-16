# edu-design-system

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

The [Education Initiative](https://chanzuckerberg.com/education/)'s design system.

## Setup

Fist install the package.

```bash
# via npm
npm install --save @chanzuckerberg/eds

# or, if using Yarn
yarn add @chanzuckerberg/eds
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
import { Heading } from "@chanzuckerberg/eds";
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
yarn generateFlowTypes <Component>
```

to get automatically generated flowtypes.

We use a combination of `flowgen` and common React mutations to get the best automatic types possible, but manual fixing may still be required. Thus, we recommend maintaining a `flow-typed` file with libdefs.

```js
// declare a module for each component
declare module '@chanzuckerberg/eds/lib/<Component>' {
  ...
}

// re-declare each component from a root-level index
declare module '@chanzuckerberg/eds' {
  declare export var <Component>: $Exports<"@chanzuckerberg/eds/lib/<Component>">;
}
```

When translating your generated flow types to this `flow-typed` file, you will need to:

- Update React type imports to follow `import type { ... } from "react"`
- Update internal type imports to be from `"@chanzuckerberg/eds/lib/..."`
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

EDS is configured for Tailwind utility class use in Storybook only. Please configure downstream Tailwind config purge to include app files if necessary.

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

### Potential conflicts with other styling libraries (e.g. Bootstrap)

If you're also using styles from a separate library, conflicts may arise rarely between utility class names. Here are some conflicts we're aware of for **Bootstrap** specifically:

- Most annoying, `.hidden`
  - Both Tailwind and Bootstrap have the same styling for `.hidden` but Bootstrap applies the `!important ` property, which can be annoying when trying to utilize Tailwind breakpoints, e.g.:
  ```html
  <div class="hidden md:block lg:inline"></div>
  ```
  - Where the expectation is `display: none ` for breakpoints smaller than 768px, `display: block `for 768px - 1023px, and `display: inline ` for >= 1024px. However since Bootstrap applies the `!important` property, all screen sizes show `display: none`.
  - This can be circumvented with the `@apply` directive and/or using custom CSS with regular media queries to scope styling into a different class name, e.g.:.
  ```jsx
  <div className="responsive-display">
  ```
  ```css
  .responsive-display {
    display: none;
    @apply md:block lg:inline;
    /* or use traditional @media queries */
  }
  ```
- `.invisible` and `.text-` alignment
  - These classes have the same styling in both Tailwind and Bootstrap, and therefore can be used without issues. Tailwind responsive states (such as breakpoints, hover, etc.) will have higher specificity so no issues will be caused there.
- Other unfound conflicts
  - If the conflict is due to Bootstrap using `!important`, follow similar strategy above as `.hidden`.
- Bootstrap [styling](https://github.com/twbs/bootstrap-sass/tree/master/assets/stylesheets/bootstrap) and mentioned conflicts in [\_utilities.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_utilities.scss#L46) and [\_type.scss](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_type.scss#L90) for reference

## Development

### Requirements

- Node - if using [nodenv](https://github.com/nodenv/nodenv), you can install the right version with `nodenv install`
- Yarn - install through either [npm](https://docs.npmjs.com/) (`npm install -g yarn`) or [homebrew](https://brew.sh/) (`brew install yarn`)

### Helpful commands

| Description                           | Command                 |
| ------------------------------------- | ----------------------- |
| Install dependencies                  | `yarn install`          |
| Run linter                            | `yarn lint`             |
| Run linter and fix all fixable issues | `yarn lint:fix`         |
| Build package                         | `yarn build`            |
| Run the component generator           | `yarn create-component` |

### Publishing

1. Confirm that all checks are green on CI.
2. Run `git checkout main`
3. Run

```sh
yarn create-releases

# or, if there are breaking changes
yarn create-releases:breaking
```

to bump the package versions, create new git tags, and create git commits. The packages are not published, yet.

4. Confirm that the git tags, git commits, and changelog updates look correct.
5. Run `yarn publish-releases` to publish the packages to the NPM registry.
6. Push commits and tags to the git remote with `git push origin --tags && git push origin main`

**Before the first time you publish**, make sure to:

- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing

### Note on versioning

We are currently using a _modified_ form of semver where:

- Breaking changes update the _minor_ version
- All other changes (new features, fixes, etc.) update the _patch_ version

Once we publish major version 1, we will begin following conventional semver.

## Project Status

This project is under **active development**. If you would like to contribute, check out the [contribution guidelines](https://github.com/chanzuckerberg/edu-design-system/blob/main/CONTRIBUTING.md) or [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).
