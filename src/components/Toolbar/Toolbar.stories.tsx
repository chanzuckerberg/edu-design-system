import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Toolbar, Props } from './Toolbar';

export default {
  title: 'Organisms/Toolbars/Toolbar',
  component: Toolbar,
} as Meta;

const Template: Story<Props> = (args) => (
  <Toolbar {...args}>
    <Toolbar.Item>
      <div className="fpo u-margin-none">Left</div>
    </Toolbar.Item>
    <Toolbar.Item>
      <div className="fpo u-margin-none">Left</div>
    </Toolbar.Item>
    <Toolbar.Item>
      <div className="fpo u-margin-none">Left</div>
    </Toolbar.Item>
    <Toolbar.Item align="right">
      <div className="fpo u-margin-none">Right</div>
    </Toolbar.Item>
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
