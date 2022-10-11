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
      <PageHeader title="Page title" />
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
                title="Students"
                variant="off-track"
              />
              <DataSummaryCard
                className={styles['student-refinement__summary-card']}
                dataAmount="63"
                dataUnit="%"
                description="Below C-"
                title="Grade"
                variant="off-track"
              />
              <DataSummaryCard
                className={styles['student-refinement__summary-card']}
                dataAmount="41"
                dataUnit="%"
                description="Below 70%"
                title="Avg. Cog Skill Score"
                variant="off-track"
              />
              <DataSummaryCard
                className={styles['student-refinement__summary-card']}
                dataAmount="24"
                dataUnit="/ 96"
                description="Overdue"
                title="Projects"
                variant="off-track"
              />
              <DataSummaryCard
                className={styles['student-refinement__summary-card']}
                dataAmount="91"
                dataUnit="%"
                description="Students Off Track"
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
            <Table behavior="stacked" caption="Student Data">
              <Table.Header>
                <Table.Row
                  className={clsx(
                    styles['student-refinement__table-row'],
                    styles['student-refinement__header-row'],
                  )}
                >
                  <Table.Cell
                    as="th"
                    className={clsx(
                      styles['student-refinement__header-cell'],
                      styles['student-refinement__header-name-cell'],
                    )}
                  >
                    Students (32)
                  </Table.Cell>
                  <Table.Cell
                    as="th"
                    className={clsx(
                      styles['student-refinement__header-cell'],
                      styles['student-refinement__header-grade-cell'],
                    )}
                  >
                    Grade
                  </Table.Cell>
                  <Table.Cell
                    as="th"
                    className={clsx(
                      styles['student-refinement__header-cell'],
                      styles['student-refinement__header-avg-cell'],
                    )}
                  >
                    Cog Skill Avg
                  </Table.Cell>
                  <Table.Cell
                    as="th"
                    className={clsx(
                      styles['student-refinement__header-cell'],
                      styles['student-refinement__header-project-cell'],
                    )}
                  >
                    Projects
                  </Table.Cell>
                  <Table.Cell
                    as="th"
                    className={clsx(
                      styles['student-refinement__header-cell'],
                      styles['student-refinement__header-area-cell'],
                    )}
                  >
                    Power Focus Areas
                  </Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Caroline Garcia
                    </Text>
                    <Tag hasOutline text="Off Track" variant="warning" />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="53%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="30%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="3 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="8 / 10"
                      variant="table"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Anthony Smith
                    </Text>
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      A
                    </Text>
                    <Score
                      className={styles['student-refinement__score']}
                      text="93%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="84%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="2 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="4 / 10"
                      variant="table"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Sai Kumar
                    </Text>
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      B-
                    </Text>
                    <Score
                      className={styles['student-refinement__score']}
                      text="81%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="78%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="1 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="7 / 10"
                      variant="table"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Rachel Campbell
                    </Text>
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="68%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="73%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="3 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="5 / 10"
                      variant="table"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Emily Tran
                    </Text>
                    <Tag hasOutline text="Off Track" variant="warning" />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="30%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="100%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="2 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Icon
                      className={styles['student-refinement__grade']}
                      color={EdsThemeColorIconUtilityWarning}
                      name="circle-small"
                      purpose="informative"
                      size="1.25rem"
                      title="off track"
                    />
                    <Score
                      className={styles['student-refinement__score']}
                      text="3 / 10"
                      variant="table"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className={styles['student-refinement__table-row']}>
                  <Table.Cell
                    className={styles['student-refinement__name-cell']}
                    data-heading="Student"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__name-cell-text']}
                    >
                      Wei Zhang
                    </Text>
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Grade"
                  >
                    <Text
                      as="span"
                      className={styles['student-refinement__grade']}
                    >
                      C
                    </Text>
                    <Score
                      className={styles['student-refinement__score']}
                      text="73%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Cog Skill Avg"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="75%"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={styles['student-refinement__body-cell']}
                    data-heading="Project"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="3 / 3"
                      variant="table"
                    />
                  </Table.Cell>
                  <Table.Cell
                    className={clsx(
                      styles['student-refinement__body-cell'],
                      styles['student-refinement__body-area-cell'],
                    )}
                    data-heading="Power Focus Area"
                  >
                    <Score
                      className={styles['student-refinement__score']}
                      text="6 / 10"
                      variant="table"
                    />
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
