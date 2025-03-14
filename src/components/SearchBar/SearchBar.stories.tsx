import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    badges: [BADGE.DEPRECATED, 'api-1.3', 'theme-2.0'],
    backgrounds: {
      default: 'background-utility-inverse-high-emphasis',
    },
  },
  args: {
    className: 'w-96',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof SearchBar>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <SearchBar.Field />
        <SearchBar.Button />
      </>
    ),
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    children: (
      <>
        <SearchBar.Field disabled />
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
        <SearchBar.Field />
      </div>
      <div>
        <SearchBar.Field />
        <SearchBar.Button />
      </div>
    </>
  ),
};

export const SearchField: StoryObj<
  React.ComponentProps<typeof SearchBar.Field>
> = {
  argTypes: { onChange: { action: 'onChange' } },
  render: (args) => <SearchBar.Field {...args} />,
};

export const SearchButton: StoryObj<
  React.ComponentProps<typeof SearchBar.Button>
> = {
  argTypes: { onClick: { action: 'onClick' } },
  render: (args) => <SearchBar.Button {...args} />,
};
