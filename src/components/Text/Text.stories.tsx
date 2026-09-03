import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';
import { Text } from './Text';

import { presets } from '../../util/variant-types';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      subtitle:
        'The Text component decorates `<p>`, `<span>`, and `<div>` with typographic variants.',
    },
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
  tags: ['autodocs', 'version:3.0'],
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default <Text /> rendering',
  },
};

/**
 * Every preset `Text` accepts. Presets that belong to a single component are not in this
 * list, and not available on `Text`: they carry that component's own treatment, so they
 * can change when the component does.
 */
export const AllPresets: Story = {
  render: (args) => (
    <div>
      {presets.map((preset) => (
        <Text key={preset} preset={preset}>
          {preset}
        </Text>
      ))}
    </div>
  ),
};

export const CaptionMedium: Story = {
  args: {
    preset: 'caption-md',
    children: 'Caption medium',
  },
};

export const CodePresets: Story = {
  render: (args) => (
    <div>
      <Text {...args} preset="code-xl">
        Code Extra Large
      </Text>
      <Text {...args} preset="code-lg">
        Code Large
      </Text>
      <Text {...args} preset="code-md">
        Code Medium
      </Text>
      <Text {...args} preset="code-sm">
        Code Small
      </Text>
      <Text {...args} preset="code-xs">
        Code Extra Small
      </Text>
    </div>
  ),
};

/**
 * If a design calls for a different font family to apply to a given preset, you can use a utility class or style to override the font family value.
 */
export const OverridingFontFamily: Story = {
  args: {
    preset: 'body-md',
    children:
      'You can use utility classes to override the font family used for a given size',
    className: '!font-3',
  },
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
