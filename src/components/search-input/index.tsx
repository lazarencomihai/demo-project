import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Input from "../input";
import Icon from "../icon";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 7px;
  right: 0;
`;

interface SearchInputProps {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  value,
  name,
  placeholder = "",
  onChange,
}) => {
  return (
    <StyledWrapper>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <StyledIcon name="search" size={24} color="#979797" />
    </StyledWrapper>
  );
};

export default SearchInput;
