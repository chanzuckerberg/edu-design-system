import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TimelineNav } from './TimelineNav';
import {
  EdsThemeColorIconBrandPrimary,
  EdsThemeColorIconUtilitySuccess,
} from '../../tokens-dist/ts/colors';
import { chromaticViewports } from '../../util/viewports';
import Icon from '../Icon';
import Text from '../Text';
import TimelineNavPanel from '../TimelineNavPanel';

export default {
  title: 'Components/TimelineNav',
  component: TimelineNav,
  subcomponents: { TimelineNavPanel },
  parameters: {
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  args: {
    variant: 'ordered',
    children: (
      <>
        <TimelineNavPanel title="Overview">
          <Text as="div">
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>
        <TimelineNavPanel
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
          <Text as="div">
            <h3>TimelineNavPanel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel title="TimelineNavPanel 2" variant="error">
          <Text as="div">
            <h3>TimelineNavPanel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel
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
          <Text as="div">
            <h3>
              Panel with a long name that breaks into multiple lines on smaller
              viewports
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel title="TimelineNavPanel 4" variant="success">
          <Text as="div">
            <h3>TimelineNavPanel 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel title="TimelineNavPanel 5">
          <Text as="div">
            <h3>TimelineNavPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel title="TimelineNavPanel 6" variant="number">
          <Text as="div">
            <h3>TimelineNavPanel 6</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>

        <TimelineNavPanel title="Final Item - complete" variant="complete">
          <Text as="div">
            <h3>Final Item - complete</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </TimelineNavPanel>
      </>
    ),
  },
} as Meta;

type Args = React.ComponentProps<typeof TimelineNavPanel>;

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
