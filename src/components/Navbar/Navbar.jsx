import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";
import { Button, Text } from "..";
import { AuthContext } from "../../context/AuthContext";
import { screensSizes } from "../../utils/screenSizes";
import { useFetchLogoutUser } from "./hooks/useFetchLogoutUser";
import {
  MainContainer,
  Wrapper,
  LogoContainer,
  RightPart
} from "./Navbar.styles";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const isMobile = useMediaQuery({ maxWidth: screensSizes.md });
  const { fetchData } = useFetchLogoutUser();

  return (
    <MainContainer>
      <Wrapper>
        <LogoContainer>
          <Link to="/">
            <Text size={isMobile ? "h7" : "h4"} white>
              Logo
            </Text>
          </Link>
        </LogoContainer>
        <RightPart>
          {user && (
            <>
              <Text size={isMobile ? "h8" : "h5"} white align margin={10}>
                Witaj {user.User.FullName ? user.User.FullName : "user"} !
              </Text>
              <Button onClick={fetchData} margin="0px 10px">Wyloguj</Button>
            </>
          )}
        </RightPart>
      </Wrapper>
    </MainContainer>
  );
};
