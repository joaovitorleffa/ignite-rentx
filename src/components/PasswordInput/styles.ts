import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

interface IconContainerProps extends Props {
  noHaveMargin?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View<IconContainerProps>`
  width: 56px;
  height: 56px;
  margin-right: ${({ noHaveMargin }) => (noHaveMargin ? 0 : 2)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-color: ${theme.colors.main};
    `}
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  position: absolute;
  right: 0px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
