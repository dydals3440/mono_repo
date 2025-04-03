import { Ref } from "react";
import { GridItemProps } from "./types";
import * as React from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@matthew/themes";

// 특정 컴포넌트의 unControlled 사용할 수 있게 ref
const GridItem = (props: GridItemProps, ref: Ref<HTMLElement>) => {
  const {
    as = "div",
    children,
    color,
    background,
    area,
    colEnd,
    colSpan,
    colStart,
    rowEnd,
    rowSpan,
    rowStart,
  } = props;

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
        gridArea: area,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridColumn: colSpan,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        gridRow: rowSpan,
        color: color && vars.colors.$scale[color]?.[700],
        background: background && vars.colors.$scale[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _GridItem = React.forwardRef(GridItem);
export { _GridItem as GridItem };
