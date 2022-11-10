import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';

export default {
  title: 'Organisms/Interactive/Accordion',
  component: Accordion,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <>
        <Accordion.Button data-testid="accordion-button" headingAs="h2">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel data-testid="accordion-panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </>
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
  render: ({ variant, defaultOpen }) => (
    <div>
      <Accordion defaultOpen={defaultOpen} variant={variant}>
        <Accordion.Button headingAs="h2">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion>
      <Accordion defaultOpen={defaultOpen} variant={variant}>
        <Accordion.Button headingAs="h2">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion>
      <Accordion defaultOpen={defaultOpen} variant={variant}>
        <Accordion.Button headingAs="h2">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion>
      <Accordion defaultOpen={defaultOpen} variant={variant}>
        <Accordion.Button headingAs="h2">
          Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion>
    </div>
  ),
};

export const StackedCompact: StoryObj<Args> = {
  ...Stacked,
  args: {
    variant: 'compact',
  },
};

/**
 * The following stories are mostly for visual regression testing to capture the open state.
 */
export const DefaultOpen: StoryObj<Args> = {
  args: {
    defaultOpen: true,
  },
};

export const CompactOpen: StoryObj<Args> = {
  args: {
    variant: 'compact',
    defaultOpen: true,
  },
};

export const StackedOpen: StoryObj<Args> = {
  ...Stacked,
  args: {
    defaultOpen: true,
  },
};

export const StackedCompactOpen: StoryObj<Args> = {
  ...Stacked,
  args: {
    defaultOpen: true,
    variant: 'compact',
  },
};

// Visual regression testing unhelpful since story value is in interaction and as a code example.
export const UsingRenderProp: StoryObj<Args> = {
  render: () => (
    <Accordion>
      {({ open }) => (
        <>
          <Accordion.Button data-testid="accordion-button" headingAs="h2">
            Accordion Button {(open && 'open') || 'closed'}
          </Accordion.Button>
          <Accordion.Panel>Accordion Panel</Accordion.Panel>
        </>
      )}
    </Accordion>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
