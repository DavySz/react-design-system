import { Slot } from "@radix-ui/react-slot";
import { IInput, ITextInputIcon, ITextInputRoot } from "./types";

function TextInputRoot({ children }: ITextInputRoot) {
  return (
    <div className="flex  items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

function TextInputIcon({ children }: ITextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

function Input(props: IInput) {
  return (
    <input
      className={
        "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      }
      {...props}
    />
  );
}

export const TextInput = {
  TextInputRoot,
  TextInputIcon,
  Input,
};
