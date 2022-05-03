import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Layout, Props } from './Layout';
import LayoutSection from '../LayoutSection';

export default {
  title: 'Molecules/Layout and Containers/Layout',
  component: Layout,
} as Meta;

const Template: Story<Props> = (args) => (
  <Layout {...args}>
    <LayoutSection region="sidebar">
      <div className="fpo">Sidebar Layout Section</div>
    </LayoutSection>
    <LayoutSection region="main">
      <div className="fpo">Main Layout Section</div>
    </LayoutSection>
  </Layout>
);

const RightSidebarTemplate: Story<Props> = (args) => (
  <Layout {...args}>
    <LayoutSection region="main">
      <div className="fpo">Main Layout Section</div>
    </LayoutSection>
    <LayoutSection region="sidebar">
      <div className="fpo">Sidebar Layout Section</div>
    </LayoutSection>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};

export const GapNone = Template.bind({});
GapNone.args = {
  gap: 'none',
};

export const SidebarWide = Template.bind({});
SidebarWide.args = {
  sidebar: 'wide',
};

export const RightSidebar = RightSidebarTemplate.bind({});
RightSidebar.args = {
  variant: 'right-sidebar',
};
