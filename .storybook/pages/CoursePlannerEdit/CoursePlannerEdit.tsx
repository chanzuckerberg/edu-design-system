import clsx from 'clsx';
import React, { useState } from 'react';
import type { ReactNode } from 'react';

import ProjectCard from './ProjectCard';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  DataBar,
  DragDrop,
  DragDropContainerHeader,
  Grid,
  GridItem,
  Heading,
  HorizontalStepper,
  Icon,
  Layout,
  LayoutContainer,
  LayoutSection,
  Menu,
  NumberIcon,
  PageHeader,
  Panel,
  Table,
  Text,
} from '../../../src';

import type { NewState } from '../../../src/components/DragDrop/DragDrop';

import CardWithNotification from '../../recipes/CardWithNotification';
import NumberIconList from '../../recipes/NumberIconList';

import EmptyImage from '../../static/hand-pencil.svg';
import styles from './CoursePlannerEdit.module.css';

NumberIconList;
const CognitiveSkillColumns = [
  {
    title: 'Least covered Cognitive Skills',
  },
  {
    title: 'Planned Projects',
  },
];

const CognitiveSkillRows = [
  {
    value1: 'Argumentative Claim',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: false,
      },
      {
        'aria-label': 'Project 4',
        complete: false,
      },
      {
        'aria-label': 'Project 5',
        complete: false,
      },
      {
        'aria-label': 'Project 6',
        complete: false,
      },
      {
        'aria-label': 'Project 7',
        complete: false,
      },
      {
        'aria-label': 'Project 8',
        complete: false,
      },
      {
        'aria-label': 'Project 9',
        complete: false,
      },
      {
        'aria-label': 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'Making Connections and Inferences',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'A longer heading that is super duper long',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: true,
      },
      {
        'aria-label': 'Project 4',
        complete: true,
      },
      {
        'aria-label': 'Project 5',
        complete: true,
      },
    ],
  },
];

const StandardsColumns = [
  {
    title: 'Least covered Stan',
  },
  {
    title: 'Planned Projects',
  },
];

const StandardsRows = [
  {
    value1: 'NGSS.3-5-ETS1-1',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: false,
      },
      {
        'aria-label': 'Project 4',
        complete: false,
      },
      {
        'aria-label': 'Project 5',
        complete: false,
      },
      {
        'aria-label': 'Project 6',
        complete: false,
      },
      {
        'aria-label': 'Project 7',
        complete: false,
      },
      {
        'aria-label': 'Project 8',
        complete: false,
      },
      {
        'aria-label': 'Project 9',
        complete: false,
      },
      {
        'aria-label': 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.ESS1.C',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.ESS1.E',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: true,
      },
      {
        'aria-label': 'Project 4',
        complete: true,
      },
      {
        'aria-label': 'Project 5',
        complete: true,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.PS3.C',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: false,
      },
      {
        'aria-label': 'Project 2',
        complete: false,
      },
      {
        'aria-label': 'Project 3',
        complete: false,
      },
      {
        'aria-label': 'Project 4',
        complete: false,
      },
      {
        'aria-label': 'Project 5',
        complete: false,
      },
    ],
  },
  {
    value1: 'NGSS.3-5.PS3.E',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: false,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: false,
      },
      {
        'aria-label': 'Project 4',
        complete: false,
      },
      {
        'aria-label': 'Project 5',
        complete: false,
      },
    ],
  },
];

interface Item {
  'aria-label': string;
  complete: boolean;
}

interface Row {
  value1: string;
  projects: Item[];
}

interface Column {
  title: string;
}

interface CardProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  title?: string;
  buttonContent?: ReactNode;
  tableColumns: Column[];
  tableRows: Row[];
}

/**
 * A Card containing a Table.
 */
