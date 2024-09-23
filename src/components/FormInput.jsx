import React from "react";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleOnchange,
  required,
}) => {
  return (
    <div className="space-y-2 my-3">
      <label htmlFor={name} className="block font-semibold">
        {label} {required ? <span className="text-red-500"> *</span> : ""}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnchange}
        className="outline-none p-2 bg-indigo-200 w-full  lg:w-1/2"
        required={required}
      />
    </div>
  );
};

export default FormInput;
