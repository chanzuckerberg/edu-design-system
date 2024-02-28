import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React, { useState } from 'react';

import { Card } from './Card';
import { Avatar } from '../Avatar/Avatar';
import { Hr } from '../Hr/Hr';
import { Skeleton } from '../Skeleton/Skeleton';
import { Text } from '../Text/Text';

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

/**
 * Cards come with structural containers for semantic grouping.
 */
export const Default: StoryObj<Args> = {};

/**
 * You can use utility classes to alter the layout and orientation of those structural containers. Here, we change to a horizontal orientation.
 */
export const Horizontal: StoryObj<Args> = {
  args: {
    className: 'flex-row',
  },
};

/**
 * Shows `Card` with `elevation` set to `"raised"`
 */
export const Raised: StoryObj<Args> = {
  args: {
    elevation: 'raised',
  },
};

/**
 * Shows `Card` with `elevation` set to `"dragging"`
 */
export const Dragging: StoryObj<Args> = {
  args: {
    elevation: 'dragging',
  },
};

/**
 * This implementation example shows how you might use `Skeleton` to implement a loading state
 * for a recipe-like Profile card. Initially, the component would use the `Skeleton` instances,
 * and once the data is fetched, replace those with the actual contents.
 */
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

/**
 * You can implement appearance changes using `elevation`. In this implementation example,
 * we show how to build the basics of a drag/hover behavior using react state, `isDragging`, and `elevation`.
 *
 * To `Card`, we add handlers on `onMouseDown`, `onMouseEnter`, `onMouseLeave`, and `onMouseUp`.
 */
export const InteractiveOnHover: StoryObj<Args> = {
  render: (args) => <InteractiveCard {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardContents = await canvas.findByText('Card Contents');

    await userEvent.hover(cardContents);
  },
};
