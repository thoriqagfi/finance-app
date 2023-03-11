import clsxm from "@/constant/clsxm";
import { InputProps } from "@/constant/form";
import { get, useFormContext } from "react-hook-form";

export default function Input({
  id,
  label,
  placeholder = '',
  type = 'text',
  validation,
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
          type={type}
          id={id}
          placeholder={placeholder}
          aria-describedby="id"
          className={clsxm(
            'px-4 py-2 rounded text-black',
            error ? 'bg-red-100 focus:ring-red-500 border-red-500 focus:border-red-500'
            : 'bg-gray-100 focus:ring-green-500 border-none focus:border-green-500'
          )}
        />
        <div className="mt-[1px]">
            <span className="text-[11px] text-red-500 px-1">
              {error?.message}
            </span>
        </div>
      </div>
    </div>
  )
}