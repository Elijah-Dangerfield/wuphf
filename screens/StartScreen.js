import React from "react";
import styled from "styled-components";
import wuphf_logo from "../assets/wuphf_logo.png";
import { NavigationEvents } from "react-navigation";
import AppButton from "../components/AppButton";

const StartScreen = props => {
  const navigate = () => {
    props.navigation.push("Login");
  };
  return (
    <Container>
      <Logo source={wuphf_logo}></Logo>
      <ButtonsWrapper>
        <AppButton
          title="Log In"
          textColor="white"
          backgroundColor="#FC6C00"
          onPress={() => {
            props.navigation.push("Login");
          }}
        />
        <AppButton
          title="Sign Up"
          textColor="white"
          backgroundColor="#584798"
          onPress={() => {
            props.navigation.push("Register");
          }}
        />
      </ButtonsWrapper>
    </Container>
  );
};

export default StartScreen;

const ButtonsWrapper = styled.View`
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 20%;
  margin-bottom: 100px;
`;
const Logo = styled.Image`
  width: 90%;
  height: 160px
  margin-top: 100px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  background: white;
  position: relative;
  align-items: center;
`;
