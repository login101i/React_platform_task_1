import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";

export const useFetchLoginGuest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [media, setMedia] = useState([]);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = () => {
    setIsLoading(true);
    dispatch({ type: "LOGIN_START" });
    fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.MessageKey === "UNAUTHORIZED") return;
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "LOGIN_FAILURE", payload: error });

      });
  };
  return { fetchData, isLoading, isError, data: media };
};
