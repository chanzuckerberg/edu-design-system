import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';
import Icon from '../Icon';
import Text from '../Text';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Row': Accordion.Row,
    'Accordion.Panel': Accordion.Panel,
    'Accordion.Button': Accordion.Button,
  },
  parameters: {
    badges: ['1.2'],
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
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [(Story) => <div style={{ margin: '0.5rem' }}>{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Accordion>;

export const Default: StoryObj<Args> = {};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Stacked: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Accordion.Row defaultOpen>
          <Accordion.Button data-testid="accordion-button-1">
            Massa quam egestas massa.
          </Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button data-testid="accordion-button-2">
            Massa quam egestas massa.
          </Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button data-testid="accordion-button-3">
            Massa quam egestas massa.
          </Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button data-testid="accordion-button-4">
            Massa quam egestas massa.
          </Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-4">
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

export const StackedSmall: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    size: 'sm',
  },
};

export const StackedOutline: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    hasOutline: true,
  },
};

export const StackedSmallOutline: StoryObj<Args> = {
  args: {
    ...Stacked.args,
    size: 'sm',
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

export const SmallOpen: StoryObj<Args> = {
  args: {
    ...DefaultOpen.args,
    size: 'sm',
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

export const StackedSmallOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    size: 'sm',
  },
};

export const StackedOutlineOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    hasOutline: true,
  },
};

export const StackedSmallOutlineOpen: StoryObj<Args> = {
  args: {
    ...StackedOpen.args,
    size: 'sm',
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
    docs: {
      source: {
        code: `<Accordion headingAs="h2">
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
</Accordion>`,
      },
    },
  },
};

export const UsingComplexHeaders: StoryObj<Args> = {
  parameters: {
    badges: ['1.2', 'implementationExample'],
  },
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button>
            <Text size="lg" variant="neutral-subtle">
              <Icon
                className="m-2"
                name="check-circle"
                purpose="decorative"
                size="1rem"
              />
              Step 1
            </Text>
          </Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button>
            <Text size="lg" variant="neutral-subtle">
              <Icon
                className="m-2"
                name="check-circle"
                purpose="decorative"
                size="1rem"
              />
              Step 1
            </Text>
          </Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button>
            <Text size="lg" variant="neutral-subtle">
              <Icon
                className="m-2"
                name="check-circle"
                purpose="decorative"
                size="1rem"
              />
              Step 1
            </Text>
          </Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button>
            <Text size="lg" variant="neutral-strong">
              <Icon
                className="m-2"
                name="circle"
                purpose="decorative"
                size="1rem"
              />
              Step 1
            </Text>
          </Accordion.Button>
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
