import React from 'react';
import {ColorUtilities} from './ColorUtilities';
import {ShadowUtilities} from './ShadowUtilities';
import {SpacingMarginUtilities} from './SpacingMarginUtilities';
import {SpacingPaddingUtilities} from './SpacingPaddingUtilities';
import {VisibilityUtilities} from './VisibilityUtilities';
import {WidthUtilities} from './WidthUtilities';

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

export const Color = {
  render: () => <ColorUtilities />,
};

export const Shadow = {
  render: () => <ShadowUtilities />,
};

export const SpacingMargin = {
  render: () => <SpacingMarginUtilities />,
};

export const SpacingPadding = {
  render: () => <SpacingPaddingUtilities />,
};

export const Visibility = {
  render: () => <VisibilityUtilities />,
};

export const Width = {
  render: () => <WidthUtilities />,
};
