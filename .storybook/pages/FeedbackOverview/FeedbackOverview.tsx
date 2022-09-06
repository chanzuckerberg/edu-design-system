import React from 'react';

import {
  PageHeader,
  Breadcrumbs,
  BreadcrumbsItem,
  Tabs,
  Tab,
  Panel,
  TimelineNav,
  TimelineNavPanel,
  Heading,
  Text,
  TableHeaderCell,
  TableRow,
  TableHeader,
  Table,
  TableBody,
  TableCell,
  NumberIcon,
  TableObject,
  Toolbar,
  ToolbarItem,
  Button,
  Icon,
} from '../../../src';

import {
  EdsThemeColorIconNeutralSubtle,
  EdsThemeColorIconBrandPrimary,
} from '../../../src/tokens-dist/ts/colors';
import NumberIconList from '../../recipes/NumberIconList';
import { PageShell } from '../../recipes/PageShell/PageShell';

export interface Props {
  /**
   * Active index of the table to switch between stories
   */
  activeIndex?: number;
}

export const FeedbackOverview = ({ activeIndex = 0 }: Props) => (
  <PageShell className="body--alternate">
    <Breadcrumbs className="mb-4">
      <BreadcrumbsItem href="#" text="My Courses" />
      <BreadcrumbsItem href="#" text="Modern World 2" />
    </Breadcrumbs>
    <PageHeader
      className="!mb-8 !flex-row"
      right={
        <Button status="neutral" variant="icon">
          <div className="sr-only lg:not-sr-only">More options</div>
          <Icon name="dots-vertical" purpose="decorative" />
        </Button>
      }
      title="Page title as Headline"
    />
    <Panel flush={true}>
      <Tabs activeIndex={3}>
        <Tab title="Overview">
          <div className="fpo">Overview</div>
        </Tab>
        <Tab title="Plans">
          <div className="fpo">Learners</div>
        </Tab>
        <Tab title="Learners">
          <div className="fpo">Plans</div>
        </Tab>
        <Tab title="Feedback">
          <TimelineNav activeIndex={activeIndex} variant="ordered">
            <TimelineNavPanel title="Overview">
              <TableObject>
                <TableObject.Header>
                  <Toolbar variant="bare">
                    <ToolbarItem>
                      <Heading as="h2" size="headline-md">
                        Feedback Overview
                      </Heading>
                    </ToolbarItem>
                    <ToolbarItem align="right">
                      <Button size="md" status="brand" variant="secondary">
                        <Icon
                          name="filter-list"
                          purpose="decorative"
                          size="1.375rem"
                        />
                        Filters
                      </Button>
                    </ToolbarItem>
                  </Toolbar>
                </TableObject.Header>
                <TableObject.Body>
                  <Table
                    behavior="stacked"
                    caption="Feedback overview"
                    hideCaption={true}
                    highlightFirstCell={true}
                  >
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell>Student</TableHeaderCell>
                        <TableHeaderCell>Checkpoints Status</TableHeaderCell>
                        <TableHeaderCell>Final Product</TableHeaderCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell></TableHeaderCell>
                        <TableHeaderCell>
                          <NumberIconList>
                            <NumberIcon
                              aria-label="Item 1"
                              number={1}
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 2"
                              number={2}
                              numberIconTitle="incomplete step 2"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 3"
                              number={3}
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 4"
                              number={4}
                              numberIconTitle="incomplete step 4"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 5"
                              number={5}
                              numberIconTitle="incomplete step 5"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 6"
                              number={6}
                              numberIconTitle="incomplete step 6"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 6"
                              number={7}
                              numberIconTitle="incomplete step 6"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 6"
                              number={8}
                              numberIconTitle="incomplete step 6"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 6"
                              number={9}
                              numberIconTitle="incomplete step 6"
                              size="sm"
                            />
                            <NumberIcon
                              aria-label="Item 6"
                              number={10}
                              numberIconTitle="incomplete step 6"
                              size="sm"
                            />
                          </NumberIconList>
                        </TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Araya, Raquel
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Jesse Banet
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Julie Davis
                        </TableCell>
                        <TableCell data-heading="Checkpoint status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Hussain, Adnan
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Ilango, Megha
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Jaffer, Arman
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Kang, Michelle
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">
                          Lewine, Chris
                        </TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Student">Luo, Celia</TableCell>
                        <TableCell data-heading="Checkpoint Status">
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.25rem',
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                            }}
                          >
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                            <div
                              className="fpo"
                              style={{
                                height: '1.25rem',
                                width: '1.25rem',
                                padding: 0,
                                margin: 0,
                                flexShrink: 0,
                              }}
                            >
                              &nbsp;
                            </div>
                          </div>
                        </TableCell>
                        <TableCell data-heading="Final product">
                          {' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />{' '}
                          <Icon
                            color={EdsThemeColorIconNeutralSubtle}
                            name="star-outline"
                            purpose="decorative"
                            size="1.5rem"
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableObject.Body>
              </TableObject>
            </TimelineNavPanel>

            <TimelineNavPanel
              title="Plan your body"
              titleAfter={
                <Icon
                  color={EdsThemeColorIconBrandPrimary}
                  name="circle-small"
                  purpose="informative"
                  size="1.5em"
                  title="2 students need feedback"
                />
              }
              variant="number"
            >
              <TableObject>
                <TableObject.Header>
                  <Toolbar variant="bare">
                    <ToolbarItem>
                      <Heading as="h2" size="h3">
                        Checkpoint Progress
                      </Heading>
                    </ToolbarItem>
                    <ToolbarItem align="right">
                      <Button size="md" status="brand" variant="secondary">
                        <Icon
                          name="filter-list"
                          purpose="decorative"
                          size="1.375rem"
                        />
                        Filters
                      </Button>
                    </ToolbarItem>
                  </Toolbar>
                </TableObject.Header>
                <TableObject.Body>
                  <Table
                    behavior="stacked"
                    caption="Feedback checkpoints"
                    hideCaption={true}
                    highlightFirstCell={true}
                  >
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell>Students</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Cog skill</TableHeaderCell>
                        <TableHeaderCell>Time submitted</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Araya, Raquel
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Stop and Revise&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">3</TableCell>
                        <TableCell data-heading="Time submitted">
                          2 hours ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Jesse Banet
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Stop and Revise&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">1</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Julie Davis
                        </TableCell>
                        <TableCell data-heading="Status">Working</TableCell>
                        <TableCell data-heading="Cog skill">0</TableCell>
                        <TableCell>3 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Hussain, Adnan
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Review Feedback&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">0</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Ilango, Megha
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Needs Feedback&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">3</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Jaffer, Arman
                        </TableCell>
                        <TableCell data-heading="Status">
                          Needs Feedback
                        </TableCell>
                        <TableCell data-heading="Cog skill">1</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Kang, Michelle
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Review Feedback&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">1</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Lewine, Chris
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Continue Working&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">2</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell data-heading="Students">
                          Luo, Celia
                        </TableCell>
                        <TableCell data-heading="Status">
                          &quot;Review Feedback&quot;
                        </TableCell>
                        <TableCell data-heading="Cog skill">1</TableCell>
                        <TableCell data-heading="Time submitted">
                          3 days ago
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableObject.Body>
              </TableObject>
            </TimelineNavPanel>

            <TimelineNavPanel title="Research and Model Cells" variant="number">
              <Text as="div">
                <h3>Research and Model Cells</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel
              title="Research and Model Body Systems"
              variant="number"
            >
              <Text as="div">
                <h3>Research and Model Body Systems</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Draft Your Book" variant="number">
              <Text as="div">
                <h3>Draft Your Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Critique a Peer's Book" variant="number">
              <Text as="div">
                <h3>Critique a Peer&apos;s Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Human Body Book" variant="number">
              <Text as="div">
                <h3>Human Body Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
            <TimelineNavPanel title="Book Review" variant="incomplete">
              <Text as="div">
                <h3>Book Review</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </p>
              </Text>
            </TimelineNavPanel>
          </TimelineNav>
        </Tab>
      </Tabs>
    </Panel>
  </PageShell>
);
