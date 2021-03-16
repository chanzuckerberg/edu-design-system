import "@chanzuckerberg/eds-tokens/css/variables.css";
import "../src/styles/fonts.css";
import "../src/styles/tailwind-variables.css";
import "../src/styles/global.css";

import * as React from "react";

export const decorators = [
  (Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];
