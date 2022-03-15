import type { StoryObj } from "@storybook/react";
import React from "react";
import WarningRoundedIcon from "../Icons/WarningRounded";
import Tag, { stylesByColor } from "./Tag";
import type { Color } from "./Tag";
import styles from "./Tag.stories.module.css";

// todo (Andrew): look into getting rid of the `as` cast. The `stylesByColor` object's keys are
// members of Color. Can TypeScript understand that?
const colorOptions = Object.keys(stylesByColor) as Color[];

export default {
  title: "Tag",
  component: Tag,

  argTypes: {
    color: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
  },

  args: {
    children: "Tag text",
    color: "warning" as const,
  },
};

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return <Tag key={color} {...args} color={color} />;
      })}
    </div>
  ),
};

export const OutlineVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return <Tag key={color} {...args} color={color} variant="outline" />;
      })}
    </div>
  ),
};

export const WithIcon: StoryObj<Args> = {
  ...Default,
  args: {
    icon: (
      <WarningRoundedIcon key="icon" purpose="informative" title="warning" />
    ),
  },
};

export const WithLongTextAndIcon: StoryObj<Args> = {
  ...Default,
  args: {
    children: "This tag has a really long text message",
    icon: (
      <WarningRoundedIcon key="icon" purpose="informative" title="warning" />
    ),
  },
};
