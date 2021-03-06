import React from "react";
import styled from "styled-components";

const AppButton = props => (
  <Button
    onPress={() => props.onPress()}
    style={{ backgroundColor: props.backgroundColor }}
  >
    <ButtonText style={{ color: props.textColor }}>{props.title}</ButtonText>
  </Button>
);

export default AppButton;
const Button = styled.TouchableOpacity`
  height: 45%;
  width: 80%;
  margin: 0 auto;
  background: grey;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
