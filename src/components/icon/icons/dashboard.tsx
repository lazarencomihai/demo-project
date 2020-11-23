import React from "react";
import { SVGIcon } from "../types";

const Dashboard: SVGIcon = ({ children, ...props }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2887 11.2971C24.6769 10.9043 25.31 10.9005 25.7029 11.2887C26.0655 11.647 26.0966 12.214 25.794 12.6082L25.7113 12.7029L18.7947 19.7029C18.4067 20.0955 17.7822 20.0953 17.394 19.7246L17.3088 19.6325L13.925 15.489L7.70711 21.7071C7.34662 22.0676 6.77939 22.0953 6.3871 21.7903L6.29289 21.7071C5.93241 21.3466 5.90468 20.7794 6.2097 20.3871L6.29289 20.2929L13.2929 13.2929C13.6816 12.9042 14.3031 12.9063 14.6897 13.2757L14.7745 13.3675L18.154 17.506L24.2887 11.2971Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Dashboard;
