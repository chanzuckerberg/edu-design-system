import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { getRecommendedVariants } from "../../.storybook/buttonUtils.stories";
import ClickableStyle from "../ClickableStyle";
import Heading from "../Heading";
import AddRoundedIcon from "../Icons/AddRounded";
import Text from "../Text";
import Button, { ButtonProps } from "./button";
import styles from "./button.stories.module.css";

const sizes = ["large", "medium", "small"] as const;
const allColors = ["alert", "brand", "neutral", "success", "warning"] as const;
// "link" is ommitted here because it's rendered separately since it only has one size
const variants = ["flat", "outline", "plain"] as const;
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
};

export const RecommendedVariants = () =>
  getRecommendedVariants(Button, "Button");

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
  variant: ButtonProps["variant"],
  headingColor: "white" | "neutral",
  buttonChildren: React.ReactNode,
  size?: ButtonProps["size"],
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
                  we must use ClickableStyle instead of Button */}
                  <ClickableStyle
                    as={"button"}
                    size={size}
                    color={color}
                    variant={variant}
                    state={state}
                    disabled={state === "disabled"}
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

export const AllVariants = () => (
  <ul>
    <li>{renderVariant("link", "neutral", "Button")}</li>
    {sizes.map((size) => (
      <li key={size}>
        {variants.map((variant) =>
          renderVariant(variant, "neutral", "Button", size),
        )}
      </li>
    ))}
  </ul>
);
AllVariants.parameters = gridParameters;

export const LargeVariantsOnDarkBackground = () => (
  <ul>
    <li key="link">{renderVariant("link", "white", "Button")}</li>
    {variants.map((variant) => (
      <li key={variant}>
        {renderVariant(variant, "white", "Button", "large")}
      </li>
    ))}
  </ul>
);
LargeVariantsOnDarkBackground.parameters = {
  ...gridParameters,
  backgrounds: {
    default: "dark",
  },
};
