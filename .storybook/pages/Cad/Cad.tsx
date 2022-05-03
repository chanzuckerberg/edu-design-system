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
  Toolbar,
  ToolbarItem,
  Grid,
  GridItem,
  Icon,
  Card,
  CardBody,
  Banner,
  OverflowList,
  Tabs,
  Tab,
  Toast,
} from '../../../src';

import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';

export const Cad = () => (
  <>
    <Panel className={utilityStyles['u-margin-bottom-lg']} variant="squared">
      <LayoutContainer>
        <PageHeader
          className={utilityStyles['u-margin-bottom-none']}
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
            <Heading
              as="h2"
              className={utilityStyles['u-margin-bottom-lg']}
              size="h3"
            >
              Select projects for your History 6 plan
            </Heading>
            <TextPassage className={utilityStyles['u-margin-bottom-lg']}>
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
                  <div
                    style={{
                      flexShrink: '0',
                    }}
                  >
                    <Toolbar
                      className={utilityStyles['u-margin-bottom-md']}
                      variant="bare"
                    >
                      <ToolbarItem>
                        <Heading as="h2" size="h5">
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
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
                              className={utilityStyles['u-margin-bottom-sm']}
                              size="h6"
                            >
                              Project name
                            </Heading>
                            <div className="fpo u-margin-none">12 days</div>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </Grid>
                  </div>
                  <div
                    style={{
                      flexShrink: '0',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Toolbar
                        className={utilityStyles['u-margin-bottom-md']}
                        variant="bare"
                      >
                        <ToolbarItem>
                          <Heading as="h2" size="h5">
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
                    </div>
                  </div>
                  <div
                    style={{
                      flexShrink: '0',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Toolbar
                        className={utilityStyles['u-margin-bottom-md']}
                        variant="bare"
                      >
                        <ToolbarItem>
                          <Heading as="h2" size="h5">
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
                    </div>
                  </div>
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
          <Panel className={utilityStyles['u-margin-bottom-lg']} flush>
            <div className={utilityStyles['u-padding-md']}>
              <Toolbar
                className={utilityStyles['u-margin-bottom-md']}
                variant="bare"
              >
                <ToolbarItem>
                  <Heading as="h2" size="h5">
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
            <Toolbar
              className={utilityStyles['u-margin-bottom-md']}
              variant="bare"
            >
              <ToolbarItem>
                <Heading as="h2" size="h5">
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
