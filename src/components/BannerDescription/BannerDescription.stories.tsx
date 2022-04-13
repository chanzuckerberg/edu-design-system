import { Story, Meta } from '@storybook/react';
import React from 'react';

import { BannerDescription, Props } from './BannerDescription';

export default {
  title: 'Molecules/Messaging/BannerDescription',
  component: BannerDescription,
} as Meta;

const Template: Story<Props> = (args) => <BannerDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Your courses have been successfully updated.',
};
