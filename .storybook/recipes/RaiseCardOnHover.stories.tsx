import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React, { useState } from 'react';
import { Card } from '../../src/';

export default {
  title: 'Recipes/RaiseCardOnHover',
  component: Card,
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Card>;

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

export const Default: StoryObj<Args> = {
  render: (args) => <InteractiveCard {...args} />,
};

export const OnHover: StoryObj<Args> = {
  render: (args) => <InteractiveCard {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardContents = await canvas.findByText('Card Contents');

    userEvent.hover(cardContents);
  },
};
