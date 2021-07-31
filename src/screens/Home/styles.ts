import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { CarDTO } from "../../dtos/CardDTO";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: ${RFPercentage(15)}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const Total = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary400};
`;

export const CardList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
    paddingBottom: RFPercentage(15) + getBottomSpace(),
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  z-index: 1000;
  elevation: 1000;
  bottom: ${RFPercentage(15) + RFValue(13)}px;
  right: ${RFValue(22)}px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.main_light};
`;
