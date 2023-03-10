import type { StoryObj } from '@storybook/react';
import React from 'react';
import Code from '../../../../docs/CODE_GUIDELINES.md';
import ComponentDocs from '../../../../docs/COMPONENTS.md';
import IconDocs from '../../../../docs/ICONS.md';
import LayoutDocs from '../../../../docs/LAYOUT.md';
import TokenDocs from '../../../../docs/TOKENS.md';
import TypographyDocs from '../../../../docs/TYPOGRAPHY.md';
import { markdownStorybookOptions } from '../MarkdownWrapper';

export default {
  title: 'Documentation/Guidelines',
  ...markdownStorybookOptions,
};

export const CodeGuidelines: StoryObj = {
  render: () => <Code />,
};

export const Components: StoryObj = {
  render: () => <ComponentDocs />,
};

export const Icons: StoryObj = {
  render: () => <IconDocs />,
};

export const Layout: StoryObj = {
  render: () => <LayoutDocs />,
};

export const Tokens: StoryObj = {
  render: () => <TokenDocs />,
};

export const Typography: StoryObj = {
  render: () => <TypographyDocs />,
};
