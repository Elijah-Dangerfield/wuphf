import React, { useState } from "react";
import styled from "styled-components";
import SmallFormEntry from "../components/SmallFormEntry";
import AppButton from "../components/AppButton";
import { ScrollView } from "react-native";
import * as firebase from "firebase"

const RegisterScreen = props => {
  const [info, setInfo] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <ScrollView>
      <Container>
        <Title>Register</Title>
        <SmallFormEntry
          hint="Enter your email"
          title="Email"
          password={false}
          onChangeText={text => {
            setInfo({ ...info, email: text });
          }}
        />
        <SmallFormEntry
          hint="Enter your phone number"
          title="Phone Number"
          password={false}
          onChangeText={text => {
            setInfo({ ...info, phone: text });
          }}
        />
        <SmallFormEntry
          hint="Enter a password"
          title="Password"
          password={true}
          onChangeText={text => {
            setInfo({ ...info, password: text });
          }}
        />
        <SmallFormEntry
          hint="re-enter password"
          title="Confirm Password"
          password={true}
          onChangeText={text => {
            setInfo({ ...info, confirmPassword: text });
          }}
        />
        <ButtonWrapper>
          <AppButton
            title="Register"
            textColor="white"
            backgroundColor="#FC6C00"
            onPress={() => {
              console.log(info);
              firebase.auth().createUserWithEmailAndPassword(info.email, info.password)
              // props.navigation.push("Message");
            }}
          />
        </ButtonWrapper>
      </Container>
    </ScrollView>
  );
};

export default RegisterScreen;
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
