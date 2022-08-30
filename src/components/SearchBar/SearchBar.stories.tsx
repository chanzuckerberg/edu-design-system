import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/SearchBar',
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

export const Default: StoryObj<Args> = {};
export const Disabled: StoryObj<Args> = {
  args: {
    disabled: true,
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
