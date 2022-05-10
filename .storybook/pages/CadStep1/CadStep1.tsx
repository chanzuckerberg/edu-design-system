import React from 'react';

import { Layout, LayoutContainer, LayoutSection, Panel } from '../../../src';

import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';

export const CadStep1 = () => (
  <>
    <Panel className={utilityStyles['u-margin-bottom-lg']} variant="squared">
      <div className="fpo">Page Header</div>
    </Panel>
    <LayoutContainer>
      <div className="fpo">Page</div>
    </LayoutContainer>
  </>
);
