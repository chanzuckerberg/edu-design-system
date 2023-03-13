import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    shape: 'circle',
    variant: 'icon',
  },
  parameters: {
    badges: ['1.3', BADGE.BETA],
    layout: 'centered',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Avatar>;

export const Default: StoryObj<Args> = {
  args: {},
};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Medium: StoryObj<Args> = {
  args: {
    size: 'md',
  },
};

export const Large: StoryObj<Args> = {
  args: {
    size: 'lg',
  },
};

export const Square: StoryObj<Args> = {
  args: {
    shape: 'square',
  },
};

export const UsingImage: StoryObj<Args> = {
  args: {
    variant: 'image',
    src: `data:image/svg+xml,%3csvg width='38' height='37' viewBox='0 0 38 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19 17.9417C16.4333 17.9417 14.3333 17.125 12.7 15.4917C11.0667 13.8583 10.25 11.7583 10.25 9.19168C10.25 6.62502 11.0667 4.52501 12.7 2.89168C14.3333 1.25835 16.4333 0.441681 19 0.441681C21.5667 0.441681 23.6667 1.25835 25.3 2.89168C26.9333 4.52501 27.75 6.62502 27.75 9.19168C27.75 11.7583 26.9333 13.8583 25.3 15.4917C23.6667 17.125 21.5667 17.9417 19 17.9417ZM0.333344 36.6667V31.1833C0.333344 29.7056 0.702788 28.4417 1.44168 27.3917C2.18057 26.3417 3.13334 25.5445 4.30001 25C6.90557 23.8333 9.40418 22.9583 11.7958 22.375C14.1875 21.7917 16.5889 21.5 19 21.5C21.4111 21.5 23.8028 21.8014 26.175 22.4042C28.5472 23.007 31.0361 23.8722 33.6417 25C34.8472 25.5445 35.8195 26.3417 36.5583 27.3917C37.2972 28.4417 37.6667 29.7056 37.6667 31.1833V36.6667H0.333344Z' fill='%235D6369'/%3e%3c/svg%3e`,
  },
};

export const WithCustomLabel: StoryObj<Args> = {
  args: {
    ariaLabel: 'Custom label for avatar',
  },
};

export const UsingInitials: StoryObj<Args> = {
  args: {
    variant: 'initials',
    user: {
      fullName: 'John Smith',
      id: '12345',
      hasArbitraryMetadata: true,
    },
  },
};
