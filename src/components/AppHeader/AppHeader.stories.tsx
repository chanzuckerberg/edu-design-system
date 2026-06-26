import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import isChromatic from 'chromatic/isChromatic';

import React from 'react';
import { userEvent } from 'storybook/test';

import { AppHeader } from './AppHeader';
import { chromaticViewports } from '../../util/viewports';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,

  parameters: {
    chromatic: {
      // Using this motion preference for components where they trigger animations on mount
      prefersReducedMotion: 'reduce',
      delay: 500,
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
      ],
    },
  },

  tags: ['autodocs', 'version:1.7'],
} as Meta<typeof AppHeader>;

type Story = StoryObj<typeof AppHeader>;

/**
 * `AppHeader` comes with some sensible defaults. Interactive items can have metadata added to allow for additional data when handling events.
 *
 * Use the `meta:` object in the nav item object to pass in additional information.
 */
export const Default: Story = {
  args: {
    title: 'Bodies of water',
    subTitle: "They're cool!",
    onButtonClick: (ev, navItem) => {
      console.log('button clicked', ev, navItem);
    },
    onLinkClick: (ev, navItem) => {
      console.log('link clicked', ev, navItem);
    },
    navGroups: [
      {
        name: 'lakes',
        navItems: [
          {
            name: 'Lakes',
            type: 'tree',
            meta: {
              name: 'track-value',
              value: 3,
            },
            navItems: [
              {
                name: 'Lake Superior',
                type: 'link',
                href: 'https://example.org',
                isCurrent: true,
              },
              {
                name: 'Lake Tahoe',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Crater Lake',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'Oceans',
            type: 'tree',
            navItems: [
              {
                name: 'Pacific Ocean',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Atlantic Ocean',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Arctic Ocean',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'Rivers',
            type: 'tree',
            navItems: [
              {
                name: 'Nile River',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Amazon River',
                type: 'link',
                href: 'https://example.org',
              },
              {
                name: 'Danube River',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
        ],
      },
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Documentation',
            type: 'link',
            isExternal: true,
            href: 'https://example.org',
          },
          {
            name: 'GitHub',
            type: 'link',
            isExternal: true,
            href: 'https://example.org',
          },
          {
            type: 'separator',
            name: 'line-0',
          },
          {
            name: 'Profile',
            type: 'menu',
            leadingContent: 'avatar',
            user: { fullName: 'Lorem Ipsum' },
            subLabel: 'sublabel',
            navItems: [
              {
                type: 'button',
                leadingContent: 'avatar',
                name: 'Lorem Ipsum, Inc.',
                user: { fullName: 'Lorem Ipsum' },
                trailingContent: 'check',
                shouldClose: false,
              },
              {
                type: 'button',
                leadingContent: 'avatar',
                name: 'Unknown Organization',
                shouldClose: false,
              },
              {
                type: 'button',
                leadingContent: 'add-encircled',
                name: 'New organization',
              },
              {
                type: 'separator',
                name: 'line-0',
              },
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
                type: 'caption',
                name: '© 2025 Your Company Name. All rights reserved.',
              },
            ],
          },
        ],
      },
    ],
  },
  globals: {
    viewport: {
      value: '',
      isRotated: false,
    },
  },
};

/**
 * Logos can also be an image (using either `<img>` or `<svg>` for format). When using logo, the maximum height
 * allowed is fixed, and the logo takes up the total possible vertical height.
 */
export const DefaultWithImageLogo: Story = {
  args: {
    ...Default.args,
    title: (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      <div className="fpo h-[36px] w-[175px]" tabIndex={0}>
        Logo goes here
      </div>
    ),
    href: 'https://example.org',
    subTitle: undefined,
  },
};

/**
 * `AppHeader` can take on a floating position, which adds some space between the edges of the screen.
 */
export const StyleFloating: Story = {
  args: {
    ...Default.args,
    style: 'floating',
  },
};

/**
 * Menus can exist in a vertical orientation as well, affixed to the left-hand side of the screen
 */
export const VerticalOrientation: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

/**
 * Vertical `AppHeader`s can also sit with a floating style.
 */
export const FloatingVerticalOrientation: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
    style: 'floating',
  },
};

/**
 * When empty, we do not render the menu button (there is nothing to show).
 */
export const MobileFloatingVerticalEmpty: Story = {
  args: {
    ...FloatingVerticalOrientation.args,
    orientation: 'vertical',
    navGroups: [],
  },
  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false,
    },
  },
};

/**
 * Logos are positioned properly when the orientation is vertical
 */
export const VerticalDefaultWithImageLogo: Story = {
  args: {
    ...DefaultWithImageLogo.args,
    orientation: 'vertical',
  },
};

/**
 * Provided links are accessible in horizontal orientation
 */
export const ImageLogoFocus: Story = {
  args: {
    ...DefaultWithImageLogo.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  play: async () => {
    await userEvent.tab();
  },
};

/**
 * Provided links are accessible in vertical orientation
 */
export const VerticalImageLogoFocus: Story = {
  args: {
    ...VerticalDefaultWithImageLogo.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  play: async () => {
    await userEvent.tab();
  },
};

/**
 * Chromatic Test: show the full size menu on snapshot
 */
export const CanExpandFullSizeMenu: Story = {
  tags: ['code-only'],

  args: {
    ...Default.args,
  },

  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: { delay: 300, viewports: [chromaticViewports.chromebook] },

    snapshot: {
      skip: true,
    },
  },

  // Select the menu then expand it with the keyboard. set up for snapshotting
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    if (isChromatic()) {
      await userEvent.keyboard(' ', { delay: 300 });
    }
  },

  globals: {
    viewport: {
      value: 'macbookPro',
      isRotated: false,
    },
  },
};

/**
 * Chromatic Test: Verify opening of hamburger menu
 */
export const CanExpandHamburgerMenu: Story = {
  tags: ['code-only'],

  args: {
    ...Default.args,
  },

  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: { delay: 500, viewports: [chromaticViewports.googlePixel2] },

    snapshot: {
      skip: true,
    },
  },

  // Select the menu then expand it with the keyboard. set up for snapshotting
  play: async () => {
    await userEvent.tab();

    if (isChromatic()) {
      await userEvent.keyboard(' ', { delay: 400 });
    }
  },

  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false,
    },
  },
};

/**
 * Chromatic Test: Verify focus ring on nav items (EDS-1820)
 */
export const CanFocusMenuItem: Story = {
  tags: ['code-only'],

  args: {
    ...Default.args,
    orientation: 'vertical',
  },

  parameters: {
    snapshot: {
      skip: true,
    },
  },

  // Select the menu then expand it with the keyboard. set up for snapshotting
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
  },

  globals: {
    viewport: {
      value: 'googlePixel2',
      isRotated: false,
    },
  },
};

/**
 * When rendering the content of `AppHeader` dynamically, it can be given invalid sub-menu types. This is handled via
 * non-interactive fallbacks showing "N/A".
 */
export const CanHandleFallbackNavMenus: Story = {
  tags: ['code-only'],

  args: {
    title: 'Bodies of water',
    subTitle: "They're cool!",

    navGroups: [
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Show Profile',
            type: 'menu',
            navItems: [
              {
                // @ts-expect-error using invalid type on purpose
                type: 'custom',
                name: 'Settings',
              },
            ],
          },
        ],
      },
    ],
  },

  play: async () => {
    if (isChromatic()) {
      await userEvent.tab();
      await userEvent.keyboard(' ', { delay: 300 });
    }
  },
};
