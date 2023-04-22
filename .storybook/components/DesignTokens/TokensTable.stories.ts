import type { StoryObj } from '@storybook/react';
import { TokensTable as TokensTableComponent } from './TokensTable';

export default {
  title: 'Design Tokens/Tokens Table',
  component: TokensTableComponent,
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Default: StoryObj = {};
