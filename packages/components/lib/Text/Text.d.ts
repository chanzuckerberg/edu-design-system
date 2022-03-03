import React from "react";
import { TypographyProps } from "../common/typography";
declare type TextElement = "p" | "span";
declare type Props = {
    /**
     * Controls whether to render text inline (defaults to "p");
     */
    as?: TextElement;
    children: TypographyProps<TextElement>["children"];
    className?: TypographyProps<TextElement>["className"];
    color?: TypographyProps<TextElement>["color"];
    size?: TypographyProps<TextElement>["size"];
    spacing?: TypographyProps<TextElement>["spacing"];
    tabIndex?: number;
    weight?: TypographyProps<TextElement>["weight"];
};
declare const Text: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default Text;
