import { useContext, useState } from "react";

import { AuthContext } from "../../context";
import { Text, MediaItem, DirectionArrows, Flex, Loader } from "..";
import { MainContainer, Container } from "./MediaList.styles";
import { useNavigate } from "react-router-dom";
import { useFetchVideo } from "./hooks/useFetchVideo";

export const ListItem = ({ media, title }) => {
  const { loading } = useContext(AuthContext);
  const [videoData, setVideoData] = useState("");
  const {fetchData}=useFetchVideo()

  return (
    <MainContainer>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Text size="h4" marginBtm={2}>
            {title}
          </Text>
          <Flex column>
            <DirectionArrows>
              {media.Entities?.slice(0,15).map((entity, index) => (
                <MediaItem
                  key={index}
                  img={
                    entity.Images[0]?.Url ||
                    "https://p4.wallpaperbetter.com/wallpaper/207/944/64/popcorn-movie-snack-movietime-wallpaper-preview.jpg"
                  }
                  title={entity.Title}
                  id={entity.Id}
                  handlePlayer={() => fetchData(entity.Id)}
                  videoData={videoData}
                />
              ))}
            </DirectionArrows>
          </Flex>
        </Container>
      )}
    </MainContainer>
  );
};
