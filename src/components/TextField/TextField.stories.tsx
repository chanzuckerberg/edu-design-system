import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextField } from './TextField';
import Button from '../../components/Button';

export default {
  title: 'Molecules/Forms/TextField',
  component: TextField,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof TextField>;

export const Default: StoryObj<Args> = {
  args: {
    fieldNote: 'This is a fieldnote.',
  },
};

export const Inverted: StoryObj<Args> = {
  args: {
    inverted: true,
    fieldNote: 'This is a fieldnote.',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', background: '#000' }}>
        <Story />
      </div>
    ),
  ],
};

export const Error: StoryObj<Args> = {
  args: {
    isError: true,
    fieldNote: 'This is a fieldnote with an error.',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    disabled: true,
  },
};

export const Optional: StoryObj<Args> = {
  args: {
    required: false,
    fieldNote: 'This is a fieldnote for an optional text field.',
  },
};

export const HideLabel: StoryObj<Args> = {
  args: {
    hideLabel: true,
  },
};

export const InputWithin: StoryObj<Args> = {
  render: () => (
    <div>
      <TextField
        inputWithin={
          <Button size="sm" variant="icon">
            Button
          </Button>
        }
        type="text"
      />
    </div>
  ),
};
