import type {StoryObj, Meta} from '@storybook/react';
import {within} from '@storybook/testing-library';
import React from 'react';

import {Breadcrumbs} from './Breadcrumbs';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: {'Breadcrumbs.Item': Breadcrumbs.Item},
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Child" />
        <Breadcrumbs.Item href="#" text="Grandchild" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.5rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
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
    chromatic: {viewports: [414, 768, 1366]},
  },
};

/**
 * Mostly for visual regression testing.
 */
export const LongTextMenu: StoryObj<Args> = {
  args: {
    ...LongText.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    chromatic: {viewports: [834]},
    axe: {
      skip: true,
    },
    snapshot: {
      skip: true,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const dropdownMenuTrigger = await canvas.findByRole('button');
    dropdownMenuTrigger.click();
  },
};
