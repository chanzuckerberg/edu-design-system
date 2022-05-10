import { Story, Meta } from '@storybook/react';
import React from 'react';

import { OverflowList, Props } from './OverflowList';
import { OverflowListItem } from '../OverflowListItem/OverflowListItem';

export default {
  title: 'Molecules/Lists/OverflowList',
  component: OverflowList,
} as Meta;

const Template: Story<Props> = (args) => (
  <OverflowList>
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
  </OverflowList>
);

export const Default = Template.bind({});
Default.args = {};
