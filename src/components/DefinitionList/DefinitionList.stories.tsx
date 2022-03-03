import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DefinitionList, Props } from './DefinitionList';
import { DefinitionListItem } from '../DefinitionListItem/DefinitionListItem';

export default {
  title: 'Molecules/Lists/DefinitionList',
  component: DefinitionList,
} as Meta;

const Template: Story<Props> = (args) => (
  <DefinitionList {...args}>
    <DefinitionListItem title="Term 1:">Term 1 definition</DefinitionListItem>
    <DefinitionListItem title="This is term 2:">
      This is term 2 definition
    </DefinitionListItem>
  </DefinitionList>
);

export const Default = Template.bind({});
Default.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  behavior: 'horizontal',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};
