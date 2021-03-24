import * as React from "react";

import Button from "./button";
import { Story } from "@storybook/react/types-6-0";
import Text from "../Text";

export default {
  title: "Button - WIP",
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
  color: "success",
  variant: "flat",
};

export const outline = Template.bind(null);
outline.args = {
  children: "Outline Button",
  variant: "outline",
};

export const link = Template.bind(null);
link.args = {
  children: "Link Button",
  color: "alert",
  variant: "link",
};

export const linkInBody = (args) => (
  <Text size="body">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInBody.args = {
  children: "Link Button",
  color: "brand",
  variant: "link",
};

export const linkInHeading = (args) => (
  <Text size="h1">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInHeading.args = {
  children: "Link Button",
  variant: "link",
  color: "brand",
};
