import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { CardWithNotification } from './CardWithNotification';
import { DataBar } from '../../../src';

export default {
  title: 'Recipes/CardWithNotification',
  component: CardWithNotification,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof CardWithNotification>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <CardWithNotification.Header>
          <div className="fpo">Card Header</div>
        </CardWithNotification.Header>
        <CardWithNotification.Body>
          <div className="fpo">Card Body</div>
        </CardWithNotification.Body>
        <CardWithNotification.Footer>
          <div className="fpo">Card Footer</div>
        </CardWithNotification.Footer>
      </>
    ),
    text: 'Lorem ipsum dolor sit amet',
    variant: 'success',
  },
};

export const CADBrand: StoryObj<Args> = {
  args: {
    children: (
      <CardWithNotification.Body>
        <DataBar
          label="Total instructional days"
          max={60}
          segments={[
            { value: 10, text: 'Project 1' },
            { value: 11, text: 'Project 2' },
            { value: 22, text: 'Project 3' },
            { value: 11, text: 'Project 4' },
          ]}
        />
      </CardWithNotification.Body>
    ),
    text: 'Summit recommends teaching at least five (5) projects for this course.',
    variant: 'brand',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '0.25rem',
          width: '27rem',
          height: '30rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const CADBrandStrong: StoryObj<Args> = {
  ...CADBrand,
  args: {
    ...CADBrand.args,
    isStrong: true,
  },
};
