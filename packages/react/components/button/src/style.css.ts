import { classes, vars } from "@matthew/themes";
import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const enableColorVariant = createVar();
export const hoverColorVariant = createVar();
export const activeColorVariant = createVar();

export const buttonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: vars.box.radii.md,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",

    // @ts-ignore
    "&[disabled]": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      xs: {
        ...classes.typography.text.xs,
        fontWeight: vars.typography.fontWeight[600],
        padding: "0 0.5rem",
        gap: "0.5rem",
        height: "1.5rem",
      },
      sm: {
        ...classes.typography.text.sm,
        fontWeight: vars.typography.fontWeight[600],
        padding: "0 0.75rem",
        gap: "0.5rem",
        height: "2rem",
      },
      md: {
        ...classes.typography.text.md,
        fontWeight: vars.typography.fontWeight[600],
        padding: "0 1rem",
        gap: "0.75rem",
        height: "2.5rem",
      },
      lg: {
        ...classes.typography.text.lg,
        fontWeight: vars.typography.fontWeight[600],
        padding: "0 1.25rem",
        gap: "1rem",
        height: "3rem",
      },
    },
    variant: {
      solid: {
        backgroundColor: enableColorVariant,
        color: vars.colors.$scale.gray[50],

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: enableColorVariant,
        border: `1px solid ${enableColorVariant}`,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
          borderColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
          borderColor: activeColorVariant,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: enableColorVariant,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
    },
  },
});

export const spanStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        ...classes.typography.text.xs,
        fontWeight: vars.typography.fontWeight[600],
      },
      sm: {
        ...classes.typography.text.sm,
        fontWeight: vars.typography.fontWeight[600],
      },
      md: {
        ...classes.typography.text.md,
        fontWeight: vars.typography.fontWeight[600],
      },
      lg: {
        ...classes.typography.text.lg,
        fontWeight: vars.typography.fontWeight[600],
      },
    },
  },
});
