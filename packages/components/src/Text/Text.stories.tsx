import React from "react";

import { Story } from "@storybook/react/types-6-0";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

type Args = React.ComponentProps<typeof Text>;

const Template: Story<Args> = (args) => <Text {...args} />;

export const Body = Template.bind(null);
Body.args = {
  children: "Body paragraph 16/24",
};

export const BodySmall = Template.bind(null);
BodySmall.args = {
  size: "sm",
  children: "Body small 14/20",
};

export const BodyXSmall = Template.bind(null);
BodyXSmall.args = {
  size: "xs",
  children: "Body Xsmall 12/16",
};

export const Caption = Template.bind(null);
Caption.args = {
  size: "caption",
  children: "Caption 12/20",
};

export const Overline = Template.bind(null);
Overline.args = {
  size: "overline",
  children: "Overline 12/20",
};

export const BodyColorInfoBold = Template.bind(null);
BodyColorInfoBold.args = {
  children: "Info color body text, bold",
  color: "info",
  weight: "bold",
};

export const TextColorInherit: Story<Args> = (args) => (
  <Text color="alert" size="body">
    This text surrounds the <Text {...args} /> and shows it should inherit color
    from the parent
  </Text>
);
TextColorInherit.args = {
  children: "Child Text",
  color: "inherit",
};
