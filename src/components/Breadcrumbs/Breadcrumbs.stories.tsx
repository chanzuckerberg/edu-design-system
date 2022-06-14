import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Molecules/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { 'Breadcrumbs.Item': Breadcrumbs.Item },
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <>
        <Breadcrumbs.Item href="#" text="Home" />
        <Breadcrumbs.Item href="#" text="Child" />
        <Breadcrumbs.Item href="#" text="Grandchild" />
      </>
    ),
  },
};

type Args = React.ComponentProps<typeof Breadcrumbs>;

export const Default: StoryObj<Args> = {};

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
          text="Breadcrumb 2 Lorem ipsum dolor sit amet, consectetur two lines at 320px"
        />
        <Breadcrumbs.Item
          href="#"
          text="Breadcrumb 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 3 lines at 320px"
        />
      </>
    ),
  },
};

export const OneItem: StoryObj<Args> = {
  args: {
    children: <Breadcrumbs.Item href="#" text="Breadcrumb 1" />,
  },
};
