import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ListDetail, Props } from './ListDetail';
import ListDetailPanel from '../ListDetailPanel';
import { TextPassage } from '../TextPassage/TextPassage';

export default {
  title: 'Example/ListDetail',
  component: ListDetail,
} as Meta;

const Template: Story<Props> = (args) => (
  <ListDetail {...args}>
    <ListDetailPanel title="ListDetailPanel 1" variant="number">
      <TextPassage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

    <ListDetailPanel
      title="Expectations of Samurai in Feudal Japan"
      variant="error"
    >
      <TextPassage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

    <ListDetailPanel title="ListDetailPanel 3" variant="warning">
      <TextPassage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

    <ListDetailPanel title="ListDetailPanel 4" variant="success">
      <TextPassage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

    <ListDetailPanel title="ListDetailPanel 5">
      <TextPassage>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>
  </ListDetail>
);

export const Default = Template.bind({});
Default.args = {};

export const Ordered = Template.bind({});
Ordered.args = {
  variant: 'ordered',
};
