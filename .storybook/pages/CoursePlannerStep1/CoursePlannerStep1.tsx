import clsx from 'clsx';
import React from 'react';
import styles from './CoursePlannerStep1.module.css';

import {
  Button,
  ButtonGroup,
  Grid,
  Heading,
  HorizontalStepper,
  Icon,
  InputField,
  Layout,
  LayoutContainer,
  LayoutSection,
  PageHeader,
  Panel,
  Text,
} from '../../../src';

import CompassCenter from '../../static/compass-center.svg';

export const CoursePlannerStep1 = () => {
  const textClassName = clsx(styles['course-planner-step1__text'], '!mb-2');
  return (
    <>
      <Panel className="!mb-8" variant="squared">
        <LayoutContainer>
          <PageHeader
            className="!mb-0"
            description={
              <HorizontalStepper
                activeIndex={0}
                steps={['Add course details', 'Select Projects']}
              />
            }
            headingSize="title-md"
            orientation="2up"
            right={
              <ButtonGroup className="!mt-8">
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
            <Grid className="!mb-8" variant="1-2-1up">
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
            <div className="mb-8 max-w-xl">
              <Heading className="mb-6" size="h3">
                Tell us how often your course meets.
              </Heading>
              <Text className="mb-6">
                We’ll adjust project plans based on your schedule. This way, you
                can get a more accurate estimate of how long the course will
                actually take.
              </Text>
              <Text>
                If you teach multiple sections of this course, you can enter the
                average amounts for each question below.
              </Text>
            </div>
            <Text className={textClassName}>
              How many times per week do you have class?
            </Text>
            <InputField
              aria-label="times per week"
              className="!mb-8"
              min={0}
              placeholder="times per week"
              type="number"
            />
            <Text className={textClassName}>
              How many minutes is each class?
            </Text>
            <InputField
              aria-label="minutes"
              className="!mb-8"
              min={0}
              placeholder="minutes"
              type="number"
            />
          </LayoutSection>
        </Layout>
      </LayoutContainer>
    </>
  );
};
