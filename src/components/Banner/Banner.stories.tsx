import type { StoryObj } from "@storybook/react";
import React from "react";
import Button from "../Button";
import Heading from "../Heading";
import Banner from "./Banner";
import styles from "./Banner.stories.module.css";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    elevation: {
      control: {
        type: "radio",
        options: [0, 1],
      },
    },
  },
  args: {
    content:
      "Summit Learning has a full-time team dedicated to constantly improving our curriculum. To see the updates, click into the course.",
    heading:
      "New curriculum updates are available for one or more of your courses.",
  },
};

type Args = React.ComponentProps<typeof Banner> & {
  content: string;
  heading: string;
};

const action = (
  <Button style={{ whiteSpace: "nowrap" }} variant="outline">
    See updates
  </Button>
);

export const Brand: StoryObj<Args> = {
  render: (args) => {
    const { content, heading, ...restArgs } = args;
    return (
      <Banner
        {...restArgs}
        textContent={
          <>
            <Banner.Title as="h1">{heading}</Banner.Title>{" "}
            <Banner.Message>{content}</Banner.Message>
          </>
        }
      />
    );
  },
};

export const Neutral: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "neutral",
  },
};

export const Success: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "success",
  },
};

export const Warning: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "warning",
  },
};

export const Alert: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "alert",
  },
};

export const NoHeadingShort: StoryObj<Args> = {
  ...Brand,
  args: {
    heading: undefined,
  },
};

export const NoContent: StoryObj<Args> = {
  ...Brand,
  args: {
    content: undefined,
  },
};

export const WithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    action: action,
  },
};

export const BrandDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    onDismiss: () => console.log("dismissed!"),
  },
};

export const NeutralDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "neutral",
    onDismiss: () => console.log("dismissed!"),
  },
};

export const SuccessDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "success",
    onDismiss: () => console.log("dismissed!"),
  },
};

export const WarningDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "warning",
    onDismiss: () => console.log("dismissed!"),
  },
};

export const AlertDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    color: "alert",
    onDismiss: () => console.log("dismissed!"),
  },
};

export const DismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    action: action,
    onDismiss: () => console.log("dismissed!"),
  },
};

export const DismissableBelowContent: StoryObj<Args> = {
  render: ({ heading, content }) => (
    <>
      <Heading className={styles.headingBottomSpacing} size="h1">
        Page Title
      </Heading>
      <Banner
        onDismiss={() => console.log("dismissed!")}
        textContent={
          <>
            <Banner.Title as="h1">{heading}</Banner.Title>{" "}
            <Banner.Message>{content}</Banner.Message>
          </>
        }
      />
    </>
  ),
  parameters: {
    snapshot: { skip: true },
  },
};

export const Vertical: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: "vertical",
  },
};

export const VerticalDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: "vertical",
    onDismiss: () => console.log("dismissed!"),
  },
};

export const VerticalWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: "vertical",
    action: action,
  },
};

export const VerticalDismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: "vertical",
    action: action,
    onDismiss: () => console.log("dismissed!"),
  },
};

export const Elevation0: StoryObj<Args> = {
  ...Brand,
  args: {
    elevation: 0,
  },
};

export const VerticalElevation0: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: "vertical",
    elevation: 0,
  },
};
