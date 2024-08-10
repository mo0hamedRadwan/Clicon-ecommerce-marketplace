import { trans } from "@mongez/localization";
import {
  alphabetRule,
  FormControlProps,
  matchRule,
  maxLengthRule,
  minLengthRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type PasswordInputPropsType = FormControlProps & {
  className?: string;
  children?: any;
};

export default function PasswordInput(props: PasswordInputPropsType) {
  const { value, changeValue, error } = useFormControl(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="space-between-center">
        <label htmlFor="password-id">{trans("password")}</label>
        {props.children}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          id="password-id"
          onChange={e => {
            changeValue(e.target.value);
          }}
          className={twMerge(
            "w-full p-2 border border-gray-150",
            props.className,
          )}
        />
        <span
          className="absolute top-0 right-2 text-lg p-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <i className="bx bxs-low-vision"></i>
          ) : (
            <i className="bx bx-show"></i>
          )}
        </span>
      </div>

      {error && (
        <span
          style={{
            color: "red",
          }}>
          {error}
        </span>
      )}
    </div>
  );
}

PasswordInput.defaultProps = {
  rules: [
    requiredRule,
    minLengthRule,
    maxLengthRule,
    patternRule,
    alphabetRule,
    matchRule,
  ],
};
