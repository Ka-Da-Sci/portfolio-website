import { useField } from "formik";
import { FC } from "react";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
}

const TextInput: FC<TextInputProps> = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      {as === "textarea" ? (
        <textarea rows={3} className="text-textarea" {...field} {...props} />
      ) : (
        <input className="text-input" {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <p className="error" style={{'color': 'red', 'fontSize': '0.75rem'}}>{meta.error}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
