import styled from "styled-components";
import { Badge } from "@material-ui/core";

export const Icon = styled.div`
  color: grey;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: red;
  }
`;

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.colors.allegroColor,
    border: `2px solid ${(props) => props.theme.colors.allegroColor}`,
    padding: "0 4px",
    right: -2,
    top: 30,
    color: "white"
  }
}));
