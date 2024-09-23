import React, { useState } from "react";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormTextArea from "../components/FormTextArea";

const ContactPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    description: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const submitFormToServer = (e) => {
    e.preventDefault();
    alert("Form Submit Sucessfully");
    console.log(form);
  };
  return (
    <form action="" onSubmit={submitFormToServer}>
      <div className="m-10">
        <h4 className="text-xl font-semibold mb-3">Contact Form</h4>
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your Name"
          value={form.fullName}
          handleOnchange={handleInputs}
          required
        />
        <FormInput
          label="E-mail Address "
          name="emailAddress"
          type="email"
          placeholder="Enter your E-mail Address"
          value={form.emailAddress}
          handleOnchange={handleInputs}
          required
        />

        <FormTextArea
          label="Enter your Description "
          name="description"
          id="description"
          placeholder="Enter your Comments"
          value={form.description}
          handleOnchange={handleInputs}
          required
        />
        <FormButton buttonText="Submit" />
      </div>
    </form>
  );
};

export default ContactPage;
