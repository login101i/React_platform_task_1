import React, { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Text,
  FormInput,
  CustomInput,
  CustomIcon
} from "../../components";
import { InputStyled, FormStyled, CloseIconStyled } from "./LoginScreen.styles";
import { MainContainer } from "./LoginScreen.styles";
import { useFetchLoginUser } from "./hooks/useFetchLoginUser";
import { validateForm } from "../../utils/validateForm";
import { screensSizes } from "../../utils/screenSizes";
import { useMediaQuery } from "react-responsive";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchData } = useFetchLoginUser(email, password);
  const isMobile = useMediaQuery({ maxWidth: screensSizes.md });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e) === false) return;
    fetchData();
  };

  return (
    <MainContainer>
      <Flex column center>
        <Text title>Use data below to login:</Text>
        <Text size="h6">test@bsgroup.eu</Text>
        <Text size="h6">Test12!@</Text>
        <FormStyled onSubmit={handleSubmit} isMobile={isMobile}>
          <InputStyled
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputStyled
            name="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button width="300px">Submit</Button>
        </FormStyled>
      </Flex>
      <CloseIconStyled>
        <CustomIcon
          icon={ArrowBackIcon}
          color="grey"
          size={42}
          onClick={() => navigate("/splash")}
        />
      </CloseIconStyled>
    </MainContainer>
  );
};
