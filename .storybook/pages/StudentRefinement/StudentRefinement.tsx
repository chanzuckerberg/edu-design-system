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
} from '../../../src';
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
                dataAmount="38"
                dataUnit="%"
                description="Off Track"
                title="Students"
                variant="off-track"
              />
              <DataSummaryCard
                dataAmount="63"
                dataUnit="%"
                description="Below C-"
                title="Grade"
                variant="off-track"
              />
              <DataSummaryCard
                dataAmount="41"
                dataUnit="%"
                description="Below 70%"
                title="Avg. Cog Skill Score"
                variant="off-track"
              />
              <DataSummaryCard
                dataAmount="24"
                dataUnit="/ 96"
                description="Overdue"
                title="Projects"
                variant="off-track"
              />
              <DataSummaryCard
                dataAmount="91"
                dataUnit="%"
                description="Students Off Track"
                title="Focus Area"
                variant="off-track"
              />
            </div>
            <Layout variant="50-50">
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
            <Table caption="Student Data">
              <Table.Header>
                <Table.Row>
                  <Table.Cell as="th">Students (32)</Table.Cell>
                  <Table.Cell as="th">Grade</Table.Cell>
                  <Table.Cell as="th">Cog Skill Avg</Table.Cell>
                  <Table.Cell as="th">Projects</Table.Cell>
                  <Table.Cell as="th">Power Focus Areas</Table.Cell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Caroline Garcia
                    <Tag hasOutline text="Off Track" variant="warning" />
                  </Table.Cell>
                  <Table.Cell>
                    <Icon
                      name="circle-small"
                      purpose="informative"
                      title="off track"
                    />
                    <Score text="53%" variant="table" />
                  </Table.Cell>
                  <Table.Cell>
                    <Icon
                      name="circle-small"
                      purpose="informative"
                      title="off track"
                    />
                    <Score text="30%" variant="table" />
                  </Table.Cell>
                  <Table.Cell>
                    <Score text="3 / 3" variant="table" />
                  </Table.Cell>
                  <Table.Cell>
                    <Score text="8 / 10" variant="table" />
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
