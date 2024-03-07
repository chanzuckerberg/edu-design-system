import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { InputField } from './InputField';
import Button from '../Button';
import { Label } from '../Label/Label';
import { Table } from '../Table/Table';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    badges: ['intro-1.0'],
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  decorators: [(Story) => <div className="p-2">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Default input field',
    fieldNote: 'This is a fieldnote.',
  },
};

export const NoFieldnote: Story = {
  args: {
    label: 'Default input field',
  },
};

export const Error: Story = {
  args: {
    label: 'Error input field',
    isError: true,
    fieldNote: 'This is a fieldnote with an error.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input field',
    disabled: true,
    fieldNote: 'This InputField is disabled',
  },
  parameters: {
    axe: {
      // Disabled input does not need to meet color contrast
      disabledRules: ['color-contrast'],
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Input field with fieldNote',
    required: true,
    fieldNote: 'This is a fieldnote for a required input field.',
  },
};

export const NoVisibleLabel: Story = {
  args: {
    'aria-label': 'Input for no visible label',
    fieldNote: 'This input field has no visible label',
    required: true,
  },
};

/**
 * You can render certain components **within** an `InputField`, such as a button, icon, or other
 * small component. This facility is used to implement controls that should appear visibly nested
 * within the button, to the right-hand side.
 */
export const InputWithin: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => (
    <InputField
      inputWithin={
        <Button size="sm" variant="icon">
          Button
        </Button>
      }
      label="Input field with button inside"
      type="text"
    />
  ),
};

/**
 * You can lock the maximum length of the text content of `InputField`. When setting `maxLength`,
 * the field will reuse the browser's [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * behavior (e.g., prevent further text from being typed, prevent keydown events, etc.).
 */
export const WithAMaxLength: Story = {
  args: {
    defaultValue: 'Some initial text',
    label: 'test label',
    maxLength: 15,
    required: true,
  },
  render: (args) => <InputField {...args} />,
};

/**
 * If you want to signal that a field has reached a maximum length but want to allow more text to be typed, you can use
 * `recommendedMaxLength`. This will show a similar UI to using `maxLength` but will allow more text to be typed, and
 * emit any appropriate events.
 */
export const WithARecommendedLength: Story = {
  args: {
    defaultValue: 'Some initial text',
    label: 'test label',
    recommendedMaxLength: 15,
    required: true,
  },
  render: (args) => <InputField {...args} />,
};

/**
 * Both `maxLength` and `recommendedMaxLength` can be specified at the same time. Text length between `recommendedMaxLength`
 * and `maxLength` will show the treatment warning the user about the text length being violated.
 */
export const WithBothMaxAndRecommendedLength: Story = {
  args: {
    label: 'test label',
    defaultValue: 'Some initial text',
    fieldNote: 'Longer Field Description',
    maxLength: 20,
    recommendedMaxLength: 15,
    required: true,
  },
  render: (args) => <InputField {...args} />,
};

/**
 * This **implementation example** shows how to attach labels to fields and labels
 * when the label is in a different column.
 */
export const TabularInput: Story = {
  parameters: {
    badges: ['intro-1.1', 'implementationExample'],
  },
  render: (args) => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Label</Table.HeaderCell>
          <Table.HeaderCell>Field</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="flex items-center">
            <Label
              className="flex items-center"
              htmlFor="field-1"
              id="input-1"
              text="Input One"
            />
          </Table.Cell>
          <Table.Cell>
            <InputField
              aria-label="redundant"
              aria-labelledby="input-1"
              id="field-1"
              placeholder="click the label to highlight field"
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
