import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Section } from './Section';
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

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
    kicker: (
      <Text
        as="p"
        style={{
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '15.9996px',
          color: 'rgb(56, 60, 67)',
        }}
      >
        KICKER ABOVE TITLE
      </Text>
    ),
    title: 'Section Title',
    description: (
      <Text
        as="p"
        style={{
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '15.996px',
          color: 'rgb(93,99,105',
        }}
      >
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: (
      <Text
        as="p"
        style={{
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '15.996px',
          color: 'rgb(93,99,105',
        }}
      >
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithKicker: StoryObj<Args> = {
  args: {
    kicker: (
      <Text
        as="p"
        style={{
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '15.9996px',
          color: 'rgb(56, 60, 67)',
        }}
      >
        KICKER ABOVE TITLE
      </Text>
    ),
    title: 'Section Title',
  },
};

export const WithRight: StoryObj<Args> = {
  args: {
    right: (
      <Button size="md" variant="primary">
        Button
      </Button>
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
    headingSize: 'h4',
    headingAs: 'h4',
  },
};
