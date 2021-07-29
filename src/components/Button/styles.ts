import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  padding: 19px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => color ?? theme.colors.main};
`;
