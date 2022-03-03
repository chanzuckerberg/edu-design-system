# Education Design System

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

Education Design System (EDS) is a repository of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components used to build React-based products for [Chan Zuckerberg Initiative](https://chanzuckerberg.com/education/).

## Setup

First install the package.

```bash
# via npm
npm install --save @chanzuckerberg/eds

# or, if using Yarn
yarn add @chanzuckerberg/eds
```

We currently use Arimo as our base font. This package does not export it, so you will need to import this separately. We recommend importing from Google Fonts into a top-level CSS file:

```css
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap');
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
import { Heading } from '@chanzuckerberg/eds';
```

and then use them in your React components

```jsx
<Heading variant="neutral" size="h2">
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
import type { AbstractComponent } from 'react';
declare var x: AbstractComponent<Props, HTMLElement>;
```

- Preserve exact-typed objects when possible. If you must make them inexact, add an explicit `...` at the end of the object.

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

### [Icons](./docs/ICONS.md)
### [Publishing](./docs/PUBLISHING.md)

## Working with the codebase

Please refer to the following documentation to learn how to work with this codebase:

- [Code guidelines](./docs/CODE_GUIDELINES.md)
- [Tokens](./docs/TOKENS.md)
- [Components](./docs/COMPONENTS.md)
- [Typography](./docs/TYPOGRAPHY.md)
- [Layout](./docs/LAYOUT.md)
- [Icons](./docs/ICONS.md)

## Workflow

- [Contribution guidelines](./docs/CONTRIBUTING.md) - Please refer to these guidelines to learn how to contribute to the library.
- [Release guidelines](.docs/PUBLISHING.md) - Please refer to these guidelines for instructions on how to publish a new version of the library.

## Support

For questions, feature requests, bugs, and more, please refer to the support guidelines and join the support channel [TODO: link to support channel and docs]

## Project Status

This project is under **active development**. If you would like to contribute, check out the [contribution guidelines](./docs/CONTRIBUTING.md) or [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).
