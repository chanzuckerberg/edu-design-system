import classNames from "classnames/bind";
import styles from "./typography.module.css";

const cx = classNames.bind(styles);

export type ClickableProps = {
  /**
   * The style of the element.
   */
  variant: "flat" | "outline" | "minimal";
  /**
   * The color of the element.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
  /**
   * The size of the element.
   */
  size: "small" | "medium" | "large";
  className: string;
};

/**
 * The clickable styles default to button, but describe buttons, links, and in the future
 * other clickables like dropdowns.
 */
const Clickable = styled.button.attrs<ClickableProps>(
  ({ color, variant, size, className }) => {
    return {
      className: classNames(color, variant, size, className),
    };
  }
)(() => [
  // Props Dependent Styles
  css`
    /* Component Colors */
    &.alert {
      --button-primary-color: var(--eds-color-alert-600);
      --button-hocus-color: var(--eds-color-alert-700);
      --button-disabled-color: var(--eds-color-alert-300);
      --button-secondary-color: var(--eds-color-white);
    }

    &.neutral {
      --button-primary-color: var(--eds-color-neutral-600);
      --button-hocus-color: var(--eds-color-neutral-700);
      --button-disabled-color: var(--eds-color-neutral-300);
      --button-secondary-color: var(--eds-color-white);
    }

    &.success {
      --button-primary-color: var(--eds-color-success-600);
      --button-hocus-color: var(--eds-color-success-700);
      --button-disabled-color: var(--eds-color-success-300);
      --button-secondary-color: var(--eds-color-white);
    }

    &.warning {
      --button-primary-color: var(--eds-color-warning-600);
      --button-hocus-color: var(--eds-color-warning-700);
      --button-disabled-color: var(--eds-color-warning-300);
      --button-secondary-color: var(--eds-color-white);
    }

    &.brand {
      --button-primary-color: var(--eds-color-brand-600);
      --button-hocus-color: var(--eds-color-brand-700);
      --button-disabled-color: var(--eds-color-brand-300);
      --button-secondary-color: var(--eds-color-white);
    }

    /* Component Variants */
    &.flat {
      background-color: var(--button-primary-color);
      border-color: var(--button-primary-color);
      color: var(--button-secondary-color);

      &:hover,
      &:focus {
        background-color: var(--button-hocus-color);
      }

      /* override the hover/focus values */
      &:disabled {
        background-color: var(--button-disabled-color);
        border-color: var(--button-disabled-color);
      }

      &:hover:not(:focus, :disabled) {
        border-color: var(--button-hocus-color);
      }
    }

    &.outline {
      background-color: transparent;
      border-color: var(--button-primary-color);
      color: var(--button-primary-color);

      &:hover,
      &:focus {
        color: var(--button-hocus-color);
      }

      /* override the hover/focus values */
      &:disabled {
        border-color: var(--button-disabled-color);
        color: var(--button-disabled-color);
      }

      &:hover:not(:focus, :disabled) {
        border-color: var(--button-hocus-color);
      }
    }

    &.minimal {
      background-color: transparent;
      border-color: transparent;
      color: var(--button-primary-color);

      &:hover,
      &:focus {
        color: var(--button-hocus-color);
      }

      /* override the hover/focus values */
      &:disabled {
        color: var(--button-disabled-color);
      }
    }

    /* Component Sizes */
    &.small {
      font-size: var(--eds-size-font-sm);

      /* subtract 2px due to border affecting height (1/16) * (24 - 2) = 1.375rem */
      line-height: 1.375rem;
      padding: 0.5rem 1.25rem;
    }

    &.medium {
      font-size: var(--eds-size-font-sm);

      /* subtract 2px due to border affecting height (1/16) * (24 - 2) = 1.375rem */
      line-height: 1.375rem;
      padding: 1rem 1.5rem;
    }

    &.large {
      font-size: 1.25rem;

      /* subtract 2px due to border affecting height (1/16) * (30 - 2) = 1.75rem */
      line-height: 1.75rem;
      padding: 1.25rem 2rem;
    }
  `,
  // Base Styles:
  tw`rounded border`,
  // Base Text Styles:
  tw`font-bold`,
  // Focus Outline:
  tw`focus:outline-none focus:ring-2 focus:border-info-400 ring-info-400`,
]);

export default Clickable;
