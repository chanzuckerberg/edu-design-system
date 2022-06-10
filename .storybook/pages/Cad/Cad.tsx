import React from 'react';

import {
  PageHeader,
  Panel,
  ButtonGroup,
  Button,
  Heading,
  LayoutContainer,
  Layout,
  LayoutSection,
  DragDrop,
  DragDropContainerHeader,
  Icon,
  HorizontalStepper,
  DataBar,
  Toolbar,
  ToolbarItem,
  Grid,
  GridItem,
  Text,
} from '../../../src';

import '../../../src/components/Utilities/Spacing.css';
import CardWithNotification from '../../recipes/CardWithNotification';
import ProjectCard from '../../recipes/ProjectCard';
import TableCard from '../../recipes/TableCard';

import EmptyImage from '../../static/hand-pencil.svg';

const CognitiveSkillColumns = [
  {
    title: 'Least covered Cognitive Skills',
  },
  {
    title: 'Planned Projects',
  },
];

const CognitiveSkillRows = [
  {
    value1: 'Argumentative Claim',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: false,
      },
      {
        ariaLabel: 'Project 4',
        complete: false,
      },
      {
        ariaLabel: 'Project 5',
        complete: false,
      },
      {
        ariaLabel: 'Project 6',
        complete: false,
      },
      {
        ariaLabel: 'Project 7',
        complete: false,
      },
      {
        ariaLabel: 'Project 8',
        complete: false,
      },
      {
        ariaLabel: 'Project 9',
        complete: false,
      },
      {
        ariaLabel: 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'Making Connections and Inferences',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'A longer heading that is super duper long',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: true,
      },
      {
        ariaLabel: 'Project 4',
        complete: true,
      },
      {
        ariaLabel: 'Project 5',
        complete: true,
      },
    ],
  },
];

const StandardsColumns = [
  {
    title: 'Least covered Stan',
  },
  {
    title: 'Planned Projects',
  },
];

const StandardsRows = [
  {
    value1: 'NGSS.3-5-ETS1-1',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: false,
      },
      {
        ariaLabel: 'Project 4',
        complete: false,
      },
      {
        ariaLabel: 'Project 5',
        complete: false,
      },
      {
        ariaLabel: 'Project 6',
        complete: false,
      },
      {
        ariaLabel: 'Project 7',
        complete: false,
      },
      {
        ariaLabel: 'Project 8',
        complete: false,
      },
      {
        ariaLabel: 'Project 9',
        complete: false,
      },
      {
        ariaLabel: 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.ESS1.C',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.ESS1.E',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: true,
      },
      {
        ariaLabel: 'Project 4',
        complete: true,
      },
      {
        ariaLabel: 'Project 5',
        complete: true,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.PS3.C',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: false,
      },
      {
        ariaLabel: 'Project 2',
        complete: false,
      },
      {
        ariaLabel: 'Project 3',
        complete: false,
      },
      {
        ariaLabel: 'Project 4',
        complete: false,
      },
      {
        ariaLabel: 'Project 5',
        complete: false,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.PS3.E',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: false,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: false,
      },
      {
        ariaLabel: 'Project 4',
        complete: false,
      },
      {
        ariaLabel: 'Project 5',
        complete: false,
      },
    ],
  },
];

