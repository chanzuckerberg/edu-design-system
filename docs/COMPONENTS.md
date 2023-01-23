# Working with EDS Components, Pages, and Recipes

This codebase contains all the components, [recipes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/), and pages to successfully build the presentation view of product screens.

## Working with components

### Using components

Using EDS components in your React application involves first installing the EDS package as a dependency:

```sh
npm install @chanzuckerberg/eds
# or
yarn add @chanzuckerberg/eds
```

Next, import any needed components from the EDS component library into your application like so:

```js
import { Button, Grid, GridItem } from '@chanzuckerberg/eds';
```

From there, call EDS components in your React application and pass in the desired values into each component's API:

```jsx
<Button
  variant="primary"
  onClick={...}
>
  Submit
  <Icon name="chevron-right" purpose="decorative" />
</Button>
```

Each EDS component is documented in Storybook, which surfaces each component's API and provides copy-and-paste code snippets. If you have questions or are experiencing any issues when working with EDS's components, please reach out for support via slack and the team will be happy to help.

### Creating a component

**NOTE**: Refer to this [Tag](https://github.com/chanzuckerberg/edu-design-system/tree/upcoming-components) for examples of potential upcoming components. If you see one you like, you can use it as a baseline for implementation.

1. To create a component, run `yarn plop` in the command line.
2. The command will ask, "What is your component name?" Add your component name (you can either type `PageHeader` or `page header` and it will automatically generate the proper casing).
3. In `src/components/[component]/[component].stories.tsx`, change `title: 'Example/[ComponentName]'` to the location in the Storybook navigation where you want your component to live. For instance, `PageHeader` component you would change `title: 'Example/PageHeader'` to `title: 'Molecules/Text/PageHeader'`.
4. Edit component source code in accordance with [EDS's code guidelines](./CODE_GUIDELINES.md)
5. Create relevant stories for all component variants

### Beta status

When components are first created using the `plop` feature, they're given a beta tag in the `.stories` file and a line is added to the component docstring stating that the component is in beta. When the component is first officially released/announced internally, the component will be in beta, but it will leave beta in the following release. We expect these releases to happen about once/month, and the removal of the beta information will happen as part of the release process.

Exceptions can be made for components that are still fluctuating and experiencing a lot of changes when the second release comes around.

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

**[Recipes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/)** are mainly compositions of design system components that are to be consistently used across products, but aren’t agnostic enough to live in core component library. Like pages, recipes live in the `.storybook` directory of the project since they are not packaged up with the design system. Recipe components may be revisited and pulled into EDS at a later date if they are deemed to be reusable enough to move into the design system library.

**Note**: Recipe components live in `.storybook/recipes` and take the following shape in Storybook:

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
