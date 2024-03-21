import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { FieldNote } from './FieldNote-v2';
import { LinkV2 as Link } from '../Link';
import Text from '../Text';

export default {
  title: 'Components/V2/FieldNote',
  component: FieldNote,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof FieldNote>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
  },
};

export const WithErrorIcon: StoryObj<Args> = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    icon: 'person-add',
    isError: true,
  },
};

export const WithIcon: StoryObj<Args> = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    icon: 'person-add',
  },
};

export const WithText: StoryObj<Args> = {
  args: {
    children: (
      <div className="max-w-xl">
        <Text className="mb-6">Here is a field note that involves:</Text>
        <ul className="ml-4 list-disc">
          <li>Multiple lines</li>
          <li>Arbitrary HTML text</li>
          <li>
            Even <Link href="#">text links</Link>
          </li>
        </ul>
      </div>
    ),
    id: 'field-1',
  },
};
