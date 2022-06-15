import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ListDetail } from './ListDetail';
import ListDetailPanel from '../ListDetailPanel';
import Text from '../Text';

export default {
  title: 'Example/ListDetail',
  component: ListDetail,
  subcomponents: { ListDetailPanel },
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    variant: 'ordered',
    children: (
      <>
        <ListDetailPanel title="Overview">
          <Text as="div">
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>
        <ListDetailPanel title="ListDetailPanel 1" variant="number">
          <Text as="div">
            <h3>ListDetailPanel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="ListDetailPanel 2" variant="error">
          <Text as="div">
            <h3>ListDetailPanel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="ListDetailPanel 3" variant="warning">
          <Text as="div">
            <h3>ListDetailPanel 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="ListDetailPanel 4" variant="success">
          <Text as="div">
            <h3>ListDetailPanel 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="ListDetailPanel 5">
          <Text as="div">
            <h3>ListDetailPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="ListDetailPanel 6" variant="number">
          <Text as="div">
            <h3>ListDetailPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>

        <ListDetailPanel title="Final Item - complete" variant="complete">
          <Text as="div">
            <h3>Final Item - complete</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </Text>
        </ListDetailPanel>
      </>
    ),
  },
} as Meta;

type Args = React.ComponentProps<typeof ListDetail>;

export const Default: StoryObj<Args> = {
  parameters: {
    axe: {
      // TODO: default text is too light
      disabledRules: ['color-contrast'],
    },
  },
};
