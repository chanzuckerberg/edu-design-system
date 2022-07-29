import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './Button';
import * as colors from '../../tokens-dist/ts/colors';
import { STATUSES as buttonColors } from '../ClickableStyle/ClickableStyle';

export default {
  title: 'Focus Indicator',
  component: Button,
  argTypes: {
    color: {
      options: buttonColors,
      control: {
        type: 'radio',
      },
    },
  },
};

export const Current: StoryObj<ButtonProps> = {
  render: (args) => (
    <div
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        display: 'grid',
        gap: '1rem',
      }}
    >
      {Object.keys(colors).map((colorName) => {
        const color = colors[colorName];
        return (
          <div key={colorName}>
            <div className="text-center">{colorName}</div>
            <div
              className="u-padding-xl u-width-100"
              style={{
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                state="focus"
                {...args}
              >
                Coffee
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  ),
  args: {
    color: 'brand',
    size: 'lg',
    variant: 'primary',
  },
};

export const ProtoA: StoryObj<ButtonProps> = {
  ...Current,
  args: {
    ...Current.args,
    style: {
      '--tw-ring-offset-width': '2px',
      '--tw-ring-color': 'black',
    } as React.CSSProperties,
  },
  storyName: 'Proto A (black-white)',
};

export const ProtoB: StoryObj<ButtonProps> = {
  ...Current,
  args: {
    ...Current.args,
    style: {
      '--tw-ring-offset-width': '2px',
      '--tw-ring-color': 'white',
      outline: '3px solid black',
      outlineOffset: '0',
    } as React.CSSProperties,
  },
  storyName: 'Proto B (white-black)',
};

export const ProtoC: StoryObj<ButtonProps> = {
  ...Current,
  args: {
    ...Current.args,
    style: {
      boxShadow: '0 0 0 2px #F9F9D1, 0 0 0 4px #396196, 0 0 4px 8px #F9F9D1',
      outline: '2px transparent solid',
    },
  },
  storyName: 'Proto C (yellow-black-yellow shadow)',
};

export const ProtoD: StoryObj<ButtonProps> = {
  ...Current,
  args: {
    ...Current.args,
    style: {
      boxShadow: '0 0 0 2px #6ef, 0 0 5px 3px #000',
      outline: '2px rgba(0,0,0,0.4) solid',
      outlineOffset: '-2px',
    },
  },
  storyName: 'Proto D (shadow-teal-opaque)',
};

export const ProtoE: StoryObj<ButtonProps> = {
  ...Current,
  args: {
    ...Current.args,
    style: {
      boxShadow: '0 0 0 2px midnightblue',
      outline: '2px lightskyblue solid',
      outlineOffset: '3px',
    },
  },
  storyName: 'Proto E (like Firefox)',
};
