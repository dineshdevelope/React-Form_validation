import React from "react";
import { useState } from "react";

const AccardianCard = (props) => {
  const [accardianState, setAccardianState] = useState(false);

  const handleAccardian = () => {
    setAccardianState(!accardianState);
    console.log(`Accardian State : ${accardianState}`);
  };

  return (
    <div>
      <h1
        className="bg-gray-200 p-4 cursor-pointer hover:bg-gray-300 text-sm flex items-center justify-between rounded-t "
        onClick={handleAccardian}
      >
        {props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={"bg-red-500 " + (accardianState ? "rotate-90" : "")}
        >
          <path
            fill="#ffffff"
            d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
          ></path>
        </svg>
      </h1>
      <div
        className={
          "bg-gray-100 p-4 cursor-pointer hover:bg-gray-300 text-sm rounded-b " +
          (accardianState ? "block" : " hidden")
        }
      >
        {props.children ? props.children : props.desc}
      </div>
    </div>
  );
};

export default AccardianCard;
