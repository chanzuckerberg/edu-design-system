import type { StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Text } from './Text';
import type { Variant } from './Text';
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

const variants = [
  'alert',
  'base',
  'brand',
  'inherit',
  'neutral',
  'success',
  'warning',
  'white',
];

type Args = React.ComponentProps<typeof Text>;

export const Body: StoryObj<Args> = {
  args: {
    children: 'Body paragraph',
  },
};

export const BodyLarge: StoryObj<Args> = {
  args: {
    size: 'lg',
    children: 'Body large',
  },
};

export const BodyMedium: StoryObj<Args> = {
  args: {
    size: 'md',
    children: 'Body medium',
  },
};
export const BodySmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    children: 'Body small',
  },
};

export const BodyXSmall: StoryObj<Args> = {
  args: {
    size: 'xs',
    children: 'Body Xsmall',
  },
};

export const Caption: StoryObj<Args> = {
  args: {
    size: 'caption',
    children: 'Caption',
  },
};

export const Overline: StoryObj<Args> = {
  args: {
    size: 'overline',
    children: 'Overline',
  },
};

/**
 * 1) Used mainly for visual regression testing and to show the different color options available.
 * 2) Has problems with snapshots since it has too many components and other stories generate enough confidence for our needs.
 */
export const Variants: StoryObj<Args> = {
  render: () => {
    const Item = ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactElement;
    }) => (
      <div className={clsx(styles['variant__item'], className)}>{children}</div>
    );
    return (
      <div className={styles['variant__table']}>
        {variants.map((variant) => (
          <>
            <Item
              className={styles['variant__item-white']}
              key={`${variant}-white`}
            >
              <Text size="lg" variant={variant as Variant}>
                {variant}
              </Text>
            </Item>
            <Item className={styles['variant__item-light']} key={`${variant}`}>
              <Text size="lg" variant={variant as Variant}>
                {variant}
              </Text>
            </Item>
            <Item
              className={styles['variant__item-dark']}
              key={`${variant}-dark`}
            >
              <Text size="lg" variant={variant as Variant}>
                {variant}
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

export const BodyVariantSuccessBold: StoryObj<Args> = {
  args: {
    children: 'Success variant body text, bold',
    variant: 'success',
    weight: 'bold',
  },
};

export const TextVariantInherit: StoryObj<Args> = {
  render: (args) => (
    <Text size="body" variant="alert">
      This text surrounds the <Text as="span" {...args} /> and shows it should
      inherit variant from the parent
    </Text>
  ),
  args: {
    children: 'Child Text',
    variant: 'inherit',
  },
};
