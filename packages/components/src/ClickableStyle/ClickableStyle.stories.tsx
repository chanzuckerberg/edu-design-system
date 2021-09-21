import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ArrowBackRoundedIcon from "../Icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "../Icons/ArrowForwardRounded";
import ClickableStyle from "./ClickableStyle";

export default {
  title: "ClickableStyle",
  component: ClickableStyle,
};

type Args = React.ComponentProps<typeof ClickableStyle>;

const Template: Story<Args> = (args) => <ClickableStyle {...args} />;

export const ClickableStyleAsAnATag = Template.bind(null);
ClickableStyleAsAnATag.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "ClickableStyle",
};

export const ClickableStyleWithIconOnLeftSide = Template.bind(null);
ClickableStyleWithIconOnLeftSide.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "ClickableStyle",
  icon: {
    iconElement: <ArrowBackRoundedIcon purpose="decorative" />,
    iconHorizontalMargin: "-4px",
  },
};

export const ClickableStyleWithIconOnRightSide = Template.bind(null);
ClickableStyleWithIconOnRightSide.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  children: "ClickableStyle",
  icon: {
    iconElement: <ArrowForwardRoundedIcon purpose="decorative" />,
    iconPlacement: "right",
    iconHorizontalMargin: "-4px",
  },
};

export const ClickableStyleWithOnlyIcon = Template.bind(null);
ClickableStyleWithOnlyIcon.args = {
  as: "a",
  color: "brand",
  variant: "flat",
  size: "medium",
  icon: {
    iconElement: <ArrowForwardRoundedIcon purpose="informative" title="next" />,
    iconHorizontalMargin: "-4px",
  },
};

export const ClickableStyleOutlineVariantWithIcon = Template.bind(null);
ClickableStyleOutlineVariantWithIcon.args = {
  as: "a",
  color: "brand",
  variant: "outline",
  size: "medium",
  children: "ClickableStyle",
  icon: {
    iconElement: <ArrowForwardRoundedIcon purpose="decorative" />,
    iconPlacement: "right",
    iconHorizontalMargin: "-4px",
  },
};

export const ClickableStyleLinkVariantWithIcon = Template.bind(null);
ClickableStyleLinkVariantWithIcon.args = {
  as: "a",
  color: "brand",
  variant: "link",
  size: "medium",
  children: "ClickableStyle",
  icon: {
    iconElement: <ArrowForwardRoundedIcon purpose="decorative" />,
    iconPlacement: "right",
    iconHorizontalMargin: "-4px",
  },
};
