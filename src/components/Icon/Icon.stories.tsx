import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon, Props } from './Icon';

export default {
  title: 'Atoms/Icons/Icon',
  component: Icon,
} as Meta;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { name: 'x' };

export const Inverted = () => (
  <div className="u-padding-sm" style={{ background: '#000000' }}>
    <Icon inverted={true} name="x" />
  </div>
);
