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
  const { value, changeValue, error } = useFormControl({
    ...props,
    rules: [requiredRule, minLengthRule, maxLengthRule, patternRule],
  });

  return (
    <div className="w-full flex flex-col gap-y-2">
      {props.label && (
        <label className="center-y gap-x-1">
          <span>{trans(props.label)}</span>
          {props.optional && (
            <span className="text-gray-450">({trans("optional")})</span>
          )}
        </label>
      )}
      <input
        type={props.type}
        value={value}
        placeholder={trans(props.placeholder || "")}
        onChange={e => changeValue(e.target.value)}
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
