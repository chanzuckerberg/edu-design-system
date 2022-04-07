import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import Checkbox, { CheckboxInput, Label } from './Checkbox';

const defaultArgs = {
  disabled: false,
  label: 'Checkbox',
};

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: defaultArgs,
  argTypes: {
    // For some reason Storybook does not infer all props correctly;
    // we manually include the most relevant controls here.
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
    size: {
      description: 'Size of the checkbox label.',
      control: 'radio',
      options: ['small', 'medium'],
      table: { defaultValue: { summary: 'medium' } },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem', // Provides spacing to see focus indicator around checkbox.
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Checkbox>;

/**
 * Controlled example to make checked stories interactive.
 */
function CheckedExample(args: Args) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} {...args} />;
}

export const Default: StoryObj<Args> = {};

export const Checked: StoryObj<Args> = {
  render: () => <CheckedExample {...defaultArgs} />,
};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    size: 'small',
  },
};

export const SmallChecked: StoryObj<Args> = {
  render: () => <CheckedExample size="small" {...defaultArgs} />,
};

export const Indeterminate: StoryObj<Args> = {
  ...Default,
  args: {
    checked: 'indeterminate',
    readOnly: true,
  },
};

export const Disabled = {
  render: () => (
    <table className="border-separate" style={{ borderSpacing: '2rem' }}>
      <tbody>
        {[false, true, 'indeterminate' as const].map((checked, i) => (
          <tr key={i}>
            <td>
              <Checkbox checked={checked} disabled label="Disabled" />
            </td>
            <td>
              <Checkbox checked={checked} label="Default" readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  parameters: {
    // mainly for demonstration purposes
    snapshot: { skip: true },
  },
};

export const WithoutVisibleLabel: StoryObj<Args> = {
  ...Default,
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined,
  },
};

export const LongLabels = {
  render: () => {
    const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    return (
      <div className="w-80 grid grid-cols-2 gap-4">
        <Checkbox label={label} />
        <Checkbox label={label} size="small" />
      </div>
    );
  },
};

export const WithCustomPositioning = {
  render: () => (
    <span>
      <Label htmlFor="test" text="label on left" />
      <CheckboxInput id="test" />
    </span>
  ),
};
