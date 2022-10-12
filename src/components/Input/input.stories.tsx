import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from ".";
import { ITextInputRoot } from "./types";
import { Envelope } from "phosphor-react";
export default {
  title: "Components/Input",
  component: TextInput.TextInputRoot,
  args: {
    placeholder: "Type your email address",
    type: "email",
    children: [
      <TextInput.TextInputIcon>
        <Envelope />
      </TextInput.TextInputIcon>,
      <TextInput.Input placeholder="Type your email address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRoot>;

export const Default: StoryObj<ITextInputRoot> = {};
