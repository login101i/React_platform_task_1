import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const VideoContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(160, 173, 186, 0.8);
  z-index: 111;
`;
