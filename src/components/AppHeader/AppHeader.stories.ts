import type { StoryObj, Meta } from '@storybook/react';

import { AppHeader } from './AppHeader';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: {
    badges: ['api-1.0', 'theme-2.0'],
  },
} as Meta<typeof AppHeader>;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    title: 'Title',
    subTitle: 'Sub-title',
    navGroups: [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'Link Item One',
            type: 'link',
            href: 'https://example.org',
          },
          {
            name: 'Link Item Two',
            type: 'link',
            href: 'https://example.org',
          },
          {
            name: 'Link Item Three',
            type: 'link',
            href: 'https://example.org',
          },
        ],
      },
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Log out',
            type: 'link',
            href: 'https://example.org',
            icon: 'logout',
            iconLayout: 'left',
          },
        ],
      },
    ],
  },
};

export const Buttons: Story = {
  args: {
    title: 'Title',
    subTitle: 'Sub-title',
    navGroups: [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'Link Item One',
            type: 'button',
          },
          {
            name: 'Link Item Two',
            type: 'button',
          },
          {
            name: 'sep1',
            type: 'separator',
          },
          {
            name: 'Link Item Three',
            type: 'link',
            href: 'https://example.org',
          },
        ],
      },
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Log out',
            type: 'link',
            href: 'https://example.org',
            icon: 'logout',
            iconLayout: 'left',
          },
        ],
      },
    ],
  },
};

export const VerticalOrientation: Story = {
  args: {
    ...Buttons.args,
    orientation: 'vertical',
  },
};
