import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendInfo = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="m-10">
        <h4 className="text-xl font-semibold mb-3">Contact Form</h4>
        <form className="my-4 space-y-4" onSubmit={handleSubmit(sendInfo)}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Name"
            className={`bg-gray-200 p-2 rounded-md outline-none w-full ${
              errors.fullName ? "border border-red-700" : "border-none"
            }`}
            {...register("fullName", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field  required minimum 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field not exceed 20 characters",
              },
            })}
          />
          {errors.fullName && (
            <span className="text-red-800">{errors.fullName.message}</span>
          )}

          <input
            type="text"
            name="subject"
            placeholder="Enter your subject"
            className="bg-gray-200 p-2 rounded-md outline-none  w-full"
            {...register("subject")}
          />
          <textarea
            name="description"
            placeholder="Enter your description"
            id="description"
            className="bg-gray-200 p-2 rounded-md outline-none  w-full"
            {...register("description")}
          ></textarea>
          <button className="px-4 py-3 rounded bg-yellow-400  w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
