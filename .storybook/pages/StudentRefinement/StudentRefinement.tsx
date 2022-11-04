import clsx from 'clsx';
import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import styles from './StudentRefinement.module.css';

import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FiltersCheckboxField,
  FiltersDrawer,
  Icon,
  Layout,
  PageHeader,
  Panel,
  SearchBar,
  Score,
  Tab,
  Tabs,
  Table,
  Tag,
  Text,
} from '../../../src';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';

import { EdsThemeColorIconUtilityWarning } from '../../../src/tokens-dist/ts/colors';

import { DataSummaryCard } from '../../recipes/DataSummaryCard/DataSummaryCard';
import { PageShell } from '../../recipes/PageShell/PageShell';

export const StudentRefinement = () => {
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

  const students = [
    {
      name: 'Caroline Garcia',
      offTrack: true,
      grade: {
        offTrack: true,
        score: '53%',
      },
      cogSkillAvg: {
        offTrack: true,
        score: '30%',
      },
      projects: {
        score: 3,
      },
      powerFocusAreas: {
        score: 8,
      },
    },
    {
      name: 'Anthony Smith',
      grade: {
        grade: 'A',
        score: '93%',
      },
      cogSkillAvg: {
        score: '84%',
      },
      projects: {
        offTrack: true,
        score: 2,
      },
      powerFocusAreas: {
        score: 4,
      },
    },
    {
      name: 'Sai Kumar',
      grade: {
        grade: 'B-',
        score: '81%',
      },
      cogSkillAvg: {
        score: '78%',
      },
      projects: {
        offTrack: true,
        score: 1,
      },
      powerFocusAreas: {
        score: 7,
      },
    },
    {
      name: 'Rachel Campbell',
      grade: {
        offTrack: true,
        score: '68%',
      },
      cogSkillAvg: {
        score: '73%',
      },
      projects: {
        score: 3,
      },
      powerFocusAreas: {
        score: 5,
      },
    },
    {
      name: 'Emily Tran',
      offTrack: true,
      grade: {
        offTrack: true,
        score: '30%',
      },
      cogSkillAvg: {
        score: '100%',
      },
      projects: {
        offTrack: true,
        score: 2,
      },
      powerFocusAreas: {
        offTrack: true,
        score: 3,
      },
    },
    {
      name: 'Wei Zhang',
      grade: {
        grade: 'C',
        score: '73%',
      },
      cogSkillAvg: {
        score: '75%',
      },
      projects: {
        score: 3,
      },
      powerFocusAreas: {
        score: 6,
      },
    },
  ];
  const studentsTable = (
    <Table>
      <Table.Header className={styles['student-refinement__header-row']}>
        <Table.Row variant="header">
          <Table.HeaderCell>Students (32)</Table.HeaderCell>
          <Table.HeaderCell className="text-center">Grade</Table.HeaderCell>
          <Table.HeaderCell className="text-center">
            Cog Skill Avg
          </Table.HeaderCell>
          <Table.HeaderCell className="text-center">Projects</Table.HeaderCell>
          <Table.HeaderCell className="text-center">
            Power Focus Areas
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {students.map((student) => (
          <Table.Row key={'table-row-' + student.name}>
            <Table.Cell className={styles['student-refinement__name-cell']}>
              <Text as="span" size="sm">
                {student.name}
              </Text>
              {student.offTrack && (
                <Tag hasOutline text="Off Track" variant="warning" />
              )}
            </Table.Cell>
            <Table.Cell className="text-center">
              {student.grade.offTrack && (
                <Icon
                  className={styles['student-refinement__grade']}
                  color={EdsThemeColorIconUtilityWarning}
                  name="circle-small"
                  purpose="informative"
                  size="1.25rem"
                  title="off track"
                />
              )}
              {student.grade.grade && (
                <Text as="span" className={styles['student-refinement__grade']}>
                  {student.grade.grade}
                </Text>
              )}
              <Score text={student.grade.score} variant="table" />
            </Table.Cell>
            <Table.Cell
              className={clsx(
                'text-center',
                student.cogSkillAvg.offTrack &&
                  styles['student-refinement__cell--inset-left'],
              )}
            >
              {student.cogSkillAvg.offTrack && (
                <Icon
                  className={styles['student-refinement__grade']}
                  color={EdsThemeColorIconUtilityWarning}
                  name="circle-small"
                  purpose="informative"
                  size="1.25rem"
                  title="off track"
                />
              )}
              <Score text={student.cogSkillAvg.score} variant="table" />
            </Table.Cell>
            <Table.Cell
              className={clsx(
                'text-center',
                student.projects.offTrack &&
                  styles['student-refinement__cell--inset-left'],
              )}
            >
              {student.projects.offTrack && (
                <Icon
                  className={styles['student-refinement__grade']}
                  color={EdsThemeColorIconUtilityWarning}
                  name="circle-small"
                  purpose="informative"
                  size="1.25rem"
                  title="off track"
                />
              )}
              <Score text={`${student.projects.score} / 3`} variant="table" />
            </Table.Cell>
            <Table.Cell
              className={clsx(
                'text-center',
                student.powerFocusAreas.offTrack &&
                  styles['student-refinement__cell--inset-left'],
              )}
            >
              {student.powerFocusAreas.offTrack && (
                <Icon
                  className={styles['student-refinement__grade']}
                  color={EdsThemeColorIconUtilityWarning}
                  name="circle-small"
                  purpose="informative"
                  size="1.25rem"
                  title="off track"
                />
              )}
              <Score
                text={`${student.powerFocusAreas.score} / 10`}
                variant="table"
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
  const studentsCards = (
    <div>
      {students.map((student) => (
        <Card key={'card-' + student.name}>
          <Card.Header>
            <Text as="span" size="lg" weight="bold">
              {student.name}
            </Text>
            {student.offTrack && (
              <Tag
                className="ml-2"
                hasOutline
                text="Off Track"
                variant="warning"
              />
            )}
          </Card.Header>
          <Card.Body>
            <div className="flex justify-between">
              <Text as="span" size="sm" weight="bold">
                Grade
              </Text>
              <div className="flex items-center justify-between w-20">
                {student.grade.offTrack && (
                  <Icon
                    className={styles['student-refinement__grade']}
                    color={EdsThemeColorIconUtilityWarning}
                    name="circle-small"
                    purpose="informative"
                    size="1.25rem"
                    title="off track"
                  />
                )}
                {student.grade.grade && (
                  <Text
                    as="span"
                    className={styles['student-refinement__grade']}
                  >
                    {student.grade.grade}
                  </Text>
                )}
                <Score text={student.grade.score} variant="table" />
              </div>
            </div>
            <div className="flex justify-between">
              <Text as="span" size="sm" weight="bold">
                Cog Skill Avg
              </Text>
              <div
                className={clsx(
                  'flex items-center',
                  !student.cogSkillAvg.offTrack && 'justify-end',
                  student.cogSkillAvg.offTrack && 'justify-between w-20',
                )}
              >
                {student.cogSkillAvg.offTrack && (
                  <Icon
                    className={styles['student-refinement__grade']}
                    color={EdsThemeColorIconUtilityWarning}
                    name="circle-small"
                    purpose="informative"
                    size="1.25rem"
                    title="off track"
                  />
                )}
                <Score text={student.cogSkillAvg.score} variant="table" />
              </div>
            </div>
            <div className="flex justify-between">
              <Text as="span" size="sm" weight="bold">
                Project
              </Text>
              <div
                className={clsx(
                  'flex items-center',
                  !student.projects.offTrack && 'justify-end',
                  student.projects.offTrack && 'justify-between w-20',
                )}
              >
                {student.projects.offTrack && (
                  <Icon
                    className={styles['student-refinement__grade']}
                    color={EdsThemeColorIconUtilityWarning}
                    name="circle-small"
                    purpose="informative"
                    size="1.25rem"
                    title="off track"
                  />
                )}
                <Score text={`${student.projects.score} / 3`} variant="table" />
              </div>
            </div>
            <div className="flex justify-between">
              <Text as="span" size="sm" weight="bold">
                Power Focus Area
              </Text>
              <div
                className={clsx(
                  'flex items-center',
                  !student.powerFocusAreas.offTrack && 'justify-end',
                  student.powerFocusAreas.offTrack && 'justify-between w-20',
                )}
              >
                {student.powerFocusAreas.offTrack && (
                  <Icon
                    className={styles['student-refinement__grade']}
                    color={EdsThemeColorIconUtilityWarning}
                    name="circle-small"
                    purpose="informative"
                    size="1.25rem"
                    title="off track"
                  />
                )}
                <Score
                  text={`${student.powerFocusAreas.score} / 10`}
                  variant="table"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
  return (
    <PageShell>
      <Breadcrumbs>
        <Breadcrumbs.Item href="#" text="My Courses" />
      </Breadcrumbs>
      <div className={styles['student-refinement__header']}>
        <PageHeader title="Disciplinary Science 7 (Life Science Focus)" />
        <Button
          className={styles['student-refinement__more-options']}
          status="neutral"
          variant="icon"
        >
          More options
          <Icon name="dots-vertical" purpose="decorative" />
        </Button>
      </div>
      <Panel flush>
        <Tabs activeIndex={1} className={styles['student-refinement__tabs']}>
          <Tab title="Overview">
            <div className="fpo">Overview</div>
          </Tab>
          <Tab title="Students">
            <div className={styles['student-refinement__students-page']}>
              <div className={styles['student-refinement__summary-cards']}>
                <DataSummaryCard
                  className={styles['student-refinement__summary-card']}
                  dataAmount="38"
                  dataUnit="%"
                  description="Off Track"
                  headingElement="h2"
                  title="Students"
                  variant="off-track"
                />
                <DataSummaryCard
                  className={styles['student-refinement__summary-card']}
                  dataAmount="63"
                  dataUnit="%"
                  description="Below C-"
                  headingElement="h2"
                  title="Grade"
                  variant="off-track"
                />
                <DataSummaryCard
                  className={styles['student-refinement__summary-card']}
                  dataAmount="41"
                  dataUnit="%"
                  description="Below 70%"
                  headingElement="h2"
                  title="Avg. Cog Skill Score"
                  variant="off-track"
                />
                <DataSummaryCard
                  className={styles['student-refinement__summary-card']}
                  dataAmount="24"
                  dataUnit="/ 96"
                  description="Overdue"
                  headingElement="h2"
                  title="Projects"
                  variant="off-track"
                />
                <DataSummaryCard
                  className={styles['student-refinement__summary-card']}
                  dataAmount="91"
                  dataUnit="%"
                  description="Students Off Track"
                  headingElement="h2"
                  title="Focus Area"
                  variant="off-track"
                />
              </div>
              <Layout
                className={styles['student-refinement__table-controls']}
                variant="50-50"
              >
                <SearchBar>
                  <SearchBar.InputField />
                  <SearchBar.Button />
                </SearchBar>
                <ButtonGroup
                  className={
                    styles['student-refinement__table-control-button-group']
                  }
                >
                  <FiltersDrawer
                    className={styles['student-refinement__filters-drawer']}
                    triggerText="Filters"
                  >
                    <div className="fpo">Toggle Switch FPO</div>
                    <FiltersCheckboxField
                      className={
                        styles['student-refinement__filters-checkbox-field']
                      }
                      legend="Student Status"
                    >
                      <Checkbox label="On Track" />
                      <Checkbox label="Off Track" />
                    </FiltersCheckboxField>
                    <FiltersCheckboxField
                      className={
                        styles['student-refinement__filters-checkbox-field']
                      }
                      legend="Section"
                    >
                      <Checkbox label="Label" />
                      <Checkbox label="Label" />
                      <Checkbox label="Label" />
                    </FiltersCheckboxField>
                    <FiltersCheckboxField
                      className={
                        styles['student-refinement__filters-checkbox-field']
                      }
                      legend="Grade"
                    >
                      <Checkbox label="90-100%" />
                      <Checkbox label="80-90%" />
                      <Checkbox label="70-80%" />
                      <Checkbox label="Below 70%" />
                    </FiltersCheckboxField>
                    <FiltersCheckboxField
                      className={
                        styles['student-refinement__filters-checkbox-field']
                      }
                      legend="Average Cognitive Skill Balance"
                    >
                      <Checkbox label="90-100%" />
                      <Checkbox label="80-90%" />
                      <Checkbox label="70-80%" />
                      <Checkbox label="Below 70%" />
                    </FiltersCheckboxField>
                  </FiltersDrawer>
                  <Button>Export</Button>
                </ButtonGroup>
              </Layout>
              {isTable && studentsTable}
              {!isTable && studentsCards}
            </div>
          </Tab>
          <Tab title="Assessments">
            <div className="fpo">Assessments</div>
          </Tab>
          <Tab title="Goals">
            <div className="fpo">Goals</div>
          </Tab>
        </Tabs>
      </Panel>
    </PageShell>
  );
};
