import React from 'react';
import styles from './StudentRefinement.module.css';

import { PageHeader, Breadcrumbs, Button, Icon } from '../../../src';
import { PageShell } from '../../recipes/PageShell/PageShell';

export const StudentRefinement = () => (
  <PageShell>
    <Breadcrumbs>
      <Breadcrumbs.Item href="#" text="My Courses" />
    </Breadcrumbs>
    <div className={styles['student-refinement__header']}>
      <PageHeader title="Page title" />
      <Button
        className={styles['student-refinement__more-options']}
        status="neutral"
        variant="icon"
      >
        More options
        <Icon name="dots-vertical" purpose="decorative" />
      </Button>
    </div>
  </PageShell>
);
