import React, { useState } from "react";
import styled from "styled-components";

const LargeFormEntry = props => {
  const [charsLeft, setCharsLeft] = useState(props.maxChars);

  return (
    <Container>
      <Title>{props.title}</Title>
      <Input
        multiline={true}
        maxLength={props.maxChars}
        secureTextEntry={props.password}
        onChangeText={text => {
          setCharsLeft(props.maxChars - text.length);
          props.onChangeText(text);
        }}
        placeholder={props.hint}
      />
      <TextCounter charsLeft={charsLeft}>{charsLeft}</TextCounter>
    </Container>
  );
};
export default LargeFormEntry;
const Container = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  font-size: 18px;
  height: 200px;
  padding: 10px;
  border: black;
  border-radius: 9px;
`;

const TextCounter = styled.Text`
  align-self: flex-end;
  margin-right: 8px;
  color: ${props => (props.charsLeft < 20 ? "red" : "black")};
`;
