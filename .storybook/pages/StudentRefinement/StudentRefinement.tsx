import clsx from 'clsx';
import React from 'react';
import styles from './StudentRefinement.module.css';

import {
  Breadcrumbs,
  Button,
  ButtonGroup,
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
import { EdsThemeColorIconUtilityWarning } from '../../../src/tokens-dist/ts/colors';

import { DataSummaryCard } from '../../recipes/DataSummaryCard/DataSummaryCard';
import { PageShell } from '../../recipes/PageShell/PageShell';

export const StudentRefinement = () => (
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
            <Table>
              <Table.Header
                className={styles['student-refinement__header-row']}
              >
                <Table.Row variant="header">
                  <Table.HeaderCell>Students (32)</Table.HeaderCell>
                  <Table.HeaderCell className="text-center">
                    Grade
                  </Table.HeaderCell>
                  <Table.HeaderCell className="text-center">
                    Cog Skill Avg
                  </Table.HeaderCell>
                  <Table.HeaderCell className="text-center">
                    Projects
                  </Table.HeaderCell>
                  <Table.HeaderCell className="text-center">
                    Power Focus Areas
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Caroline Garcia
                    </Text>
                    <Tag hasOutline text="Off Track" variant="warning" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="53%" variant="table" />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      'text-center',
                      styles['student-refinement__cell--inset-left'],
                    )}
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="30%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="3 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="8 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Anthony Smith
                    </Text>
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      A
                    </Text>
                    <Score text="93%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="84%" variant="table" />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      'text-center',
                      styles['student-refinement__cell--inset-left'],
                    )}
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="2 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="4 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Sai Kumar
                    </Text>
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      B-
                    </Text>
                    <Score text="81%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="78%" variant="table" />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      'text-center',
                      styles['student-refinement__cell--inset-left'],
                    )}
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="1 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="7 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Rachel Campbell
                    </Text>
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="68%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="73%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="3 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="5 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Emily Tran
                    </Text>
                    <Tag hasOutline text="Off Track" variant="warning" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="30%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="100%" variant="table" />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      'text-center',
                      styles['student-refinement__cell--inset-left'],
                    )}
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="2 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      'text-center',
                      styles['student-refinement__cell--inset-left'],
                    )}
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score text="3 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                  >
                    <Text as="span" size="sm">
                      Wei Zhang
                    </Text>
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      C
                    </Text>
                    <Score text="73%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="75%" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="3 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    <Score text="6 / 10" variant="table" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
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
