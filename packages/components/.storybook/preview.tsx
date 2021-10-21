import "@chanzuckerberg/eds-tokens/lib/css/variables.css";
import "../src/styles/fonts.css";
import "../src/styles/global.css";
import "../src/styles/tailwindUtilities.css";

import React from "react";

export const decorators = [
  (Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];
