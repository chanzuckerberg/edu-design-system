import React from 'react';

import {
  Button,
  ButtonGroup,
  HorizontalStepper,
  Icon,
  Layout,
  LayoutContainer,
  LayoutSection,
  PageHeader,
  Panel,
} from '../../../src';

import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';

export const CadStep1 = () => (
  <>
    <Panel className={utilityStyles['u-margin-bottom-lg']} variant="squared">
      <LayoutContainer>
        <PageHeader
          className={utilityStyles['u-margin-bottom-none']}
          description={
            <HorizontalStepper
              activeIndex={0}
              steps={[
                'Add classroom details',
                'Add projects',
                'Create course plan',
              ]}
            />
          }
          headingSize="h5"
          right={
            <ButtonGroup>
              <Button>Return to Course</Button>
              <Button variant="primary">
                Next <Icon name="arrow-narrow-right" purpose="decorative" />
              </Button>
            </ButtonGroup>
          }
          title="Course Planner: History 6"
        />
      </LayoutContainer>
    </Panel>
    <LayoutContainer>
      <div className="fpo">Page</div>
    </LayoutContainer>
  </>
);
