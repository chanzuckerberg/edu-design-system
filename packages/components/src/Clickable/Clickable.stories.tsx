import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Clickable from "./Clickable";

export default {
  title: "Clickable",
  component: Clickable,
};

type Args = React.ComponentProps<typeof Clickable>;

const Template: Story<Args> = (args) => <Clickable {...args} />;

export const ClickableAsAnATag = Template.bind(null);
ClickableAsAnATag.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "Clickable As An A Tag",
};
