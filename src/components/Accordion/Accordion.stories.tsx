import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';
import { chromaticViewports } from '../../util/viewports';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import Text from '../Text';

type Args = React.ComponentProps<typeof Accordion>;

export default {
  title: 'Components/Accordion',
  component: Accordion,
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
  decorators: [(Story) => <div className="m-2">{Story()}</div>],
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

/**
 * Default `Accordion` using the `small` size.
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * This demonstrates how one can combine multiple `Accordion` rows, where any of the rows can
 * be defaulted to open (using `defaultOpen`).
 */
export const Stacked: Story = {
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

export const StackedSmall: Story = {
  args: {
    ...Stacked.args,
    size: 'sm',
  },
};

export const StackedOutline: Story = {
  args: {
    ...Stacked.args,
    hasOutline: true,
  },
};

export const StackedSmallOutline: Story = {
  args: {
    ...Stacked.args,
    size: 'sm',
    hasOutline: true,
  },
};

/**
 * This demonstrates how to specify that a section is not currently expandable using `isExpandable`.
 */
export const EmptyStackedOpen: Story = {
  args: {
    children: (
      <>
        <Accordion.Row defaultOpen isExpandable={false}>
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

export const StackedOpen: Story = {
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

export const StackedSmallOpen: Story = {
  args: {
    ...StackedOpen.args,
    size: 'sm',
  },
};

export const StackedOutlineOpen: Story = {
  args: {
    ...StackedOpen.args,
    hasOutline: true,
  },
};

export const StackedSmallOutlineOpen: Story = {
  args: {
    ...StackedOpen.args,
    size: 'sm',
    hasOutline: true,
  },
};

/**
 *
 * This shows how to use a render prop for the row, to allow controlling render based on component state.
 *
 * **NOTE**: Visual regression testing unhelpful since story value is in interaction and as a code example.
 */
export const UsingRenderProp: Story = {
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

/**
 * Although headings should provide limited text, we allow for text to span multiple lines, preserving
 * the size of the state caret.
 */
export const WithLargeHeader: Story = {
  parameters: {
    chromatic: {
      viewports: [chromaticViewports.ipadMini],
    },
  },
  args: {
    children: (
      <Accordion.Row>
        <Accordion.Button>
          Massa quam egestas massa. Massa quam egestas massa. Massa quam egestas
          massa. Massa quam egestas massa. Massa quam egestas massa.
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
          massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
          tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
          Suscipit dui, nunc sit dui tellus massa laoreet tellus.
        </Accordion.Panel>
      </Accordion.Row>
    ),
  },
};

/**
 * You can use other EDS components within the `Accordion.Button` to allow for custom, non-text headers.
 *
 * **Example**: using `Text` and `Icon` in the `Accordion.Button`.
 */
export const UsingComplexHeaders: Story = {
  parameters: {
    badges: ['1.2', 'implementationExample'],
  },
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button>
            <Text size="lg">
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
            <Text size="lg">
              <Icon
                className="m-2"
                name="check-circle"
                purpose="decorative"
                size="1rem"
              />
              Step 2
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

/**
 * You can use other EDS components within the `Accordion.Button` to allow for custom, non-text headers.
 *
 * **Example**: using `Text` and `NumberIcon` in the `Accordion.Button`.
 */
export const UsingNumberIconInHeaders: Story = {
  parameters: {
    badges: ['1.2', 'implementationExample'],
  },
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button>
            <div className="flex flex-wrap items-center gap-2">
              <NumberIcon aria-label="Step 1" number={1} />
              <Text size="lg">Step 1</Text>
            </div>
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
            <div className="items flex flex-wrap items-center gap-2">
              <NumberIcon aria-label="Step 2" number={2} />
              <Text size="lg">Step 2</Text>
            </div>
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
