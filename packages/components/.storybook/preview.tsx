import "@chanzuckerberg/czedi-kit-styles/normalize.css";
import "@chanzuckerberg/czedi-kit-styles/all.css";

import * as React from "react";

import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";

import { addDecorator } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator(storyFn => <div dir="ltr">{storyFn()}</div>);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
