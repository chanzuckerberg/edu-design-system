import React from "react";
import Button from "../src/Button";
import { ClickableStyleProps } from "../src/ClickableStyle";
import Heading from "../src/Heading";
import AddRoundedIcon from "../src/Icons/AddRounded";
import ArrowBackRoundedIcon from "../src/Icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "../src/Icons/ArrowForwardRounded";
import OpenInNewRoundedIcon from "../src/Icons/OpenInNewRounded";
import Link from "../src/Link";
import styles from "./clickableStyleUtils.stories.module.css";

export const getStandardSet = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
  variant: ClickableStyleProps<"button">["variant"],
  color: ClickableStyleProps<"button">["color"] = "brand",
) => (
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
);

export const getPlainRecommendedVariants = (
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
) => (
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
