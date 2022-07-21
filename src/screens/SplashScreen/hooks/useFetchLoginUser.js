import { useState } from "react";

import { useNavigate } from "react-router-dom";

const handleSubmit = (email, password) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [media, setMedia] = useState([]);

  const fetchData = () => {
    dispatch({ type: "LOGIN_START" });
    fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: "test@bsgroup.eu",
        Password: "Test12!@",
        Device: {
          PlatformCode: "WEB",
          Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "LOGIN_FAILURE", payload: error });
        alert("Something went wrong, check your internet connection.");
      });
  };
};
