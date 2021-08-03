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
import {Heading} from '@chanzuckerberg/eds-components';
```

and then use them in your React components

```jsx
<Heading color="neutral" size="h2">
  Coffee!
</Heading>
```
