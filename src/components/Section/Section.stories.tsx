import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Section } from './Section';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import styles from './Section.stories.module.css';

export default {
  title: 'Components/Section',
  component: Section,
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
    overline: <Text size="overline">Overline above title</Text>,
    title: 'Section Title',
    description: (
      <Text as="p" className={styles['section__text']} size="sm">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Section Title',
    description: (
      <Text as="p" className={styles['section__text']} size="sm">
        This is a description of what the section is
      </Text>
    ),
  },
};

export const WithOverline: StoryObj<Args> = {
  args: {
    overline: <Text size="overline">Overline above title</Text>,
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
    headingSize: 'h4',
    headingAs: 'h4',
  },
};
