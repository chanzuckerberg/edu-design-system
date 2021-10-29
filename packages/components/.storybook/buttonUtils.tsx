import React from "react";
import Button, { ButtonProps } from "../src/Button";
import ClickableStyle from "../src/ClickableStyle";
import Heading from "../src/Heading";
import AddRoundedIcon from "../src/Icons/AddRounded";
import ArrowBackRoundedIcon from "../src/Icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "../src/Icons/ArrowForwardRounded";
import OpenInNewRoundedIcon from "../src/Icons/OpenInNewRounded";
import Link from "../src/Link";
import Text from "../src/Text";
import styles from "./buttonUtils.stories.module.css";

const getStandardSet = (
  headingText: "Primary" | "Secondary" | "Tertiary",
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
  variant: ButtonProps["variant"],
  color: ButtonProps["color"] = "brand",
) => (
  <li className={styles.recommendedVariantSet}>
    <Heading className={styles.recommendedHeading} size="h2">
      {headingText}
    </Heading>
    <ul>
      <li>
        <Component color={color} variant={variant}>
          {componentName}
        </Component>
      </li>
      <li>
        <Component color={color} variant={variant}>
          <ArrowBackRoundedIcon
            className={styles.arrowBackIcon}
            purpose="decorative"
          />{" "}
          {componentName}
        </Component>
      </li>
      <li>
        <Component color={color} variant={variant}>
          {componentName}
          <ArrowForwardRoundedIcon
            className={styles.arrowForwardIcon}
            purpose="decorative"
          />
        </Component>
      </li>
      <li>
        <Component color={color} variant={variant} size="medium">
          {componentName}
        </Component>
      </li>
      <li>
        <Component color={color} variant={variant} size="small">
          {componentName}
        </Component>
      </li>
    </ul>
  </li>
);

export const getRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <ul>
    {getStandardSet("Primary", Component, componentName, "flat")}

    {getStandardSet("Secondary", Component, componentName, "outline")}

    {getStandardSet("Tertiary", Component, componentName, "outline", "neutral")}

    <li className={styles.recommendedVariantSet}>
      <Heading className={styles.recommendedHeading} size="h2">
        Plain
      </Heading>
      <ul>
        <li>
          <Component variant="plain">
            <ArrowBackRoundedIcon
              className={styles.arrowBackIcon}
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
        <li>
          <Component variant="plain">
            {componentName}
            <ArrowForwardRoundedIcon
              className={styles.arrowForwardIcon}
              purpose="decorative"
            />
          </Component>
        </li>
        <li>
          <Component variant="plain">
            <ArrowForwardRoundedIcon
              className={styles.onlyArrowIcon}
              purpose="informative"
              title="forward"
            />
          </Component>
        </li>

        <li>
          <Component variant="plain" size="medium">
            <ArrowBackRoundedIcon
              className={styles.arrowBackIcon}
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
        <li>
          <Component variant="plain" size="medium">
            {componentName}
            <ArrowForwardRoundedIcon
              className={styles.arrowForwardIcon}
              purpose="decorative"
            />
          </Component>
        </li>
        <li>
          <Component variant="plain" size="medium">
            <AddRoundedIcon
              purpose="informative"
              title="add"
              className={styles.onlyAddIcon}
            />
          </Component>
        </li>
      </ul>
    </li>

    <li className={styles.recommendedVariantSet}>
      <Heading className={styles.recommendedHeading} size="h2">
        Link
      </Heading>
      <ul>
        <li>
          <Component variant="link">{componentName}</Component>
        </li>
        <li>
          <Component variant="link">
            {componentName}
            <OpenInNewRoundedIcon
              className={styles.openInNewIcon}
              purpose="informative"
              title="opens in a new tab"
            />
          </Component>
        </li>
      </ul>
    </li>

    <li className={styles.recommendedVariantSet}>
      <Heading className={styles.recommendedHeading} size="h2">
        Destructive
      </Heading>
      <ul>
        <li>
          <Component variant="flat" color="alert">
            {componentName}
          </Component>
        </li>
        <li>
          <Component variant="flat" color="alert">
            <ArrowBackRoundedIcon
              className={styles.arrowBackIcon}
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
      </ul>
    </li>
  </ul>
);

const sizes = ["large", "medium", "small"] as const;
// "link" is ommitted here because it's rendered separately since it only has one size
const variants = ["flat", "outline", "plain"] as const;
const colors = ["alert", "brand", "neutral", "success", "warning"] as const;
const linkStates = ["inactive", "hover", "focus", "active"] as const;
const buttonStates = [...linkStates, "disabled"] as const;

const getVariantWithStates = (
  tag: "button" | "a",
  variant: ButtonProps["variant"],
  headingColor: "white" | "neutral",
  buttonChildren: "Button" | "Link",
  size?: ButtonProps["size"],
) => {
  const states = tag === "button" ? buttonStates : linkStates;
  const icon =
    variant === "plain" ? (
      <AddRoundedIcon className={styles.iconButton} purpose="decorative" />
    ) : null;

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
                  we must use ClickableStyle instead of Button or Link */}
                  <ClickableStyle
                    as={tag}
                    size={size}
                    color={color}
                    variant={variant}
                    state={state}
                    disabled={state === "disabled"}
                    href={tag === "a" ? "" : undefined}
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

export const getAllVariantsWithStates = (
  tag: "button" | "a",
  buttonChildren: "Button" | "Link",
) => (
  <ul>
    <li>{getVariantWithStates(tag, "link", "neutral", buttonChildren)}</li>
    {sizes.map((size) => (
      <li key={size}>
        {variants.map((variant) =>
          getVariantWithStates(tag, variant, "neutral", buttonChildren, size),
        )}
      </li>
    ))}
  </ul>
);

export const getLargeVariantsOnDarkBackgroundWithStates = (
  tag: "button" | "a",
  buttonChildren: "Button" | "Link",
) => (
  <ul>
    <li>{getVariantWithStates(tag, "link", "white", buttonChildren)}</li>
    {variants.map((variant) => (
      <li key={variant}>
        {getVariantWithStates(tag, variant, "white", buttonChildren, "large")}
      </li>
    ))}
  </ul>
);
