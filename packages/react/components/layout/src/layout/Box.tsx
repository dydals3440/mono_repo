import { Ref } from "react";
import { BoxProps } from "./types";
import * as React from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@matthew/themes";

// 특정 컴포넌트의 unControlled 사용할 수 있게 ref
const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as = "div", children, color, background } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale[color]?.[700],
        background: background && vars.colors.$scale[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
