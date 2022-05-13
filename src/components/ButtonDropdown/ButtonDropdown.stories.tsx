import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ButtonDropdown, Props } from './ButtonDropdown';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';

export default {
  title: 'Example/ButtonDropdown',
  component: ButtonDropdown,
} as Meta;

const Template: Story<Props> = (args) => (
  <ButtonDropdown {...args} buttonChildren="Button Dropdown">
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
  </ButtonDropdown>
);

export const Default = Template.bind({});
Default.args = {};
