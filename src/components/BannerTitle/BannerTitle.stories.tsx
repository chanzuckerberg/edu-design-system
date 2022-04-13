import { Story, Meta } from '@storybook/react';
import React from 'react';

import { BannerTitle, Props } from './BannerTitle';

export default {
  title: 'Molecules/Messaging/BannerTitle',
  component: BannerTitle,
} as Meta;

const Template: Story<Props> = (args) => <BannerTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Banner Title',
};
