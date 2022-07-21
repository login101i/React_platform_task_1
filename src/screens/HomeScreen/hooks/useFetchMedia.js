import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export const useFetchMedia = (mediaListId) => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://thebetter.bsgroup.eu/Media/GetMediaList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + user?.AuthorizationToken.Token
      },
      body: JSON.stringify({
        MediaListId: mediaListId,
        IncludeCategories: true,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 60
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setMedia(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error("Error:", error);
        alert("Something went wrong, try to login one more time.");
        navigate("/login");
      });
  };
  return { fetchData, isLoading, isError, data: media };
};
