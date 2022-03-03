import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Breadcrumbs, Props } from './Breadcrumbs';
import { BreadcrumbsItem } from '../BreadcrumbsItem/BreadcrumbsItem';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbsItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <Breadcrumbs {...args}>
    <BreadcrumbsItem text="Home" href="#" />
    <BreadcrumbsItem text="Child" href="#" />
    <BreadcrumbsItem text="Grandchild" href="#" />
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
