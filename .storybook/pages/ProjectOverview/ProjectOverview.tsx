import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Panel,
  Tabs,
  Tab,
} from '../../../src';

import { GlobalFooter } from '../../recipes/GlobalFooter/GlobalFooter';
import { GlobalHeader } from '../../recipes/GlobalHeader/GlobalHeader';

export const ProjectOverview: React.FC = () => (
  <body>
    <Layout behavior="fixed-sidebar">
      <LayoutSection region="sidebar">
        <GlobalHeader />
      </LayoutSection>
      <LayoutSection region="main">
        <Main>
          <LayoutContainer>
            <PageHeader title="My Body Book" />
            <Panel>
              <Tabs>
                <Tab title="Overview">
                  <div className="fpo">Tab 1 Content</div>
                </Tab>
                <Tab title="Plans">
                  <div className="fpo">Tab 2 Content</div>
                </Tab>
              </Tabs>
            </Panel>
          </LayoutContainer>
        </Main>
        <GlobalFooter />
      </LayoutSection>
    </Layout>
  </body>
);
