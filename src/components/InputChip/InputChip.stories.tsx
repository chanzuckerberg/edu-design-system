import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { InputChip } from './InputChip';
import FpoBlock from '../../storyUtils/FpoBlock';
import { alternativeSemanticIcons } from '../../storyUtils/semanticIconOverrides';
import { IconProvider } from '../Icon';

export default {
  title: 'Components/InputChip',
  component: InputChip,
  parameters: {
    docs: {
      subtitle:
        'Compact, interactive UI element used to display user-generated information.',
    },
  },
  argTypes: {
    onClick: {
      control: false,
    },
    leadingComponent: {
      control: false,
    },
  },
  tags: ['autodocs', 'version:1.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof InputChip>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Chip Label',
    onClick: () => {},
  },
};

export const WithLeadingIcon: StoryObj<Args> = {
  args: {
    ...Default.args,
    leadingComponent: 'person-encircled',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

/**
 * The leading slot takes arbitrary content, not only an EDS icon name. The block below
 * stands in for whatever you supply, so the slot itself is the subject rather than the icon
 * that happened to be picked.
 *
 * The slot's icon carries no explicit size, so it falls back to `1em` and resolves to 14px
 * against the chip's own type. The block matches that.
 */
export const WithFpoLeadingContent: StoryObj<Args> = {
  args: {
    ...Default.args,
    leadingComponent: <FpoBlock size={14} />,
  },
};

/**
 * The chip's action button comes from `IconProvider`, so it carries the same mark as the
 * close button on a `Modal` or a notification.
 *
 * The leading slot is not part of that. It is the consumer's to fill, per chip, and the
 * provider says nothing about it.
 */
export const WithProvidedIcons: StoryObj<Args> = {
  args: {
    ...WithLeadingIcon.args,
  },
  decorators: [
    (Story) => (
      <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>
    ),
  ],
};
