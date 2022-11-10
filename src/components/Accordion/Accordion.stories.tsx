import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';

export default {
  title: 'Organisms/Interactive/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Row': Accordion.Row,
    'Accordion.Panel': Accordion.Panel,
    'Accordion.Button': Accordion.Button,
  },
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    headingAs: 'h2',
    children: (
      <Accordion.Row>
        <Accordion.Button data-testid="accordion-button">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel data-testid="accordion-panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion.Row>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0.5rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Accordion>;

export const Default: StoryObj<Args> = {};

export const Compact: StoryObj<Args> = {
  args: {
    variant: 'compact',
  },
};

export const Stacked: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
};

export const StackedCompact: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    variant: 'compact',
  },
};

export const StackedOutline: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    hasOutline: true,
  },
};

export const StackedCompactOutline: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    variant: 'compact',
    hasOutline: true,
  },
};

/**
 * The following stories are mostly for visual regression testing to capture the open state.
 */
export const DefaultOpen: StoryObj<Args> = {
  args: {
    children: (
      <Accordion.Row defaultOpen>
        <Accordion.Button data-testid="accordion-button">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel data-testid="accordion-panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion.Row>
    ),
  },
};

export const CompactOpen: StoryObj<Args> = {
  args: {
    ...DefaultOpen.args,
    variant: 'compact',
  },
};

export const StackedOpen: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Accordion.Row defaultOpen>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button>Massa quam egestas massa.</Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
};

export const StackedCompactOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    variant: 'compact',
  },
};

export const StackedOutlineOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    hasOutline: true,
  },
};

export const StackedCompactOutlineOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    variant: 'compact',
    hasOutline: true,
  },
};

// Visual regression testing unhelpful since story value is in interaction and as a code example.
export const UsingRenderProp: StoryObj<Args> = {
  render: () => (
    <Accordion headingAs="h2">
      <Accordion.Row>
        {({ open }) => (
          <>
            <Accordion.Button data-testid="accordion-button">
              Accordion Button {(open && 'open') || 'closed'}
            </Accordion.Button>
            <Accordion.Panel>Accordion Panel</Accordion.Panel>
          </>
        )}
      </Accordion.Row>
    </Accordion>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
