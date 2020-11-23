import React, { FunctionComponent } from "react";
import { StyledWrapper } from "../styles";
import Icon from "../../icon";
import styled from "@emotion/styled";

const StyledEmptyCardContainer = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
`;

const CustomCard: FunctionComponent<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledEmptyCardContainer>{children}</StyledEmptyCardContainer>
    </StyledWrapper>
  );
};

export default CustomCard;
