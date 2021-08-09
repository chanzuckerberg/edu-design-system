import type { Story } from "@storybook/react";
import React from "react";
import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: { onDismiss: { action: "dismissed" } },
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

export const NotDismissable = Template.bind(null);
NotDismissable.args = {
  ...defaultArgs,
  color: "success",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore onDismiss is not nullable, but this is needed to remove the arg from
  // storybook's actions addon
  onDismiss: null,
};
