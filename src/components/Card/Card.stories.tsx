import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

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
  decorators: [(Story) => <div className="p-5">{Story()}</div>],
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

type Args = React.ComponentProps<typeof Card>;

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
