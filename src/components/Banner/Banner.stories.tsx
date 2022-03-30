import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Banner, Props } from './Banner';
import Button from '../Button';
import Heading from '../Heading';
import LayoutLinelengthContainer from '../LayoutLinelengthContainer';
import TextPassage from '../TextPassage';

export default {
  title: 'Molecules/Messaging/Banner',
  component: Banner,
} as Meta;

const Template: Story<Props> = (args) => (
  <Banner {...args}>
    <LayoutLinelengthContainer>
      <Heading as="h2" size={4} className="u-margin-bottom-sm">
        This is a title
      </Heading>
    </LayoutLinelengthContainer>
    <TextPassage>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
    </TextPassage>
  </Banner>
);

const TitleOnlyTemplate: Story<Props> = (args) => (
  <Banner {...args}>
    <LayoutLinelengthContainer>
      <Heading as="h2" size={4}>
        This is a title
      </Heading>
    </LayoutLinelengthContainer>
  </Banner>
);

const DescriptionOnlyTemplate: Story<Props> = (args) => (
  <Banner {...args}>
    <TextPassage>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
    </TextPassage>
  </Banner>
);

const WithActionTemplate: Story<Props> = (args) => (
  <Banner {...args}>
    <TextPassage className="u-margin-bottom-md">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
    </TextPassage>
    <Button>Banner action</Button>
  </Banner>
);

export const Default = Template.bind({});
Default.args = { iconName: 'information-circle' };

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  iconName: 'exclamation-circle',
  title: 'This is a title',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  iconName: 'x-circle',
  title: 'This is a title',
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissible: true,
  iconName: 'information-circle',
  title: 'This is a title',
};

export const BrandDismissible = Template.bind({});
BrandDismissible.args = {
  dismissible: true,
  variant: 'brand',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const SuccessDismissible = Template.bind({});
SuccessDismissible.args = {
  dismissible: true,
  variant: 'success',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const WarningDismissible = Template.bind({});
WarningDismissible.args = {
  dismissible: true,
  variant: 'warning',
  iconName: 'exclamation-circle',
  title: 'This is a title',
};

export const ErrorDismissible = Template.bind({});
ErrorDismissible.args = {
  dismissible: true,
  variant: 'error',
  iconName: 'x-circle',
  title: 'This is a title',
};

export const TitleOnly = TitleOnlyTemplate.bind({});
TitleOnly.args = {
  dismissible: true,
  iconName: 'information-circle',
  title: 'This is a title',
};

export const DescriptionOnly = DescriptionOnlyTemplate.bind({});
DescriptionOnly.args = {
  dismissible: true,
  iconName: 'information-circle',
  title: 'This is a title',
};

export const WithAction = WithActionTemplate.bind({});
WithAction.args = {
  dismissible: true,
  iconName: 'information-circle',
  title: 'This is a title',
};
