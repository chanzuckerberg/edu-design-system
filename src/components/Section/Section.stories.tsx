import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Section } from './Section';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

export default {
  title: 'Components/Section',
  component: Section,
  parameters: {
    badges: ['1.0', BADGE.DEPRECATED],
  },
  args: {
    children:
      'This is the section body, where you can put any content or include other components.',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Section>;

const HelpIcon = (
  <Icon name="help" purpose="informative" size="1.375rem" title="help" />
);

export const Default: StoryObj<Args> = {
  args: {
    title: 'Section Title',
  },
};

export const Center: StoryObj<Args> = {
  args: {
    align: 'center',
    overline: <Text preset="overline">Overline above title</Text>,
    title: 'Section Title',
    description: (
      <Text as="p" preset="body-xs">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: (
      <Text as="p" preset="body-xs">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithOverline: StoryObj<Args> = {
  args: {
    overline: <Text preset="overline">Overline above title</Text>,
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
    titleAfter: HelpIcon,
    title: 'Section Title',
  },
};

export const WithTitleBefore: StoryObj<Args> = {
  args: {
    titleBefore: HelpIcon,
    title: 'Section Title',
    headingAs: 'h4',
  },
};
