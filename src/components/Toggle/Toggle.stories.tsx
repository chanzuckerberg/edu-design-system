import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Toggle } from './Toggle';

const InteractiveToggle = ({ checked = false, onChange, ...other }: Args) => {
  const [selected, setSelected] = useState(checked);
  return (
    <Toggle
      checked={selected}
      onChange={() => {
        setSelected(!selected);
        onChange(selected);
      }}
      {...other}
    />
  );
};

export default {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    label: 'Lorem ipsum',
    checked: false,
  },
  parameters: {
    layout: 'centered',
    badges: ['1.0', BADGE.BETA],
  },
  render: (args) => <InteractiveToggle {...args} />,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Toggle>;

export const Default: StoryObj<Args> = {};

export const CheckedTrue: StoryObj<Args> = {
  args: {
    checked: true,
  },
};
export const Disabled: StoryObj<Args> = {
  args: {
    disabled: true,
  },
};
export const WithoutLabel: StoryObj<Args> = {
  args: {
    label: undefined,
    'aria-label': 'Lorem ipsum',
  },
};

export const CustomPositioning: StoryObj<Args> = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(false);
    return (
      <Toggle.Wrapper as="div" className="flex flex-col items-center">
        <Toggle.Label>Custom positioned label</Toggle.Label>
        <Toggle.Button
          checked={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        />
      </Toggle.Wrapper>
    );
  },
};
