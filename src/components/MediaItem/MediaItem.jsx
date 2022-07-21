import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Flex, Text, CustomIcon } from "..";
import {
  ImageContainer,
  Image,
  MainContainer,
  PlayIconContainer,
} from "./MediaItem.styles";

import { useMediaQuery } from "react-responsive";
import { screensSizes } from "../../utils/screenSizes";

export const MediaItem = ({ img, title, id, handlePlayer, videoData = [] }) => {
  const isMobile = useMediaQuery({ maxWidth: screensSizes.sm });

  const { MediaId, ContentUrl } = videoData;

  return (
    <MainContainer isMobile={isMobile}>
      <ImageContainer>
        <Image src={img} />
        <PlayIconContainer>
          <CustomIcon
            icon={PlayCircleOutlineIcon}
            color="white"
            size={42}
            onClick={handlePlayer}
          />
        </PlayIconContainer>
      </ImageContainer>
      <Flex column center>
        <Text capitalize wrap size="h6" align>
          {title}
        </Text>
      </Flex>

      <Text wrap size="h8">
        {(MediaId === id && "Wideo URL: " + ContentUrl?.slice(0, 52) + "...") ||
          ""}
      </Text>
   
    </MainContainer>
  );
};
