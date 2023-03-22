import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { LayoutLinelengthContainer } from './LayoutLinelengthContainer';

export default {
  title: 'Components/Linelength Container',
  component: LayoutLinelengthContainer,
  parameters: {
    badges: ['1.0'],
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
