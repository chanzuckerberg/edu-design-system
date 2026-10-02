import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      subtitle: 'A component for styling heading text (`<h1>`-`<h6>`).',
    },
    layout: 'centered',
  },
  tags: ['autodocs', 'version:3.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Heading>;
type Story = StoryObj<Args>;

/**
 * The default `Heading` sets a level-one header tag `<h1>` with the prescribed default preset.
 *
 * `as` comes from document structure and `preset` comes from design: set `as` to the level
 * the page outline calls for, and `preset` only when the design asks for a treatment other
 * than that level's default.
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
 * When using `h4`, the default preset maps to `title-lg`
 */
export const Heading4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

/**
 * When using `h5`, the default preset maps to `title-md`
 */
export const Heading5: Story = {
  args: {
    as: 'h5',
    children: 'Heading 5',
  },
};

/**
 * When using `h6`, the default preset maps to `title-sm`
 */
export const Heading6: Story = {
  args: {
    as: 'h6',
    children: 'Heading 6',
  },
};

/**
 * `as` and `preset` answer different questions, so they can be set independently.
 *
 * Here the outline is a page title followed by two sections, so the tags are `h1`, `h2`,
 * `h2`. The second section is drawn smaller in the design, so it takes a `preset` of
 * `title-md` while staying an `h2`. Screen readers still read three headings at the levels
 * the outline calls for.
 */
export const StructureAndTreatment: Story = {
  render: (args) => (
    <div>
      <Heading {...args} as="h1">
        Page title, default <code>headline-lg</code>
      </Heading>
      <Heading {...args} as="h2">
        Section, default <code>headline-md</code>
      </Heading>
      <Heading {...args} as="h2" preset="title-md">
        Section, still an <code>h2</code>, drawn as <code>title-md</code>
      </Heading>
    </div>
  ),
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
        className="text-utility-favorable"
        preset="title-md"
      >
        using <code>text-utility-favorable</code> utility class and preset
        override
      </Heading>
      <Heading {...args} className="text-utility-critical" preset="title-md">
        using <code>text-utility-critical</code> utility class
      </Heading>
      <Heading
        className="text-[var(--eds-theme-color-text-utility-favorable)]"
        preset="title-md"
      >
        using color with token in utility class and preset override
      </Heading>
    </div>
  ),
};
