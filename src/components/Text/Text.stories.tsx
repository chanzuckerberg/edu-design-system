import type { StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import Text from './Text';
import type { Color } from './Text';
import styles from './Text.stories.module.css';

export default {
  title: 'Atoms/Text/Text',
  component: Text,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

const colors = [
  'alert',
  'base',
  'brand',
  'info',
  'inherit',
  'neutral',
  'success',
  'warning',
  'white',
];

type Args = React.ComponentProps<typeof Text>;

export const Body: StoryObj<Args> = {
  args: {
    children: 'Body paragraph 16/24',
  },
};

export const BodySmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    children: 'Body small 14/20',
  },
};

export const BodyXSmall: StoryObj<Args> = {
  args: {
    size: 'xs',
    children: 'Body Xsmall 12/16',
  },
};

export const Caption: StoryObj<Args> = {
  args: {
    size: 'caption',
    children: 'Caption 12/20',
  },
};

export const Overline: StoryObj<Args> = {
  args: {
    size: 'overline',
    children: 'Overline 12/20',
  },
};

/**
 * 1) Used mainly for visual regression testing and to show the different color options available.
 * 2) Has problems with snapshots since it has too many components and other stories generate enough confidence for our needs.
 */
export const Colors: StoryObj<Args> = {
  render: () => {
    const Item = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactElement;
    }) => (
      <div className={clsx(styles['color__item'], className)}>{children}</div>
    );
    return (
      <div className={styles['color__table']}>
        {colors.map((color) => (
          <>
            <Item
              key={`${color}-white`}
              className={styles['color__item-white']}
            >
              <Text size="h3" color={color as Color}>
                {color}
              </Text>
            </Item>
            <Item key={`${color}`} className={styles['color__item-light']}>
              <Text size="h3" color={color as Color}>
                {color}
              </Text>
            </Item>
            <Item key={`${color}-dark`} className={styles['color__item-dark']}>
              <Text size="h3" color={color as Color}>
                {color}
              </Text>
            </Item>
          </>
        ))}
      </div>
    );
  },
  parameters: {
    /* 2 */
    axe: {
      skip: true,
    },
    snapshot: {
      skip: true,
    },
  },
};

export const BodyColorInfoBold: StoryObj<Args> = {
  args: {
    children: 'Info color body text, bold',
    color: 'info',
    weight: 'bold',
  },
};

export const TextColorInherit: StoryObj<Args> = {
  render: (args) => (
    <Text color="alert" size="body">
      This text surrounds the <Text as="span" {...args} /> and shows it should
      inherit color from the parent
    </Text>
  ),
  args: {
    children: 'Child Text',
    color: 'inherit',
  },
};
