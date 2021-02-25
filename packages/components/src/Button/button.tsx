import React, { ReactNode } from "react";
import tw, { css, styled } from "twin.macro";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * The button contents or label.
   */
  children: ReactNode;
  /**
   * The style of button.
   */
  variant: "flat" | "outline" | "minimal";
  /**
   * The color of the button element. If no color provided, defaults to the brand color.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
  type: ButtonHTMLElementProps["type"];
  disabled: ButtonHTMLElementProps["disabled"];
};

const ButtonComponent = styled.button<ButtonProps>(({ variant, color }) => [
  // Base Styles:
  tw`py-2 px-4 rounded border`,
  // Base Text Styles:
  tw`font-bold text-sm leading-body`,
  // Focus Outline:
  tw`focus:outline-none focus:ring-2 focus:border-info-400 ring-info-400`,
  // Color:
  // Default To Brand Color
  css`
    --button-primary-color: var(--eds-color-brand-600);
    --button-hocus-color: var(--eds-color-brand-700);
    --button-disabled-color: var(--eds-color-brand-300);
    --button-secondary-color: var(--eds-color-white);
  `,

  color === "alert" &&
    css`
      --button-primary-color: var(--eds-color-alert-600);
      --button-hocus-color: var(--eds-color-alert-700);
      --button-disabled-color: var(--eds-color-alert-300);
      --button-secondary-color: var(--eds-color-white);
    `,

  color === "neutral" &&
    css`
      --button-primary-color: var(--eds-color-neutral-600);
      --button-hocus-color: var(--eds-color-neutral-700);
      --button-disabled-color: var(--eds-color-neutral-300);
      --button-secondary-color: var(--eds-color-white);
    `,

  color === "success" &&
    css`
      --button-primary-color: var(--eds-color-success-600);
      --button-hocus-color: var(--eds-color-success-700);
      --button-disabled-color: var(--eds-color-success-300);
      --button-secondary-color: var(--eds-color-white);
    `,

  color === "warning" &&
    css`
      --button-primary-color: var(--eds-color-warning-600);
      --button-hocus-color: var(--eds-color-warning-700);
      --button-disabled-color: var(--eds-color-warning-300);
      --button-secondary-color: var(--eds-color-white);
    `,
  // Variant:
  variant === "flat" &&
    css`
      background-color: var(--button-primary-color);
      border-color: var(--button-primary-color);
      color: var(--button-secondary-color);

      &:hover {
        border-color: var(--button-hocus-color);
      }

      &:hover,
      &:focus {
        background-color: var(--button-hocus-color);
      }

      /* override the hover/focus values */
      &:disabled {
        background-color: var(--button-disabled-color);
        border-color: var(--button-disabled-color);
      }
    `,
  variant === "outline" &&
    css`
      background-color: var(--button-secondary-color);
      border-color: var(--button-primary-color);
      color: var(--button-primary-color);

      &:hover {
        border-color: var(--button-hocus-color);
      }

      &:hover,
      &:focus {
        color: var(--button-hocus-color);
      }

      /* override the hover/focus values */
      &:disabled {
        border-color: var(--button-disabled-color);
        color: var(--button-disabled-color);
      }
    `,

  variant === "minimal" &&
    css`
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
    `,
]);

function Button(props: ButtonProps) {
  return <ButtonComponent {...props} />;
}

const defaultProps: Partial<ButtonProps> = {
  variant: "flat",
  color: "brand",
  disabled: false,
  type: "button",
};

Button.defaultProps = defaultProps;

export default Button;
