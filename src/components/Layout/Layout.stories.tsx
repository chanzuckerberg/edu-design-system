import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Layout, Props } from './Layout';
import LayoutSection from '../LayoutSection';

export default {
  title: 'Molecules/Layout and Containers/Layout',
  component: Layout,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Layout {...args}>
    <LayoutSection>
      <div className="fpo">Layout Section</div>
    </LayoutSection>
    <LayoutSection>
      <div className="fpo">Layout Section</div>
    </LayoutSection>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};

export const RideSidebar = Template.bind({});
RideSidebar.args = {
  variant: 'right-sidebar',
};
