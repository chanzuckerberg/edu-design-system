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

**TODO: formalize this process with design in the Icon design workflow**

1. Export SVG icon asset(s) from Figma
2. If necessary, remove the `fill` attribute on the `<path>` in the exported SVG file(s). In the very rare case that an icon needs colors defined in the icon (like the `status-` icons), only use tier 2 or tier 3 CSS variables for the color.
3. In a new feature branch, locate `src/icons` and add new icon to the directory.
5. In Storybook, view the "Icon Grid" component to see the new component added to the available list of icons, which is now ready to use in EDS components.
6. Submit PR in accordance with [workflow guidelines](./WORKFLOW.md) and release in order to make icon available to consuming applications

### Modifiying icons

Modiying icons involves the same steps as adding an icon, only overriding an existing SVG icon file with the new icon. However, releasing modified icons needs to be handled with care as certain icon changes aren't particularly noticeable while others may constitute a breaking change to the library. Refer to the [EDS release guidelines](./WORKFLOW.md) to determine how best to roll out icon updates.
