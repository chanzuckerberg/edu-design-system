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
  // TODO: Add sub-components section
  parameters: {
    badges: ['intro-1.2', 'current-2.0'],
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
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

type Story = StoryObj<MenuProps>;

export const Default: Story = {
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
          <Menu.Item href="#index" onClick={() => console.log('Item clicked')}>
            Trigger Action
          </Menu.Item>
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

/**
 * Be careful when using a lot of text for a menu trigger. The UI will force the text out of the button container. Use brief text for menu triggers.
 */
export const WithLongButtonText: Story = {
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

export const WithShortButtonText: Story = {
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

export const WithCustomButton: Story = {
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

export const MenuWithAvatarButton: Story = {
  parameters: {
    badges: ['intro-1.3', 'implementationExample'],
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

export const Opened: Story = {
  ...Default,
  parameters: {
    ...Default.parameters,
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: { delay: 300 },
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.keyboard(' ', { delay: 300 });
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
      badges: ['intro-1.2', 'implementationExample'],
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </Menu>
    ),
  };
