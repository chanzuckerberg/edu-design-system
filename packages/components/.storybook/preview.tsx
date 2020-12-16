import * as React from "react";

import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import EDSGlobalStyles from "../src/styles/global";

import { addDecorator } from "@storybook/react";
import { addParameters } from "@storybook/react";

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
