import React from "react";
import styled from "styled-components";

import { Text } from "../Text/Text";

const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  background-color: rgba(210, 98, 156, 0.12);
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const PopUp = ({ title }) => {
  return (
    <Container>
      <Text> to jest wiadomość{title}</Text>
    </Container>
  );
};
