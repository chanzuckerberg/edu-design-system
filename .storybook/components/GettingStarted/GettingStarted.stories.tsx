import { StoryObj } from '@storybook/react';
import React from 'react';
import { GettingStartedDocumentation } from './GettingStartedDocumentation';
import GettingStartedDocs from '../../../docs/GETTING_STARTED.md';

export default {
  title: '',
  component: GettingStartedDocumentation,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

type Args = React.ComponentProps<typeof GettingStartedDocumentation>;

export const GettingStarted: StoryObj<Args> = {
  args: {
    children: <GettingStartedDocs />,
  },
};
