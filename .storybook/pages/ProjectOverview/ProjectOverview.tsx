import React from 'react';

import { PageHeader, Panel, Tabs, Tab, Breadcrumbs, BreadcrumbsItem, Button, Hr } from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const ProjectOverview: React.FC = () => (
  <PageShell>
    <Breadcrumbs>
    <BreadcrumbsItem text="My Courses" href="#" />
    <BreadcrumbsItem text="Disciplinary Science 7" />
  </Breadcrumbs>
    <PageHeader 
    title="Feudal Honor Codes and Values"
    right={
      <Button text="View plan" variant="bare" iconPosition="after" iconName="arrow-narrow-right" />
    }
     />
    <Panel>
      <div className="fpo">
        <div>List Detail Component</div>
        <div className="fpo">Heading</div>
        <div className="fpo">Text Passage large</div>
        <div className="fpo">See more component (truncated text)</div>
        <div className="fpo">Heading</div>
        <div className="fpo">List component (Could include numbers/Q for question)</div>
        <Hr />
        <div className="fpo">
          <div>Section title with image in front (Power Focus Areas)</div>
          <div className="fpo">Tooltip (up for discussion)</div>
          <div className="fpo">Hoverable/Linkable Card Recipe (naming TBD)</div>
        </div>
        <div className="fpo">
          <div>Section title with image in front (Additional Focus Areas)</div>
          <div className="fpo">
            <div>Hoverable/Linkable Card Recipe (naming TBD)</div>
            <div className="fpo">Badge? Status badge?</div>
          </div>
          <div className="fpo">
            <div>Hoverable/Linkable Card Recipe (naming TBD)</div>
            <div className="fpo">Badge? Status badge?</div>
          </div>
        </div>
        <div className="fpo">
          <div>Cognitive skills (smaller section title than ones above)</div>
          <div className="fpo">Text passage with links?</div>
        </div>
      </div>
    </Panel>
  </PageShell>
);
