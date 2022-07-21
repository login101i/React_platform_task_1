import React from "react";

import { Container } from "./Flex.styles";

export const Flex = ({
  column,
  space,
  width,
  height,
  backGr,
  margin,
  center,
  gap,
  grow,
  children
}) => {
  return (
    <Container
      {...{
        column,
        space,
        width,
        height,
        backGr,
        margin,
        center,
        gap,
        grow,
        children
      }}
    >
      {children}
    </Container>
  );
};
