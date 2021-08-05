import Button from "./button";
import CheckCircleRoundedIcon from "../Icons/CheckCircleRounded";
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Text from "../Text";

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

export const Flat = Template.bind(null);
Flat.args = {
  children: "Flat Button",
  variant: "flat",
};

export const Outline = Template.bind(null);
Outline.args = {
  children: "Outline Button",
  variant: "outline",
};

export const Link = Template.bind(null);
Link.args = {
  children: "Link Button",
  variant: "link",
};

export const linkInBody: Story<Args> = (args) => (
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

export const linkInHeading: Story<Args> = (args) => (
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

export const withDataTestId = Template.bind(null);
withDataTestId.args = {
  children: "Button with data-testid",
  color: "alert",
  variant: "flat",
  "data-testid": "fake-test-id",
};

export const linkWithIcon = Template.bind(null);
linkWithIcon.args = {
  children: (
    <>
      Link with icon <CheckCircleRoundedIcon purpose="decorative" />
    </>
  ),
  color: "success",
  variant: "link",
};

export const outlineWithIcon = Template.bind(null);
outlineWithIcon.args = {
  children: (
    <>
      Outline with icon <CheckCircleRoundedIcon purpose="decorative" />
    </>
  ),
  color: "warning",
  variant: "outline",
};

export const withFakeClassName = Template.bind(null);
withFakeClassName.args = {
  children: "With fake className",
  color: "warning",
  variant: "outline",
  className: "fake-className",
};
