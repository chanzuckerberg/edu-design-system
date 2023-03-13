import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Grid } from './Grid';
import GridItem from '../GridItem';

export default {
  title: 'Components/Grid',
  args: {
    children: (
      <>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
        <Grid.Item>
          <div className="fpo !my-0">Grid Item</div>
        </Grid.Item>
      </>
    ),
  },
  parameters: {
    badges: ['1.0'],
  },
  component: Grid,
  subcomponents: { GridItem },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Grid>;

export const Default: StoryObj<Args> = {};

export const SideBySide: StoryObj<Args> = {
  args: {
    variant: 'side-by-side',
  },
};

export const TwoUpGrid: StoryObj<Args> = {
  args: {
    variant: '2up',
  },
};

export const OneToThreeUpGrid: StoryObj<Args> = {
  args: {
    variant: '1-3up',
  },
};

export const ThreeUpGrid: StoryObj<Args> = {
  args: {
    variant: '3up',
  },
};

export const OneToTwoToFourUpGrid: StoryObj<Args> = {
  args: { variant: '1-2-4up' },
};

export const FourUpGrid: StoryObj<Args> = {
  args: {
    variant: '4up',
  },
};

export const OneToTwoToOneUpGrid: StoryObj<Args> = {
  args: { variant: '1-2-1up' },
};
