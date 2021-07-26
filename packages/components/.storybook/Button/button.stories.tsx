import Clickable, { ClickableProps } from "../../src/Clickable";
import { ButtonProps } from "../../src/Button";
import Heading from "../../src/Heading";
import React from "react";
import Text from "../../src/Text";
import styles from "./button.module.css";

export { default } from "../../src/Button/button.stories";

const defaultParameters = {
  axe: {
    skip: true,
  },
  snapshot: {
    skip: true,
  },
};

const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];
const colors: Array<ButtonProps["color"]> = [
  "alert",
  "brand",
  "neutral",
  "success",
  "warning",
];
const variants: Array<ButtonProps["variant"]> = ["flat", "outline", "link"];
const states: Array<ClickableProps<"button">["state"] | "disabled"> = [
  "inactive",
  "hover",
  "focus",
  "active",
  "disabled",
];

const renderSize = (
  size: ButtonProps["size"],
  textColor: "white" | "neutral",
  children,
) =>
  variants.map((variant) => (
    <React.Fragment key={variant}>
      <Heading size="h2" color={textColor}>
        {variant} - {size}
      </Heading>
      <table className={styles["variant"]}>
        <tbody>
          {states.map((state) => (
            <tr key={state}>
              <th scope="row">
                <Text size="body" color={textColor}>
                  {state}
                </Text>
              </th>
              {colors.map((color) => (
                <td key={color} className={styles["color"]}>
                  <Clickable
                    as="button"
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
  ));

export const allVariants = ({ children }) => (
  <ul>
    {sizes.map((size) => (
      <li key={size}>{renderSize(size, "neutral", children)}</li>
    ))}
  </ul>
);

allVariants.args = {
  children: "Button",
};

allVariants.parameters = defaultParameters;

export const mediumVariantsOnDarkBackground = ({ children }) =>
  renderSize("medium", "white", children);

mediumVariantsOnDarkBackground.args = {
  children: "Button",
};

mediumVariantsOnDarkBackground.parameters = {
  ...defaultParameters,
  backgrounds: {
    default: "dark",
  },
};
