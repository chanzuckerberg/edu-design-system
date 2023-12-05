import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Link, type LinkProps } from './Link';

import Icon from '../Icon';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    badges: ['1.0'],
  },
  args: {
    children: 'Link',
    variant: 'link',
    status: 'brand',
    fullWidth: false,
    size: 'lg',
    href: 'https://go.czi.team/eds',
    // stop link from navigating to another page so we can click the link for testing
    onClick: (event: any) => event.preventDefault(),
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['link'],
    },
    status: {
      control: {
        type: 'select',
      },
      options: ['brand', 'neutral'],
    },
    size: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Link>;

export const Default: StoryObj<Args> = {};

export const LinkRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon
          name="open-in-new"
          purpose="informative"
          title="opens in a new tab"
        />
      </>
    ),
  },
};

export const LinkNeutral: StoryObj<Args> = {
  args: {
    status: 'neutral',
  },
};

export const LinkInParagraphContext: StoryObj<Args> = {
  render: (
    args: React.JSX.IntrinsicAttributes &
      (LinkProps & React.RefAttributes<HTMLAnchorElement>),
  ) => (
    <div>
      Lorem ipsum dolor sit amet,{' '}
      <Link {...args} href="https://go.czi.team/eds">
        consectetur adipiscing elit
      </Link>
      . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
      <Link {...args} href="https://go.czi.team/eds">
        Aliquam pellentesque ipsum sagittis, commodo neque at, ornare est.
        Maecenas a malesuada sem, vitae euismod erat. Nullam molestie nunc non
        dui dignissim fermentum.
      </Link>{' '}
      Aliquam id volutpat nulla, sed auctor orci. Fusce cursus leo nisi. Fusce
      vehicula vitae nisl nec ultricies. Cras ut enim nec magna semper egestas.
      Sed sed quam id nisl bibendum convallis. Proin suscipit, odio{' '}
      <Link {...args} href="https://go.czi.team/eds">
        vel pulvinar
      </Link>{' '}
      euismod, risus eros ullamcorper lectus, non blandit nulla dui eget massa.
    </div>
  ),
};
