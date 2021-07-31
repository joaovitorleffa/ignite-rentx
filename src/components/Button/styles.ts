import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

interface ButtonProps {
  color?: string;
  isLoading?: boolean;
  enabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  padding: 19px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => color ?? theme.colors.main};
  opacity: ${({ enabled, isLoading }) => (!enabled && isLoading ? 0.5 : 1)};
`;
