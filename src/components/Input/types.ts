import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRoot {
  children: React.ReactNode;
}

export interface ITextInputIcon {
  children: React.ReactNode;
}
