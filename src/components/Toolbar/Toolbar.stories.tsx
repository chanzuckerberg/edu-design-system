import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Toolbar, Props } from './Toolbar';
import { ToolbarItem } from '../ToolbarItem/ToolbarItem';

export default {
  title: 'Organisms/Toolbars/Toolbar',
  component: Toolbar,
} as Meta;

const Template: Story<Props> = (args) => (
  <Toolbar {...args}>
    <ToolbarItem>
      <div className="fpo u-margin-none">Left</div>
    </ToolbarItem>
    <ToolbarItem>
      <div className="fpo u-margin-none">Left</div>
    </ToolbarItem>
    <ToolbarItem>
      <div className="fpo u-margin-none">Left</div>
    </ToolbarItem>
    <ToolbarItem align="right">
      <div className="fpo u-margin-none">Right</div>
    </ToolbarItem>
  </Toolbar>
);

export const Default = Template.bind({});
Default.args = {};

export const Bare = Template.bind({});
Bare.args = { variant: 'bare' };

export const AlignTop = Template.bind({});
AlignTop.args = { verticalAlign: 'top' };

export const AlignBottom = Template.bind({});
AlignBottom.args = { verticalAlign: 'bottom' };
