import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextList } from './TextList';
import TextListItem from '../TextListItem';

export default {
  title: 'Molecules/Lists/TextList',
  component: TextList,
  subcomponents: { TextListItem },
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <>
        <TextListItem>Text list item 1</TextListItem>
        <TextListItem>Text list item 2</TextListItem>
        <TextListItem>Text list item 3</TextListItem>
        <TextListItem>Text list item 4</TextListItem>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof TextList>;

export const Default: StoryObj<Args> = {};

export const OrderedList: StoryObj<Args> = {
  args: {
    as: 'ol',
  },
};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Inline: StoryObj<Args> = {
  args: {
    variant: 'inline',
  },
};
