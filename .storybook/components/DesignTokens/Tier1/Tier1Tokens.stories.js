import React from 'react';
import { Tier1Animation } from './Animation';
import { Tier1Borders } from './Borders';
import { Tier1Colors } from './Colors';
import { Tier1Layout } from './Layout';
import { Tier1Shadows } from './Shadows';
import { Tier1Sizes } from './Sizes';
import { Tier1TypographyPresets } from './TypographyPresets';
import { Tier1TypographyTokens } from './TypographyTokens';

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

export const Colors = () => <Tier1Colors />;

export const Animation = () => <Tier1Animation />;

export const Borders = () => <Tier1Borders />;

export const Sizes = () => <Tier1Sizes />;

export const Layout = () => <Tier1Layout />;

export const Shadows = () => <Tier1Shadows />;

export const TypographyTokens = () => <Tier1TypographyTokens />;

export const TypographyPresets = () => <Tier1TypographyPresets />;
