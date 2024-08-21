import { trans } from "@mongez/localization";
import {
  FormControlProps,
  maxLengthRule,
  minLengthRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { twMerge } from "tailwind-merge";

type TextInputPropsType = FormControlProps & {
  className?: string;
  label?: string;
};

export default function TextInput(props: TextInputPropsType) {
  const { value, changeValue, error } = useFormControl({
    ...props,
    rules: [requiredRule, minLengthRule, maxLengthRule, patternRule],
  });

  return (
    <div className="flex flex-col gap-y-2">
      {props.label && <label>{trans(props.label)}</label>}
      <input
        type={props.type}
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
