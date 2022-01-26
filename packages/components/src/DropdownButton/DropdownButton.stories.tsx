import type { StoryObj } from "@storybook/react";
import * as React from "react";
import DropdownButton from "./DropdownButton";

export default {
  component: DropdownButton,
};

type Args = React.ComponentProps<typeof DropdownButton>;

export const Default: StoryObj<Args> = {
  args: {
    children: "Dropdown button",
  },
};
