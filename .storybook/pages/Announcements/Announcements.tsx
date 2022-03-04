import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Panel,
} from '../../../src';

import { GlobalFooter } from '../../recipes/GlobalFooter/GlobalFooter';
import { GlobalHeader } from '../../recipes/GlobalHeader/GlobalHeader';

export const Announcements: React.FC = () => (
  <body>
    <Layout behavior="fixed-sidebar">
      <LayoutSection region="sidebar">
        <GlobalHeader />
      </LayoutSection>
      <LayoutSection region="main">
        <Main>
          <LayoutContainer>
            <PageHeader title="Announcements to students" />
            <Panel>
              <div className="fpo">Announcement list</div>
            </Panel>
          </LayoutContainer>
        </Main>
        <GlobalFooter />
      </LayoutSection>
    </Layout>
  </body>
);
