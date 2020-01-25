import React from "react";
import styled from "styled-components";
import wuphf_logo from "../assets/wuphf_logo.png";
import { NavigationEvents } from "react-navigation";

const StartScreen = props => {
  const navigate = () => {
    props.navigation.push("Login");
  };

  const getNavigationButton = (title, textColor, buttonColor, destination) => (
    <GameButton
      onPress={() => props.navigation.push(destination)}
      style={{ backgroundColor: buttonColor }}
    >
      <GameButtonText style={{ color: textColor }}>{title}</GameButtonText>
    </GameButton>
  );

  return (
    <Container>
      <Logo source={wuphf_logo}></Logo>
      <ButtonsWrapper>
        {getNavigationButton("Log In", "white", "#FC6C00", "Login")}
        {getNavigationButton("Sign Up", "white", "#584798", "Register")}
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

const GameButton = styled.TouchableOpacity`
  height: 45%;
  width: 80%;
  margin: 0 auto;
  background: grey;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const GameButtonText = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
