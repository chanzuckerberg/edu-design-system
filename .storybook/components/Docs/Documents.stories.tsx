import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Documentation } from './Documentation';
import Code from '../../../docs/CODE_GUIDELINES.md';
import ComponentDocs from '../../../docs/COMPONENTS.md';
import IconDocs from '../../../docs/ICONS.md';
import LayoutDocs from '../../../docs/LAYOUT.md';
import TokenDocs from '../../../docs/TOKENS.md';
import TypographyDocs from '../../../docs/TYPOGRAPHY.md';
import styles from './markdown.module.css';

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
      <div className={styles['markdown']}>
        <Story />
      </div>
    ),
  ],
} as Meta;

type Args = React.ComponentProps<typeof Documentation>;

export const CodeGuidelines: StoryObj<Args> = {
  args: {
    children: <Code />,
  },
};

export const Components: StoryObj<Args> = {
  args: {
    children: <ComponentDocs />,
  },
};

export const Icons: StoryObj<Args> = {
  args: {
    children: <IconDocs />,
  },
};

export const Layout: StoryObj<Args> = {
  args: {
    children: <LayoutDocs />,
  },
};

export const Tokens: StoryObj<Args> = {
  args: {
    children: <TokenDocs />,
  },
};

export const Typography: StoryObj<Args> = {
  args: {
    children: <TypographyDocs />,
  },
};
