import type { StoryObj } from "@storybook/react";
import React from "react";
// TODO: point to new color-tokens
import * as ColorTokens from "../../../lib/tokens/ts/colors";
import { ALL_ICONS } from "../../util/allIcons";
import Text from "../Text";
import { Icon, IconProps } from "./Icon";
import styles from "./Icon.stories.module.css";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
        options: ALL_ICONS,
      },
    },
    color: {
      control: {
        type: "select",
        options: ["currentColor", ...Object.keys(ColorTokens)],
      },
    },
  },
};

export const Default: StoryObj<IconProps> = {
  render: ({ name, color, ...rest }) => {
    const computedColor = color && ColorTokens[color];
    return <Icon {...rest} color={computedColor} name={name} />;
  },
  args: {
    name: "close",
    purpose: "decorative" as const,
  },
};

export const Medium: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: "2em",
  },
};

export const Large: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: "4em",
  },
};

export const FullScreen: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    size: "100vh",
  },
  parameters: {
    axe: {
      disabledRules: ["scrollable-region-focusable"],
    },
  },
};

export const CustomColor: StoryObj<IconProps> = {
  ...Default,
  args: {
    ...Default.args,
    color: "EdsColorBrand400",
    size: "2em",
  },
};

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
        ; 1em), but often looks better with the line height (
        <Icon
          {...args}
          name="account-circle"
          purpose="informative"
          size="2em"
          title="icon with 2em line height"
        />
        ; 2em) which is harder to determine. Take a look at the icons available
        in{" "}
        <a
          href="https://material-ui.com/components/material-icons/"
          rel="noreferrer"
          target="_blank"
        >
          https://material-ui.com/components/material-icons/
        </a>
        , currently we only support the filled icons.
      </Text>
    );
  },
};

export const IconGrid: StoryObj = {
  render: () => (
    <div>
      <ul className={styles["icon-grid"]}>
        {ALL_ICONS.map((name, index) => {
          return (
            <li
              className={styles["icon-grid__item"]}
              key={`icon-grid-item-${index}`}
            >
              <Icon name={name} purpose="decorative" />
              <span className={styles["icon-grid__text"]}>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  ),
};
