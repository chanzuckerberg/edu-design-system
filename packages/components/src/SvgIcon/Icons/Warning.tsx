import SvgIcon, { IconProps } from "../SvgIcon";
import React from "react";

export default function Warning(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </SvgIcon>
  );
}
