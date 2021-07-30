import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  position: absolute;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 18}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Rent = styled.View``;

export const Accessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  padding-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text_detail};
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
`;

export const DateInfo = styled.View``;

export const RentalQuota = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
