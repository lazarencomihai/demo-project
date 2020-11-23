import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0eeff;
  padding: 8px 0;
  outline: none;

  &:focus {
    border-bottom: 1px solid #90c1f8;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 20px;
    padding-left: 3px;
    text-transform: capitalize;
    color: #8a9aa8;
  }
`;

interface InputProps {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const Input: FunctionComponent<InputProps> = ({
  value,
  name,
  placeholder = "",
  onChange,
}) => {
  return (
    <StyledInput
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Input;
