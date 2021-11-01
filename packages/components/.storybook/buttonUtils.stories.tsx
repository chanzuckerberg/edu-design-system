import React from "react";
import Button from "../src/Button";
import { ClickableStyleProps } from "../src/ClickableStyle";
import Heading from "../src/Heading";
import AddRoundedIcon from "../src/Icons/AddRounded";
import ArrowBackRoundedIcon from "../src/Icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "../src/Icons/ArrowForwardRounded";
import OpenInNewRoundedIcon from "../src/Icons/OpenInNewRounded";
import Link from "../src/Link";
import styles from "./buttonUtils.stories.module.css";

const getStandardSet = (
  headingText: "Primary" | "Secondary" | "Tertiary",
  Component: typeof Button | typeof Link,
  componentName: "Button" | "Link",
  variant: ClickableStyleProps<"button">["variant"],
  color: ClickableStyleProps<"button">["color"] = "brand",
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
