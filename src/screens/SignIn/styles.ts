import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  margin-top: ${RFValue(115)}px;
`;

export const TextContainer = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  margin: ${RFValue(64)}px 0px;
`;

export const PasswordInputContainer = styled.View`
  margin-top: ${RFValue(8)}px;
`;

export const Footer = styled.View``;

export const ButtonContainer = styled.View`
  margin-top: ${RFValue(8)}px;
`;
