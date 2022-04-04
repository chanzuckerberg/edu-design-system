import { Story, Meta } from '@storybook/react';
import React from 'react';

import { AvatarBlock, Props } from './AvatarBlock';

export default {
  title: 'Example/AvatarBlock',
  component: AvatarBlock,
} as Meta;

const Template: Story<Props> = (args) => <AvatarBlock {...args} />;

export const Default = Template.bind({});
Default.args = {};
