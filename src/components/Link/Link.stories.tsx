import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Link, type LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Link',
    size: 'lg',
    href: 'http://example.org/',
    // stop link from navigating to another page so we can click the link for testing
    onClick: (event: any) => event.preventDefault(),
  },
  decorators: [
    (Story) => <div className="text-utility-default-primary">{Story()}</div>,
  ],
  tags: ['autodocs', 'version:2.0'],
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};

/**
 * When using standalone context, you can specify a trailing icon for the link.
 *
 * **NOTE**: support for applying the chevron only works when `emphasis` is set to "low".
 */
export const LinkWithChevron: Story = {
  args: {
    children: 'Default',
    context: 'standalone',
    emphasis: 'low',
    icon: 'chevron-right',
  },
};

/**
 * When using standalone context, you can specify a trailing icon for the link. When using the open icon, make sure that a new tab/window is opened.
 */
export const LinkWithOpenIcon: Story = {
  args: {
    children: 'Default',
    context: 'standalone',
    icon: 'open-in-new',
  },
};

/**
 * You can add formatting to a link if needed.
 */
export const LinkWithFormattedChildren: Story = {
  args: {
    children: <em>emphasized link</em>,
    context: 'standalone',
    icon: 'open-in-new',
  },
};

/**
 * Standalone links can have additional emphasis or minimized emphasis applied.
 */
export const Emphasis: Story = {
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
        <br />
        <Link {...args} emphasis="high">
          High Emphasis
        </Link>
        <br />
        <Link {...args} emphasis="low">
          Low Emphasis
        </Link>
      </div>
    );
  },
};

/**
 * Standalone inverse links take on a specific inverse color.
 */
export const StandaloneInverseVariant: Story = {
  args: {
    context: 'standalone',
    variant: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'background-utility-default-high-emphasis' },
  },
};

/**
 * Inline always take on the color of the container. When using an inline link, wrap the text with a proper color text token.
 */
export const InverseVariant: Story = {
  args: {
    variant: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'background-utility-default-high-emphasis' },
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-spacing-size-half text-center text-utility-inverse">
        {Story()}
      </div>
    ),
  ],
};

export const LinkInParagraphContext: StoryObj<ExtendArgs> = {
  render: (args) => (
    <div>
      Lorem ipsum dolor sit amet,{' '}
      <Link {...args} href="https://example.com/">
        consectetur adipiscing elit
      </Link>
      . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
      <Link {...args} href="https://example.org">
        Aliquam pellentesque ipsum sagittis, commodo neque at, ornare est.
        Maecenas a malesuada sem, vitae euismod erat. Nullam molestie nunc non
        dui dignissim fermentum.
      </Link>{' '}
      Aliquam id volutpat nulla, sed auctor orci. Fusce cursus leo nisi. Fusce
      vehicula vitae nisl nec ultricies. Cras ut enim nec magna semper egestas.
      Sed sed quam id nisl bibendum convallis. Proin suscipit, odio{' '}
      <Link {...args} href="https://example.edu">
        vel pulvinar
      </Link>{' '}
      euismod, risus eros ullamcorper lectus, non blandit nulla dui eget massa.
    </div>
  ),
};

/**
 * Inline links will inherit the color from the surrounding text color definition (default emphasis)
 */
export const InheritColor: Story = {
  args: {
    children: 'Inheriting',
  },
  render: (args) => (
    <div>
      Lorem ipsum dolor sit amet,{' '}
      <Link {...args} href="https://example.com/">
        consectetur adipiscing elit
      </Link>
      . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
      <Link {...args} href="https://example.org">
        Aliquam pellentesque ipsum sagittis, commodo neque at, ornare est.
        Maecenas a malesuada sem, vitae euismod erat. Nullam molestie nunc non
        dui dignissim fermentum.
      </Link>{' '}
      Aliquam id volutpat nulla, sed auctor orci. Fusce cursus leo nisi. Fusce
      vehicula vitae nisl nec ultricies. Cras ut enim nec magna semper egestas.
      Sed sed quam id nisl bibendum convallis. Proin suscipit, odio{' '}
      <Link {...args} href="https://example.edu">
        vel pulvinar
      </Link>{' '}
      euismod, risus eros ullamcorper lectus, non blandit nulla dui eget massa.
    </div>
  ),
  decorators: [
    (Story) => <div className="text-utility-critical">{Story()}</div>,
  ],
};

/**
 * Here, we introduce a special type extension to LinkProps, then use it in a
 * composed component, to demonstrate the ability to offer custom props to a component
 */
type ExtendArgs = LinkProps<{ to: string }>;
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
 * * use the type param. to augment the types for `Link` with the library's type
 * * Now export a new function component that uses the new prop type and returns a composed component
 *
 * When using this pattern, you likely want to also specify the library's Link component using `as`
 *
 * ```tsx
 * // At the top of the file, we import `CustomLink` as a component
 *
 * type CustomLinkProps = React.ComponentProps<typeof CustomLink>;
 * type ExtendedProps = LinkProps<CustomLinkProps>;
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
      <ExtendedLink
        {...args}
        href="https://example.org/extended-link/"
        to="test"
      >
        consectetur adipiscing elit
      </ExtendedLink>
      . Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
    </div>
  ),
};
