import React from "react";
import { SVGIcon } from "../types";

const Search: SVGIcon = ({ children, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5723 18 14.0236 17.4816 15.1922 16.6064L18.2929 19.7071L18.3871 19.7903C18.7794 20.0953 19.3466 20.0676 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.6064 15.1922C17.4816 14.0236 18 12.5723 18 11C18 7.13401 14.866 4 11 4ZM11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Search;
