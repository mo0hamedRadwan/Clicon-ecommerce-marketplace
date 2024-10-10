import { FormControlProps, useFormControl } from "@mongez/react-form";

type CheckboxInputPropsType = FormControlProps & {
  label: string;
};

export default function CheckboxInput(props: CheckboxInputPropsType) {
  const { checked, setChecked, error, id } = useFormControl({
    ...props,
    type: "checkbox",
  });
  return (
    <>
      <div className="flex gap-x-1">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
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
