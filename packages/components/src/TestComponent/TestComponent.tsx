import React, { ReactNode } from "react";

import classNames from "classnames/bind";
import styles from "./TestComponent.module.css";

const cx = classNames.bind(styles);

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
 * This component is a replica of the template created by plop found in plop-templates.
 * TODO: Find a way to keep these 2 files in sync.
 */
function TestComponent({ children, align }: Props) {
  return (
    <div
      className={cx(
        "testComponent--container",
        `testComponent--align-${align}`
      )}
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
