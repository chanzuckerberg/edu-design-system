import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'Organisms/Interactive/Menu',
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof Menu>;

export const Default: StoryObj<Args> = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Button>Documentation Links</Menu.Button>
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

export const WithLongButtonText: StoryObj<Args> = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Button>
        Long Trigger Button Text to Demonstrate Popover Matching
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

export const WithShortButtonText: StoryObj<Args> = {
  render: (args) => (
    <Menu {...args}>
      <Menu.Button>Menu</Menu.Button>
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
