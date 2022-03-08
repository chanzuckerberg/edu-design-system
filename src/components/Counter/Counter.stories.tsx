import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Counter, Props } from './Counter';
import { Button } from '../Button/Button';
import { Tooltip } from '../Tooltip/Tooltip';

export default {
  title: 'Molecules/Forms/Counter',
  component: Counter,
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

/* TODO: replace <ForwardRefButton> with EDS button since it's already using forwardRef */
const ForwardRefButton = React.forwardRef((props, ref) => (
  <Button
    variant="bare"
    iconPosition="after"
    iconName="question-mark-circle"
    aria-label="Hover this button to trigger the tooltip"
    text="Hover this button to trigger the tooltip"
    buttonRef={ref}
  />
));
ForwardRefButton.displayName = 'ForwardRefButton';

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
    <Tooltip content="Some text to help with a form field">
      <ForwardRefButton />
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
