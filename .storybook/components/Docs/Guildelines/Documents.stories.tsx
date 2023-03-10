import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Code from '../../../../docs/CODE_GUIDELINES.md';
import ComponentDocs from '../../../../docs/COMPONENTS.md';
import IconDocs from '../../../../docs/ICONS.md';
import LayoutDocs from '../../../../docs/LAYOUT.md';
import TokenDocs from '../../../../docs/TOKENS.md';
import TypographyDocs from '../../../../docs/TYPOGRAPHY.md';
import { Documentation } from '../Documentation';

export default {
  title: 'Documentation/Guidelines',
  component: Documentation,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
  decorators: [
    (Story) => (
      <Documentation>
        <Story />
      </Documentation>
    ),
  ],
} as Meta;

type Args = React.ComponentProps<typeof Documentation>;

export const CodeGuidelines: StoryObj<Args> = {
  render: () => <Code />,
};

export const Components: StoryObj<Args> = {
  render: () => <ComponentDocs />,
};

export const Icons: StoryObj<Args> = {
  render: () => <IconDocs />,
};

export const Layout: StoryObj<Args> = {
  render: () => <LayoutDocs />,
};

export const Tokens: StoryObj<Args> = {
  render: () => <TokenDocs />,
};

export const Typography: StoryObj<Args> = {
  render: () => <TypographyDocs />,
};
