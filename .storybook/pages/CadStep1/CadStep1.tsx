import React from 'react';

import styles from './CadStep1.module.css';
import {
  Button,
  ButtonGroup,
  Heading,
  HorizontalStepper,
  Icon,
  Layout,
  LayoutContainer,
  LayoutSection,
  PageHeader,
  Panel,
  Text,
} from '../../../src';

import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';
import '../../../src/components/Utilities/TypographyUsage.css';

export const CadStep1 = () => (
  <>
    <Panel variant="squared">
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
      <Layout className={styles['cad-step-1__layout']} variant="50-50">
        <LayoutSection
          className={styles['cad-step-1__left-section']}
          region="main"
        >
          <Heading className={styles['left-section__heading']} size="h1">
            Welcome, Amy. Chart your course for the year here.
          </Heading>
          <Text className={styles['left-section__text']} size="lg">
            The course planner can help you set off on the right track, and
            navigate whatever comes your way.
          </Text>
          <div className="fpo">image</div>
        </LayoutSection>
        <LayoutSection region="main">
          <Heading
            as="h2"
            className={styles['right-section__heading']}
            size="h3"
          >
            Tell us how often your course meets.
          </Heading>
          <Text className={styles['right-section__text']} size="md">
            We’ll adjust project plans based on your schedule. This way, you can
            get a more accurate estimate of how long the course will actually
            take.
          </Text>
          <Text className={styles['right-section__text']} size="md">
            If you teach multiple sections of this course, you can enter the
            average amounts for each question below.
          </Text>
          <div className={utilityStyles['u-margin-bottom-lg']}>
            <label
              className="u-theme-typography-body-text-lg"
              htmlFor="class-per-week-input"
            >
              How many times per week do you have class?
            </label>
            <div className={styles['right-section__input-container']}>
              <input
                aria-describedby="class-per-week-description"
                id="class-per-week-input"
                placeholder="Enter"
                type="number"
              />
              <Text as="span" id="class-per-week-description">
                times per week
              </Text>
            </div>
          </div>
          <div>
            <label
              className="u-theme-typography-body-text-lg"
              htmlFor="minutes-per-class-input"
            >
              How many minutes is each class?
            </label>
            <div className={styles['right-section__input-container']}>
              <input
                aria-describedby="minutes-per-class-description"
                id="minutes-per-class-input"
                placeholder="Enter"
                type="number"
              />
              <Text as="span" id="minutes-per-class-description">
                times per week
              </Text>
            </div>
          </div>
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
