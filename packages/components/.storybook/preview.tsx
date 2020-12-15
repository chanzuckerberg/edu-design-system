import * as React from "react";

import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import EDSGlobalStyles from "../src/styles/global";

import { addDecorator } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator((storyFn) => (
  <div dir="ltr">
    <EDSGlobalStyles />
    {storyFn()}
  </div>
));
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
