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
    badges: ['1.0'],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '0.5rem', backgroundColor: 'white' }}>
        {Story()}
      </div>
    ),
  ],
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

export const LabelFieldnoteVariants: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 2fr',
        gap: '2rem',
      }}
    >
      <div />
      <p>Placeholder</p>
      <p>No Placeholder</p>

      <p>fieldNote, label</p>
      <InputField
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <InputField fieldNote="fieldNote text" label="Label text" {...args} />
      <p>no fieldNote, label</p>
      <InputField label="Label text" placeholder="placeholder" {...args} />
      <InputField label="Label text" {...args} />
      <p>fieldNote, no label</p>
      <InputField
        aria-label="Label text"
        fieldNote="fieldNote text"
        placeholder="placeholder"
        {...args}
      />
      <InputField
        aria-label="Label text"
        fieldNote="fieldNote text"
        {...args}
      />
      <p>no fieldNote, no label</p>
      <InputField aria-label="Label text" placeholder="placeholder" {...args} />
      <InputField aria-label="Label text" {...args} />
    </div>
  ),
};

export const ErrorVariants: Story = {
  args: {
    isError: true,
  },
  ...LabelFieldnoteVariants,
};

export const DisabledVariants: Story = {
  args: {
    disabled: true,
  },
  ...LabelFieldnoteVariants,
  parameters: {
    axe: {
      // Disabled input does not need to meet color contrast
      disabledRules: ['color-contrast'],
    },
  },
};

export const RequiredVariants: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 2fr',
        gap: '2rem',
      }}
    >
      <div />
      <p>Placeholder</p>
      <p>No Placeholder</p>

      <p>fieldNote, label</p>
      <InputField
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <InputField fieldNote="fieldNote text" label="Label text" {...args} />
      <p>no fieldNote, label</p>
      <InputField label="Label text" placeholder="placeholder" {...args} />
      <InputField label="Label text" {...args} />
      <p>fieldNote, no label</p>
      <InputField
        aria-label="Label text"
        fieldNote="fieldNote text"
        placeholder="placeholder"
        {...args}
      />
      <InputField
        aria-label="Label text"
        fieldNote="fieldNote text"
        {...args}
      />
      <p>no fieldNote, no label</p>
      <InputField aria-label="Label text" placeholder="placeholder" {...args} />
      <InputField aria-label="Label text" {...args} />
      <p>fieldNote, label, isError</p>
      <InputField
        fieldNote="fieldNote text"
        isError
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <InputField
        fieldNote="fieldNote text"
        isError
        label="Label text"
        {...args}
      />
      <p>fieldNote, label, disabled</p>
      <InputField
        disabled
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <InputField
        disabled
        fieldNote="fieldNote text"
        label="Label text"
        {...args}
      />
    </div>
  ),
  parameters: {
    axe: {
      // Disabled input does not need to meet color contrast
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithAMaxLength: Story = {
  args: {
    defaultValue: 'Some initial text',
    label: 'test label',
    maxLength: 15,
    required: true,
  },
  render: (args) => <InputField {...args} />,
};

export const WithARecommendedLength: Story = {
  args: {
    defaultValue: 'Some initial text',
    label: 'test label',
    recommendedMaxLength: 15,
    required: true,
  },
  render: (args) => <InputField {...args} />,
};

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

export const TabularInput: Story = {
  parameters: {
    badges: ['1.1', 'implementationExample'],
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
