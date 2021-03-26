import React, { ReactNode } from "react";

import clsx from "clsx";
import styles from "./TestComponent.module.css";

type Props = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * How the text should be aligned.
   */
  align: "left" | "right";
};

/**
 * A super cool component that does a really awesome thing.
 * TODO: Update to describe your component!
 */
function TestComponent({ children, align }: Props) {
  return (
    <div
      className={clsx(styles.container, align === "right" && styles.alignRight)}
    >
      {children}
    </div>
  );
}

TestComponent.defaultProps = {
  children: "Hello world =^_^=",
  align: "left",
};

export default TestComponent;
