import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Tabs,
  Tab,
  Panel,
} from '../../../src';

import { GlobalHeader } from '../../recipes/GlobalHeader/GlobalHeader';
import { GlobalFooter } from '../../recipes/GlobalFooter/GlobalFooter';

export const FeedbackOverview: React.FC = () => (
  <body>
    <Layout behavior="fixed-sidebar">
      <LayoutSection region="sidebar">
        <GlobalHeader />
      </LayoutSection>
      <LayoutSection region="main">
        <Main>
          <LayoutContainer>
            <Breadcrumbs>
              <BreadcrumbsItem text="My Courses" href="#" />
              <BreadcrumbsItem
                text="Disciplanary Science 7 (Life Science Focus)"
                href="#"
              />
            </Breadcrumbs>
            <PageHeader title="My Body Book" />
            <Panel>
              <Tabs activeIndex={3}>
                <Tab title="Overview">
                  <div className="fpo">Tab 1 Content</div>
                </Tab>
                <Tab title="Plans">
                  <div className="fpo">Tab 2 Content</div>
                </Tab>
                <Tab title="Learners">
                  <div className="fpo">Tab 3 Content</div>
                </Tab>
                <Tab title="Feedback">
                  <div className="fpo">Tab 4 Content</div>
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
