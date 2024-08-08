import { FormControlProps, useFormControl } from "@mongez/react-form";

type InputPropsType = {
  props: FormControlProps;
  type: string;
};

export default function Input({ props, type = "text" }: InputPropsType) {
  const { value, changeValue } = useFormControl(props);
  return <input type={type} value={value} onChange={e => changeValue(e)} />;
}
