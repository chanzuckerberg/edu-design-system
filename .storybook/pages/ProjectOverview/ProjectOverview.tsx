import React from 'react';

import { PageHeader, Panel, Tabs, Tab } from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export const ProjectOverview: React.FC = () => (
  <PageShell>
    <PageHeader title="My Body Book" />
    <Panel>
      <Tabs>
        <Tab title="Overview">
          <div className="fpo">Tab 1 Content</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            dolores alias, cumque quos perspiciatis voluptate itaque asperiores.
            Id sunt voluptatem dolores, officia facere reiciendis doloremque
            eveniet nihil soluta laboriosam beatae.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            dolores alias, cumque quos perspiciatis voluptate itaque asperiores.
            Id sunt voluptatem dolores, officia facere reiciendis doloremque
            eveniet nihil soluta laboriosam beatae.
          </p>
        </Tab>
        <Tab title="Plans">
          <div className="fpo">Tab 2 Content</div>
        </Tab>
      </Tabs>
    </Panel>
  </PageShell>
);
