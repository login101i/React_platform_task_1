import React from "react";
import { MainContainer } from "./Text.styles";

export const Text = ({
  title,
  size,
  uppercase,
  capitalize,
  marginBtm,
  wrap ,
  color,
  white,
  children,
  bold,
  backGr
}) => {
  return (
    <MainContainer
      {...{
        size,
        uppercase,
        capitalize,
        marginBtm,
        title,
        wrap,
        color,
        white,
        bold,
        backGr
      }}
    >
      {children}
    </MainContainer>
  );
};
