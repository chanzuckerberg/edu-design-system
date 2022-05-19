import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ButtonDropdown, Props } from './ButtonDropdown';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';

export default {
  title: 'Example/ButtonDropdown',
  component: ButtonDropdown,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ width: '100%', display: 'flex' }}>
    <div style={{ marginLeft: 'auto' }}>
      <ButtonDropdown {...args} buttonChildren="Button Dropdown">
        <DropdownMenuItem iconName="schedule" text="Item 1" />
        <DropdownMenuItem iconName="schedule" text="Item 2" />
        <DropdownMenuItem iconName="schedule" text="Item 3" />
        <DropdownMenuItem iconName="schedule" text="Item 4" />
      </ButtonDropdown>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
