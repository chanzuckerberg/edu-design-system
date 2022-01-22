import type { StoryObj } from "@storybook/react";
import * as React from "react";
import Button from "../Button";
import Tooltip from "./Tooltip";

const defaultArgs = {
  content: (
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent
      efficitur mauris ac leo semper accumsan.
    </span>
  ),
  children: <Button>Tooltip trigger</Button>,
  placement: "right",
  visible: true,
};

export default {
  title: "Tooltip",
  component: Tooltip,
  args: defaultArgs,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
    placement: {
      control: {
        type: "radio",
        options: ["left", "right", "top", "bottom"],
      },
    },
  },
};

type Args = React.ComponentProps<typeof Tooltip>;

export const LightVariant: StoryObj<Args> = {};

export const DarkVariant: StoryObj<Args> = {
  ...LightVariant,
  args: {
    variant: "dark",
  },
};

export const LeftPlacement: StoryObj<Args> = {
  ...LightVariant,
  args: {
    placement: "left",
    children: <Button style={{ marginLeft: "23rem" }}>Tooltip trigger</Button>,
  },
};

export const TopPlacement: StoryObj<Args> = {
  ...LightVariant,
  args: {
    placement: "top",
    children: <Button style={{ marginTop: "4rem" }}>Tooltip trigger</Button>,
  },
};

export const BottomPlacement: StoryObj<Args> = {
  ...LightVariant,
  args: {
    placement: "bottom",
  },
};

export const LongText: StoryObj<Args> = {
  ...LightVariant,
  args: {
    content: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent
        efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum.
        Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed
        tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu
        leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id
        nulla id, laoreet facilisis est.
      </span>
    ),
  },
};

export const LongButtonText: StoryObj<Args> = {
  ...LightVariant,
  args: {
    children: (
      <Button>Tooltip trigger with longer text to test placement</Button>
    ),
  },
};

export const Interactive = {
  ...LightVariant,
  args: {
    visible: undefined,
  },
  parameters: {
    chromatic: {
      disabledSnapshot: true,
    },
  },
};
