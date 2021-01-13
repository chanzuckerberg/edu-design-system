import tw, { styled } from "twin.macro";
import React from "react";
import Typography from "../typography/typography";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
};

// Temporary props for button to test out css options for variants
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;

const ButtonComponent = styled.button<BaseButtonProps>(({ variant }) => [
  tw`py-2 px-4 rounded border-none`,
  variant === "secondary"
    ? tw`bg-neutral-500 hover:bg-neutral-600`
    : tw`bg-brand-600 hover:bg-brand-700`,
]);

function Button(props: ButtonProps): JSX.Element {
  const { children, ...rest } = props;

  return (
    <ButtonComponent {...rest}>
      <Typography bold color="white" size="button">
        {children}
      </Typography>
    </ButtonComponent>
  );
}

export default Button;
