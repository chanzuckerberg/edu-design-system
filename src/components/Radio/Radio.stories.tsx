import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: {
    label: 'Option 1',
    checked: false,
  },
  parameters: {
    badges: ['1.0'],
  },
  decorators: [(Story) => <div style={{ margin: '0.25rem' }}>{Story()}</div>],
};

export default meta;

/**
 * Controlled example to make checked stories interactive.
 */
function RadioExample(args: Args) {
  const [checked, setChecked] = React.useState(args.checked);
  const handleChange = () => {
    setChecked(!checked);
  };

  return <Radio {...args} checked={checked} onChange={handleChange} />;
}

type Args = React.ComponentProps<typeof Radio>;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => <RadioExample {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => <RadioExample {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => <RadioExample {...args} />,
};

export const CheckedMedium: Story = {
  args: {
    checked: true,
    size: 'md',
  },
  render: (args) => <RadioExample {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <RadioExample {...args} />,
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithoutVisibleLabel: Story = {
  render: () => (
    <>
      <Radio aria-label="unchecked radio" readOnly />
      <Radio aria-label="checked radio" checked readOnly />
      <Radio aria-label="unchecked disabled radio" disabled />
      <Radio aria-label="checked disabled radio" checked disabled />
    </>
  ),
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
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
        <Radio label={label} readOnly />
        <Radio label={label} readOnly size="md" />
        <Radio disabled label={label} />
        <Radio disabled label={label} size="md" />
      </div>
    );
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithCustomPositioning = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Radio.Label htmlFor="test">Label on Left</Radio.Label>
      <Radio.Input checked={false} id="test" readOnly />
    </div>
  ),
};
