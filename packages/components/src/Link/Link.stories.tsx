import { Story } from "@storybook/react/types-6-0";
import React from "react";
import {
  colors,
  getStandardSet,
  getTextRecommendedVariants,
  getLinkRecommendedVariants,
  getDestructiveRecommendedVariants,
  getAllRecommendedVariants,
  getAllVariantsWithStates,
  getLargeVariantsOnDarkBackgroundWithStates,
} from "../../.storybook/clickableStyleUtils.stories";
import Text from "../Text";
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
};

type Args = React.ComponentProps<typeof Link>;

const Template: Story<Args> = (args) => <Link {...args} />;

const defaultArgs = {
  children: "Link",
  variant: "link" as const,
  color: "brand" as const,
  href: "",
};

export const Default = Template.bind(null);
Default.args = {
  ...defaultArgs,
};

export const linkInBody: Story<Args> = (args) => (
  <Text size="body">
    This text surrounds the <Link {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInBody.args = {
  ...defaultArgs,
};

export const linkInHeading: Story<Args> = (args) => (
  <Text size="h1">
    This text surrounds the <Link {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInHeading.args = {
  ...defaultArgs,
};

export const PrimaryRecommendedVariants = () =>
  getStandardSet(Link, "Link", "flat");

export const SecondaryRecommendedVariants = () =>
  getStandardSet(Link, "Link", "outline");

export const TertiaryRecommendedVariants = () =>
  getStandardSet(Link, "Link", "outline", "neutral");

export const TextRecommendedVariants = () =>
  getTextRecommendedVariants(Link, "Link");

export const LinkRecommendedVariants = () =>
  getLinkRecommendedVariants(Link, "Link");

export const DestructiveRecommendedVariants = () =>
  getDestructiveRecommendedVariants(Link, "Link");

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

export const AllVariants = () => getAllVariantsWithStates("a", "Link");
AllVariants.parameters = gridParameters;

export const LargeVariantsOnDarkBackground = () =>
  getLargeVariantsOnDarkBackgroundWithStates("a", "Link");
LargeVariantsOnDarkBackground.parameters = {
  ...gridParameters,
  backgrounds: {
    default: "dark",
  },
};

export const AllRecommendedVariants = () =>
  getAllRecommendedVariants(Link, "Link");
