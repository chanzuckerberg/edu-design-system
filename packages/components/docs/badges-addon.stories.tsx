import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { StoryObj } from "@storybook/react";
import React from "react";

const Example = () => <p>Example to show badges addon</p>;

export default {
  title: "BadgesAddon",
  component: Example,
  parameters: {
    badges: [BADGE.STABLE, BADGE.DEPRECATED, BADGE.BETA],
  },
};

export const Default: StoryObj = {};