export const TableCard = ({
  className,
  title,
  buttonContent,
  tableRows,
  tableColumns,
  ...other
}: CardProps) => {
  const componentClassName = clsx(styles['table-card'], className);

  return (
    <Card className={componentClassName} {...other}>
      <CardBody>
        <Heading
          as="h2"
          className="mb-4"
          size="title-sm"
          variant="neutral-strong"
        >
          {title}
        </Heading>
        <Table className={styles['table-card__table']} title={title}>
          <Table.Header>
            <Table.Row variant="header">
              {tableColumns.map((item, index) => {
                return (
                  <Table.HeaderCell
                    className={styles['table-card__table-header-cell']}
                    key={'table-header-cell-' + item.title}
                  >
                    {item.title}
                  </Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableRows.map((item) => {
              return (
                <Table.Row key={`table-row-${item.value1}`}>
                  <Table.HeaderCell variant="body">
                    {item.value1}
                  </Table.HeaderCell>
                  <Table.Cell>
                    <NumberIconList>
                      {item.projects.map((item, index) => {
                        return (
                          <NumberIcon
                            aria-label={item['aria-label']}
                            incomplete={!item.complete}
                            key={`number-icon-${item['aria-label']}`}
                            number={index + 1}
                            numberIconTitle={`incomplete step ${index + 1}`}
                            size="sm"
                          />
                        );
                      })}
                    </NumberIconList>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </CardBody>
      <CardFooter>
        <Button status="neutral">{buttonContent}</Button>
      </CardFooter>
    </Card>
  );
};

export const CoursePlannerEdit = () => {
  const container1EmptyContent = () => {
    return (
      <>
        <Text className="mb-8 max-w-xl">
          There are no more available projects to create your course plan
        </Text>
        <img alt="hand with pencil" src={EmptyImage} />
      </>
    );
  };

  const container2EmptyContent = () => {
    return (
      <>
        <Text className="mb-8 max-w-xl">
          Drag in available projects to build your course plan
        </Text>
        <img alt="hand with pencil" src={EmptyImage} />
      </>
    );
  };

  const projectCardMenuItems = () => {
    return (
      <>
        <Menu.Item icon="schedule">Move to other section</Menu.Item>
        <Menu.Item icon="schedule">Move up</Menu.Item>
        <Menu.Item icon="schedule">Move down</Menu.Item>
        <Menu.Item icon="schedule">Move view details</Menu.Item>
      </>
    );
  };

  const projectCardMenuItemsWithDelete = () => {
    return (
      <>
        <Menu.Item icon="schedule">Move to other section</Menu.Item>
        <Menu.Item icon="schedule">Move up</Menu.Item>
        <Menu.Item icon="schedule">Move down</Menu.Item>
        <Menu.Item className={styles['menu-item--destructive']} icon="delete">
          Delete item
        </Menu.Item>
      </>
    );
  };

  const [indexState, setIndexState] = useState<number | undefined>(2);
  const [containers, setContainers] = useState({
    'container-1': {
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      emptyContent: container1EmptyContent(),
      header: (
        <DragDropContainerHeader>
          <div className="mb-4 flex items-center gap-4">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Available projects
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add project
              </Button>
            </div>
          </div>
        </DragDropContainerHeader>
      ),
    },
    'container-2': {
      itemIds: [],
      emptyContent: container2EmptyContent(),
      header: (
        <DragDropContainerHeader>
          <div className="mb-4 flex items-center gap-4">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Planned projects
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add project
              </Button>
            </div>
          </div>
        </DragDropContainerHeader>
      ),
    },
  });
  const [items, setItems] = useState({
    'item-1': {
      title: 'Project #1',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItemsWithDelete()}
          meta="12 days"
          metaIconName="event-note"
          number={1}
          numberAriaLabel="Project 1"
          title="Longer project card title that wraps"
        />
      ),
    },
    'item-2': {
      title: 'Project #2',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItems()}
          meta="12 days"
          metaIconName="event-note"
          number={indexState}
          numberAriaLabel="Project 2"
          title="Project card title"
        />
      ),
    },
    'item-3': {
      title: 'Project #3',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItems()}
          meta="12 days"
          metaIconName="event-note"
          number={3}
          numberAriaLabel="Project 3"
          title="Project card title"
        />
      ),
    },
    'item-4': {
      title: 'Project #4',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItems()}
          meta="12 days"
          metaIconName="event-note"
          number={4}
          numberAriaLabel="Project 4"
          title="Project card title"
        />
      ),
    },
    'item-5': {
      title: 'Project #5',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItems()}
          meta="12 days"
          metaIconName="event-note"
          number={5}
          numberAriaLabel="Project 5"
          title="Project card title"
        />
      ),
    },
    'item-6': {
      title: 'Project #6',
      children: (
        <ProjectCard
          behavior="draggable"
          menuItems={projectCardMenuItems()}
          meta="12 days"
          metaIconName="event-note"
          number={6}
          numberAriaLabel="Project 6"
          title="Project card title"
        />
      ),
    },
  });
  const returnUpdatedItems = (updatedItems: any) => {
    setContainers(updatedItems.containers);
    setItems(updatedItems.items);
    updatedItems.containers['container-2'].itemIds.map(
      (item: string, index: number) => {
        if (item === 'item-2') {
          updatedItems.items['item-2'].behavior = 'hover';
          setIndexState(index + 1);
        }
      },
    );
  };
  return (
    <>
      <Panel className="!mb-6" variant="squared">
        <LayoutContainer>
          <PageHeader
            className="!mb-0"
            description={
              <HorizontalStepper
                activeIndex={1}
                steps={['Add classroom details', 'Add projects']}
              />
            }
            headingSize="title-sm"
            orientation="2up"
            right={
              // The parent class of this ButtonGroup is .page-header,
              // which uses flex-direction:column, with a media query
              // that changes flex-direction to row at the medium
              // breakpoint. This ButtonGroup needs to have a margin
              // above it only when the flex-direction is column, so
              // this utility class was written with a media query
              // that matches the behavior of .page-header
              <ButtonGroup className={styles['button--mobile']}>
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
        <Layout variant="67-33">
          <LayoutSection region="main">
            <Panel>
              <Heading
                as="h2"
                className="!mb-4"
                size="headline-sm"
                variant="neutral-strong"
              >
                Select projects for your History 6 plan
              </Heading>
              <div className="mb-6 max-w-xl">
                <Text className="mb-6">
                  Make a plan so that you can stay connected to learning
                  objectives even as changes occur throughout the year.
                </Text>
                <Text>
                  Room for more instructional copy per Content Strategy lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  est quam, consequat iaculis pretium accumsan, fringilla id
                  ligula.
                </Text>
              </div>

              <DragDrop
                containers={containers}
                getNewState={(updatedItems: NewState) =>
                  returnUpdatedItems(updatedItems)
                }
                items={items}
                multipleContainers={false}
                unstyledItems
              />
            </Panel>
          </LayoutSection>
          <LayoutSection region="sidebar">
            <CardWithNotification
              className="!mb-6"
              text="Summit recommends teaching at least five (5) projects for this course."
              variant="brand"
            >
              <Card.Body>
                <DataBar
                  label="Total instructional days"
                  max={60}
                  segments={[
                    { value: 10, text: 'Project 1' },
                    { value: 11, text: 'Project 2' },
                    { value: 22, text: 'Project 3' },
                    { value: 11, text: 'Project 4' },
                  ]}
                />
              </Card.Body>
            </CardWithNotification>
            <Grid className="!mb-6" variant="1-2-1up">
              <GridItem>
                <TableCard
                  buttonContent="View all Cognitive Skills"
                  tableColumns={CognitiveSkillColumns}
                  tableRows={CognitiveSkillRows}
                  title="Cognitive skills coverage"
                />
              </GridItem>
              <GridItem>
                <TableCard
                  buttonContent="View all Standards"
                  tableColumns={StandardsColumns}
                  tableRows={StandardsRows}
                  title="Standards coverage"
                />
              </GridItem>
            </Grid>
          </LayoutSection>
        </Layout>
      </LayoutContainer>
    </>
  );
};
