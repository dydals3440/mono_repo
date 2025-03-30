import type { vars } from "@matthew/themes";
import type * as React from "react";

export type ButtonProps = {
  color?: keyof typeof vars.colors.$scale;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
