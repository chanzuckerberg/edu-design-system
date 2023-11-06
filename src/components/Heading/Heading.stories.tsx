import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    badges: ['1.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Heading>;
type Story = StoryObj<Args>;

export const Heading1: Story = {
  args: {
    size: 'h1',
    preset: 'headline-lg',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    size: 'h2',
    preset: 'headline-md',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    size: 'h3',
    preset: 'headline-sm',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    size: 'h4',
    preset: 'title-md',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    size: 'h5',
    preset: 'title-sm',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    size: 'h6',
    preset: 'title-xs',
    children: 'Heading 6',
  },
};

export const Heading7: Story = {
  args: {
    size: 'h7',
    children: 'Heading 7',
  },
};

/**
 * Here we demonstrate how to use utility classes to augment the headings.
 * Note that when present, `preset` will override the deprecated props.
 */
export const UsingColorTokens: Story = {
  render: (args) => (
    <div>
      <Heading
        {...args}
        className="text-utility-warning"
        preset="title-md"
        size="h1"
      >
        using <code>text-utility-warning</code> utility class
      </Heading>
      <Heading
        {...args}
        as="h2"
        className="text-utility-success"
        preset="title-md"
        size="h3"
      >
        using <code>text-utility-success</code> utility class
      </Heading>
      <Heading
        {...args}
        className="text-utility-error"
        preset="title-md"
        size="h3"
        variant="white"
      >
        using <code>text-utility-error</code> utility class
      </Heading>
      <Heading
        preset="title-md"
        size="h4"
        style={{ color: 'var(--eds-theme-color-text-utility-success)' }}
      >
        using inline color
      </Heading>
    </div>
  ),
};
