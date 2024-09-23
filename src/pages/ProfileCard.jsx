import React from "react";
import PropTypes from "prop-types";
const ProfileCard = ({
  name = "User",
  tasks,
  linkedIn,
  instagaram,
  github,
  img,
}) => {
  return (
    <div className="bg-green-100 text-center space-y-2 p-5 m-5 rounded-xl">
      <img
        src={img}
        alt="Profile-Photo"
        className=" w-36 h-36 object-cover rounded-full mx-auto "
      />
      <h1 className="font-semibold pt-1 text-xl ">{name}</h1>
      <h1>Junior Full-Stack Engineer </h1>

      <div className="flex justify-center space-x-3">
        <a href={tasks} target="_blank">
          <button className="flex justify-center items-center bg-blue-500 p-2 rounded-md space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
                <rect width="5" height="2.5" x="4.5" y=".5" rx="1" />
                <path d="M7 6v4m2-2H5" />
              </g>
            </svg>
            <h1 className="text-white">Tasks</h1>
          </button>
        </a>
        <a href={linkedIn} target="_blamnk">
          <button className="flex justify-center items-center bg-blue-500 p-2 rounded-md space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
            <h1 className="text-white">LinkedIn</h1>
          </button>
        </a>
        <a href={instagaram} target="_blank">
          <button className="flex justify-center items-center bg-blue-500 p-2 rounded-md space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <h1 className="text-white">Instagram</h1>
          </button>
        </a>
      </div>
      <a
        className="bg-blue-400 flex items-center  w-full p-1 justify-center gap-2 rounded-md cursor-pointer"
        href={github}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14a.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028a1.83 1.83 0 0 0-.542-.875a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284a2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604q0-.392-.09-.773a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26a7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.342a4.5 4.5 0 0 0-.705-.261a2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.763q-.08.382-.081.773q0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.3a2.9 2.9 0 0 1-.752-.824a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343a1.8 1.8 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333q.169.148.3.33q.136.178.231.381q.11.2.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"
          />
        </svg>
        <h1 className="text-white font-semibold"> Github</h1>
      </a>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string,
};
export default ProfileCard;
