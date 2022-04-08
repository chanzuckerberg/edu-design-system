import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { CheckboxInput } from './CheckboxInput';

export default {
  title: 'Atoms/Forms/CheckboxInput',
  component: CheckboxInput,
  argTypes: {
    // For some reason Storybook does not infer all `checked` correctly;
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
  },
  args: {
    'aria-label': 'checkbox',
    id: 'checkbox',
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
} as Meta;

type Args = React.ComponentProps<typeof CheckboxInput>;
export const Default: StoryObj<Args> = {};

/**
 * Controlled example to make checked stories interactive.
 */
function CheckedExample(args: Args) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return <CheckboxInput checked={checked} onChange={handleChange} {...args} />;
}

export const Checked: StoryObj<Args> = {
  render: () => <CheckedExample id="checked-example" />,
};

export const Indeterminate: StoryObj<Args> = {
  ...Default,
  args: {
    checked: 'indeterminate',
    readOnly: true,
  },
};

export const Disabled: StoryObj<Args> = {
  ...Default,
  render: (args) => (
    <div>
      <CheckboxInput disabled {...args} id="disabled" />
      <br />
      <CheckboxInput checked disabled {...args} id="disabled-checked" />
      <br />
      <CheckboxInput
        checked="indeterminate"
        disabled
        {...args}
        id="disabled-indeterminate"
      />
    </div>
  ),
};
