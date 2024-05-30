import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Heading>;
type Story = StoryObj<Args>;

/**
 * The default `Heading` sets a level-one header tag `<h1>` with the prescribed default preset.
 */
export const Default: Story = {
  args: {
    children: 'Default Heading',
  },
};

/**
 * When using `h1`, the default preset maps to `headline-lg`
 */
export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

/**
 * When using `h2`, the default preset maps to `headline-md`
 */
export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

/**
 * When using `h3`, the default preset maps to `headline-sm`
 */
export const Heading3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

/**
 * When using `h4`, the default preset maps to `title-md`
 */
export const Heading4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

/**
 * When using `h5`, the default preset maps to `title-sm`
 */
export const Heading5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

/**
 * When using `h6`, the default preset maps to `title-xs`
 */
export const Heading6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

/**
 * Here we demonstrate how to use utility classes to augment the headings.
 */
export const UsingColorTokens: Story = {
  render: (args) => (
    <div>
      <Heading {...args} className="text-utility-warning" preset="title-md">
        using <code>text-utility-warning</code> utility class
      </Heading>
      <Heading
        {...args}
        as="h2"
        className="text-utility-success"
        preset="title-md"
      >
        using <code>text-utility-success</code> utility class and preset
        override
      </Heading>
      <Heading {...args} className="text-utility-error" preset="title-md">
        using <code>text-utility-error</code> utility class
      </Heading>
      <Heading
        className="text-[var(--eds-theme-color-text-utility-success)]"
        preset="title-md"
      >
        using color with token in utility class and preset override
      </Heading>
    </div>
  ),
};
