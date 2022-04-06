import type { StoryObj } from '@storybook/react';
import React from 'react';
import Tag, { VARIANTS } from './Tag';
import styles from './Tag.stories.module.css';
import Icon from '../Icon';

export default {
  title: 'Molecules/Messaging/Tag',
  component: Tag,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: VARIANTS,
      },
    },
  },

  args: {
    text: 'Tag text',
    variant: 'default' as const,
  },
};

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return <Tag key={variant} {...args} variant={variant} text={variant} />;
      })}
    </div>
  ),
};

export const OutlineVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return (
          <Tag
            key={variant}
            {...args}
            variant={variant}
            text={variant}
            hasOutline={true}
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
      {VARIANTS.map((variant) => {
        return (
          <Tag
            key={variant}
            {...args}
            variant={variant}
            text={variant}
            hasOutline={true}
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
      {VARIANTS.map((variant) => {
        return (
          <Tag key={variant} {...args} variant={variant} hasOutline={true} />
        );
      })}
    </div>
  ),
};
