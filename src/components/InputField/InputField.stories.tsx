import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    badges: [BADGE.BETA],
    axe: {
      // InputField component independent of label, expected accessibility error
      disabledRules: ['label'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '0.5rem', backgroundColor: 'white' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof InputField>;

export const Default: StoryObj<Args> = {
  args: {
    placeholder: 'Placeholder',
  },
};
export const Disabled: StoryObj<Args> = {
  render: () => (
    <>
      <InputField
        defaultValue="Default Value"
        disabled
        style={{ marginBottom: '0.5rem' }}
      />
      <InputField disabled placeholder="Placeholder" />
    </>
  ),
};
export const Error: StoryObj<Args> = {
  render: () => (
    <>
      <InputField isError style={{ marginBottom: '0.5rem' }} />
      <InputField isError placeholder="Placeholder" />
    </>
  ),
};
