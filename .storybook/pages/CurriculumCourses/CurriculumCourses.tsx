import React from 'react';

import {
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Panel,
  Tabs,
  Tab,
} from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const CurriculumCourses: React.FC = () => (
  <PageShell>
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
  </PageShell>
);
