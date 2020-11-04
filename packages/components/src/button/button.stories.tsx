import Button from "./button";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const text = (): JSX.Element => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const variants = (): JSX.Element => (
  <div>
    <Button onClick={action("clicked")} variant="primary">
      Hello Button
    </Button>
    <Button onClick={action("clicked")} variant="secondary">
      Secondary Button
    </Button>
  </div>
);

export const emoji = (): JSX.Element => (
  <Button onClick={action("clicked")}>
    <span aria-label="so cool">😀 😎 👍 💯</span>
  </Button>
);
