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
  Text,
} from '../../../src';

import '../../../src/components/Utilities/Spacing.css';
import ProjectCard from '../../recipes/ProjectCard';
import StandardsCoverage from '../../recipes/StandardsCoverage';

import EmptyImage from '../../static/hand-pencil.svg';

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
      <Layout variant="60-40">
        <LayoutSection region="main">
          <Panel>
            <Heading as="h2" className="u-margin-bottom-lg" size="headline-sm">
              Select projects for your History 6 plan
            </Heading>
            <Text as="div" className="u-margin-bottom-lg">
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
                      <Text as="div" className="u-margin-bottom-lg">
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
                          <Heading as="h2" size="title-sm">
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
                      <Text as="div" className="u-margin-bottom-lg">
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
                          <Heading as="h2" size="title-sm">
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
          <Panel className="u-margin-bottom-lg" flush>
            <div className="u-padding-md">
              <Toolbar className="u-margin-bottom-md" variant="bare">
                <ToolbarItem>
                  <Heading as="h2" size="title-sm">
                    Total Instructional days
                  </Heading>
                </ToolbarItem>
                <ToolbarItem align="right">
                  <div className="fpo u-margin-none">Meta</div>
                </ToolbarItem>
              </Toolbar>
              <DataBar
                label="Data bar"
                max={100}
                segments={[
                  { value: 25, text: 'Segment 1' },
                  { value: 10, text: 'Segment 2' },
                  { value: 15, text: 'Segment 3' },
                ]}
              />
            </div>
            <div className="fpo">Inline Notification</div>
          </Panel>
          <StandardsCoverage />
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
