import "@chanzuckerberg/eds-tokens/dist/css/variables.css";
import "../src/styles/fonts.css";
import "../src/styles/global.css";

import React from "react";

export const decorators = [
  (Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];
