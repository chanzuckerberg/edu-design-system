import React from 'react';
import { ColorUtilities } from './ColorUtilities';
import { ShadowUtilities } from './ShadowUtilities';
import { SpacingMarginUtilities } from './SpacingMarginUtilities';
import { SpacingPaddingUtilities } from './SpacingPaddingUtilities';
import { VisibilityUtilities } from './VisibilityUtilities';
import { WidthUtilities } from './WidthUtilities';

export default {
  component: ColorUtilities,
  title: 'Atoms/Utilities',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Color = () => <ColorUtilities />;
export const Shadow = () => <ShadowUtilities />;
export const SpacingMargin = () => <SpacingMarginUtilities />;
export const SpacingPadding = () => <SpacingPaddingUtilities />;
export const Visibility = () => <VisibilityUtilities />;
export const Width = () => <WidthUtilities />;
