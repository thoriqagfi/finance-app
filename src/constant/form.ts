import { IconType } from "react-icons";
import * as React from "react";
import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";

export type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  type?: React.HTMLInputTypeAttribute;
  readonly?: boolean;
  icon?: IconType;
  hideError?: boolean;
  validation? : RegisterOptions;
  leftIcon?: IconType,
  rightIcon?: IconType,
  leftIconClassName?: string,
  rightIconClassName?: string,
} & React.ComponentPropsWithoutRef<"input">;