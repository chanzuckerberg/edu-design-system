import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TimelineNav } from './TimelineNav';
import {
  EdsThemeColorIconBrandPrimary,
  EdsThemeColorIconUtilitySuccess,
} from '../../tokens-dist/ts/colors';
import { chromaticViewports } from '../../util/viewports';
import Heading from '../Heading';
import Icon from '../Icon';
import Text from '../Text';

export default {
  title: 'Components/TimelineNav',
  component: TimelineNav,
  subcomponents: { 'TimlineNav.Panel': TimelineNav.Panel },
  parameters: {
    badges: ['1.0'],
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  args: {
    variant: 'ordered',
    children: (
      <>
        <TimelineNav.Panel className="max-w-xl" title="Overview">
          <Heading className="mb-6" size="h3">
            Overview
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>
        <TimelineNav.Panel
          className="max-w-xl"
          title="TimelineNavPanel 1"
          titleAfter={
            <Icon
              color={EdsThemeColorIconUtilitySuccess}
              name="circle-small"
              purpose="informative"
              size="1.5em"
              title="29 students have completed"
            />
          }
          variant="number"
        >
          <Heading className="mb-6" size="h3">
            TimelineNavPanel 1
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel
          className="max-w-xl"
          title="TimelineNavPanel 2"
          variant="error"
        >
          <Heading className="mb-6" size="h3">
            TimelineNavPanel 2
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel
          className="max-w-xl"
          title="
              Panel with a long name that breaks into multiple lines on smaller
              viewports"
          titleAfter={
            <Icon
              color={EdsThemeColorIconBrandPrimary}
              name="circle-small"
              purpose="informative"
              size="1.5em"
              title="2 students need feedback"
            />
          }
          variant="warning"
        >
          <Heading className="mb-6" size="h3">
            Panel with a long name that breaks into multiple lines on smaller
            viewports
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel
          className="max-w-xl"
          title="TimelineNavPanel 4"
          variant="success"
        >
          <Heading className="mb-6" size="h3">
            TimelineNavPanel 4
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel className="max-w-xl" title="TimelineNavPanel 5">
          <Heading className="mb-6" size="h3">
            TimelineNavPanel 5
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel
          className="max-w-xl"
          title="TimelineNavPanel 6"
          variant="number"
        >
          <Heading className="mb-6" size="h3">
            TimelineNavPanel 6
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>

        <TimelineNav.Panel
          className="max-w-xl"
          title="Final Item - complete"
          variant="complete"
        >
          <Heading className="mb-6" size="h3">
            Final Item - complete
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{' '}
          </Text>
        </TimelineNav.Panel>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof TimelineNav.Panel>;

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
