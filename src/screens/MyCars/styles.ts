import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  justify-content: center;
  height: ${RFPercentage(40)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const TitleContent = styled.View`
  margin: 24px 0px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 16px;
`;

export const Appointments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  margin-top: -10px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
  margin: 0 16px;
`;
