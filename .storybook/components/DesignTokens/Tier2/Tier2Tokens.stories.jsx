import React from 'react';
import { Tier2Borders } from './Borders';
import { Tier2Colors } from './Colors';
import { Tier2Forms } from './Forms';
import { Tier2TypographyUsage } from './TypographyUsage';

export default {
  title: 'Design Tokens/Tier 2: Usage',
  component: Tier2Colors,
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Borders = {
  render: () => <Tier2Borders />,
};

export const Colors = {
  render: () => <Tier2Colors />,
};

export const Forms = {
  render: () => <Tier2Forms />,
};

export const Typography = {
  render: () => <Tier2TypographyUsage />,
};
