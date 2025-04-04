import React from "react";
import "@matthew/react-components-layout/style.css";
import { Flex as _Flex } from "@matthew/react-components-layout";

export default {
  title: "ReactComponents/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
      height: "300px",
    },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>테스트</div>
      <div>입니다.</div>
    </_Flex>
  ),
};
