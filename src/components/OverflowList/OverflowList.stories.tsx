import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { OverflowList } from './OverflowList';
import { OverflowListItem } from '../OverflowListItem/OverflowListItem';

export default {
  title: 'Components/OverflowList',
  component: OverflowList,
} as Meta<Args>;

type Args = React.ComponentProps<typeof OverflowList>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <OverflowListItem>
          <div className="fpo">Item 1</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 2</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 3</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 4</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 5</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 6</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 7</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 8</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 9</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 10</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 11</div>
        </OverflowListItem>
        <OverflowListItem>
          <div className="fpo">Item 12</div>
        </OverflowListItem>
      </>
    ),
  },
};
