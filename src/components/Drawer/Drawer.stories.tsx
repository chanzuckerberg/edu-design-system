import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Drawer } from './Drawer';
import { DrawerExample } from './DrawerExample';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Heading } from '../Heading/Heading';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    badges: ['1.0', BADGE.BETA],
  },
  args: {
    'aria-describedby': 'drawer-description-1',
    'aria-labelledby': 'drawer-heading-1',
    dismissible: true,
    isActive: true,
    children: (
      <>
        <Drawer.Header>
          <Heading id="drawer-heading-1" size="h2">
            Drawer title
          </Heading>
        </Drawer.Header>
        <Drawer.Body>
          <div className="fpo">Drawer body</div>
        </Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup>
            <Button variant="primary">Button 1</Button>
            <Button>Button 2</Button>
          </ButtonGroup>
        </Drawer.Footer>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    onClose: {
      action: 'on close',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Drawer>;

export const Default: StoryObj<Args> = {
  parameters: {
    axe: {
      /**
       * Axe testing throws error due to Drawer component not being controlled,
       * but this story is mostly for testing as the interactive story would only
       * capture the toggle button.
       */
      disabledRules: ['aria-allowed-role'],
    },
  },
};

export const DefaultInteractive: StoryObj = {
  render: () => <DrawerExample />,
  parameters: {
    /**
     * No point snapping the button as this story is an interaction example.
     */
    snapshot: { skip: true },
    chromatic: { disableSnapshot: true },
  },
};
