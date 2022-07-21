import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
  padding: 10px;
  b
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15%;
`;

export const RightPart = styled.div`
  width: 85%;
  display: flex;
  max-width: 620px;
  height: 100%;
  align-items: center;
  justify-content:flex-end;
  
`;
