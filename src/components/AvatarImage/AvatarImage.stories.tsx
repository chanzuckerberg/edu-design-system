import { Story, Meta } from '@storybook/react';
import React from 'react';

import { AvatarImage, Props } from './AvatarImage';

export default {
  title: 'Example/AvatarImage',
  component: AvatarImage,
} as Meta;

const Template: Story<Props> = (args) => <AvatarImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
