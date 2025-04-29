import type { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import React from 'react';

import { Menu } from './Menu';
import type { MenuProps } from './Menu';
import icons from '../../icons/spritemap';

import type { IconName } from '../../icons/spritemap';
import { Avatar } from '../Avatar/Avatar';
import Button from '../Button';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    badges: ['api-3.0', 'theme-2.0'],
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
    },
    __demoMode: {
      table: {
        disable: true,
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

type Story = StoryObj<MenuProps>;

/**
 * The Default `Menu` allows for clickable menu items, and provides a default trigger
 * button that applies `Button` with `rank` as `"primary"`, `iconLayout` as `"right"`, `icon`
 * either missing, or set to `"chevron-down"`, and a configurable text label.
 */
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

/**
 * `Menu.Button` instances can, of course, use shorter text for the trigger, which is preferred.
 */
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

/**
 * `Menu` allows for using various contents in a `PlainButton` wrapper. This lets you specify
 * the component to use as the clickable target, which includes other non-interactive components,
 * or a separate `Button` component.
 *
 * Use `Button` if the UI requires using other treatments than what is provided by `Menu.Button`.
 */
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

/**
 * When using `.PlainButton`, you can also use a `Button` instance within it to specify any other
 * button details, including alternative icon/text combinations, ranks, etc.
 *
 * **Note**: here we use `React.Fragment` to avoid nesting `<button>` tags within a `<button>` tag.
 */
export const WithCustomSecondaryButton: Story = {
  args: {
    children: (
      <>
        <Menu.PlainButton as={React.Fragment}>
          <Button rank="secondary">Secondary Button</Button>
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

/**
 * Use an `Avatar` component within `.PlainButton` to achieve a clickable avatar with menu attached.
 *
 * *NOTE*: `Avatar` will be re-introduced in a future version of EDS.
 */
export const MenuWithAvatarButton: Story = {
  parameters: {
    badges: ['api-2.0', 'implementationExample'],
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

/**
 * For testing purposes: This triggers an open menu.
 */
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

/**
 * This Implementation Example shows how to use a menu using an `Icon` for the clickable target.
 */
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
      badges: ['api-2.0', 'implementationExample'],
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
