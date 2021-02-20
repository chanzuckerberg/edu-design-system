# `@chanzuckerberg/eds-components`

`czedi-kit-components` contains reusable components of the Design System.

## Setup

We currently use Arimo as our base font. This package does not export it, so you will need to import this separately. We recommend importing from Google Fonts into a top-level CSS file:

```
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

```
const czediKitComponents = require('@chanzuckerberg/eds-components');

// TODO: DEMONSTRATE API
```
