import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Panel,
  Tabs,
  Tab,
} from '../../../src';

import { GlobalHeader } from '../../recipes/GlobalHeader/GlobalHeader';
import { GlobalFooter } from '../../recipes/GlobalFooter/GlobalFooter';

export const CurriculumCourses: React.FC = () => (
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
            </Breadcrumbs>
            <PageHeader title="English 10" />
            <Panel>
              <Tabs>
                <Tab title="Overview">
                  <div className="fpo">Tab 1 Content</div>
                </Tab>
                <Tab title="Students">
                  <div className="fpo">Tab 2 Content</div>
                </Tab>
                <Tab title="Assessments">
                  <div className="fpo">Tab 3 Content</div>
                </Tab>
                <Tab title="Goals">
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
