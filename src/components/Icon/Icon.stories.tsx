import type { StoryObj, Meta } from '@storybook/react';
import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { Icon, type IconProps } from './Icon';
import icons, { type IconName } from '../../icons/spritemap';
import * as ColorTokens from '../../tokens-dist/ts/colors';
import Text from '../Text';

import styles from './Icon.stories.module.css';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    badges: ['api-2.0', 'theme-2.0'],
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
    },
    color: {
      control: {
        type: 'select',
      },
      // For now, take the variables and convert to equivalent tokens for the UI
      options: [
        'currentColor',
        ...Object.keys(ColorTokens)
          .filter((tokenVarName) => tokenVarName.indexOf('Icon') !== -1)
          .map((tokenVarName) => `var(--${kebabCase(tokenVarName)})`),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: ({ name, color, ...rest }) => {
    return <Icon {...rest} color={color} name={name} />;
  },
  args: {
    name: 'close',
    purpose: 'decorative' as const,
  },
};

export const Medium: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: '2em',
  },
};

export const Large: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: '4em',
  },
};

/**
 * You can control the color of the icon using any valid CSS color values, including our token suite.
 *
 * If `currentColor` for the whole container isn't sufficient,
 * use a CSS variable in `color` with the token you need, or
 * style `fill` with Tailwind: https://tailwindcss.com/docs/fill
 */
export const CustomColor: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: 'var(--eds-theme-color-icon-utility-critical)',
    size: '2em',
  },
};

/**
 * Icons are positioned naturally in lines of text. Use the size, color, or other props
 * to match the recommended design and layout.
 *
 * See: https://material-ui.com/components/material-icons/
 */
export const InText: Story = {
  render: (args) => {
    return (
      <Text as="p">
        The svg icon defaults to the surrounding text size (
        <Icon
          {...args}
          name="add-encircled"
          purpose="informative"
          title="icon with 1em line height"
        />
        ; 1em) by default.
      </Text>
    );
  },
};

/**
 * If your product needs icons not currently existing in the suite, you can introduce new
 * accessible icons by inserting the body of an SVG into `Icon`. Each resulting icon can be
 * treated like a standalone component, matching the recipe defined by design.
 */
export const WithChildrenSvg: Story = {
  ...Default,
  args: {
    viewBox: '0 0 24 24',
    children: (
      <path d="M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z" />
    ),
  },
};

const IconsInGrid = (args: IconProps) => (
  <div>
    <ul className={styles['icon-grid']}>
      {(Object.keys(icons) as IconName[]).map((name) => {
        return (
          <li className={styles['icon-grid__item']} key={name}>
            <Icon className={styles['icon-grid__icon']} name={name} {...args} />
            <span className={styles['icon-grid__text']}>{name}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

/**
 * Grid of all the available icons. Use the controls to change color, or other attributes
 *
 * **NOTE**: some icons marked as deprecated will be removed in future releases.
 */
export const IconGrid: Story = {
  render: (args) => <IconsInGrid {...args} />,
  parameters: {
    layout: 'padded',
  },
};
