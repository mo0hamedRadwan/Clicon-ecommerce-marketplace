import { FormControlProps, useFormControl } from "@mongez/react-form";

type CheckboxInputPropsType = FormControlProps & {
  label: string;
};

export default function CheckboxInput(props: CheckboxInputPropsType) {
  const { value, changeValue, error, id } = useFormControl(props);
  return (
    <>
      <div className="flex gap-x-1">
        <input
          type="checkbox"
          id={id}
          value={value}
          onChange={e => changeValue(e.target.value)}
          className="accent-orange-600 checked:text-white"
        />
        <label htmlFor={id} className="cursor-pointer select-none">
          {props.label}
        </label>
      </div>
      {error && (
        <span
          style={{
            color: "red",
          }}>
          {error}
        </span>
      )}
    </>
  );
}
