import React from "react";
import "@matthew/react-components-button/style.css";
import { Button as _Button } from "@matthew/react-components-button";
import "@matthew/react-components-layout/style.css";
import { Text } from "@matthew/react-components-layout";
import { vars } from "@matthew/themes";
import { useButton } from "@matthew/react-hooks-button";

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
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

export const TextButtonStory = {
  render: () => {
    /* eslint-disable */
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log('"Text button clicked"');
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        background="gray"
        fontSize="lg"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};
