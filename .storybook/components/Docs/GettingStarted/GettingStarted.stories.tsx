import type { StoryObj } from '@storybook/react';
import React from 'react';
import GettingStartedDocs from '../../../../docs/GETTING_STARTED.md';
import { MarkdownWrapper } from '../MarkdownWrapper';
export default {
  title: 'Getting Started',
};
export const GettingStarted: StoryObj = {
  render: () => <MarkdownWrapper>{GettingStartedDocs}</MarkdownWrapper>,
};
