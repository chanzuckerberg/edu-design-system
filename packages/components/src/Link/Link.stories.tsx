import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Clickable from "../Clickable";
import Heading from "../Heading";
import CheckCircleRoundedIcon from "../Icons/CheckCircleRounded";
import Text from "../Text";
import Link, { LinkProps } from "./Link";
import styles from "./Link.stories.module.css";

const sizes = ["small", "medium", "large"] as const;
const allColors = ["alert", "brand", "neutral", "success", "warning"] as const;
const variants = ["flat", "outline", "link"] as const;
const states = ["inactive", "hover", "focus", "active", "disabled"] as const;

// For now, the UI kit only includes alert & brand "flat" buttons.
const flatColors = ["alert", "brand"] as const;

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
        options: allColors,
      },
    },
  },
};

type Args = React.ComponentProps<typeof Link>;

const Template: Story<Args> = (args) => <Link {...args} />;

// TODO: Consolidate with button stories.

const defaultArgs = {
  children: "Link",
  variant: "flat" as const,
  size: "medium" as const,
  color: "brand" as const,
  href: "",
};

export const Primary = Template.bind(null);
Primary.args = {
  ...defaultArgs,
};

export const Secondary = Template.bind(null);
Secondary.args = {
  ...defaultArgs,
  variant: "outline",
};

export const Tertiary = Template.bind(null);
Tertiary.args = {
  ...defaultArgs,
  color: "neutral",
  variant: "outline",
};

export const Destructive = Template.bind(null);
Destructive.args = {
  ...defaultArgs,
  color: "alert",
};

export const PrimarySmall = Template.bind(null);
PrimarySmall.args = {
  ...defaultArgs,
  size: "small",
};

export const SecondarySmall = Template.bind(null);
SecondarySmall.args = {
  ...defaultArgs,
  size: "small",
  variant: "outline",
};

export const TertiarySmall = Template.bind(null);
TertiarySmall.args = {
  ...defaultArgs,
  color: "neutral",
  size: "small",
  variant: "outline",
};

export const LinkButton = Template.bind(null);
LinkButton.args = {
  ...defaultArgs,
  children: "Link Button",
  variant: "link",
};

export const linkInBody: Story<Args> = (args) => (
  <Text size="body">
    This text surrounds the <Link {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInBody.args = {
  ...defaultArgs,
  children: "Link Button",
  variant: "link",
};

export const linkInHeading: Story<Args> = (args) => (
  <Text size="h1">
    This text surrounds the <Link {...args} /> and shows that the link should
    adhere to its appearance
  </Text>
);
linkInHeading.args = {
  ...defaultArgs,
  children: "Link Button",
  variant: "link",
};

export const withDataTestId = Template.bind(null);
withDataTestId.args = {
  ...defaultArgs,
  children: "Link with data-testid",
  color: "alert",
  "data-testid": "fake-test-id",
};

export const linkWithIcon = Template.bind(null);
linkWithIcon.args = {
  ...defaultArgs,
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
  ...defaultArgs,
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
  ...defaultArgs,
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
  size: LinkProps["size"],
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
                    we must use Clickable instead of Link */}
                    <Clickable
                      as={"a"}
                      size={size}
                      color={color}
                      variant={variant}
                      state={state}
                      href=""
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
      <li key={size}>{renderSize(size, "neutral", "Link")}</li>
    ))}
  </ul>
);

allVariants.parameters = gridParameters;

export const mediumVariantsOnDarkBackground = () =>
  renderSize("medium", "white", "Link");

mediumVariantsOnDarkBackground.parameters = {
  ...gridParameters,
  backgrounds: {
    default: "dark",
  },
};
