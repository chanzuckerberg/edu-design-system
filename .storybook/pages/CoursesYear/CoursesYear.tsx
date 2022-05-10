import React from 'react';

import { PageHeader, Button, Heading, Panel } from '../../../src';
import { PageShell } from '../../recipes/PageShell/PageShell';

export const CoursesYear: React.FC = () => (
  <PageShell>
    <PageHeader title="Year" />
    <Panel className="u-margin-bottom-md">
      <Heading as="h2" size="h4">
        Get ready for your next mentoring check-in with Science Teacher.
      </Heading>
      <Button variant="primary">Begin Pre-Work</Button>
    </Panel>
    <Panel>
      <div className="fpo">Year calendar table</div>
    </Panel>
  </PageShell>
);
