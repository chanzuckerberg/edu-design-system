# Education Design System

test line remove

![Test CI](https://github.com/chanzuckerberg/edu-design-system/actions/workflows/test.yml/badge.svg)

Education Design System (EDS) is a repository of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components used to build React-based products for [Chan Zuckerberg Initiative](https://chanzuckerberg.com/education/).

## Setup

First install the package.

```bash
# via npm
npm install --save @chanzuckerberg/eds

# or, if using Yarn
yarn add @chanzuckerberg/eds
```

Import the CSS tokens somewhere in your app, e.g. an `init.ts` or `app.ts` file:

```js
import '@chanzuckerberg/eds/lib/tokens/css/variables.css';
// optionally import EDS font faces
// import '@chanzuckerberg/eds/lib/tokens/fonts.css';
```

EDS components are designed for the Graphik font, but you may use other fonts by re-defining the `--eds-font-family-primary` CSS property. We also surface an `--eds-font-size-base` property to set your base `rem` font size, eg:

```css
html {
  font-size: var(--eds-font-size-base);
}
```

## Usage

Import any of the components from this package

```js
import { Heading } from '@chanzuckerberg/eds';
```

and then use them in your React components

```jsx
<Heading variant="neutral-strong" size="h2">
  Coffee!
</Heading>
```

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
- [Release guidelines](./docs/PUBLISHING.md) - Please refer to these guidelines for instructions on how to publish a new version of the library.

## Support

For questions, feature requests, bugs, and more,feel free to reach out in [#help-edu-design-system](https://chanzuckerbergteam.slack.com/archives/CTFV79JH4) or [office hours](https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1zZguiMQHQLANjfUF-LjmPkbZ29I7ZXfl8TRDAhqDL0o/edit&sa=D&source=calendar&ust=1617083817378000&usg=AOvVaw2MJp29FMPv2AD1WJFX5Q2x) if you have additional questions (_note: these resources can only be accessed by CZI employees_).

## Project Status

This project is under **active development**. If you would like to contribute, check out the [contribution guidelines](./docs/CONTRIBUTING.md) or [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).
