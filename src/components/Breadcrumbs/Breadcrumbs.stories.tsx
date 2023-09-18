import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';
import { chromaticViewports } from '../../util/viewports';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { 'Breadcrumbs.Item': Breadcrumbs.Item },
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Child" />
        <Breadcrumbs.Item href="#" text="Grandchild" />
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
  parameters: {
    badges: ['1.0'],
  },
  decorators: [(Story) => <div style={{ margin: '0.5rem' }}>{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Breadcrumbs>;

export const Default: StoryObj<Args> = {};

export const OneCrumb: StoryObj<Args> = {
  args: {
    children: <Breadcrumbs.Item href="#" text="Breadcrumb 1" />,
  },
};

export const TwoCrumbs: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
        <Breadcrumbs.Item href="#" text="Breadcrumb 2" />
      </>
    ),
  },
};

export const LongList: StoryObj<Args> = {
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

export const LongText: StoryObj<Args> = {
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
  },
};

export const LongTextCustomSeparator: StoryObj<Args> = {
  ...LongText,
  args: {
    ...LongText.args,
    separator: '>',
  },
};

/**
 * Mostly for visual regression testing.
 */
export const LongTextMenu: StoryObj<Args> = {
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownMenuTrigger = await canvas.findByRole('button');
    userEvent.click(dropdownMenuTrigger);
  },
};
