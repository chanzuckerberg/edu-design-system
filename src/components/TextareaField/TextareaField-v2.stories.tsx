import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField } from './TextareaField-v2';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/V2/TextareaField',
  component: TextareaField,
  args: {
    className: 'w-96',
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
    layout: 'centered',
    badges: ['intro-1.3', 'current-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: (args) => (
    <TextareaField aria-label="Text Label" {...args}></TextareaField>
  ),
};

/**
 * You can specify the content of `TextareaField` by using children. Convenient for cases where
 * specifying `value` or `defaultValue` is inconvenient.
 */
export const WhenUsingChildren: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
    dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
    praesentium, commodi eligendi asperiores quis dolorum porro.`,
    defaultValue: '',
  },
};

/**
 * `TextareaField` does not require any initial content.
 */
export const WhenNoDefaultValue: Story = {
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

export const WhenReadOnly: Story = {
  args: {
    readOnly: true,
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

export const WhenWarning: Story = {
  args: {
    isWarning: true,
    fieldNote: 'Text should be at least 100 characters',
  },
};

export const WhenRequired: Story = {
  args: {
    required: true,
    showHint: true,
  },
};

export const WhenOptional: Story = {
  args: {
    required: false,
    showHint: true,
  },
};

/**
 * You can size `TextareaField` by specifying `row` attribute, inherited from
 * [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
 */
export const WithADifferentSize: Story = {
  args: {
    rows: 10,
  },
};

/**
 * You can lock the maximum length of the text content of `TextareaField`. When setting `maxLength`,
 * the field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * behavior (e.g., prevent further text from being typed, prevent keydown events, etc.).
 */
export const WithAMaxLength: Story = {
  args: {
    rows: 10,
    maxLength: 144,
    required: true,
  },
  render: (args) => <TextareaField {...args} />,
};

/**
 * If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use
 * `recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and
 * emit any appropriate events.
 */
export const WithARecommendedLength: Story = {
  args: {
    rows: 10,
    recommendedMaxLength: 144,
    required: true,
  },
  render: (args) => <TextareaField {...args} />,
};

/**
 * Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`
 * and `maxLength` will show the treatment warning the user about the text length being violated.
 */
export const WithBothRecommendedAndMaxLengths: Story = {
  args: {
    rows: 10,
    maxLength: 256,
    recommendedMaxLength: 144,
    required: true,
  },
  render: (args) => <TextareaField {...args} />,
};
