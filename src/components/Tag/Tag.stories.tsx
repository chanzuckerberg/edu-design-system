import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import Tag, { VARIANTS } from './Tag';
import styles from './Tag.stories.module.css';
import Icon from '../Icon';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: VARIANTS,
    },
  },
  args: {
    text: 'Tag text',
    variant: 'neutral' as const,
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tag>;

export const Default: StoryObj<Args> = {};

export const ColorVariants: StoryObj<Args> = {
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return (
          <Tag
            data-testid="test"
            key={variant}
            {...args}
            text={variant}
            variant={variant}
          />
        );
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
            hasOutline
            text={variant}
            variant={variant}
          />
        );
      })}
    </div>
  ),
};

export const WithIcon: StoryObj<Args> = {
  ...Default,
  args: {
    icon: <Icon name="favorite" purpose="decorative" />,
  },
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return (
          <Tag
            key={variant}
            {...args}
            hasOutline
            text={variant}
            variant={variant}
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
    icon: <Icon name="star" purpose="decorative" />,
  },
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return (
          <Tag key={variant} {...args} hasOutline={true} variant={variant} />
        );
      })}
    </div>
  ),
};
