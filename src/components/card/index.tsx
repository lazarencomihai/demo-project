import React, { FunctionComponent } from "react";
import ActionMenu from "../action-menu";
import {
  StyledCardState,
  StyledContent,
  StyledCoverImg,
  StyledDate,
  StyledTitle,
  StyledWrapper,
} from "./styles";

interface CardProps {
  id: string | number;
  coverImg: string;
  title: string;
  date: string;
  state: string;
  onClick?: (id: string | number) => void;
}

const Card: FunctionComponent<CardProps> = ({
  id,
  title,
  date,
  state,
  coverImg,
  onClick,
}) => {
  return (
    <StyledWrapper
      onClick={() => {
        onClick && onClick(id);
      }}
    >
      <StyledCardState status={state} />
      <StyledCoverImg src={coverImg} alt="cover" loading="lazy" />
      <StyledContent>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </div>
        <ActionMenu items={[]} />
      </StyledContent>
    </StyledWrapper>
  );
};

export default Card;
