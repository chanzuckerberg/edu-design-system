import { StoryObj } from '@storybook/react';
import React from 'react';
import { CheckboxLabel } from './CheckboxLabel';

export default {
  title: 'Atoms/Forms/CheckboxLabel',
  component: CheckboxLabel,
  args: {
    text: 'Short label',
    htmlFor: 'id',
  },
};

type Args = React.ComponentProps<typeof CheckboxLabel>;

export const Default: StoryObj<Args> = {};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    size: 'small',
  },
};

export const LongLabels: StoryObj<Args> = {
  ...Default,
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  render: (args) => (
    <>
      <CheckboxLabel {...args} size="medium" />
      <br />
      <CheckboxLabel {...args} size="small" />
    </>
  ),
};

export const Disabled: StoryObj<Args> = {
  ...Default,
  args: {
    disabled: true,
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
  render: (args) => (
    <div>
      <CheckboxLabel {...args} size="medium" />
      <br />
      <CheckboxLabel {...args} size="small" />
      <br />
      <CheckboxLabel
        {...args}
        size="medium"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <br />
      <CheckboxLabel
        {...args}
        size="small"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>
  ),
};
