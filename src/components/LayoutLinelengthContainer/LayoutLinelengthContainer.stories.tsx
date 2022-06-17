import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { LayoutLinelengthContainer } from './LayoutLinelengthContainer';

export default {
  title: 'Molecules/Layout and Containers/Linelength Container',
  component: LayoutLinelengthContainer,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <>
        <p>
          A Linelength Container caps the width of the content to a comfortable
          reading width.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof LayoutLinelengthContainer>;

export const Default: StoryObj<Args> = {};
