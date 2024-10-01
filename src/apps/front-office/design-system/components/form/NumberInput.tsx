import {
  FormControlProps,
  maxRule,
  minRule,
  numberRule,
  useFormControl,
} from "@mongez/react-form";
import { twMerge } from "tailwind-merge";

type NumberInputPropsType = FormControlProps & {
  className?: string;
  label?: string;
};

export default function NumberInput(props: NumberInputPropsType) {
  const { value, changeValue, error } = useFormControl({
    ...props,
    rules: [numberRule, minRule, maxRule],
  });

  return (
    <div className="max-w-[150px] flex flex-col gap-y-2">
      {props.label && <label></label>}
      <input
        //https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
        type="number"
        placeholder={props.placeholder}
        value={value}
        onChange={e => changeValue(e.target.value)}
        className={twMerge(
          "p-2 text-black border border-gray-150 rounded",
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
