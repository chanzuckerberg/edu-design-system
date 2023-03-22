import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardHeader, CardBody, CardFooter },
  parameters: {
    badges: ['1.0'],
  },
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof Card>;

export const Default: StoryObj<Args> = {};

export const Raised: StoryObj<Args> = {
  args: {
    elevation: 'raised',
  },
};

export const Horizontal: StoryObj<Args> = {
  args: {
    orientation: 'horizontal',
  },
};
