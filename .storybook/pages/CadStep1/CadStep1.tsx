import React from 'react';

import {
  Button,
  ButtonGroup,
  Grid,
  Heading,
  HorizontalStepper,
  Icon,
  Layout,
  LayoutContainer,
  LayoutSection,
  PageHeader,
  Panel,
  Text,
  TextField,
} from '../../../src';

import '../../../src/components/Utilities/Spacing.css';
import '../../../src/components/Utilities/TypographyUsage.css';

import CompassCenter from '../../static/compass-center.svg';

export const CadStep1 = () => (
  <>
    <Panel className="u-margin-bottom-xl" variant="squared">
      <LayoutContainer>
        <PageHeader
          className="u-margin-bottom-none"
          description={
            <HorizontalStepper
              activeIndex={0}
              steps={['Add course details', 'Select Projects']}
            />
          }
          headingSize="title-md"
          orientation="2up"
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
      <Layout gap="lg-xl" variant="50-50">
        <LayoutSection region="main">
          <Grid className="u-margin-bottom-xl" variant="1-2-1up">
            <img alt="compass vignette" src={CompassCenter} />
            <Heading as="h2" size="headline-lg">
              Let&apos;s start planning, Amy Frankle.
            </Heading>
          </Grid>
          <Text size="callout">
            The course planner can help you set off on the right track, and
            navigate whatever comes your way.
          </Text>
        </LayoutSection>
        <LayoutSection region="main">
          <Text as="div" className="u-margin-bottom-xl">
            <h3>Tell us how often your course meets.</h3>
            <p>
              We’ll adjust project plans based on your schedule. This way, you
              can get a more accurate estimate of how long the course will
              actually take.
            </p>
            <p>
              If you teach multiple sections of this course, you can enter the
              average amounts for each question below.
            </p>
          </Text>
          <Text className="u-margin-bottom-sm u-theme-typography-title-md">
            How many times per week do you have class?
          </Text>
          <TextField
            className="u-margin-bottom-xl"
            hideLabel
            label="times per week"
            min={0}
            placeholder="times per week"
            type="number"
          />
          <Text className="u-margin-bottom-sm u-theme-typography-title-md">
            How many minutes is each class?
          </Text>
          <TextField
            className="u-margin-bottom-xl"
            hideLabel
            label="minutes"
            min={0}
            placeholder="minutes"
            type="number"
          />
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
