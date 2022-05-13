import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Grid, Props } from './Grid';
import GridItem from '../GridItem';

export default {
  title: 'Molecules/Layout and Containers/Grid',
  component: Grid,
  subcomponents: { GridItem },
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Grid {...args}>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
    <Grid.Item>
      <div className="fpo u-margin-top-none u-margin-bottom-none">
        Grid Item
      </div>
    </Grid.Item>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};

export const SideBySide = Template.bind({});
SideBySide.args = { variant: 'side-by-side' };

export const TwoUpGrid = Template.bind({});
TwoUpGrid.args = { variant: '2up' };

export const OneToThreeUpGrid = Template.bind({});
OneToThreeUpGrid.args = { variant: '1-3up' };

export const ThreeUpGrid = Template.bind({});
ThreeUpGrid.args = { variant: '3up' };

export const OneToTwoToFourUpGrid = Template.bind({});
OneToTwoToFourUpGrid.args = { variant: '1-2-4up' };

export const FourUpGrid = Template.bind({});
FourUpGrid.args = { variant: '4up' };
