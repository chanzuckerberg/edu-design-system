import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import React, { useState } from 'react';
import { DragDrop, type NewState } from './DragDrop';
import { Button, Card, Heading, Icon, Text } from '../..';
import styles from './DragDrop.stories.module.css';

export default {
  title: 'Components/DragDrop',
  component: DragDrop,
  parameters: {
    badges: ['1.0', BADGE.DEPRECATED],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [(Story) => <div className="m-4">{Story()}</div>],
} as Meta<Args>;

type Args = ComponentProps<typeof DragDrop>;

export const Default: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        title: 'Project #1',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 1</Card.Body>
          </Card>
        ),
      },
      'item-2': {
        title: 'Project #2',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 2</Card.Body>
          </Card>
        ),
      },
      'item-3': {
        title: 'Project #3',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 3</Card.Body>
          </Card>
        ),
      },
      'item-4': {
        title: 'Project #4',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 4</Card.Body>
          </Card>
        ),
      },
      'item-5': {
        title: 'Project #5',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 5</Card.Body>
          </Card>
        ),
      },
    },
    containers: {
      'container-1': {
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
        header: (
          <DragDrop.ContainerHeader>
            <div className="flex items-center gap-4 bg-neutral-subtle px-4 py-2">
              <Heading as="h5" size="h5">
                Available items
              </Heading>
            </div>
          </DragDrop.ContainerHeader>
        ),
      },
      'container-2': {
        itemIds: [],
        emptyContent: (
          <>
            <Text className="mb-8 max-w-xl">Drag available items here</Text>
            <div className="fpo flex h-20 flex-wrap content-center justify-center p-5">
              Image Placeholder
            </div>
          </>
        ),
        header: (
          <DragDrop.ContainerHeader>
            <div className="flex items-center gap-4 bg-neutral-subtle px-4 py-2">
              <Heading as="h5" size="h5">
                Selected Items
              </Heading>
            </div>
          </DragDrop.ContainerHeader>
        ),
      },
    },
    unstyledItems: true,
  },
};

export const HoveredHandle: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        behavior: 'hover',
        title: 'Project #1',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 1</Card.Body>
          </Card>
        ),
      },
      'item-2': {
        behavior: 'hover',
        title: 'Project #2',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 2</Card.Body>
          </Card>
        ),
      },
      'item-3': {
        behavior: 'hover',
        title: 'Project #3',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 3</Card.Body>
          </Card>
        ),
      },
      'item-4': {
        behavior: 'hover',
        title: 'Project #4',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 4</Card.Body>
          </Card>
        ),
      },
      'item-5': {
        behavior: 'hover',
        title: 'Project #5',
        children: (
          <Card className={styles['draggable-card']} elevation="raised">
            <Card.Body>Card 5</Card.Body>
          </Card>
        ),
      },
    },
    containers: {
      'container-1': {
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
        header: (
          <DragDrop.ContainerHeader>
            <div className="flex items-center gap-4 bg-neutral-subtle px-4 py-2">
              <Heading as="h5" size="h5">
                Available Items
              </Heading>
            </div>
          </DragDrop.ContainerHeader>
        ),
      },
      'container-2': {
        itemIds: [],
        emptyContent: (
          <>
            <Text className="mb-8 max-w-xl">Drag available items here</Text>
            <div className="fpo flex h-20 flex-wrap content-center justify-center p-5">
              Image Placeholder
            </div>
          </>
        ),
        header: (
          <DragDrop.ContainerHeader>
            <div className="flex items-center gap-4 bg-neutral-subtle px-4 py-2">
              <Heading as="h5" size="h5">
                Selected Projects
              </Heading>
            </div>
          </DragDrop.ContainerHeader>
        ),
      },
    },
    unstyledItems: true,
  },
};

const InteractiveDragDrop = () => {
  const emptyContent = () => (
    <Text as="p" className="!mb-8">
      Empty Content
    </Text>
  );

  const [indexState, setIndexState] = useState<number | undefined>(2);
  const [containers, setContainers] = useState<NewState['containers']>({
    'container-1': {
      className: 'bg-neutral-subtle',
      columnClassName: 'bg-neutral-subtle',
      emptyContent: emptyContent(),
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      header: (
        <DragDrop.ContainerHeader>
          <div className="mb-4 flex items-center gap-4 bg-neutral-subtle">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Available Items
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add item
              </Button>
            </div>
          </div>
        </DragDrop.ContainerHeader>
      ),
    },
    'container-2': {
      className: 'bg-neutral-subtle',
      columnClassName: 'bg-neutral-subtle',
      emptyContent: emptyContent(),
      itemIds: [],
      header: (
        <DragDrop.ContainerHeader>
          <div className="mb-4 flex items-center gap-4 bg-neutral-subtle">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Selected Items
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add Item
              </Button>
            </div>
          </div>
        </DragDrop.ContainerHeader>
      ),
    },
    'container-3': {
      className: 'bg-neutral-subtle',
      columnClassName: 'bg-neutral-subtle',
      emptyContent: emptyContent(),
      itemIds: [],
      header: (
        <DragDrop.ContainerHeader>
          <div className="mb-4 flex items-center gap-4 bg-neutral-subtle">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Selected Items
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add item
              </Button>
            </div>
          </div>
        </DragDrop.ContainerHeader>
      ),
    },
    'container-4': {
      className: 'bg-neutral-subtle',
      columnClassName: 'bg-neutral-subtle',
      emptyContent: emptyContent(),
      itemIds: [],
      header: (
        <DragDrop.ContainerHeader>
          <div className="mb-4 flex items-center gap-4 bg-neutral-subtle p-0">
            <Heading as="h2" size="title-sm" variant="neutral-strong">
              Selected Items
            </Heading>
            <div className="ml-auto">
              <Button variant="icon">
                <Icon name="add" purpose="decorative" />
                Add item
              </Button>
            </div>
          </div>
        </DragDrop.ContainerHeader>
      ),
    },
  });
  const [items, setItems] = useState<NewState['items']>({
    'item-1': {
      title: 'Project #1',
      children: (
        <Card className={styles['draggable-card']} elevation="raised">
          <Card.Body>Card 1</Card.Body>
        </Card>
      ),
    },
    'item-2': {
      title: 'Project #2',
      children: (
        <Card className={styles['draggable-card']} elevation="raised">
          <Card.Body>Card 2: {indexState}</Card.Body>
        </Card>
      ),
    },
    'item-3': {
      title: 'Project #3',
      children: (
        <Card className={styles['draggable-card']} elevation="raised">
          <Card.Body>Card 3</Card.Body>
        </Card>
      ),
    },
    'item-4': {
      title: 'Project #4',
      children: (
        <Card className={styles['draggable-card']} elevation="raised">
          <Card.Body>Card 4</Card.Body>
        </Card>
      ),
    },
    'item-5': {
      title: 'Project #5',
      children: (
        <Card className={styles['draggable-card']} elevation="raised">
          <Card.Body>Card 5</Card.Body>
        </Card>
      ),
    },
  });
  const returnUpdatedItems = (updatedItems: NewState) => {
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
    <DragDrop
      containers={containers}
      containersClassName={styles['grid-square']}
      getNewState={(updatedItems) => returnUpdatedItems(updatedItems)}
      items={items}
      multipleContainers={false}
      unstyledItems
    />
  );
};

export const Interactive: StoryObj<Args> = {
  render: () => <InteractiveDragDrop />,
};
