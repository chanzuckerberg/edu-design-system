import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";

type Props = {
  /**
  * Child node(s) that can be nested inside component
  */
  children: ReactNode;
};

interface BasePlopTestProps {}

const PlopTestComponent = styled.span<BasePlopTestProps>``;

function PlopTest({ children, ...rest }: Props) {
  return (
    <PlopTestComponent {...rest}>
      {children}
    </PlopTestComponent>
  );
}

export default PlopTest;
