import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

type Args = React.ComponentProps<typeof Checkbox>;

const Template: Story<Args> = (args) => <Checkbox {...args} />;

const defaultArgs = {
  label: "Hello world =^_^=",
};

export const Testing = () => (
  <>
    <Checkbox id="unchecked" label="Unchecked" />
    <Checkbox checked id="checked" label="Checked" />
  </>
);

export const Default = Template.bind(null);
Default.args = {
  ...defaultArgs,
};

export const Checked = Template.bind(null);
Checked.args = {
  ...defaultArgs,
  checked: true,
};

export const Disabled = Template.bind(null);
Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
