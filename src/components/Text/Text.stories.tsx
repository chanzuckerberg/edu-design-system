import type { StoryObj, Meta } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Text } from './Text';
import type { Variant } from './Text';
import styles from './Text.stories.module.css';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    badges: ['1.0'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

const variants = [
  'inherit',
  'neutral-subtle',
  'neutral-medium',
  'neutral-strong',
  'brand',
  'success',
  'warning',
  'error',
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

export const Callout: StoryObj<Args> = {
  args: {
    size: 'callout',
    children: 'Callout',
  },
};

/**
 * Used mainly for visual regression testing and to show the different color options available.
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
    /**
     * Has problems with snapshots since it has too many components and other stories generate enough confidence for our needs.
     */
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
    <Text size="body" variant="error">
      This text surrounds the <Text as="span" {...args} /> and shows it should
      inherit variant from the parent
    </Text>
  ),
  args: {
    children: 'Child Text',
    variant: 'inherit',
  },
};
