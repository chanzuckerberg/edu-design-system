import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';
import { chromaticViewports } from '../../util/viewports';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Child" />
        <Breadcrumbs.Item href="#" text="Grandchild" />
      </>
    ),
  },
  parameters: {
    layout: 'centered',
    badges: ['api-1.3', 'theme-1.0'],
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <div style={{ margin: '0.5rem' }}>{Story()}</div>],
} as Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const OneCrumb: Story = {
  args: {
    children: <Breadcrumbs.Item href="#" text="Breadcrumb 1" />,
  },
};

export const TwoCrumbs: Story = {
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
      </>
    ),
  },
};

export const LongList: Story = {
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Parent" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 3" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 4" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 5" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 6" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 7" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 8" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 9" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 10" />
      </>
    ),
  },
};

export const LongText: Story = {
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item
          href="#"
          text="Breadcrumb 2 Lorem ipsum dolor sit amet, no overflow is two lines at 320px"
        />
        <Breadcrumbs.Item
          href="#"
          text="Breadcrumb 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, no overflow is 3 lines at 320px"
        />
      </>
    ),
  },
  parameters: {
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
      ],
    },
    layout: 'padded',
  },
};

export const LongTextCustomSeparator: Story = {
  args: {
    ...LongText.args,
    separator: '>',
  },
  parameters: {
    ...LongText.parameters,
    layout: 'padded',
  },
};

/**
 * Mostly for visual regression testing.
 */
export const LongTextMenu: Story = {
  args: {
    ...LongText.args,
  },
  decorators: [(Story) => <div className="pb-28">{Story()}</div>],
  parameters: {
    viewport: {
      defaultViewport: 'ipadMini',
    },
    chromatic: {
      viewports: [chromaticViewports.ipadMini],
      diffThreshold: 0.75,
    },
    axe: {
      skip: true,
    },
    snapshot: {
      skip: true,
    },
    layout: 'padded',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownMenuTrigger = await canvas.findByRole('button');
    await userEvent.click(dropdownMenuTrigger);
  },
};
