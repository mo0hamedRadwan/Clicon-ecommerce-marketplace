import { trans } from "@mongez/localization";
import { FormControlProps, useFormControl } from "@mongez/react-form";

type RatioInputPropsType = FormControlProps & {
  label: string;
  className?: string;
};

export default function RatioInput(props: RatioInputPropsType) {
  const { value, changeValue, error, id } = useFormControl(props);
  return (
    <div className={props.className}>
      <label htmlFor={id} className="text-center">
        {trans(props.label)}
      </label>

      <div className="w-4 h-4 flex-center">
        <input
          type="radio"
          id={id}
          name={props.name}
          value={value}
          onChange={e => changeValue(e.target.value)}
          className="appearance-none w-4 h-4 bg-transparent ring-1 ring-gray-300 checked:w-2 checked:h-2 checked:ring-4 checked:ring-orange-450 rounded-full cursor-pointer"
        />
      </div>

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
