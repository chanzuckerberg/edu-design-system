import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ShowHide, Props } from './ShowHide';
import { Button } from '../Button/Button';

export default {
  title: 'Molecules/Interactive/ShowHide',
  component: ShowHide,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ margin: '10rem' }}>
    <ShowHide
      trigger={
        <Button type="button" iconName="chevron-down" iconPosition="after" />
      }
      {...args}
    >
      <div className="fpo">Hidden Content</div>
    </ShowHide>
  </div>
);

export const Default = Template.bind({});
Default.args = { text: 'Actions' };
