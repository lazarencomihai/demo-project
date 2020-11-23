import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.span`
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;

  &.published {
    color: #17bf0d;
    background-color: #e7ffe6;
  }

  &.draft {
    color: #e6b100;
    background-color: #fef9e6;
  }

  &.deleted {
    color: white;
    background-color: #f9c206;
  }

  &.archived {
    color: red;
    background-color: #f9c20699;
  }
`;

interface StatusProps {
  status: string;
  className?: string;
}

const Status: FunctionComponent<StatusProps> = ({ status, className }) => {
  return (
    <StyledWrapper className={`${className}  ${status.toLowerCase()}`}>
      {status}
    </StyledWrapper>
  );
};

export default Status;
