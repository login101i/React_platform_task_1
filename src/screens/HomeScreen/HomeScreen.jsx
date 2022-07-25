import { useEffect, useState } from "react";
import { useContext } from "react";
import { ListItem } from "../../components/MediaList/MediaList.jsx";
import { AuthContext, MediaContext } from "../../context";

import { Loader, Flex, Text } from "../../components";
import { StyledContainer } from "./HomeScreen.styles";
import { useNavigate } from "react-router-dom";
import { useFetchMedia } from "./hooks/useFetchMedia";

export const HomeScreen = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    fetchData: fetchFirstLilst,
    isLoading,
    isError,
    data: firstList
  } = useFetchMedia(3);
  const { fetchData: fetchSecondList, data: secondList } = useFetchMedia(4);

  useEffect(() => {
    if (!user) {
      navigate("/splash");
      return;
    }
    fetchFirstLilst();
    fetchSecondList();
  }, []);

  return (
    <StyledContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {firstList && secondList && !isError ? (
            <Flex column center>
              <ListItem media={firstList} title="Top 15" />
              <ListItem media={secondList} title="Recent Movies" />
            </Flex>
          ) : (
            <Text>Something went wrong.</Text>
          )}
        </>
      )}
    </StyledContainer>
  );
};
