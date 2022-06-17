import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Section } from './Section';

export default {
  title: 'Organisms/Sections/Section',
  component: Section,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children:
      'This is the section body, where you can put any content or include other components.',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Section>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Section Title',
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: 'This is a description of what the section is',
  },
};

export const Center: StoryObj<Args> = {
  args: {
    align: 'center',
    title: 'Section Title',
    description: 'This is a description of what the section is',
  },
};
