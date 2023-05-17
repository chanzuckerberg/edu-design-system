import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import React from 'react';

import { Avatar } from '../../src';
import { Menu } from '../../src/components/Menu/Menu';

export default {
  title: 'Recipes/MenuWithAvatarButton',
  component: Menu,
  parameters: {
    badges: [BADGE.BETA],
    layout: 'centered',
  },
  decorators: [(Story) => <div className="p-5">{Story()}</div>],
  args: {
    children: (
      <>
        <Menu.PlainButton>
          <Avatar user={{ fullName: 'Josie Sandberg' }} />
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
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Avatar>;

export const WithAvatarButton: StoryObj = {};

export const Focused: StoryObj = {
  play: () => {
    userEvent.tab();
  },
};

export const Opened: StoryObj = {
  play: () => {
    userEvent.tab();
    userEvent.keyboard(' ');
  },
};
