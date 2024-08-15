import { trans } from "@mongez/localization";
import {
  FormControlProps,
  maxLengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { twMerge } from "tailwind-merge";

type TextInputPropsType = FormControlProps & {
  className?: string;
  label?: string;
};

export default function TextInput(props: TextInputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <div className="flex flex-col gap-y-2">
      {props.label && <label htmlFor="email-id">{trans(props.label)}</label>}
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

TextInput.defaultProps = {
  rules: [requiredRule, minLengthRule, maxLengthRule],
};
