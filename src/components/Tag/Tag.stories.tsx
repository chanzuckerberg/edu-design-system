import type { StoryObj } from "@storybook/react";
import React from "react";
import Icon from "../Icon";
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
    variant: {
      control: {
        type: "select",
        options: colorOptions,
      },
    },
  },

  args: {
    text: "Tag text",
    variant: "warning" as const,
  },
};

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return <Tag key={color} {...args} variant={color} />;
      })}
    </div>
  ),
};

export const OutlineVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return <Tag key={color} {...args} hasOutline={true} variant={color} />;
      })}
    </div>
  ),
};

export const WithIcon: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return (
          <Tag
            key={color}
            {...args}
            icon={
              <Icon
                key="icon"
                name="warning"
                purpose="informative"
                title="warning"
              />
            }
            variant={color}
          />
        );
      })}
    </div>
  ),
};

export const WithLongTextAndIcon: StoryObj<Args> = {
  ...Default,
  args: {
    text: "This tag has a really long text message",
    icon: (
      <Icon key="icon" name="warning" purpose="informative" title="warning" />
    ),
  },
};
