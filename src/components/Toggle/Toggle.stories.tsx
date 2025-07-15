import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Toggle } from './Toggle';

const InteractiveToggle = ({ checked = false, onChange, ...other }: Args) => {
  const [selected, setSelected] = useState(checked);
  return (
    <Toggle
      checked={selected}
      onChange={() => {
        setSelected(!selected);
        onChange(selected);
      }}
      {...other}
    />
  );
};

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    label: 'Toggle Label',
    checked: false,
  },
  parameters: {
    layout: 'centered',
    badges: ['api-1.4', 'theme-2.0'],
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export default meta;
type Args = React.ComponentProps<typeof Toggle>;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

/**
 * When checked, the slider and selected color adjust to show the selected state
 */
export const WhenChecked: Story = {
  args: {
    checked: true,
  },
};

export const WithSubLabel: Story = {
  args: {
    sublabel: 'sublabel text description here',
  },
};

/**
 * When disabled, the field (and label) are no longer interactive
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * When a visible label is not provided, you must include at minimum an `aria-label` for the field.
 */
export const WithoutLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'Lorem ipsum',
  },
};
