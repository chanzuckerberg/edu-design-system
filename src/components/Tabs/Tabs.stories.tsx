import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';
import Tab from '../Tab';
import Text from '../Text';

export default {
  title: 'Organisms/Interactive/Tabs',
  component: Tabs,
  subcomponents: { Tabs },
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <>
        <Tab title="Tab 1">
          <Text as="div">
            <h3>Tab 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab 2">
          <Text as="div">
            <h3>Tab 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab 3">
          <Text as="div">
            <h3>Tab 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tabs>;

export const Default: StoryObj<Args> = {};

export const Inverted: StoryObj<Args> = {
  args: {
    inverted: true,
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'black' }}>
        <Story />
      </div>
    ),
  ],
};
