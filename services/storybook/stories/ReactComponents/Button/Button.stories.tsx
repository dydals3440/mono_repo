import React from "react";
import "@matthew/react-components-button/style.css";
import { Button as _Button, Button } from "@matthew/react-components-button";
import { vars } from "@matthew/themes";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "select" },
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: { type: "select" },
    },
  },
};

export const ButtonStory = {
  args: {
    as: "button",
    children: "Button",
    padding: 5,
    size: "lg",
    leftIcon: "🍠",
  },
};
