import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ClickableStyleWrapper from "./ClickableStyleWrapper";

export default {
  title: "ClickableStyleWrapper",
  component: ClickableStyleWrapper,
};

type Args = React.ComponentProps<typeof ClickableStyleWrapper>;

const Template: Story<Args> = (args) => <ClickableStyleWrapper {...args} />;

export const ClickableStyleWrapperAsAnATag = Template.bind(null);
ClickableStyleWrapperAsAnATag.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "ClickableStyleWrapper As An A Tag",
};
