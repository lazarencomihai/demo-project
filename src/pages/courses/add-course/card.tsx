import React from "react";
import Icon from "../../../components/icon";
import styled from "@emotion/styled";
import CustomCard from "../../../components/card/custom";

const StyledText = styled.span`
  color: #4b00ff;
`;

const StyledHeaderText = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #001c33;
`;

const StyledDescription = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #8a9aa8;
`;

const AddCourseCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <CustomCard onClick={onClick}>
      <Icon name="plus" size={64} color="#4B00FF" />
      <StyledHeaderText>
        Create <StyledText>new course</StyledText>
      </StyledHeaderText>
      <StyledDescription>
        Increase your sales by starting things out
      </StyledDescription>
    </CustomCard>
  );
};

export default AddCourseCard;
