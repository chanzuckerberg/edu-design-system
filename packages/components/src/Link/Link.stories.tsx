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
// "link" is ommitted here because it's rendered separately since it only has one size
const variants = ["flat", "outline", "plain"] as const;
// "disabled" is ommitted here because <a> tags can't actually be disabled
const states = ["inactive", "hover", "focus", "active"] as const;

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

export const plainMedium = Template.bind(null);
plainMedium.args = {
  children: (
    <>
      Link <AddRoundedIcon className={styles.iconButton} purpose="decorative" />
    </>
  ),
  color: "brand",
  size: "medium",
  variant: "plain",
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

const renderVariant = (
  variant: LinkProps["variant"],
  headingColor: "white" | "neutral",
  buttonChildren: React.ReactNode,
  size?: LinkProps["size"],
) => {
  const colors = variant === "flat" ? flatColors : allColors;
  const icon = variant === "plain" && (
    <AddRoundedIcon className={styles.iconButton} purpose="decorative" />
  );

  return (
    <React.Fragment key={variant}>
      <Heading size="h2" color={headingColor}>
        {variant}
        {size && ` - ${size}`}
      </Heading>
      <table className={styles.variant}>
        <tbody>
          {states.map((state) => (
            <tr key={state}>
              <th scope="row">
                <Text size="body" color={headingColor}>
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
                    {buttonChildren}
                    {icon}
                  </ClickableStyle>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export const allVariants = () => (
  <ul>
    {sizes.map((size) => (
      <li key={size}>
        {variants.map((variant) =>
          renderVariant(variant, "neutral", "Link", size),
        )}
      </li>
    ))}
    <li>{renderVariant("link", "neutral", "Link")}</li>
  </ul>
);
allVariants.parameters = gridParameters;

export const largeVariantsOnDarkBackground = () => (
  <ul>
    {variants.map((variant) => (
      <li key={variant}>{renderVariant(variant, "white", "Link", "large")}</li>
    ))}
    <li key="link">{renderVariant("link", "white", "Link")}</li>
  </ul>
);
largeVariantsOnDarkBackground.parameters = {
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
      Link <AddRoundedIcon className={styles.iconLink} purpose="decorative" />
    </>
  ),
};

export const buttonVariantWithIcon = Template.bind(null);
buttonVariantWithIcon.args = {
  ...defaultArgs,
  variant: "flat",
  children: (
    <>
      Link <AddRoundedIcon className={styles.iconButton} purpose="decorative" />
    </>
  ),
};

export const plainWithOnlyIcon = Template.bind(null);
plainWithOnlyIcon.args = {
  children: <AddRoundedIcon purpose="informative" title="add" />,
  variant: "plain",
};
