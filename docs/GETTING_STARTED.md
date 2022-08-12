# Welcome to EDS

EDS is a design system that provides foundations to create a consistent, accessible web experience across products.

## Storybook structure

[Storybook](https://storybook.js.org/) is a tool that provides a place for developers to build, document, and ship components as well as prototype ideas and pages.

EDS' Storybook structure follows the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology where smaller components work together to create larger components to create templates and pages. To navigate, you can expand the items in the left navigation or perform a search for what you are looking for.

The navigation consists of:

- **LegacyTokens** contains legacy tokens before the system was refactored
- **LegacyTypographySizes** contains legacy typography sizes before the system was refactored
- **DesignTokens** includes colors, typography, and other properties that build a theme across the system. These are shipped with the system to be consumed by product teams.
- **Documentation** contains documenation around code guidelines, component structure, icon, layout, token, and typography
- **Atoms** are the smallest level of components within the system. These are shipped with the system to be consumed by product teams.
- **Molecules** are made up of atoms and other HTML elements to create larger components. These are shipped with the system to be consumed by product teams.
- **Organisms** are built up of atoms, molecules, and other HTML elements to create larger, more complex components.
- **Recipes** are product-specific compositions that use the design system components to structure, but are not shipped with the system. This is to allow for teams to meet their business needs without polluting or complicating the reusable component structure and styling. Read [Brad Frost's post on recipes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/).
- **Pages** are UI prototypes that use the components and recipes to structure the majority of real product pages that will use these. While these are not shipped with the system, the layout using components and recipes can be copied over into the product to represent the majority of the UI.
