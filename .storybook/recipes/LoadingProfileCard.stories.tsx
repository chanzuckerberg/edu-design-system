import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Avatar, Card, Hr, Skeleton, Text } from '../../src';

export default {
  title: 'Recipes/LoadingProfileCard',
  component: Card,
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  args: {
    isLoading: false,
    className: 'm-2 p-3',
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof Card> & {
  isLoading: boolean;
};

export const Default: StoryObj<Args> = {};

export const Loading: StoryObj<Args> = {
  args: {
    isLoading: true,
  },
};
