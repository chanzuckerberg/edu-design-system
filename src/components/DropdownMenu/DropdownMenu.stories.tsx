import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DropdownMenu, Props } from './DropdownMenu';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';

export default {
  title: 'Molecules/Navigation/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<Props> = (args) => (
  <DropdownMenu>
    <DropdownMenuItem text="Item 1" variant="lined" />
    <DropdownMenuItem text="Item 2" />
    <DropdownMenuItem text="Longer item 3" />
    <DropdownMenuItem href="#" text="Item 4 with link" />
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcons = () => (
  <DropdownMenu>
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
    <DropdownMenuItem iconName="schedule" text="Dropdown menu item" />
  </DropdownMenu>
);
