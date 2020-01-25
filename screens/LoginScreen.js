import React, { useState } from "react";
import styled from "styled-components";
import SmallFormEntry from "../components/SmallFormEntry";
import AppButton from "../components/AppButton";
import * as firebase from "firebase";
import { ScrollView, Alert } from "react-native";

export function build_alert(title, msg) {
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var loginFail = false;
  return (
    <ScrollView>
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
              firebase
                .auth()
                .signInWithEmailAndPassword(username, password)
                .catch(err => {
                  console.log(err);
                  build_alert("Login Error", "Error with login credentials!");
                  loginFail = true;
                })
                .finally(() => {
                  if (!loginFail) {
                    props.navigation.push("Message");
                  }
                });
            }}
          />
        </ButtonWrapper>
      </Container>
    </ScrollView>
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
