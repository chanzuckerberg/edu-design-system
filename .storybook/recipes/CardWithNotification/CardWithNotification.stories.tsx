import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { CardWithNotification } from './CardWithNotification';
import { Card } from '../../../src';

export default {
  title: 'Recipes/CardWithNotification',
  component: CardWithNotification,
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof CardWithNotification>;

export const Default: StoryObj<Args> = {
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
    text: 'Lorem ipsum dolor sit amet',
    variant: 'success',
  },
};
