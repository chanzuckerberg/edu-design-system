import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { Accordion } from './Accordion';
import FpoBlock from '../../storyUtils/FpoBlock';
import { chromaticViewports } from '../../util/viewports';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import Tag from '../Tag';
import Text from '../Text';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      subtitle:
        'Displays one or more headers stacked on top of one another that reveal or hide associated content.',
    },
    layout: 'centered',
    controls: { sort: 'requiredFirst' },
    chromatic: {
      prefersReducedMotion: 'reduce',
    },
  },
  args: {
    headingAs: 'h2',
    className: 'w-[600px]',
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button
            data-testid="accordion-button"
            title="Accordion title"
          />
          <Accordion.Panel data-testid="accordion-panel">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            data-testid="accordion-button2"
            title="Accordion title"
            trailingContent={<Tag label="Tag Text"></Tag>}
          />
          <Accordion.Panel data-testid="accordion-panel2">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen>
          <Accordion.Button
            data-testid="accordion-button3"
            title="Accordion title"
          />
          <Accordion.Panel data-testid="accordion-panel3">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['autodocs', 'version:4.0.0'],
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

/**
 * You can add in `NumberIcon` or any other icon in the button for the accordion row.
 */
export const WithLeadingNumberIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Accordion.Row hasLeadingContent>
          <Accordion.Button
            data-testid="accordion-button"
            leadingContent={
              <NumberIcon
                aria-label="Numero uno"
                number={1}
                size="md"
                status="default"
              />
            }
            title="Accordion title"
          />
          <Accordion.Panel data-testid="accordion-panel">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row hasLeadingContent>
          <Accordion.Button
            data-testid="accordion-button"
            leadingContent={
              <NumberIcon
                aria-label="Numero uno"
                number={1}
                size="md"
                status="default"
              />
            }
            title="Accordion title"
          />
          <Accordion.Panel data-testid="accordion-panel">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row hasLeadingContent>
          <Accordion.Button
            data-testid="accordion-button"
            leadingContent={
              <NumberIcon
                aria-label="Numero uno"
                number={1}
                size="md"
                status="default"
              />
            }
            title="Accordion title"
          />
          <Accordion.Panel data-testid="accordion-panel">
            <Text preset="body-md">
              Lorem ipsum dolor sit amet consectetur. Massa lacus id dictum id
              pharetra et semper cras. Ante aliquam nec urna amet. Ipsum viverra
              pharetra libero sit nam adipiscing quam erat. Ultricies lacinia
              malesuada ac eget convallis convallis semper purus purus.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
};

export const TitleAndSubtitle: Story = {
  args: {
    ...Default.args,
    children: (
      <Accordion.Row>
        <Accordion.Button
          data-testid="accordion-button"
          subTitle={<span>"Quam lacus maecenas nibh malesuada."</span>}
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
      <Accordion.Row hasLeadingContent>
        <Accordion.Button
          data-testid="accordion-button"
          leadingContent={
            <Icon name="person-encircled" purpose="decorative" size="24px" />
          }
          subTitle="Quam lacus maecenas nibh malesuada."
          title="Massa quam egestas massa."
        ></Accordion.Button>
        <Accordion.Panel data-testid="accordion-panel">
          <Text preset="body-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla amet,
            massa ultricies iaculis. Quam lacus maecenas nibh malesuada. At
            tristique et ullamcorper rhoncus amet pharetra aliquet tortor.
            Suscipit dui, nunc sit dui tellus massa laoreet tellus.
          </Text>
        </Accordion.Panel>
      </Accordion.Row>
    ),
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
    <Accordion className="w-[600px]" headingAs="h2">
      <Accordion.Row>
        {({ open }) => (
          <>
            <Accordion.Button data-testid="accordion-button">
              Accordion Button {(open && 'open') || 'closed'}
            </Accordion.Button>
            <Accordion.Panel>
              <Text preset="body-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                amet, massa ultricies iaculis. Quam lacus maecenas nibh
                malesuada. At tristique et ullamcorper rhoncus amet pharetra
                aliquet tortor. Suscipit dui, nunc sit dui tellus massa laoreet
                tellus.
              </Text>
            </Accordion.Panel>
          </>
        )}
      </Accordion.Row>
    </Accordion>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  tags: ['code-only'],
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
 * The expand/collapse indicator can be overridden with another EDS icon, or with custom
 * content. Either way it rotates when the row opens, so pick something that reads well
 * upside down.
 */
export const WithCustomIndicator: Story = {
  args: {
    children: (
      <>
        <Accordion.Row>
          <Accordion.Button
            indicatorContent="chevron-down"
            title="Chevron down (the default)"
          />
          <Accordion.Panel>
            <Text preset="body-md">
              Passing an icon name renders it through `Icon`, announced as
              show/hide content.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button indicatorContent="chevron-up" title="Chevron up" />
          <Accordion.Panel>
            <Text preset="body-md">
              Starting from the other orientation flips which way the indicator
              rotates.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            indicatorContent={<Tag label="3 new" status="favorable" />}
            title="Custom content"
          />
          <Accordion.Panel>
            <Text preset="body-md">
              Passing a node renders it as-is. The node carries its own
              accessible treatment.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
};

/**
 * All three content slots on `Accordion.Button` take arbitrary content, not only an icon
 * name. The blocks below stand in for whatever you supply: `leadingContent` and
 * `trailingContent` flank the title, and `indicatorContent` replaces the expand/collapse
 * caret, so it rotates with the row.
 */
export const WithFpoContentSlots: Story = {
  args: {
    children: (
      <>
        <Accordion.Row hasLeadingContent>
          <Accordion.Button
            leadingContent={<FpoBlock size={24} />}
            title="Leading content"
          />
          <Accordion.Panel>
            <Text preset="body-md">
              `leadingContent` sits before the title, in the space reserved by
              `hasLeadingContent` on the row.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            title="Trailing content"
            trailingContent={<FpoBlock size={24} />}
          />
          <Accordion.Panel>
            <Text preset="body-md">
              `trailingContent` sits after the title and before the indicator.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row>
          <Accordion.Button
            indicatorContent={<FpoBlock size={24} />}
            title="Indicator content"
          />
          <Accordion.Panel>
            <Text preset="body-md">
              `indicatorContent` replaces the caret and rotates when the row
              opens, so pick something that reads well upside down.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
        <Accordion.Row defaultOpen hasLeadingContent>
          <Accordion.Button
            indicatorContent={<FpoBlock size={24} />}
            leadingContent={<FpoBlock size={24} />}
            title="All three at once"
            trailingContent={<FpoBlock size={24} />}
          />
          <Accordion.Panel>
            <Text preset="body-md">
              Shown open, to check the slots still line up once the indicator
              has rotated.
            </Text>
          </Accordion.Panel>
        </Accordion.Row>
      </>
    ),
  },
};
