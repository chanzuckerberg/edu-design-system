import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { InputLabel } from './InputLabel';

export default {
  title: 'Atoms/Forms/Label',
  component: InputLabel,
  args: {
    text: 'Large label',
  },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof InputLabel>;

export const Default: StoryObj<Args> = {};

export const Medium: StoryObj<Args> = {
  args: {
    size: 'md',
  },
};

export const LargeDisabled: StoryObj<Args> = {
  args: {
    disabled: true,
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const MediumDisabled: StoryObj<Args> = {
  args: {
    disabled: true,
    size: 'md',
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const LongCopy: StoryObj<Args> = {
  args: {
    children:
      'Long label lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac id velit ut egestas arcu. Atmaecenas urna, risus donec praesent eu consectetur.',
  },
};
