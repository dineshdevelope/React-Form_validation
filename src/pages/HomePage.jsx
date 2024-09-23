import React from "react";
import ProfileCard from "./ProfileCard";
import profileBlog from "../data/profileBlog.json";

const HomePage = () => {
  console.log(profileBlog);

  return (
    <div className="bg-lime-100  mx-auto rounded-lg shadow-lg">
      <h4 className="text-2xl underline font-semibold text-center mb-0 pt-2 text-blue-800 font-serif">
        Cyber Dude Networks Interns Profile
      </h4>
      <div className="grid md:grid-cols- lg:grid-cols-2  md:gap-5">
        {profileBlog.map((item) => {
          return (
            <ProfileCard
              key={item.id}
              name={item.name}
              tasks={item.tasks}
              linkedIn={item.linkedIn}
              instagaram={
                item.instagram === "" ? "errInstagaram" : item.instagram
              }
              github={item.github}
              img={item.github + ".png"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
