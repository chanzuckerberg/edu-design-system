import "@chanzuckerberg/czedi-kit-tokens/css/variables.css";

import * as React from "react";
import EDSGlobalStyles from "../src/styles/global";

export const decorators = [
  (Story) => (
    <div dir="ltr">
      <EDSGlobalStyles />
      <Story />
    </div>
  ),
];
