import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PageShell, Props } from './PageShell';

export default {
  title: 'Recipes/PageShell',
  component: PageShell,
} as Meta;

const Template: Story<Props> = (args) => <PageShell {...args}>Test</PageShell>;

export const Default = Template.bind({});
Default.args = {};
