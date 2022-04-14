import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Breadcrumbs, Props } from './Breadcrumbs';
import BreadcrumbsItem from '../BreadcrumbsItem';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <Breadcrumbs {...args}>
    <BreadcrumbsItem href="#" text="Home" />
    <BreadcrumbsItem href="#" text="Child" />
    <BreadcrumbsItem href="#" text="Grandchild" />
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
