import CloseButton from "./CloseButton";
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import styles from "./CloseButton.stories.module.css";

export default {
  title: "common/CloseButton",
  component: CloseButton,
};

type Args = React.ComponentProps<typeof CloseButton>;

const Template: Story<Args> = (args) => (
  <div className={styles.dismiss}>
    <CloseButton {...args} className={styles.dismiss} />
  </div>
);

const defaultArgs = {
  size: "2rem",
  color: "brand" as const,
};

export const Default = Template.bind(null);
Default.args = {
  ...defaultArgs,
};

export const SmallerSize = Template.bind(null);
SmallerSize.args = {
  ...defaultArgs,
  size: "28px",
};

export const DifferentColor = Template.bind(null);
DifferentColor.args = {
  ...defaultArgs,
  color: "alert" as const,
};
