import {
  Title,
  Subtitle,
  Description,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import {
  TokenDataTable,
  getSpecifier,
  getTokenListItems,
} from '../../../storyUtils/TokenList/TokenList';

// TODO: consider removing the generation of tokens.json entirely (only used for these internal pages)?
const meta = {
  title: 'Design Tokens/(2) Semantic',
  component: TokenDataTable,
  args: {
    caption: 'Tokens',
    size: 'md',
  },
  parameters: {
    chromatic: {
      diffThreshold: 0.75,
      delay: 100,
    },
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
 * Border radii can be used internally in components, and with custom components.
 *
 * Do **not** use any of the component radii in custom components.
 */
export const BorderRadii: Story = {
  args: {
    caption: 'Border Radius Tokens',
    subCaption:
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

/**
 * Background visualization tokens fill the marks in charts, graphs, heatmaps, and other custom data visualization components.
 *
 * - Use them only where a color stands for a value in the data. For interface roles (status, emphasis, interactivity), use the utility tokens instead
 */
export const BackgroundVisualization: Story = {
  args: {
    caption: 'Background Visualization Tokens',
    subCaption:
      'Background visualization tokens fill the marks in graphical presentations of data (bar charts, line charts, heatmaps, etc.)',
    listItems: getTokenListItems(
      'eds-theme-color-background-visualization',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ background/visualization/' + getSpecifier(name, filterTerm);
        } else {
          return 'bg-visualization-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};

/**
 * Text visualization tokens color labels that sit on a background visualization fill.
 *
 * - Use `default` on fills aliased to a primitive at grade 450 or lighter, and `inverse` on grade 550 or darker
 */
export const TextVisualization: Story = {
  args: {
    caption: 'Text Visualization Tokens',
    listItems: getTokenListItems(
      'eds-theme-color-text-visualization',
      'color',
      (name, column, filterTerm) => {
        if (column === 'figma') {
          return '→ text/visualization/' + getSpecifier(name, filterTerm);
        } else {
          return 'text-visualization-' + getSpecifier(name, filterTerm);
        }
      },
    ),
  },
};
