import * as React from "react";

import Typography, { TypographyProps } from "./typography";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Typography",
  component: Typography,
};

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind(null);
Heading1.args = {
  bold: true,
  size: "h1",
  children: "Heading 1 24/32",
};

export const Heading2 = Template.bind(null);
Heading2.args = {
  bold: true,
  size: "h2",
  children: "Heading 2 18/24",
};

export const Heading3 = Template.bind(null);
Heading3.args = {
  bold: true,
  size: "h3",
  children: "Heading 3 18/24",
};

export const Heading4 = Template.bind(null);
Heading4.args = {
  bold: true,
  size: "h4",
  children: "Heading 4 14/24",
};

export const Heading5 = Template.bind(null);
Heading5.args = {
  bold: true,
  size: "h5",
  children: "Heading 5 12/20",
};

export const Body = Template.bind(null);
Body.args = {
  size: "body",
  children: "Body paragraph 16/24",
};

export const BodySmall = Template.bind(null);
BodySmall.args = {
  size: "sm",
  children: "Body small 14/20",
};

export const BodyXSmall = Template.bind(null);
BodyXSmall.args = {
  size: "xs",
  children: "Body Xsmall 12/16",
};

export const Caption = Template.bind(null);
Caption.args = {
  size: "caption",
  children: "Caption 12/20",
};

export const Overline = Template.bind(null);
Overline.args = {
  size: "overline",
  children: "Overline 12/20",
};

export const Heading1AsHeading4 = Template.bind(null);
Heading1AsHeading4.args = {
  as: "h1",
  bold: true,
  children: "Heading 1 styled as Heading 4",
  size: "h4",
};

export const Heading4ColorNeutral = Template.bind(null);
Heading4ColorNeutral.args = {
  bold: true,
  children: "Neutral color Heading 4",
  color: "neutral",
  size: "h4",
};
