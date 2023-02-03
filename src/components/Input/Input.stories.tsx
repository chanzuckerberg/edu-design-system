import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    badges: [BADGE.BETA],
    axe: {
      // Input component independent of label, expected accessibility error
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

type Args = React.ComponentProps<typeof Input>;

export const Default: StoryObj<Args> = {
  args: {
    placeholder: 'Placeholder',
  },
};
export const Disabled: StoryObj<Args> = {
  render: () => (
    <>
      <Input
        defaultValue="Default Value"
        disabled
        style={{ marginBottom: '0.5rem' }}
      />
      <Input disabled placeholder="Placeholder" />
    </>
  ),
};
export const Error: StoryObj<Args> = {
  render: () => (
    <>
      <Input isError style={{ marginBottom: '0.5rem' }} />
      <Input isError placeholder="Placeholder" />
    </>
  ),
};
