import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchama = z.object({
  fullName: z.string().min(3).max(20),
  Age: z.string(),
  textArea: z.string().min(10).max(200),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchama) });
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
            register={register("fullName")}
            error={errors.fullName}
          />
          <FormInput
            label="Age"
            name="Age"
            placeholder="Enter your Age"
            type="number"
            register={register("Age")}
            error={errors.Age}
          />

          <FormTextArea
            id="textArea"
            name="textArea"
            label="Enter your description"
            placeholder="Enter your message briefly"
            register={register("textArea")}
            error={errors.textArea}
          />
          <button className="px-4 py-3 rounded bg-yellow-400 ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
