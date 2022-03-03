import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tooltip, Props } from './Tooltip';
import { TextPassage } from '../TextPassage/TextPassage';

export default {
  title: 'Molecules/Messaging/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ margin: '10rem' }}>
    <Tooltip {...args}>
      <TextPassage>
        <p>Hello, I am a tooltip</p>
      </TextPassage>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = { buttonText: 'Click on this to get more information' };

export const Right = Template.bind({});
Right.args = {
  align: 'right',
  buttonText: 'Click on this to get more information',
};

export const Below = Template.bind({});
Below.args = {
  align: 'below',
  buttonText: 'Click on this to get more information',
};

export const Left = Template.bind({});
Left.args = {
  align: 'left',
  buttonText: 'Click on this to get more information',
};
