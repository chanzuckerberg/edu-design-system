import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['autodocs', 'version:2.0.1'],
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
          width: '320px',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '16px',
        }}
      >
        <Radio checked label={label} name="option-long-label" readOnly />
      </div>
    );
  },
};
