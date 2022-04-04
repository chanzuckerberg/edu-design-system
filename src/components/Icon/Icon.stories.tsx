import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, IconProps } from './Icon';
import * as ColorTokens from '../../tokens-dist/colors';
import { ALL_ICONS } from '../../util/allIcons';
import Text from '../Text';

export default {
  title: 'Atoms/Icons/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ALL_ICONS,
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['currentColor', ...Object.keys(ColorTokens)],
      },
    },
  },
};

export const Default: StoryObj<IconProps> = {
  render: ({ name, color, ...rest }) => {
    const computedColor = color && ColorTokens[color];
    return <Icon {...rest} name={name} color={computedColor} />;
  },
  args: {
    name: 'close',
    purpose: 'decorative' as const,
  },
};

export const Medium: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: '2em',
  },
};

export const Large: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: '4em',
  },
};

export const FullScreen: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: '100vh',
  },
  parameters: {
    axe: {
      disabledRules: ['scrollable-region-focusable'],
    },
  },
};

export const CustomColor: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    color: ColorTokens.EdsColorBrandGrape500,
    size: '2em',
  },
};

export const Inverted = () => (
  <div className="u-padding-sm" style={{ background: '#000000' }}>
    <Icon inverted={true} name="close" purpose="decorative" />
  </div>
);

export const InText: StoryObj<IconProps> = {
  render: (args) => {
    return (
      <Text as="p">
        The svg icon defaults to the surrounding text size (
        <Icon
          {...args}
          name="account-circle"
          purpose="informative"
          title="icon with 1em line height"
        />
        , 1em), but often looks better with the line height (
        <Icon
          {...args}
          name="account-circle"
          purpose="informative"
          title="icon with 2em line height"
          size="2em"
        />
        , 2em) which is harder to determine. Take a look at the icons available
        in{' '}
        <a
          href="https://material-ui.com/components/material-icons/"
          target="_blank"
          rel="noreferrer"
        >
          https://material-ui.com/components/material-icons/
        </a>
        , currently we only support the filled icons.
      </Text>
    );
  },
};
