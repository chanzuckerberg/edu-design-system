import {
  Title,
  Subtitle,
  Description,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import {
  getSpecifier,
  getTokenListItems,
  TokenDataTable,
} from '../../TokenList/TokenList';

export default {
  title: 'Design Tokens/(3) Component',
  component: TokenDataTable,
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        component:
          'This page documents all of the component-specific token values, mapped to semantic tokens. These tokens are meant to be used inside internal EDS components, but can be used sparingly for any custom elements that match the named ccomponent.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
    a11y: {
      // For documentation purposes only
      test: 'off',
    },
  },
} satisfies Meta<typeof TokenDataTable>;

type Story = StoryObj<typeof TokenDataTable>;

export const IconUtility: Story = {
  args: {
    caption: 'Icon Utility Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-icon-utility',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ icon/utility/' + getSpecifier(name, filterTerm);
        } else {
          return 'icon-utility-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

export const BackgroundTable: Story = {
  args: {
    caption: 'Background Table Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-background-table',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ background/' + getSpecifier(name, filterTerm);
        } else {
          return 'bg-table-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};
