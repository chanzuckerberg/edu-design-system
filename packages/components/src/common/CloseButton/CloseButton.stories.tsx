import { StoryObj } from "@storybook/react";
import React from "react";
import CloseButton from "./CloseButton";

export default {
  title: "common/CloseButton",
  component: CloseButton,
  args: {
    color: "brand",
  },
};

type Args = React.ComponentProps<typeof CloseButton>;

export const Default: StoryObj<Args> = {};

export const SmallerSize: StoryObj<Args> = {
  ...Default,
  args: {
    size: "1rem",
  },
};

export const DifferentColor: StoryObj<Args> = {
  ...Default,
  args: {
    color: "alert",
  },
};

export const CustomAriaLabel: StoryObj<Args> = {
  ...Default,
  args: {
    "aria-label": "close modal",
  },
  parameters: {
    chromatic: {
      // This story is just for jest snapshot tests.
      disableSnapshot: true,
    },
  },
};
