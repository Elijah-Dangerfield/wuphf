import React, { useState } from "react";
import styled from "styled-components";
import SmallFormEntry from "../components/SmallFormEntry";
import AppButton from "../components/AppButton";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as firebase from "firebase";

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

export function check_if_valid(email = "") {
  if (email == "") {
    return false;
  } else if (email.search("@") == null) {
    return false;
  } else {
    return true;
  }
}

const RegisterScreen = props => {
  const [carrier, setCarrier] = useState(
    ""
  )
  const [info, setInfo] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  var regFail = false;
  return (
    <Container>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
      >
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
        <Picker
          selectedValue={carrier}  
          onValueChange={(itemValue) =>  
          setCarrier(itemValue)}  
          >
          <Picker.Item label="Select Carrier" value="" />  
          <Picker.Item label="AT&T" value="number@txt.att.net" />  
          <Picker.Item label="T-Mobile" value="number@tmomail.net" />  
          <Picker.Item label="Verizon" value="number@vtext.com" />  
          <Picker.Item label="Sprint" value="number@messaging.sprintpcs.com" />  
          <Picker.Item label="Xfinity Mobile" value="number@vtext.com (SMS)" />  
          <Picker.Item label="Metro PCS" value="number@mymetropcs.com" />  
          <Picker.Item label="Cricket" value="number@sms.cricketwireless.net" />  
          <Picker.Item label="Google Fi" value="number@msg.fi.google.com" />  
          <Picker.Item label="Consumer Cellular" value="number@mailmymobile.net" />  
        </Picker>  
        <SmallFormEntry
          hint="Enter a username"
          title="Username"
          password={false}
          onChangeText={text => {
            setInfo({ ...info, username: text });
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
              if(check_if_valid(info.email)){
                if(info.confirmPassword != info.password || info.password === "" || info.password.length < 6){
                  build_alert("Password Error", "Fill out passwords and make sure they match and are at least 6 characters long!")
                }else if(info.username === "" || info.email === "" || info.phone === ""){
                  build_alert("Field Error", "Make sure all fields are filled properly!")
                }else{
                  if(carrier == ""){
                    build_alert("Carrier Error", "Make sure all fields are filled properly!")
                  }else{
                  console.log(info);
                  firebase
                    .auth()
                    .createUserWithEmailAndPassword(info.email, info.password)
                    .catch(err => {
                      console.log("ERR =>", err);
                      build_alert(
                        "Register Error",
                        "This email is already in use!"
                      );
                    })
                    .finally(() => {
                      props.navigation.push("Message");
                    })
                  }
                }
                // props.navigation.push("Message");
              } else {
                build_alert("Email Error", "Email not properly formatted!");
              }
            }}
          />
        </ButtonWrapper>
      </KeyboardAwareScrollView>
    </Container>
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


const Picker = styled.Picker`
 background: rgba(0,0,0,0.1);
 width: 50%;
 align-self: center;
 flex:.5;
 `