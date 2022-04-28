# Icons

EDS provides utilitarian UI icons (e.g. magnifying glass, menu, triangles, carets, and so on). "Branded" or content-specific icons are not provided by EDS.

## Using Icons

There are several ways to use EDS icons in an application. The first and most direct way is to reach for the `Icon` component.

```jsx
<Icon name="icon-name" />
```

View the "Icon Grid" story in Storybook for a visualization of all available icons to pass into the `name` prop.

---

## Working with Icons

### Adding a new icon

1. Export SVG icon assets from Figma according to icon workflow (TODO: formalize this process in design workflow)
2. In a new feature branch, locate `src/icons` and add new icon to the directory.
3. Run `yarn build:icons` in the terminal to build the new icon sprite.
4. In Storybook, view the "Icon Grid" component to see the new component added to the available list of icons, which is now ready to use in EDS components.
5. Submit PR and release in order to make icon available to consuming applications.

### Modifiying icons

Modiying icons involves the same steps as adding an icon, only overriding an existing SVG icon file with the new icon. However, releasing modified icons needs to be handled with care as certain icon changes aren't particularly noticeable while others may constitute a breaking change to the library.
