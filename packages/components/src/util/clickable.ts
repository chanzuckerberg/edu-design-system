import tw, { css, styled } from "twin.macro";

import classNames from "classnames";

export type ClickableProps = {
  /**
   * The style of button.
   */
  variant: "flat" | "outline" | "minimal";
  /**
   * The color of the button element. If no color provided, defaults to the brand color.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
  className: string;
};

/**
 * The clickable styles default to button, but describe buttons, links, and in the future
 * other clickables like dropdowns.
 */
const Clickable = styled.button.attrs<ClickableProps>(
  ({ color, variant, className }) => {
    return {
      className: classNames(color, variant, className),
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
      background-color: var(--button-secondary-color);
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
  `,
  // Base Styles:
  tw`py-2 px-4 rounded border`,
  // Base Text Styles:
  tw`font-bold text-sm leading-body`,
  // Focus Outline:
  tw`focus:outline-none focus:ring-2 focus:border-info-400 ring-info-400`,
]);

export default Clickable;
