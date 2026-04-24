import type { StoryObj, Meta } from '@storybook/react-webpack5';

import React from 'react';

import { PopoverListItem } from './PopoverListItem';

import Avatar from '../Avatar';
import Icon from '../Icon';

export default {
  title: 'Components/PopoverListItem',
  component: PopoverListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'version:2.1.0'],
  argTypes: {
    icon: {
      table: { disable: true },
    },
    leadingContent: {
      control: false,
    },
    __type: {
      table: {
        disable: true,
      },
    },
    trailingContent: {
      control: false,
    },
  },
} as Meta<React.ComponentProps<typeof PopoverListItem>>;

type Story = StoryObj<React.ComponentProps<typeof PopoverListItem>>;

export const Default: Story = {
  args: {
    children: 'Favorite',
    leadingContent: (
      <Icon name={'heart-filled'} purpose="decorative" size="24px" />
    ),
    subLabel: 'Save posts for later',
  },
};

/**
 * Note: using `__type` list item b/c there is no icon to display. Other types preserve icon space for checkboxes.
 */
export const WithNoIcon: Story = {
  args: {
    ...Default.args,
    leadingContent: undefined,
    children: 'Favorite',
    subLabel: 'Save posts for later',
    __type: 'listitem',
  },
};

/**
 * Popover list items can be disabled, and ignore all user interaction.
 *
 * Note: using `__type` list item b/c there is no icon to display
 */
export const Disabled: Story = {
  args: {
    children: 'Print',
    leadingContent: <Icon name={'print'} purpose="decorative" size="24px" />,
    isDisabled: true,
    __type: 'listitem',
  },
};

/**
 * Popover list items can be marked as destructive, with support for all of the other options.
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    leadingContent: <Icon name="trash" purpose="decorative" size="24px" />,
    isDestructiveAction: true,
  },
};

/**
 * Leading content is a flexible slot, and can contain many elements, including `Avatar`s.
 */
export const WithLeadingAvatar: Story = {
  args: {
    children: 'Switch account',
    leadingContent: <Avatar icon="arrows-circular" size="sm" variant="icon" />,
  },
};

/**
 * List items can also have trailing content. By default this is plain text, but can also function as a flexible slot.
 */
export const WithLeadingAndTrailingContent: Story = {
  args: {
    children: 'Add comment',
    leadingContent: (
      <Icon name="document-blank" purpose="decorative" size="24px" />
    ),
    trailingContent: '5',
  },
};

/**
 * This includes displaying keyboard shortcuts using system glyphs.
 */
export const WithKeyboardShortcut: Story = {
  args: {
    ...WithLeadingAndTrailingContent.args,
    trailingContent: '⌘K',
  },
};

/**
 * Separators exist to improve the appearance of related/grouped menu items.
 *
 * Note: uses `__type="separator"`.
 */
export const Separator: Story = {
  args: {
    __type: 'separator',
  },
};

/**
 * Captions can be used to display non-interactive, supplementary text in a menu (e.g., a copyright footer).
 *
 * Note: uses `__type="caption"`.
 */
export const Caption: Story = {
  args: {
    __type: 'caption',
    children: 'Copyright 2005 Logo Ipsum Inc. All rights reserved.',
  },
};

/**
 * Labels can help label the content within a popover list item section.
 *
 * Note: uses `__type="label"`.
 */
export const Label: Story = {
  args: {
    __type: 'label',
    children: 'Account',
  },
};
