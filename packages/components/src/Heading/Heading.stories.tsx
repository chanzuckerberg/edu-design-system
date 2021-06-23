import * as React from "react";

import Heading from "./Heading";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Heading",
  component: Heading,
};

type Args = React.ComponentProps<typeof Heading>;

const Template: Story<Args> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind(null);
Heading1.args = {
  size: "h1",
  children: "Heading 1 24/32",
};

export const Heading2 = Template.bind(null);
Heading2.args = {
  size: "h2",
  children: "Heading 2 18/24",
};

export const Heading3 = Template.bind(null);
Heading3.args = {
  size: "h3",
  children: "Heading 3 16/24",
};

export const Heading4 = Template.bind(null);
Heading4.args = {
  size: "h4",
  children: "Heading 4 14/24",
};

export const Heading5 = Template.bind(null);
Heading5.args = {
  size: "h5",
  children: "Heading 5 12/20",
};

export const Heading1AsHeading4 = Template.bind(null);
Heading1AsHeading4.args = {
  as: "h1",
  children: "Heading 1 styled as Heading 4",
  size: "h4",
};

export const Heading4ColorNeutral = Template.bind(null);
Heading4ColorNeutral.args = {
  children: "Neutral color Heading 4",
  color: "neutral",
  size: "h4",
};

export const HeadingWithMultipleDivs = Template.bind(null);
HeadingWithMultipleDivs.args = {
  size: "h3",
  children: (
    <>
      <div>Heading in a Div</div>&nbsp;<div>Followed by Another Div</div>
    </>
  ),
};
