import { trans } from "@mongez/localization";
import { FormControlProps, useFormControl } from "@mongez/react-form";
import { twMerge } from "tailwind-merge";

type TextareaInputPropsType = FormControlProps & {
  className?: string;
  label?: string;
  optional?: boolean;
};

export default function TextareaInput(props: TextareaInputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

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
      <textarea
        value={value}
        placeholder={props.placeholder}
        onChange={e => changeValue(e.target.value)}
        rows={6}
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
