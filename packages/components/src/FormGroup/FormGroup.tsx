import clsx from "clsx";
import React, { ElementType, ReactNode } from "react";
import Text from "../Text";
import styles from "./FormGroup.module.css";

type FormGroupProps = {
  /**
   * The contents of the form group. We suggest a FormGroup.Title followed by
   * interactive elements.
   *
   * Should be wrapped in a fragment to allow our styling to control the spacing
   * between elements.
   */
  children: ReactNode;
  /**
   * Type of element the immediate wrapper around the contents should be.
   * @default 'fieldset'
   */
  as?: ElementType;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

type TitleProps = {
  /**
   * The title of the form group.
   */
  children: ReactNode;
  /**
   * Type of element the wrapper should be.
   * @default 'legend'
   */
  as?: ElementType;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

type ItemsProps = {
  /**
   * The content of the helper form elements in the form group.
   */
  children: ReactNode;
  /**
   * Type of element the immediate wrapper around the contents should be.
   * @default 'div'
   */
  as?: ElementType;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

/**
 * Helper sub-component for styling the title at the top of the component.
 */
const Title = ({
  children,
  as: Component = "legend",
  className,
}: TitleProps) => {
  return (
    <Component className={clsx(className, styles.title)}>
      <Text size="sm" weight="bold">
        {children}
      </Text>
    </Component>
  );
};

/**
 * Helper sub-component for styling the form elements in the component.
 */
const Items = ({ children, as: Component = "div", className }: ItemsProps) => {
  return (
    <Component className={clsx(className, styles.items)}>{children}</Component>
  );
};

/**
 * A container for a form section including a title and one or more form elements.
 *
 * Uses `fieldset` and `legend` elements by default but can be customized.
 *
 * If you're not using a `fieldset` element, please consider whether you should be
 * using a `ul` instead.
 */
function FormGroup({
  children,
  as: Component = "fieldset",
  className,
}: FormGroupProps) {
  return (
    <Component className={clsx(className, styles.formGroup)}>
      {children}
    </Component>
  );
}

FormGroup.Title = Title;
FormGroup.Items = Items;

export default FormGroup;
