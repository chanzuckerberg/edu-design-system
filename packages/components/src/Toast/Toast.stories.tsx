import React from "react";
import type { Story } from "@storybook/react";
import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
};

type Args = React.ComponentProps<typeof Toast>;

const Template: Story<Args> = (args: Args) => <Toast {...args} />;

const defaultArgs = {
  children: "You've got toast!",
};

export const Success = Template.bind(null);
Success.args = {
  ...defaultArgs,
  color: "success",
};

export const Alert = Template.bind(null);
Alert.args = {
  ...defaultArgs,
  color: "alert",
};

export const Dismissable = Template.bind(null);
Dismissable.args = {
  ...defaultArgs,
  color: "success",
  onDismiss: () => console.log("dismissed!"),
};
