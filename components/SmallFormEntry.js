import React from "react";
import styled from "styled-components";

const SmallFormEntry = props => (
  <Container>
    <Title>{props.title}</Title>
    <Input
      secureTextEntry={props.password}
      onChangeText={text => props.onChangeText(text)}
      placeholder={props.hint}
    />
  </Container>
);
export default SmallFormEntry;
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
  height: 50px;
  padding: 10px;
  border: black;
  border-radius: 9px;
`;
