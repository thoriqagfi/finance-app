import clsxm from "@/constant/clsxm";
import { InputProps } from "@/constant/form";
import { get, useFormContext, RegisterOptions } from "react-hook-form";
import { HiExclamationCircle } from 'react-icons/hi';

export default function Input({
  id,
  label,
  placeholder = '',
  helperText = '',
  type = 'text',
  readOnly = false,
  hideError = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <div className="my-3">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 ml-1">
        {label}
      </label>
      <div className="relative mt-1">
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          id={id}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-describedby="id"
          className={clsxm(
            'px-4 py-2 rounded',
            readOnly
            ? 'bg-gray-100 focus:ring-0 cursor-not-allowed focus:border-gray-300'
            : error
            ? 'bg-red-100 focus:ring-red-500 border-red-500 focus:border-red-500'
            : 'bg-gray-100 focus:ring-green-500 border-none focus:border-green-500'
          )}
        />
        <div className="mt-[2px]">
          {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
          {!hideError && error && (
            <span className="text-[11px] text-red-500 flex">
              <HiExclamationCircle className="my-auto text-[11px] text-red-500 mx-1"/>
              {error?.message as unknown as string}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}