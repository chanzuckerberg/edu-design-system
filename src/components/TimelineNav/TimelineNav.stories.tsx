import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TimelineNav, Props } from './TimelineNav';
import Text from '../Text';
import TimelineNavPanel from '../TimelineNavPanel';

export default {
  title: 'Example/TimelineNav',
  component: TimelineNav,
  subcomponents: { TimelineNavPanel },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <TimelineNav variant="ordered">
    <TimelineNavPanel title="Overview">
      <Text as="div">
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>
    <TimelineNavPanel title="TimelineNavPanel 1" variant="number">
      <Text as="div">
        <h3>TimelineNavPanel 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="TimelineNavPanel 2" variant="error">
      <Text as="div">
        <h3>TimelineNavPanel 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="TimelineNavPanel 3" variant="warning">
      <Text as="div">
        <h3>TimelineNavPanel 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="TimelineNavPanel 4" variant="success">
      <Text as="div">
        <h3>TimelineNavPanel 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="TimelineNavPanel 5">
      <Text as="div">
        <h3>TimelineNavPanel 5</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="TimelineNavPanel 6" variant="number">
      <Text as="div">
        <h3>TimelineNavPanel 5</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>

    <TimelineNavPanel title="Final Item - complete" variant="complete">
      <Text as="div">
        <h3>Final Item - complete</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </Text>
    </TimelineNavPanel>
  </TimelineNav>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  axe: {
    // TODO: default text is too light
    disabledRules: ['color-contrast'],
  },
};
