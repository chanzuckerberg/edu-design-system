import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField } from './TextareaField';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/TextareaField',
  component: TextareaField,
  args: {
    placeholder: 'Enter long-form text here',
    defaultValue: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
    praesentium, commodi eligendi asperiores quis dolorum porro.`,
    label: 'Textarea Field',
    rows: 5,
    fieldNote: 'Longer Field description',
    spellCheck: false,
  },
  parameters: {
    badges: ['1.3'],
  },
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: (args) => (
    <TextareaField aria-label="Text Label" {...args}></TextareaField>
  ),
};

export const UsingChildren: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
    praesentium, commodi eligendi asperiores quis dolorum porro.`,
    defaultValue: '',
  },
};

export const WithNoDefaultValue: Story = {
  args: {
    defaultValue: undefined,
    fieldNote: undefined,
  },
};

export const WhenDisabled: Story = {
  args: {
    disabled: true,
    rows: 2,
  },
  parameters: {
    axe: {
      // Disabled input does not need to meet color contrast
      disabledRules: ['color-contrast'],
    },
  },
};

export const WhenError: Story = {
  args: {
    isError: true,
    fieldNote: 'Text should be at least 100 characters',
  },
};

export const WhenInvalid: Story = {
  args: {
    maxLength: 10,
  },
};

export const WhenRequired: Story = {
  args: {
    required: true,
  },
};

export const WithADifferentSize: Story = {
  args: {
    rows: 10,
  },
};

export const WithAMaxLength: Story = {
  args: {
    rows: 10,
    maxLength: 144,
    required: true,
  },
  render: (args) => <TextareaField {...args} />,
};
