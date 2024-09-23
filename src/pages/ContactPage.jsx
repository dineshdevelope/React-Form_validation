import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";

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
          <FormInput
            label="Full Name"
            name="fullName"
            placeholder="Enter your Fullname"
            type="text"
            register={register("fullName", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field is required minimum 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field not exceed morethen 20 characters",
              },
            })}
            error={errors.fullName}
          />
          <FormInput
            label="Age"
            name="Age"
            placeholder="Enter your Age"
            type="number"
            register={register("Age", {
              required: "This field is required",
              min: {
                value: 18,
                message: "Age should be minimum 18",
              },
              max: {
                value: 60,
                message: "Age should not exceed 60",
              },
            })}
            error={errors.Age}
          />

          <FormTextArea
            id="textArea"
            name="textArea"
            label="Enter your description"
            placeholder="Enter your message briefly"
            register={register("textArea", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: "This field required minimum 20 characters",
              },
              maxLength: {
                value: 200,
                message: "This field allowed maximum 200 characters",
              },
            })}
            error={errors.textArea}
          />
          <button className="px-4 py-3 rounded bg-yellow-400 ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
