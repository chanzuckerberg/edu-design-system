import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [(Story) => <div className="m-spacing-size-2">{Story()}</div>],
  tags: ['autodocs', 'version:2.0'],
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default <Text /> rendering',
  },
};

export const BodyXLarge: Story = {
  args: {
    preset: 'body-xl',
    children: 'Body extra-large',
  },
};

export const BodyLarge: Story = {
  args: {
    preset: 'body-lg',
    children: 'Body large',
  },
};

export const BodyMedium: Story = {
  args: {
    preset: 'body-md',
    children: 'Body medium',
  },
};
export const BodySmall: Story = {
  args: {
    preset: 'body-sm',
    children: 'Body small',
  },
};

export const BodyXSmall: Story = {
  args: {
    preset: 'body-xs',
    children: 'Body Xsmall',
  },
};

export const CaptionMedium: Story = {
  args: {
    preset: 'caption-md',
    children: 'Caption medium',
  },
};

/**
 * If a design calls for a different font family to apply to a given preset, you can use a utility class or style to override the font family value.
 */
export const OverridingFontFamily: Story = {
  args: {
    preset: 'body-md',
    children:
      'You can use utility classes to override the font family used for a given size',
    className: '!font-2',
  },
};

/**
 * EDS includes usages for a decorative preset, using the second available font family. It comes in a limited range of sizes.
 */
export const DecorativePresets: Story = {
  render: (args) => (
    <div>
      <Text {...args} preset="headline-decorative-inline-xl">
        Headline Decorative Inline XLarge
      </Text>
      <Text {...args} preset="headline-decorative-inline-lg">
        Headline Decorative Inline Large
      </Text>
      <Text {...args} preset="headline-decorative-inline-md">
        Headline Decorative Inline Medium
      </Text>
      <Text {...args} preset="headline-decorative-inline-sm">
        Headline Decorative Inline Small
      </Text>
    </div>
  ),
};

/**
 * Decorative presets include an offset to help align x-heights between them and non-decorative presets.
 */
export const DecorativePresetCombination: Story = {
  render: (args) => (
    <div>
      <Text {...args} as="span" preset="headline-lg">
        Product
      </Text>
      <Text {...args} as="span" preset="headline-decorative-inline-lg">
        Name
      </Text>
    </div>
  ),
};

/**
 * Here, we demonstrate how to use utility classes to augment the text.
 * Note that when present, `preset` will override the deprecated props.
 */
export const UsingColorTokens: Story = {
  render: (args) => (
    <div>
      <Text {...args} className="text-utility-warning" preset="body-xl">
        using <code>text-utility-warning</code> utility class
      </Text>
      <Text {...args} className="text-utility-favorable" preset="body-lg">
        using <code>text-utility-favorable</code> utility class
      </Text>
      <Text {...args} className="text-utility-critical" preset="body-md">
        using <code>text-utility-critical</code> utility class
      </Text>
    </div>
  ),
};
