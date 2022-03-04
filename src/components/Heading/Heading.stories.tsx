import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Heading, Props } from './Heading';

export default {
  title: 'Atoms/Text/Heading',
  component: Heading,
} as Meta;

const Template: Story<Props> = (args) => <Heading {...args}>Heading</Heading>;

export const Heading1 = Template.bind({});
Heading1.args = { as: 'h1' };

export const Heading2 = Template.bind({});
Heading2.args = { as: 'h2' };

export const Heading3 = Template.bind({});
Heading3.args = { as: 'h3' };

export const Heading4 = Template.bind({});
Heading4.args = { as: 'h4' };

export const Heading5 = Template.bind({});
Heading5.args = { as: 'h5' };

export const Heading6 = Template.bind({});
Heading6.args = { as: 'h6' };

export const Heading2TypographyPreset1 = Template.bind({});
Heading2TypographyPreset1.args = { as: 'h2', size: 1 };

export const Heading2TypographyPreset2 = Template.bind({});
Heading2TypographyPreset2.args = { as: 'h2', size: 2 };

export const Heading2TypographyPreset3 = Template.bind({});
Heading2TypographyPreset3.args = { as: 'h2', size: 3 };

export const Heading2TypographyPreset4 = Template.bind({});
Heading2TypographyPreset4.args = { as: 'h2', size: 4 };

export const Heading2TypographyPreset5 = Template.bind({});
Heading2TypographyPreset5.args = { as: 'h2', size: 5 };

export const Heading2TypographyPreset6 = Template.bind({});
Heading2TypographyPreset6.args = { as: 'h2', size: 6 };
