import { StoryObj } from "@storybook/react";
import React from "react";
import Heading from "./Heading";

export default {
  component: Heading,
};

type Args = React.ComponentProps<typeof Heading>;

export const Heading1: StoryObj<Args> = {
  args: {
    size: "h1",
    children: "Heading 1 24/32",
  },
};

export const Heading2: StoryObj<Args> = {
  args: {
    size: "h2",
    children: "Heading 2 18/24",
  },
};

export const Heading3: StoryObj<Args> = {
  args: {
    size: "h3",
    children: "Heading 3 16/24",
  },
};

export const Heading4: StoryObj<Args> = {
  args: {
    size: "h4",
    children: "Heading 4 14/24",
  },
};

export const Heading5: StoryObj<Args> = {
  args: {
    size: "h5",
    children: "Heading 5 12/20",
  },
};

export const Heading1AsHeading4: StoryObj<Args> = {
  args: {
    as: "h1",
    children: "Heading 1 styled as Heading 4",
    size: "h4",
  },
};

export const Heading4ColorNeutral: StoryObj<Args> = {
  args: {
    children: "Neutral color Heading 4",
    color: "neutral",
    size: "h4",
  },
};
