import { useContext, useState } from "react";
import { Button, Text } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { MainContainer, Wrapper } from "./SplashScreen.styles";
import { useFetchLoginGuest } from "./hooks/useFetchLoginGuest";
import { useMediaQuery } from "react-responsive";
import { screensSizes } from "../../utils/screenSizes";

export const SplashScreen = () => {
  const { user } = useContext(AuthContext);
  const { fetchData } = useFetchLoginGuest();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: screensSizes.md });

  if (user) {
    navigate("/");
  }

  return (
    <MainContainer>
      <Wrapper isMobile={isMobile}>
        <Button onClick={fetchData} width="300px" backGr="secondary">
          Login as guest
        </Button>
        <Text>or</Text>
        <Button onClick={() => navigate("/login")} width="300px">
          Login as registered user
        </Button>
      </Wrapper>
    </MainContainer>
  );
};
