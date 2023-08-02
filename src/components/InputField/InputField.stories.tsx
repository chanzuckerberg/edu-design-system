import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { InputField } from './InputField';
import Button from '../Button';
import { Label } from '../Label/Label';
import { Table } from '../Table/Table';

export default {
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof InputField>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Default input field',
    fieldNote: 'This is a fieldnote.',
  },
};

export const NoFieldnote: StoryObj<Args> = {
  args: {
    label: 'Default input field',
  },
};

export const Error: StoryObj<Args> = {
  args: {
    label: 'Error input field',
    isError: true,
    fieldNote: 'This is a fieldnote with an error.',
  },
};

export const Disabled: StoryObj<Args> = {
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

export const Required: StoryObj<Args> = {
  args: {
    label: 'Input field with fieldNote',
    required: true,
    fieldNote: 'This is a fieldnote for a required input field.',
  },
};

export const NoVisibleLabel: StoryObj<Args> = {
  args: {
    'aria-label': 'Input for no visible label',
    fieldNote: 'This input field has no visible label',
    required: true,
  },
};

export const InputWithin: StoryObj<Args> = {
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

export const LabelFieldnoteVariants: StoryObj<Args> = {
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

export const ErrorVariants: StoryObj<Args> = {
  args: {
    isError: true,
  },
  ...LabelFieldnoteVariants,
};

export const DisabledVariants: StoryObj<Args> = {
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

export const RequiredVariants: StoryObj<Args> = {
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

export const TabularInput: StoryObj<Args> = {
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
