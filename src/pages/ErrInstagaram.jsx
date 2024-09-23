import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrInstagaram = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <div className="bg-blue-500 max-w-xl mx-auto p-10 m-10 rounded text-white">
        <h1 className="text-2xl">
          #{status} Instagram Account {statusText}
        </h1>
        <p>
          Sorry Somthing went wroung
          <Link to={"/"}>
            <span className="font-semibold pl-2 underline">
              You Can Go Back Here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrInstagaram;
