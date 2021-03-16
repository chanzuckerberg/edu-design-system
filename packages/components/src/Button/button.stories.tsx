import * as React from "react";

import Button, { ButtonProps } from "./button";

import { Story } from "@storybook/react/types-6-0";
import styles from "./button.stories.module.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

type Args = React.ComponentProps<typeof Button>;
const Template: Story<Args> = (args) => <Button {...args} />;

export const flat = Template.bind(null);
flat.args = {
  children: "Flat Button",
  variant: "flat",
  color: "success",
};

export const outline = Template.bind(null);
outline.args = {
  children: "Outline Button",
  variant: "outline",
};

export const minimal = Template.bind(null);
minimal.args = {
  children: "Minimal Button",
  variant: "minimal",
  color: "alert",
};

const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];
const colors: Array<ButtonProps["color"]> = [
  "alert",
  "brand",
  "neutral",
  "success",
  "warning",
];
const variants: Array<ButtonProps["variant"]> = ["flat", "outline", "minimal"];

export const grid = () => {
  return (
    <ul>
      {sizes.map((size) => (
        <li key={size}>
          <ul>
            {variants.map((variant) => (
              <li key={variant}>
                <ul className={styles["colors"]}>
                  {colors.map((color) => (
                    <li key={color} className={styles["colors__color"]}>
                      <Button size={size} color={color} variant={variant}>
                        Button
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
