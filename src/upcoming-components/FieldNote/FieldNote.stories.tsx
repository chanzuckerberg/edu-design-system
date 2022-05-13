import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FieldNote, Props } from './FieldNote';
import Link from '../../components/Link';
import TextPassage from '../../components/TextPassage';

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

export const WithTextPassage = () => (
  <FieldNote id="field-1">
    <TextPassage size="sm">
      Here is a field note that involves:
      <ul>
        <li>Multiple lines</li>
        <li>Arbitrary HTML text</li>
        <li>
          Even <Link href="#">text links</Link>
        </li>
      </ul>
    </TextPassage>
  </FieldNote>
);
