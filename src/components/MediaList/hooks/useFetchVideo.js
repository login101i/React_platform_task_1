import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, MediaContext } from "../../../context";

export const useFetchVideo = (id) => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(MediaContext);

  const navigate = useNavigate();

  const fetchData = (id) => {
 setIsLoading(true);
    fetch("https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + user?.AuthorizationToken.Token
      },
      body: JSON.stringify({
        MediaId: id,
        StreamType: "TRIAL"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success " + JSON.stringify(data));
        dispatch({
          type: "MEDIA_SUCCESS",
          payload: data
        });
        navigate("/play");
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setIsError(true)
        dispatch({
          type: "MEDIA_SUCCESS",
          payload: error
        });
      });
  };

  return { fetchData, isLoading, isError, data: media };
};
