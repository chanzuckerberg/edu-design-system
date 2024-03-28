import type { StoryObj, Meta } from '@storybook/react';
// import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import { Card } from './Card-v2';

import { ButtonV2 as Button } from '../Button';
import { ButtonGroupV2 as ButtonGroup } from '../ButtonGroup';
import Icon from '../Icon';
import { MenuV2 as Menu } from '../Menu';
import { Text } from '../Text/Text';

export default {
  title: 'Components/V2/Card',
  component: Card,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  args: {
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
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Card>;

/**
 * Cards come with structural containers for semantic grouping.
 */
export const Default: StoryObj<Args> = {};

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

export const WithFullHeaderAndIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Card.Header
          eyebrow="Recommended for you"
          icon="account-circle"
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
        <Menu.Item disabled href="https://example.org/" icon="warning">
          Not Possible (disabled)
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export const WithSmallFullHeaderAndIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Card.Header
          action={<CardMenu />}
          eyebrow="Recommended for you"
          icon="account-circle"
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

export const CustomTopStripe: StoryObj<Args> = {
  args: {
    topStripe: 'high',
    topStripeClassName: 'bg-utility-favorable-highEmphasis-hover',
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

export const BackgroundCallout: StoryObj<Args> = {
  args: {
    background: 'call-out',
    containerStyle: 'medium',
    topStripeClassName: 'bg-utility-favorable-highEmphasis-hover',
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

export const Focusable: StoryObj<Args> = {
  args: {
    tabIndex: 0,
    topStripeClassName: 'bg-utility-favorable-highEmphasis-hover',
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
