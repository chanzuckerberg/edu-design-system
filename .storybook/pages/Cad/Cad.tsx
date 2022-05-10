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
  Grid,
  GridItem,
  Icon,
  Card,
  CardBody,
  OverflowList,
  OverflowListItem,
  Tabs,
  Tab,
} from '../../../src';

import '../../../src/components/Utilities/Spacing.css';
import { Toolbar } from '../../../src/upcoming-components/Toolbar/Toolbar';
import { ToolbarItem } from '../../../src/upcoming-components/ToolbarItem/ToolbarItem';

import ProjectColumn from '../../recipes/ProjectColumn';

export const Cad = () => (
  <>
    <Panel className="u-margin-bottom-lg" variant="squared">
      <LayoutContainer>
        <PageHeader
          className="u-margin-bottom-none"
          description={<div className="fpo">Stepper</div>}
          headingSize="h5"
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
            <Tabs>
              <Tab title="Planning overview">
                <OverflowList>
                  <OverflowListItem>
                    <ProjectColumn>
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
                      <Grid gap="sm">
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Longer project name truncation after a long...
                              </Heading>
                              <div className="fpo u-margin-none">
                                Calendar Icon text
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Project name
                              </Heading>
                              <div className="fpo u-margin-none">12 days</div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Project name
                              </Heading>
                              <div className="fpo u-margin-none">12 days</div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Project name
                              </Heading>
                              <div className="fpo u-margin-none">12 days</div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Project name
                              </Heading>
                              <div className="fpo u-margin-none">12 days</div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem>
                          <Card>
                            <CardBody>
                              <Heading
                                as="h3"
                                className="u-margin-bottom-sm"
                                size="body-sm"
                              >
                                Project name
                              </Heading>
                              <div className="fpo u-margin-none">12 days</div>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </Grid>
                    </ProjectColumn>
                  </OverflowListItem>
                  <OverflowListItem>
                    <ProjectColumn>
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
                      <div className="fpo" style={{ flex: '1' }}>
                        Empty state
                      </div>
                    </ProjectColumn>
                  </OverflowListItem>
                </OverflowList>
              </Tab>

              <Tab title="Calendar overview">
                <TextPassage>
                  <h3>Tab 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex{' '}
                  </p>
                </TextPassage>
              </Tab>
            </Tabs>
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
              <div className="fpo">Progress bar</div>
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
