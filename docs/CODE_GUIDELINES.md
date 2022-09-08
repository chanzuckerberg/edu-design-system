# Code Guidelines

EDS follows these principles and conventions for HTML, CSS, and JavaScript/TypeScript/React:

- [HTML](#html)
- [CSS](#css)
  - [CSS design principles](#css-design-principles)
  - [CSS tools](#css-tools)
  - [CSS conventions](#css-conventions)
  - [Utility classes](#utility-classes)
  - [Theming conventions](#theming-conventions)
  - [Design tokens](#design-tokens)
- [JavaScript/TypeScript](#js)
  - [JavaScript principles](#js-principles)
  - [JavaScript tools](#js-tools)
  - [TypeScript/React conventions](#ts-conventions)
  - [Component rules and considerations](#component-rules)
  - [Component API naming conventions](#api-naming)
- [Accessibility](#accessibility)
  - [Tools](#accessibility-tools)

# HTML principles and conventions <a name="html"></a>

- **Use semantic markup.** That means using the `<button>` tag rather than `<div onClick={toggle}>` when a button is required, an `<a>` tag when a link is required, and so on.
- **Clarity over brevity** Developers should be able to understand what's going on with markup at a glance. Avoid cryptic abbreviations and nicknames, add proper indenting & spacing, and use clear comments.
- **Accessibility.** Markup should be accessible and [follow best practices](https://www.a11yproject.com/checklist/). Use (but [don't abuse](https://www.deque.com/blog/top-5-rules-of-aria/)) <abbr title="Accessible Rich Internet Applications">ARIA</abbr> attributes. See [Accessibility](#accessibility).
- Native HTML elements (e.g. `<input>`, `<select>`) should be preferred over custom elements whenever possible. Native elements provide a slew of functionality and accessibility best practices out of the box.

---

# CSS

## CSS design principles <a name="css-design-principles"></a>

- **Modular** - Component styles are fully modular in order to keep things tightly scoped and to avoid unintended style bleeding.
- **Themeable** - Component styles support multiple themes.
- **Clarity over brevity** CSS class naming conventions prioritize clarity, legibility, and reslience over succinctness.
- **Portable** - The CSS architecture uses CSS classes to ensure CSS can be ported to other frameworks and web technologies as needed.
- **Honor the CSS language** - While some abstractions and tools are in place to improve developer ergnonomics, CSS should be written with the grain of the CSS language as much as possible.
- **Limit chaining and multiple selectors** Chaining and descendant selectors should be avoided wherever possible in order to keep CSS as DOM-independent and modular as possible.

## CSS Tools <a name="css-tools"></a>

- [CSS Modules](https://github.com/css-modules/css-modules)
- [PostCSS](https://postcss.org/)
  - [PostCSS Mixins](https://github.com/postcss/postcss-mixins)
  - [PostCSS Nested](https://github.com/postcss/postcss-nested)
  - [PostCSS Simple Vars](https://github.com/postcss/postcss-simple-vars)

## CSS conventions <a name="css-conventions"></a>

### BEM syntax

EDS follows [BEM](http://getbem.com/introduction/) syntax for component classnames. BEM stands for “Block Element Modifier”. Here's a breakdown of what that means:

- **Block** is the primary component block (e.g. `.button`)
- **Element** is a child of the primary block (e.g. `.button__text`)
- **Modifier** is a variation of a component style (e.g. `.button--secondary`)

BEM conventions result in an explicit (and yes, sometimes verbose) class string that allows developers to quickly deduce what role any selector plays.

Let's take a look at the following example:

`.button--full-width`

- `button` is the block name (“Block” being the “B” in BEM)
- `--full-width` is a modifier, indicating a stylistic variation of the block (“Modifier” being the “M” in BEM)

Here's another example:

`.grid__item`

- `grid` is the block name
- `__item` is an element, indicating that this is a child of the block (“Element” being the “E” in BEM)

### The Dos and Don'ts of BEM

#### Do's

- Always declare the block class for a component (e.g. `card`, `button`, etc.). Modifier classes on their own (e.g. `card--inverted` or `button--primary`) are not permitted.
- Each element within a component _must_ include the appropriate class applied in accordance with BEM standards (e.g. `accordion__panel` or `text-field__label`). Unclassed elements (e.g. stray `<p>` or `<span>` tags) are not permitted (with the exception of the `Text` component which is explicitly designed to handle uncontrolled markup). While verbose, this approach yields a consistent codebase, allows for tight styling control, better future proofs of the design system's codebase.

#### Don'ts

- **Don't** use BEM "grandchildren", meaning using the `__` part of BEM more than once (e.g. `breadcrumb__item__icon`). For a link inside `primary-nav__item`, write it as `primary-nav__link` instead of `primary-nav__item__link`.
- **Don't** use a modifier without a block. For example, don't use `button--primary` modifier without the `button` block class. Use `className="button button--primary"`, **not** `className="button--primary"`.

### CSS Nesting

EDS uses [PostCSS Nested](https://github.com/postcss/postcss-nested) to provide some developer ergonomics. As a general principle, nesting should be used sparingly and is only used in the following situations:

- Media queries
- States and pseudo-selectors
- Parent selectors

#### Media queries

```scss
.primary-nav {
  /**
    * 1) On larger displays, convert to a horizontal list
    */
  @media all and (min-width: $eds-bp-md) {
    display: flex;
  }
}
```

#### States and pseudo-selectors

```scss
.button--primary {
  background: var(--eds-theme-color-background-brand-primary-strong);

  &:hover,
  &:focus-visible {
    background: var(--eds-theme-color-background-brand-primary-strong-hover);
  }

  &:after {
    content: '';
    display: block;
  }
}
```

#### Parent selectors

Use [parent selectors](https://sass-lang.com/documentation/style-rules/parent-selector) to target a selector when it appears inside a specific parent element. Use parent selectors instead of child selectors in order to co-locate all styles around a specific selector, which improves maintainability and findability.

Use the following conventions:

```scss
.button {
  /* button code */
}

.button--secondary {
  /* button--secondary styles */
}

.button--sm {
  /* button--sm styles */
}

.button__text {
  /* button__text styles */

  .button--secondary & {
    /* button__text within button--secondary styles */
  }

  .button--sm & {
    /* button__text within button--sm styles */
  }
}
```

### Disable animations for prefers reduced motion setting

There are some disabilities (ex: vestibular disorders) that cause users to become nauseous when they see a lot of movement happening on screen. Luckily, there is an operating system accessibility setting called "prefers reduced motion" that we can detect with CSS using a media query. Just to be safe, we disable all animations for users who have this setting turned on.

Examples:

```scss
.dropdown-button__icon {
  transition: transform var(--eds-anim-move-medium) var(--eds-anim-ease);

  @media (prefers-reduced-motion) {
    transition: none;
  }
}

.loading-indicator__icon {
  animation: rotateIcon 2s linear infinite;

  @media screen and (prefers-reduced-motion) {
    animation: none;
  }
}
```

### CSS Comments

EDS uses the following commenting conventions, which take much inspiration from [these commenting guidelines](https://cssguidelin.es/#commenting).

For example:

```css
/*------------------------------------*\
    # BUTTON GROUP
\*------------------------------------*/

/**
 * ButtonGroup
 */
.button-group {
}

/**
 * Full width button
 * 1) Button should take up the full width of the container it lives within
 * 2) Pushes the button away from the other content because it lives in a flexbox container
 * 3) I know this a weird magic number, but [succinct-but-clear explanation]
 */
.button--full-width {
  background: red;
  margin-right: auto; /* 2 */
  width: 100%; /* 1 */
  height: 37px; /* 3 */
}
```

Not all CSS declarations warrant a comment, but non-obvious declarations (like context-specific styles, magic numbers, or styles dependent on other selector styles) should be accompanied by a comment.

### Other CSS Rules

- EDS generally arranges CSS properties in the following manner (although more as a guideline than a strictly-enforced convention):

```css
.element {
  [mixin includes, including typography]
  [positioning]
  [box model]
  [color]
  [transition]
}
```

- Media queries should live inside each class name. This makes it easier for a developer to focus on a class name, rather than finding confusion with class names written twice in a file and getting lost.

Instead of:

```css
.primary-nav {
  flex-direction: column;
}

@media (min-width: $eds-bp-md) {
  .primary-nav {
    flex-direction: row;
  }
}
```

Use:

```scss
.primary-nav {
  flex-direction: column;

  @media (min-width: $eds-bp-md) {
    flex-direction: row;
  }
}
```

- Avoid using classes on one component to alter the styling of a different component. For example, instead of:

```css
.banner__icon {
  fill: var(--eds-theme-color-utility-success-foreground);
}
```

Use:

```tsx
import { EdsThemeColorUtilitySuccessForeground } from 'src/tokens-dist/ts/colors';

<Icon color={EdsThemeColorUtilitySuccessForeground} />;
```

- Use `:focus-visible` with fallback instead of `:focus`

This allows focus indicators to appear for keyboard users while remaining hidden from mouse-only users. However, not all of the browser versions we support support this feature, so we also need a fallback.

Instead of:

```scss
.button--primary {
  &:focus {
    @mixin focus;
  }
}
```

Use:

```scss
.button--primary {
  &:focus-visible {
    @mixin focus;
  }

  @supports not selector(:focus-visible) {
    &:focus {
      @mixin focus;
    }
  }
}
```

## Utility classes <a name="utility-classes"></a>

EDS provides a number of utility classes (e.g. `u-margin-bottom-xl` and `u-padding-none`) that can be appended to components (e.g. `<TableCell className="u-padding-none">`) in order to achieve certain style results. Utility classes provide an additional layer to help "massage" components into place without having to overwhelm component styles with too many style variants.

- Utility classes can be found in `src/components/Utilities`
- Utility classes use the `!important` declaration to override any existing component styles

## Theming conventions <a name="theming-conventions"></a>

EDS is a [themeable design system](https://bradfrost.com/blog/post/creating-themeable-design-systems/) that incorporates some high-level UI application variables to make easy systematic changes to the UI.

This is a "lightly" themed system, meaning that only a few variables (such as key UI colors and other properties like border radius) are available for theming.

### Themeable component conventions

Components that ingest theme variables (defined in [design tokens](#design-tokens)) should follow these conventions:

## Design Tokens <a name="design-tokens"></a>

Please refer to the [design tokens documentation](./TOKENS.md) to learn how to use design tokens in EDS.

---

# JavaScript <a name="js"></a>

## JavaScript/React principles <a name="js-principles"></a>

- **Presentational Components Only** - EDS provides a library of reusable [presentational UI components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) that are consumed by CZI applications. These presentational components are "dumb" and don't contain any application business logic and aren't hooked up to any data models.
- **Predictable APIs** - EDS provides consistent, clear [component APIs](#component-naming) in order to provide a consistent and intuitive user developer experience.
- **Composition over inheritance** EDS adheres to the [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance) principle in order to create clean, extensible components that aren't tied to specific contexts or content.

## JavaScript Tools <a name="js-tools"></a>

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## TypeScript Conventions <a name="ts-conventions"></a>

EDS is built using [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org/), but should be built in a way to promote portability with other frameworks, especially with regards to HTML and CSS.

### Component directory structure:

The design system's component directory contains all of the design system's components.

```
- ComponentName
  - ComponentName.tsx
  - ComponentName.module.css
  - ComponentName.stories.tsx
```

- `ComponentName.tsx` contains the TypeScript-powered JSX structure and functionality for the component.
- `ComponentName.module.css`contains the styles for the component. All components must include a `.module.css` file.
- `ComponentName.stories.js` contains all the [stories](https://storybook.js.org/basics/writing-stories/) for the component.

## Anatomy of a component

### Imports

The framework follows a specific ordering/clustering for importing modules into a component. This is enforced through the [`import/order` lint rule](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md).

Here's an example:

```js
import React, { ReactNode } from 'react'; // 1
import styles from './Tags.module.css'; // 2
import { Icon } from '../Icon/Icon'; // 3
// 4
```

1. Import utility/library dependencies first, in alphabetical order of the library name
2. Import component styles, always using the `styles` as the default export name
3. Import other EDS components
4. Import any other necessary assets

### Prop Type definitions

```tsx
export interface Props {
  /**
   * Toggles the ability to dismiss the banner via an close button in the top right of the banner
   */
  dismissible?: boolean;

  ...
}
```

All component props must be defined with appropriate [TypeScript type](https://www.typescriptlang.org/docs/handbook/basic-types.html) applied. Each prop must contain a comment above the prop declaration to document the prop's function. These comments and prop declarations are automatically converted into prop documentation in Storybook. As a general guideline, try to organize component prop definitions alphabetically.

### Component comments

All components should be documented with a comment directly before the component declaration. (It's important that there are no spaces between the comment and the component so that the comment will appear in storybook.)

The comment should begin with an import example, include a general description of the component, possibly note behavior that may not be obvious to developers (so they don't have to dig through the code to understand what it does), and end with example usage.

Example:

````
/**
 * ```ts
 * import {ButtonGroup} from "@chanzuckerberg/eds";
 * ```
 *
 * A container for buttons grouped together horizontally or vertically.
 *
 * Example usage:
 *
 * ```ts
 * <ButtonGroup
 *   className={componentClassName}
 *   spacing='1x'
 *   orientation='vertical'
 * >
 *   <Button>Left button</Button>
 *   <Button>Right button</Button>
 * </ButtonGroup>
 * ```
 */
 export const ButtonGroup = ({
````

### Export module

```tsx
export const ComponentName = ({
  list,
  of,
  props
  ...other
}: Props) => {
  ...
}
```

This defines the component name and passes in all the `Props`.

### Children

When a component uses `children` as a prop, use the type `React.ReactNode` unless context dictates otherwise, including `ReactNode` as a named import.

```tsx
import React, { ReactNode } from 'react';

...

export const ComponentName = ({ children }: { children: ReactNode }) => {
  ...
}
```

### Variables, Methods, and Hooks

Interactive components likely require defining necessary [state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) functions in addition to defining any other necessary variables and functions.

#### useState()

When using the `useState()` hook, TypeScript will infer the correct type from the initial value. If explicit typing of a variable in state is necessary and a hard-coded initial value is not set, you can use a prop as the initial value.

#### useEffect()

`useEffect()` hooks do not require any typing. TypeScript expects them to either return nothing or a Destructor-typed function (a function that cleans up any side effects and returns void.)

#### useRef()

`useRef()` hooks access underlying DOM elements to perform imperative actions. The resulting `ref` object can either be _mutable_ or _not mutable_. (If the value store in its' `.current` property may be changed, the ref needs to be `mutable`.) When possible, use a type param or declare an initial value for the ref.

```tsx
import React, { useRef } from 'react';

// when typing an HTML element ref, set the initial value to `null`
const ref = useRef<HTMLInputElement>(null);
// otherwise, use a type param
const ref = useRef<number | undefined>();
// or TS can infer the type from an initial value
const ref = useRef(false);
```

### Define `componentClassName`

The last thing that appears above the `return` statement is the `componentClassName`, which defines the CSS block for the component in addition to any modifier CSS class names using the [`clsx` library](https://www.npmjs.com/package/clsx). CSS Modules' bracket syntax (e.g. `styles['my-component']`) is used to enable BEM conventions (which uses dashes).

```tsx
const componentClassName = clsx(styles['my-component'], className, {
  [styles['my-component--lg']]: size === 'lg',
});
```

### Return statement

Finally, the `return` statement contains the JSX markup for the component and applies the `componentClassName` to the outermost element to be rendered in the DOM.

```tsx
return <div className={componentClassName} {...other} />;
```

## Component Rules and Considerations <a name="component-rules"></a>

### Exactly one component per directory and per folder

Components in this library exist in a flat structure so each component directory needs to contain exactly one component file. Certain components may require several components to properly function (for instance, a `Table` may consist of `TableRow` and `TableCell` subcomponents), and these components should live as siblings in the `components` directory.

### Compound Components

Certain components (such as `<Tabs />` and `<Table />`) require splitting up into smaller subcomponents.

By default, we err towards more centralized control over the component architecture in order to prevent undesired results (for instance, we don't want users to put a `<Card />` inside of `<Breadcrumbs />`). However, certain components will require more flexibility and will therefore be architected to be composable and flexible (such as `<Card>`).

#### Conventions for compound components

- Compound components are composed of a parent component (e.g. `<Card>`) and children component (e.g. `<CardHeader>` and `<CardFooter>`).
- Compound component children names must always begin with the parent name. A parent component `Table` means that all child components related to it must begin with `Table` (such as `TableBody`, `TableRow` and `TableCell`).
- Compound component children have an associated `.module.css` file, and child component styles will contain styles relevant to the subcomponent element (e.g. `AccordionPanel.module.css` would begin with `.accordion__panel { ... }`).
- Compound components never have an associated `.stories.tsx` file as they rely on the parent component's stories to render properly.
- Compound components should be re-exported from their parent component file for easier usage. For example, at the bottom of `Card.tsx`, add the lines:

```tsx
Card.Header = CardHeader;
Card.Footer = CardFooter;
```

### Prop Naming conventions

- \*_camelCase for multi-word props_ - \*
- **All props declared at top of `render` method** - this defines all the props available to a component in one place and keeps the rest of the component code cleaner (you don't have to repeat `this.props.[thing]` everywhere).
- Don't use ternaries for most things, especially blocks of JSX.
- Update aria attribute prop names to native HTML names (`aria-label`, `aria-describedby`, `aria-labelledby`)

## Component API naming conventions <a name="api-naming"></a>

EDS follows specific front-end API naming conventions. Authoring a consistent API language provides many benefits:

- **More efficient development** - Because the API language is consistent across components, user developers can spend more time coding rather than reading API documentation. Also, library contributors don't have to think as much about component API naming when creating new components/variants.
- **Shared vocabulary between designers and developers** - When the code library and design library use the same language, designers and developers can spend more time collaborating rather than futzing over what things are named. This improves team velocity and product quality. It also positions the team to benefit from future tooling that can bring design and code closer together (something many startups and plugins are trying to solve right now!)
- **Future changes** - Utilizing a consistent language means that future changes and improvements are as easy as find-and-replace.

EDS adheres to the following API naming conventions:

### Variants

- `variant` should be used for primary _stylistic_ variations of a component, such as (e.g. `<Card variant="bordered">` or `<Button variant="secondary">`). `variant` should be used if there is primarily one variable used to manipulate the component style.
- `inverted` should be used consistently for stylistic `variation`s that "invert" the color schemes (e.g. `inverted=true`) to work on a darker background.
- `size` should be used for adjusting size attributes (e.g. `<Button variant="secondary" size="sm">` or `<Button size="md"`>). Use abbreviations for sizes (ex: `xs`, `sm`, `md`, `lg`).
- `behavior` should be used for functional variations of a pattern, such as `<Banner behavior="dismissable">`. Additional non-exclusive behaviors should be handled using boolean props prefixed with `is` (e.g. `isSticky` and `isDismissable`).
- `orientation` should be used for controlling the layout or orientation of a component (e.g. `<ButtonGroup orientation="stacked">`)
- `disabled` boolean should be used to control the interactivity of a component (e.g. `<Button disabled={true} />`)
- `align` should be used for aligning content, and should include `left` (default), `center`, `right` if needed.
- `verticalAlign` should be used for vertically aligning content, and should include `top`, `middle`, `bottom` if needed.
- The default option should be the one most commonly used in order to reduce friction for developers using the components.

### Text, Labels, Titles, and Children

- Default to `text` for short strings of text, such as `<BreadCrumbsItem text="My Courses">` or `<Badge text="Overdue" />`.
- For headings, default to `title`, such as `<PageHeader title="My Page Title">`.
- Default to `description` for text that serves as a descriptor, such as `<PageHeader title="Project name" description="Brief overview of the project..." />`
- For form-related components, use the semantic `label` or `legend` (e.g. `<TextField label="first name" />` and `<Fieldset.Legend text="Grade level">`).
- `children` can be used for components that only have one main block of content being passed in (so there will be no confusion with other content props) and when it's safe for that content to be a `ReactNode`. (If it's important for the content to only come in the form of a string, use a different prop name, like `text`.)

### Tag name

- Use `as` if a component can be rendered as different html elements (e.g. `h1`, `h2`, `h3`, etc). For example `<Heading as="h2">` will render a `Heading` component with an `h2` applied to it.

# Accessibility <a name="accessibility"></a>

## Generating IDs

ID attributes used for accessibility (e.g. associating `<label>` and `<input>` elements) should be unique and stable.

We currently use [react-uid](https://www.npmjs.com/package/react-uid) hooks for ID generation. To ensure stable results, they cannot be invoked within conditionals or callbacks.

- `useUID()` is the most common usage.

```tsx
const generatedId = useUID();
```

- `useUIDSeed()` generates a stable seed generator for use in iterators.

```tsx
const getUID = useUIDSeed();
// you should either pass an object to getUID:
items.forEach((item) => {
  const generatedId = getUID(item);
});

// or pass a constructed string:
items.forEach((item, index) => {
  const generatedId = getUID(`item-${index}-aria-labelledby`);
});

// interpolating an object into a string will NOT work:
// items.forEach((item) => {
//   const generatedId = getUID(`${item}-id`);
// });
```

## Tools <a name="accessibility-tools"></a>

- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) evaluates static code for a11y issues. Currently this plugin is configured with the "recommended" settings, which generate linting errors for most rule violations. See [this chart](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#rule-strictness-in-different-modes) for descriptions of each rule.

- The plugin is currently unable to map a custom component to the HTML tag that it renders (i.e. the `<Header>` component renders content wrapped in `<header>` tags, but the plugin does not automatically apply header rules to a `<Header>` component.) [Check the status](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/844) on work is being done on addressing this issue.
