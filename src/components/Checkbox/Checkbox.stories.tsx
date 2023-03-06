import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import CheckboxInput from '../CheckboxInput';
import CheckboxLabel from '../CheckboxLabel';

const defaultArgs = {
  disabled: false,
  label: 'Checkbox',
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  argTypes: {
    // For some reason Storybook does not infer all `checked` correctly;
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
  },
  decorators: [
    (Story) => (
      <div
        // Provides spacing to see focus indicator around checkbox.
        className="m-1"
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Checkbox>;

export const Default: StoryObj<Args> = {};

export const Checked: StoryObj<Args> = {
  ...Default,
  args: {
    defaultChecked: true,
  },
};

export const Medium: StoryObj<Args> = {
  ...Default,
  args: {
    size: 'md',
  },
};

export const MediumChecked: StoryObj<Args> = {
  ...Medium,
  args: {
    ...Checked.args,
    ...Medium.args,
  },
};

export const Large: StoryObj<Args> = {
  ...Default,
  args: {
    size: 'lg',
  },
};

export const LargeChecked: StoryObj<Args> = {
  ...Large,
  args: {
    ...Checked.args,
    ...Large.args,
  },
};

export const Indeterminate: StoryObj<Args> = {
  args: {
    checked: 'indeterminate',
    readOnly: true, // Prevent console warning about the field being read only
  },
};

export const Disabled: StoryObj<Args> = {
  render: () => (
    <table className="border-spacing-8">
      <tbody>
        {[false, true, 'indeterminate' as const].map((checked, i) => (
          // FIXME
          // eslint-disable-next-line react/no-array-index-key
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
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithoutVisibleLabel: StoryObj<Args> = {
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined,
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Checkbox {...args} readOnly />
      <Checkbox {...args} checked readOnly />
      <Checkbox {...args} checked="indeterminate" readOnly />
      <Checkbox {...args} disabled />
      <Checkbox {...args} checked disabled />
      <Checkbox {...args} checked="indeterminate" disabled />
    </div>
  ),
};

export const LongLabels = {
  render: () => {
    const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    return (
      <div className="grid w-80 grid-cols-2 gap-4">
        <Checkbox label={label} readOnly />
        <Checkbox label={label} readOnly size="md" />
        <Checkbox disabled label={label} />
        <Checkbox disabled label={label} size="md" />
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
    <div className="flex items-center">
      <CheckboxLabel className="mr-2" htmlFor="test">
        Label on Left
      </CheckboxLabel>
      <CheckboxInput id="test" />
    </div>
  ),
};
