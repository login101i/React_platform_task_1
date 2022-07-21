import styled from "styled-components";

export const MainContainer = styled.div`
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.title
      ? props.theme.fontSizes.h5
      : "14px"};
  text-transform: ${(props) =>
    props.uppercase ? "uppercase" : props.capitalize ? "capitalize" : ""};
  color: ${(props) =>
    props.white
      ? props.theme.colors.text.primary
      : props.color
      ? props.theme.colors.text[props.color]
      : props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) =>
    props.marginBtm ? props.theme.space[props.marginBtm] : ""};
  white-space: pre-wrap;
 
  background-color: ${(props) => (props.backGr ? props.backGr : "")};
  font-weight: ${(props) => props.bold && "900"};
  text-align: center;
  text-align: ${(props) => (props.center ? "center" : "")};
`;
