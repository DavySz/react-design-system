import { IHeading } from "./types";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export function Heading({ children, size = "md", asChild }: IHeading) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-2xl": size === "lg",
        "text-xl": size === "md",
        "text-lg": size === "sm",
      })}
    >
      {children}
    </Component>
  );
}
