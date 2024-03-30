import React from "react";
import cn from "../utils/cn";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <div className="w-full flex flex-col gap-y-1">
      {props.id && props.name ? (
        <label htmlFor={props.id} className="text-sm text-stone-400 capitalize">
          {props.name || ""}
          {props.required ? (<sup className="text-xs text-orange-600"> *</sup>) : null}
        </label>
      ) : null}

      <input
        type={type}
        className={cn(
          `
          flex w-full rounded-md bg-gray-light border border-gray-border 
          px-3 py-3 placeholder:text-gray-text disabled:cursor-not-allowed 
          disabled:opacity-75 focus:outline-none text-blue-text text-lg
        `,
          disabled && "opacity-75",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    </div>
  )
});

Input.displayName = "Input";

export default Input;
