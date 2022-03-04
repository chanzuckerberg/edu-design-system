import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextLink, Props } from './TextLink';

export default {
  title: 'Atoms/Text/TextLink',
  component: TextLink,
} as Meta;

const Template: Story<Props> = (args) => (
  <TextLink {...args}>Text link</TextLink>
);

export const Default = Template.bind({});
Default.args = { href: '#' };

export const Inverted = () => (
  <div className="u-padding-sm" style={{ background: '#000000' }}>
    <TextLink inverted={true} href="#">
      Text Link
    </TextLink>
  </div>
);
