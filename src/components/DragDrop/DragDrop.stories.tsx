import { Story, StoryObj, Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DragDrop, Props } from './DragDrop';
import { Default as Card } from '../Card/Card.stories';
import Heading from '../Heading';
import MediaBlock from '../MediaBlock';
import { Default as Table } from '../Table/Table.stories';
import TextPassage from '../TextPassage';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '1rem', // Provides spacing around storybook edges
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = ComponentProps<typeof DragDrop>;

const Template: Story<Props> = (args) => <DragDrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: {
    'item-1': {
      id: 'item-1',
      title: 'Project #1',
      children: <div className="fpo">Content here</div>,
    },
    'item-2': {
      id: 'item-2',
      title: 'Project #2',
      children: <div className="fpo">Content here</div>,
    },
    'item-3': {
      id: 'item-3',
      title: 'Project #3',
      children: <div className="fpo">Content here</div>,
    },
    'item-4': {
      id: 'item-4',
      title: 'Project #4',
      children: <div className="fpo">Content here</div>,
    },
    'item-5': {
      id: 'item-5',
      title: 'Project #5',
      children: <div className="fpo">Content here</div>,
    },
  },
  containers: {
    'container-1': {
      id: 'container-1',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
    },
    'container-2': {
      id: 'container-2',
      itemIds: [],
    },
  },
  containerOrder: ['container-1', 'container-2'],
};

export const MultipleContainers: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        id: 'item-1',
        title: 'Project #1',
        children: <div className="fpo">Content here</div>,
      },
      'item-2': {
        id: 'item-2',
        title: 'Project #2',
        children: <div className="fpo">Content here</div>,
      },
      'item-3': {
        id: 'item-3',
        title: 'Project #3',
        children: <div className="fpo">Content here</div>,
      },
      'item-4': {
        id: 'item-4',
        title: 'Project #4',
        children: <div className="fpo">Content here</div>,
      },
      'item-5': {
        id: 'item-5',
        title: 'Project #5',
        children: <div className="fpo">Content here</div>,
      },
    },
    containers: {
      'container-1': {
        id: 'container-1',
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
      'container-2': {
        id: 'container-2',
        itemIds: ['item-4'],
      },
      'container-3': {
        id: 'container-3',
        itemIds: ['item-5'],
      },
    },
    containerOrder: ['container-1', 'container-2', 'container-3'],
    multipleContainers: true,
  },
};

export const VariousSizedItems: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        id: 'item-1',
        title: 'Project #1',
        children: <div className="fpo">Content here</div>,
      },
      'item-2': {
        id: 'item-2',
        title: 'Project #2',
        children: (
          <div className="fpo">
            This container
            <br />
            has a lot of content
            <br />
            and will be taller than
            <br />
            other containers
          </div>
        ),
      },
      'item-3': {
        id: 'item-3',
        children: (
          <div
            className="fpo"
            style={{
              fontSize: '12px',
              padding: '0',
              textAlign: 'center',
            }}
          >
            Small container
          </div>
        ),
      },
      'item-4': {
        id: 'item-4',
        children: (
          <div
            className="fpo"
            style={{
              fontSize: '12px',
              padding: '0',
              textAlign: 'center',
            }}
          >
            Another small container
          </div>
        ),
      },
      'item-5': {
        id: 'item-5',
        title: 'Project #5',
        children: (
          <div className="fpo">
            Another
            <br />
            larger
            <br />
            container
          </div>
        ),
      },
    },
    containers: {
      'container-1': {
        id: 'container-1',
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      },
      'container-2': {
        id: 'container-2',
        itemIds: [],
      },
    },
    containerOrder: ['container-1', 'container-2'],
  },
};

export const Accessibility: StoryObj<Args> = {
  args: {
    items: {
      'item-0': {
        id: 'item-0',
        children: (
          <div className="fpo">Each drag item has role=&quot;button&quot;</div>
        ),
      },
      'item-1': {
        id: 'item-1',
        children: (
          <div className="fpo">
            (Open this canvas in its own tab for best results)
          </div>
        ),
      },
      'item-2': {
        id: 'item-2',
        children: <div className="fpo">Use Tab key to select an item</div>,
      },
      'item-3': {
        id: 'item-3',
        children: (
          <div className="fpo">Press Spacebar to pick up the selected item</div>
        ),
      },
      'item-4': {
        id: 'item-4',
        children: (
          <div className="fpo">
            Arrow keys move the item within a container (up/down) or to another
            container (left/right)
          </div>
        ),
      },
      'item-5': {
        id: 'item-5',
        children: (
          <div className="fpo">Press Spacebar again to drop the item</div>
        ),
      },
      'item-6': {
        id: 'item-6',
        children: (
          <div className="fpo">
            All actions (using mouse/touch or keyboard controls) are announced
            to screen readers
          </div>
        ),
      },
    },
    containers: {
      'container-1': {
        id: 'container-1',
        itemIds: [
          'item-0',
          'item-1',
          'item-2',
          'item-3',
          'item-4',
          'item-5',
          'item-6',
        ],
      },
      'container-2': {
        id: 'container-2',
        itemIds: [],
      },
    },
    containerOrder: ['container-1', 'container-2'],
  },
};

export const UnstyledItems: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        id: 'item-1',
        children: (
          <MediaBlock
            imgAlt="placeholder image"
            // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
            imgSrc="https://placekitten.com/500/500"
          >
            <Heading className="u-margin-bottom-md" size="h3">
              Drag any component
            </Heading>
            <TextPassage>
              <p>
                The Drag and Drop component can hold any component, or
                combination of components, without adding any additional
                styling. This story demonstrates dragging a Media Block, a Card,
                a Table, and a Text Passage.
              </p>
            </TextPassage>
          </MediaBlock>
        ),
      },
      'item-2': {
        id: 'item-2',
        children: <Card />,
      },
      'item-3': {
        id: 'item-3',
        children: <Table />,
      },
      'item-4': {
        id: 'item-4',
        children: (
          <TextPassage>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TextPassage>
        ),
      },
    },
    containers: {
      'container-1': {
        id: 'container-1',
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4'],
      },
      'container-2': {
        id: 'container-2',
        itemIds: [],
      },
    },
    containerOrder: ['container-1', 'container-2'],
    unstyledItems: true,
    multipleContainers: true,
  },
};
