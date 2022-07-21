import React from "react";

import { MainContainer, Container, LeftContainer } from "./CustomInput.styles";

export const CustomInput = ({
  width,
  backGr,
  color,
  wrap,
  placeholder,
  center,
  onClick,
  border,
  onChange
}) => {
  return (
    <MainContainer {...{ backGr, onClick, border }}>
      <Container
        {...{
          borderRadius: "8px",
          width,
          height: "50px",
          backGr,
          color,
          wrap,
          placeholder,
          center,
          onClick,
          border,
          onChange
        }}
      />
    </MainContainer>
  );
};
