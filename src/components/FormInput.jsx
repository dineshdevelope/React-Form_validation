import React from "react";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  register,
  error,
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
        className="outline-none p-2 bg-indigo-200 w-full  lg:w-1/2"
        required={required}
        {...register}
      />
      {error && <small className="text-red-800 block">{error.message}</small>}
    </div>
  );
};

export default FormInput;
