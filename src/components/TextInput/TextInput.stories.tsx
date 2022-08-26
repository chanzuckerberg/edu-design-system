import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'Atoms/Forms/TextInput',
  component: TextInput,
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

type Args = React.ComponentProps<typeof TextInput>;

export const Default: StoryObj<Args> = {
  args: {
    placeholder: 'Placeholder',
  },
};
export const Disabled: StoryObj<Args> = {
  render: () => (
    <>
      <TextInput
        defaultValue="Default Value"
        disabled
        style={{ marginBottom: '0.5rem' }}
      />
      <TextInput disabled placeholder="Placeholder" />
    </>
  ),
};
export const Error: StoryObj<Args> = {
  render: () => (
    <>
      <TextInput isError style={{ marginBottom: '0.5rem' }} />
      <TextInput isError placeholder="Placeholder" />
    </>
  ),
};
