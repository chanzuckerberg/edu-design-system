import React from 'react';

import {
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Tabs,
  Tab,
  Panel,
} from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const FeedbackOverview: React.FC = () => (
  <PageShell>
    <Breadcrumbs>
      <BreadcrumbsItem href="#" text="My Courses" />
      <BreadcrumbsItem
        href="#"
        text="Disciplanary Science 7 (Life Science Focus)"
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
  </PageShell>
);
