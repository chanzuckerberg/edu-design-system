import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { DragDrop, Props } from './DragDrop';

import Toolbar from '../../upcoming-components/Toolbar';
import DragDropContainerHeader from '../DragDropContainerHeader';
import Heading from '../Heading';
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
      children: (
        <div className="fpo" style={{ width: '100%' }}>
          Content here
        </div>
      ),
      handle: (
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            top: '33%',
            left: '0.75rem',
          }}
        >
          <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
        </div>
      ),
    },
    'item-2': {
      title: 'Project #2',
      children: (
        <div className="fpo" style={{ width: '100%' }}>
          Content here
        </div>
      ),
      handle: (
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            top: '33%',
            left: '0.75rem',
          }}
        >
          <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
        </div>
      ),
    },
    'item-3': {
      title: 'Project #3',
      children: (
        <div className="fpo" style={{ width: '100%' }}>
          Content here
        </div>
      ),
      handle: (
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            top: '33%',
            left: '0.75rem',
          }}
        >
          <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
        </div>
      ),
    },
    'item-4': {
      title: 'Project #4',
      children: (
        <div className="fpo" style={{ width: '100%' }}>
          Content here
        </div>
      ),
      handle: (
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            top: '33%',
            left: '0.75rem',
          }}
        >
          <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
        </div>
      ),
    },
    'item-5': {
      title: 'Project #5',
      children: (
        <div className="fpo" style={{ width: '100%' }}>
          Content here
        </div>
      ),
      handle: (
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            top: '33%',
            left: '0.75rem',
          }}
        >
          <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
        </div>
      ),
    },
  },
  containers: {
    'container-1': {
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      header: (
        <DragDropContainerHeader>
          <Toolbar>
            <Heading as="h5" size="h5">
              Available Projects
            </Heading>
          </Toolbar>
        </DragDropContainerHeader>
      ),
    },
    'container-2': {
      itemIds: [],
      header: (
        <DragDropContainerHeader>
          <Toolbar>
            <Heading as="h5" size="h5">
              Selected Projects
            </Heading>
          </Toolbar>
        </DragDropContainerHeader>
      ),
    },
  },
  unstyledItems: true,
  dragByHandle: true,
};
