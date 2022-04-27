import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ListDetail, Props } from './ListDetail';
import ListDetailPanel from '../ListDetailPanel';
import TextPassage from '../TextPassage';

export default {
  title: 'Example/ListDetail',
  component: ListDetail,
  subcomponents: { ListDetailPanel },
} as Meta;

const Template: Story<Props> = (args) => (
  <ListDetail {...args}>
    <ListDetail.Panel title="ListDetailPanel 1" variant="number">
      <TextPassage>
        <h3>ListDetailPanel 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetail.Panel>

    <ListDetail.Panel title="ListDetailPanel 2" variant="error">
      <TextPassage>
        <h3>ListDetailPanel 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetail.Panel>

    <ListDetail.Panel title="ListDetailPanel 3" variant="warning">
      <TextPassage>
        <h3>ListDetailPanel 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetail.Panel>

    <ListDetail.Panel title="ListDetailPanel 4" variant="success">
      <TextPassage>
        <h3>ListDetailPanel 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetail.Panel>

    <ListDetail.Panel title="ListDetailPanel 5">
      <TextPassage>
        <h3>ListDetailPanel 5</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </ListDetail.Panel>
  </ListDetail>
);

export const Default = Template.bind({});
Default.args = {};

export const Ordered = Template.bind({});
Ordered.args = {
  variant: 'ordered',
};
