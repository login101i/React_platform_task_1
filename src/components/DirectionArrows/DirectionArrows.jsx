import  { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DirectionButton, Wrapper, Container } from "./DirectionArrrows.styles";
import { useMediaQuery } from "react-responsive";
import { screensSizes } from "../../utils/screenSizes";

export const DirectionArrows = ({ children, style }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: screensSizes.sm });
  const withOfwallPaper = 415;
  const wallPapersCount = 13;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else {
      setSlideIndex(slideIndex >= 0 ? slideIndex + 1 : 0);
      if (slideIndex === wallPapersCount) setSlideIndex(0);
    }
  };

  return (
    <Container style={style}>
      {slideIndex > 0 && (
        <DirectionButton direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosNewIcon />
        </DirectionButton>
      )}
      <Wrapper
        slideIndex={slideIndex}
        isMobile={isMobile}
        offset={withOfwallPaper}
      >
        {children}
      </Wrapper>
      <DirectionButton direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </DirectionButton>
    </Container>
  );
};
