import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion-v2';
import { chromaticViewports } from '../../util/viewports';
import Icon from '../Icon';
import { NumberIconV2 as NumberIcon } from '../NumberIcon';
import Text from '../Text';

type Args = React.ComponentProps<typeof Accordion>;

export default {
  title: 'Components/V2/Accordion',
  component: Accordion,
  parameters: {
    badges: ['intro-1.2', 'current-2.0'],
  },
  args: {
    headingAs: 'h2',
    children: (
      <Accordion.Row>
        <Accordion.Button
          data-testid="accordion-button"
          title="Massa quam egestas massa."
        ></Accordion.Button>
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
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

export const TitleAndSubtitle: Story = {
  args: {
    ...Default.args,
    children: (
      <Accordion.Row>
        <Accordion.Button
          data-testid="accordion-button"
          subtitle="Quam lacus maecenas nibh malesuada."
          title="Massa quam egestas massa."
        ></Accordion.Button>
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

export const HasLeadingIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <Accordion.Row hasLeadingIcon>
        <Accordion.Button
          data-testid="accordion-button"
          leadingIcon={
            <Icon name="account-circle" purpose="decorative" size="1.5rem" />
          }
          subtitle="Quam lacus maecenas nibh malesuada."
          title="Massa quam egestas massa."
        ></Accordion.Button>
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

export const HasLeadingNumberIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <Accordion.Row hasLeadingIcon>
        <Accordion.Button
          data-testid="accordion-button"
          leadingIcon={
            <NumberIcon
              aria-label="Numero uno"
              number={1}
              size="md"
              status="default"
            />
          }
          subtitle="Quam lacus maecenas nibh malesuada."
          title="Massa quam egestas massa."
        ></Accordion.Button>
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
          <Accordion.Button
            data-testid="accordion-button-1"
            title="Massa quam egestas massa."
          ></Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            data-testid="accordion-button-2"
            title="Massa quam egestas massa."
          ></Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            data-testid="accordion-button-3"
            title="Massa quam egestas massa."
          ></Accordion.Button>
          <Accordion.Panel data-testid="accordion-panel-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            data-testid="accordion-button-4"
            title="Massa quam egestas massa."
          ></Accordion.Button>
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

/**
 * This demonstrates how to specify that a section is not currently expandable using `isExpandable`.
 */
export const EmptyStackedOpen: Story = {
  args: {
    children: (
      <>
        <Accordion.Row defaultOpen isExpandable={false}>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
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
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button title="Massa quam egestas massa."></Accordion.Button>
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
    badges: ['intro-1.2', 'implementationExample', 'current-2.0'],
  },
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button>
            <Text preset="body-lg">
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
            <Text preset="body-lg">
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
