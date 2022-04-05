import type { StoryObj } from '@storybook/react';
import React from 'react';
import Tag, { stylesByColor } from './Tag';
import type { Color } from './Tag';
import styles from './Tag.stories.module.css';
import Icon from '../Icon';

// TODO: (Andrew): look into getting rid of the `as` cast. The `stylesByColor` object's keys are
// members of Color. Can TypeScript understand that?
const colorOptions = Object.keys(stylesByColor) as Color[];

export default {
  title: 'Molecules/Messaging/Tag',
  component: Tag,

  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colorOptions,
      },
    },
  },

  args: {
    children: 'Tag text',
    color: 'default' as const,
  },
};

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return (
          <Tag key={color} {...args} color={color}>
            {color}
          </Tag>
        );
      })}
    </div>
  ),
};

export const OutlineVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {colorOptions.map((color) => {
        return (
          <Tag key={color} {...args} color={color} variant="outline">
            {color}
          </Tag>
        );
      })}
    </div>
  ),
};

/**
 * TODO: ensure Icon rendered properly once migrated from v0 and add color
 * Snap tests disabled due to TypeError in <Icon> but should be turned back on once Icon is migrated.
 */
export const WithIcon: StoryObj<Args> = {
  ...Default,
  args: {
    icon: <Icon name="warning" />,
  },
  parameters: {
    snapshot: { skip: true },
  },
};

export const WithLongTextAndIcon: StoryObj<Args> = {
  ...Default,
  args: {
    children: 'This tag has a really long text message',
    icon: <Icon name="warning" />,
  },
  parameters: {
    snapshot: { skip: true },
  },
};
