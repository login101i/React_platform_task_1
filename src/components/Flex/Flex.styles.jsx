import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.space ? "space-between" : "")};
  align-items: ${(props) => (props.center ? "center" : "")};
  width: ${(props) => (props.width ? props.width : "")};
  background-color: ${(props) =>
    props.backGr ? props.theme.colors[props.backGr] : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: ${(props) => (props.height ? props.height : "")};
  gap: ${(props) => props.gap && props.gap};
  flex-grow: ${(props) => (props.grow ? 1 : "")};
`;
