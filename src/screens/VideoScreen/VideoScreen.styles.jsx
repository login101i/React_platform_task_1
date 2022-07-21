import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 111;
  position: relative;
`;

export const CloseIconStyled = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 40px;
  right: 40px;
  bottom: 0;
  background-color: rad;
  z-index: 111;
`;
