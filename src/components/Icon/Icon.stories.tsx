import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Atoms/Icons/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { name: 'close' };

export const Inverted = () => (
  <div className="u-padding-sm" style={{ background: '#000000' }}>
    <Icon inverted={true} name="close" purpose="decorative" />
  </div>
);
