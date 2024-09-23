import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
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
            className="bg-gray-200 p-2 rounded-md outline-none w-full"
            {...register("fullName", { required: true })}
          />
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
