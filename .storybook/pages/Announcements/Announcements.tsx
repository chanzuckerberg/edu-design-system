import React from 'react';

import {
  Layout,
  LayoutSection,
  Main,
  LayoutContainer,
  PageHeader,
  Panel,
} from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const Announcements: React.FC = () => (
  <PageShell>
    <PageHeader title="Announcements to students" />
    <Panel>
      <div className="fpo">Announcement list</div>
    </Panel>
  </PageShell>
);
