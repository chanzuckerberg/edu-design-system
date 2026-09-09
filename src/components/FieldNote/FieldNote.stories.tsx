import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { FieldNote } from './FieldNote';
import FpoBlock from '../../storyUtils/FpoBlock';
import Link from '../Link';
import Text from '../Text';

export default {
  title: 'Components/FieldNote',
  component: FieldNote,
  parameters: {
    docs: {
      subtitle: 'Fieldnote component wraps text to describe other components.',
    },
    layout: 'centered',
  },
  tags: ['autodocs', 'version:2.0'],
} as Meta<typeof FieldNote>;

type Story = StoryObj<typeof FieldNote>;

export const Default: Story = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
  },
};

export const WithErrorIcon: Story = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    status: 'critical',
  },
};

export const WithLongText: Story = {
  args: {
    ...WithErrorIcon.args,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet, massa ultricies iaculis. Quam lacus maecenas nibh malesuada. Attristique et ullamcorper rhoncus amet pharetra aliquet tortor. Suscipit dui, nunc sit dui tellus massa laoreet tellus.',
  },
};

export const WithWarningIcon: Story = {
  args: {
    children: 'This is a fieldnote.',
    id: 'field-1',
    status: 'warning',
  },
};

export const WithText: Story = {
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

/**
 * The leading slot takes arbitrary content, not only an EDS icon name. The block below
 * stands in for whatever you supply, so the slot itself is the subject rather than the icon
 * that happened to be picked.
 */
export const WithFpoIconContent: Story = {
  args: {
    ...Default.args,
    icon: <FpoBlock size={16} />,
  },
};

/**
 * `status` supplies this slot's default rather than overriding it, so a note can carry the
 * critical treatment and still show your own content. The status is announced from the
 * note's own treatment; content you pass carries its own accessible treatment.
 */
export const WithFpoIconContentAndStatus: Story = {
  args: {
    ...WithFpoIconContent.args,
    status: 'critical',
  },
};
