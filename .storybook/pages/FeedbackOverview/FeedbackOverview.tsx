import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import styles from './FeedbackOverview.module.css';
import {
  Button,
  Breadcrumbs,
  BreadcrumbsItem,
  Card,
  Heading,
  Icon,
  NumberIcon,
  PageHeader,
  Panel,
  Tab,
  Tabs,
  Table,
  Text,
  TimelineNav,
  TimelineNavPanel,
  Toolbar,
  ToolbarItem,
} from '../../../src';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';

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

export const FeedbackOverview = ({ activeIndex = 0 }: Props) => {
  const [isTable, setIsTable] = useState(false);
  /**
   * Display data as cards if mobile, table if not.
   */
  const tableBreakpoint = parseInt(breakpoint['eds-bp-md'], 10) * 16;
  const updateScreenSize = debounce(
    () => {
      if (window.innerWidth >= tableBreakpoint && !isTable) {
        setIsTable(true);
      }
      if (window.innerWidth < tableBreakpoint && isTable) {
        setIsTable(false);
      }
    },
    200,
    { leading: true },
  );
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [updateScreenSize]);

  const studentCheckpoints = [
    {
      student: 'Araya, Raquel',
      checkpoints: 10,
    },
    {
      student: 'Jesse Banet',
      checkpoints: 5,
    },
    {
      student: 'Julie Davis',
      checkpoints: 10,
    },
    {
      student: 'Hussain, Adnan',
      checkpoints: 10,
    },
    {
      student: 'Ilango, Megha',
      checkpoints: 10,
    },
    {
      student: 'Jaffer, Arman',
      checkpoints: 10,
    },
    {
      student: 'Kang, Michelle',
      checkpoints: 10,
    },
    {
      student: 'Lewine, Chris',
      checkpoints: 10,
    },
    {
      student: 'Luo, Celia',
      checkpoints: 10,
    },
  ];

  const feedbackOverviews = studentCheckpoints.map(
    ({ student, checkpoints }) => {
      const status = Array(checkpoints).fill(
        <div
          className="fpo"
          style={{
            height: '1.25rem',
            width: '1.25rem',
            padding: 0,
            margin: 0,
            flexShrink: 0,
          }}
        ></div>,
      );
      return {
        student,
        checkpointsStatus: status,
      };
    },
  );

  const checkpointProgresses = [
    {
      student: 'Araya, Raquel',
      status: 'Stop and Revise',
      cogSkill: 3,
      timeSubmitted: '2 hours ago',
    },
    {
      student: 'Jesse Banet',
      status: 'Stop and Revise',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Julie Davis',
      status: 'Working',
      cogSkill: 0,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Hussain, Adnan',
      status: 'Review Feedback',
      cogSkill: 0,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Ilango, Megha',
      status: 'Needs Feedback',
      cogSkill: 3,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Jaffer, Arman',
      status: 'Needs Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Kang, Michelle',
      status: 'Review Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Lewine, Chris',
      status: 'Continue Working',
      cogSkill: 2,
      timeSubmitted: '3 days ago',
    },
    {
      student: 'Luo, Celia',
      status: 'Review Feedback',
      cogSkill: 1,
      timeSubmitted: '3 days ago',
    },
  ];

  return (
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
      <Panel flush>
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
            <TimelineNav activeIndex={activeIndex}>
              <TimelineNavPanel title="Overview">
                <Toolbar
                  className={styles['feedback-overview__toolbar']}
                  variant="bare"
                >
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
                {isTable && (
                  <Table>
                    <Table.Header>
                      <Table.Row variant="header">
                        <Table.HeaderCell>Student</Table.HeaderCell>
                        <Table.HeaderCell>Checkpoints Status</Table.HeaderCell>
                        <Table.HeaderCell>Final Product</Table.HeaderCell>
                      </Table.Row>
                      <Table.Row variant="header">
                        <Table.Cell className="py-2"></Table.Cell>
                        <Table.Cell className="py-2">
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
                        </Table.Cell>
                        <Table.Cell className="py-2"></Table.Cell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {feedbackOverviews.map((overview) => (
                        <Table.Row
                          key={`feedback-overview-${overview.student}`}
                        >
                          <Table.Cell>{overview.student}</Table.Cell>
                          <Table.Cell className="flex gap-1">
                            {overview.checkpointsStatus}
                          </Table.Cell>
                          <Table.Cell>
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                )}
                {!isTable &&
                  feedbackOverviews.map((overview) => (
                    <Card
                      className="mb-4 py-8"
                      key={`feedback-overview-${overview.student}`}
                    >
                      <Card.Header
                        className={styles['feedback-overview__card-header']}
                      >
                        {overview.student}
                      </Card.Header>
                      <Card.Body>
                        <div className="flex justify-between">
                          <Text
                            as="p"
                            className="my-auto"
                            size="sm"
                            weight="bold"
                          >
                            Checkpoint Status
                          </Text>
                          <div className="flex flex-wrap justify-end gap-1">
                            {overview.checkpointsStatus}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <Text as="p" size="sm" weight="bold">
                            Final product
                          </Text>
                          <div className="flex justify-end gap-2">
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                            <Icon
                              color={EdsThemeColorIconNeutralSubtle}
                              name="star-outline"
                              purpose="decorative"
                              size="1.5rem"
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
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
                <Toolbar
                  className={styles['feedback-overview__toolbar']}
                  variant="bare"
                >
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
                {isTable && (
                  <Table>
                    <Table.Header>
                      <Table.Row variant="header">
                        <Table.HeaderCell>Students</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Cog skill</Table.HeaderCell>
                        <Table.HeaderCell>Time submitted</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {checkpointProgresses.map((progress) => (
                        <Table.Row key={`progress-${progress.student}`}>
                          <Table.Cell>{progress.student}</Table.Cell>
                          <Table.Cell>{progress.status}</Table.Cell>
                          <Table.Cell>{progress.cogSkill}</Table.Cell>
                          <Table.Cell>{progress.timeSubmitted}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                )}
                {!isTable &&
                  checkpointProgresses.map((progress) => (
                    <Card
                      className="mb-4 py-8"
                      key={`progress-${progress.student}`}
                    >
                      <Card.Header
                        className={styles['feedback-overview__card-header']}
                      >
                        {progress.student}
                      </Card.Header>
                      <Card.Body>
                        <div className="flex justify-between">
                          <Text as="p" size="sm" weight="bold">
                            Status
                          </Text>
                          <Text as="p" size="sm">
                            {progress.status}
                          </Text>
                        </div>
                        <div className="flex justify-between">
                          <Text as="p" size="sm" weight="bold">
                            Cog skill
                          </Text>
                          <Text as="p" size="sm">
                            {progress.cogSkill}
                          </Text>
                        </div>
                        <div className="flex justify-between">
                          <Text as="p" size="sm" weight="bold">
                            Time submitted
                          </Text>
                          <Text as="p" size="sm">
                            {progress.timeSubmitted}
                          </Text>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
              </TimelineNavPanel>

              <TimelineNavPanel
                title="Research and Model Cells"
                variant="number"
              >
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Research and Model Cells
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
              <TimelineNavPanel
                title="Research and Model Body Systems"
                variant="number"
              >
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Research and Model Body Systems
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
              <TimelineNavPanel title="Draft Your Book" variant="number">
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Draft Your Book
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
              <TimelineNavPanel title="Critique a Peer's Book" variant="number">
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Critique a Peer&apos;s Book
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
              <TimelineNavPanel title="Human Body Book" variant="number">
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Human Body Book
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
              <TimelineNavPanel title="Book Review" variant="incomplete">
                <div className="max-w-xl">
                  <Heading className="mb-6" size="h3">
                    Book Review
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </Text>
                </div>
              </TimelineNavPanel>
            </TimelineNav>
          </Tab>
        </Tabs>
      </Panel>
    </PageShell>
  );
};
