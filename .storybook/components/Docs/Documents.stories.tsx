import React from 'react';
import { Documentation } from './Documentation';
import Code from '../../../docs/CODE_GUIDELINES.md';
import ComponentDocs from '../../../docs/COMPONENTS.md';
import IconDocs from '../../../docs/ICONS.md';
import LayoutDocs from '../../../docs/LAYOUT.md';
import TokenDocs from '../../../docs/TOKENS.md';
import TypographyDocs from '../../../docs/TYPOGRAPHY.md';

export default {
  title: 'Documentation/Guidelines',
  component: Documentation,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const CodeGuidelines = () => (
  <Documentation>
    <Code />
  </Documentation>
);

export const Components = () => (
  <Documentation>
    <ComponentDocs />
  </Documentation>
);

export const Icons = () => (
  <Documentation>
    <IconDocs />
  </Documentation>
);

export const Layout = () => (
  <Documentation>
    <LayoutDocs />
  </Documentation>
);

export const Tokens = () => (
  <Documentation>
    <TokenDocs />
  </Documentation>
);

export const Typography = () => (
  <Documentation>
    <TypographyDocs />
  </Documentation>
);
