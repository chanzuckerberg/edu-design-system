// @flow

import Tippy from "@tippyjs/react";
import clsx from "clsx";
import * as React from "react";
import styles from "./Tooltip.module.css";

// Full list of Tippy props: https://atomiks.github.io/tippyjs/v6/all-props/
type TooltipProps = {
  /**
   * The trigger element the tooltip appears next to.
   */
  children?: React.ReactElement;
  /**
   * The trigger element the tooltip appears next to.
   *
   * Use this instead of `children` if the trigger element is being
   * stored in state or a ref. Most cases will use `children` and not
   * `reference`.
   */
  reference?: React.RefObject<Element>;
  /**
   * The content of the tooltip bubble.
   */
  content?: React.ReactNode;
  /**
   * Where the tooltip should be placed in relation to the element it's attached to.
   *
   * Tippy also supports 'top-start', 'top-end', 'right-start', 'right-end', etc,
   * but our CSS currently only supports the 4 main sides.
   */
  placement?: "top" | "right" | "bottom" | "left";
  /**
   * Whether the tooltip is always visible or always invisible.
   *
   * This is most often left undefined so the Tooltip component
   * controls if/when the bubble appears (on hover, click, focus, etc).
   */
  visible?: boolean;
  /**
   * Custom classname for additional styles.
   *
   * These styles will only affect the tooltip bubble.
   */
  className?: string;
  /**
   * Whether the tooltip has a light or dark background.
   */
  variant?: "light" | "dark";
  /**
   * How long to delay the Tooltip showing and hiding, in milliseconds.
   *
   * If a single number is provided, it will be applied to showing and hiding.
   * If an array with 2 numbers is provided, the first will apply to showing and
   * the second will be applied to hiding.
   * https://atomiks.github.io/tippyjs/v6/all-props/#delay
   */
  delay?: number | [number | null, number | null];
};

/**
 * A styled tooltip built on Tippy.js.
 *
 * https://atomiks.github.io/tippyjs/
 * https://github.com/atomiks/tippyjs-react
 */
export default function Tooltip({
  variant = "light",
  placement = "top",
  className,
  ...rest
}: TooltipProps) {
  return (
    <Tippy
      {...rest}
      className={clsx(
        styles.tooltip,
        className,
        variant === "light" && styles.variantLight,
        variant === "dark" && styles.variantDark,
      )}
      duration={200}
      placement={placement}
    />
  );
}
