import type { StoryObj } from '@storybook/react';
import React from 'react';
import ThemingDocs from '../../../../docs/THEMING.md';
import { Documentation } from '../Documentation';

export default {
  title: 'Documentation/Theming',
  component: ThemingDocs,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

export const Theming: StoryObj = {
  render: () => (
    <Documentation>
      <ThemingDocs />
    </Documentation>
  ),
};
