import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  position: absolute;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

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
  background-color: transparent;
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
