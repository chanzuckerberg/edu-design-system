import * as ColorTokens from "@chanzuckerberg/eds-tokens/lib/js/colors";
import type { StoryObj } from "@storybook/react";
import React from "react";
import * as allIcons from "../Icons";
import Text from "../Text";
import SvgIcon from "./SvgIcon";
import styles from "./SvgIcon.stories.module.css";

export default {
  title: "SvgIcon",
  component: SvgIcon,

  argTypes: {
    icon: {
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
    },
    purpose: {
      control: {
        type: "radio",
        options: ["informative", "decorative"],
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
        options: ["currentColor", ...Object.keys(ColorTokens)],
      },
    },
  },
};

type Args = React.ComponentProps<typeof SvgIcon> & {
  icon: keyof typeof allIcons;
};

const Template: StoryObj<Args> = {
  render: ({ icon, color, ...rest }) => {
    const Icon = allIcons[icon];
    const computedColor = color && ColorTokens[color];
    return <Icon {...rest} color={computedColor} />;
  },
  args: {
    icon: Object.keys(allIcons)[0] as keyof typeof allIcons,
    purpose: "decorative" as const,
  },
};

export const Small: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    size: "1em",
  },
};

export const Medium: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    size: "2em",
  },
};

export const Large: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    size: "4em",
  },
};

export const FullScreen: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    size: "min(100%, 100vh)",
  },
  parameters: {
    axe: {
      disabledRules: ["scrollable-region-focusable"],
    },
  },
};

export const CustomColor: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    color: "EdsColorBrand400",
  },
};

export const CustomViewBox: StoryObj<Args> = {
  ...Template,
  args: {
    ...Template.args,
    viewBox: "4 4 16 16",
  },
};

export const InText: StoryObj<Args> = {
  render: ({ icon, ...rest }: Args) => {
    const Icon = allIcons[icon];

    return (
      <Text size="h1">
        The svg icon defaults to the surrounding text size (
        <Icon
          {...rest}
          purpose="informative"
          title="icon with 1em line height"
        />
        , 1em), but often looks better with the line height (
        <Icon
          {...rest}
          purpose="informative"
          title="icon with 2em line height"
          size="2rem"
        />
        , 2rem) which is harder to determine. Take a look at the icons available
        in{" "}
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
  args: {
    ...Template.args,
  },
};

export const AllIcons: StoryObj<Args> = {
  render: () => {
    return (
      <ul className={styles.allIcons}>
        {Object.entries(allIcons).map(([name, Icon]: [string, any]) => (
          <li className={styles.iconCell} key={name}>
            <Icon block type="decorative" size="2rem" />
            <Text as="span" size="sm">
              {name}
            </Text>
          </li>
        ))}
      </ul>
    );
  },
  parameters: {
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
  },
};
