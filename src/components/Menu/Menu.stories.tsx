import type { StoryObj, Meta } from '@storybook/react-webpack5';
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
    __type: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-spacing-size-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'version:3.1.1'],
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
          <Menu.Item href="https://headlessui.com/react/menu#menu-button">
            Headless UI Docs
          </Menu.Item>
          <Menu.Item href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu">
            MDN: Menu
          </Menu.Item>
          {}
          <Menu.Item onClick={() => console.log('item clicked')}>
            Trigger Action
          </Menu.Item>
          <Menu.Item disabled href="https://example.org/">
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </>
    ),
  },
};

/**
 * Use an interactive `Avatar` component within `.PlainButton` to achieve a clickable avatar with menu attached.
 *
 * This will dynamically add the focus ring to the wrapper component since it is needed to make the `Avatar`-based trigger accessible
 */
export const MenuWithAvatarButton: Story = {
  tags: ['code-only'],
  args: {
    children: (
      <>
        <Menu.PlainButton>
          <Avatar isInteractive user={{ fullName: 'Josie Sandberg' }} />
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
 * For testing purposes: This triggers an open menu that has no icons.
 */
export const IconlessOpened: Story = {
  ...WithLongButtonText,
  parameters: {
    ...WithLongButtonText.parameters,
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
    tags: ['code-only'],
    render: ({ iconName }) => (
      <Menu>
        <Menu.PlainButton>
          <Icon
            name={iconName}
            purpose="informative"
            size="32px"
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
          <Menu.Item disabled href="https://example.org/" icon="warning-filled">
            Not Possible (disabled)
          </Menu.Item>
        </Menu.Items>
      </Menu>
    ),
  };
