import {
  Title,
  Subtitle,
  Description,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import {
  TokenDataTable,
  getSpecifier,
  getTokenListItems,
} from '../../TokenList/TokenList';

// TODO: consider removing the generation of tokens.json entirely (only used for these internal pages)?
const meta = {
  title: 'Design Tokens/(2) Semantic',
  component: TokenDataTable,
  args: {
    caption: 'Tokens',
    size: 'md',
  },
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        component:
          'This page documents all of the semantic token values, mapped to primitive tokens. These tokens are meant to be used both inside internal EDS components, and within custom components.',
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

export default meta;

type Story = StoryObj<typeof TokenDataTable>;

/**
 * Text utility tokens can be used to add color to individual custom elements.
 *
 * - Do not use state tokens (e.g., ending with `-(hover|active|visited)`) for non-interactive elements
 */
export const TextUtility: Story = {
  args: {
    caption: 'Text Utility Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-text-utility',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ text/utility/' + getSpecifier(name, filterTerm);
        } else {
          return 'text-utility-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * Background utility tokens can be used to add color to individual custom elements.
 *
 * - Do not use state tokens (e.g., ending with `-(hover|active|visited)`) for non-interactive elements
 */
export const BackgroundUtility: Story = {
  args: {
    caption: 'Background Utility Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-background-utility',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ background/utility/' + getSpecifier(name, filterTerm);
        } else {
          return 'bg-utility-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * These general purpose tokens are used to add brand color to the background of custom elements.
 */
export const BackgroundBrand: Story = {
  args: {
    caption: 'Background Brand Tokens',
    subcaption:
      'Note: any colors defined as lime green (#OOFFOO) do not exist in the current theme.',
    listItems: getTokenListItems(
      'eds-theme-color-background-brand',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ background/brand/' + getSpecifier(name, filterTerm);
        } else {
          return 'bg-brand-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * Border utility tokens can be used to add color to individual custom elements.
 *
 * - Do not use state tokens (e.g., ending with `-(hover|active|visited)`) for non-interactive elements
 */
export const BorderUtility: Story = {
  args: {
    caption: 'Border Utility Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-border-utility',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ border/utility/' + getSpecifier(name, filterTerm);
        } else {
          return 'border-utility-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * Border brand tokens can be used sparingly to add branded enhancements to internal or custom components.
 */
export const BorderBrand: Story = {
  args: {
    caption: 'Border Brand Tokens',
    subcaption:
      'Note: any colors defined as lime green (#OOFFOO) do not exist in the current theme.',
    listItems: getTokenListItems(
      'eds-theme-color-border-brand',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ border/brand/' + getSpecifier(name, filterTerm);
        } else {
          return 'border-brand-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * Border radii can be used internally in components, and with custom components.
 *
 * Do **not** use any of the component radii in custom components.
 */
export const BorderRadii: Story = {
  args: {
    caption: 'Border Radius Tokens',
    subcaption:
      'Border radii can be used internally in components, and with custom components, except for -tab- and -notification- tokens.',
    listItems: getTokenListItems(
      'eds-theme-border-radius',
      'size',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ border-radius/' + getSpecifier(name, filterTerm);
        } else {
          return 'rounded-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};
