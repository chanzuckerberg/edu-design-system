import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { InputLabel } from './InputLabel-v2';

export default {
  title: 'Components/V2/InputLabel',
  component: InputLabel,
  args: {
    children: 'Label',
  },
  parameters: {
    badges: ['intro-1.0'],
  },
} as Meta<Args>;

type Args = ComponentProps<typeof InputLabel>;

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
