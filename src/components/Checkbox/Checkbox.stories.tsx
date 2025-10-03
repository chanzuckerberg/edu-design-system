import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['autodocs', 'version:2.0'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithSublabel: Story = {
  args: { subLabel: 'Additional descriptive text' },
};

/**
 * Checkboxes can have an error state
 */
export const Error: Story = {
  args: {
    isError: true,
    label: 'In error state',
  },
};

/**
 * Checkboxes can, of course, can be checked
 */
export const Checked: Story = {
  ...Default,
  args: {
    defaultChecked: true,
  },
};

/**
 * The checkbox glyph is not affected by any wrapping of font resizing
 */
export const GlyphIsConsistent: Story = {
  ...Default,
  args: {
    defaultChecked: true,
  },
  decorators: [(Story) => <div style={{ fontSize: '10px' }}>{Story()}</div>],
};

/**
 * Checkboxes can be in an indeterminate state, marking a partially checked state
 */
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

/**
 * `Checkbox` can be disabled in each available state.
 */
export const Disabled: Story = {
  render: (args) => (
    <div className="p-0">
      <Checkbox {...args} checked={false} disabled label="Disabled" />
      <Checkbox {...args} checked disabled label="Disabled" />
      <Checkbox {...args} disabled indeterminate label="Disabled" />
    </div>
  ),
};

/**
 * `Checkbox` doesn't require a visible label if `aria-label` is provided.
 */
export const WithoutVisibleLabel: Story = {
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined,
  },
};

/**
 * Long labels will sit adjacent to the text box, and allow clicking to change the state of the checkbox. When constrained,
 * the text will wrap, fixing the checkbox to the top edge.
 */
export const LongLabels: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
};
