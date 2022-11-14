import type { StoryObj } from '@storybook/react';
import React from 'react';
import { ThemingDocumentation } from './ThemingDocumentation';
import ThemingDocs from '../../../docs/THEMING.md';

export default {
  title: 'Documentation/Theming',
  component: ThemingDocumentation,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

type Args = React.ComponentProps<typeof ThemingDocumentation>;

export const Theming: StoryObj<Args> = {
  args: {
    children: <ThemingDocs />,
  },
};
