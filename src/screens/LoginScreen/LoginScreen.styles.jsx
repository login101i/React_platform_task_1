import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;

  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 215, 255, 0.8)
    ),
    url("https://p4.wallpaperbetter.com/wallpaper/207/944/64/popcorn-movie-snack-movietime-wallpaper-preview.jpg");
  background-size: cover;
  background-position: bottom;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  background-color: white;
  border-radius: 6px;

  -webkit-box-shadow: 8px 8px 27px -18px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 27px -18px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 27px -18px rgba(66, 68, 90, 1);
  width: ${(props) => (props.isMobile ? "70%" : "80%")};
`;
export const InputStyled = styled.input`
  width: 295px;
  height: 40px;
`;

export const CloseIconStyled = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 40px;
  left: 40px;
  bottom: 0;
  background-color: rad;
  z-index: 111;
`;
