import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Link, type LinkV2Props } from './Link-v2';

export default {
  title: 'Components/V2/Link',
  component: Link,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  args: {
    children: 'Link',
    size: 'lg',
    href: 'https://go.czi.team/eds',
    // stop link from navigating to another page so we can click the link for testing
    onClick: (event: any) => event.preventDefault(),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Link>;

export const Default: StoryObj<Args> = {};

export const LinkWithChevron: StoryObj<Args> = {
  args: {
    children: 'Default',
    context: 'standalone',
    icon: 'chevron-right',
  },
};

export const LinkWithOpenIcon: StoryObj<Args> = {
  args: {
    children: 'Default',
    context: 'standalone',
    icon: 'open-in-new',
  },
};

export const Emphasis: StoryObj<Args> = {
  args: {
    size: 'md',
    context: 'standalone',
  },
  render: (args) => {
    return (
      <div>
        <Link {...args} emphasis="default">
          Default Emphasis
        </Link>
        <Link {...args} emphasis="high">
          High Emphasis
        </Link>
        <Link {...args} emphasis="low">
          Low Emphasis
        </Link>
      </div>
    );
  },
};

export const LinkInParagraphContext: StoryObj<ExtendArgs> = {
  render: (
    args: React.JSX.IntrinsicAttributes &
      (LinkV2Props & React.RefAttributes<HTMLAnchorElement>),
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

// Here, we introduce a special type extension to LinkProps, then use it in a
// composed component, to demonstrate the ability to offer custom props to a component
type ExtendArgs = LinkV2Props<{ to: string }>;
function ExtendedLink(args: ExtendArgs) {
  return (
    // eslint-disable-next-line no-alert
    <Link {...args} onClick={() => alert(`handle to value: ${args.to}`)} />
  );
}

/**
 * You can extend a component's props for use with libraries that aid navigation, e.g., react-dom-router, et al.
 *
 * Steps to use:
 *
 * * import `LinkProps`
 * * use the type param. to augment the types for `Link` with the libraries type, e.g., `type ExtendedProps = LinkProps<typeof CustomLink>;`
 * * Now export a new function component that uses the new prop type and returns a composed function
 *
 * When using this pattern, you likely want to also specify the library's Link component using `as`
 *
 * ```tsx
 * type ExtendedProps = LinkProps<typeof CustomLink>;
 *
 * export default function Link({children, ...other}: ExtendedProps) {
 *   return (
 *    <Link as={CustomLink} {...other}>
 *      {children}
 *    </Link>
 *   );
 * }
 * ```
 */
export const UsingExtendedLink: StoryObj<ExtendArgs> = {
  render: (args) => (
    <div>
      Lorem ipsum dolor sit amet,{' '}
      <ExtendedLink {...args} href="https://go.czi.team/eds" to="test">
        consectetur adipiscing elit
      </ExtendedLink>
      . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
    </div>
  ),
};
