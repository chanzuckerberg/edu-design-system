import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Tag, VARIANTS } from './Tag';
import Icon from '../Icon';
import styles from './Tag.stories.module.css';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    badges: ['1.0'],
  },
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
type Story = StoryObj<Args>;

export const Default: Story = {};

/**
 * `Tag` variants correspond to named use cases. Each variant defines a text color, background/surface color, and potential outline color.
 */
export const Variants: Story = {
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

/**
 * `Tag` can have an outside border, which corresponds to the variant selected. When false, the border will be set to match the background color.
 */
export const OutlineVariants: Story = {
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

/**
 * Icons can be added to the left side of the text in the tag.
 */
export const WithIcon: Story = {
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

/**
 * `Tag` can support lengthy text, but should be kept as brief as possible.
 */
export const WithLongTextAndIcon: Story = {
  ...Default,
  args: {
    text: 'This tag has a really long text message',
    icon: <Icon name="star" purpose="decorative" />,
  },
  render: (args) => (
    <div className={styles.tagList}>
      {VARIANTS.map((variant) => {
        return <Tag key={variant} {...args} hasOutline variant={variant} />;
      })}
    </div>
  ),
};
