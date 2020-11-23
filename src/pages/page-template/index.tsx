import React, { FunctionComponent } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.section`
  width: calc(100% - 95px);
  background-color: #f2f2f2;
`;

const PageTemplate: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <Sidebar /> <StyledContent>{children}</StyledContent>
      </StyledMain>
    </>
  );
};

export default PageTemplate;
