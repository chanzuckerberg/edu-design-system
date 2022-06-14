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

export const Borders = () => <Tier2Borders />;

export const Colors = () => <Tier2Colors />;

export const Forms = () => <Tier2Forms />;

export const TypographyUsage = () => <Tier2TypographyUsage />;