export const Cad = () => (
  <>
    <Panel className="u-margin-bottom-lg" variant="squared">
      <LayoutContainer>
        <PageHeader
          className="u-margin-bottom-none"
          description={
            <HorizontalStepper
              activeIndex={1}
              steps={[
                'Add classroom details',
                'Add projects',
                'Create course plan',
              ]}
            ></HorizontalStepper>
          }
          headingSize="title-sm"
          orientation="2up"
          right={
            <ButtonGroup>
              <Button>
                <Icon name="arrow-narrow-left" purpose="decorative" />
                Back
              </Button>
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
      <Layout variant="67-33">
        <LayoutSection region="main">
          <Panel>
            <Heading
              as="h2"
              className="u-margin-bottom-md"
              size="headline-sm"
              variant="base"
            >
              Select projects for your History 6 plan
            </Heading>
            <Text as="div" className="u-margin-bottom-xl">
              <p>
                Make a plan so that you can stay connected to learning
                objectives even as changes occur throughout the year.
              </p>
              <p>
                Room for more instructional copy per Content Strategy lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est
                quam, consequat iaculis pretium accumsan, fringilla id ligula.
              </p>
            </Text>

            <DragDrop
              containers={{
                'container-1': {
                  itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
                  emptyContent: (
                    <>
                      <Text as="div" className="u-margin-bottom-xl">
                        <p>
                          There are no more available projects to create your
                          course plan
                        </p>
                      </Text>
                      <img alt="hand with pencil" src={EmptyImage} />
                    </>
                  ),
                  header: (
                    <DragDropContainerHeader>
                      <Toolbar className="u-margin-bottom-md" variant="bare">
                        <ToolbarItem>
                          <Heading as="h2" size="title-sm" variant="base">
                            Available projects
                          </Heading>
                        </ToolbarItem>
                        <ToolbarItem align="right">
                          <Button variant="icon">
                            <Icon name="add" purpose="decorative" />
                            Add project
                          </Button>
                        </ToolbarItem>
                      </Toolbar>
                    </DragDropContainerHeader>
                  ),
                },
                'container-2': {
                  itemIds: [],
                  emptyContent: (
                    <>
                      <Text as="div" className="u-margin-bottom-xl">
                        <p>
                          Drag in available projects to build your course plan
                        </p>
                      </Text>
                      <img alt="hand with pencil" src={EmptyImage} />
                    </>
                  ),
                  header: (
                    <DragDropContainerHeader>
                      <Toolbar className="u-margin-bottom-md" variant="bare">
                        <ToolbarItem>
                          <Heading as="h2" size="title-sm" variant="base">
                            Planned projects
                          </Heading>
                        </ToolbarItem>
                        <ToolbarItem align="right">
                          <Button variant="icon">
                            <Icon name="add" purpose="decorative" />
                            Add project
                          </Button>
                        </ToolbarItem>
                      </Toolbar>
                    </DragDropContainerHeader>
                  ),
                },
              }}
              items={{
                'item-1': {
                  title: 'Project #1',
                  children: (
                    <ProjectCard
                      meta="12 days"
                      number={1}
                      numberAriaLabel="Project 1"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-2': {
                  title: 'Project #2',
                  children: (
                    <ProjectCard
                      meta="12 days"
                      number={2}
                      numberAriaLabel="Project 2"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-3': {
                  title: 'Project #3',
                  children: (
                    <ProjectCard
                      meta="12 days"
                      number={3}
                      numberAriaLabel="Project 3"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-4': {
                  title: 'Project #4',
                  children: (
                    <ProjectCard
                      meta="12 days"
                      number={4}
                      numberAriaLabel="Project 4"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-5': {
                  title: 'Project #5',
                  children: (
                    <ProjectCard
                      buttonDropdownPosition="top-left"
                      meta="12 days"
                      number={5}
                      numberAriaLabel="Project 5"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-6': {
                  title: 'Project #6',
                  children: (
                    <ProjectCard
                      buttonDropdownPosition="top-left"
                      meta="12 days"
                      number={6}
                      numberAriaLabel="Project 6"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
              }}
              multipleContainers={false}
              unstyledItems={true}
            />
          </Panel>
        </LayoutSection>
        <LayoutSection region="sidebar">
          <CardWithNotification
            className="u-margin-bottom-lg"
            text="Summit recommends teaching at least five (5) projects for this course."
            variant="brand"
          >
            <CardWithNotification.Body>
              <DataBar
                label="Total instructional days"
                max={60}
                segments={[
                  { value: 10, text: 'Project 1' },
                  { value: 11, text: 'Project 2' },
                  { value: 22, text: 'Project 3' },
                  { value: 11, text: 'Project 4' },
                ]}
              />
            </CardWithNotification.Body>
          </CardWithNotification>
          <Grid className="u-margin-bottom-lg" variant="1-2-1up">
            <GridItem>
              <TableCard
                buttonContent="View all Cognitive Skills"
                tableColumns={CognitiveSkillColumns}
                tableRows={CognitiveSkillRows}
                title="Cognitive skills coverage"
              />
            </GridItem>
            <GridItem>
              <TableCard
                buttonContent="View all Standards"
                tableColumns={StandardsColumns}
                tableRows={StandardsRows}
                title="Standards coverage"
              />
            </GridItem>
          </Grid>
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
