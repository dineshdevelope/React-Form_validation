import React from "react";

const FormTextArea = ({
  label,
  name,
  placeholder,
  required,
  error,
  register,
}) => {
  return (
    <div className="space-y-2 my-3">
      <label htmlFor={name} className="block font-semibold">
        {label} {required ? <span className="text-red-500"> *</span> : ""}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="outline-none p-2 bg-indigo-200 w-full lg:w-1/2"
        {...register}
      ></textarea>
      {error && <small className="text-red-800 block">{error.message}</small>}
    </div>
  );
};

export default FormTextArea;
