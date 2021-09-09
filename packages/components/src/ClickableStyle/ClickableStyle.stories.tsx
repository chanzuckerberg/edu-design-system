import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ClickableStyle from "./ClickableStyle";

export default {
  title: "ClickableStyle",
  component: ClickableStyle,
};

type Args = React.ComponentProps<typeof ClickableStyle>;

const Template: Story<Args> = (args) => <ClickableStyle {...args} />;

export const ClickableStyleAsAnATag = Template.bind(null);
ClickableStyleAsAnATag.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "ClickableStyle As An A Tag",
};
