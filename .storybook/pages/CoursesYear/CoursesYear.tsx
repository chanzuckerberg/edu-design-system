import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Button,
  Heading,
  Panel,
} from '../../../src';

import { GlobalHeader } from '../../recipes/GlobalHeader/GlobalHeader';
import { GlobalFooter } from '../../recipes/GlobalFooter/GlobalFooter';

export const CoursesYear: React.FC = () => (
  <body>
    <Layout behavior="fixed-sidebar">
      <LayoutSection region="sidebar">
        <GlobalHeader />
      </LayoutSection>
      <LayoutSection region="main">
        <Main>
          <LayoutContainer>
            <PageHeader title="Year" />
            <Panel className="u-margin-bottom-md">
              <Heading as="h2" size={4}>
                Get ready for your next mentoring check-in with Science Teacher.
              </Heading>
              <Button variant="primary" text="Begin Pre-Work" />
            </Panel>
            <Panel>
              <div className="fpo">Year calendar table</div>
            </Panel>
          </LayoutContainer>
        </Main>
        <GlobalFooter />
      </LayoutSection>
    </Layout>
  </body>
);
