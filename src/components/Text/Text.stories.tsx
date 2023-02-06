import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';

import { Text } from './Text';
import type { Variant } from './Text';
import styles from './Text.stories.module.css';

export default {
  title: 'Components/Text',
  component: Text,
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

export const Spacing: StoryObj<Args> = {
  render: () => (
    <div>
      <Text className={styles['spacing']} spacing="half">
        Spacing Half
      </Text>
      <Text className={styles['spacing']} spacing="1x">
        Spacing 1x
      </Text>
      <Text className={styles['spacing']} spacing="2x">
        Spacing 2x
      </Text>
      <Text className={styles['spacing']}>
        Bottom text to show spacing for spacing 2x
      </Text>
    </div>
  ),
  parameters: {
    badges: [BADGE.DEPRECATED],
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

const TextPassageTemplate = (args: Args) => (
  <Text {...args}>
    <h1>Heading 1</h1>
    <p>
      A text passage contains arbitrary text that might come from a CMS. It
      should live within a container that caps the line length of the text to
      avoid a straining reading experience.
    </p>

    <h2>Heading 2</h2>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <ul>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ul>

    <h3>Heading 3</h3>

    <ol>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ol>

    <p>
      <a href="https://go.czi.team/eds">Lorem ipsum dolor sit amet</a>,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <blockquote>
      <p>This is a quotation from something.</p>
      <cite>Cite source</cite>
    </blockquote>

    <h4>Heading 4</h4>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <hr />

    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>

    <h5>Heading 5</h5>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <p>That is all.</p>
  </Text>
);

export const TextPassage: StoryObj<Args> = {
  render: (args) => <TextPassageTemplate {...args} as="div" />,
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
};

export const TextPassageSmall: StoryObj<Args> = {
  render: (args) => <TextPassageTemplate {...args} as="div" size="sm" />,
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
};

export const TextPassageLarge: StoryObj<Args> = {
  render: (args) => <TextPassageTemplate {...args} as="div" size="lg" />,
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
};
