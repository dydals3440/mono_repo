import { Ref } from "react";
import { FlexProps } from "./types";
import * as React from "react";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@matthew/themes";

// 특정 컴포넌트의 unControlled 사용할 수 있게 ref
const Flex = (props: FlexProps, ref: Ref<HTMLElement>) => {
  const {
    as = "div",
    children,
    color,
    background,
    align,
    basis,
    direction,
    grow,
    justify,
    shrink,
    wrap,
    gap,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        flexBasis: basis,
        flexDirection: direction,
        flexGrow: grow,
        justifyContent: justify,
        flexShrink: shrink,
        flexWrap: wrap,
        gap,
        color: vars.colors.$scale[color]?.[700] || color,
        background: vars.colors.$scale[background]?.[100] || background,
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
