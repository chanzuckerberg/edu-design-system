import tw, { css, styled } from "twin.macro";

export type ClickableProps = {
  /**
   * The style of button.
   */
  variant: "flat" | "outline" | "minimal";
  /**
   * The color of the button element. If no color provided, defaults to the brand color.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
};

function getColorStyles(color: ClickableProps["color"]) {
  switch (color) {
    case "alert":
      return css`
        --button-primary-color: var(--eds-color-alert-600);
        --button-hocus-color: var(--eds-color-alert-700);
        --button-disabled-color: var(--eds-color-alert-300);
        --button-secondary-color: var(--eds-color-white);
      `;

    case "neutral":
      return css`
        --button-primary-color: var(--eds-color-neutral-600);
        --button-hocus-color: var(--eds-color-neutral-700);
        --button-disabled-color: var(--eds-color-neutral-300);
        --button-secondary-color: var(--eds-color-white);
      `;

    case "success":
      return css`
        --button-primary-color: var(--eds-color-success-600);
        --button-hocus-color: var(--eds-color-success-700);
        --button-disabled-color: var(--eds-color-success-300);
        --button-secondary-color: var(--eds-color-white);
      `;

    case "warning":
      return css`
        --button-primary-color: var(--eds-color-warning-600);
        --button-hocus-color: var(--eds-color-warning-700);
        --button-disabled-color: var(--eds-color-warning-300);
        --button-secondary-color: var(--eds-color-white);
      `;
    case "brand":
    default:
      return css`
        --button-primary-color: var(--eds-color-brand-600);
        --button-hocus-color: var(--eds-color-brand-700);
        --button-disabled-color: var(--eds-color-brand-300);
        --button-secondary-color: var(--eds-color-white);
      `;
  }
}

function getVariantStyles(variant: ClickableProps["variant"]) {
  switch (variant) {
    case "outline":
      return css`
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
      `;

    case "minimal":
      return css`
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
      `;

    case "flat":
    default:
      return css`
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
      `;
  }
}

/**
 * The clickable styles default to button, but describe buttons, links, and in the future
 * other clickables like dropdowns.
 *
 * The styles are broken into multiple wrapped styled components to split up the independent
 * styles that would otherwise create multiplicative styles in the DOM.
 */
const BaseClickable = styled.button<ClickableProps>(() => [
  // Base Styles:
  tw`py-2 px-4 rounded border`,
  // Base Text Styles:
  tw`font-bold text-sm leading-body`,
  // Focus Outline:
  tw`focus:outline-none focus:ring-2 focus:border-info-400 ring-info-400`,
]);

// Add the color classes
const ColorClickable = styled(BaseClickable)(({ color }) => [
  getColorStyles(color),
]);

const StyledClickable = styled(ColorClickable)(({ variant }) => [
  getVariantStyles(variant),
]);

export default StyledClickable;
