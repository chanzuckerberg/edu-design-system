import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
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
  children: <Button className="mx-32 my-32">Tooltip trigger</Button>,
  placement: "right",
  visible: true,
};

export default {
  title: "Tooltip",
  component: Tooltip,
  args: defaultArgs,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tooltip>;

export const LightVariant: StoryObj<Args> = {};

export const DarkVariant: StoryObj<Args> = {
  args: {
    variant: "dark",
  },
};

export const LeftPlacement: StoryObj<Args> = {
  args: {
    placement: "left",
    children: <Button className="ml-96 my-32">Tooltip trigger</Button>,
  },
};

export const TopPlacement: StoryObj<Args> = {
  args: {
    placement: "top",
    children: <Button className="mt-32 ml-32">Tooltip trigger</Button>,
  },
};

export const BottomPlacement: StoryObj<Args> = {
  args: {
    placement: "bottom",
    children: <Button className="mb-32 ml-32">Tooltip trigger</Button>,
  },
};

export const LongText: StoryObj<Args> = {
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
  args: {
    children: (
      <Button className="my-20">
        Tooltip trigger with longer text to test placement
      </Button>
    ),
  },
};

export const Interactive = {
  args: {
    visible: undefined,
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
};
