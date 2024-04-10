import React from "react";

const Card = (props) => {
  return (
    <div className="relative min-w-52 overflow-hidden rounded-2xl shadow-lg group ">
      <img
        className="transition-transform group-hover:scale-110 duration-200"
        src={props.src}
        alt=""
      />
      <p className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent font-semibold text-4xl text-white text-center top-2/4">
        {props.title}
      </p>
    </div>
  );
};

export default Card;
