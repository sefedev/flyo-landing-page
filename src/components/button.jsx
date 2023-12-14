import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`text-white bg-gradient-to-r from-cyan to-blue py-4 px-16 font-semibold rounded-full ${className} hover:from-cyan hover:to-cyan transition duration-200 `}
    >
      {title}
    </button>
  );
};

export default Button;
