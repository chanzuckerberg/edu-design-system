// @flow
import * as React from "react";
import SvgIcon from "../SvgIcon";
import type { SvgIconProps } from "../SvgIcon";

type IconProps = $Diff<
  SvgIconProps,
  {
    children: any;
  }
>;

/**
 * Generates SVG Icons from paths and fragments.
 */
export default function createSvgIcon(
  path: React.ReactNode,
  displayName: string,
): React$AbstractComponent<IconProps, React.Element<"svg">> {
  const Component = (props: IconProps, ref) => {
    return (
      // $FlowFixMe the props for SvgIcon will reconcile to either img or presentation
      <SvgIcon ref={ref} {...props}>
        {path}
      </SvgIcon>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(React.forwardRef(Component));
}
