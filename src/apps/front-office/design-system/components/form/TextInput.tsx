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
  optional?: boolean;
};

export default function TextInput(props: TextInputPropsType) {
  const { value, changeValue, error, id } = useFormControl({
    ...props,
    rules: [requiredRule, minLengthRule, maxLengthRule, patternRule],
  });

  return (
    <div className="w-full flex flex-col gap-y-2">
      {props.label && (
        <label htmlFor={id} className="center-y gap-x-1 select-none">
          <span>{trans(props.label)}</span>
          {props.optional && (
            <span className="text-gray-450">({trans("optional")})</span>
          )}
        </label>
      )}
      <input
        type={props.type}
        disabled={props.disabled}
        id={id}
        value={value}
        placeholder={trans(props.placeholder || "")}
        onChange={e => changeValue(e.target.value)}
        className={twMerge(
          "p-2 text-zinc-700 border border-gray-150",
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
