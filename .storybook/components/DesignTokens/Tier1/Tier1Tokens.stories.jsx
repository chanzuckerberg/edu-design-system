import React from 'react';
import { Tier1Animation } from './Animation';
import { Tier1Borders } from './Borders';
import { Tier1Colors } from './Colors';
import { Tier1Layout } from './Layout';
import { Tier1Shadows } from './Shadows';
import { Tier1Sizes } from './Sizes';

export default {
  title: 'Design Tokens/Tier 1: Definitions',
  component: Tier1Colors,
  parameters: {
    docs: {
      description: {
        story: 'Individual story description, may contain `markdown` markup',
      },
    },
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Colors = {
  render: () => <Tier1Colors />,
};

export const Animation = {
  render: () => <Tier1Animation />,
};

export const Borders = {
  render: () => <Tier1Borders />,
};

export const Sizes = {
  render: () => <Tier1Sizes />,
};

export const Layout = {
  render: () => <Tier1Layout />,
};

export const Shadows = {
  render: () => <Tier1Shadows />,
};
