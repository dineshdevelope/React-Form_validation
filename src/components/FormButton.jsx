import React from "react";

const FormButton = ({ buttonText }) => {
  return (
    <button className="bg-blue-500 p-2 rounded-md text-white hover:text-black">
      {buttonText}
    </button>
  );
};

export default FormButton;
