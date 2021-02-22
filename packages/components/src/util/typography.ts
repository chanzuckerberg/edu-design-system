import tw, { TwStyle } from "twin.macro";

export type TypographySize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "sm"
  | "xs"
  | "caption"
  | "overline";

export type TypographyColor =
  | "alert"
  | "base"
  | "brand"
  | "info"
  | "neutral"
  | "success"
  | "warning"
  | "white";

export function styleFromColor(color?: TypographyColor): TwStyle {
  switch (color) {
    case "alert":
      return tw`text-alert-700`;
    case "brand":
      return tw`text-brand-700`;
    case "info":
      return tw`text-info-700`;
    case "neutral":
      return tw`text-neutral-500`;
    case "success":
      return tw`text-success-700`;
    case "warning":
      return tw`text-warning-700`;
    case "white":
      return tw`text-white`;
    default:
      return tw`text-font-base`;
  }
}

export function styleFromSize(size: TypographySize): TwStyle {
  switch (size) {
    case "h1":
      return tw`text-h1 leading-h1`;
    case "h2":
      return tw`text-h2 leading-body`;
    case "h3":
      return tw`text-body leading-body`;
    case "h4":
      return tw`text-sm leading-body`;
    case "h5":
      return tw`text-xs leading-sm`;
    case "body":
      return tw`text-body leading-body`;
    case "sm":
      return tw`text-sm leading-sm`;
    case "xs":
      return tw`text-xs leading-xs`;
    case "caption":
      return tw`text-xs leading-sm`;
    case "overline":
      return tw`text-xs leading-sm uppercase`;
  }
}
