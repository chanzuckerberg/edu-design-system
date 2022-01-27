import type { StoryObj } from "@storybook/react";
import React from "react";
import Button from "../Button";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  args: {
    spacing: "1x" as const,
    orientation: "horizontal" as const,
    children: (
      <>
        <Button color="neutral" variant="outline">
          Button 1
        </Button>
        <Button>Button 2</Button>
      </>
    ),
  },
};

type Args = React.ComponentProps<typeof ButtonGroup>;

export const Default: StoryObj<Args> = {};

export const SpacingNone: StoryObj<Args> = {
  args: {
    spacing: "none",
  },
};

export const SpacingMax: StoryObj<Args> = {
  args: {
    spacing: "max",
  },
};

export const Vertical: StoryObj<Args> = {
  args: {
    orientation: "vertical",
  },
};

export const WithFiveButtons: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Button color="neutral" variant="outline">
          Button 1
        </Button>
        <Button color="neutral" variant="outline">
          Button 2
        </Button>
        <Button color="neutral" variant="outline">
          Button 3
        </Button>
        <Button color="neutral" variant="outline">
          Button 4
        </Button>
        <Button>Button 5</Button>
      </>
    ),
  },
};
