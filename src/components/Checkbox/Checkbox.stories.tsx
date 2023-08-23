import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const defaultArgs = {
  disabled: false,
  label: 'Checkbox',
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  parameters: {
    badges: ['1.0'],
  },

  decorators: [
    (Story) => (
      <div
        // Provides spacing to see focus indicator around checkbox.
        className="m-1"
      >
        {Story()}
      </div>
    ),
  ],
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

export const Large: Story = {
  ...Default,
  args: {
    size: 'lg',
  },
};

export const LargeChecked: Story = {
  ...Large,
  args: {
    ...Checked.args,
    ...Large.args,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <table className="border-spacing-8">
      <tbody>
        {/* Un-checked */}
        <tr>
          <td>
            <Checkbox checked={false} disabled label="Disabled" />
          </td>
          <td>
            <Checkbox checked={false} label="Default" readOnly />
          </td>
        </tr>
        {/* Checked */}
        <tr>
          <td>
            <Checkbox checked disabled label="Disabled" />
          </td>
          <td>
            <Checkbox checked label="Default" readOnly />
          </td>
        </tr>
        {/* Indeterminate */}
        <tr>
          <td>
            <Checkbox disabled indeterminate label="Disabled" />
          </td>
          <td>
            <Checkbox indeterminate label="Default" readOnly />
          </td>
        </tr>
      </tbody>
    </table>
  ),
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithoutVisibleLabel: Story = {
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined,
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Checkbox {...args} readOnly />
      <Checkbox {...args} checked readOnly />
      <Checkbox {...args} indeterminate />
      <Checkbox {...args} disabled />
      <Checkbox {...args} checked disabled />
      <Checkbox {...args} disabled indeterminate />
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
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => (
    <div className="flex items-center">
      <Checkbox.Label className="mr-2" htmlFor="test">
        Label on Left
      </Checkbox.Label>
      <Checkbox.Input id="test" />
    </div>
  ),
};
