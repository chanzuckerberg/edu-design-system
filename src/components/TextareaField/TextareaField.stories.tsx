import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField } from './TextareaField';

const meta: Meta<typeof TextareaField> = {
  title: 'Components/TextareaField',
  component: TextareaField,
  args: {
    className: 'w-[384px]',
    placeholder: 'Enter long-form text here',
    defaultValue: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,
    label: 'Textarea Field',
    subLabel: 'Additional descriptive text for the field.',
    rows: 5,
    fieldNote: 'Validation information or error details about the input.',
    spellCheck: false,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['autodocs', 'version:2.1'],
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: {
    subLabel: '',
    fieldNote: '',
  },
};

/**
 * `TextareaField` does not require any initial content. It will display the placeholder text if specified via `placeholder`.
 */
export const WhenNoDefaultValue: Story = {
  args: {
    defaultValue: undefined,
    fieldNote: undefined,
  },
};

/**
 * `TextareaField` can use `defaultValue` or `value` for the field contents.
 *
 * See https://react.dev/reference/react-dom/components/textarea#providing-an-initial-value-for-a-text-area for more information.
 */
export const WhenUsingValue: Story = {
  args: {
    defaultValue: undefined,
    value: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id neque nemo
dicta rerum commodi et fugiat quo optio veniam! Ea odio corporis nemo
praesentium, commodi eligendi asperiores quis dolorum porro.`,
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

/**
 * The default status isn't really anything, but exists to allow a value to be set if needed. This applies
 * the neutral styles.
 */
export const WhenDefaultStatus: Story = {
  args: {
    status: 'default',
    fieldNote: 'Text should be at least 100 characters',
  },
};

/**
 * When in an error state, this is the status to use. It matches other components which have a critical status.
 */
export const WhenError: Story = {
  args: {
    status: 'critical',
    fieldNote: 'Text should be at least 100 characters',
  },
};

/**
 * You can also apply a warning status.
 */
export const WhenWarning: Story = {
  args: {
    status: 'warning',
    fieldNote: 'Text should be at least 100 characters',
  },
};

/**
 * Textarea components can be set as required.
 */
export const WhenRequired: Story = {
  args: {
    required: true,
    showHint: true,
  },
};

/**
 * ... or optional.
 */
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
