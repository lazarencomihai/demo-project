import React from "react";
import { SVGIcon } from "../types";

const Plus: SVGIcon = ({ children, ...props }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <g filter="url(#filter0_d)">
          <rect x="-112" y="-64" width="288" height="256" rx="8" fill="white" />
        </g>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 14C33.0257 14 33.871 14.7721 33.9865 15.7668L34 16V29.998L48 30C49.1046 30 50 30.8954 50 32C50 33.0257 49.2279 33.871 48.2332 33.9865L48 34L34 33.998V48C34 49.1046 33.1046 50 32 50C30.9743 50 30.129 49.2279 30.0135 48.2332L30 48V33.998L16 34C14.8954 34 14 33.1046 14 32C14 30.9743 14.7721 30.129 15.7668 30.0135L16 30L30 29.998V16C30 14.8954 30.8954 14 32 14Z"
        fill="#4B00FF"
      />
      <defs>
        <filter
          id="filter0_d"
          x="-136"
          y="-86"
          width="336"
          height="304"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.160403 0 0 0 0 0.216261 0 0 0 0 0.289732 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="288"
            height="256"
            fill="white"
            transform="translate(-112 -64)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Plus;
