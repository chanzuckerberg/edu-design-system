import React from "react";
import type { IconProps } from "../SvgIcon";
/**
 * Generates SVG Icons from paths and fragments.
 *
 * Implementation note: this is an extremely light wrapper right now,
 * but may be helpful in the future -- for example, if we need to support
 * forwarding refs or memoization across all Icons.
 * This also makes it easier to directly grab icon files from Material UI.
 */
export default function createSvgIcon(path: React.ReactNode): (props: IconProps) => JSX.Element;
