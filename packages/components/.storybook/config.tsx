import "@chanzuckerberg/czedi-kit-styles/all.css";

import * as React from "react";

import { addDecorator } from "@storybook/react";
import { configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator(storyFn => <div dir="ltr">{storyFn()}</div>);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(ts|tsx|mdx)$/), module);
