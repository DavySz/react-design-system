import { Heading } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { IHeading } from "./types";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<IHeading>;

export const Default: StoryObj<IHeading> = {};

export const Small: StoryObj<IHeading> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<IHeading> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<IHeading> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1 tag.</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
