import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: ${(props) =>
    props.isMobile ? "200px" : props.width ? props.width : "200px"};
  height: ${(props) => (props.isMobile ? "40px" : "50px")};
  color: ${(props) =>
    props.backGrWhite ? props.theme.colors.primary : props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backGrWhite
      ? "white"
      : props.backGr
      ? props.theme.colors[props.backGr]
      : props.theme.colors.primary};
  margin: ${(props) => (props.margin ? props.margin : "4px 0px")};

  padding: 5px 20px;
  border: ${(props) =>
    props.backGrWhite ? props.theme.colors.secondary : "white"};
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "white")};
  border-radius: ${(props) => (props.radius ? props.radius : "4px")};
  font-size: ${(props) => (props.isMobile ? "13px" : "20px")};
`;
