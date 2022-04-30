import { useRef } from "react";

import { classNames } from "../../../utils";

type Props = {
  suffix?: string;
  endAdornment?: React.ReactNode;
};

export default function Input({
  name,
  id,
  placeholder,
  type = "text",
  required = false,
  pattern,
  title,
  onChange,
  onFocus,
  onBlur,
  value,
  autoFocus = false,
  autoComplete = "off",
  disabled,
  min,
  max,
  suffix,
  endAdornment,
}: React.InputHTMLAttributes<HTMLInputElement> & Props) {
  const inputEl = useRef<HTMLInputElement>(null);
  const outerStyles =
    "shadow-sm rounded-md border border-gray-300 dark:bg-gray-200 focus:ring-orange-bitcoin focus:border-orange-bitcoin focus:ring-1 transition duration-300";

  const inputNode = (
    <input
      ref={inputEl}
      type={type}
      name={name}
      id={id}
      className={classNames(
        "block w-full placeholder-gray-400 dark:placeholder-gray-600 dark:text-black",
        !suffix && !endAdornment ? outerStyles : "border-0 focus:ring-0"
      )}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      title={title}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      disabled={disabled}
      min={min}
      max={max}
    />
  );

  if (!suffix && !endAdornment) return inputNode;

  return (
    <div
      className={classNames(
        "flex items-stretch overflow-hidden",
        outerStyles.replace(/focus/g, "focus-within")
      )}
    >
      {inputNode}
      {suffix && (
        <span
          className="flex items-center pr-3 font-medium bg-white"
          onClick={() => {
            inputEl.current?.focus();
          }}
        >
          {suffix}
        </span>
      )}
      {endAdornment && (
        <span className="flex items-center bg-white">{endAdornment}</span>
      )}
    </div>
  );
}
