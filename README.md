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

The EDS Tailwind theme provides many EDS [tokens][tokens] and some screen sizes. Import the tailwind config into the app's tailwind config and supply the [content](https://tailwindcss.com/docs/content-configuration) property for use:


#### Applying all of the EDS tokens to Tailwind

To take all of what EDS provides (base colors, and extended utility classes for named tokens), use the following:

```js
const edsConfig = require('@chanzuckerberg/eds/tailwind.config');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: edsConfig.theme,
};
```

This will replace the default color tokens that come [with Tailwind](https://tailwindcss.com/docs/customizing-colors) with those defined by EDS. **NOTE**: this might cause regressions in your project, if you have been using the default colors from tailwind.

#### Applying the EDS tailwind extensions piecemeal

If you want a gentler transition to using EDS tailwind config, you can instead import **just** the extended values:


```js
const edsConfig = require('@chanzuckerberg/eds/tailwind.config');

module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      ...edsConfig.theme.extend
    }
  }
};
```

This will add in the utility classes for properties like background color `bg-*`, border `border-*`, and text color `text-*`. These match the styles and variables defined in Figma designs. 

You can spread each of the sub-objects in `theme` as desired, e.g., `fontSize`, `fontWeight`, etc.

Refer to the [tokens tailwind section][tokens] for usage guidelines.

[tokens]: https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-guidelines-tokens--docs

### CSS Variable Setup

EDS also provides the tokens used in the internal styles, to use in any custom component recipes and designs. If using VSCode, you can set up the IDE to expose the token values and perform autocomplete:

1. Install the [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) VSCode extension
2. Add the following setting to your user or workspace settings file

```jsonc
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

and then use them in your React components:

```jsx
<Heading variant="neutral-strong" size="h2">
  Coffee!
</Heading>
```

EDS provides a [suite](https://chanzuckerberg.github.io/edu-design-system/) of components for use, and documentation for available props and overrides.

## Development

This project is under **active development**. See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for more information on how to contribute to EDS. Also, read our [guidelines](https://chanzuckerberg.github.io/edu-design-system/?path=/story/documentation-guidelines-code-guidelines--page) for additional information.

Instead, if you want to report an issue, you can [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).

## FAQ, More Information, and Support

Please review our Education Design System Site (SSO Required): [/Paper](https://eds.czi.design/0843bc428/p/581284-education-design-system)
