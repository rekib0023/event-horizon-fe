"use client";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  margin?: string
  [x: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  margin,
  ...props
}) => {
  return (
    <div className={margin}>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        {...props}
      />
    </div>
  );
};

export default InputField;
