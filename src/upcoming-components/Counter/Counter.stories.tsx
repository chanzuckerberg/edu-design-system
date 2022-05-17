import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Counter, Props } from './Counter';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Tooltip from '../../components/Tooltip';

export default {
  title: 'Molecules/Forms/Counter',
  component: Counter,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 1,
  min: 1,
  max: 6,
  label: 'Counter',
  minusButtonText: 'Subtract by 1',
  plusButtonText: 'Add by 1',
};

export const DefaultWithTooltip = Template.bind({});
DefaultWithTooltip.args = {
  value: 1,
  min: 1,
  max: 6,
  label: 'Counter',
  minusButtonText: 'Subtract by 1',
  plusButtonText: 'Add by 1',
  fieldNote: 'This is a counter field',
  labelAfter: (
    <Tooltip text="Some text to help with a form field">
      <Button variant="icon">
        Hover this button to trigger the tooltip
        <Icon name="help" purpose="decorative" />
      </Button>
    </Tooltip>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 1,
  min: 1,
  max: 6,
  disabled: true,
  label: 'Counter',
  minusButtonText: 'Subtract by 1',
  plusButtonText: 'Add by 1',
};

export const Error = Template.bind({});
Error.args = {
  value: 1,
  min: 1,
  max: 6,
  isError: true,
  label: 'Counter',
  minusButtonText: 'Subtract by 1',
  plusButtonText: 'Add by 1',
  fieldNote: 'This field has an error',
};
