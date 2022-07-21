import styled from "styled-components";

const ratio = 16 / 9;
const imageWidth = 400;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.isMobile ? "0px" : "15px")};
  margin-bottom: ${(props) => (props.isMobile ? "40px" : "")};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const PlayIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
  transition: all 0.5s ease-in-out;

  &: hover ${PlayIconContainer} {
    display: block;
  }
`;

export const Image = styled.img`
  filter: brightness(75%);
  transition: 0.25s all ease-in-out;
  width: ${imageWidth}px;
  height: ${imageWidth / ratio}px;
  max-width: 400px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 15px;
  &:hover {
    filter: brightness(100%);
    transform: scale(1.03);
  }
`;



export const ErrorContainer = styled.div`
  display: absolute;
  width: 50%;
  height: 50%;
  background-color: rgba(210, 98, 156, 0.12);
  opacity: 0.8;
  top: 5%;
  left: 0px;
`;
