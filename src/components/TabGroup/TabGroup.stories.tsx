import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/test';
import React from 'react';

import { TabGroup } from './TabGroup';
import { chromaticViewports } from '../../util/viewports';
import Heading from '../Heading';
import Text from '../Text';

export default {
  title: 'Components/TabGroup',
  component: TabGroup,
  parameters: {
    layout: 'centered',
    badges: ['api-2.0', 'theme-2.0.1'],
  },
  args: {
    children: (
      <>
        <TabGroup.Tab title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 4">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof TabGroup>;

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

/**
 * TabGroups have an inverted variant, for use on dark backgrounds. Depending on how the background is applied, you can use
 * text color tokens to style the individual tabs in the group.
 */
export const InverseVariant: StoryObj<Args> = {
  args: {
    variant: 'inverse',
    children: (
      <>
        <TabGroup.Tab title="Tab Title 1">
          <div className="max-w-[576px] text-utility-inverse">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 2">
          <div className="max-w-[576px] text-utility-inverse">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 3">
          <div className="max-w-[576px] text-utility-inverse">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 4">
          <div className="max-w-[576px] text-utility-inverse">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
    ),
  },
  decorators: [(Story) => <div className="p-spacing-size-half">{Story()}</div>],
  parameters: {
    ...Default.parameters,
    backgrounds: { default: 'background-utility-default-high-emphasis' },
  },
};

export const Centered: StoryObj<Args> = {
  args: {
    align: 'center',
  },
  parameters: {
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.chromebook,
      ],
    },
  },
};

/**
 * Tabs can instead take up the full width available.
 *
 * (This will cause text truncation at small sizes)
 */
export const TabWidthFull: StoryObj<Args> = {
  args: {
    ...Centered.args,
    tabWidth: 'full',
  },
};

/**
 * Individual tabs can have an EDS icon attached to them
 */
export const WithTabIcons: StoryObj<Args> = {
  args: {
    ...Centered.args,
    children: (
      <>
        <TabGroup.Tab icon="person-encircled" title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab icon="alarm-add" title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab icon="alarm" title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
    ),
  },
};

const TabIllustration = () => {
  return (
    <div className="h-spacing-size-6 w-spacing-size-6 bg-utility-warning-lowEmphasis"></div>
  );
};

/**
 * Individual tabs can also have illustrations of a few specific sizes:
 *
 * - 3rem, 3.5rem, 4rem, 4.5rem, 5rem (specified in the designs)
 */
export const WithTabIllustrations: StoryObj<Args> = {
  args: {
    ...Centered.args,
    children: (
      <>
        <TabGroup.Tab illustration={<TabIllustration />} title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab illustration={<TabIllustration />} title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab illustration={<TabIllustration />} title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
    ),
  },
};

/**
 * For Chromatic visual regression testing of the masks on both sides of the TabGroup. Currently does not work properly on local.
 */
export const ScrollMiddle: StoryObj<Args> = {
  args: {
    children: (
      <>
        <TabGroup.Tab title="Tab Title 1">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 2">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 3">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 4">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 5">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 5
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 6">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 6
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 7">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 7
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 8">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 8
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>

        <TabGroup.Tab title="Tab Title 9">
          <div className="max-w-[576px]">
            <Heading as="h3" className="mb-spacing-size-3">
              Tab 9
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </TabGroup.Tab>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'googlePixel2',
    },
    // Skip these b/c test environment cannot execute "scroll" on the parent div
    snapshot: { skip: true },
    chromatic: { viewports: [chromaticViewports.googlePixel2] },
    layout: 'padded',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tablist = await canvas.findByRole('tablist');

    tablist?.parentElement?.scroll(50, 0);
  },
};
