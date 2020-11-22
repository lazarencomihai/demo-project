import React from "react";
import styled from "@emotion/styled";
import Icon from "../../../components/icon";
import SearchInput from "../../../components/search-input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { setSearchField } from "../../../store/slices/headerSlice";

const StyledWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 64px;
  padding: 16px 63px 14px 32px;
  background-color: white;
  box-shadow: 0px 2px 20px 4px rgba(41, 55, 74, 0.08);
`;

const Header = () => {
  const { searchField } = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();

  const handleChange = (newValue: string) => {
    dispatch(setSearchField({ value: newValue }));
  };

  return (
    <StyledWrapper>
      <Icon name={"logo"} size={32} />
      <form autoComplete="true">
        <SearchInput
          name="page-search"
          placeholder="search"
          value={searchField}
          onChange={handleChange}
        />
      </form>
    </StyledWrapper>
  );
};

export default Header;
