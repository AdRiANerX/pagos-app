import { FC } from "react";
interface Props {
  required?: boolean;
  label: string;
  name: string;
  type: "text" | "number" | "date";
  value: any;
  handleChange: any;
  handleBlur: any;
}

const InputBase: FC<Props> = ({
  required = true,
  label,
  value,
  name,
  type = "text",
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        min={1}
        onChange={handleChange}
        onBlur={handleBlur}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        placeholder="Escribe aquí..."
        required={required}
      />
    </div>
  );
};

export default InputBase;
