import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
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

type Args = React.ComponentProps<typeof SearchBar>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <SearchBar.InputField />
        <SearchBar.Button />
      </>
    ),
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    children: (
      <>
        <SearchBar.InputField disabled />
        <SearchBar.Button disabled />
      </>
    ),
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const Custom: StoryObj<Args> = {
  render: () => (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <SearchBar.Button />
        <SearchBar.InputField />
      </div>
      <div>
        <SearchBar.InputField />
        <SearchBar.Button />
      </div>
    </>
  ),
};

export const SearchField: StoryObj<
  React.ComponentProps<typeof SearchBar.InputField>
> = {
  argTypes: { onChange: { action: 'onChange' } },
  render: (args) => <SearchBar.InputField {...args} />,
};

export const SearchButton: StoryObj<
  React.ComponentProps<typeof SearchBar.Button>
> = {
  argTypes: { onClick: { action: 'onClick' } },
  render: (args) => <SearchBar.Button {...args} />,
};
