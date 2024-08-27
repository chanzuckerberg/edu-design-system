import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataTable } from './DataTable';
import { chromaticViewports } from '../../util/viewports';
import Button from '../Button';
import Menu from '../Menu';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    badges: [BADGE.BETA, 'intro-1.0', 'current-1.0'],
    chromatic: {
      viewports: [
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
        chromaticViewports.googlePixel2,
      ],
    },
  },
  argTypes: {
    actions: {
      control: false,
    },
  },
  args: {
    children: (
      <table>
        <tbody className="border-2 border-utility-default-lowEmphasis-hover">
          <tr>
            <td>TODO: Table rows/cells Here</td>
          </tr>
        </tbody>
      </table>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof DataTable>;

export const Default: StoryObj<Args> = {
  args: {},
};

export const WithBasicCaption: StoryObj<Args> = {
  args: {
    caption: 'Fruits of the world',
  },
};

export const WithFullCaption: StoryObj<Args> = {
  args: {
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
  },
};

export const WithSearch: StoryObj<Args> = {
  args: {
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
  },
};

export const WithOnlyActions: StoryObj<Args> = {
  args: {
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const WithSearchAndActions: StoryObj<Args> = {
  args: {
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const WithSearchAndCustomActions: StoryObj<Args> = {
  args: {
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: (
      <>
        <Button
          aria-label="add item"
          icon="add"
          iconLayout="icon-only"
        ></Button>
        <Button icon="sparkles" iconLayout="left" rank="secondary">
          Tailor an Activity
        </Button>
        <Menu>
          <Menu.PlainButton as={React.Fragment}>
            <Button
              aria-label="show more actions"
              icon="dots-horizontal"
              iconLayout="icon-only"
              rank="secondary"
            />
          </Menu.PlainButton>
          <Menu.Items className="w-40">
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
          </Menu.Items>
        </Menu>
      </>
    ),
  },
};

export const WithLongCaption: StoryObj<Args> = {
  args: {
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

// TODO: pick a table library based on the integration examples below

export const TableA: StoryObj<Args> = {
  args: {
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const TableB: StoryObj<Args> = {
  args: {
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const TableC: StoryObj<Args> = {
  args: {
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const TableD: StoryObj<Args> = {
  args: {
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};
