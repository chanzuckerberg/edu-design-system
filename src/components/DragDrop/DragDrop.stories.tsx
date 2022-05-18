import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, StoryObj, Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DragDrop, Props } from './DragDrop';
import { EdsThemeColorIconNeutralDefault } from '../../tokens-dist/ts/colors';
import Card from '../Card';
import Icon from '../Icon';

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
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = ComponentProps<typeof DragDrop>;

const Template: Story<Props> = (args) => <DragDrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: {
    'item-1': {
      title: 'Project #1',
      children: <div className="fpo">Content here</div>,
    },
    'item-2': {
      title: 'Project #2',
      children: <div className="fpo">Content here</div>,
    },
    'item-3': {
      title: 'Project #3',
      children: <div className="fpo">Content here</div>,
    },
    'item-4': {
      title: 'Project #4',
      children: <div className="fpo">Content here</div>,
    },
    'item-5': {
      title: 'Project #5',
      children: <div className="fpo">Content here</div>,
    },
  },
  containers: {
    'container-1': {
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
    },
    'container-2': {
      itemIds: [],
    },
  },
};

export const MultipleContainers: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        title: 'Project #1',
        children: <div className="fpo">Content here</div>,
      },
      'item-2': {
        title: 'Project #2',
        children: <div className="fpo">Content here</div>,
      },
      'item-3': {
        title: 'Project #3',
        children: <div className="fpo">Content here</div>,
      },
      'item-4': {
        title: 'Project #4',
        children: <div className="fpo">Content here</div>,
      },
      'item-5': {
        title: 'Project #5',
        children: <div className="fpo">Content here</div>,
      },
    },
    containers: {
      'container-1': {
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
      'container-2': {
        itemIds: ['item-4'],
      },
      'container-3': {
        itemIds: ['item-5'],
      },
    },
    multipleContainers: true,
  },
};

export const VariousSizedItems: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        title: 'Project #1',
        children: <div className="fpo">Content here</div>,
      },
      'item-2': {
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
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      },
      'container-2': {
        itemIds: [],
      },
    },
  },
};

export const Accessibility: StoryObj<Args> = {
  args: {
    items: {
      'item-0': {
        children: (
          <div className="fpo">Each drag item has role=&quot;button&quot;</div>
        ),
      },
      'item-1': {
        children: (
          <div className="fpo">
            (Open this canvas in its own tab for best results)
          </div>
        ),
      },
      'item-2': {
        children: <div className="fpo">Use Tab key to select an item</div>,
      },
      'item-3': {
        children: (
          <div className="fpo">Press Spacebar to pick up the selected item</div>
        ),
      },
      'item-4': {
        children: (
          <div className="fpo">
            Arrow keys move the item within a container (up/down) or to another
            container (left/right)
          </div>
        ),
      },
      'item-5': {
        children: (
          <div className="fpo">Press Spacebar again to drop the item</div>
        ),
      },
      'item-6': {
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
        itemIds: [],
      },
    },
  },
};

export const UnstyledItems: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        children: (
          <Card>
            <Card.Body>This is a Card component.</Card.Body>
          </Card>
        ),
      },
      'item-2': {
        children: (
          <Card>
            <Card.Body>Another Card component.</Card.Body>
          </Card>
        ),
      },
      'item-3': {
        children: (
          <Card>
            <Card.Body>All styles are being set by the Card.</Card.Body>
          </Card>
        ),
      },
    },
    containers: {
      'container-1': {
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
      'container-2': {
        itemIds: [],
      },
    },
    unstyledItems: true,
    multipleContainers: true,
  },
};

export const DragByHandle: StoryObj<Args> = {
  args: {
    items: {
      'item-1': {
        children: <div className="fpo">Content here</div>,
        handle: (
          <Icon
            color={EdsThemeColorIconNeutralDefault}
            name="drag-indicator"
            purpose="decorative"
            size="1.25rem"
          />
        ),
      },
      'item-2': {
        children: <div className="fpo">Content here</div>,
        handle: (
          <Icon
            color={EdsThemeColorIconNeutralDefault}
            name="drag-indicator"
            purpose="decorative"
            size="1.25rem"
          />
        ),
      },
      'item-3': {
        children: <div className="fpo">Content here</div>,
        handle: (
          <Icon
            color={EdsThemeColorIconNeutralDefault}
            name="drag-indicator"
            purpose="decorative"
            size="1.25rem"
          />
        ),
      },
      'item-4': {
        children: <div className="fpo">Content here</div>,
        handle: (
          <Icon
            color={EdsThemeColorIconNeutralDefault}
            name="drag-indicator"
            purpose="decorative"
            size="1.25rem"
          />
        ),
      },
      'item-5': {
        title: 'Project #5',
        children: <div className="fpo">Content here</div>,
        handle: (
          <Icon
            color={EdsThemeColorIconNeutralDefault}
            name="drag-indicator"
            purpose="decorative"
            size="1.25rem"
          />
        ),
      },
    },
    containers: {
      'container-1': {
        itemIds: ['item-1', 'item-2', 'item-3'],
      },
      'container-2': {
        itemIds: ['item-4', 'item-5'],
      },
    },
    dragByHandle: true,
  },
};
