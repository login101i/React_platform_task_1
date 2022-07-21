import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";

export const useFetchLoginUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = (email, password) => {
    setIsLoading(true);
    dispatch({ type: "LOGIN_START" });
    fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: email,
        Password: password,
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.MessageKey === "INVALID_USER_OR_PASSWORD") {
          alert(
            "Nazwa użytkownika lub hasło jest nieprawidłowe. Spróbuj ponownie."
          );
          return;
        }
        setIsLoading(false);
        setIsError(false);
        setLoggedUser(data);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data
        });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error("Error:", error);
        dispatch({ type: "LOGIN_FAILURE", payload: error });
      });
  };
  return { fetchData, isLoading, isError, userCrentials: loggedUser };
};
