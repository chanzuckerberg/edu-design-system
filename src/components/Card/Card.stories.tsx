import type { StoryObj, Meta } from '@storybook/react-webpack5';
import { userEvent } from '@storybook/testing-library';
import React from 'react';

import { Card } from './Card';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Icon from '../Icon';
import { Menu } from '../Menu/Menu';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  args: {
    className: 'w-[384px]',
    children: (
      <>
        <Card.Header>
          <div className="fpo w-full">Card Header</div>
        </Card.Header>
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    isInteractive: {
      control: 'boolean',
    },
    isDragging: {
      control: 'boolean',
    },
  },
  tags: ['autodocs', 'version:3.0'],
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

/**
 * Cards come with structural containers for semantic grouping.
 */
export const Default: Story = {};

/**
 * Cards can be made interactive by using `isInteractive`. With this, it will require being linked to `Link` or some control that performs an action or is being dragged.
 */
export const IsInteractive: Story = {
  args: {
    ...Default.args,
    isInteractive: true,
  },
};

/**
 * This demonstrates all that's possible with the header component
 */
export const WithFullHeader: Story = {
  args: {
    children: (
      <>
        <Card.Header
          eyebrow="Recommended for you"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * When using an icon in the header, we should not use `eyebrow` as it causes a noisy appearance. This is, however, technically possible.
 */
export const WithFullHeaderAndIcon: Story = {
  args: {
    children: (
      <>
        <Card.Header
          icon="person-encircled"
          subTitle={<span>Get to know your colleagues</span>}
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Example implementation of a menu with a clickable icon button, to demonstrate adding a menu to a card
 * @returns ReactNode
 */
function CardMenu() {
  return (
    <Menu>
      <Menu.PlainButton>
        <Icon
          name="dots-horizontal"
          purpose="informative"
          size="32px"
          title="show more"
        />
      </Menu.PlainButton>
      <Menu.Items data-testid="menu-content">
        <Menu.Item
          href="https://headlessui.com/react/menu#menu-button"
          icon="link"
        >
          Headless UI Docs
        </Menu.Item>
        <Menu.Item
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu"
          icon="link"
        >
          MDN: Menu
        </Menu.Item>
        <Menu.Item href="#index" onClick={() => console.log('Item clicked')}>
          Trigger Action
        </Menu.Item>
        <Menu.Item disabled href="https://example.org/" icon="warning-filled">
          Not Possible (disabled)
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

/**
 * You can combine a small header with a menu icon in the top-right.
 */
export const WithSmallFullHeaderAndIcon: Story = {
  args: {
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          icon="person-encircled"
          size="sm"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * It's possible to customize the card header with formatted text and content, which replaces the pre-defined slots
 */
export const WithCustomizedHeader: Story = {
  args: {
    children: (
      <>
        <Card.Header className="mb-spacing-size-2">
          Displaying <strong>some text</strong> with <em>mixed formatting</em>.
        </Card.Header>
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </>
    ),
  },
};

export const WithHorizontalPrimaryButton: Story = {
  args: {
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          eyebrow="Recommended for you"
          size="md"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo my-4">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * You can add a stripe along the top of a card to enhance and emphasis its appearance
 */
export const TopStripe: Story = {
  args: {
    topStripe: 'medium',
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          eyebrow="Recommended for you"
          size="md"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo my-4">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Cards also allow for using custom top stripe colors. This is exposed by using the `--card__top-stripe-bg` CSS Custom Property.
 *
 * You can make use of this by providing any of the color tokens, CSS gradients, or anything you need as the value.
 */
export const CustomTopStripe: Story = {
  args: {
    topStripe: 'high',
    style: {
      '--card__top-stripe-bg':
        'var(--eds-theme-color-background-utility-critical-high-emphasis)',
    },
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          eyebrow="Recommended for you"
          size="md"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo my-4">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Another visual change to cards allow for adjusting the background color, to change how the card looks, using `containerColor`
 */
export const BackgroundCallout: Story = {
  args: {
    containerColor: 'call-out',
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          eyebrow="Recommended for you"
          size="md"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo my-4">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
            <Button onClick={() => {}} rank="primary">
              Primary
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Interactive cards can behave as radios, for use in a form context, where we want to select one of several options. Such cards would have a `name`, and by default are uncontrolled.
 * Every card in a radio set should have the same `name`.
 */
export const RadioCards: Story = {
  args: {
    ...Default.args,
    behavior: 'radio',
    isInteractive: true,
    name: 'test',
  },
  render: (args) => (
    <div className="flex gap-spacing-size-1">
      <Card {...args}>
        <Card.Header
          eyebrow="Recommended for you"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </Card>
      <Card {...args}>
        <Card.Header
          eyebrow="Recommended for you"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const RadioCardsSelected: Story = {
  args: {
    ...RadioCards.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: RadioCards.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    await userEvent.keyboard(' ');
    await userEvent.tab();
  },
};

/**
 * Interactive cards can also have checkbox behavior, allowing selection of 1-many in a given set. The `name` values for each should be unique.
 */
export const CheckboxCards: Story = {
  args: {
    ...Default.args,
    isInteractive: true,
    behavior: 'checkbox',
  },
  render: (args) => (
    <div className="flex gap-spacing-size-1">
      <Card {...args}>
        <Card.Header
          eyebrow="Recommended for you"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </Card>
      <Card {...args}>
        <Card.Header
          eyebrow="Recommended for you"
          subTitle="Get to know your colleagues"
          title="Question of the day"
        />
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const CheckboxCardsSelected: Story = {
  args: {
    ...CheckboxCards.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: CheckboxCards.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    await userEvent.keyboard(' ');
    await userEvent.tab();
  },
};

/**
 * Cards can be marked as currently being dragged. This can be used in combination with the `draggable` attribute from HTML,
 * or to work with a drag-n-drop library.
 */
export const WhileDragging: Story = {
  args: {
    isDragging: true,
  },
};

/**
 * Implementation Example: Cancelling a card membership
 */
export const CancelMembership: Story = {
  tags: ['code-only'],
  args: {
    children: (
      <>
        <Card.Header
          size="sm"
          subTitle="We're sad to see you go"
          title="Cancel membership?"
        />
        <Card.Body>
          <Text className="py-4" preset="body-sm">
            Lorem ipsum dolor sit amet consectetur. Id pretium consequat
            consequat aliquam arcu
          </Text>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {/* This has to be manually tested since Tooltip tests are flaky in Chromatic */}
            <Button
              onClick={() => {}}
              rank="primary"
              size="md"
              variant="critical"
            >
              Confirm cancellation
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};
