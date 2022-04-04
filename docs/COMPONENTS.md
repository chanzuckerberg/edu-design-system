# Working with EDS Components, Pages, and Recipes

This codebase contains all the components, [recipes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/), and pages to successfully build the presentation view of product screens.

## Working with components

### Using components
TODO: define this process

Using EDS components in your React application involves first installing the EDS package as a dependency:

```
npm install @/EDS
yarn add @/EDS
```

Next, import any needed components from the EDS component library into your application like so:

```js
import { Button, Grid, GridItem } from '@/EDS';
```

From there, call EDS components in your React application and pass in the desired values into each component's API:

```jsx
<Button
  variant="primary"
  iconName="chevron-right"
  iconPosition="after"
  onClick={...}
>
  Submit
</Button>
```

Each EDS component is documented in Storybook, which surfaces each component's API and provides copy-and-paste code snippets. If you have questions or are experiencing any issues when working with EDS's components, please [reach out for support](#) (TODO: provide support link) and the team will be happy to help.

### Creating a component

1. To create a component, run `yarn plop` in the command line.
2. The command will ask, "What is your component name?" Add your component name (you can either type `PageHeader` or `page header` and it will automatically generate the proper casing).
3. In `src/components/[component]/[component].stories.tsx`, change `title: 'Example/[ComponentName]'` to the location in the Storybook navigation where you want your component to live. For instance, `PageHeader` component you would change `title: 'Example/PageHeader'` to `title: 'Molecules/Text/PageHeader'`.
4. Edit component source code in accordance with [EDS's code guidelines](./CODE_GUIDELINES.md)
5. Create relevant stories for all component variants

---

## Working with pages

Pages are compositions of components and recipes that operate as a working prototype or "interactive comp" of a product screen ([read more here](https://bradfrost.com/blog/post/atomic-design-and-storybook/)). They are not wired up to any back-end services or application logic, but serve an important purpose of validating that EDS components and recipes all come together to build successful products.

### Using pages

Pages aren't meant to be consumed directly, but rather referenced by application developers. The intention is for pages represented in Storybook to faithfully represent the UI code layer of an application screen.

Application developers can copy and paste page-level code into the application and then begin replacing static data and content with dynamic application code.

### Creating a page

1. Run `yarn plop:page` in the command line.
2. Provide a name when asked "What is your page name?"
3. Plop will generate a page and accompanying stories file at `./storybook/pages/[YourPageName]/[YourPageName].tsx`
4. Begin editing the page, importing any components and recipes required to successfully build the page.
5. Create relevant stories for all page variants

Note: pages live in the `.storybook` directory of the project. These do not live in `src` since they are not shipped with the EDS library.

These take on the same structure as the components above:

```
.storybook
--pages
----PageName
------PageName.tsx
------PageName.stories.tsx
```

- `PageName.tsx` contains the HTML and components with mock data applied to render the page
- `PageName.stories.tsx` contains all the [stories](https://storybook.js.org/basics/writing-stories/) for the page.

**Pages** follow this organizational structure in Storybook:

```
Pages
--Page Name
----Default
----Additional States (as needed)
```

---

## Working with recipes

TODO: discuss recipes and EDS candidates; ratify recipe location

**[Recipes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/)** are mainly compositions of design system components that are to be consistently used across a product, but aren’t agnostic enough to live in core component library. Like pages, recipes live in the `.storybook` directory of the project since they are not packaged up with the design system. Recipe components may be revisited and pulled into EDS at a later date if they are deemed to be reusable enough to move into the design system library.

### Using recipes

TODO: Need to establish the location of where recipes should live. Options include:

1. The downstream application codebase
2. A `design-system-extras` sibling repository
3. In a directory in the `EDS` library (not recommended)

### Creating a recipe

1. Run `plop recipe` in the command line.
2. Provide a name when asked "What is your recipe name?"
3. Plop will generate a recipe and accompanying stories file at `./storybook/recipes/[YourRecipeName]/[YourRecipeName].tsx`
4. Begin editing the recipe, importing any necessary components and other recipes.
5. Create relevant stories for all recipe variants

Note: Recipe components live in `.storybook/recipes` and take the following shape in Storybook:

```
Recipes
--Component Name
----Component Stories
```

Recipe components are not part of EDS. However, they should follow EDS [code conventions](./CODE_GUIDELINES.md) as closely as possible in order to make future migration into the design system as easy as possible.

---

## Directory structure <a name="directory"></a>

### Organizing components

We're using the [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology) to cluster design system components into [Atoms](http://atomicdesign.bradfrost.com/chapter-2/#atoms), [Molecules](http://atomicdesign.bradfrost.com/chapter-2/#molecules), and [Organisms](http://atomicdesign.bradfrost.com/chapter-2/#organisms). Therefore the top-level navigation categories for Storybook are:

- Design tokens
- Atoms
- Molecules
- Organisms
- Pages
- Recipes

The component stucture is as follows:

```
Atoms
--Design Tokens
--Component Category
----Component Name
------Component Stories
Molecules
--Component Category
----Component Name
------Component Stories
Organisms
--Component Category
----Component Name
------Component Stories
Pages
--Page Name
----Template Name
Recipes
--Component Name
----Component Stories
```

Components all follow a general pattern of:

```
--Component Category
----Individual Component Name
------Individual Component Stories
```

For instance, `Molecules/Buttons/Button` would look something like:

```
Molecules
--Buttons
----Button
------Default
------Primary
------Small
------[Other Variations]
```
