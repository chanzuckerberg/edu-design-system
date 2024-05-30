import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';

import { Tabs } from './Tabs';
import { chromaticViewports } from '../../util/viewports';
import Heading from '../Heading';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0'],
  },
  args: {
    children: (
      <>
        <Tabs.Tab title="Tab Title 1">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 2">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 3">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 4">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 5">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 5
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 6">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 6
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 7">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 7
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 8">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 8
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 9">
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 9
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>
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
    // Skip these b/c test environment cannot execute "scroll" on the parent div
    snapshot: { skip: true },
    chromatic: { viewports: [chromaticViewports.googlePixel2] },
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
        {Story()}
      </div>
    ),
  ],
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

const IconTab = ({
  isActive,
  title,
  icon,
}: {
  isActive: boolean;
  title: string;
  icon: IconName;
}) => (
  <div className="px-4">
    <div className="p-3 text-center">
      <Icon name={icon} purpose="decorative" size="1rem" />
    </div>
    <Text preset="caption-lg">{`${isActive ? '●' : '◦'} ${title}`}</Text>
  </div>
);

export const CustomTabs: StoryObj<Args> = {
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  parameters: {
    docs: {
      source: {
        code: `
<Tabs>
  <Tabs.Tab title="Tab Title 1">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 1
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>

  <Tabs.Tab title="Tab Title 2">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 2
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>

  <Tabs.Tab title="Tab Title 3">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 3
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>

  <Tabs.Tab title="Tab Title 4">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 4
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>

  <Tabs.Tab title="Tab Title 5">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 5
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>

  <Tabs.Tab title="Tab Title 6">
    <Tabs.Tab.Button>
      {({ active, title }) => (
        <IconTab
          icon={active ? 'person' : 'people'}
          isActive={active}
          title={title}
        />
      )}
    </Tabs.Tab.Button>
    <div className="max-w-xl">
      <Heading className="mb-6" size="h3">
        Tab 6
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex{' '}
      </Text>
    </div>
  </Tabs.Tab>
</Tabs>
        `,
      },
    },
  },
  args: {
    children: (
      <>
        <Tabs.Tab title="Tab Title 1">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 2">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 3">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 4">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 4
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 5">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 5
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>

        <Tabs.Tab title="Tab Title 6">
          <Tabs.Tab.Button>
            {({ active, title }) => (
              <IconTab
                icon={active ? 'person' : 'people'}
                isActive={active}
                title={title}
              />
            )}
          </Tabs.Tab.Button>
          <div className="max-w-xl">
            <Heading as="h3" className="mb-6">
              Tab 6
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </Text>
          </div>
        </Tabs.Tab>
      </>
    ),
  },
};
