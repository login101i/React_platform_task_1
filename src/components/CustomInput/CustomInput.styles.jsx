import styled from "styled-components";

export const MainContainer = styled.div`
  width: 300px;
  border: ${(props) =>
    props.border ? `3px solid ${props.border}` : "1px solid gray"};
  display: flex;
  background-color: ${(props) =>
    props.backGr ? props.theme.colors[props.backGr] : "white"};
  margin: 15px 0px;
`;

export const Container = styled.input`
  display: flex;
  align-items: center;
  align-self: center;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "px" : "none"};
  height: ${(props) => (props.height ? props.height : "40px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : "grey")};
  align-items: center;
  font-size: 14px;
  white-space: pre-wrap;
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  background-color: inherit;
  outline: none;
  border: none;

  ::placeholder {
    color: ${(props) => props.color};
    font-size: 13px;
    text-align: ${(props) => (props.center ? "center" : "")};
  }
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div``;
