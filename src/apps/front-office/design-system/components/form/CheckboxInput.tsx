import { FormControlProps, useFormControl } from "@mongez/react-form";

type CheckboxInputPropsType = FormControlProps & {
  label: string;
};

export default function CheckboxInput(props: CheckboxInputPropsType) {
  const { value, changeValue, error } = useFormControl(props);
  return (
    <>
      <div className="flex gap-x-1">
        <input
          type="checkbox"
          value={value}
          onChange={e => changeValue(e.target.value)}
        />
        <label>{props.label}</label>
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
