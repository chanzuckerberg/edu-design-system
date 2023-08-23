import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React, { useState } from 'react';

import { Card } from './Card';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Hr } from '../Hr/Hr';
import { InlineNotification } from '../InlineNotification/InlineNotification';
import { Skeleton } from '../Skeleton/Skeleton';
import { Text } from '../Text/Text';

import buttonActionCalloutStyles from './ButtonActionCalloutCard.module.css';
import cardWithNotificationStyles from './CardWithNotification.module.css';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    CardHeader: Card.Header,
    CardBody: Card.Body,
    CardFooter: Card.Footer,
  },
  parameters: {
    badges: ['1.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  args: {
    children: (
      <>
        <Card.Header>
          <div className="fpo">Card Header</div>
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

type Args = React.ComponentProps<typeof Card> & {
  // Added to support implementation example below
  isLoading: boolean;
};

export const Default: StoryObj<Args> = {};

export const Horizontal: StoryObj<Args> = {
  args: {
    orientation: 'horizontal',
  },
};

export const Raised: StoryObj<Args> = {
  args: {
    elevation: 'raised',
  },
};

export const Dragging: StoryObj<Args> = {
  args: {
    elevation: 'dragging',
  },
};

export const ButtonActionCalloutCard: StoryObj<Args> = {
  args: {
    elevation: 'raised',
  },
  parameters: {
    badges: ['1.0', 'implementationExample'],
  },
  render: (args) => (
    <Card
      className={buttonActionCalloutStyles['button-action-callout-card']}
      {...args}
    >
      <Card.Body>
        <Heading as="h3" size="h5">
          Do This Checkpoint
        </Heading>
        <div
          className={
            buttonActionCalloutStyles['button-action-callout-card__body-inner']
          }
        >
          Develop the text of your Body Book, crafting evidence-supported
          explanations on how the body is organized and its functions.
          <div>
            <Button variant="primary">Preview</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  ),
};

export const CardWithNotification: StoryObj<Args> = {
  args: {
    elevation: 'raised',
  },
  parameters: {
    badges: ['1.0', 'implementationExample'],
  },
  render: (args) => (
    <div className={cardWithNotificationStyles['card-with-notification']}>
      <Card
        className={cardWithNotificationStyles['card-with-notification__card']}
        {...args}
      >
        <Card.Header>
          <div className="fpo">Card Header</div>
        </Card.Header>
        <Card.Body>
          <div className="fpo">Card Body</div>
        </Card.Body>
        <Card.Footer>
          <div className="fpo">Card Footer</div>
        </Card.Footer>
      </Card>
      <InlineNotification
        isFullWidth
        text="Lorem ipsum dolor sit amet"
        variant="success"
      />
    </div>
  ),
};

export const LoadingProfileCard: StoryObj<Args> = {
  args: {
    isLoading: true,
  },
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
  render: ({ isLoading, ...cardProps }) => {
    return (
      <div aria-label="Loading example profile card" role="status">
        <Card {...cardProps}>
          <Card.Body>
            {isLoading && (
              <>
                <Skeleton.Circle className="mb-3" isAnimating width="48px" />
                <Skeleton.Text
                  className="mb-2 mt-2"
                  height="4rem"
                  isAnimating
                  width="15ch"
                />
                <Hr />
                <Skeleton.Text
                  className="mb-2 mt-2"
                  height="1.5rem"
                  isAnimating
                  width="30ch"
                />
                <Skeleton.Text
                  className="mb-2 mt-2"
                  height="1.5rem"
                  isAnimating
                  width="25ch"
                />
                <Skeleton.Text
                  className="mb-2 mt-2"
                  height="1.5rem"
                  isAnimating
                  width="10ch"
                />
              </>
            )}
            {!isLoading && (
              <>
                <Avatar size="lg" user={{ fullName: 'Josephine Smith' }} />
                <Text
                  className="mb-2 mt-2"
                  variant="neutral-strong"
                  weight="bold"
                >
                  Example Job Title
                </Text>
                <Text
                  className="mb-2 mt-2"
                  variant="neutral-strong"
                  weight="bold"
                >
                  Example Company Name
                </Text>
                <Hr />
                <Text className="mb-2 mt-2" variant="neutral-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia dolorem doloribus laudantium magnam. Laboriosam!
                </Text>
                <Text className="mb-2 mt-2" variant="neutral-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text className="mb-2 mt-2" variant="neutral-medium">
                  Lorem ipsum dolor sit amet.
                </Text>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  },
};

const InteractiveCard = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      elevation={isHovering ? 'raised' : 'none'}
      isDragging={isGrabbing}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseUp={() => setIsGrabbing(false)}
    >
      <Card.Body>
        <div className="fpo p-6">Card Contents</div>
      </Card.Body>
    </Card>
  );
};

export const InteractiveOnHover: StoryObj<Args> = {
  render: (args) => <InteractiveCard {...args} />,
};

// Add visual regression test simulating hover
export const StaticOnHover: StoryObj<Args> = {
  render: (args) => <InteractiveCard {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardContents = await canvas.findByText('Card Contents');

    userEvent.hover(cardContents);
  },
};
