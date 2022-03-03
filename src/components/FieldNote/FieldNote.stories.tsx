import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FieldNote, Props } from './FieldNote';
import { TextPassage } from '../TextPassage/TextPassage';
import { TextLink } from '../TextLink/TextLink';

export default {
  title: 'Atoms/Forms/FieldNote',
  component: FieldNote,
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
          Even <TextLink href="#">text links</TextLink>
        </li>
      </ul>
    </TextPassage>
  </FieldNote>
);
