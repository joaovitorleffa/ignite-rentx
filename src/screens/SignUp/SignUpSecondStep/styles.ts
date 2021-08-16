import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeadingContainer = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const TextContainer = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const InputContainer = styled.View`
  margin-top: 8px;
`;

export const FormTitleContainer = styled.View`
  margin-bottom: 24px;
`;
