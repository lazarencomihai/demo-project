import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledWrapper = styled.div`
  display: flex;
`;

const FilterOption = styled.div<{ isActive: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #8a9aa8;
  padding: 0 15px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: #4b00ff;
    `}

  &:last-of-type {
    padding-right: 0;
    border-left: 1px solid #cddae4;
  }
`;

interface FilterProps {
  items: Array<string>;
  activeItem: string;
  onChange: (newValue: string) => void;
}
const Filter: FunctionComponent<FilterProps> = ({
  items,
  activeItem,
  onChange,
}) => {
  return (
    <StyledWrapper>
      {items.map((item) => (
        <FilterOption
          key={`key-${item}`}
          isActive={item.toLowerCase() === activeItem.toLowerCase()}
          onClick={() => {
            onChange(item);
          }}
        >
          {item}
        </FilterOption>
      ))}
    </StyledWrapper>
  );
};

export default Filter;
