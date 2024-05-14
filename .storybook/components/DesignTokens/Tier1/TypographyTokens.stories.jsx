import React from 'react';
import { FontFamilies } from './FontFamilies';
import { FontWeights } from './FontWeights';
import { Tier1TypographyPresets } from './TypographyPresets';
export default {
  title: 'Design Tokens/Tier 1: Definitions/Typography',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};
export const FontFamily = {
  render: () => <FontFamilies />,
};
export const FontWeight = {
  render: () => <FontWeights />,
};
export const Presets = {
  render: () => <Tier1TypographyPresets />,
};
