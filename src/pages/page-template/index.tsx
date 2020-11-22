import React, { FunctionComponent } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
`;

const StyledContent = styled.section`
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
