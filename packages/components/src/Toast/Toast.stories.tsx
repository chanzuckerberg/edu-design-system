import type { StoryObj } from "@storybook/react";
import React from "react";
import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: { onDismiss: { action: "dismissed" } },
  args: {
    children: "You've got toast!",
  },
};

type Args = React.ComponentProps<typeof Toast>;

export const Success: StoryObj<Args> = {
  args: {
    color: "success",
  },
};

export const Alert: StoryObj<Args> = {
  args: {
    color: "alert",
  },
};

export const NotDismissable: StoryObj<Args> = {
  args: {
    color: "success",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore onDismiss is not nullable, but this is needed to remove the arg from
    // storybook's actions addon
    onDismiss: null,
  },
};
