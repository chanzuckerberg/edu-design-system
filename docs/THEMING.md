# Theming overview

"Theming", in the context of EDS, is the process of overriding the default styles of EDS components to match a different brand (or "theme"). The "Theming" directory in storybook demonstrates two examples of theming — a [wireframe theme](./?path=/story/pages-theming-wireframedemo--default) (an unbranded theme that can be used for prototyping a product before it has an official visual style) and an [along theme](./?path=/story/pages-theming-alongdemo--default) that replicates the visual style of the [Along product](https://app.along.org/).

## How to apply a theme in another product

In EDS, theming is implemented by overriding the values of the CSS variables representing tokens, which the EDS components use in their styles. This should update the style of the components to match the branding of a different product with minimum manual CSS styling overrides. (Some manual styling overrides will be necessary though because we don't have tokens for every little detail. In those cases, we could create a new token to make those overrides easier if it looks like something that could very well be useful for other products as well.)

These CSS variables overrides lives in the products using EDS components. This allows product teams to quickly iterate on their theme without making changes to EDS itself.

You can find the full list of CSS variables in [src/tokens-dist/css/variables.css](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/tokens-dist/css/variables.css), and you can see examples of overriding them in [.storybook/pages/WireframeDemo/GlobalStyles.module.css](https://github.com/chanzuckerberg/edu-design-system/blob/main/.storybook/pages/WireframeDemo/GlobalStyles.module.css) and [.storybook/pages/AlongDemo/GlobalStyles.module.css](https://github.com/chanzuckerberg/edu-design-system/blob/main/.storybook/pages/AlongDemo/GlobalStyles.module.css).

If you're looking to set up a prototype using the [wireframe theme](./?path=/story/pages-theming-wireframedemo--default), you can copy and paste the variables defined in [.storybook/pages/WireframeDemo/GlobalStyles.module.css](https://github.com/chanzuckerberg/edu-design-system/blob/main/.storybook/pages/WireframeDemo/GlobalStyles.module.css). (The placeholder images will need to be added separately.)

If you are trying to customize the styling of a component but find that the style you want to override does not yet have a token for you to redefine, you can reach out to us to discuss whether a new token should be added.

## How to support theming in EDS

Since other products rely on CSS variable tokens to theme EDS components, it's very important that, when working with color, components in the EDS package only use CSS variables representing tier 2 and tier 3 tokens for styling. EDS component styling should never use tier 1 tokens, JavaScript variables representing tokens, or raw hex codes. Non-color styling can use tokens from any tier. (This is only relevant to the EDS components themselves; examples in storybook or in other products do not need to follow this rule.)
