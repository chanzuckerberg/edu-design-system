import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Radio>;
type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    name: 'option-1',
    label: 'Option 1',
    checked: false,
    readOnly: true,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    name: 'option-checked',
    checked: true,
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    name: 'option-disabled',
    disabled: true,
  },
};

export const DisabledAndChecked: Story = {
  args: {
    ...Disabled.args,
    checked: true,
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    name: 'option-error',
    isError: true,
  },
};

export const ErrorAndChecked: Story = {
  args: {
    ...Error.args,
    name: 'option-error',
    checked: true,
    readOnly: true,
  },
};

export const WithSublabel: Story = {
  args: {
    ...Default.args,
    subLabel: 'Some additional label text',
  },
};

export const WithoutVisibleLabel: Story = {
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'unchecked radio button',
  },
};

export const LongLabels = {
  render: () => {
    const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    return (
      <div
        style={{
          display: 'grid',
          width: '20rem',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '1rem',
        }}
      >
        <Radio checked label={label} name="option-long-label" readOnly />
      </div>
    );
  },
};
