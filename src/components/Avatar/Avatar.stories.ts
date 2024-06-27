import type { StoryObj, Meta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    badges: ['intro-1.3', 'current-1.3'],
    layout: 'centered',
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    shape: 'circle',
    variant: 'icon',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    shape: 'circle',
    variant: 'icon',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    shape: 'circle',
    variant: 'icon',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    shape: 'circle',
    variant: 'icon',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    shape: 'circle',
    variant: 'icon',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    size: 'xxl',
    shape: 'circle',
    variant: 'icon',
  },
};

export const ExtraExtraExtraLarge: Story = {
  args: {
    size: 'xxxl',
    shape: 'circle',
    variant: 'icon',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    size: 'md',
    variant: 'icon',
  },
};

/**
 * You can set the image source when using the `image` variant of the icon component. Here we use an inline SVG, but
 * it can also point to a regular URI.
 */
export const UsingImage: Story = {
  args: {
    variant: 'image',
    src: `data:image/svg+xml,%3csvg width='38' height='37' viewBox='0 0 38 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19 17.9417C16.4333 17.9417 14.3333 17.125 12.7 15.4917C11.0667 13.8583 10.25 11.7583 10.25 9.19168C10.25 6.62502 11.0667 4.52501 12.7 2.89168C14.3333 1.25835 16.4333 0.441681 19 0.441681C21.5667 0.441681 23.6667 1.25835 25.3 2.89168C26.9333 4.52501 27.75 6.62502 27.75 9.19168C27.75 11.7583 26.9333 13.8583 25.3 15.4917C23.6667 17.125 21.5667 17.9417 19 17.9417ZM0.333344 36.6667V31.1833C0.333344 29.7056 0.702788 28.4417 1.44168 27.3917C2.18057 26.3417 3.13334 25.5445 4.30001 25C6.90557 23.8333 9.40418 22.9583 11.7958 22.375C14.1875 21.7917 16.5889 21.5 19 21.5C21.4111 21.5 23.8028 21.8014 26.175 22.4042C28.5472 23.007 31.0361 23.8722 33.6417 25C34.8472 25.5445 35.8195 26.3417 36.5583 27.3917C37.2972 28.4417 37.6667 29.7056 37.6667 31.1833V36.6667H0.333344Z' fill='%235D6369'/%3e%3c/svg%3e`,
    size: 'md',
    shape: 'circle',
  },
};

/**
 * When using the `"icon"` variant, you can select any of the named icons from EDS. here, we specify the `"person-add"` icon.
 */
export const WithCustomIcon: Story = {
  args: {
    ariaLabel: 'Custom label for avatar',
    size: 'md',
    shape: 'circle',
    variant: 'icon',
    icon: 'person-add',
  },
};

/**
 * Initials can be auto-generated from the given user data. EDS uses a built-in algorithm to extract meaningful initials from
 * several name formats.
 */
export const UsingInitials: Story = {
  args: {
    size: 'md',
    shape: 'circle',
    variant: 'initials',
    user: {
      fullName: 'John Smith',
      id: '12345',
      hasArbitraryMetadata: true,
    },
  },
};

/**
 * Initials can also be specified directly by using the `displayName` key in the user object. This allows for initials in the
 * avatar that aren't composed from the user's name (`fullName`).
 */
export const UsingEmoji: Story = {
  args: {
    shape: 'circle',
    variant: 'initials',
    user: {
      fullName: 'Young Yarn Lad',
      displayName: '🧶👦🏽',
      id: '12345',
      hasArbitraryMetadata: true,
    },
    size: 'lg',
  },
};

/**
 * When using the `"image"` variant, you may not have a source defined. In such cases it will fall back to a text display for
 * the user, using either an auto-generated set of initials OR, `displayName`.
 */
export const WhenImageVariantMissingSource: Story = {
  args: {
    shape: 'circle',
    variant: 'image',
    user: {
      fullName: 'Young Yarn Lad',
      id: '12345',
      hasArbitraryMetadata: true,
      moreMetadata: 123,
    },
    size: 'lg',
  },
};

/**
 * `Avatar supports unicode so names with multi-byte characters, or multiple sequences (emoji) are also supported.
 */
export const UsingMultibyteUnicode: Story = {
  args: {
    shape: 'circle',
    variant: 'image',
    user: {
      fullName: '你好世界',
      id: '12345',
      hasArbitraryMetadata: true,
      moreMetadata: 123,
    },
    size: 'lg',
  },
};
