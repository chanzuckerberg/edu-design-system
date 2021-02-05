import tw, { styled } from "twin.macro";
import React from "react";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
};

// Temporary props for button to test out css options for variants
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;

const ButtonComponent = styled.button<BaseButtonProps>(({ variant }) => [
  // shape & spacing styles
  tw`py-2 px-4 rounded border-none`,
  // text styles
  tw`font-arimo text-white font-bold text-sm leading-body`,
  // background color
  variant === "secondary"
    ? tw`bg-neutral-500 hover:bg-neutral-600`
    : tw`bg-brand-600 hover:bg-brand-700`,
]);

function Button(props: Props) {
  const { children, ...rest } = props;

  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
}

export default Button;
