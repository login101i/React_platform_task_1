import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 80%;
  gap: 28px;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
