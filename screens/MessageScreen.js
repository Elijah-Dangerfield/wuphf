import React, { useState } from "react";
import styled from "styled-components";
import SmallFormEntry from "../components/SmallFormEntry";
import LargeFormEntry from "../components/LargeFormEntry";
import AppButton from "../components/AppButton";
import { ScrollView } from "react-native";

const MessageScreen = props => {
  const [sendTo, setSendTo] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ScrollView>
      <Container>
        <Title>WUPHF</Title>
        <SmallFormEntry
          hint="Enter a user to WUPFH"
          title="TO:"
          password={false}
          onChangeText={text => {
            setSendTo(text);
          }}
        />
        <LargeFormEntry
          maxChars={200}
          onChangeText={text => {
            setMessage(text);
          }}
          password={true}
          hint="Enter message"
          title="Message:"
        />
        <ButtonWrapper>
          <AppButton
            title="WUPHF"
            textColor="white"
            backgroundColor="#FC6C00"
            onPress={() => {
              console.log(sendTo);
              console.log(message);
            }}
          />
        </ButtonWrapper>
      </Container>
    </ScrollView>
  );
};

export default MessageScreen;
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
