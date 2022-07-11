import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Section } from './Section';
import Avatar from '../Avatar';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Icon from '../Icon';

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

export const Center: StoryObj<Args> = {
  args: {
    align: 'center',
    kicker: 'Kicker above title',
    title: 'Section Title',
    description: 'This is a description of what the section is',
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: 'This is a description of what the section is',
  },
};

export const WithKicker: StoryObj<Args> = {
  args: {
    kicker: 'Kicker above title',
    title: 'Section Title',
  },
};

export const WithRight: StoryObj<Args> = {
  args: {
    right: (
      <ButtonGroup>
        <Button size="md" status="neutral">
          Button 1
        </Button>
        <Button size="md" variant="primary">
          Button 2
        </Button>
      </ButtonGroup>
    ),
    title: 'Section Title',
  },
};

export const WithTitleAfter: StoryObj<Args> = {
  args: {
    titleAfter: (
      <Button size="sm" variant="icon">
        <Icon name="help" purpose="informative" size="1.375rem" title="help" />
      </Button>
    ),
    title: 'Section Title',
  },
};

export const WithTitleBefore: StoryObj<Args> = {
  args: {
    titleBefore: <Avatar />,
    title: 'Section Title',
  },
};
