import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 215, 255, 0.8)
    ),
    url("https://p4.wallpaperbetter.com/wallpaper/207/944/64/popcorn-movie-snack-movietime-wallpaper-preview.jpg");
  background-size: cover;s
  background-position: bottom;
`;
export const Wrapper = styled.div`
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
  width: ${(props) => (props.isMobile ? "60%" : "30%")};
`;

export const ContainerForm = styled.form`
  background-color: white;
  border-radius: 6px;
  width: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
