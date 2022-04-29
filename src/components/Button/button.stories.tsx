import { StoryObj } from "@storybook/react";
import React from "react";
import {
  statuses,
  getStandardSet,
  geIconRecommendedVariants,
  getLinkRecommendedVariants,
  getDestructiveRecommendedVariants,
  getAllRecommendedVariants,
  getAllVariantsWithStates,
  getLargeVariantsWithStates,
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
    status: {
      control: {
        type: "radio",
        options: statuses,
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

export const PrimaryRecommendedVariants = {
  render: () => getStandardSet(Button, "Button", "primary"),
};

export const SecondaryRecommendedVariants = {
  render: () => getStandardSet(Button, "Button", "secondary"),
};

export const TertiaryRecommendedVariants = {
  render: () => getStandardSet(Button, "Button", "secondary", "neutral"),
};

export const PlainRecommendedVariants = {
  render: () => geIconRecommendedVariants(Button, "Button"),
};

export const LinkRecommendedVariants = {
  render: () => getLinkRecommendedVariants(Button, "Button"),
};

export const DestructiveRecommendedVariants = {
  render: () => getDestructiveRecommendedVariants(Button, "Button"),
};

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

export const LargeVariantsOnGrayBackground = {
  render: () => getLargeVariantsWithStates("button", "Button"),
  parameters: {
    ...gridParameters,
    backgrounds: {
      default: "gray",
    },
  },
};

export const AllRecommendedVariants = {
  render: () => getAllRecommendedVariants(Button, "Button"),
};
