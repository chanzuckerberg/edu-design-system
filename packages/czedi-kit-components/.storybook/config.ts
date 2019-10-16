import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

addDecorator(withA11y);
addDecorator(withInfo as any);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(ts|tsx|mdx)$/), module);
