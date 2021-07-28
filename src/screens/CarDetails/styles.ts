import { getStatusBarHeight } from "react-native-iphone-x-helper";
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
