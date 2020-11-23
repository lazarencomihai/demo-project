import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledSvg = styled.svg<{ isAbsolute: boolean | undefined }>`
  ${({ isAbsolute }) =>
    isAbsolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

interface SpinnerProps {
  size?: number;
  color?: string;
  isAbsolute?: boolean;
}

const Spinner: FunctionComponent<SpinnerProps> = ({
  size = 40,
  color = "slategray",
  isAbsolute,
}) => {
  return (
    <StyledSvg
      height={size}
      width={size}
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      isAbsolute={isAbsolute}
    >
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(1 1)"
        strokeWidth="2"
      >
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
          <animate
            attributeName="r"
            begin="1.5s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="1.5s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            begin="1.5s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
          <animate
            attributeName="r"
            begin="3s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="3s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            begin="3s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="8">
          <animate
            attributeName="r"
            begin="0s"
            dur="1.5s"
            values="6;1;2;3;4;5;6"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </StyledSvg>
  );
};

export default Spinner;
