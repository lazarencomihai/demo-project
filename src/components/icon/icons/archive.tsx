import React from "react";
import { SVGIcon } from "../types";

const Archive: SVGIcon = ({ children, ...props }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V5C2 5.55228 2.44772 6 3 6V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6C13.5523 6 14 5.55228 14 5V3ZM12 5H4H3V3H13V5H12ZM4 13V6H12V13H4ZM6.78431 8.08859C6.58944 7.9536 6.32001 7.97288 6.14645 8.14645C5.95118 8.34171 5.95118 8.65829 6.14645 8.85355L8 10.7071L9.85355 8.85355L9.91141 8.78431C10.0464 8.58944 10.0271 8.32001 9.85355 8.14645L9.78431 8.08859C9.58944 7.9536 9.32001 7.97288 9.14645 8.14645L8 9.293L6.85355 8.14645L6.78431 8.08859Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Archive;
