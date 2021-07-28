import Tag, { stylesByColor } from "./Tag";
import type { Color } from "./Tag";
import React from "react";
import type { Story } from "@storybook/react";
import WarningIcon from "../SvgIcon/Icons/Warning";
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
};

type Args = React.ComponentProps<typeof Tag>;

const Template: Story<Args> = (args) => <Tag {...args} />;

const defaultArgs = {
  children: "Tag text",
  color: "warning" as const,
};

export const Default = Template.bind(null);
Default.args = {
  ...defaultArgs,
};

export const ColorVariants: Story<Args> = (args) => (
  <div className={styles.tagList}>
    {colorOptions.map((color) => {
      return <Tag key={color} {...args} color={color} />;
    })}
  </div>
);
ColorVariants.args = {
  ...defaultArgs,
};

export const OutlineVariants: Story<Args> = (args) => (
  <div className={styles.tagList}>
    {colorOptions.map((color) => {
      return <Tag key={color} {...args} color={color} variant="outline" />;
    })}
  </div>
);
OutlineVariants.args = {
  ...defaultArgs,
};

export const WithIcon = Template.bind(null);
WithIcon.args = {
  ...defaultArgs,
  icon: <WarningIcon key="icon" role="img" title="warning" />,
};

export const WithLongTextAndIcon = Template.bind(null);
WithLongTextAndIcon.args = {
  ...defaultArgs,
  children: "This tag has a really long text message",
  icon: <WarningIcon key="icon" role="img" title="warning" />,
};
