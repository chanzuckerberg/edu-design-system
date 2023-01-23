import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { FieldNote } from './FieldNote';
import Link from '../Link';
import Text from '../Text';

export default {
  title: 'Components/FieldNote',
  component: FieldNote,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof FieldNote>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
  },
};

export const WithText: StoryObj<Args> = {
  args: {
    children: (
      <Text as="div" size="sm">
        <p>Here is a field note that involves:</p>
        <ul>
          <li>Multiple lines</li>
          <li>Arbitrary HTML text</li>
          <li>
            Even <Link href="#">text links</Link>
          </li>
        </ul>
      </Text>
    ),
    id: 'field-1',
  },
};
