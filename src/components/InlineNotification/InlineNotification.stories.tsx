import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { InlineNotification } from './InlineNotification';
import { alternativeSemanticIcons } from '../../storyUtils/semanticIconOverrides';
import { IconProvider } from '../Icon';

export default {
  title: 'Components/InlineNotification',
  component: InlineNotification,
  parameters: {
    docs: {
      subtitle:
        'An alert is placed within a page section to provide a contextual notification. For example, an error that applies to multiple fields within a form.',
    },
    layout: 'centered',
  },
  args: {
    title: 'Inline notifications lorem ipsum text',
    className: 'w-[384px]',
  },
  tags: ['autodocs', 'version:2.2.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof InlineNotification>;

export const Default: StoryObj<Args> = {};

export const WithSubTitle: StoryObj<Args> = {
  args: {
    ...Default.args,
    subTitle: 'Additional text which provides additional detail',
  },
};

export const WithFormattedSubTitle: StoryObj<Args> = {
  args: {
    ...Default.args,
    subTitle: (
      <span>
        <em>Additional text</em> which provides additional detail
      </span>
    ),
  },
};

export const Favorable: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'favorable',
  },
};

export const Warning: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'warning',
  },
};

export const Critical: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'critical',
  },
};

export const LongText: StoryObj<Args> = {
  args: {
    title:
      'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

/**
 * The status icon is the notification's whole signal of severity, so which glyph each status
 * draws comes from `IconProvider` and is the same here, on a `FieldNote`, and on a toast.
 *
 * Here `critical` becomes the outline version of the icon.
 */
export const WithProvidedIcons: StoryObj<Args> = {
  args: {
    ...Critical.args,
  },
  decorators: [
    (Story) => (
      <IconProvider icons={alternativeSemanticIcons}>{Story()}</IconProvider>
    ),
  ],
};
