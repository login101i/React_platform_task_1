import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(54, 157, 153, 0.3)),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

export const ContainerForm = styled.form`
  background-color: white;
  border-radius: 6px;
  width: 331px;
  paddgin: 20px;
`;
