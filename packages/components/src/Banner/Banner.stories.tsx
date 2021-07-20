// @flow

import * as React from "react";
import Banner from "./Banner";
import Button from "../Button";
import Heading from "../Heading";
import type { Story } from "@storybook/react";

export default {
  title: "Banner",
  component: Banner,
};

type Args = React.ElementProps<typeof Banner> & {
  content: string;
  heading: string;
};

const Template: Story<Args> = (args) => {
  const { content, heading, ...restArgs } = args;
  return (
    <Banner {...restArgs}>
      <Banner.Title as="h1">{heading}</Banner.Title>
      <Banner.Body>{content}</Banner.Body>
    </Banner>
  );
};

const action = (
  <Button style={{ whiteSpace: "nowrap" }} variant="outline">
    See updates
  </Button>
);

const dialogArgs = {
  content:
    "Summit Learning has a full-time team dedicated to constantly improving our curriculum. To see the updates, click into the course.",
  heading:
    "New curriculum updates are available for one or more of your courses.",
};

export const Brand = Template.bind(null);
Brand.args = {
  ...dialogArgs,
};

export const Neutral = Template.bind(null);
Neutral.args = {
  ...dialogArgs,
  color: "neutral",
};

export const Success = Template.bind(null);
Success.args = {
  ...dialogArgs,
  color: "success",
};

export const Warning = Template.bind(null);
Warning.args = {
  ...dialogArgs,
  color: "warning",
};

export const Alert = Template.bind(null);
Alert.args = {
  ...dialogArgs,
  color: "alert",
};

export const LongContent = Template.bind(null);
LongContent.args = {
  ...dialogArgs,
  content:
    "Summit Learning is a research–based approach to education designed to drive student engagement, meaningful learning, and strong student–teacher relationships that prepare students for life beyond the classroom. Created by educators with experience in diverse classrooms, Summit Learning is grounded in decades of research about how children learn. With Summit Learning, students gain mastery of core subjects like math, history, English, and science, while also carefully developing the skills and habits of lifelong learners. The Summit Learning program offers schools customizable curriculum, a range of educational resources and technology tools, professional development for educators, and ongoing coaching and support for schools. The Summit Learning program supports over 80,000 students, 4,000 educators, and nearly 400 schools across the U.S.",
  padding: "4x",
};

export const NoHeadingShort = Template.bind(null);
NoHeadingShort.args = {
  ...dialogArgs,
  heading: null,
};

export const NoHeadingLong = Template.bind(null);
NoHeadingLong.args = {
  ...dialogArgs,
  heading: null,
  content:
    "Summit Learning is a research–based approach to education designed to drive student engagement, meaningful learning, and strong student–teacher relationships that prepare students for life beyond the classroom. Created by educators with experience in diverse classrooms, Summit Learning is grounded in decades of research about how children learn. With Summit Learning, students gain mastery of core subjects like math, history, English, and science, while also carefully developing the skills and habits of lifelong learners. The Summit Learning program offers schools customizable curriculum, a range of educational resources and technology tools, professional development for educators, and ongoing coaching and support for schools. The Summit Learning program supports over 80,000 students, 4,000 educators, and nearly 400 schools across the U.S.",
  padding: "3x",
};

export const NoContent = Template.bind(null);
NoContent.args = {
  ...dialogArgs,
  content: null,
};

export const WithAction = Template.bind(null);
WithAction.args = {
  ...dialogArgs,
  action: action,
};

export const BrandDismissable = Template.bind(null);
BrandDismissable.args = {
  ...dialogArgs,
  onDismiss: () => console.log("dismissed!"),
};

export const NeutralDismissable = Template.bind(null);
NeutralDismissable.args = {
  ...dialogArgs,
  color: "neutral",
  onDismiss: () => console.log("dismissed!"),
};

export const SuccessDismissable = Template.bind(null);
SuccessDismissable.args = {
  ...dialogArgs,
  color: "success",
  onDismiss: () => console.log("dismissed!"),
};

export const WarningDismissable = Template.bind(null);
WarningDismissable.args = {
  ...dialogArgs,
  color: "warning",
  onDismiss: () => console.log("dismissed!"),
};

export const AlertDismissable = Template.bind(null);
AlertDismissable.args = {
  ...dialogArgs,
  color: "alert",
  onDismiss: () => console.log("dismissed!"),
};

export const DismissableWithAction = Template.bind(null);
DismissableWithAction.args = {
  ...dialogArgs,
  action: action,
  onDismiss: () => console.log("dismissed!"),
};

export const DismissableBelowContent = () => (
  <>
    <Heading size="h1" spacing="2x">
      Page Title
    </Heading>
    <Banner onDismiss={() => console.log("dismissed!")}>
      <Banner.Title as="h1">{dialogArgs.heading}</Banner.Title>
      <Banner.Body>{dialogArgs.content}</Banner.Body>
    </Banner>
  </>
);
DismissableBelowContent.parameters = {
  snapshot: { skip: true },
};

export const Vertical = Template.bind(null);
Vertical.args = {
  ...dialogArgs,
  orientation: "vertical",
};

export const VerticalDismissable = Template.bind(null);
VerticalDismissable.args = {
  ...dialogArgs,
  orientation: "vertical",
  onDismiss: () => console.log("dismissed!"),
};

export const VerticalWithAction = Template.bind(null);
VerticalWithAction.args = {
  ...dialogArgs,
  orientation: "vertical",
  action: action,
};

export const VerticalDismissableWithAction = Template.bind(null);
VerticalDismissableWithAction.args = {
  ...dialogArgs,
  orientation: "vertical",
  action: action,
  onDismiss: () => console.log("dismissed!"),
};

export const Elevation0 = Template.bind(null);
Elevation0.args = {
  ...dialogArgs,
  elevation: 0,
};

export const VerticalElevation0 = Template.bind(null);
VerticalElevation0.args = {
  ...dialogArgs,
  orientation: "vertical",
  elevation: 0,
};
