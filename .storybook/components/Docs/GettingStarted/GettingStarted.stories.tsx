import type { StoryObj } from '@storybook/react';
import React from 'react';
import GettingStartedDocs from '../../../../docs/GETTING_STARTED.md';
import { Documentation } from '../Documentation';
export default {
  title: 'Getting Started',
  component: GettingStartedDocs,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

export const GettingStarted: StoryObj = {
  render: () => (
    <Documentation>
      <GettingStartedDocs />
    </Documentation>
  ),
};
