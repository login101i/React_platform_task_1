import React, { useContext } from "react";

import { MediaContext } from "../../context";
import { StyledContainer, CloseIconStyled } from "./VideoScreen.styles";
import { Text, CustomIcon } from "../../components";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
export const VideoScreen = () => {
  const { mediaUrl } = useContext(MediaContext);
  const { ContentUrl, Title } = mediaUrl;
  const navigate = useNavigate();

  return (
    <StyledContainer>
      {/* {ContentUrl && <ReactPlayer url={ContentUrl} />} */}
      <Text>
        I can not figure it out how to play this 'mpd' with any player. It seems
        that only that extension dont want work. Please write what to use in
        feedback message :/
      </Text>
      {ContentUrl ? (
        <>
          <Text center wrap size="h8">
            {Title}
          </Text>
          <Text> {ContentUrl}</Text>
        </>
      ) : (
        <Text wrap size="h8">
          There was no url for this movie.
        </Text>
      )}
      <CloseIconStyled>
        <CustomIcon
          icon={CloseIcon}
          color="grey"
          size={42}
          onClick={() => navigate("/")}
        />
      </CloseIconStyled>
    </StyledContainer>
  );
};
