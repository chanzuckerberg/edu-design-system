import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button, type ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    isFullWidth: false,
    size: 'lg',
    isLoading: false,
  },
  argTypes: {
    isFullWidth: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
  },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/**
 * Each button can come in a set of ranks, denoting the importance of the button to the surrounding user interface.
 */
export const DefaultRanks: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex gap-1">
        <Button {...args} rank="primary">
          Primary
        </Button>
        <Button {...args} rank="secondary">
          Secondary
        </Button>
        <Button {...args} rank="tertiary">
          Tertiary
        </Button>
      </div>
    );
  },
};

/**
 * Buttons can be disabled for each rank using `isDisabled`
 */
export const Disabled: Story = {
  args: {
    ...DefaultRanks.args,
    isDisabled: true,
  },
  render: DefaultRanks.render,
};

/**
 * Since `isDisabled` will set the form's proper disabled state, don't use just `disabled`. This will show a visual error.
 */
export const JustDisabledProp: Story = {
  args: {
    ...DefaultRanks.args,
    disabled: true,
  },
  render: DefaultRanks.render,
  decorators: [(Story) => <div className="p-1">{Story()}</div>],
};

/**
 * Tertiary buttons can have an additional level of emphasis when stood by themselves. Use this case sparingly.
 */
export const TertiaryStandalone: Story = {
  args: {
    rank: 'tertiary',
    context: 'standalone',
  },
};

/**
 * Each button has variants denoting criticality, like for changes that are permanent, deletions, etc.
 */
export const CriticalRanks: Story = {
  args: {
    ...DefaultRanks.args,
    variant: 'critical',
  },
  render: DefaultRanks.render,
};

/**
 * There is also a neutral variant, to combine into other components, or provide a muted appearance.
 */
export const NeutralRanks: Story = {
  args: {
    ...DefaultRanks.args,
    variant: 'neutral',
  },
  render: DefaultRanks.render,
};

/**
 * Each rank also includes an inverse variant, for use on dark backgrounds.
 */
export const InverseRanks: Story = {
  args: {
    ...DefaultRanks.args,
    variant: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'background-utility-default-high-emphasis' },
  },
  render: DefaultRanks.render,
  decorators: [(Story) => <div className="p-1">{Story()}</div>],
};

/**
 * Inverse buttons can be disabled as well
 */
export const InverseDisabledRanks: Story = {
  args: {
    ...DefaultRanks.args,
    variant: 'inverse',
    isDisabled: true,
  },
  parameters: {
    backgrounds: { default: 'background-utility-default-high-emphasis' },
  },
  render: DefaultRanks.render,
  decorators: [(Story) => <div className="p-1">{Story()}</div>],
};

/**
 * Buttons come in three sizes
 */
export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-1">
        <Button {...args} size="lg">
          Large
        </Button>
        <Button {...args} size="md">
          Medium
        </Button>
        <Button {...args} size="sm">
          Small
        </Button>
      </div>
    );
  },
};

/**
 * Buttons can come with full width set, which will expand the button to its maximum width (diferent for each size)
 */
export const FullWidths: Story = {
  args: {
    ...Sizes.args,
    isFullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
  render: Sizes.render,
};

/**
 * When in the loading state, a button will show a loading indicator in place of the normal button text, maintaining the initial size.
 */
export const LoadingStates: Story = {
  args: {
    ...Sizes.args,
    isLoading: true,
  },
  render: Sizes.render,
};

/**
 * `iconLayout` lets you place the icons adjacent to button text, or as the only visible element.
 * When using `"icon-only"`, you **must** include a label (e.g., via `aria-label`).
 */
export const IconLayouts: Story = {
  args: {
    ...Default.args,
    children: undefined,
    icon: 'open-in-new',
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-1">
        <Button {...args} iconLayout="left">
          Left
        </Button>
        <Button {...args} iconLayout="right">
          Right
        </Button>
        <Button
          {...args}
          aria-label="Label must be applied with icon-only layout"
          iconLayout="icon-only"
        />
      </div>
    );
  },
};

// Here, we introduce a special type extension to LinkProps, then use it in a
// composed component, to demonstrate the ability to offer custom props to a component
type ExtendArgs = ButtonProps<{ to: string }>;
function ExtendedButton(args: ExtendArgs) {
  return (
    // eslint-disable-next-line no-alert
    <Button {...args} onClick={() => alert(`handle to value: ${args.to}`)} />
  );
}

/**
 * You can extend a component's props for use with libraries that aid navigation, e.g., react-dom-router, et al.
 *
 * Steps to use:
 *
 * * import `ButtonProps`
 * * use the type param. to augment the types for `Button` with the library's type
 * * Now export a new function component that uses the new prop type and returns a composed function
 *
 * When using this pattern, you likely want to also specify the library's Button component using `as`
 *
 * ```tsx
 * type CustomLinkProps = React.ComponentProps<typeof CustomLink>;
 * type ExtendedProps = LinkProps<CustomLinkProps>;
 *
 * export default function Button({children, ...other}: ExtendedProps) {
 *   return (
 *    <Button as={CustomButton} {...other}>
 *      {children}
 *    </Button>
 *   );
 * }
 * ```
 */
export const UsingExtendedLink: StoryObj<ExtendArgs> = {
  render: (args) => (
    <div>
      Lorem ipsum dolor sit amet, . Morbi porta at ante quis molestie. Nam
      scelerisque id diam at iaculis. Nullam sit amet iaculis erat. Nulla id
      tellus ante.{' '}
      <ExtendedButton {...args} to="test">
        consectetur adipiscing elit
      </ExtendedButton>
    </div>
  ),
};
