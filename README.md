# Education Design System

![Test CI](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/test.yml/badge.svg) [![Release](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/release.yml/badge.svg)](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/release.yml) [![codecov](https://codecov.io/gh/chanzuckerberg/edu-design-system/branch/main/graph/badge.svg)](https://codecov.io/gh/chanzuckerberg/edu-design-system)

Education Design System (EDS) is a repository of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components used to build React-based products for [Chan Zuckerberg Initiative](https://chanzuckerberg.com/education/).

## Installation

First, install the package.

```bash
# using npm
npm install --save @chanzuckerberg/eds

# or using Yarn
yarn add @chanzuckerberg/eds
```

## Setting up EDS in your project

Import the EDS stylesheets somewhere in your app root, e.g. an `init.ts` or `app.ts` file:

```js
import '@chanzuckerberg/eds/index.css'; // Includes relevant styles and tokens for EDS
import '@chanzuckerberg/eds/fonts.css'; // Includes font files if using the built in theme fonts
```

Also, include this in your base / reset styles to allow configuation of the pixel-to-rem ratio:

```css
html {
  font-size: var(--eds-font-size-base); /* Sets the default pixel-to-rem ratio */
}
```

### Theming Setup

For more information and configuration options, read the [Theming Overview][theming-docs].

## EDS Component Usage

Import any of the components from the top-level package:

```jsx
// Import components by name at the top of your file
import { Heading } from '@chanzuckerberg/eds';

// ...and then use them in your React components:

<Heading preset="headline-lg">
  Coffee!
</Heading>
```

EDS provides a [suite](https://chanzuckerberg.github.io/edu-design-system/) of components for use, and documentation for available props and overrides.

## Development

This project is under **active development**. See [CONTRIBUTING.md][contributing] for more information on how to contribute to the Design System and IDE (VSCode) setup. Also, read our [guidelines][guidelines] for additional information on how we build EDS components.

Instead, if you want to report an issue, you can [open an issue][gh-issue].

This project is governed under the [Contributor Covenant][contribution-covenant] code of conduct.

[contributing]: ./docs/CONTRIBUTING.md
[guidelines]: https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-guidelines-code-guidelines--docs
[gh-issue]: https://github.com/chanzuckerberg/edu-design-system/issues
[contribution-covenant]: https://www.contributor-covenant.org/

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).

## FAQ, More Information, and Support

Please review our Education Design System Site (SSO Required) [here](https://eds.czi.design/0843bc428/p/581284-education-design-system).

[theming-docs]: https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-theming--docs