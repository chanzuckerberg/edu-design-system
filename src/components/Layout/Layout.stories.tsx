import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Layout } from './Layout';
import LayoutSection from '../LayoutSection';

export default {
  title: 'Molecules/Layout and Containers/Layout',
  component: Layout,
  args: {
    children: (
      <>
        <LayoutSection region="sidebar">
          <div className="fpo">Sidebar Layout Section</div>
        </LayoutSection>
        <LayoutSection region="main">
          <div className="fpo">Main Layout Section</div>
        </LayoutSection>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Layout>;

export const Default: StoryObj<Args> = {};

export const GapNone: StoryObj<Args> = {
  args: {
    gap: 'none',
  },
};

export const GapLgXl: StoryObj<Args> = {
  args: {
    gap: 'lg-xl',
  },
};

export const SidebarWide: StoryObj<Args> = {
  args: {
    sidebar: 'wide',
  },
};

export const RightSidebar: StoryObj<Args> = {
  args: {
    children: (
      <>
        <LayoutSection region="main">
          <div className="fpo">Main Layout Section</div>
        </LayoutSection>
        <LayoutSection region="sidebar">
          <div className="fpo">Sidebar Layout Section</div>
        </LayoutSection>
      </>
    ),
    variant: 'right-sidebar',
  },
};

export const FiftyFifty: StoryObj<Args> = {
  args: {
    children: (
      <>
        <LayoutSection region="main">
          <div className="fpo">Main Layout Section 1</div>
        </LayoutSection>
        <LayoutSection region="main">
          <div className="fpo">Main Layout Section 2</div>
        </LayoutSection>
      </>
    ),
    variant: '50-50',
  },
};
