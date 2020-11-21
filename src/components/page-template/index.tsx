import React, { FunctionComponent } from "react";
import Header from "./header";

const PageTemplate: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageTemplate;
