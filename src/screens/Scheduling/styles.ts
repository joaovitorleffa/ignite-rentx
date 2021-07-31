import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: center;
  height: ${RFPercentage(40)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 32px 0px;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const Wrapper = styled.View<DateProps>`
  ${({ selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-color: ${({ theme }) => theme.colors.text};
      padding-bottom: 5px;
    `}
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary500};
  color: ${({ theme }) => theme.colors.heading};
  padding-bottom: 5px;
`;

export const TitleContent = styled.View`
  margin-top: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  },
})``;

export const Footer = styled.View`
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
