import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { IButton } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
} as Meta<IButton>;

export const Default: StoryObj<IButton> = {};
