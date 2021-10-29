import { Story } from "@storybook/react/types-6-0";
import React from "react";
import {
  getRecommendedVariants,
  getAllVariantsWithStates,
  getLargeVariantsOnDarkBackgroundWithStates,
} from "../../.storybook/buttonUtils";
import Button from "./button";

const colors = ["alert", "brand", "neutral", "success", "warning"] as const;

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

const Template: Story<Args> = (args) => <Button {...args} />;

export const Primary = Template.bind(null);
Primary.args = {
  children: "Button",
};

export const RecommendedVariants = () =>
  getRecommendedVariants(Button, "Button");

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

export const AllVariants = () => getAllVariantsWithStates("button", "Button");
AllVariants.parameters = gridParameters;

export const LargeVariantsOnDarkBackground = () =>
  getLargeVariantsOnDarkBackgroundWithStates("button", "Button");
LargeVariantsOnDarkBackground.parameters = {
  ...gridParameters,
  backgrounds: {
    default: "dark",
  },
};
