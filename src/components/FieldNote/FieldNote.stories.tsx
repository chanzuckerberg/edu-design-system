import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { FieldNote } from './FieldNote';
import Link from '../Link';
import Text from '../Text';

export default {
  title: 'Components/FieldNote',
  component: FieldNote,
  parameters: {
    layout: 'centered',
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
    icon: 'warning-filled',
    status: 'critical',
  },
};

export const WithLongText: StoryObj<Args> = {
  args: {
    ...WithErrorIcon.args,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet, massa ultricies iaculis. Quam lacus maecenas nibh malesuada. Attristique et ullamcorper rhoncus amet pharetra aliquet tortor. Suscipit dui, nunc sit dui tellus massa laoreet tellus.',
  },
};

export const WithWarningIcon: StoryObj<Args> = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    icon: 'warning-filled',
    status: 'warning',
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
