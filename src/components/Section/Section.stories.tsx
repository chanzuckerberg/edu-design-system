import {StoryObj, Meta} from '@storybook/react';
import React from 'react';
import {Section} from './Section';
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

export default {
  title: 'Organisms/Sections/Section',
  component: Section,
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
    overline: (
      <Text as="div" size="overline">
        Overline above title
      </Text>
    ),
    title: 'Section Title',
    description: (
      <Text as="p" className="u-theme-typography-body-text-xs-bold" size="sm">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: (
      <Text as="p" className="u-theme-typography-body-text-xs-bold" size="sm">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithOverline: StoryObj<Args> = {
  args: {
    overline: (
      <Text as="div" size="overline">
        Overline above title
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
