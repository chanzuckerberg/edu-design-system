# Design Tokens

EDS is a [themeable design system](https://bradfrost.com/blog/post/creating-themeable-design-systems/) in order to support different brands, design language generations, and product families. [Design tokens](https://css-tricks.com/what-are-design-tokens/) are a core part of building a EDS theme. Design tokens define low-level design values and apply those values to UI applications in order to manage the brand's look and feel separately from structural component styles.

- [Style Dictionary](#style-dictionary)
- [Design Token Architecture](#design-token-architecture)
- [Tier 1 Tokens](#tier-1-tokens)
  - [Animation](#tier-1-animation)
  - [Borders](#tier-1-borders)
  - [Breakpoints](#tier-1-breakpoints)
  - [Colors](#tier-1-colors)
  - [Layout](#tier-1-layout)
  - [Shadows](#tier-1-shadows)
  - [Size](#tier-1-size)
  - [Typography](#tier-1-typography)
  - [Z-index](#tier-1-z-index)
- [Tier 2 Usage Tokens](#tier-2-usage-tokens)
  - [Borders](#tier-2-borders)
  - [Colors](#tier-2-colors)
  - [Forms](#tier-2-forms)
  - [Shadows](#tier-2-shadows)
- [Tier 3 Component Variables](#tier-3-component-variables)
- [Tailwind Class Tokens](#tailwind-class-tokens)

## Style Dictionary

EDS uses [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to manage design tokens. Style Dictionary transforms design token source files into various formats, including CSS variables, Sass variables, JSON, and native app-specific formats.

Tokens are defined as a collection of JSON files, which then get converted by Style Dictionary into the appropriate format — namely CSS custom properties — to be consumed by EDS components.

## Design token architecture

Design tokens live at `src/design-tokens`, and follows this directory structure:

```css
design-tokens
 |--tier-1-definitions
 |--tier-2-usage
```

- `tier-1-definitions` define the brand’s core design values, serving as the raw materials for the UI’s visual design.
- `tier-2-usage` house the semantic design values, which take Tier 1 token values and map them to specific UI applications.

All tokens are prefixed with `eds-` to serve as a namespace and identifier for working with the system in production applications.

EDS's token architecture and nomenclature is as follows:

## Tier 1 tokens

Tier 1 tokens define the brand’s design values. They can be thought of as a brand style guide converted into variables. Tier1 token values should not imply any UI usage, and should not be used directly by components. Instead, Tier 1 values should be mapped to Tier 2 values.

### Animation <a name="tier-1-animation"></a>

- `anim-fade-` for fading between frames (e.g. button background color changes, banner messages fading out, etc). Typically default to "quick" and "long" as values.
- `anim-move-` for defining movement durations (e.g. a modal floating up from the bottom of the screen, etc)
- `anim-ease-` for animation easing properties (`ease-in`, `ease-out`, cubic bezier values)

### Borders <a name="tier-1-borders"></a>

- `border-width-` for border widths. Typically default to abbreviated t-shirt sizes (e.g. `sm`, `md`, `lg`, `xl`) in accordance with the [EDS code guidelines](./CODE_GUIDELINES.md).
- `border-radius-` for border radius values. Typically default to t-shirt sizes, although sometimes "pill" or "round" might also be present

### Breakpoints <a name="tier-1-breakpoints"></a>

- `bp-` for breakpoint. Typically default to t-shirt sizes (e.g. `bp-sm`, `bp-md`, etc). EDS[deliberately avoids](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/) using "mobile" and "tablet" and "desktop" as values, despite it being a common nomenclature. NOTE: These are currently defined directly as SCSS variables due to lack of support at the moment for CSS custom property media queries.

### Colors <a name="tier-1-colors"></a>

- `color-brand-` for brand-specific values (e.g. `color-brand-starbucks-green` or `color-brand-coca-cola-red`)
- `color-neutral-` for black, white, and grayscale (or similar) values (e.g. `color-neutral-white`, or `color-neutral-50`). EDS defaults to the [percentage gray](https://medium.com/eightshapes-llc/color-in-design-systems-a1c80f65fa3) instead of using values like "gray-light" and "gray-dark". `color-neutral-90` is closer to black and `color-neutral-02` is a very light gray.
- `color-transparent-` for semi-transparent values often used for backdrops and overlays (e.g. for a modal overlay)
- `color-other-` for any other useful colors, especially for utility colors like info, warning, error, success, and info. Note that the semantic value for these other colors are assigned at the Tier 2 token level.

### Layout <a name="tier-1-layout"></a>

- `l-max-width` caps the width of a layout container so it doesn't span the full width of the viewport.
- `l-linelength-width` for containing passages of text to a comfortable character length

### Shadows <a name="tier-1-shadows"></a>

- `box-shadow-` for box shadow definitions. Default to t-shirt sizes (e.g. `box-shadow-lg`).

### Size <a name="tier-1-size"></a>

- `size-base-unit-` describes the base unit which most size-based units (`margin`, `padding`, `width`, `height`, etc) will use. This should be set to `0.5rem` (which is equivalent to `8px`) in order to adhere to an [8-point grid](https://medium.com/built-to-adapt/intro-to-the-8-point-grid-system-d2573cde8632).

### Typography <a name="tier-1-typography"></a>

- `font-family-` for font family definitions. EDS defaults to "primary" "secondary" and "tertiary" for font-family definitions.
- `font-size-` for font size definitions. Default to t-shirt sizes (e.g. `font-size-sm`, `font-size-md`, `font-size-lg`, and so on).
- `line-height-` for line height definitions. These are unitless relative values. Default to t-shirt sizes (e.g. `line-height-lg: 1.5` )

### Z-index <a name="tier-1-z-index"></a>

- `z-index-` controls an item’s position in the stacking order.

## Tier 2 usage tokens

Tier 2 tokens define a semantic UI layer. Tier 2 values take Tier 1 token values and map them to specific UI applications, which are in then used by individual component styles.

All Tier 2 tokens begin with the prefix `eds-theme-`. For specific documentation around specific theme tokens, please refer to the token page in Storybook, which articulate the role of each theme tokens.

### Borders <a name="tier-2-borders"></a>

- `border-width` defines the border width for the thickness. Typically set to `border-width-sm` (which is typically set to `1px`).
- `border-radius` defines the border radius value that gets applied by default to buttons, form inputs, and bordered components like cards.

### Colors <a name="tier-2-colors"></a>

Tier 2 color tokens follow a "foreground/background/border" convention in order to assure colors are properly used and that adequate color contrast is always achieved. Here's a breakdown of this convention:

- `foreground` for text and icon fills (only applied to `color` and `fill` properties)
- `background` for background values (only applied to `background` properties)
- `border` for border values (only applied to `border-color` and `box-shadow` if used to mimic a border)

In addition to the "foreground/background/border" convention, an `inverted` convention is used to manage colors for components rendered on a dark background.

The structure for Tier 2 color token values is as follows:

```css
--eds-theme-[property]-[semantic definition or element]-[foreground|background|border]-[optional inverted]
```

This language can take some getting used to, so it may be best to break down an example:

```css
--eds-theme-color-text-neutral-default-inverse
```

- `eds-` means the token value is coming from the design system
- `theme-` means this is a Tier 2 token value
- `color-` describes the token category
- `body-` is targeting the specific UI application
- `foreground-` is targeting the text and icon fill color
- `inverted` is targeting the body text _when rendered on a dark background_.

Putting it all together, this token value says "Target the body text color when rendered on a dark background".

#### Body colors

- `body-foreground` defines body text color
- `body-background` defines body background color
- `body-foreground-inverted` defines body text color when rendered on a dark background
- `body-background-inverted` defines body background color that is a dark value

#### Brand colors

Brand Tier 2 colors define the most branded colors of the UI.

- `primary-foreground` defines a branded text color
- `primary-foreground-hover` defines a branded text hover color
- `primary-background` defines a branded background color
- `primary-background-hover` defines a branded background hover color
- `primary-border` defines a branded border
- `primary-border-hover` defines a branded hover border
- `primary-foreground-inverted` defines a branded text color rendered on a dark background

Additional branded values ("secondary", "tertiary", "accent", "supports", etc) can be added to accomplish desired UI results.

#### Disabled colors

- `disabled-foreground` defines a disabled text color
- `disabled-background` defines a disabled background color
- `disabled-border` defines a disabled border

#### Focus colors

- `focus-ring` defines the focus ring color used for component `:focus` state

#### Link colors

- `link-foreground` defines text link color. By default, this is mapped to `eds-theme-color-primary-foreground`.
- `link-foreground-hover` defines text link hover color

#### Neutral colors

- `neutral-subtle` defines a subtle border
- `neutral-medium` defines a medium border
- `neutral-bold` defines a pronounced border

#### Text highlight colors

Defines text highlight values

### Forms <a name="tier-2-forms"></a>

Defines the border width, radius, and color properties for form controls. These values are all mapped to other Tier 2 values and are considered optional in case remapping is required.

### Shadows <a name="tier-2-shadows"></a>

- `box-shadow` defines the shadow value that gets applied by default to buttons and other "elevated" components like cards.

## Tier 3 component variables

Tier 3 component variables represent each component's specific values.

## Tailwind Class Tokens

If the EDS tailwind config theme is being used, Tier 2 and tier 3 color tokens are available as a part of tailwind utility classes, and can be used to apply to specific attributes to a component. Background(prefix: bg-), border(prefix: border-), and text(prefix: text-) colors will only be available for themselves specifically. e.g.:

```jsx
<div
  className="
    bg-brand-grape-100 // will NOT work since tier 1 colors are not available
    bg-button-icon-brand // will work since button colors are available across all color utility classes
    bg-link-neutral // will NOT work since background utility classes don't have border colors
    border-link-neutral // will work since border colors are available for border color utility classes

    bg-brand-primary-strong
    border-brand-primary-strong // will reflect respective color utility tokens
      (background-brand-primary-strong and border-brand-primary-strong)
  "
>
```
