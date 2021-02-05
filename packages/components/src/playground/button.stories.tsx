import * as React from "react";

import Button from "./button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "ButtonPlayground",
  component: Button,
};

type Args = React.ComponentProps<typeof Button>;

const Template: Story<Args> = (args) => <Button {...args} />;

export const text = Template.bind(null);
text.args = {
  children: "Hello Button",
};

export const primary = Template.bind(null);
primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const secondary = Template.bind(null);
secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const emoji = Template.bind(null);
emoji.args = {
  "aria-label": "so cool",
  children: "😀 😎 👍 💯",
};
