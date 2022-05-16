import React from 'react';

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
import TextField from '../../../src/upcoming-components/TextField';

import '../../../src/components/Utilities/Spacing.css';
import '../../../src/components/Utilities/TypographyUsage.css';

export const CadStep1 = () => (
  <>
    <Panel className="u-margin-bottom-xl" variant="squared">
      <LayoutContainer>
        <PageHeader
          className="u-margin-bottom-none"
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
      <Layout variant="50-50">
        <LayoutSection className="u-margin-bottom-xl" region="main">
          <Heading className="u-margin-bottom-xl" size="h1">
            Welcome, Amy. Chart your course for the year here.
          </Heading>
          <Text className="u-margin-bottom-xl" size="lg">
            The course planner can help you set off on the right track, and
            navigate whatever comes your way.
          </Text>
          <img
            alt="placeholder"
            src="https://via.placeholder.com/480x320"
            style={{ display: 'block' }}
          />
        </LayoutSection>
        <LayoutSection region="main">
          <Heading as="h2" className="u-margin-bottom-xl" size="h3">
            Tell us how often your course meets.
          </Heading>
          <Text className="u-margin-bottom-xl" size="md">
            We’ll adjust project plans based on your schedule. This way, you can
            get a more accurate estimate of how long the course will actually
            take.
          </Text>
          <Text className="u-margin-bottom-xl" size="md">
            If you teach multiple sections of this course, you can enter the
            average amounts for each question below.
          </Text>
          <TextField
            className="u-margin-bottom-lg"
            fieldNote="times per week"
            label="How many times per week do you have class?"
            min={0}
            placeholder="Enter"
            type="number"
          />
          <TextField
            className="u-margin-bottom-lg"
            fieldNote="minutes"
            label="How many minutes is each class?"
            min={0}
            placeholder="Enter"
            type="number"
          />
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
