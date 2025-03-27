import { Ref } from "react";
import { GridProps } from "./types";
import * as React from "react";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@matthew/themes";

// 특정 컴포넌트의 unControlled 사용할 수 있게 ref
const Grid = (props: GridProps, ref: Ref<HTMLElement>) => {
  const {
    as = "div",
    children,
    color,
    background,
    autoColumns,
    autoFlow,
    autoRows,
    columnGap,
    column,
    gap,
    row,
    rowGap,
    templateColumns,
    templateRows,
    templateAreas,
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
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumn: column,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRow: row,
        gridRowGap: rowGap,
        gridTemplateAreas: templateAreas,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        color: color && vars.colors.$scale[color]?.[700],
        background: background && vars.colors.$scale[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
