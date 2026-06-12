import type { StoryObj, Meta } from '@storybook/react-webpack5';

import React from 'react';

import { AppFooter } from './AppFooter';
import { chromaticViewports } from '../../util/viewports';

export default {
  title: 'Components/AppFooter',
  component: AppFooter,

  parameters: {
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
      ],
    },
  },

  args: {
    title: <div className="fpo h-[40px] w-[175px]">Logo goes here</div>,
    navItems: [
      {
        type: 'link',
        name: 'Support',
        href: '#support',
      },
      {
        type: 'link',
        name: 'Terms of Use',
        href: '#tos',
      },
      {
        type: 'link',
        name: 'Privacy Policy',
        href: '#privacy',
      },
      {
        type: 'link',
        name: 'Community Guidelines',
        href: '#guidelines',
      },
    ],
  },

  tags: ['autodocs', 'beta', 'version:1.0'],
} as Meta<typeof AppFooter>;

type Story = StoryObj<typeof AppFooter>;

export const Default: Story = {
  args: {},
};

export const WithTextLogo: Story = {
  args: {
    title: 'Logo Ipsum, Inc.',
  },
};

export const WithCopyright: Story = {
  args: {
    copyright: 'Copyright © 2026',
  },
};

/**
 * Footers using the `href` prop get a link on the logo/text.
 */
export const WithFooterLink: Story = {
  args: {
    ...WithCopyright.args,
    href: 'http://example.org/',
  },
};

export const WithTextLogoAndCopyright: Story = {
  args: {
    ...WithTextLogo.args,
    ...WithFooterLink.args,
  },
};

/**
 * When using the low emphasis footer, make sure not to include any logo or copyright elements.
 */
export const LowEmphasis: Story = {
  args: {
    ...Default.args,
    title: undefined,
    emphasis: 'low',
  },
};

export const HighEmphasis: Story = {
  args: {
    ...WithCopyright.args,
    emphasis: 'high',
  },
};
