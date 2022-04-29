import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DefinitionList, Props } from './DefinitionList';
import DefinitionListItem from '../DefinitionListItem';

export default {
  title: 'Molecules/Lists/DefinitionList',
  component: DefinitionList,
  subcomponents: { DefinitionListItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <DefinitionList {...args}>
    <DefinitionList.Item title="Term 1:">Term 1 definition</DefinitionList.Item>
    <DefinitionList.Item title="This is term 2:">
      This is term 2 definition
    </DefinitionList.Item>
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
