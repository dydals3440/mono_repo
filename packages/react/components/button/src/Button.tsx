import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@matthew/themes";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    children,
    isDisabled = false,
    // ...rest
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][200];
  const activeColor =
    variant === "solid" ? vars.colors.$scale[color][700] : enableColor;
  const disabled = isDisabled;

  return (
    <button
      {...props}
      ref={ref}
      className={clsx(buttonStyle({ size, variant }))}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
      }}
    >
      {children}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
