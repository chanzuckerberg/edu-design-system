import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ListDetail, Props } from './ListDetail';
<<<<<<< HEAD
import { ListDetailPanel } from '../ListDetailPanel/ListDetailPanel';
=======
import ListDetailPanel from '../ListDetailPanel';
>>>>>>> next
import { TextPassage } from '../TextPassage/TextPassage';

export default {
  title: 'Example/ListDetail',
  component: ListDetail,
} as Meta;

const Template: Story<Props> = (args) => (
  <ListDetail {...args}>
<<<<<<< HEAD
    <ListDetailPanel title="ListDetailPanel 1">
=======
    <ListDetailPanel title="ListDetailPanel 1" variant="number">
>>>>>>> next
      <TextPassage>
        <h3>ListDetailPanel 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

<<<<<<< HEAD
    <ListDetailPanel title="ListDetailPanel 2">
=======
    <ListDetailPanel title="ListDetailPanel 2" variant="error">
>>>>>>> next
      <TextPassage>
        <h3>ListDetailPanel 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

<<<<<<< HEAD
    <ListDetailPanel title="ListDetailPanel 3">
=======
    <ListDetailPanel title="ListDetailPanel 3" variant="success">
      <TextPassage>
        <h3>ListDetailPanel 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetailPanel>

    <ListDetailPanel title="ListDetailPanel 4">
>>>>>>> next
      <TextPassage>
        <h3>ListDetailPanel 3</h3>
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
<<<<<<< HEAD
=======

export const Ordered = Template.bind({});
Ordered.args = {
  variant: 'ordered',
};
>>>>>>> next
