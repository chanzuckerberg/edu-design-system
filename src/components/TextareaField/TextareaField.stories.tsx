import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField } from './TextareaField';

export default {
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
  },
  parameters: {
    badges: ['1.3', BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof TextareaField>;

export const Default: StoryObj<Args> = {
  render: (args) => (
    <TextareaField aria-label="Text Label" {...args}></TextareaField>
  ),
};

export const UsingChildren: StoryObj<Args> = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
    praesentium, commodi eligendi asperiores quis dolorum porro.`,
    defaultValue: '',
  },
};

export const WithNoDefaultValue: StoryObj<Args> = {
  args: {
    defaultValue: '',
  },
};

export const WhenDisabled: StoryObj<Args> = {
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

export const WhenError: StoryObj<Args> = {
  args: {
    isError: true,
    fieldNote: 'Text should be at least 100 characters',
  },
};

export const WhenInvalid: StoryObj<Args> = {
  args: {
    maxLength: 10,
  },
};

export const WhenRequired: StoryObj<Args> = {
  args: {
    required: true,
  },
};

export const WithADifferentSize: StoryObj<Args> = {
  args: {
    rows: 10,
  },
};
