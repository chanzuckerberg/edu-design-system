import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import icons, { type IconName } from '../../icons/spritemap';
import * as ColorTokens from '../../tokens-dist/ts/colors';
import Link from '../Link';
import Text from '../Text';
import styles from './Icon.stories.module.css';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    badges: ['1.0'],
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
      options: ['currentColor', ...Object.keys(ColorTokens)],
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Icon>;

export const Default: StoryObj<Args> = {
  render: ({ name, color, ...rest }) => {
    // ESlint can't tell if ColorTokens[color] is valid or not, since it's computed at runtime.
    // eslint-disable-next-line import/namespace
    const computedColor = color && ColorTokens[color];
    return <Icon {...rest} color={computedColor} name={name} />;
  },
  args: {
    name: 'close',
    purpose: 'decorative' as const,
  },
};

export const Medium: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    size: '2em',
  },
};

export const Large: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    size: '4em',
  },
};

export const FullScreen: StoryObj<Args> = {
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

export const CustomColor: StoryObj<Args> = {
  ...Default,
  args: {
    ...Default.args,
    color: 'EdsColorBrandGrape400',
    size: '2em',
  },
};

export const InText: StoryObj<Args> = {
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
        ; 1em), but often looks better with the line height (
        <Icon
          {...args}
          name="account-circle"
          purpose="informative"
          size="2em"
          title="icon with 2em line height"
        />
        ; 2em) which is harder to determine. Take a look at the icons available
        in{' '}
        <Link
          href="https://material-ui.com/components/material-icons/"
          rel="noreferrer"
          target="_blank"
        >
          https://material-ui.com/components/material-icons/
        </Link>
        , currently we only support the filled icons.
      </Text>
    );
  },
};

export const WithChildrenSvg: StoryObj<Args> = {
  ...Default,
  args: {
    viewBox: '0 0 24 24',
    children: (
      <path d="M11.6144 8.96051C12.2524 7.61848 13.9514 4.56304 14.905 3C15.5557 3.28671 16.1844 3.61871 16.7863 3.99342C15.9964 5.50177 14.2272 8.6643 13.5144 9.87646C14.7414 9.45266 18.4783 8.3362 20.1657 7.89646C20.4765 8.60506 20.8294 9.55291 21 10.0815C19.0439 10.5737 15.0872 11.5078 13.699 11.8109C15.335 12.2848 17.9431 13.0914 19.8642 13.7408C19.6118 14.2352 19.0345 15.2354 18.6209 15.9122C17.034 15.3311 15.0639 14.5451 13.4794 13.8934C13.9 14.3491 16.8143 17.8329 17.5178 18.7147C17.1322 19.2023 16.4217 20.0157 15.9566 20.5101C14.6058 18.7876 13.1522 16.819 12.0047 15.2149C12.0911 16.0785 12.3412 19.4119 12.43 20.8701C11.764 20.9339 10.8455 20.9841 10.093 21C10.0345 18.7739 10.0065 16.9648 10.0088 15.7253C9.39652 16.6367 7.40068 19.4734 6.97066 20.0544C6.58504 19.7263 5.80213 18.9152 5.48429 18.5985C6.41911 17.2975 8.24201 14.9939 9.14412 13.8957C8.24435 14.1965 4.57518 15.3266 3.53519 15.6046C3.35991 15.0418 3.11685 14.1076 3 13.5334C4.11945 13.2395 7.56661 12.4352 8.98987 12.1322C8.04103 11.5603 5.13607 9.68506 3.88574 8.81013C4.35316 8.17671 4.91872 7.48633 5.43521 6.88481C6.44015 7.60709 8.7772 9.32734 9.5718 9.92203C9.00857 7.9238 8.57388 5.88 8.13918 3.57646C8.9025 3.38437 9.67878 3.24503 10.4622 3.15949C10.6679 4.05949 11.4298 8.09468 11.6144 8.96051Z" />
    ),
  },
};

/**
 * Grid of all the available icons.
 */
const IconsInGrid = () => (
  <div>
    <ul className={styles['icon-grid']}>
      {(Object.keys(icons) as IconName[]).map((name) => {
        return (
          <li className={styles['icon-grid__item']} key={name}>
            <Icon
              className={styles['icon-grid__icon']}
              name={name}
              purpose="decorative"
            />
            <span className={styles['icon-grid__text']}>{name}</span>
            {name === 'warning' && (
              <div className={styles['icon-grid__deprecation']}>
                <Icon
                  className={styles['icon-grid__deprecation-icon']}
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-warning. This will be
                deprecated
              </div>
            )}
            {name === 'check-circle' && (
              <div className={styles['icon-grid__deprecation']}>
                <Icon
                  className={styles['icon-grid__deprecation-icon']}
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-check-circle. This will be
                deprecated
              </div>
            )}
            {name === 'info' && (
              <div className={styles['icon-grid__deprecation']}>
                <Icon
                  className={styles['icon-grid__deprecation-icon']}
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-info. This will be deprecated
              </div>
            )}
            {(name === 'error' || name === 'error-inverted') && (
              <div className={styles['icon-grid__deprecation']}>
                <Icon
                  className={styles['icon-grid__deprecation-icon']}
                  name="status-error"
                  purpose="decorative"
                />
                This has been replaced by status-error. This will be deprecated
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

export const IconGrid: StoryObj = {
  render: () => <IconsInGrid />,
};
