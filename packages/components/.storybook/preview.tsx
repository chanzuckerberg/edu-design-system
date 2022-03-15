import "@chanzuckerberg/eds-tokens/lib/css/variables.css";
import "../src/styles/fonts.css";
import "../src/styles/global.css";
import "../src/styles/tailwindUtilities.css";

import {
  BADGE,
  defaultBadgesConfig,
} from "@geometricpanda/storybook-addon-badges";
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
  badgesConfig: {
    deprecated: {
      ...defaultBadgesConfig[BADGE.DEPRECATED],
      tooltip: "This component is deprecated, please avoid using it.",
    },
    beta: {
      ...defaultBadgesConfig[BADGE.BETA],
      tooltip: {
        title: "This is Beta",
        desc: "Be ready to receive updates frequently and leave a feedback",
        links: [
          { title: "Read more", href: "http://path/to/your/docs" },
          {
            title: "Leave feedback",
            onClick: () => {
              alert("thanks for the feedback");
            },
          },
        ],
      },
    },
  },
};
