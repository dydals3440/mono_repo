import "@matthew/react-components-layout/style.css";
import { Text as _Text } from "@matthew/react-components-layout";
import { classes, vars } from "@matthew/themes";

export default {
  title: "ReactComponents/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
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
    as: "p",
    fontSize: "sm",
    children: "Hello World",
  },
};
