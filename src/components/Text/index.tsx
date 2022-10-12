import { IText } from "./types";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export function Text({ size = "md", children, asChild }: IText) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
