import React from "react";
import { Link } from "react-router-dom";

const Notices = (props) => {
  return (
    <div>
      <div>
        <p className="text-blue-700 font-semibold text-lg">{props.type}</p>
        <p className="text-3xl font-bold mt-2">{props.title}</p>
        <p className="text-gray-500 mt-2">{props.date}</p>
        <p className="mt-2 text-lg">{props.description}</p>
        <Link to="/notice-and-news">
          <p className="mt-1 text-blue-500 underline">{props.link}</p>
        </Link>
      </div>
    </div>
  );
};

export default Notices;
