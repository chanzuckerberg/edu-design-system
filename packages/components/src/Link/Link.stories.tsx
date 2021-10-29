import { Story } from "@storybook/react/types-6-0";
import React from "react";
import {
  getRecommendedVariants,
  getAllVariantsWithStates,
  getLargeVariantsOnDarkBackgroundWithStates,
} from "../../.storybook/buttonUtils";
import Text from "../Text";
import Link from "./Link";

const colors = ["alert", "brand", "neutral", "success", "warning"] as const;

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

export const RecommendedVariants = () => getRecommendedVariants(Link, "Link");

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
