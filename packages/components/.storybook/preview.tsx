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

export const parameters = {
  backgrounds: {
    values: [
      {
        name: "gray",
        value: "#f3f3f3",
      },
      {
        name: "dark",
        value: "#21272D", // eds-color-neutral-700
      },
    ],
  },
};
