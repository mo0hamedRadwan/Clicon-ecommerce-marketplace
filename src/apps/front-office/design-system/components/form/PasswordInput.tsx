import { trans } from "@mongez/localization";
import {
  FormControlProps,
  maxLengthRule,
  minLengthRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import LinkAsButton from "../ui/LinkAsButton";

type PasswordInputPropsType = FormControlProps & {
  className?: string;
  // placeholder?: string;
  label?: string;
  showForgetPassword?: boolean;
};

export default function PasswordInput(props: PasswordInputPropsType) {
  const { value, changeValue, error } = useFormControl({
    ...props,
    rules: [requiredRule, minLengthRule, maxLengthRule, patternRule],
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="space-between-center">
        {props.label && <label>{trans(props.label)}</label>}
        {props.showForgetPassword && (
          <LinkAsButton
            variant="text"
            href={URLS.auth.signin.forgetPassword}
            className="p-0 text-sm text-sky-550 hover:bg-white">
            {trans("forgetPassword")}
          </LinkAsButton>
        )}
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder={props.placeholder}
          onChange={e => {
            changeValue(e.target.value);
          }}
          className={twMerge(
            "w-full p-2 border border-gray-150",
            props.className,
          )}
        />
        <span
          className={`absolute top-0 ${isRTL() ? "left-2" : "right-2"} text-xl p-2 cursor-pointer`}
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

// PasswordInput.defaultProps = {
//   rules: [
//     requiredRule,
//     minLengthRule,
//     maxLengthRule,
//     patternRule,
//     alphabetRule,
//     matchRule,
//   ],
// };
