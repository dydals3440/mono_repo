import * as React from "react";
import { JSX } from "react";
import { StyleSprinkles } from "./style.css";
import { vars } from "@matthew/themes";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

// as 외에도 확장성을 고려한다면 다양한 컴포넌트들을 박스에서 받을 수 있어야 함.
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

// vanilla extract는 타입을 뽑을 수 있음.
export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
