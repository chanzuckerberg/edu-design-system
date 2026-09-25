import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AppHeader } from './AppHeader';
import * as stories from './AppHeader.stories';

import type { StoryFile } from '../../../.storybook/utility-types';
import type { NavGroup } from '../../util/utility-types';

describe('<AppHeader />', () => {
  generateSnapshots(stories as StoryFile);

  it('handles clicks on nav items types (horizontal)', async () => {
    const user = userEvent.setup();
    const onButtonClickMock = vi.fn();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        navGroups={[
          {
            name: 'group-1',
            navItems: [
              {
                name: 'Lakes',
                type: 'button',
                meta: {
                  name: 'track-value',
                  value: 3,
                },
              },
              {
                name: 'Oceans',
                type: 'button',
              },
              {
                name: 'sep1',
                type: 'separator',
              },
              {
                name: 'Rivers',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'group-2',
            navItems: [
              {
                name: 'Profile',
                type: 'link',
                href: '#',
                icon: 'person-encircled',
                iconLayout: 'right',
                meta: {
                  name: 'track-value',
                  value: 4,
                  mutate: true,
                },
              },
            ],
          },
        ]}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Lakes',
      type: 'button',
      meta: {
        name: 'track-value',
        value: 3,
      },
    });

    await user.click(screen.getAllByRole('button')[1]);
    expect(onButtonClickMock.mock.calls[1][1]).toEqual({
      name: 'Oceans',
      type: 'button',
    });

    expect(onButtonClickMock).toHaveBeenCalledTimes(2);

    await user.click(screen.getAllByRole('link')[1]);
    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Profile',
      type: 'link',
      href: '#',
      icon: 'person-encircled',
      iconLayout: 'right',
      meta: {
        name: 'track-value',
        value: 4,
        mutate: true,
      },
    });
  });

  it('handles onLinkClick handler on nested menus (EDS-1829)', async () => {
    const onButtonClickMock = vi.fn();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        navGroups={[
          {
            name: 'group-1',
            navItems: [
              {
                name: 'Lakes',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Oceans',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Rivers',
                type: 'link',
                href: 'https://example.org',
                isExternal: true,
              },
            ],
          },
          {
            name: 'group-2',
            navItems: [
              {
                name: 'Profile',
                type: 'menu',
                icon: 'person-encircled',
                iconLayout: 'left',
                navItems: [
                  {
                    type: 'button',
                    name: 'Settings',
                  },
                  {
                    name: 'About Us',
                    type: 'link',
                    href: 'http://example.org',
                    isExternal: true,
                  },
                  {
                    type: 'link',
                    name: 'Sign Out',
                    href: 'https://example.org/#logout',
                  },
                  {
                    type: 'separator',
                    name: 'line',
                  },
                  {
                    type: 'label',
                    name: '© 2025 Your Company Name. All rights reserved.',
                  },
                ],
              },
            ],
          },
        ]}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        orientation="vertical"
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    await userEvent.keyboard(' ', { delay: 400 });
    await userEvent.keyboard('[ArrowDown][Enter]');

    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'About Us',
      type: 'link',
      href: 'http://example.org',
      isExternal: true,
    });
  });

  it('handles clicks on the app header (EDS-1839)', async () => {
    const user = userEvent.setup();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        href="#"
        onLinkClick={onLinkClickMock}
        subTitle="SubTest"
        title="Test"
      />,
    );

    await user.click(await screen.findByRole('link', { name: 'homepage' }));

    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'EDS-header-logo',
      type: 'link',
      href: '#',
    });
  });

  const clickLinkEventNavGroup: NavGroup[] = [
    {
      name: 'group-2',
      navItems: [
        {
          name: 'Profile',
          type: 'menu',
          icon: 'person-encircled',
          iconLayout: 'left',
          navItems: [
            {
              type: 'button',
              name: 'Skip This One',
            },
            {
              name: 'Also this one',
              type: 'link',
              href: '#',
              isExternal: true,
            },
            {
              type: 'link',
              name: 'Click this one',
              href: '#',
            },
          ],
        },
      ],
    },
  ];

  const clickButtonEventNavGroup: NavGroup[] = [
    {
      name: 'group-2',
      navItems: [
        {
          name: 'Profile',
          type: 'menu',
          icon: 'person-encircled',
          iconLayout: 'left',
          navItems: [
            {
              type: 'button',
              name: 'Skip This One',
            },
            {
              name: 'Also this one',
              type: 'link',
              href: '#',
              isExternal: true,
            },
            {
              type: 'button',
              name: 'Click this one',
            },
          ],
        },
      ],
    },
  ];

  it('handles clicks nested nav menu links (EDS-1839)', async () => {
    const user = userEvent.setup();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        href="#"
        navGroups={clickLinkEventNavGroup}
        onLinkClick={onLinkClickMock}
        subTitle="SubTest"
        title="Test"
      />,
    );

    await user.tab();
    await user.tab();
    await user.keyboard(' {arrowdown}{arrowdown}{enter}');

    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Click this one',
      type: 'link',
      href: '#',
    });
  });

  it('handles clicks nested nav menu links in orientation=vertical (EDS-1839)', async () => {
    const user = userEvent.setup();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        href="#"
        navGroups={clickLinkEventNavGroup}
        onLinkClick={onLinkClickMock}
        orientation="vertical"
        subTitle="SubTest"
        title="Test"
      />,
    );

    await user.tab();
    await user.tab();
    await user.keyboard(' {arrowdown}{arrowdown}{enter}');

    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Click this one',
      type: 'link',
      href: '#',
    });
  });

  it('handles clicks nested nav menu buttons (EDS-1839)', async () => {
    const user = userEvent.setup();
    const onLinkClickMock = vi.fn();
    const onButtonClickMock = vi.fn();

    render(
      <AppHeader
        href="#"
        navGroups={clickButtonEventNavGroup}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        subTitle="SubTest"
        title="Test"
      />,
    );

    await user.tab();
    await user.tab();
    await user.keyboard(' {arrowdown}{arrowdown}{enter}');

    expect(onLinkClickMock).not.toHaveBeenCalled();
    expect(onButtonClickMock).toHaveBeenCalled();
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Click this one',
      type: 'button',
    });
  });

  it('handles clicks nested nav menu buttons with orientation=vertical (EDS-1839)', async () => {
    const user = userEvent.setup();
    const onLinkClickMock = vi.fn();
    const onButtonClickMock = vi.fn();

    render(
      <AppHeader
        href="#"
        navGroups={clickButtonEventNavGroup}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        orientation="vertical"
        subTitle="SubTest"
        title="Test"
      />,
    );

    await user.tab();
    await user.tab();
    await user.keyboard(' {arrowdown}{arrowdown}{enter}');

    expect(onLinkClickMock).not.toHaveBeenCalled();
    expect(onButtonClickMock).toHaveBeenCalled();
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Click this one',
      type: 'button',
    });
  });

  it('handles clicks on nav item types (vertical)', async () => {
    const user = userEvent.setup();
    const onButtonClickMock = vi.fn();
    const onLinkClickMock = vi.fn();

    render(
      <AppHeader
        navGroups={[
          {
            name: 'group-1',
            navItems: [
              {
                name: 'Lakes',
                type: 'button',
              },
              {
                name: 'Oceans',
                type: 'button',
              },
              {
                name: 'sep1',
                type: 'separator',
              },
              {
                name: 'Rivers',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'group-2',
            navItems: [
              {
                name: 'Profile',
                type: 'link',
                href: '#',
                icon: 'person-encircled',
                iconLayout: 'right',
              },
            ],
          },
        ]}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        orientation="vertical"
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onButtonClickMock).toHaveBeenCalled();
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Lakes',
      type: 'button',
    });

    await user.click(screen.getAllByRole('link')[1]);
    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Profile',
      type: 'link',
      href: '#',
      icon: 'person-encircled',
      iconLayout: 'right',
    });
  });

  describe('tree nav items', () => {
    const treeNavGroups: NavGroup[] = [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'Lakes',
            type: 'tree',
            icon: 'person-encircled',
            iconLayout: 'left',
            navItems: [
              { name: 'Lake Superior', type: 'link', href: '#' },
              { name: 'sep1', type: 'separator' },
              { name: 'Refresh lakes', type: 'button' },
            ],
          },
          {
            name: 'Oceans',
            type: 'tree',
            icon: 'person-encircled',
            iconLayout: 'icon-only',
            navItems: [{ name: 'Pacific Ocean', type: 'link', href: '#' }],
          },
        ],
      },
    ];

    it('handles clicks on nested tree items (vertical)', async () => {
      const user = userEvent.setup();
      const onButtonClickMock = vi.fn();
      const onLinkClickMock = vi.fn();

      render(
        <AppHeader
          navGroups={treeNavGroups}
          onButtonClick={onButtonClickMock}
          onLinkClick={onLinkClickMock}
          orientation="vertical"
          title="Test"
        />,
      );

      // icon-only trees hide their label
      expect(screen.getByText('Lakes')).toBeInTheDocument();
      expect(screen.queryByText('Oceans')).not.toBeInTheDocument();

      await user.click(screen.getByRole('link', { name: 'Lake Superior' }));
      await user.click(screen.getByRole('button', { name: 'Refresh lakes' }));

      expect(onLinkClickMock).toHaveBeenCalledTimes(1);
      expect(onLinkClickMock.mock.calls[0][1]).toEqual({
        name: 'Lake Superior',
        type: 'link',
        href: '#',
      });
      expect(onButtonClickMock).toHaveBeenCalledTimes(1);
      expect(onButtonClickMock.mock.calls[0][1]).toEqual({
        name: 'Refresh lakes',
        type: 'button',
      });
    });

    it('allows clicks on nested tree items without handlers', async () => {
      const user = userEvent.setup();

      render(
        <AppHeader
          navGroups={treeNavGroups}
          orientation="vertical"
          title="Test"
        />,
      );

      await user.click(screen.getByRole('link', { name: 'Lake Superior' }));
      await user.click(screen.getByRole('button', { name: 'Refresh lakes' }));

      expect(
        screen.getByRole('button', { name: 'Refresh lakes' }),
      ).toBeVisible();
    });
  });

  describe('menu nav items', () => {
    const menuNavGroups: NavGroup[] = [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'Profile',
            type: 'menu',
            leadingContent: 'avatar',
            user: { fullName: 'Lorem Ipsum' },
            navItems: [
              { name: 'Organizations', type: 'label' },
              {
                name: 'Lorem Ipsum, Inc.',
                type: 'button',
                leadingContent: 'avatar',
                user: { fullName: 'Lorem Ipsum' },
                trailingContent: 'check',
                shouldClose: false,
              },
              {
                name: 'New organization',
                type: 'button',
                leadingContent: 'add-encircled',
                shouldClose: true,
              },
              {
                name: 'Help',
                type: 'link',
                href: '#',
                trailingContent: 'open-in-new',
                shouldClose: false,
              },
            ],
          },
        ],
      },
    ];

    const openMenu = async (user: ReturnType<typeof userEvent.setup>) => {
      await user.click(
        within(screen.getByRole('banner')).getByRole('button', {
          name: /Profile/,
        }),
      );
      return screen.getByRole('menu');
    };

    it('renders labels and leading/trailing content for menu items', async () => {
      const user = userEvent.setup();

      render(<AppHeader navGroups={menuNavGroups} title="Test" />);
      const menu = await openMenu(user);

      expect(within(menu).getByText('Organizations')).toBeInTheDocument();
      expect(
        within(menu).getByRole('menuitem', { name: /Lorem Ipsum, Inc./ }),
      ).toBeInTheDocument();
      expect(
        within(menu).getByRole('menuitem', { name: /New organization/ }),
      ).toBeInTheDocument();
    });

    it('keeps the menu open when shouldClose is false', async () => {
      const user = userEvent.setup();
      const onButtonClickMock = vi.fn();
      const onLinkClickMock = vi.fn();

      render(
        <AppHeader
          navGroups={menuNavGroups}
          onButtonClick={onButtonClickMock}
          onLinkClick={onLinkClickMock}
          title="Test"
        />,
      );
      const menu = await openMenu(user);

      await user.click(
        within(menu).getByRole('menuitem', { name: /Lorem Ipsum, Inc./ }),
      );
      await user.click(within(menu).getByRole('menuitem', { name: /Help/ }));

      expect(onButtonClickMock).toHaveBeenCalledTimes(1);
      expect(onLinkClickMock).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('closes the menu when shouldClose is true', async () => {
      const user = userEvent.setup();

      render(<AppHeader navGroups={menuNavGroups} title="Test" />);
      const menu = await openMenu(user);

      await user.click(
        within(menu).getByRole('menuitem', { name: /New organization/ }),
      );

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  describe('narrow screens', () => {
    const originalWidth = window.innerWidth;
    const navGroups: NavGroup[] = [
      {
        name: 'group-1',
        navItems: [
          { name: 'Lakes', type: 'button' },
          { name: 'Rivers', type: 'link', href: '#' },
        ],
      },
    ];

    afterEach(() => {
      window.innerWidth = originalWidth;
    });

    it('switches a vertical header to horizontal when the screen narrows', () => {
      render(
        <AppHeader navGroups={navGroups} orientation="vertical" title="Test" />,
      );
      expect(
        screen.queryByRole('button', { name: 'Show Menu' }),
      ).not.toBeInTheDocument();

      act(() => {
        window.innerWidth = 320;
        window.dispatchEvent(new Event('resize'));
      });

      expect(
        screen.getByRole('button', { name: 'Show Menu' }),
      ).toBeInTheDocument();
    });

    it('opens and closes the drawer, closing it on nav item clicks', async () => {
      const user = userEvent.setup();
      const onButtonClickMock = vi.fn();
      const onLinkClickMock = vi.fn();
      const showPopover = vi.fn();
      const hidePopover = vi.fn();

      render(
        <AppHeader
          navGroups={navGroups}
          onButtonClick={onButtonClickMock}
          onLinkClick={onLinkClickMock}
          title="Test"
        />,
      );

      const drawer = document.getElementById('popover') as HTMLElement;
      drawer.showPopover = showPopover;
      drawer.hidePopover = hidePopover;

      await user.click(screen.getByRole('button', { name: 'Show Menu' }));
      expect(showPopover).toHaveBeenCalledTimes(1);

      await user.click(within(drawer).getByRole('button', { name: 'Lakes' }));
      await user.click(within(drawer).getByRole('link', { name: 'Rivers' }));
      await user.click(
        within(drawer).getByRole('button', { name: 'Close popover menu' }),
      );

      expect(onButtonClickMock).toHaveBeenCalledTimes(1);
      expect(onLinkClickMock).toHaveBeenCalledTimes(1);
      expect(hidePopover).toHaveBeenCalledTimes(3);
    });
  });
});
