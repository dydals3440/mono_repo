import "@matthew/react-components-layout/style.css";
import { Box as _Box } from "@matthew/react-components-layout";

export default {
  title: "ReactComponents/Layout/Block",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
