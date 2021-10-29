import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ClickableStyle from "./ClickableStyle";

export default {
  title: "ClickableStyle",
  component: ClickableStyle,
};

type Args = React.ComponentProps<typeof ClickableStyle>;

const Template: Story<Args> = (args) => <ClickableStyle {...args} />;

export const ClickableStyleAsALabelTag = Template.bind(null);
ClickableStyleAsALabelTag.args = {
  as: "label",
  color: "brand",
  variant: "flat",
  size: "large",
  children: "Label",
};
