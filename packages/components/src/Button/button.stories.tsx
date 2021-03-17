import * as React from "react";

import Button, { ButtonProps } from "./button";
import Clickable, { ClickableProps } from "../util/clickable";

import Heading from "../Heading";
import { Story } from "@storybook/react/types-6-0";
import Text from "../Text";
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

export const link = Template.bind(null);
link.args = {
  children: "Link Button",
  variant: "link",
  color: "alert",
};

export const linkInBody = (args) => (
  <Text size="body">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInBody.args = {
  children: "Link Button",
  variant: "link",
  color: "brand",
};

export const linkInHeading = (args) => (
  <Text size="h1">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInHeading.args = {
  children: "Link Button",
  variant: "link",
  color: "brand",
};

const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];
const colors: Array<ButtonProps["color"]> = [
  "alert",
  "brand",
  "neutral",
  "success",
  "warning",
];
const variants: Array<ButtonProps["variant"]> = [
  "flat",
  "outline",
  "minimal",
  "link",
];
const states: Array<ClickableProps<"button">["state"]> = [
  "inactive",
  "hover",
  "focus",
  "disabled",
];

export const allVariants = () => {
  return (
    <ul>
      {sizes.map((size) => (
        <li key={size}>
          {variants.map((variant) => (
            <React.Fragment key={variant}>
              <Heading size="h2">
                {variant} - {size}
              </Heading>
              <table className={styles["variant"]}>
                <tbody>
                  {states.map((state) => (
                    <tr key={state}>
                      <th scope="row">
                        <Text size="body">{state}</Text>
                      </th>
                      {colors.map((color) => (
                        <td key={color} className={styles["color"]}>
                          <Clickable
                            as="button"
                            size={size}
                            color={color}
                            variant={variant}
                            state={state}
                            disabled={state === "disabled"}
                          >
                            Button
                          </Clickable>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          ))}
        </li>
      ))}
    </ul>
  );
};

allVariants.parameters = {
  snapshot: {
    skip: true,
  },
  axe: {
    skip: true,
  },
};
