import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
`;
