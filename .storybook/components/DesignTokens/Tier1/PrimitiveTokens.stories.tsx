import {
  Title,
  Subtitle,
  Description,
  Stories,
} from '@storybook/addon-docs/blocks';

import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';
import { TokenDataTable, getTokenListItems } from '../../TokenList/TokenList';

// TODO: Consider using ColorPalette
// https://storybook.js.org/docs/9/api/doc-blocks/doc-block-colorpalette

const meta = {
  title: 'Design Tokens/(1) Primitive',
  component: TokenDataTable,
  args: {
    caption: 'Tokens',
    subcaption:
      'These values are used in higher semantic and component tokens and should not be used in custom components directly.',
    size: 'md',
  },
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
    table: {
      disable: true,
    },
    docs: {
      description: {
        component:
          'This page documents all of the primitive token values, defined by the brand. For colors, primitive color tokens should **not** be used directly in designs or code. Tokens available for use will have an available tailwind class name listed. If no tailwind CSS class name is listed, **do not use this token in code**!',
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

export default meta;

/**
 * Red Brand Colors
 */
export const Reds: Story = {
  args: {
    caption: 'Red Hues',
    listItems: getTokenListItems('eds-color-red', 'color', (name, column) => {
      if (column === 'figma') {
        return 'red/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }),
  },
};

/**
 * Oranges Brand Colors
 */
export const Oranges: Story = {
  args: {
    caption: 'Orange Hues',
    listItems: getTokenListItems(
      'eds-color-orange',
      'color',
      (name, column) => {
        if (column === 'figma') {
          return 'orange/' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return '';
        }
      },
    ),
  },
};

/**
 * Yellow Brand Colors
 */
export const Yellows: Story = {
  args: {
    caption: 'Yellow Hues',
    listItems: getTokenListItems(
      'eds-color-yellow',
      'color',
      (name, column) => {
        if (column === 'figma') {
          return 'yellow/' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return '';
        }
      },
    ),
  },
};

/**
 * Green Brand Colors
 */
export const Greens: Story = {
  args: {
    caption: 'Green Hues',
    listItems: getTokenListItems('eds-color-green', 'color', (name, column) => {
      if (column === 'figma') {
        return 'green/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }),
  },
};

/**
 * Blue Brand Colors
 */
export const Blues: Story = {
  args: {
    caption: 'Blue Hues',
    listItems: getTokenListItems('eds-color-blue', 'color', (name, column) => {
      if (column === 'figma') {
        return 'blue/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }),
  },
};

/**
 * Purple Brand Colors
 */
export const Purples: Story = {
  args: {
    caption: 'Purple Hues',
    listItems: getTokenListItems(
      'eds-color-purple',
      'color',
      (name, column) => {
        if (column === 'figma') {
          return 'purple/' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return '';
        }
      },
    ),
  },
};

/**
 * Pink Brand Colors
 */
export const Pinks: Story = {
  args: {
    caption: 'Pink Hues',
    listItems: getTokenListItems('eds-color-pink', 'color', (name, column) => {
      if (column === 'figma') {
        return 'pink/' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        return '';
      }
    }),
  },
};

/**
 * Neutral Brand Colors
 */
export const Neutrals: Story = {
  args: {
    caption: 'Neutral Hues',
    listItems: getTokenListItems(
      'eds-color-neutral',
      'color',
      (name, column) => {
        if (column === 'figma') {
          return 'neutral/' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return '';
        }
      },
    ),
  },
};

/**
 * Opacity Brand Colors
 */
export const Opacities: Story = {
  args: {
    caption: 'Opacities',
    listItems: getTokenListItems(
      'eds-color-opacity',
      'size',
      (name, column) => '',
    ),
  },
};

export const FadeAnimations: Story = {
  args: {
    caption: 'Fade Animations',
    subcaption:
      'These constants define the time length for different opacity transitions in EDS. Use with `calc()` in CSS to add second units.',
    listItems: getTokenListItems('eds-anim-fade', 'size', () => ''),
  },
};

export const MovementAnimations: Story = {
  args: {
    caption: 'Movement Animations',
    subcaption:
      'These constants define the time length for different transition animations in EDS. Use with `calc()` in CSS to add second units.',
    listItems: getTokenListItems('eds-anim-move', 'size', () => ''),
  },
};

export const BorderRadii: Story = {
  args: {
    caption: 'Border Radii',
    listItems: getTokenListItems('eds-border-radius', 'size', () => ''),
  },
};

export const Sizes: Story = {
  args: {
    caption: 'Spacing',
    subcaption:
      'Spacing sizes represent a core set of sizing units to match designs to code. Use with `calc()` in CSS to add second units.',
    listItems: getTokenListItems('eds-spacing-size', 'size', (name, column) => {
      if (column === 'figma') {
        return 'spacing/size-' + name.slice(name.lastIndexOf('-') + 1);
      } else {
        // tailwind or some other value(s) as fallback
        return '*-spacing-size' + name.slice(name.lastIndexOf('-') + 1);
      }
    }),
  },
};

// TODO: not currently in tailwind; fix naming for tailwind/figma
export const Shadows: Story = {
  args: {
    caption: 'Shadows',
    subcaption:
      'Shadows are a set of reusable tokens for determining elevation.',
    listItems: getTokenListItems('eds-box-shadow', 'size'),
  },
};

export const FontFamilies: Story = {
  args: {
    caption: 'Font Families',
    listItems: getTokenListItems(
      'eds-typography-font-family',
      'size',
      (name, column) => {
        // Hide the one-off offset value
        if (!name.includes('offset')) {
          if (column === 'figma') {
            return (
              'fontFamily/font-family-' + name.slice(name.lastIndexOf('-') + 1)
            );
          } else {
            return 'font-' + name.slice(name.lastIndexOf('-') + 1);
          }
        }
        return '';
      },
    ),
  },
};

export const FontWeights: Story = {
  args: {
    caption: 'Font Weights',
    listItems: getTokenListItems(
      'eds-typography-font-weight',
      'size',
      (name, column) => {
        if (column === 'figma') {
          return 'fontWeight/' + name.slice(name.lastIndexOf('-') + 1);
        } else {
          return '';
        }
      },
    ),
  },
};
