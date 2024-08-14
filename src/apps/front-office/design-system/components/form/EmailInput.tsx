import { trans } from "@mongez/localization";
import {
  emailRule,
  FormControlProps,
  maxLengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { twMerge } from "tailwind-merge";

type EmailInputPropsType = FormControlProps & {
  className?: string;
  showLabel?: boolean;
};

export default function EmailInput(props: EmailInputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <div className="flex flex-col gap-y-2">
      {props.showLabel && (
        <label htmlFor="email-id">{trans("emailAddress")}</label>
      )}
      <input
        type="text"
        id="email-id"
        value={value}
        placeholder={props.placeholder}
        onChange={e => {
          changeValue(e.target.value);
        }}
        className={twMerge(
          "p-2 text-black border border-gray-150",
          props.className,
        )}
      />
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

EmailInput.defaultProps = {
  rules: [requiredRule, minLengthRule, maxLengthRule, emailRule],
};
