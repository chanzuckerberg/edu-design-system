import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Tabs, Props } from './Tabs';
import Tab from '../Tab';
import TextPassage from '../TextPassage';

export default {
  title: 'Organisms/Interactive/Tabs',
  component: Tabs,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Tabs {...args}>
    <Tab title="Tab 1">
      <TextPassage>
        <h3>Tab 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </Tab>

    <Tab title="Tab 2">
      <TextPassage>
        <h3>Tab 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </Tab>

    <Tab title="Tab 3">
      <TextPassage>
        <h3>Tab 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{' '}
        </p>
      </TextPassage>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};

export const Inverted = () => (
  <div style={{ background: 'black' }}>
    <Tabs inverted={true}>
      <Tab title="Tab 1">
        <TextPassage>
          <h3>Tab 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </Tab>

      <Tab title="Tab 2">
        <TextPassage>
          <h3>Tab 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </Tab>

      <Tab title="Tab 3">
        <TextPassage>
          <h3>Tab 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </p>
        </TextPassage>
      </Tab>
    </Tabs>
  </div>
);
