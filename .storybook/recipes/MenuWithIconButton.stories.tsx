import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Icon } from '../../src';
import { Menu, type MenuProps } from '../../src/components/Menu/Menu';
import icons from '../../src/icons/spritemap';

export default {
  title: 'Recipes/MenuWithIconButton',
  component: Menu,
  parameters: {
    badges: [BADGE.BETA],
    layout: 'centered',
  },
  argTypes: {
    iconName: {
      control: 'radio',
      options: Object.keys(icons),
      defaultValue: 'dots-vertical',
    },
  },
} as Meta<MenuProps>;

export const WithVerticalDotsButton: StoryObj<MenuProps> = {
  render: ({ iconName, args }) => (
    <Menu {...args}>
      <Menu.PlainButton>
        <Icon
          name={iconName}
          purpose="informative"
          size="2rem"
          title="show more"
        />
      </Menu.PlainButton>
      <Menu.Items data-testid="menu-content">
        <Menu.Item
          href="https://headlessui.com/react/menu#menu-button"
          icon="link"
        >
          Headless UI Docs
        </Menu.Item>
        <Menu.Item
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu"
          icon="link"
        >
          MDN: Menu
        </Menu.Item>
        {/* eslint-disable-next-line no-alert */}
        <Menu.Item onClick={() => alert('Item clicked')}>
          Trigger Action
        </Menu.Item>
        <Menu.Item disabled href="https://example.org/" icon="warning">
          Not Possible (disabled)
        </Menu.Item>
      </Menu.Items>
    </Menu>
  ),
};
