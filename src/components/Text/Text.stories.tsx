import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    badges: ['api-2.0', 'theme-2.0'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [(Story) => <div className="m-spacing-size-2">{Story()}</div>],
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

export const OverridingFontFamily: Story = {
  args: {
    preset: 'body-md',
    children:
      'You can use utility classes to override the font family used for a given size',
    className: '!font-secondary',
  },
};

/**
 * Here we demonstrate how to use utility classes to augment the text.
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
