import React from 'react';
import { Tier2Borders } from './Borders';
import { Tier2Colors } from './Colors';
import { Tier2Forms } from './Forms';
import { Tier2Shadows } from './Shadows';
import { Tier2TypographyUsage } from './TypographyUsage';

export default {
  title: 'Design Tokens/Tier 2: Usage',
  component: Tier2Colors,
};

export const Borders = () => <Tier2Borders />;

export const Colors = () => <Tier2Colors />;

export const Forms = () => <Tier2Forms />;

export const Shadows = () => <Tier2Shadows />;

export const TypographyUsage = () => <Tier2TypographyUsage />;
