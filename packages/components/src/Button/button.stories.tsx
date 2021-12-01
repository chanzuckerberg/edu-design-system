import { StoryObj } from "@storybook/react";
import React from "react";
import {
  colors,
  getStandardSet,
  getPlainRecommendedVariants,
  getLinkRecommendedVariants,
  getDestructiveRecommendedVariants,
  getAllRecommendedVariants,
  getAllVariantsWithStates,
  getLargeVariantsOnDarkBackgroundWithStates,
} from "../storyUtils/clickableStyleUtils";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "radio",
        options: colors,
      },
    },
  },
};

type Args = React.ComponentProps<typeof Button>;

export const Default: StoryObj<Args> = {
  args: {
    children: "Button",
  },
};

export const PrimaryRecommendedVariants = () =>
  getStandardSet(Button, "Button", "flat");

export const SecondaryRecommendedVariants = () =>
  getStandardSet(Button, "Button", "outline");

export const TertiaryRecommendedVariants = () =>
  getStandardSet(Button, "Button", "outline", "neutral");

export const PlainRecommendedVariants = () =>
  getPlainRecommendedVariants(Button, "Button");

export const LinkRecommendedVariants = () =>
  getLinkRecommendedVariants(Button, "Button");

export const DestructiveRecommendedVariants = () =>
  getDestructiveRecommendedVariants(Button, "Button");

const gridParameters = {
  axe: {
    skip: true,
  },
  // Skip snapshots because this grid has too many components with all the states,
  // and the previous stories generate enough for our needs.
  // These stories are more for visual regression testing.
  snapshot: {
    skip: true,
  },
};

export const AllVariants = {
  render: () => getAllVariantsWithStates("button", "Button"),
  parameters: gridParameters,
};

export const LargeVariantsOnDarkBackground = {
  render: () => getLargeVariantsOnDarkBackgroundWithStates("button", "Button"),
  parameters: {
    ...gridParameters,
    backgrounds: {
      default: "dark",
    },
  },
};

export const AllRecommendedVariants = {
  render: () => getAllRecommendedVariants(Button, "Button"),
};
