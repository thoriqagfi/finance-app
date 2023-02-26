import { IconType } from "react-icons";
import * as React from "react";
import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";

export type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  validation? : RegisterOptions;
};