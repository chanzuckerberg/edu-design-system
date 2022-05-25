import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FieldNote, Props } from './FieldNote';
import Link from '../../components/Link';
import Text from '../../components/Text';

export default {
  title: 'Atoms/Forms/FieldNote',
  component: FieldNote,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <FieldNote {...args}>This is a fieldnote.</FieldNote>
);

export const Default = Template.bind({});
Default.args = { id: 'field-1' };

export const WithText = () => (
  <FieldNote id="field-1">
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
  </FieldNote>
);
