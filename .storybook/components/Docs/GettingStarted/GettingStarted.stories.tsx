import type { StoryObj } from '@storybook/react';
import React from 'react';
import GettingStartedDocs from '../../../../docs/GETTING_STARTED.md';
import { markdownStorybookOptions } from '../MarkdownWrapper';
export default {
  title: 'Getting Started',
  component: GettingStartedDocs,
  ...markdownStorybookOptions,
};

export const GettingStarted: StoryObj = {
  render: () => <GettingStartedDocs />,
};
