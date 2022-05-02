import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ShowHide, Props } from './ShowHide';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'Molecules/Interactive/ShowHide',
  component: ShowHide,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ margin: '10rem' }}>
    <ShowHide
      trigger={
        <Button type="button" variant="primary">
          <Icon name="expand-more" purpose="decorative" />
        </Button>
      }
      {...args}
    >
      <div className="fpo">Hidden Content</div>
    </ShowHide>
  </div>
);

export const Default = Template.bind({});
Default.args = { text: 'Actions' };
