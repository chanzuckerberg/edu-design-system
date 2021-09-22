import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ClickableStyle from "../ClickableStyle";
import Heading from "../Heading";
import AddRoundedIcon from "../Icons/AddRounded";
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

const defaultArgs = {
  children: "Link",
  variant: "link" as const,
  color: "brand" as const,
  href: "",
};

export const StandardLink = Template.bind(null);
StandardLink.args = {
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
                    we must use ClickableStyle instead of Link */}
                    <ClickableStyle
                      as={"a"}
                      size={size}
                      color={color}
                      variant={variant}
                      state={state}
                      href=""
                    >
                      {children}
                    </ClickableStyle>
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

// These last few stories are more for testing purposes than for guidance/examples.

export const linkWithIcon = Template.bind(null);
linkWithIcon.args = {
  ...defaultArgs,
  children: (
    <>
      Link <AddRoundedIcon className={styles.icon} purpose="decorative" />
    </>
  ),
};

export const buttonVariantWithIcon = Template.bind(null);
buttonVariantWithIcon.args = {
  ...defaultArgs,
  variant: "flat",
  children: (
    <>
      Link <AddRoundedIcon className={styles.icon} purpose="decorative" />
    </>
  ),
};

export const buttonVariantWithOnlyIcon = Template.bind(null);
buttonVariantWithOnlyIcon.args = {
  children: <AddRoundedIcon purpose="informative" title="add" />,
  variant: "flat",
};

export const withDataTestId = Template.bind(null);
withDataTestId.args = {
  ...defaultArgs,
  "data-testid": "fake-test-id",
};

export const withClassName = Template.bind(null);
withClassName.args = {
  ...defaultArgs,
  className: "example-className",
};
