import React, { FunctionComponent } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  display: flex;
`;

const PageTemplate: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <Sidebar /> <section className="content">{children}</section>
      </StyledMain>
    </>
  );
};

export default PageTemplate;
