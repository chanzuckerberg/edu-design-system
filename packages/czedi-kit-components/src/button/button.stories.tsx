import * as React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export default {
  title: "Button",
  component: Button
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span aria-label="so cool">😀 😎 👍 💯</span>
  </Button>
);
