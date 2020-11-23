import React from "react";
import { SVGIcon } from "../types";

const Logo: SVGIcon = ({ children, ...props }) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="16" fill="#4B00FF" />
    </svg>
  );
};

export default Logo;
