import * as React from "react";

import Clickable, { ClickableProps } from "../../src/common/clickable";

import { ButtonProps } from "../../src/Button";
import Heading from "../../src/Heading";
import Text from "../../src/Text";
import styles from "./button.module.css";

export { default } from "../../src/Button/button.stories";

const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];
const colors: Array<ButtonProps["color"]> = [
  "alert",
  "brand",
  "neutral",
  "success",
];
const variants: Array<ButtonProps["variant"]> = ["flat", "outline", "link"];
const states: Array<ClickableProps<"button">["state"] | "disabled"> = [
  "inactive",
  "hover",
  "focus",
  "active",
  "disabled",
];

export const allVariants = ({ children }) => {
  return (
    <ul>
      {sizes.map((size) => (
        <li key={size}>
          {variants.map((variant) => (
            <React.Fragment key={variant}>
              <Heading size="h2">
                {variant} - {size}
              </Heading>
              <table className={styles["variant"]}>
                <tbody>
                  {states.map((state) => (
                    <tr key={state}>
                      <th scope="row">
                        <Text size="body">{state}</Text>
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
          ))}
        </li>
      ))}
    </ul>
  );
};

allVariants.args = {
  children: "Button",
};

allVariants.parameters = {
  axe: {
    skip: true,
  },
  snapshot: {
    skip: true,
  },
};
