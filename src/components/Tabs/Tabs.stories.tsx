import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';

import { Tabs } from './Tabs';
import { chromaticViewports } from '../../util/viewports';
import Tab from '../Tab';
import Text from '../Text';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tabs },
  args: {
    children: (
      <>
        <Tab title="Tab Title 1">
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

        <Tab title="Tab Title 2">
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

        <Tab title="Tab Title 3">
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

        <Tab title="Tab Title 4">
          <Text as="div">
            <h3>Tab 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab Title 5">
          <Text as="div">
            <h3>Tab 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab Title 6">
          <Text as="div">
            <h3>Tab 6</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab Title 7">
          <Text as="div">
            <h3>Tab 7</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab Title 8">
          <Text as="div">
            <h3>Tab 8</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </Tab>

        <Tab title="Tab Title 9">
          <Text as="div">
            <h3>Tab 9</h3>
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

export const Default: StoryObj<Args> = {
  parameters: {
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.chromebook,
      ],
    },
  },
};

// For visual regression testing of both masks
export const ScrollMiddle: StoryObj<Args> = {
  parameters: {
    viewport: {
      defaultViewport: 'googlePixel2',
    },
    chromatic: { viewports: [chromaticViewports.googlePixel2] },
    snapshot: { skip: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tablist = await canvas.findByRole('tablist');
    // eslint-disable-next-line testing-library/no-node-access
    tablist?.parentElement?.scroll(50, 0);
  },
  decorators: [
    (Story) => (
      <div>
        For Chromatic visual regression testing of the masks on both sides of
        the Tabs. Currently does not work properly on local.
        <Story />
      </div>
    ),
  ],
};
