import { useContext, useState } from "react";

import { AuthContext, MediaContext } from "../../context";
import { Text, MediaItem, DirectionArrows, Flex, Loader } from "..";
import { MainContainer, Container } from "./MediaList.styles";
import { useNavigate } from "react-router-dom";
import { useFetchVideo } from "./hooks/useFetchVideo";

export const ListItem = ({ media, title }) => {
  const { loading } = useContext(AuthContext);
  const [videoData, setVideoData] = useState("");
  console.log(videoData)
  const [isReadyToPlay, setReadyToPlay] = useState(false);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);
  const navigate = useNavigate();


  const {fetchData}=useFetchVideo()

  // const handlePlayer = (id) => {
  //   setVideoData("");
  //   setReadyToPlay(false);
  //   fetch("https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ` + user?.AuthorizationToken.Token
  //     },
  //     body: JSON.stringify({
  //       MediaId: id,
  //       StreamType: "TRIAL"
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVideoData(data);
  //       setReadyToPlay(true);
  //       console.log("Success " + JSON.stringify(data));
  //       dispatch({
  //         type: "MEDIA_SUCCESS",
  //         payload: data
  //       });
  //       navigate("/play");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
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
