import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { IconProvider } from './IconProvider';
import type { SemanticIconMap } from './IconProvider';
import Accordion from '../Accordion';
import InlineNotification from '../InlineNotification';
import InputChip from '../InputChip';
import Menu from '../Menu';
import Text from '../Text';

const meta: Meta<typeof IconProvider> = {
  title: 'Components/IconProvider',
  component: IconProvider,
  parameters: {
    docs: {
      subtitle:
        'Set the icons EDS draws for the roles it fills on its own behalf, across a whole app at once.',
    },
  },
  tags: ['autodocs', 'version:1.0.0'],
};

export default meta;

type Story = StoryObj<typeof IconProvider>;

/**
 * The components below each draw an icon they picked themselves: the chevron that marks
 * something as expandable, the close button on a chip, and the icon that carries a
 * notification's status. Every one of them comes from this provider.
 */
const sampleTree = (
  <div className="gap-spacing-size-4 flex flex-col">
    <Menu>
      <Menu.Button>Actions</Menu.Button>
    </Menu>
    <Accordion headingAs="h3">
      <Accordion.Row>
        <Accordion.Button title="An expandable row" />
        <Accordion.Panel>
          <Text preset="body-md">
            The indicator rotates when the row opens, so an icon set here should
            read well upside down.
          </Text>
        </Accordion.Panel>
      </Accordion.Row>
    </Accordion>
    <InputChip label="A chip" />
    <InlineNotification status="critical" title="Something went wrong" />
  </div>
);

/**
 * With no provider in the tree, every role renders the icon EDS ships for it. An app that
 * is happy with those does not need this component at all.
 */
export const Default: Story = {
  args: {
    children: sampleTree,
  },
};

/**
 * Hoisted out of render on purpose. A map defined inline is a new object every render,
 * which re-renders every component reading from the provider.
 */
const alternativeIcons: Partial<SemanticIconMap> = {
  close: 'remove',
  critical: 'critical',
  expand: 'unfold-more',
};

/**
 * Naming a role replaces its icon everywhere below the provider, so the expand chevron
 * changes on the menu button and the accordion row together. Roles left out of the map
 * keep the icon they had.
 */
export const WithOverriddenIcons: Story = {
  args: {
    children: sampleTree,
    icons: alternativeIcons,
  },
};

/**
 * A role takes a node as readily as an icon name, on the same terms as any other content
 * slot in the system. Content passed this way carries its own accessible treatment.
 */
export const WithCustomContent: Story = {
  args: {
    children: sampleTree,
    icons: {
      expand: <span aria-hidden>more</span>,
    },
  },
};
