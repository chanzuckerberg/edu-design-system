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
  TableHeaderCell,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHeader,
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

  const feedbackOverviews = [
    {
      student: 'Araya, Raquel',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Jesse Banet',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Julie Davis',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Hussain, Adnan',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Ilango, Megha',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Jaffer, Arman',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Kang, Michelle',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Lewine, Chris',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
    {
      student: 'Luo, Celia',
      checkpointsStatus: (
        <>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
          <div
            className="fpo"
            style={{
              height: '1.25rem',
              width: '1.25rem',
              padding: 0,
              margin: 0,
              flexShrink: 0,
            }}
          ></div>
        </>
      ),
    },
  ];

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
                    <TableHeader>
                      <TableRow variant="header">
                        <TableHeaderCell>Student</TableHeaderCell>
                        <TableHeaderCell>Checkpoints Status</TableHeaderCell>
                        <TableHeaderCell>Final Product</TableHeaderCell>
                      </TableRow>
                      <TableRow variant="header">
                        <TableCell></TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feedbackOverviews.map((overview) => (
                        <TableRow key={`feedback-overview-${overview.student}`}>
                          <TableCell>{overview.student}</TableCell>
                          <TableCell className="flex gap-1">
                            {overview.checkpointsStatus}
                          </TableCell>
                          <TableCell>
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
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {!isTable &&
                  feedbackOverviews.map((overview) => (
                    <Card
                      className="py-8 mb-4"
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
                    <TableHeader>
                      <TableRow variant="header">
                        <TableHeaderCell>Students</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Cog skill</TableHeaderCell>
                        <TableHeaderCell>Time submitted</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {checkpointProgresses.map((progress) => (
                        <TableRow key={`progress-${progress.student}`}>
                          <TableCell>{progress.student}</TableCell>
                          <TableCell>{progress.status}</TableCell>
                          <TableCell>{progress.cogSkill}</TableCell>
                          <TableCell>{progress.timeSubmitted}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {!isTable &&
                  checkpointProgresses.map((progress) => (
                    <Card
                      className="py-8 mb-4"
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
                <Text as="div">
                  <h3>Research and Model Cells</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </p>
                </Text>
              </TimelineNavPanel>
              <TimelineNavPanel title="Draft Your Book" variant="number">
                <Text as="div">
                  <h3>Draft Your Book</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </p>
                </Text>
              </TimelineNavPanel>
              <TimelineNavPanel title="Critique a Peer's Book" variant="number">
                <Text as="div">
                  <h3>Critique a Peer&apos;s Book</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </p>
                </Text>
              </TimelineNavPanel>
              <TimelineNavPanel title="Human Body Book" variant="number">
                <Text as="div">
                  <h3>Human Body Book</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </p>
                </Text>
              </TimelineNavPanel>
              <TimelineNavPanel title="Book Review" variant="incomplete">
                <Text as="div">
                  <h3>Book Review</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex
                  </p>
                </Text>
              </TimelineNavPanel>
            </TimelineNav>
          </Tab>
        </Tabs>
      </Panel>
    </PageShell>
  );
};
