import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Icon } from '../../src';
import { Menu, type MenuProps } from '../../src/components/Menu/Menu';

export default {
  title: 'Recipes/MenuWithIconButton',
  component: Menu,
  parameters: {
    badges: [BADGE.BETA],
    layout: 'centered',
  },
} as Meta<MenuProps>;

export const WithVerticalDotsButton: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
        <Menu.Button
          className="!border-transparent-white-0 !bg-transparent-white-0 hover:!bg-button-secondary-neutral-background-hover"
          showExpandIcon={false}
          variant="icon"
        >
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
      </>
    ),
  },
};
