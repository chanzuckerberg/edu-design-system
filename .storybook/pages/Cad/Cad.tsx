import React from 'react';

import {
  PageHeader,
  Panel,
  ButtonGroup,
  Button,
  Heading,
  TextPassage,
  LayoutContainer,
  Layout,
  LayoutSection,
  DragDrop,
  DragDropContainerHeader,
  Grid,
  GridItem,
  Icon,
  OverflowList,
  OverflowListItem,
  HorizontalStepper,
  DataBar,
} from '../../../src';

import '../../../src/components/Utilities/Spacing.css';
import { Toolbar } from '../../../src/upcoming-components/Toolbar/Toolbar';
import { ToolbarItem } from '../../../src/upcoming-components/ToolbarItem/ToolbarItem';
import ProjectCard from '../../recipes/ProjectCard';

import ProjectColumn from '../../recipes/ProjectColumn';

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
      <Layout sidebar="wide" variant="right-sidebar">
        <LayoutSection region="main">
          <Panel>
            <Heading as="h2" className="u-margin-bottom-lg" size="headline-sm">
              Select projects for your History 6 plan
            </Heading>
            <TextPassage className="u-margin-bottom-lg">
              <p>
                Make a plan so that you can stay connected to learning
                objectives even as changes occur throughout the year.
              </p>
              <p>
                Room for more instructional copy per Content Strategy lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est
                quam, consequat iaculis pretium accumsan, fringilla id ligula.
              </p>
            </TextPassage>

            <DragDrop
              multipleContainers={false}
              items={{
                'item-1': {
                  title: 'Project #1',
                  children: (
                    <ProjectCard
                      number={1}
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-2': {
                  title: 'Project #2',
                  children: (
                    <ProjectCard
                      number={2}
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-3': {
                  title: 'Project #3',
                  children: (
                    <ProjectCard
                      number={3}
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-4': {
                  title: 'Project #4',
                  children: (
                    <ProjectCard
                      number={4}
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-5': {
                  title: 'Project #5',
                  children: (
                    <ProjectCard
                      number={5}
                      buttonDropdownPosition="top-left"
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
                'item-6': {
                  title: 'Project #6',
                  children: (
                    <ProjectCard
                      number={6}
                      buttonDropdownPosition="top-left"
                      meta="12 days"
                      title="Project card title"
                    ></ProjectCard>
                  ),
                },
              }}
              containers={{
                'container-1': {
                  itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
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
          <Panel>
            <Toolbar className="u-margin-bottom-md" variant="bare">
              <ToolbarItem>
                <Heading as="h2" size="title-sm">
                  Standards coverage
                </Heading>
              </ToolbarItem>
              <ToolbarItem align="right">
                <Button variant="icon">
                  View all
                  <Icon name="arrow-narrow-right" purpose="decorative" />
                </Button>
              </ToolbarItem>
            </Toolbar>
            <div className="fpo" style={{ height: '30rem' }}>
              Standards coverage
            </div>
          </Panel>
        </LayoutSection>
      </Layout>
    </LayoutContainer>
  </>
);
