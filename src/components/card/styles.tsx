import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import Status from "../status";

export const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 2px 20px 4px #29374a14;
  cursor: pointer;
  background-color: white;
  transition: 0.2s ease-in;
  will-change: background-color;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    background-color: ${colors.hoverBackground};
  }
`;

export const StyledCoverImg = styled.img`
  display: block;
  height: 192px;
  object-fit: cover;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: inherit;
  padding: 16px;
`;

export const StyledTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #475b6b;
`;

export const StyledDate = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #8a9aa8;
`;

export const StyledCardState = styled(Status)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
