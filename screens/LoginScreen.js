import React, { useState } from "react";
import styled from "styled-components";
import SmallFormEntry from "../components/SmallFormEntry";
import AppButton from "../components/AppButton";

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Title>Log In</Title>
      <SmallFormEntry
        hint="Enter username"
        title="Username"
        password={false}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <SmallFormEntry
        onChangeText={text => {
          setPassword(text);
        }}
        password={true}
        hint="Enter password"
        title="Password"
      />
      <ButtonWrapper>
        <AppButton
          title="Log In"
          textColor="white"
          backgroundColor="#FC6C00"
          onPress={() => {
            console.log(username);
            console.log(password);
            props.navigation.push("Message");
          }}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default LoginScreen;
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 42px;
  font-weight: 600;
  margin: 20px 0 20px 20px;
  color: #584798;
`;

const ButtonWrapper = styled.View`
  height: 150px;
  margin-top: 50px;
`;
