import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Fieldset, Props } from './Fieldset';

export default {
  title: 'Atoms/Forms/Fieldset',
  component: Fieldset,
} as Meta;

const Template: Story<Props> = (args) => (
  <Fieldset {...args}>
    <div className="fpo">Children</div>
  </Fieldset>
);

export const Default = Template.bind({});
Default.args = { legend: 'Fieldset Legend' };
