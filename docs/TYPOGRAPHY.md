# Typography

Typography in EDS follows [the same structure as design tokens](./TOKENS.md), with the exception that typography operates as a _cluster_ of typography-specific style properties rather than a single style property.

## Tier 1: Typography values

Typography-specific design tokens are found in `design-tokens/tier-1-definitions/typography.json` and define these properties:

- `font-size`
- `font-family`
- `font-weight`
- `line-height`

These token values are _never to be used_ directly by components; these token values are assembled into typography presets.

## Tier 1: Typography presets

[Postcss-mixins](https://github.com/postcss/postcss-mixins) are used to cluster typography-specific tokens together into [typography presets](https://superfriendlydesign.systems/articles/typography-in-design-systems/). For example:

```css
/* typography-presets.css */
@define-mixin eds-typography-preset-1 {
  font-family: var(--eds-font-family-secondary);
  font-weight: var(--eds-font-weight-bold);
  font-size: var(--eds-font-size-xxl);
  line-height: 1.333;
  letter-spacing: normal;
  text-transform: none;
}
```

Just as with other Tier 1 tokens, typography presets shouldn't be used directly by components. Typography presets are mapped to specific semantic usage at the Tier 2 level.

Note: line-height values are [unitless](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values) and are specific to each preset, which is why the decision was made to exclude line height values from tokens.

## Tier 2: Typography usage

Tier 2 typography values take the typography presets defined at the Tier 2 level and map them to a semantic usage value like so:

```css
/* typography-usage.css */
@define-mixin eds-theme-typography-body-sm {
  @mixin eds-typography-preset-006;
}
```

These semantic values are then included in each component's style file:

```css
.breadcrumbs {
  @mixin eds-theme-typography-body-sm;
}
```
