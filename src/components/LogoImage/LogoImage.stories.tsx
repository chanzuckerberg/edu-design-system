import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LogoImage, Props } from './LogoImage';

export default {
  title: 'Molecules/Global/LogoImage',
  component: LogoImage,
} as Meta;

const Template: Story<Props> = (args) => <LogoImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
