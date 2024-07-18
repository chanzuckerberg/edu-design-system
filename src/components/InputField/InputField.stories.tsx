import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import { InputField } from './InputField';
import Button from '../Button';
import { Label } from '../Label/Label';
import { Table } from '../Table/Table';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  args: {
    className: 'w-96',
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'datetime-local',
        'date',
        'month',
        'time',
        'week',
        'number',
        'email',
        'url',
        'search',
        'tel',
      ],
    },
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Default input field',
    fieldNote: 'This is a fieldnote.',
  },
};

/**
 * Fields, when containing text, have a theme matching the rest of the interface.
 */
export const WithText: Story = {
  args: {
    label: 'Default input field',
    fieldNote: 'This is a fieldnote.',
    defaultValue: 'Text value',
  },
};

/**
 * Fields do not required a `fieldNote`.
 */
export const NoFieldnote: Story = {
  args: {
    label: 'Default input field',
  },
};

/**
 * Fields can have an error state.
 */
export const Error: Story = {
  args: {
    label: 'Error input field',
    status: 'critical',
    fieldNote: 'This is a fieldnote with an error.',
  },
};

/**
 * Fields can have a warning state.
 */
export const Warning: Story = {
  args: {
    label: 'Warning input field',
    status: 'warning',
    fieldNote:
      'This uses the warning treatment and also applies to the field note',
  },
};

/**
 * Read-only fields can have a value and are not editable, but are different from disabled fields.
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read-only field',
    readOnly: true,
    defaultValue: 'some read-only information',
    fieldNote: 'This will show up like text, but not be interactive',
  },
};

/**
 * Fields can be marked as disabled (and contain a value in such cases).
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled input field',
    disabled: true,
    fieldNote: 'This InputField is disabled',
    defaultValue: 'Text in disabled field',
  },
};

/**
 * Fields can have a leading icon, indicating what kind of content can go into the field.
 */
export const LeadingIcon: Story = {
  args: {
    leadingIcon: 'search',
    'aria-label': 'search field',
    placeholder: 'Search...',
  },
};

/**
 * Fields can be marked as required.
 */
export const Required: Story = {
  args: {
    label: 'Input field with fieldNote',
    showHint: true,
    required: true,
    fieldNote: 'This is a fieldnote for a required input field.',
  },
};

/**
 * Fields can be marked as required.
 */
export const RequiredDisabled: Story = {
  args: {
    label: 'Input field with fieldNote',
    showHint: true,
    required: true,
    disabled: true,
    fieldNote: 'This is a fieldnote for a required input field.',
  },
};

/**
 * When not using a visible label with `InputField`, you must apply some time of ARIA label to the component, like `aria-label`.
 */
export const NoVisibleLabel: Story = {
  args: {
    'aria-label': 'Input for no visible label',
    fieldNote: 'This input field has no visible label',
    required: true,
  },
};

/**
 * Password fields show dots instead of characters, to help with security. They allow for show/hide of the field
 * contents.
 */
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: 'secret123',
  },
};

/**
 * Password fields show dots instead of characters, to help with security. They allow for show/hide of the field
 * contents, and resetting.
 */
export const PasswordWithShownText: Story = {
  args: {
    ...Password.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const showHideButton = await canvas.findByRole('button');
    await userEvent.click(showHideButton);
  },
};

/**
 * You can specify dates of varying details (including full date, month and year, etc.).
 * It uses the built-in browser UI to handle date/time input.
 */
export const DateHandling: Story = {
  args: {
    ...Default.args,
    type: 'date',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['datetime-local', 'date', 'month', 'time', 'week'],
    },
  },
};

/**
 * You can specify time as well, which uses a different internal glyph to trigger the browser UI.
 */
export const TimeHandling: Story = {
  args: {
    ...Default.args,
    type: 'time',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['datetime-local', 'date', 'month', 'time', 'week'],
    },
  },
};

/**
 * Fields can have an optional field hint added, for extra clarity.
 */
export const ShowHint: Story = {
  args: {
    label: 'Field with Optional Hint',
    showHint: true,
  },
};

/**
 * You can render certain components **within** an `InputField`, such as a button, icon, or other
 * small component. This facility is used to implement controls that should appear visibly nested
 * within the button, to the right-hand side.
 *
 * Please keep the text of the button brief (button width < 96px)
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
        <Button rank="secondary" size="sm">
          Button
        </Button>
      }
      label="Input field with button inside"
      type="text"
    />
  ),
};

/**
 * The button has a maximum width, so if more text is placed in the button than this width can handle, it
 * will be trimmed.
 *
 * Please keep the text of the button brief (button width < 96px)
 */
export const LongInputWithin: Story = {
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
        <Button icon="open-in-new" iconLayout="left" rank="secondary" size="sm">
          Button with extra text
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
    label: 'Shortened Length Field',
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
