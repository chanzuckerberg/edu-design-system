import { Story } from "@storybook/react/types-6-0";
import React from "react";
import CloseButton from "./CloseButton";

export default {
  title: "common/CloseButton",
  component: CloseButton,
};

type Args = React.ComponentProps<typeof CloseButton>;

const Template: Story<Args> = (args) => <CloseButton {...args} />;

const defaultArgs = {
  color: "brand" as const,
};

export const Default = Template.bind(null);
Default.args = {
  ...defaultArgs,
};

export const SmallerSize = Template.bind(null);
SmallerSize.args = {
  ...defaultArgs,
  size: "1rem",
};

export const DifferentColor = Template.bind(null);
DifferentColor.args = {
  ...defaultArgs,
  color: "alert" as const,
};

export const CustomAriaLabel = Template.bind(null);
CustomAriaLabel.args = {
  ...defaultArgs,
  "aria-label": "close modal",
};
CustomAriaLabel.parameters = {
  chromatic: {
    // This story is just for jest snapshot tests.
    disableSnapshot: true,
  },
};
