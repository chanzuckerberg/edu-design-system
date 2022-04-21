import React from "react";
import Button from "../Button";
import { ClickableStyleProps } from "../ClickableStyle";
import ClickableStyle from "../ClickableStyle";
import Heading from "../Heading";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import styles from "./clickableStyleUtils.module.css";

export const getStandardSet = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
  variant: ClickableStyleProps<"button">["variant"],
  status: ClickableStyleProps<"button">["status"] = "brand",
) => (
  <ul>
    <li>
      <Heading className={styles.headingBottomSpacing} size="h3">
        Size Large
      </Heading>
      <ul className="grid gap-y-4">
        <li>
          <Component status={status} variant={variant}>
            {componentName}
          </Component>
        </li>
        <li>
          <Component status={status} variant={variant}>
            <Icon
              className={styles.arrowBackIcon}
              name="arrow-back"
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
        <li className={styles.headingBottomSpacing}>
          <Component status={status} variant={variant}>
            {componentName}
            <Icon
              className={styles.arrowForwardIcon}
              name="arrow-forward"
              purpose="decorative"
            />
          </Component>
        </li>
      </ul>
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h3">
        Size Medium
      </Heading>
      <div className={styles.headingBottomSpacing}>
        <Component size="md" status={status} variant={variant}>
          {componentName}
        </Component>
      </div>
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h3">
        Size Small
      </Heading>
      <div className={styles.headingBottomSpacing}>
        <Component size="sm" status={status} variant={variant}>
          {componentName}
        </Component>
      </div>
    </li>
  </ul>
);

export const geIconRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
  <ul>
    <li>
      <Heading className={styles.headingBottomSpacing} size="h3">
        Size Large
      </Heading>
      <ul className="grid gap-y-4">
        <li>
          <Component variant="icon">
            <Icon
              className={styles.arrowBackIcon}
              name="arrow-back"
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
        <li>
          <Component variant="icon">
            {componentName}
            <Icon
              className={styles.arrowForwardIcon}
              name="arrow-forward"
              purpose="decorative"
            />
          </Component>
        </li>
        <li className={styles.headingBottomSpacing}>
          <Component variant="icon">
            <Icon
              className="mx-[-0.4em]"
              name="arrow-forward"
              purpose="informative"
              title="forward"
            />
          </Component>
        </li>
      </ul>
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h3">
        Size Medium
      </Heading>
      <ul className="grid gap-y-4">
        <li>
          <Component size="md" variant="icon">
            <Icon
              className={styles.arrowBackIcon}
              name="arrow-back"
              purpose="decorative"
            />{" "}
            {componentName}
          </Component>
        </li>
        <li>
          <Component size="md" variant="icon">
            {componentName}
            <Icon
              className={styles.arrowForwardIcon}
              name="arrow-forward"
              purpose="decorative"
            />
          </Component>
        </li>
        <li>
          <Component size="md" variant="icon">
            <Icon
              className="mx-[-0.55em]"
              name="add"
              purpose="informative"
              title="add"
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
        <Icon
          className="ml-1"
          name="open-in-new"
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
    <Heading className={styles.headingBottomSpacing} size="h3">
      Size Large
    </Heading>
    <ul className="grid gap-y-4">
      <li>
        <Component status="error" variant="primary">
          {componentName}
        </Component>
      </li>
      <li>
        <Component status="error" variant="primary">
          <Icon
            className={styles.arrowBackIcon}
            name="arrow-back"
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
      <Heading className={styles.headingBottomSpacing} size="h2">
        Primary
      </Heading>
      {getStandardSet(Component, componentName, "primary")}
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h2">
        Secondary
      </Heading>
      {getStandardSet(Component, componentName, "secondary")}
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h2">
        Tertiary
      </Heading>
      {getStandardSet(Component, componentName, "secondary", "neutral")}
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h2">
        Plain
      </Heading>
      {geIconRecommendedVariants(Component, componentName)}
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h2">
        Link
      </Heading>
      {getLinkRecommendedVariants(Component, componentName)}
    </li>

    <li>
      <Heading className={styles.headingBottomSpacing} size="h2">
        Destructive
      </Heading>
      {getDestructiveRecommendedVariants(Component, componentName)}
    </li>
  </ul>
);

const sizes = ["lg", "md", "sm"] as const;
// "link" is ommitted here because it's rendered separately since it only has one size
const variants = ["primary", "secondary", "icon"] as const;
export const statuses = [
  "error",
  "brand",
  "neutral",
  "success",
  "warning",
] as const;
const linkStates = ["inactive", "hover", "focus", "active"] as const;
const buttonStates = [...linkStates, "disabled"] as const;

const getVariantWithStates = (
  tag: "button" | "a",
  variant: ClickableStyleProps<"button">["variant"],
  buttonChildren: "Button" | "Link",
  size?: ClickableStyleProps<"button">["size"],
) => {
  const states = tag === "button" ? buttonStates : linkStates;
  const icon = variant === "icon" && (
    <Icon className="ml-2" name="add" purpose="decorative" />
  );

  return (
    <React.Fragment key={variant}>
      <Heading size="h2">
        {variant}
        {size && ` - ${size}`}
      </Heading>
      <table className="mb-5">
        <tbody>
          {states.map((state) => (
            <tr key={state}>
              <th scope="row">
                <Text size="body">{state}</Text>
              </th>
              {statuses.map((status) => (
                <td className="p-2" key={status}>
                  {/* To pass the "state" prop (only used for demonstration in storybook),
                  we must use ClickableStyle instead of Button or Link */}
                  <ClickableStyle
                    as={tag}
                    disabled={state === "disabled"}
                    href={tag === "a" ? "https://go.czi.team/eds" : undefined}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      // Allows the user to click the links for testing without being navigated away.
                      event.preventDefault();
                    }}
                    size={size}
                    state={state}
                    status={status}
                    variant={variant}
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
    <li>{getVariantWithStates(tag, "link", buttonChildren)}</li>
    {sizes.map((size) => (
      <li key={size}>
        {variants.map((variant) =>
          getVariantWithStates(tag, variant, buttonChildren, size),
        )}
      </li>
    ))}
  </ul>
);

export const getLargeVariantsWithStates = (
  tag: "button" | "a",
  buttonChildren: "Button" | "Link",
) => (
  <ul>
    <li>{getVariantWithStates(tag, "link", buttonChildren)}</li>
    {variants.map((variant) => (
      <li key={variant}>
        {getVariantWithStates(tag, variant, buttonChildren, "lg")}
      </li>
    ))}
  </ul>
);
