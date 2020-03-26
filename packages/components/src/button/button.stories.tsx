import * as React from "react";

import Button from "./button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const text = (): JSX.Element => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emoji = (): JSX.Element => (
  <Button onClick={action("clicked")}>
    <span aria-label="so cool">😀 😎 👍 💯</span>
  </Button>
);
