import React from "react";
import AccardianCard from "../components/AccardianCard";

const AboutPage = () => {
  return (
    <div className="px-10 space-y-4">
      <h1 className="pt-3">FAQ</h1>
      <div className="space-y-10">
        <AccardianCard
          title="Is this Internship free?"
          desc="Yes,this internship is fully free"
        />
        <AccardianCard
          title="How much duration in this internship?"
          desc="six months duration this internshiop"
        />

        <AccardianCard title="What is Props ? (With Children)">
          <p className="p-5">
            props is a argument object of the component which contains the
            propertiess
          </p>
          <p className="p-5">
            If you want more properties you can speciafy a chiuldren then call
            it like this you can put any values here like number,input,picture
            ...
          </p>
          <img
            src="https://github.com/dineshdevelope.png"
            alt="Profile Picture"
            className="rounded-full"
          />
        </AccardianCard>
      </div>
    </div>
  );
};

export default AboutPage;
