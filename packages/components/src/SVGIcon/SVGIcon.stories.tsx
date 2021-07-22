import * as React from "react";
import * as allIcons from "./Icons";
import SVGIcon from "./SVGIcon";
import type { Story } from "@storybook/react";
import Text from "../Text";
import Tokens from "@chanzuckerberg/eds-tokens/json/variables.json";
import styles from "./SVGIcon.stories.module.css";

export default {
  title: "SVGIcon - WIP",
  component: SVGIcon,

  argTypes: {
    icon: {
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
    },
    role: {
      control: {
        type: "radio",
        options: ["img", "presentation"],
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "currentColor",
          // TODO: replace with fixed exports of js colors from '@chanzuckerberg/eds-tokens'
          ...Object.keys(Tokens).filter((key) => {
            return key.startsWith("LegacyColor") || key.startsWith("EdsColor");
          }),
        ],
      },
    },
  },
};

type Args = React.ComponentProps<typeof SVGIcon> & {
  icon: keyof typeof allIcons;
};

const Template: Story<Args> = ({ icon, color, ...rest }) => {
  const Icon = allIcons[icon];
  const computedColor = Tokens[color];
  return <Icon {...rest} color={computedColor} role="presentation" />;
};

const defaultArgs = {
  icon: Object.keys(allIcons)[0],
  role: "presentation",
};

export const Small = Template.bind(null);
Small.args = {
  ...defaultArgs,
  size: "1em",
};

export const Medium = Template.bind(null);
Medium.args = {
  ...defaultArgs,
  size: "2em",
};

export const Large = Template.bind(null);
Large.args = {
  ...defaultArgs,
  size: "4em",
};

export const FullScreen = Template.bind(null);
FullScreen.args = {
  ...defaultArgs,
  size: "min(100%, 100vh)",
};

FullScreen.parameters = {
  axe: {
    disabledRules: ["scrollable-region-focusable"],
  },
};

export const InText = ({ icon, ...rest }: Args) => {
  const Icon = allIcons[icon];

  return (
    <Text size="h1">
      The svg icon defaults to the surrounding text size (
      <Icon {...rest} role="presentation" />, 1em), but often looks better with
      the line height (
      <Icon {...rest} role="presentation" size="2rem" />, 2rem) which is harder
      to determine. Take a look at the icons available in{" "}
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
};
InText.args = {
  ...defaultArgs,
};

export const AllIcons = () => {
  return (
    <ul className={styles.allIcons}>
      {Object.entries(allIcons).map(([name, Icon]: [string, any]) => (
        <li className={styles.iconCell} key={name}>
          <Icon block role="presentation" size="2rem" />
          <Text as="span" size="sm">
            {name}
          </Text>
        </li>
      ))}
    </ul>
  );
};
AllIcons.parameters = {
  snapshot: {
    skip: true,
  },
  axe: {
    disabledRules: ["scrollable-region-focusable"],
  },
  controls: {
    hideNoControlsWarning: true,
    /**
     * TODO: should be able to hide controls using the `include` property in
     * parameters, but it's not working.
     *
     * Source: https://storybook.js.org/docs/react/essentials/controls#filtering-controls
     */
    include: [],
  },
};
