import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Menu } from './Menu';
import type { MenuProps } from './Menu';
import Icon from '../Icon';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Button': Menu.Button,
    'Menu.Items': Menu.Items,
    'Menu.Item': Menu.Item,
  },
  parameters: {
    badges: [BADGE.BETA],
    layout: 'centered',
  },
} as Meta<MenuProps>;

export const Default: StoryObj<MenuProps> = {
  args: {
    buttonText: 'Documentation Links',
    children: (
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
    ),
  },
};

export const WithLongButtonText: StoryObj<MenuProps> = {
  args: {
    buttonText: 'Long Trigger Button Text to Demonstrate Popover Matching',
    children: (
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
    ),
  },
};

export const WithShortButtonText: StoryObj<MenuProps> = {
  args: {
    buttonText: 'Menu',
    children: (
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
    ),
  },
};
export const DotsVerticalButton: StoryObj<MenuProps> = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Button status="neutral" variant="icon">
        <Icon name="dots-vertical" purpose="informative" title="show more" />
      </Menu.Button>
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

export const CustomButton: StoryObj<MenuProps> = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Button status="neutral" variant="icon">
        <div className="fpo !py-0">Menu Button</div>
      </Menu.Button>
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
