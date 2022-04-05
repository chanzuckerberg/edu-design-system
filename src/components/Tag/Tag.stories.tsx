import type { StoryObj } from '@storybook/react';
import React from 'react';
import Tag, { COLORS } from './Tag';
import styles from './Tag.stories.module.css';
import Icon from '../Icon';

export default {
  title: 'Molecules/Messaging/Tag',
  component: Tag,

  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLORS,
      },
    },
  },

  args: {
    text: 'Tag text',
    color: 'default' as const,
  },
};

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {COLORS.map((color) => {
        return <Tag key={color} {...args} color={color} text={color} />;
      })}
    </div>
  ),
};

export const OutlineVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {COLORS.map((color) => {
        return (
          <Tag
            key={color}
            {...args}
            color={color}
            text={color}
            variant="outline"
          />
        );
      })}
    </div>
  ),
};

/**
 * Snap tests disabled due to TypeError in <Icon> but should be turned back on once fixed.
 */
export const WithIcon: StoryObj<Args> = {
  ...Default,
  args: {
    icon: <Icon purpose="decorative" name="favorite" />,
  },
  parameters: {
    snapshot: { skip: true },
  },
  render: (args) => (
    <div className={styles.tagList}>
      {COLORS.map((color) => {
        return (
          <Tag
            key={color}
            {...args}
            color={color}
            text={color}
            variant="outline"
          />
        );
      })}
    </div>
  ),
};

export const WithLongTextAndIcon: StoryObj<Args> = {
  ...Default,
  args: {
    text: 'This tag has a really long text message',
    icon: <Icon purpose="decorative" name="star" />,
  },
  parameters: {
    snapshot: { skip: true },
  },
  render: (args) => (
    <div className={styles.tagList}>
      {COLORS.map((color) => {
        return <Tag key={color} {...args} color={color} variant="outline" />;
      })}
    </div>
  ),
};
