import React from "react";
import { useMediaQuery } from "react-responsive";
import { screensSizes } from "../../utils/screenSizes";
import { Flex } from "../Flex/Flex";
import { ButtonContainer } from "./Button.styles";

export const Button = ({
  backGrWhite,
  backGr,
  color,
  style,
  radius,
  title,
  margin,
  children,
  onClick,
  width
}) => {
  const isMobile = useMediaQuery({ maxWidth: screensSizes.md });


  return (
    <ButtonContainer
      {...{
        backGrWhite,
        backGr,
        color,
        style,
        radius,
        title,
        margin,
        children,
        onClick,
        width,
        isMobile
      }}
    >
      <Flex center backGr="inherit">
        {title}
        {children}
      </Flex>
    </ButtonContainer>
  );
};
