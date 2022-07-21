import {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';


export const useFetchLogoutUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {  dispatch } = useContext(AuthContext);


  const navigate = useNavigate();

  const fetchData = () => {
    setIsLoading(true);

    dispatch({ type: "LOGOUT" });
    navigate("/splash");
  };

  return { fetchData, isLoading, isError };
};
