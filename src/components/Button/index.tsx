import { Slot } from "@radix-ui/react-slot";
import { IButton } from "./types";
import { clsx } from "clsx";

export function Button({ asChild, children }: IButton) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "text-black font-semibold py-4 px-3 bg-cyan-500 rounded text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Component>
  );
}
