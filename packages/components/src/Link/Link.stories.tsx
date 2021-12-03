import { StoryObj } from "@storybook/react";
import React from "react";
import Text from "../Text";
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
import Link from "./Link";

export default {
  title: "Link",
  component: Link,
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
  args: {
    children: "Link",
    variant: "link" as const,
    color: "brand" as const,
    href: "",
  },
};

type Args = React.ComponentProps<typeof Link>;

export const Default: StoryObj<Args> = {};

export const LinkInBody: StoryObj<Args> = {
  render: (args) => (
    <Text size="body">
      This text surrounds the <Link {...args} /> and shows that the link should
      adhere to its appearance
    </Text>
  ),
};

export const LinkInHeading: StoryObj<Args> = {
  render: (args) => (
    <Text size="h1">
      This text surrounds the <Link {...args} /> and shows that the link should
      adhere to its appearance
    </Text>
  ),
};

export const PrimaryRecommendedVariants = {
  render: () => getStandardSet(Link, "Link", "flat"),
};

export const SecondaryRecommendedVariants = {
  render: () => getStandardSet(Link, "Link", "outline"),
};

export const TertiaryRecommendedVariants = {
  render: () => getStandardSet(Link, "Link", "outline", "neutral"),
};

export const PlainRecommendedVariants = {
  render: () => getPlainRecommendedVariants(Link, "Link"),
};

export const LinkRecommendedVariants = {
  render: () => getLinkRecommendedVariants(Link, "Link"),
};

export const DestructiveRecommendedVariants = {
  render: () => getDestructiveRecommendedVariants(Link, "Link"),
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
  render: () => getAllVariantsWithStates("a", "Link"),
  parameters: gridParameters,
};

export const LargeVariantsOnDarkBackground = {
  render: () => getLargeVariantsOnDarkBackgroundWithStates("a", "Link"),
  parameters: {
    ...gridParameters,
    backgrounds: {
      default: "dark",
    },
  },
};

export const AllRecommendedVariants = {
  render: () => getAllRecommendedVariants(Link, "Link"),
};
