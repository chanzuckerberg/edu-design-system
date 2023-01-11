import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { LinkList } from './LinkList';
import LinkListItem from '../LinkListItem';

export default {
  title: 'Components/LinkList',
  component: LinkList,
  args: {
    children: (
      <>
        <LinkListItem href="#" text="Link List Item 1" />
        <LinkListItem href="#" text="Link List Item 2" />
        <LinkListItem href="#" text="Link List Item 3" />
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof LinkList>;

export const Default: StoryObj<Args> = {};

export const Lined: StoryObj<Args> = {
  args: {
    variant: 'lined',
  },
};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Horizontal: StoryObj<Args> = {
  args: {
    behavior: 'horizontal',
  },
};

export const Responsive: StoryObj<Args> = {
  args: {
    behavior: 'responsive',
  },
};

export const IconAfterText: StoryObj<Args> = {
  args: {
    children: (
      <>
        <LinkListItem
          href="#"
          iconName="chevron-right"
          iconPosition="after"
          text="Link List Item 1"
        />
        <LinkListItem
          href="#"
          iconName="chevron-right"
          iconPosition="after"
          text="Link List Item 2"
        />
        <LinkListItem
          href="#"
          iconName="chevron-right"
          iconPosition="after"
          text="Link List Item 3"
        />
      </>
    ),
  },
};
