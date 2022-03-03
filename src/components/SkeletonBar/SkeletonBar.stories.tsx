import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SkeletonBar, Props } from './SkeletonBar';

export default {
  title: 'Molecules/Blocks/SkeletonBar',
  component: SkeletonBar,
} as Meta;

const Template: Story<Props> = (args) => <SkeletonBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };

export const XL = Template.bind({});
XL.args = { size: 'xl' };
