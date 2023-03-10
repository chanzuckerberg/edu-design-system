import type { StoryObj } from '@storybook/react';
import React from 'react';
import ThemingDocs from '../../../../docs/THEMING.md';
import { markdownStorybookOptions } from '../MarkdownWrapper';

export default {
  title: 'Documentation/Theming',
  component: ThemingDocs,
  ...markdownStorybookOptions,
};

export const Theming: StoryObj = {
  render: () => <ThemingDocs />,
};
