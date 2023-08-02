import type { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import React from 'react';

import { Menu } from './Menu';
import type { MenuProps } from './Menu';
import icons from '../../icons/spritemap';
import type { IconName } from '../../icons/spritemap';
import { Avatar } from '../Avatar/Avatar';

import { Icon } from '../Icon/Icon';
export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Button': Menu.Button,
    'Menu.Items': Menu.Items,
    'Menu.Item': Menu.Item,
  },
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
} as Meta<MenuProps>;

export const Default: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const WithLongButtonText: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const WithShortButtonText: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const WithCustomButton: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
        <Menu.PlainButton>
          <div className="fpo">Menu Button</div>
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
};

export const MenuWithAvatarButton: StoryObj<MenuProps> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
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
};

export const Opened: StoryObj<MenuProps> = {
  ...Default,
  play: () => {
    userEvent.tab();
    userEvent.keyboard(' ');
  },
};

export const MenuWithIconButton: StoryObj<MenuProps & { iconName: IconName }> =
  {
    argTypes: {
      iconName: {
        control: 'radio',
        options: Object.keys(icons),
      },
    },
    args: {
      iconName: 'dots-vertical',
    },
    parameters: {
      badges: ['1.2', 'implementationExample'],
    },
    render: ({ iconName }) => (
      <Menu>
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
