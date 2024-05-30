import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
    label: 'Checkbox',
  },
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0'],
  },

  decorators: [(Story) => <div className="m-1">{Story()}</div>],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  ...Default,
  args: {
    defaultChecked: true,
  },
};

export const Medium: Story = {
  ...Default,
  args: {
    size: 'md',
  },
};

export const MediumChecked: Story = {
  ...Medium,
  args: {
    ...Checked.args,
    ...Medium.args,
  },
};

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
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
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
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};
