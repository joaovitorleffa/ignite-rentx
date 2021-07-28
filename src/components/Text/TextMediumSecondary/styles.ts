import { RFValue } from "react-native-responsive-fontsize";
import { TextStyleProps } from "../../types/styles.types";
import styled from "styled-components/native";

export const Text = styled.Text<TextStyleProps>`
  font-size: ${({ size }) => size ?? RFValue(15)}px;
  text-align: ${({ textAlign }) => textAlign ?? "left"};
  font-family: ${({ theme }) => theme.fonts.secondary500};
  color: ${({ theme, color }) => color ?? theme.colors.text};
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
`;
