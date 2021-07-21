// @flow

import * as React from "react";
import Tag, { stylesByColor } from "./Tag";
import type { Color } from "./Tag";
import type { Story } from "@storybook/react";
import WarningIcon from "../SVGIcon/Icons/Warning";
import styles from "./Tag.stories.module.css";

const colorOptions: Array<Color> = Object.keys(stylesByColor);

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

type Args = React.ElementProps<typeof Tag>;

const Template: Story<Args> = (args) => <Tag {...args} />;

const defaultArgs = {
  children: "Tag text",
  color: "warning",
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
