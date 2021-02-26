import * as React from "react";

import Button from "./button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

type Args = React.ComponentProps<typeof Button>;
const Template: Story<Args> = (args) => <Button {...args} />;

export const flat = Template.bind(null);
flat.args = {
  children: "Flat Button",
  variant: "flat",
  color: "success",
};

export const outline = Template.bind(null);
outline.args = {
  children: "Outline Button",
  variant: "outline",
};

export const minimal = Template.bind(null);
minimal.args = {
  children: "Minimal Button",
  variant: "minimal",
  color: "alert",
};
