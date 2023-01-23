import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextField } from './TextField';
import Button from '../../components/Button';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '0.5rem', backgroundColor: 'white' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof TextField>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Default text field',
    fieldNote: 'This is a fieldnote.',
  },
};

export const Error: StoryObj<Args> = {
  args: {
    label: 'Error text field',
    isError: true,
    fieldNote: 'This is a fieldnote with an error.',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    label: 'Disabled text field',
    disabled: true,
    fieldNote: 'This TextField is disabled',
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
    label: 'Text field with fieldNote',
    required: true,
    fieldNote: 'This is a fieldnote for a required text field.',
  },
};

export const NoVisibleLabel: StoryObj<Args> = {
  args: {
    'aria-label': 'Input for no visible label',
    fieldNote: 'This text field has no visible label',
    required: true,
  },
};

export const InputWithin: StoryObj<Args> = {
  render: () => (
    <TextField
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
      <TextField
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <TextField fieldNote="fieldNote text" label="Label text" {...args} />
      <p>no fieldNote, label</p>
      <TextField label="Label text" placeholder="placeholder" {...args} />
      <TextField label="Label text" {...args} />
      <p>fieldNote, no label</p>
      <TextField
        aria-label="Label text"
        fieldNote="fieldNote text"
        placeholder="placeholder"
        {...args}
      />
      <TextField aria-label="Label text" fieldNote="fieldNote text" {...args} />
      <p>no fieldNote, no label</p>
      <TextField aria-label="Label text" placeholder="placeholder" {...args} />
      <TextField aria-label="Label text" {...args} />
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
      <TextField
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <TextField fieldNote="fieldNote text" label="Label text" {...args} />
      <p>no fieldNote, label</p>
      <TextField label="Label text" placeholder="placeholder" {...args} />
      <TextField label="Label text" {...args} />
      <p>fieldNote, no label</p>
      <TextField
        aria-label="Label text"
        fieldNote="fieldNote text"
        placeholder="placeholder"
        {...args}
      />
      <TextField aria-label="Label text" fieldNote="fieldNote text" {...args} />
      <p>no fieldNote, no label</p>
      <TextField aria-label="Label text" placeholder="placeholder" {...args} />
      <TextField aria-label="Label text" {...args} />
      <p>fieldNote, label, isError</p>
      <TextField
        fieldNote="fieldNote text"
        isError
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <TextField
        fieldNote="fieldNote text"
        isError
        label="Label text"
        {...args}
      />
      <p>fieldNote, label, disabled</p>
      <TextField
        disabled
        fieldNote="fieldNote text"
        label="Label text"
        placeholder="placeholder"
        {...args}
      />
      <TextField
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
