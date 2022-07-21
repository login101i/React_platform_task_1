import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { SplashScreen } from "./screens/SplashScreen/SpashScreen";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { VideoScreen } from "./screens/VideoScreen/VideoScreen";

import { appTheme } from "./utils/theme";
import { Navbar } from "./components";
import { Container } from "./App.styles";
import { screensSizes } from "./utils/screenSizes";
export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: screensSizes.md });

  return (
    <ThemeProvider theme={appTheme}>
      <Container isMobile={isMobile}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/splash" element={<SplashScreen />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/play" element={<VideoScreen />} exact />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};
