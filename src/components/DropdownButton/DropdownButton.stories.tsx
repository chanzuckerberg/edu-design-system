import type { StoryObj } from "@storybook/react";
import * as React from "react";
import DropdownButton from "./DropdownButton";

export default {
  title: "DropdownButton",
  component: DropdownButton,
};

type Args = React.ComponentProps<typeof DropdownButton>;

export const Default: StoryObj<Args> = {
  args: {
    text: "Dropdown button",
  },
};
