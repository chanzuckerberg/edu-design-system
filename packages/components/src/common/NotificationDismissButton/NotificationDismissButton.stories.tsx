import NotificationDismissButton from "./NotificationDismissButton";
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import styles from "./NotificationDismissButton.stories.module.css";

export default {
  title: "common/NotificationDismissButton",
  component: NotificationDismissButton,
};

type Args = React.ComponentProps<typeof NotificationDismissButton>;

const Template: Story<Args> = (args) => (
  <div className={styles.dismiss}>
    <NotificationDismissButton {...args} className={styles.dismiss} />
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
