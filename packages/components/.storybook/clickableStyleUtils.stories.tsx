import React from "react";
import Button from "../src/Button";
import { ClickableStyleProps } from "../src/ClickableStyle";
import ClickableStyle from "../src/ClickableStyle";
import Heading from "../src/Heading";
import AddRoundedIcon from "../src/Icons/AddRounded";
import ArrowBackRoundedIcon from "../src/Icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "../src/Icons/ArrowForwardRounded";
import OpenInNewRoundedIcon from "../src/Icons/OpenInNewRounded";
import Link from "../src/Link";
import Text from "../src/Text";
import styles from "./clickableStyleUtils.stories.module.css";

export const getStandardSet = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
  variant: ClickableStyleProps<"button">["variant"],
  color: ClickableStyleProps<"button">["color"] = "brand",
) => (
  <ul>
    <li>
      <Heading size="h3" spacing="2x">
        Size Large
      </Heading>
      <ul className="grid gap-y-4">
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
        <li className="mb-4">
          <Component color={color} variant={variant}>
            {componentName}
            <ArrowForwardRoundedIcon
              className={styles.arrowForwardIcon}
              purpose="decorative"
            />
          </Component>
        </li>
      </ul>
    </li>

    <li>
      <Heading size="h3" spacing="2x">
        Size Medium
      </Heading>
      <div className="mb-4">
        <Component color={color} variant={variant} size="medium">
          {componentName}
        </Component>
      </div>
    </li>

    <li>
      <Heading size="h3" spacing="2x">
        Size Small
      </Heading>
      <div className="mb-4">
        <Component color={color} variant={variant} size="small">
          {componentName}
        </Component>
      </div>
    </li>
  </ul>
);

export const getPlainRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <ul>
    <li>
      <Heading size="h3" spacing="2x">
        Size Large
      </Heading>
      <ul className="grid gap-y-4">
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
        <li className="mb-4">
          <Component variant="plain">
            <ArrowForwardRoundedIcon
              className="mx-[-0.4em]"
              purpose="informative"
              title="forward"
            />
          </Component>
        </li>
      </ul>
    </li>

    <li>
      <Heading size="h3" spacing="2x">
        Size Medium
      </Heading>
      <ul className="grid gap-y-4">
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
              className="mx-[-0.55em]"
            />
          </Component>
        </li>
      </ul>
    </li>
  </ul>
);

export const getLinkRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <ul className="grid gap-y-4">
    <li>
      <Component variant="link">{componentName}</Component>
    </li>
    <li>
      <Component variant="link">
        {componentName}
        <OpenInNewRoundedIcon
          className="ml-1"
          purpose="informative"
          title="opens in a new tab"
        />
      </Component>
    </li>
  </ul>
);

export const getDestructiveRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <>
    <Heading size="h3" spacing="2x">
      Size Large
    </Heading>
    <ul className="grid gap-y-4">
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
  </>
);

export const getAllRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <ul className="grid gap-y-8">
    <li>
      <Heading spacing="2x" size="h2">
        Primary
      </Heading>
      {getStandardSet(Component, componentName, "flat")}
    </li>

    <li>
      <Heading spacing="2x" size="h2">
        Secondary
      </Heading>
      {getStandardSet(Component, componentName, "outline")}
    </li>

    <li>
      <Heading spacing="2x" size="h2">
        Tertiary
      </Heading>
      {getStandardSet(Component, componentName, "outline", "neutral")}
    </li>

    <li>
      <Heading spacing="2x" size="h2">
        Plain
      </Heading>
      {getPlainRecommendedVariants(Component, componentName)}
    </li>

    <li>
      <Heading spacing="2x" size="h2">
        Link
      </Heading>
      {getLinkRecommendedVariants(Component, componentName)}
    </li>

    <li>
      <Heading spacing="2x" size="h2">
        Destructive
      </Heading>
      {getDestructiveRecommendedVariants(Component, componentName)}
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
  variant: ClickableStyleProps<"button">["variant"],
  headingColor: "white" | "neutral",
  buttonChildren: "Button" | "Link",
  size?: ClickableStyleProps<"button">["size"],
) => {
  const states = tag === "button" ? buttonStates : linkStates;
  const icon = variant === "plain" && (
    <AddRoundedIcon className="ml-2" purpose="decorative" />
  );

  return (
    <React.Fragment key={variant}>
      <Heading size="h2" color={headingColor}>
        {variant}
        {size && ` - ${size}`}
      </Heading>
      <table className="mb-5">
        <tbody>
          {states.map((state) => (
            <tr key={state}>
              <th scope="row">
                <Text size="body" color={headingColor}>
                  {state}
                </Text>
              </th>
              {colors.map((color) => (
                <td key={color} className="p-2">
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
