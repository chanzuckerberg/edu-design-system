import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Clickable from "../Clickable";
import Heading from "../Heading";
import CheckCircleRoundedIcon from "../Icons/CheckCircleRounded";
import Text from "../Text";
import Button, { ButtonProps } from "./button";
import styles from "./button.stories.module.css";

const sizes = ["small", "medium", "large"] as const;
const allColors = ["alert", "brand", "neutral", "success", "warning"] as const;
const variants = ["flat", "outline", "link"] as const;
const states = ["inactive", "hover", "focus", "active", "disabled"] as const;

// For now, the UI kit only includes alert & brand "flat" buttons
const flatColors = ["alert", "brand"] as const;

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
        options: allColors,
      },
    },
  },
};

type Args = React.ComponentProps<typeof Button>;

const Template: Story<Args> = (args) => <Button {...args} />;

export const Primary = Template.bind(null);
Primary.args = {
  children: "Button",
  variant: "flat",
};

export const Secondary = Template.bind(null);
Secondary.args = {
  children: "Button",
  variant: "outline",
};

export const Tertiary = Template.bind(null);
Tertiary.args = {
  children: "Button",
  color: "neutral",
  variant: "outline",
};

export const Destructive = Template.bind(null);
Destructive.args = {
  children: "Button",
  color: "alert",
  variant: "flat",
};

export const PrimarySmall = Template.bind(null);
PrimarySmall.args = {
  children: "Button",
  size: "small",
  variant: "flat",
};

export const SecondarySmall = Template.bind(null);
SecondarySmall.args = {
  children: "Button",
  size: "small",
  variant: "outline",
};

export const TertiarySmall = Template.bind(null);
TertiarySmall.args = {
  children: "Button",
  color: "neutral",
  size: "small",
  variant: "outline",
};

export const Link = Template.bind(null);
Link.args = {
  children: "Link Button",
  variant: "link",
};

export const linkInBody: Story<Args> = (args) => (
  <Text size="body">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInBody.args = {
  children: "Link Button",
  color: "brand",
  variant: "link",
};

export const linkInHeading: Story<Args> = (args) => (
  <Text size="h1">
    This text surrounds the <Button {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInHeading.args = {
  children: "Link Button",
  variant: "link",
  color: "brand",
};

export const withDataTestId = Template.bind(null);
withDataTestId.args = {
  children: "Button with data-testid",
  color: "alert",
  variant: "flat",
  "data-testid": "fake-test-id",
};

export const linkWithIcon = Template.bind(null);
linkWithIcon.args = {
  children: (
    <>
      Link with icon <CheckCircleRoundedIcon purpose="decorative" />
    </>
  ),
  color: "success",
  variant: "link",
};

export const outlineWithIcon = Template.bind(null);
outlineWithIcon.args = {
  children: (
    <>
      Outline with icon <CheckCircleRoundedIcon purpose="decorative" />
    </>
  ),
  color: "warning",
  variant: "outline",
};

export const withFakeClassName = Template.bind(null);
withFakeClassName.args = {
  children: "With fake className",
  color: "warning",
  variant: "outline",
  className: "fake-className",
};

// Show grids with all variants

const gridParameters = {
  axe: {
    skip: true,
  },
  snapshot: {
    skip: true,
  },
};

const renderSize = (
  size: ButtonProps["size"],
  textColor: "white" | "neutral",
  children: React.ReactNode,
) =>
  variants.map((variant) => {
    const colors = variant === "flat" ? flatColors : allColors;

    return (
      <React.Fragment key={variant}>
        <Heading size="h2" color={textColor}>
          {variant} - {size}
        </Heading>
        <table className={styles.variant}>
          <tbody>
            {states.map((state) => (
              <tr key={state}>
                <th scope="row">
                  <Text size="body" color={textColor}>
                    {state}
                  </Text>
                </th>
                {colors.map((color) => (
                  <td key={color} className={styles.color}>
                    {/* To pass the "state" prop (only used for demonstration in storybook),
                    we must use Clickable instead of Button */}
                    <Clickable
                      as={"button"}
                      size={size}
                      color={color}
                      variant={variant}
                      state={state}
                      disabled={state === "disabled"}
                    >
                      {children}
                    </Clickable>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  });

export const allVariants = () => (
  <ul>
    {sizes.map((size) => (
      <li key={size}>{renderSize(size, "neutral", "Button")}</li>
    ))}
  </ul>
);

allVariants.parameters = gridParameters;

export const mediumVariantsOnDarkBackground = () =>
  renderSize("medium", "white", "Button");

mediumVariantsOnDarkBackground.parameters = {
  ...gridParameters,
  backgrounds: {
    default: "dark",
  },
};
