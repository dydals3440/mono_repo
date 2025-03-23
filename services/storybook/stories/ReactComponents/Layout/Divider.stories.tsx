import React from "react";
import "@matthew/react-components-layout/style.css";
import { Divider as _Divider, Box } from "@matthew/react-components-layout";
import { vars } from "@matthew/themes";

export default {
  title: "ReactComponents/Layout/Divider",
  component: _Divider,
  // 잘 안보임 데코레이터 활용
  decorators: [
    (Story) => (
      <Box
        color="gray"
        background="blue"
        padding={3}
        style={{
          width: "300px",
          height: "300px",
        }}
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    variant: {
      options: ["solid", "dashed", "dotted"],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const TextStory = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};
