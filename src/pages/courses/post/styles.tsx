import styled from "@emotion/styled";

export const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const StyledHoverContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 320px;
  min-width: 320px;
  cursor: pointer;
`;

export const StyledHoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledHoverSection = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgb(244 243 244 / 0.92);
  width: 100%;
  padding: 36px 33px;
  box-shadow: 0px -39px 22px 43px rgba(244, 243, 244, 0.5);
`;

export const StyledCourseTitle = styled.h2`
  font-size: 22px;
  line-height: 36px;
  margin: 0;
  color: #001c33;
`;

export const StyledCourseTime = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #8a9aa8;
`;

export const StyledArticleContainer = styled.div`
  display: flex;
  padding: 56px 35px;
  width: 100%;
`;

export const StyledArticleLeft = styled.div`
  width: 65%;
`;

export const StyledArticleRight = styled.div`
  width: 35%;
  padding: 0 15px;
`;
