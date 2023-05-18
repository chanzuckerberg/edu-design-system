import React from 'react';
import { Tier3Colors } from './Colors';
import { Tier3Sizes } from './Sizes';

export default {
  title: 'Design Tokens/Tier 3: Component',
  component: Tier3Colors,
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Colors = {
  render: () => <Tier3Colors />,
};

export const Sizes = {
  render: () => <Tier3Sizes />,
};
