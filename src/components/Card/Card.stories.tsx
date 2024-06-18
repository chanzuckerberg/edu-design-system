import type { StoryObj, Meta } from '@storybook/react';
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
    badges: ['intro-1.0', 'current-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  args: {
    className: 'w-96',
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
      control: {
        type: null,
      },
    },
    topStripeColor: {
      options: [
        'bg-brand-blue-lowEmphasis',
        'bg-brand-green-lowEmphasis',
        'bg-brand-orange-lowEmphasis',
        'bg-brand-pink-lowEmphasis',
        'bg-brand-purple-lowEmphasis',
        'bg-brand-red-lowEmphasis',
        'bg-brand-yellow-lowEmphasis',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Card>;

/**
 * Cards come with structural containers for semantic grouping.
 */
export const Default: StoryObj<Args> = {};

/**
 * Cards can be made interactive by using `isInteractive`. With this, it will require being linked to `Link` or some control that performs an action or is being dragged.
 */
export const IsInteractive: StoryObj<Args> = {
  args: {
    ...Default.args,
    isInteractive: true,
  },
};

/**
 * This demonstrates all that's possible with the header component
 */
export const WithFullHeader: StoryObj<Args> = {
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
export const WithFullHeaderAndIcon: StoryObj<Args> = {
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
          size="2rem"
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
export const WithSmallFullHeaderAndIcon: StoryObj<Args> = {
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
export const WithCustomizedHeader: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Card.Header className="mb-size-2">
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

export const WithHorizontalPrimaryButton: StoryObj<Args> = {
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
              Primary Action
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

export const CustomBrandCard: StoryObj<Args> = {
  args: {
    containerColor: 'custom-brand',
    className: 'border-brand-red bg-brand-red w-96',
  },
};

/**
 * You can add a stripe along the top of a card to enhance and emphasis its appearance
 */
export const TopStripe: StoryObj<Args> = {
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
              Primary Action
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Cards also allow for using custom top stripe colors. Use one of the low-emphasis brand colors (see the control above to test)
 */
export const CustomTopStripe: StoryObj<Args> = {
  args: {
    topStripe: 'high',
    topStripeColor: 'bg-brand-purple-lowEmphasis',
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
              Primary Action
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
export const BackgroundCallout: StoryObj<Args> = {
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
              Primary Action
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </>
    ),
  },
};

/**
 * Cards have hierarchy, and can contain other cards with one level. When using a nested card, you can use `.ChildCard`,
 * which comes preconfigured with some settings and defaults applied. All the sub-components of card work within `.Childcard`.
 */
export const ChildCards: StoryObj<Args> = {
  args: {
    containerColor: 'call-out',
    topStripe: 'high',
    containerStyle: 'high',
    children: (
      <>
        <Card.Header size="md" title="Card Group"></Card.Header>
        <Card.Body>
          <Card.ChildCard draggable="true" isInteractive>
            <Card.Header
              action={<CardMenu />}
              eyebrow="Eyebrow Text"
              subTitle="Sub-title text"
              title="Title text"
            />
          </Card.ChildCard>
        </Card.Body>
      </>
    ),
  },
};

/**
 * Cards can be marked as currently being dragged. This can be used in combination with the `draggable` attribute from HTML,
 * or to work with a drag-n-drop library.
 */
export const WhileDragging: StoryObj<Args> = {
  args: {
    isDragging: true,
  },
};

/**
 * Implementation Example: Cancelling a card membership
 */
export const CancelMembership: StoryObj<Args> = {
  parameters: {
    badges: ['intro-1.0', 'current-2.0', 'implementationExample'],
  },
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
