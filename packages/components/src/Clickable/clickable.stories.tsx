import * as React from "react";

import Clickable from "./clickable";
import { Story } from "@storybook/react/types-6-0";

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
