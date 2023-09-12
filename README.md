# Education Design System

![Test CI](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/test.yml/badge.svg) [![Release](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/release.yml/badge.svg)](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/release.yml) [![codecov](https://codecov.io/gh/chanzuckerberg/edu-design-system/branch/main/graph/badge.svg)](https://codecov.io/gh/chanzuckerberg/edu-design-system)

Education Design System (EDS) is a repository of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components used to build React-based products for [Chan Zuckerberg Initiative](https://chanzuckerberg.com/education/).

## Installation

First install the package.

```bash
# via npm
npm install --save @chanzuckerberg/eds

# or, if using Yarn
yarn add @chanzuckerberg/eds
```

## App Setup

Import the EDS stylesheet and tokens somewhere in your app root, e.g. an `init.ts` or `app.ts` file:

```js
import '@chanzuckerberg/eds/index.css';
// optionally import EDS font faces
// import '@chanzuckerberg/eds/fonts.css';
```

We also surface an `--eds-font-size-base` property to set your base `rem` font size, eg:

```css
html {
  font-size: var(--eds-font-size-base); /* Resets the default pixel-to-rem ratio */
}
```

### Tailwind Setup

The EDS Tailwind theme provides EDS color [tokens][tokens] and screens. Import the tailwind config into the app's tailwind config and supply the [content](https://tailwindcss.com/docs/content-configuration) property for use:

```js
const edsConfig.theme = require('@chanzuckerberg/eds/tailwind.config');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: edsConfig.theme,
};
```

Refer to the [tokens tailwind section][tokens] for usage guidelines.

[tokens]: https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-guidelines-tokens--docs

### CSS Variable Setup

EDS also provides the tokens used in the internal styles, to use in any custom component recipes and designs. If using VSCode, you can set up the IDE to expose the token values and perform autocomplete:

1. Install the [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) VSCode extension
2. Add the following setting to your user or workspace settings file

```json
{
  // ...rest of the settings here
  "cssvar.files": [
    "node_modules/@chanzuckerberg/eds/lib/index.css"
  ]
}
```
3. Restart VSCode


### Theming Setup

Refer to the "EDS Token and Theme Tools" in [the tokens documentation](https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-theming--docs) to learn about the optional tooling setup.


## Usage

Import any of the components from the top-level package:

```js
// Import components by name at the top of your file
import { Heading } from '@chanzuckerberg/eds';
```

and then use them in your React components

```jsx
<Heading variant="neutral-strong" size="h2">
  Coffee!
</Heading>
```

EDS provides a [sizeable suite](https://chanzuckerberg.github.io/edu-design-system/) of components for use, and documentation for available props and overrides.

## Development

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for more information on how to contribute to EDS. Also, read our [guidelines](https://chanzuckerberg.github.io/edu-design-system/?path=/story/documentation-guidelines-code-guidelines--page) for additional information.

### Requirements

```bash
# Setup your node environment using nodenv (https://github.com/nodenv/nodenv)
$ nodenv install
# Setup yarn using npm or homebrew (https://brew.sh)
$ brew install yarn # or npm install -g yarn
```

### Helpful commands

| Description                           | Command                 |
| ------------------------------------- | ----------------------- |
| Install dependencies                  | `yarn install`          |
| Run linter                            | `yarn lint`             |
| Run linter and fix all fixable issues | `yarn lint:fix`         |
| Build package                         | `yarn build`            |
| Run the component generator           | `yarn create-component` |

## Project Status

This project is under **active development**. If you would like to contribute, check out the [contribution guidelines](./docs/CONTRIBUTING.md) or [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).

## FAQ, More Information, and Support

Please review our Education Design System Site (SSO Required): [/Paper](https://eds.czi.design/0843bc428/p/581284-education-design-system)
